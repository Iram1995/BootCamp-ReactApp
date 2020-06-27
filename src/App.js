import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Student from './Student';


function App() {
  return (
    <div className="App">
      <Student Name="Iram Manzoor" Course="Artificial Intelligence"/>
      <hr/>
      <Student Name="Sana Fatima" Course="React for Beginners"/>
      <hr/>
      <Student Name="Fatima Khan" Course="Cloud Computing"/>
      <hr/>

    </div>
  );
}

export default App;
