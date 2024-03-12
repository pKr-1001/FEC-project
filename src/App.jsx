import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Submain from "./components/Submain";
import Footer from "./components/Footer";
import HeaderExpanded from "./components/HeaderExpanded";
import { ImageProvider } from "./components/imageContext";

export let ContextHeader = React.createContext();

export let ContextHeader = React.createContext();

function App() {

    const [expanded, setExpanded] = useState(false)
    const [menuIcon, setMenuIcon] = useState(true)
    const [size, setSize] = useState({ width: window.innerWidth})
    const [toggle, setToggle] = useState(false)

    const main = expanded ? <HeaderExpanded/> : <ImageProvider><Main/></ImageProvider>

    const flip = () => {
        setExpanded(!expanded)
        setMenuIcon(!menuIcon)
        if (document.body.style.overflow === 'hidden') {
          document.body.style.overflow = '';
        } else {
          document.body.style.overflow = 'hidden';
        }
    }

    // IF PIXEL IS BIGGER THAN 1480 IT TURNS
    useEffect(() => {
      const handleSize = () => {
        setSize({ width: window.innerWidth})
      }

      window.addEventListener('resize', handleSize)

      if (size.width >= 1480) {
        setToggle(true)
      } else {
        setToggle(false)
      }

      return () => {
        window.removeEventListener('resize',handleSize)
      }
    }, [size])

  return (
    <>
      <Routes>
        <Route path="/" element ={
          <div>
            <ContextHeader.Provider value = { {flip, menuIcon, toggle} }>
              <Header flip={flip} menuIcon={menuIcon} toggle={toggle}/>
              {main}
            </ContextHeader.Provider>
            <ImageProvider>
              <Submain />
            </ImageProvider>
            <Footer />
          </div>
        }/>
      </Routes>
    </>
  );
}

export default App;
