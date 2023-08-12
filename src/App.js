import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect, useState } from 'react';
import Chat from './components/Chat';
import Content from './components/Content';
import Customise from './components/Customise';
import Stats from './components/Stats';

function App() {


  const [quest,setAppquest] = useState();

  const [Que_arr,setArr] = useState([]);

  const [P_logo,setPlogo] = useState("/images/P_logo.jpeg");

  const [F_family,setFamily] = useState("Sansserif");

  const [F_size,setFsize] = useState("1em");

  useEffect(() => {
    console.log(Que_arr)
  },[Que_arr]);

  function open_Common(){
      const Comm_prev = document.getElementsByClassName("Comm_prev")[0];
      console.log(Comm_prev);
      Comm_prev.style.display = 'flex';
      Comm_prev.style.zIndex = '1';
  }

  function open_Customise(){

    const Comm_prev = document.getElementsByClassName("Customise")[0];
      console.log(Comm_prev);
      Comm_prev.style.display = 'flex';
      Comm_prev.style.right = '0';
      Comm_prev.style.zIndex = '1';

  }

  return (
    <>
    
    <div className='fe_start_row'>
    <img className='fe_start_row_image' src="/images/ag.png" onClick={open_Common}></img>
    <h1 style={{"textAlign":"center","margin":"0.5em"}}>Aganitha's chatbot</h1>
    <img className='fe_start_row_image' src="/images/ag.png" onClick={open_Customise}></img>
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
