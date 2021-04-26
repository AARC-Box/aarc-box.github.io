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
            <Profile entranceDir="Up" name={names[1]} blurb={ProfileBlurbs[1]} pic={ProfileImgs[1]}/>
            <Profile entranceDir="Down" name='Stanley Yelnats' blurb='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrmfXsmvbR1rYFRFwX_2AEc7127qgeB86_eoLd7b9Mn0qfaUx'/>
            <Profile entranceDir="Up" name='Stanley Yelnats' blurb='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrmfXsmvbR1rYFRFwX_2AEc7127qgeB86_eoLd7b9Mn0qfaUx'/>
            </ProfileWrapper>
        </MasterWrapper>
      </div>
    );
  }

export default AboutUs;
