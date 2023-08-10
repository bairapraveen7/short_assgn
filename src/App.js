import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Chat from './components/Chat';
import Content from './components/Content';
import Customise from './components/Customise';
import Stats from './components/Stats';

function App() {


  const [quest,setAppquest] = useState();

  const [Que_arr,setArr] = useState([]);

  useEffect(() => {
    console.log(Que_arr)
  },[Que_arr]);

  return (
    <>
    
    <h1 style={{"textAlign":"center"}}>Dj bravo</h1>
    
    <div className='Entire'>
    <Stats Prev_que={Que_arr} />
    <Chat setAppquest={setAppquest} setArr={setArr}/>
    </div>

    </>
  );
}

export default App;
