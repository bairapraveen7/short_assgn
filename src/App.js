import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import Chat from './components/Chat';
import Content from './components/Content';
import Customise from './components/Customise';
import Stats from './components/Stats';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGear } from '@fortawesome/free-solid-svg-icons';

function App() {


  const [quest,setAppquest] = useState();

  const [Que_arr,setArr] = useState([]);

  const [P_logo,setPlogo] = useState("/images/P_logo.jpeg");

  const [F_family,setFamily] = useState("Sansserif");

  const [F_size,setFsize] = useState("1em");

  const Comm_prev = document.getElementsByClassName("Comm_prev")[0];

  const Customise_change = document.getElementsByClassName("Customise")[0];

  function updateStyles(){

    if(window.innerWidth>600){
      if(Comm_prev!=undefined)
      Comm_prev.style.display = 'block';
      if(Customise_change!=undefined)
      Customise_change.style.display = 'flex';
    }
    else{
      if(Comm_prev!=undefined)
      Comm_prev.style.display = 'none';
      if(Customise_change!=undefined)
      Customise_change.style.display = 'none';
    }

  }

  function open_Common(){
      Comm_prev.style.display = 'flex';
      Comm_prev.style.zIndex = '1';
  }

  function open_Customise(){

      Customise_change.style.display = 'flex';
      Customise_change.style.right = '0';
      Customise_change.style.zIndex = '1';

  }

  window.addEventListener("resize",updateStyles);

  return (
    <>
    
    <div className='fe_start_row'>
    <FontAwesomeIcon className='fe_start_row_image' onClick={open_Common} icon={faBars} />
    <h1 style={{"textAlign":"center","margin":"0.5em"}}>Aganitha's chatbot</h1>
   <FontAwesomeIcon className='fe_start_row_image'  onClick={open_Customise} icon={faGear} />
    </div>
    <div className='Entire'>
    <Stats Prev_que={Que_arr} />
    <Chat setAppquest={setAppquest} setArr={setArr} Questions={Que_arr} Variables={[P_logo,F_family,F_size]}/>
    <Customise Functions={[setPlogo,setFamily,setFsize]}/>
    </div>

    </>
  );
}

export default App;
