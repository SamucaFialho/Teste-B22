import React from 'react'
import {useState} from 'react'

export default function(Nome) {
    
    const [nome, setNome] = useState
    ('B22')

function trocarNome(){
   // alert('Trocar')
   setNome('Start')
}

    return(
        <>
        <h2>Ola: </h2>
        <button onClick={()=>trocarNome('Diego')}>Trocar Nome</button>
    
        </>



    )





}