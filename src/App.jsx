
import './App.css'
import Icon from './components/Icon'

import QuoteBox from './components/QuoteBox'

function App() {
 const paletColor= ["#00F5FF","#FCE700","#FF6D28","#EA047E","#2192FF","#38E54D","#A7D2CB"]
 const randomColor= Math.floor(Math.random()*paletColor.length);
 

 //document.body.style=`background:${paletColor[randomColor]}`

  return (
    <div className="App" >
     <div className="container-div">
      <div className='container-quotes'>
      
      <QuoteBox />
      </div>
     </div>
     
      

      
      
    </div>
  )
}

export default App
