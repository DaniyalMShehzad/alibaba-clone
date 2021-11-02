import './App.css';
import PrimarySearchAppBar from './navbar/navbar';
import Navbar2 from './navbar/navbar2';
import SwipeableTextMobileStepper from './slider/SwipeableTextMobileStepper';
import Cards from './cards/card';
import Footer from './footer/footer';
import FullWidthGrid from './cards/card2';
function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <Navbar2/>
      <div className="app2">
      {/* <SwipeableTextMobileStepper/>
      <Cards/>
      <Footer/> */}
      <FullWidthGrid/>
      </div>
    </div>
  );
}

export default App;
