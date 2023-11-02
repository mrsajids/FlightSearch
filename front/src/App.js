import Navbar from './components/Navbar';
import FlightSearch from './components/FlightSearch';
import About from './components/About';
import './App.css';
import { Routes,Route } from 'react-router-dom';
 
function App() {
  return (
    <>
    <div className="App">
    <Navbar/> 
      <Routes>
        {/* <Route path="/" element={ <Navbar/> } /> */}
        <Route path="/" element={ <FlightSearch/> } />
        <Route path="about" element={ <About/> } />
     </Routes>
    </div>
    </>
  );
}

export default App;
