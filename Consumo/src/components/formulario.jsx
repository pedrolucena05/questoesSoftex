import React from 'react';

const Formulario = () => {
  return (
    <form>
      <label htmlFor="meuInput">Texto:</label>
      <input type="text" id="meuInput" name="meuInput" />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Formulario;
