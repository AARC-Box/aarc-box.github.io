import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
import { useState } from "react";
import logo from '../Content/AARC_Logo.png';


const fadeInAnimation = keyframes`${fadeInUp}`;

const LandingPageWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    height:100vh;
    align-content:center;
    justify-content:space-around;
    align-items:center;
    background-color:black;
    opacity:.95
`
const Chevron =styled.span`
	border-color: #B9D9EB;
	border-style: solid;
	border-width: 0.25em 0.25em 0 0;
	content: '';
	display: inline-block;
	height: 0.45em;
	left: 0.15em;
	position: relative;
	top: 5em;
	transform: rotate(-135deg);
	vertical-align: top;
	width: 0.45em;
	left: 0;
	transform: rotate(135deg);
    animation: expand 1s ease-in infinite alternate;
    @keyframes expand {
        0% {
            transform: scale(1.0) rotate(135deg);
        }
        100% {
            transform: scale(1.2) rotate(135deg);
        }
    }
`

const LogoWrapper = styled.div`
    display:flex;
    flex-direction:column;
    width: 100vw;
    height: 90vh;
    align-content:center;
    align-items:center;
    justify-content:space-around;
        
    animation:${props => props.isLoaded? 'slide-up-fade-in ease 2s':''};
    animation-iteration-count: 1;
    transform-origin: 50% 50%;
    animation-fill-mode:forwards; /*when the spec is finished*/
    -webkit-animation: ${props => props.isLoaded ? 'slide-up-fade-in ease 2s':''};
    -webkit-animation-iteration-count: 1;
    -webkit-transform-origin: 50% 50%;
    -webkit-animation-fill-mode:forwards; /*Chrome 16+, Safari 4+*/ 
    -moz-animation: ${props => props.isLoaded? 'slide-up-fade-in ease 2s':''};;
    -moz-animation-iteration-count: 1;
    -moz-transform-origin: 50% 50%;
    -moz-animation-fill-mode:forwards; /*FF 5+*/
    -o-animation: ${props => props.isLoaded? 'slide-up-fade-in ease 2s':''};;
    -o-animation-iteration-count: 1;
    -o-transform-origin: 50% 50%;
    -o-animation-fill-mode:forwards; /*Not implemented yet*/
    -ms-animation: ${props => props.isLoaded? 'slide-up-fade-in ease 2s':''};;
    -ms-animation-iteration-count: 1;
    -ms-transform-origin: 50% 50%;
    -ms-animation-fill-mode:forwards; /*IE 10+*/

    opacity:0;

    @keyframes slide-up-fade-in{
        0% {
            opacity:0;
            transform:  translate(0px,40px)  ;
        }
        100% {
            opacity:1;
            transform:  translate(0px,0px)  ;
        }
    }
    
    @-moz-keyframes slide-up-fade-in{
        0% {
            opacity:0;
            -moz-transform:  translate(0px,40px)  ;
        }
        100% {
            opacity:1;
            -moz-transform:  translate(0px,0px)  ;
        }
    }
    
    @-webkit-keyframes slide-up-fade-in {
        0% {
            opacity:0;
            -webkit-transform:  translate(0px,40px)  ;
        }
        100% {
            opacity:1;
            -webkit-transform:  translate(0px,0px)  ;
        }
    }
    
    @-o-keyframes slide-up-fade-in {
        0% {
            opacity:0;
            -o-transform:  translate(0px,40px)  ;
        }
        100% {
            opacity:1;
            -o-transform:  translate(0px,0px)  ;
        }
    }
    
    @-ms-keyframes slide-up-fade-in {
        0% {
            opacity:0;
            -ms-transform:  translate(0px,40px)  ;
        }
        100% {
            opacity:1;
            -ms-transform:  translate(0px,0px)  ;
        }
    } 
`

const BufferDiv = styled.div`
    width:100vw;
    height:5vh;
`

const LandingPage = () => {
    const [imgLoaded, setLoaded] = useState(false);

    return (
        <LandingPageWrapper>
            <LogoWrapper isLoaded={imgLoaded}>
                <BufferDiv/>
                <img onLoad={() => setLoaded(true)} src={logo}/>
                <Chevron/>
            </LogoWrapper>)
        </LandingPageWrapper>
    )
}


export default LandingPage;

