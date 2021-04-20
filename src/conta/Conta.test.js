import { render ,screen, fireEvent} from '@testing-library/react'
import React from 'react'
import Conta from './Conta'


describe('Componente de conta', () => {

    it('Exibit o saldo da conta como valor monetario', () => {

        render(<Conta saldo={1000} />)

        const saldo = screen.getByTestId('saldo-conta');


        expect(saldo.textContent).toBe('R$ 1000');
    })

    it('Chama a função de realizar transação quando o botão é clicado', () => {
        

        const functionRealizarTransacao = jest.fn()

        render(<Conta saldo={1000} realizarTransacao={functionRealizarTransacao} />)

        fireEvent.click(screen.getByText('Realizar operação'))

        expect(functionRealizarTransacao).toHaveBeenCalled();


    })

})