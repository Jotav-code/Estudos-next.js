import Link from "next/link";

export default function Menu(){
  return(
    
        <ul className="menu">
          <li><Link href="/">home</Link></li>
          <li><Link href="/sobre" prefetch={false}>Sobre</Link></li>
          <li><Link href="/contato" prefetch={true}>Contato</Link></li>
          <li><Link href="/imc">Imc</Link></li>
        </ul>
  
  )
}