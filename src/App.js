  import './App.css';
import LandingPage from '../src/Components/LandingPage';
import Content from '../src/Content/content.json';
import Overview from '../src/Components/Overview';
import ContentContainer from '../src/Components/ContentContainer';
import AboutUs from '../src/Components/AboutUs';

import Joanna from '../src/Content/Johanna_Torres_pic.jpg'
import Matt from '../src/Content/Matt.png'
import Ryan from '../src/Content/ryan.jpeg'
import Olivier from '../src/Content/Olivier.jpeg'

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
        Text={Content.ProductInfo[0]}
      />
      <ContentContainer 
        Location={Content.Locations[1]}
        ImgSrc={UI}
        Title={"UI and Prototype description"}
        Color={Content.Color[0]}
        Text={Content.ProductInfo[1]}
      />
      <ContentContainer 
        Location={Content.Locations[2]}
        ImgSrc={Food}
        Title={"Use overview"}
        Color={Content.Color[0]}
        Text={Content.ProductInfo[2]}
      />
      <div style={{width:'100vw', height:'2vh', textAlign:'center', color:'white'}}>
        If you want to see a more technical analysis and to see a copy of our report click  <a style={{color:'white'}}href="https://github.com/AARC-Box/aarc-box.github.io/tree/master/Technical_specs">Here</a> 
      </div>
      <AboutUs ProfileImgs={[Joanna,Matt, Ryan, Olivier]} ProfileBlurbs ={Content.ProfileBlurbs} names={['Johanna Torres', 'Matthew Vanegas',  'Ryan Hunt','Olivier Masse']}/>
    </div>
  );
}

export default App;
