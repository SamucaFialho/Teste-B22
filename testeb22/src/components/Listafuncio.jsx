import React from 'react'
import funcionario from '../data/funcionario'

export default () => {
    //    console.log(funcionario)

    //    const li1 = (

    //        <li>
    //            {funcionario[0].id} - {funcionario[0].nome}
    //        </li>
    //   )

    const lista = funcionario.map((funcionario) => {
        return (
            <li key={funcionario.id}>
                {funcionario.id} - {funcionario.nome}</li>

        )
    })


    return (

        <div>
            <ul>
                {lista}
            </ul>

        </div>

    )


}