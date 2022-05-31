import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home(props) {
  const [container, setContainer] = useState([])
  const showAllsp = () => {
    console.log(container)
    axios.get("http://localhost:3000/api/admins/dashboard").then((result) => {
      setContainer(result.data)
      console.log(result.data,"oi")
    }).catch(error => { console.log(error) })
  }
  return (
    <div>
      <div>
      {useEffect(()=>{showAllsp()},[])}
      </div>
        <button type="button" id="logout" onClick={()=>props.setIndex(1)}>Logout</button>
      <div>
        <p id="Spad">those are Service providers: </p>
      {container.map((container, i) =>{  
        return (
              <div className="sp" key={i}> 
              <p>{container.owner_name} <p ID="dele">delete this SP</p></p>
              </div>
                )})} 
      </div>
    </div>
    )
 
}
