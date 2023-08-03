import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const useComfirm = (message = "", callback ,rejection) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };

  return typeof rejection !== "function" && typeof callback !== "function" ? undefined : confirmAction
};

const App = () => {
  const deleteWorld = () => console.log("Delete the world...");
  const abort = () => console.log("Abort...");
  const confirmDelete = useComfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className='App'>
      <button onClick={confirmDelete}>Delete the World</button>
    </div>

  );
}

export default App;
