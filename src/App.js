// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textutils from './components/Textutils';
// import Alert from './components/Alert';
// import Aboutus from './components/Aboutus';

function App() {
  // const [darkMode , setDarkMode] = useState('light')

  const [alert , setalert] = useState(null);

  // const showAlert = (message , type)=>{
  //   setalert({msg: message,
  //     typ : type})
  // }


  return (
    <>

    <Navbar title = "ishant" home = "about" theme = "light" />
    {/* <Alert/> */}
    <Textutils/>
    {/* <Aboutus/> */}
    
    </>
  )
}

export default App;
