import { GetAula, GetCurso } from "@/api/cursos"
import Link from "next/link";

type Params = {
  params: Promise<{curso:string, aula:string}>
}


export default async function Aula({params}: Params){
  const {curso, aula} = await params
  const aulas = await GetAula(`${curso}`, `${aula}`);
  console.log(aulas)
  return <main>
    <h1 className=" text-5xl font-bold">Curso: {aulas.nome}</h1>
    
    <h2>{aulas.nome}</h2>
    <h3>{aulas.descricao}</h3>
      
  </main>
}