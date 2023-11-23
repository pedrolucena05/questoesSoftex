import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/';
import Contador from './contador-inteligente';


test('incremento e constante funcionam corretamente', () => {
  const { getByText, getByTestId } = render(<Contador />);

  // Verifica se o valor inicial é 5
  expect(getByText(/Incremento:/)).toHaveTextContent('Incremento: 5');

  // se não aceita valor negativo no total
  fireEvent.click(getByTestId('decremento-montante'));
  fireEvent.click(getByTestId('decremento-montante'));
  expect(getByText(/W/)).toHaveTextContent('0W');
  

  // Clica no botão de incremento da constante
  fireEvent.click(getByTestId('incremento-constante'));
  
  // Verifica se o valor da constante é 10
  expect(getByText(/Incremento:/)).toHaveTextContent('Incremento: 10');

  // Clica no botão de incremento do montante
  fireEvent.click(getByTestId('incremento-montante'));
  
  // Verifica se o valor soma após o clique é 10
  expect(getByText(/W/)).toHaveTextContent('10W');

  // Clica no botão de decremento
  fireEvent.click(getByTestId('decremento-montante'));
  
  // Verifica se o valor soma após o decremento é igual a 0
  expect(getByText(/W/)).toHaveTextContent('0W');
  
  // Clica no botão de decremento da constante
  fireEvent.click(getByTestId('decremento-constante'));
  
  // Verifica se o valor após constante e decremento é 5
  expect(getByText(/Incremento:/)).toHaveTextContent('Incremento: 5');
});


