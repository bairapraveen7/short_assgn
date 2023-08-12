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

  return (
    <>
    
    <h1 style={{"textAlign":"center","margin":"0.5em"}}>Aganitha's chatbot</h1>
    
    <div className='Entire'>
    <Stats Prev_que={Que_arr} />
    <Chat setAppquest={setAppquest} setArr={setArr} Questions={Que_arr} Variables={[P_logo,F_family,F_size]}/>
    <Customise Functions={[setPlogo,setFamily,setFsize]}/>
    </div>

    </>
  );
}

export default App;
