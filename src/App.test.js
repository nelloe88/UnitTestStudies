import React  from 'react'
import {fireEvent, render,screen, act} from '@testing-library/react'
import App, { calcularNovoSaldo } from './App';

describe('Componente principal', () => {
    describe('Quando abro app do banco', () => {
        it('Mostrar o nome do banco', () => {
            render(<App />);

            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        });

        it('Mostrar Saldo', () => {
            render(<App />);
        
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        
        });

        it('Mostrar botao realizar transacoes', () => {
            render(<App />);
        
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        
        })
    })
    describe('quando realizar uma transaçao', () => {

        it('que é um saque, o valor vai diminuir', () => {
            const valores = {
                transacao: 'saque',
                valor: 50

            }
            //const novoSaldo = calcularNovoSaldo(valores, saldo)
            const novoSaldo = calcularNovoSaldo(valores, 150)
            //esperado ser 100
            expect(novoSaldo).toBe(100)
        });
        /*it('que é um saque , a transacao deve ser realizada', () => {

            const {getByText, getByTestId, getByLabelText} = render(<App />);

            const saldo = getByText('R$ 1000')
            const transacao = getByLabelText('Saque')
            const valor = getByTestId('valor')
            const botaoTransacao = getByText('Realizar operação')

            expect(saldo.textContent).toBe('R$ 1000')

            fireEvent.click(transacao, {target: {value: 'saque'}})
            fireEvent.change(valor, { target: {value: 10}})
            fireEvent.click(botaoTransacao)

            expect(saldo.textContent).toBe('R$ 990')
        })*/
        test('que é um saque, a transação deve ser realizada', () => {
            
            render(<App />);
      
            const saldo = screen.getByText('R$ 1000');
            const transacao =  screen.getByLabelText('Saque');
            const valor = screen.getByTestId('valor');
            const botaoTransacao = screen.getByText('Realizar operação');
      
           
      
                fireEvent.click(transacao, { target: { value: 'saque'}});
                fireEvent.change(valor, { target: { value:  10 }});
                fireEvent.click(botaoTransacao);
      
           //expect(saldo.textContent).toBe('R$ 1000')
            expect(saldo.textContent).toBe('R$ 990');
          })
    
    })

})
