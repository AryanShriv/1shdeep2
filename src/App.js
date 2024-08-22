import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/Home';
import Navbar from './Components/Navbar/Navbar'
import Projects from './Pages/Projects/Projects'
// import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Projects" element={<Projects />}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
