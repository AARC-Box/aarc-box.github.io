import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useState, useEffect, useRef } from "react";

const UserCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    align-content:center;
    justify-content:center;
    width: 22vw;
    height: 80vh;
    border-radius: 1.5em;
    box-shadow: .5em .2em 1.5em white;
    margin: 10px;
    background: black;
    border-style:solid;
    border-color:white;
    
    animation: ${props => props.entryDir ==='Up' ? 'slide-up-fade-in':'slide-down-fade-in'} ease 2s;
    animation-iteration-count: 1;
    transform-origin: 50% 50%;
    animation-fill-mode:forwards; /*when the spec is finished*/
    -webkit-animation: ${props => props.entryDir ==='Up' ? 'slide-up-fade-in':'slide-down-fade-in'} ease 2s;
    -webkit-animation-iteration-count: 1;
    -webkit-transform-origin: 50% 50%;
    -webkit-animation-fill-mode:forwards; /*Chrome 16+, Safari 4+*/ 
    -moz-animation: ${props => props.entryDir ==='Up' ? 'slide-up-fade-in':'slide-down-fade-in'} ease 2s;
    -moz-animation-iteration-count: 1;
    -moz-transform-origin: 50% 50%;
    -moz-animation-fill-mode:forwards; /*FF 5+*/
    -o-animation: ${props => props.entryDir ==='Up' ? 'slide-up-fade-in':'slide-down-fade-in'} ease 2s;
    -o-animation-iteration-count: 1;
    -o-transform-origin: 50% 50%;
    -o-animation-fill-mode:forwards; /*Not implemented yet*/
    -ms-animation: ${props => props.entryDir ==='Up' ? 'slide-up-fade-in':'slide-down-fade-in'} ease 2s;
    -ms-animation-iteration-count: 1;
    -ms-transform-origin: 50% 50%;
    -ms-animation-fill-mode:forwards; /*IE 10+*/

    opacity:0;
    opacity: 1\9;
    @keyframes slide-up-fade-in{
        0% {
            opacity:0;
            transform:  translate(0px,80px)  ;
        }
        100% {
            opacity:1;
            transform:  translate(0px,0px)  ;
        }
    }

    @keyframes slide-down-fade-in{
        0% {
            opacity:0;
            transform:  translate(0px,-80px)  ;
        }
        100% {
            opacity:1;
            transform:  translate(0px,0px)  ;
        }
    }
    
    @-moz-keyframes slide-up-fade-in{
        0% {
            opacity:0;
            -moz-transform:  translate(0px,80px)  ;
        }
        100% {
            opacity:1;
            -moz-transform:  translate(0px,0px)  ;
        }
    }

    @-moz-keyframes slide-down-fade-in{
        0% {
            opacity:0;
            -moz-transform:  translate(0px,-80px)  ;
        }
        100% {
            opacity:1;
            -moz-transform:  translate(0px,0px)  ;
        }
    }
    
    @-webkit-keyframes slide-up-fade-in {
        0% {
            opacity:0;
            -webkit-transform:  translate(0px,80px)  ;
        }
        100% {
            opacity:1;
            -webkit-transform:  translate(0px,0px)  ;
        }
    }

    @-webkit-keyframes slide-down-fade-in {
        0% {
            opacity:0;
            -webkit-transform:  translate(0px,-80px)  ;
        }
        100% {
            opacity:1;
            -webkit-transform:  translate(0px,0px)  ;
        }
    }
    
    @-o-keyframes slide-up-fade-in {
        0% {
            opacity:0;
            -o-transform:  translate(0px,80px)  ;
        }
        100% {
            opacity:1;
            -o-transform:  translate(0px,0px)  ;
        }
    }

    @-o-keyframes slide-down-fade-in {
        0% {
            opacity:0;
            -o-transform:  translate(0px,-80px)  ;
        }
        100% {
            opacity:1;
            -o-transform:  translate(0px,0px)  ;
        }
    }
    
    @-ms-keyframes slide-up-fade-in {
        0% {
            opacity:0;
            -ms-transform:  translate(0px,80px)  ;
        }
        100% {
            opacity:1;
            -ms-transform:  translate(0px,0px)  ;
        }
    } 

    @-ms-keyframes slide-down-fade-in {
        0% {
            opacity:0;
            -ms-transform:  translate(0px,-80px)  ;
        }
        100% {
            opacity:1;
            -ms-transform:  translate(0px,0px)  ;
        }
    } 
`

const UserCardImg = styled.div`
    padding-top:1vh;
    display:flex;
    width:12vw;
    height:25vh;
    border-radius: 50%;
    border-style: solid;
    border-color:white;
    background-image: url('${props => props.img}');
    background-repeat: no-repeat;
    background-position:center;
    background-size: cover;
`
const UserCardTop = styled.div`
    display:flex;
    flex-direction: column;
    height: 38%;
    width: 100%;
    overflow: hidden;
    align-items:center;
`

const ProfileBlurb = styled.div`
    height:auto;
    width:90%;
    overflow-wrap: break-word;
    text-align:center;
    padding-bottom:5%
`

const ProfileBlurbBorder = styled.div`
    padding-top:1%;
    width: 3vw;
    height:1%;
    border-bottom: 1px solid gainsboro;
`

const UserCardBottom = styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    align-items:center;
    min-height: 51%;
    overflow: auto;
    min-width: 100%;
    max-width: 100%;
    overflow-wrap: break-word;
    color:white;
`

const ProfileCardWrapper = styled.div`
    height:auto;
    width:auto;
    display:flex;
`

const TopBorder = styled.div`
    width:10vw;
    height:1%;
    border-bottom: 1px solid gainsboro;
    border-radius:10px;
    border-style:solid;
    padding-top:2%
`
const BotBorder = styled.div`
    padding-top:1%;
    width: 3vw;
    height:1%;
    border-bottom: 1px solid gainsboro;
`

const Buffer = styled.div`
    width: 22vw;
    height: 80vh;
    background-color:black;
`


function useOnScreen(ref, rootMargin = "0px") {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Update our state when observer callback fires
          setIntersecting(entry.isIntersecting);
        },
        {
          rootMargin,
        }
      );
      if (ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        observer.unobserve(ref.current);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return isIntersecting;
}

const Profile = ({name, blurb, pic, entranceDir}) => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, "-25%");

      return (
        <ProfileCardWrapper ref={ref}>
            {onScreen ? (
                <UserCard isVisible={onScreen} entryDir={entranceDir}>
                <UserCardTop>
                    <UserCardImg img={pic}/>
                    <TopBorder/>
                    <BotBorder/>
                </UserCardTop>
                <UserCardBottom>
                    <h3>{name}</h3>
                    <ProfileBlurb>{blurb}</ProfileBlurb>
                    <ProfileBlurbBorder/>   
                    {/* <p>LinkedIn</p>
                    <h5>{LinkedInUrl}</h5> */}
                    {/* Ask if they want a contact them */}
                </UserCardBottom>
                </UserCard>
            ): (
                <Buffer></Buffer>
            )}

        </ProfileCardWrapper>
      );
    }

export default Profile;