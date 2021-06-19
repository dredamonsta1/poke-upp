import React, { Component } from 'react';
import ReactDom from 'react-dom';


 function PokeFetch() {


      const pokemonUrl = [
          'https://pokeapi.co/api/v2/pokemon'
        ]

     const catchEmAll = async function(props) {
         try {

             const [ pokemon ] = await Promise.all(pokemonUrl)
             const res = await fetch(pokemon);
             const data = await res.json();
             
             console.log(data);
            } catch(err)  {
                console.log('oops', err)
                
            }
     }


    
        return (
            <div>
                <h1>pokemon</h1>
            </div>
        )


};






export default PokeFetch;