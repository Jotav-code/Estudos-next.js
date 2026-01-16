import Link from "next/link";

export default function Menu(){
  return(
    
        <ul className="menu">
          <li><Link href="/">home</Link></li>
          <li><Link href="/cursos">Cursos</Link></li>
          
        </ul>
  
  )
}