import React from 'react';
import styled from 'styled-components';
import Profile from '../Components/Profile';

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

const ProfileWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    justify-items:center;
    align-items:center;
    height:100vh;
    width:100vw;
`

const Introduction = styled.div`
    display:flex;
    flex-direction:column;
    width:90vw;
    height:10vh;
    text-align:left;
    color:white;
`


  const AboutUs = ({ProfileImgs, ProfileBlurbs, names}) => {  
    return (
      <div>
        <MasterWrapper>
            <Introduction>
                <h1>Meet the Goopy Goobers</h1>
            </Introduction>
            <ProfileWrapper>
            <Profile entranceDir="Down" name={names[0]} blurb={ProfileBlurbs[0]} pic={ProfileImgs[0]}/>
            <Profile entranceDir="Up" name={names[3]} blurb={ProfileBlurbs[3]} pic={ProfileImgs[3]}/>
            <Profile entranceDir="Down" name={names[2]} blurb={ProfileBlurbs[2]} pic={ProfileImgs[2]}/>
            <Profile entranceDir="Up" name={names[1]} blurb={ProfileBlurbs[1]} pic={ProfileImgs[1]}/>
            </ProfileWrapper>
        </MasterWrapper>
      </div>
    );
  }

export default AboutUs;
