import {useState, useContext } from "react"
import './App.css';
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Uche from "./components/Store";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Store from "./components/Store";
import Users from "./components/Users";
import Footer from "./components/Footer";






function App() {

const [light, setLight] = useState(true);

const toggleMode =()=> {
  setLight(!light)
}



  return (
    <div className={`App ${light? 'light': 'dark'}`}> 
    <ToastContainer theme="light"/>
<>
    <Navigation nav={light? "navlight": "navdark" }
    change={toggleMode}
    content={light? "🌕" : "🌙"}
    />
    </>


      <Hero/>    
      <Store/>
      <Users/>
      <Footer/>
      
      
  <p>
    

  </p>
  
      
      
    </div>
  );
}

export default App;
