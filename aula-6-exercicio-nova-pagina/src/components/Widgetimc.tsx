'use client'

import React from "react"

export default function Imc(){
  const [altura, setAltura] = React.useState(0);
  const [peso, setPeso] = React.useState(0);
  const [imc, setImc] = React.useState<number | null>(null);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event?.preventDefault();

    const resultado = peso / (altura * altura);
    setImc(resultado)
  }


  return(
    <section>
    <form onSubmit={handleSubmit}>
      <input type="number" placeholder="Digite sua altura" onChange={(({target})=> setAltura(Number(target.value)))} value={altura} />
      <input type="number" placeholder="Digite seu peso" onChange={(({target})=> setPeso(Number(target.value)))} value={peso} />
      <button type="submit">Calcular</button>
    </form>

    {imc && <p>{imc}</p> }
    </section>
  )
}