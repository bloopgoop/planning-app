import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Chat from '../Chat/Chat';
import Dropbox from '../Dropbox/Dropbox';
import Tab from '../Tab/Tab'
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function App() {

  const { height, width } = useWindowDimensions();

  return(
    <>
        <Navbar />
        <div id="app">
          {console.log(height, width)}
          <div id="canvas" style={{width: `${width}px`, height: `${height}px`}}>
            <Dropbox />
            <Tab />
          </div>
          <Chat />
        </div>
    </>
      
  )
}

export default App;
