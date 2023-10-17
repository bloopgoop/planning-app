import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Chat from '../Chat/Chat';
import { useState, useEffect } from 'react';

import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'

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
          <Chat />
          <div id="view" style={{width: `${width - 400}px`, height: `${height - 60}px`}}>
              <Tldraw />
          </div>

        </div>
    </>
      
  )
}

export default App;
