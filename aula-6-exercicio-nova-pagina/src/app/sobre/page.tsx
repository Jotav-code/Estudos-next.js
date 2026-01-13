
import WidthClient from "@/components/wIdthClient"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Sobre',
  description: 'sobre nos' 
}

export default function Sobre(){

  

  return (<div>
    <h1>Sobre</h1>
    <WidthClient />
    </div>
  )
}