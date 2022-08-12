import React from 'react'
import './modelo.css'

export default props => {


    const estilo = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }



    return(
<div className='card' style={estilo}>
    <div className='title'>titulo</div>
    <div className='conteudo'>{props.children}</div>

</div>



    )

}