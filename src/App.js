import './App.css'
import {Route, Routes } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Logements from "./pages/Logements";
import ErrorPage  from "./pages/ErrorPage";

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
