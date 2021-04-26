import React from 'react'
import styled, { keyframes } from 'styled-components';
import { useState, useEffect, useRef } from "react";
import { fadeInUp, fadeInDown } from 'react-animations';


const fadeInU = keyframes`${fadeInUp}`;
const fadeInD = keyframes`${fadeInDown}`;

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
    
    animation: ${props => props.entryDir ==='Up' ? fadeInU :fadeInD} 3s;
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