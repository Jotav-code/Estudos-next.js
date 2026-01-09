"use client";
import React from 'react'

export default function Width(){

  const [width, setWidth] = React.useState(0);
  const [ativar, setAtivar] = React.useState(false)

  React.useEffect(()=>{
    const handlResize = ()=>{
      setWidth(document.documentElement.clientWidth);
    }
    handlResize()

    window.addEventListener('resize', handlResize);

    return () =>{
      window.removeEventListener('resize' ,handlResize);
    }
  })


  return (
    <div>
      <h2 style={{color: ativar ? '#d10010' : '#eee'}} >Largura da tela = {width}</h2>
      <button onClick={()=> setAtivar((b)=> !b)}> Ativar </button>
    </div>
  )
}