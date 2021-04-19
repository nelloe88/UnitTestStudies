import React from 'react';
import {render} from '@testing-library/react'
import Transacao from './Transacao'

describe('compoente de transacao do extratp',() => {
    it('O snapshot do compoente deve  permanecer sempre o mesmo', () => {

        const listaDeTransacoes = [
            { id: 1, tipo: 'saque', valor: '20.00', data: '08/09/2020' },
            { id: 2, tipo: 'deposito', valor: '25.00', data: '08/10/2020' },
            { id: 3, tipo: 'saque', valor: '30.00', data: '10/09/2020' }
          ]

          const {container} = render( <Transacao transacoes={listaDeTransacoes}   />)


          /*
        const {container} = render( <Transacao
            data="08/09/2020"
            tipo="saque"
            valor="20.00"

        />)*/

        expect(container.firstChild).toMatchSnapshot();
    })


})