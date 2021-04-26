import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useState, useEffect, useRef } from "react";
import { fadeInLeft, fadeInRight } from 'react-animations'

const fadeInL = keyframes`${fadeInLeft}`;
const fadeInR = keyframes`${fadeInRight}`;

const ContentWrapper = styled.div`
    display:flex;
    flex-direction:${props => props.Location === "Left" ? 'row':'row-reverse'};
    height:300px;
    padding-top:2vh;
    width:1000px;

    animation: ${props => props.Location === "Left" ? fadeInL: fadeInR}  2s;

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