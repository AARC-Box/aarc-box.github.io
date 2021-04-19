import React from 'react'
import ReactPlayer from 'react-player'
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations'
import { useState, useEffect, useRef } from "react";

const fadeInAnimation = keyframes`${fadeIn}`;

const MasterWrapper = styled.div`
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    align-content:center;
    justify-content:space-around;
    align-items:center;
    background-color:black;
`
const Buffer = styled.div`
    height:3vh;
    width:100vw;
    background-color:black;
`

const PlayerWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    justify-items:center;
    align-items:center;
    height:100vh;
    width:100vw;
    animation: 5s ${fadeInAnimation};
`

const Introduction = styled.div`
    width:100vw;
    height:100vh;
    color:white;
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


  const Overview = ({OverviewContent}) => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, "-20%");
  
    return (
      <div>
        <MasterWrapper>
        <div ref={ref}>
          {onScreen ? (
            <div>
                <PlayerWrapper>
                    <ReactPlayer
                        className='react-player'
                        url={OverviewContent.PitchVideo}
                        width='90vw'
                        height='70vh'
                        />
                </PlayerWrapper>
            </div>
          ) : (
              <div>
              <Introduction>
              </Introduction>
              </div>
          )}
        </div>
        </MasterWrapper>
      </div>
    );
  }

export default Overview;
