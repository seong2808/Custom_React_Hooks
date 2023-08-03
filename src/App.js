import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const useFullscreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    element.current.requestFullscreen();
    if (callback && typeof callback === "function") {
      callback(true);
    }
  }

  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  }
  return { element, triggerFull, exitFull };
}

const App = () => {
  const onFullScr = (isFull) => {
    console.log(isFull ? "We are full" : "We are small");
  }
  const { element, triggerFull, exitFull } = useFullscreen(onFullScr);
  return (
    <div className='App' style={{ height: "1000vh"}}>
      <div ref={element}>
        <img src='https://i.ibb.co/R6RwNxx/grape.jpg'/>
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
}

export default App;
