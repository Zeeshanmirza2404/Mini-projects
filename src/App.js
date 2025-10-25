import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2f363bff';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Navbar title = "TextUtils" mode = {mode} toggleMode={toggleMode}/>
    <div className="container my-3">  
    <TextForm heading = "Enter text to analyze" mode = {mode}/>
    </div>
    <About mode={mode} />
    </>
  );
}

export default App;
