import Width from "@/components/Width"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'sobre nos' 
}

export default function Sobre(){

  

  return (<div>
    <h1>Sobre</h1>
    <Width />
    </div>
  )
}