import './App.css';
import PrimarySearchAppBar from './navbar/navbar';
import Navbar2 from './navbar/navbar2';
import SwipeableTextMobileStepper from './slider/SwipeableTextMobileStepper';
import Cards from './cards/card';
import Footer from './footer/footer';
import Card2 from './cards/card2';
import Cards3 from './cards/cards3';
import Cards4 from './cards/cards4';
import Cards5 from './cards/cards5';
import Cards6 from './cards/cards6';
function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <Navbar2/>
      <div className="app2">
      {/* <SwipeableTextMobileStepper/> */}
      <Cards/>
      <Card2/>
      <Cards3/>
      <Cards4/>
      <Cards5/>
      <Cards6/>
      {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
