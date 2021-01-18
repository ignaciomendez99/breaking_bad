import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';


const BotonSend = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 300px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #fff;
    margin-top: 2rem;
    padding: 1rem 2.5rem;
    font-size: 2rem;
    border: 2px solid black;
    border-radius: 5px;
    outline: none;
    transition: background-size .8s ease;
    

    &:hover{
      cursor: pointer;
      background-size: 400;
    }
`;

const Contenedor = styled.div`
    display:flex;
    align-items:center;
    padding-top: 5rem;
    flex-direction:column;


`;



function App() {

  const [frase, updateFrase] = useState({});
  

  const obtenerFrase = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const res = await api.json();
    updateFrase(res[0])
  }

  useEffect(() => {
    obtenerFrase();
  }, [])

  return (
    <Contenedor>

      
      <Frase 
        frase={frase}
      />  
      <BotonSend
        onClick={obtenerFrase}
      
      >Obtener Frase</BotonSend>

      
    </Contenedor>

   
  
  );
}

export default App;
