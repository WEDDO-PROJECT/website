import AdminSignIn from './components/AdminSignIn.jsx';
import Home from './components/Home.jsx';
import React,{useEffect,useState} from 'react';

function App() {
  const [index,setIndex]=useState(1)
  return (
    <div>
      {index==1&&<AdminSignIn setIndex={setIndex}  />}
      {index==2&&<Home setIndex={setIndex} />}
    </div>
  );
}

export default App;
