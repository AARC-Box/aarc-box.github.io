  import './App.css';
import LandingPage from '../src/Components/LandingPage';
import Content from '../src/Content/content.json';
import Overview from '../src/Components/Overview';
import ContentContainer from '../src/Components/ContentContainer';
import AboutUs from '../src/Components/AboutUs';

import Joanna from '../src/Content/Johanna_Torres_pic.jpg'
import Matt from '../src/Content/Matt.png'

import Isometric from '../src/Content/isometric.jpeg'
import UI from '../src/Content/UI.jpeg'
import Food from '../src/Content/with_food.jpeg'

function App() {
  return (
    <div style={{backgroundColor:'black', height:'auto', width:'auto'}} className="App">
      <LandingPage LandingPageContent={Content}/>
      <Overview OverviewContent={Content}/>
      <ContentContainer 
        Location={Content.Locations[2]}
        ImgSrc={Isometric}
        Title={"General info"}
        Color={Content.Color[0]}
        Text={Content.PlaceHolderText}
      />
      <ContentContainer 
        Location={Content.Locations[1]}
        ImgSrc={UI}
        Title={"UI"}
        Color={Content.Color[0]}
        Text={Content.PlaceHolderText}
      />
      <ContentContainer 
        Location={Content.Locations[2]}
        ImgSrc={Food}
        Title={"Use overview"}
        Color={Content.Color[0]}
        Text={Content.PlaceHolderText}
      />
      <div style={{width:'100vw', height:'2vh', textAlign:'center'}}>
        If you want to see a more technical analysis click  <a href="https://www.w3schools.com">Here</a> 
      </div>
      <AboutUs ProfileImgs={[Joanna,Matt]} ProfileBlurbs ={Content.ProfileBlurbs} names={['Johanna Torres', 'Matthew Vanegas']}/>
    </div>
  );
}

export default App;
