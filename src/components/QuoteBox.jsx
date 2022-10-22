import React, { useState } from 'react';
import quotes from "../quotes.json"
import Icon from './Icon';


const QuoteBox = () => {
 const randomIndex=Math.floor(Math.random()* quotes.length) 
 const [index,setIndex]= useState(randomIndex)
 // function para que onclick cambie quotes de todo el json
 const changeQuote = ()=>{
  const anotherRandom = Math.floor(Math.random()* quotes.length)
  setIndex(anotherRandom)
 }
 const paletColor= ["#845EC2","#D65DB1","#FF6F91","#FF9671","#FFC75F","#8EE78E","#008891","#4DC999"]
 const randomColor= Math.floor(Math.random()*paletColor.length);
 

 document.body.style=`background:${paletColor[randomColor]}`
 
 
 return (
  <div className='container-quotes' style={{color:paletColor[randomColor]}}>
   <Icon color="paletColor[randomColor]"/>
   <div>
    <h2>{quotes[index].quote}</h2>
   </div>
   
   <div className='h3'>
    <h3>{quotes[index].author}</h3>
   </div>
   <div className='btn'>
    <button onClick={changeQuote} style={{background:paletColor[randomColor]}}><i class="fa-solid fa-play" ></i></button>
   </div>
   
   
  </div>
 );
};

export default QuoteBox;