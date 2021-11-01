import './App.css';
import PrimarySearchAppBar from './navbar/navbar';
import Navbar2 from './navbar/navbar2';
import SwipeableTextMobileStepper from './slider/SwipeableTextMobileStepper';
import Cards from './cards/card';
function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <Navbar2/>
      <SwipeableTextMobileStepper/>
      <Cards/>
    </div>
  );
}

export default App;
