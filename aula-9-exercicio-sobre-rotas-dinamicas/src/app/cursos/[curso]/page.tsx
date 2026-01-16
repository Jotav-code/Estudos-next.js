import { GetCurso } from "@/api/cursos"
import Link from "next/link";

type Params = {
  params: Promise<{curso:string}>
}


export default async function Curso({params}: Params){
  const {curso} = await params
  const cursos = await GetCurso(`${curso}`);
  console.log(cursos)
  return <main>
    <h1 className=" text-5xl font-bold">Curso: {cursos.nome}</h1>
    <p>{cursos.descricao}</p>
    <p>total de aulas{cursos.total_aulas}</p>
    <ul className="flex flex-col">
      {cursos.aulas.map((aula)=> {
      return <Link key={aula.id} href={`/cursos/${curso}/${aula.slug}`}>{aula.nome}</Link>
    })}
    </ul>

      
  </main>
}