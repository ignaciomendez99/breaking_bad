import React from 'react'
import styled from '@emotion/styled';


const FraseContenedor = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin-top: 15rem;
    border-radius: 15px 15px 10px 10px;

    @media (min-width: 992px) {
        margin-top: 10rem;
    }

    h1{
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before{
            content: open-quote;
            font-size: 5rem;
            color: black;
            position:absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;

    }

`;



const Frase = ({frase}) => {
    return ( 
        <FraseContenedor>
            <h1>{frase.quote}</h1>

            <p>-{frase.author}</p>

        </FraseContenedor>
        
     );
}
 
export default Frase;