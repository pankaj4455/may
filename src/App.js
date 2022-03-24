import React, { useState } from 'react';
import './App.css';

export default function App(){

  let newTime=new Date().toLocaleTimeString();
 let [time,setTime]=useState(newTime);
 const upDate=()=>{
   let newCTime=new Date().toLocaleTimeString();
   setTime(newCTime);
 }
 setInterval(upDate,1000);

     return(
<>
<div className="div_1">
<h1>{time}</h1>
<button onClick={upDate}>Digital clock</button>
</div>
</>
 )
}


