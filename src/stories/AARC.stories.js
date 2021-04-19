import React from 'react';
import App from '../App';
import LandingPage from '../Components/LandingPage';
import Overview from '../Components/Overview';
import Content from '../Content/content.json';
import ContentContainer from '../Components/ContentContainer';
import Profile from '../Components/Profile';
import AboutUs from '../Components/AboutUs';

export default {
  title: 'AARC Box Website',
};

// export const Hex = () => <Hexagon ButtonColor='#64C7CC' />;

// export const CarouselComp = () => <Carousel content={Content.Slides}/>;

export const MockUp = () => <App/>;

export const Landing = () => <LandingPage LandingPageContent={Content}/>;

export const OverView = () => <Overview OverviewContent={Content}/>;

export const ContentComponent = ()  => (
  <>
    <ContentContainer 
      Location={Content.Locations[1]}
      ImgSrc={Content.Images[1]}
      Title={Content.Titles[1]}
      Color={Content.Color[0]}
      Text={Content.PlaceHolderText}
    />
    <ContentContainer 
      Location={Content.Locations[2]}
      ImgSrc={Content.Images[2]}
      Title={Content.Titles[2]}
      Color={Content.Color[0]}
      Text={Content.PlaceHolderText}
    />
  </>
);

export const Prof = () => <Profile name='Stanley Yelnats' blurb='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' pic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMrmfXsmvbR1rYFRFwX_2AEc7127qgeB86_eoLd7b9Mn0qfaUx'/> 

export const About = () => <AboutUs/>

MockUp.story = {
  name: 'Vimeo Mock Up : Main',
};

Landing.story = {
  name: 'Landing Page'
};
OverView.story = {
    name: 'Overview'
}

ContentComponent.story = {
    name:'ContentContainer'
}

Prof.story ={
    name:'Profile'
}