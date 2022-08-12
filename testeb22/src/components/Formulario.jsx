import React from "react";
import { useState } from "react";

export default function Formulario(){

    const [nome,setNome] = useState('')
    const [idade,setIdade] = useState('')
    const [email,setEmail] = useState('')

    const [user, setUser] = useState({})

    function registrar(event) {
        alert('Esta funcionando')
        event.preventDefault()

        setUser({
            nome: nome,
            idade: idade,
            email, email,
        })
        
    }

return(
    <div>
        <form onSubmit={registrar}>
            <h1>Cadastrando Usuário</h1>
            <label>Nome:</label><br/>
            <input placeholder="Digite seu nome" value={nome} onChange={(event) => setNome(event.target.value)}/><br/>

            <label>Idade:</label>
            <input placeholder="Digite sua idade" value={idade} onChange={(event) => setIdade(event.target.value)}/><br/><br/>

            <label> E-mail:</label>
            <input placeholder="Digite seu email" value={email} onChange={(event) => setEmail(event.target.value)}/><br/><br/>
            <button type="submit">Registrar</button>
        </form>

        <span>Bem vindo (a): {user.nome}</span><br/>
        <span>Idade: {user.idade}</span><br/>
        <span>Email: {user.email}</span><br/>
    </div>
  


)
}