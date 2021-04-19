import React from 'react';
import styled from 'styled-components';
import { useState, useEffect, useRef } from "react";

const ContentWrapper = styled.div`
    display:flex;
    flex-direction:${props => props.Location === "Left" ? 'row':'row-reverse'};
    height:300px;
    padding-top:2vh;
    width:1000px;

    animation: ${props => props.Location === "Left" ? 'fade-in-right':'fade-in-left'} ease 2s;
    animation-iteration-count: 1;
    transform-origin: 50% 50%;
    animation-fill-mode:forwards; /*when the spec is finished*/
    -webkit-animation: ${props => props.Location === "Left" ? 'fade-in-right':'fade-in-left'} ease 2s;
    -webkit-animation-iteration-count: 1;
    -webkit-transform-origin: 50% 50%;
    -webkit-animation-fill-mode:forwards; /*Chrome 16+, Safari 4+*/ 
    -moz-animation: ${props => props.Location === "Left" ? 'fade-in-right':'fade-in-left'} ease 2s;
    -moz-animation-iteration-count: 1;
    -moz-transform-origin: 50% 50%;
    -moz-animation-fill-mode:forwards; /*FF 5+*/
    -o-animation: ${props => props.Location === "Left" ? 'fade-in-right':'fade-in-left'} ease 2s;
    -o-animation-iteration-count: 1;
    -o-transform-origin: 50% 50%;
    -o-animation-fill-mode:forwards; /*Not implemented yet*/
    -ms-animation: ${props => props.Location === "Left" ? 'fade-in-right':'fade-in-left'} ease 2s;
    -ms-animation-iteration-count: 1;
    -ms-transform-origin: 50% 50%;
    -ms-animation-fill-mode:forwards; /*IE 10+*/

    opacity:0;
    opacity: 1\9;
    @keyframes fade-in-right{
        0% {
            opacity:0;
            transform:  translate(60px,0px)  ;
        }
        100% {
            opacity:1;
            transform:  translate(0px,0px)  ;
        }
    }
    
    @keyframes fade-in-left{
        0% {
            opacity:0;
            transform:  translate(-60px,0px)  ;
        }
        100% {
            opacity:1;
            transform:  translate(0px,0px)  ;
        }
    }

    @-moz-keyframes fade-in-right{
        0% {
            opacity:0;
            -moz-transform:  translate(60px,0px)  ;
        }
        100% {
            opacity:1;
            -moz-transform:  translate(0px,0px)  ;
        }
    }
    
    @-moz-keyframes fade-in-left{
        0% {
            opacity:0;
            -moz-transform:  translate(-60px,0px)  ;
        }
        100% {
            opacity:1;
            -moz-transform:  translate(0px,0px)  ;
        }
    }
    
    @-webkit-keyframes fade-in-right {
        0% {
            opacity:0;
            -webkit-transform:  translate(60px,0px)  ;
        }
        100% {
            opacity:1;
            -webkit-transform:  translate(0px,0px)  ;
        }
    }
    
    @-webkit-keyframes fade-in-left {
        0% {
            opacity:0;
            -webkit-transform:  translate(-60px,0px)  ;
        }
        100% {
            opacity:1;
            -webkit-transform:  translate(0px,0px)  ;
        }
    }
    
    @-o-keyframes fade-in-right {
        0% {
            opacity:0;
            -o-transform:  translate(60px,0px)  ;
        }
        100% {
            opacity:1;
            -o-transform:  translate(0px,0px)  ;
        }
    }
    
    @-o-keyframes fade-in-left {
        0% {
            opacity:0;
            -o-transform:  translate(-60px,0px)  ;
        }
        100% {
            opacity:1;
            -o-transform:  translate(0px,0px)  ;
        }
    }

    @-ms-keyframes fade-in-right {
        0% {
            opacity:0;
            -ms-transform:  translate(60px,0px)  ;
        }
        100% {
            opacity:1;
            -ms-transform:  translate(0px,0px)  ;
        }
    } 

    @-ms-keyframes fade-in-right {
        0% {
            opacity:0;
            -ms-transform:  translate(-60px,0px)  ;
        }
        100% {
            opacity:1;
            -ms-transform:  translate(0px,0px)  ;
        }
    } 

    @-ms-keyframes fade-in-left {
        0% {
            opacity:0;
            -ms-transform:  translate(-60px,0px)  ;
        }
        100% {
            opacity:1;
            -ms-transform:  translate(0px,0px)  ;
        }
    } 
    @media only screen and (max-width:992px){
        display:flex;
        flex-direction:column;
        align-items:center;
        width: 100vw;
        height:450px;
    }
`
const PositionWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100vw;
    height:60vh;
    background-color:black;
`
const ImageContainer = styled.div`
    width:525px;
    height:300px;
    background-image: url('${props => props.Img}');
    background-repeat: no-repeat;
    background-position: center; 
    background-size:490px;
    @media only screen and (max-width:992px){
        width:90%;
        height:80vh;
        background-size:50%;
        margin-bottom: ${props => props.isLanding ? '50px': '0px'};
    }
`
const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-content:center;
    height:250px;
    width: 500px;
    padding-top:6%;  
    padding-left:12px;
    color: ${props => props.TextColor};
    @media only screen and (max-width:992px){
        height:50vh;
        width:75vw;
        padding-top:10%;
    }
`
const ArticleText = styled.div`
    margin-top:-3%;
    color:white
`
const Introduction = styled.div`
    height:100vh;
    width:100vw;
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


const ContentContainer = ({Location, ImgSrc, Title, Text, Color,Landing}) => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, "-30%");

    return(
        <PositionWrapper ref={ref}>
            {onScreen ? (
                <ContentWrapper Location={Location}>
                    <TextContainer Location={Location} TextColor={Color}>
                        <h2 style={{color:'white'}}> {Title}</h2>
                        <ArticleText>{Text}</ArticleText>
                    </TextContainer>
                    <ImageContainer isLanding={Landing} Img={ImgSrc} />
                </ContentWrapper>
            ) : (
                <Introduction></Introduction>
            )}
        </PositionWrapper>
    );
}

export default ContentContainer;