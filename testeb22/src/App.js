import React from 'react'
import './index.css'
import Primeiro from './components/Primeiro'
import Comparametro from './components/Comparametro'
import Fragmento from './components/Fragmento';
import Cartao from './components/modelo/Cartao';
import './app.css'
import Numeros from './components/Numeros';
import Foto from './components/Foto'
import Imagem from './images/Foto_Samuel.jpg';
import Listafuncio from './components/Listafuncio';
import Nome from './components/Nome';
import Formulario from './components/Formulario'
import Tarefas from './components/Tarefas';

export default function App(){
    return(
        <div className='App'>
            <h1>Fundamentos React</h1>
            <div className='Cards'>
            
            <Cartao titulo= 'Lista de Tarefas' color='lightblue'>
                <Tarefas/>
            </Cartao>

            <Cartao titulo='Formularios' color='grey'>
                <Formulario/>
            </Cartao>

            <Cartao titulo='Nome' color='green'>
                <Nome/>
            </Cartao>

            <Cartao titulo='Lista' color='pink'>
                    <Listafuncio/>
            </Cartao>

                <Cartao titulo='Imagem em React' color='blue'>
                    <Foto img= {Imagem} />
                </Cartao>

                <Cartao titulo='Primeiro componente React' color='orange'><Primeiro /></Cartao>

                <Cartao titulo=' Numeros aleatorios' color='#00ff00'>
                    <Numeros min={10} max={100} />
                </Cartao>
                <Cartao titulo='Primeiro componente em props' color='red'><Comparametro titulo='Hoje é quarta-feira'
                    subtitulo='03/08/2022' /></Cartao>
                <Cartao titulo='Primeiro componente React'><Comparametro titulo='Aula de React'
                    subtitulo='parâmetros' /></Cartao>
                <Cartao titulo='Primeiro componente React' color='purple'><Comparametro titulo='teste' /></Cartao>
                <Cartao titulo='Utilizando React.Fragment' color='yellow'><Fragmento/></Cartao>
            </div>

        </div>


    )
}