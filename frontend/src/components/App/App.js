import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Chat from '../Chat/Chat';
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

  const height = 1080;
  const width = 1920;

  return(
    <>
        <Navbar />
        <div id="app">
          <Chat />
          {console.log(height, width)}
          <div id="canvas" style={{width: `${width}px`, height: `${height}px`, backgroundColor: 'green'}}>
            <div className='grid-container'>
              <div className='grid-item'>1</div>
              <div className='grid-item'>2</div>
              <div className='grid-item'>3</div>
            </div>

          </div>

        </div>
    </>
      
  )
}

export default App;
