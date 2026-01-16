import { GetCursos } from "@/api/cursos"


export default async function PageCursos(){
  const cursos = await GetCursos();
  return <main>
    <h1 className=" text-5xl font-bold">Cursos</h1>
    {cursos.map((curso)=> <a key={curso.id} href={`/cursos/${curso.slug}`}> <li  className="flex flex-col border-2 border-amber-500 rounded-[10px] justify-center items-center flex-auto p-10 ">

      <h2>{curso.nome}</h2>
      <p>{curso.descricao}</p>


    </li></a>  )}
  </main>
}