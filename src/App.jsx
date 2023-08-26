import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [show, setShow] = useState(true);

  //sem array de dependencia
  useEffect(()=>{
    document.title = `Clicou ${numero1}x`
    console.log('Executou o useEffect1');
  })

  //array de dependencia
  useEffect(()=>{
    console.log('Executou o useEffect2');
  },[])

  //passando valor no array de dependencia
  //quando o valor é alterado
  useEffect(()=>{
    console.log('Executou o useEffect3');
  },[numero1])


  
function Tecla(){

  //passando um return dentro da hook useEffect, ele desmonta a função para que 
  //estava dentro do hook para ganho de peformance, limpando, tambem, a memoria
  useEffect(()=>{
    console.log('Executou o useEffect4');
    function handleKeyUp(){
      console.log('APERTOU O BTN TECLA')
    }

    window.addEventListener("keyup", handleKeyUp);
    return () =>{
      console.log('CLEANUP CHAMADO')
      window.removeEventListener("keyup", handleKeyUp);
    }
  },[])

  return(
    <h4>Componente Tecla</h4>
  )
}

  return (
      <div>
       <h1>Usando o useEffect</h1>
       <button onClick={()=> setNumero1(item => item + 1)}>Adiconar + 1</button>
       <br/> <br/>
       <h2>Numero 1: {numero1}</h2>
       <button onClick={()=> setNumero2(item => item + 1)}>Adiconar + 1</button>
       <h2>Numero 2: {numero2}</h2>
       <hr/>
       <button onClick={()=> setShow(!show)} >Esconder / Mostrar</button>
       {show && <Tecla />}
      </div>
  )
}

export default App
