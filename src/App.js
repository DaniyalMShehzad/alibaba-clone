import './App.css';
import PrimarySearchAppBar from './navbar/navbar';
import Navbar2 from './navbar/navbar2';
import SwipeableTextMobileStepper from './slider/SwipeableTextMobileStepper';
import Cards from './cards/card';
import Footer from './footer/footer';
function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <Navbar2/>
      <SwipeableTextMobileStepper/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
