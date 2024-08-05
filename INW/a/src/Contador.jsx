import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState('Rebeca')

  function handleClick(){
    setContador(contador === "Rebeca" ? "Ouro" : "Rebeca")
    console.log(contador)
  }

  return (
    <>
    <p>{contador}</p>
    <button onClick={handleClick}>Aumentar</button>
    </>
  )
}

export default Contador
