import logo from './logo.svg';
import './App.css';
import LandingPage from '../src/Components/LandingPage';
import Content from '../src/Content/content.json';
import Overview from '../src/Components/Overview';
import ContentContainer from '../src/Components/ContentContainer';
import AboutUs from '../src/Components/AboutUs';

function App() {
  return (
    <div style={{backgroundColor:'black', height:'auto', width:'auto'}} className="App">
      <LandingPage LandingPageContent={Content}/>
      <Overview OverviewContent={Content}/>
      <ContentContainer 
        Location={Content.Locations[2]}
        ImgSrc={Content.Images[2]}
        Title={Content.Titles[2]}
        Color={Content.Color[0]}
        Text={Content.PlaceHolderText}
      />
      <ContentContainer 
        Location={Content.Locations[1]}
        ImgSrc={Content.Images[1]}
        Title={Content.Titles[1]}
        Color={Content.Color[0]}
        Text={Content.PlaceHolderText}
      />
      <AboutUs Profiles={Content.Profiles}/>
    </div>
  );
}

export default App;
