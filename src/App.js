import './App.css'
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Logements from "./pages/Logements";
import ErrorPage  from "./pages/ErrorPage";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return(
    <>
      <Header />
      <nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/logement/:id" element={<Logements />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </nav>
      <Footer/>
    </>
  )
}

export default App;
