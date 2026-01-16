type PageListagem = {
  id: number,
  slug: string,
  nome: string,
  descricao: string,
  total_aulas: number,
  total_horas: number
}


export default async function listagem_de_todos_cursos(){
  const response = await fetch('https://api.origamid.online/cursos');
  const data = await response.json();
  console.log(data)

  return <section className="flex">
    {data && data.map((curso:PageListagem)=><a key={curso.id} href={`/cursos/${curso.slug}`}> <li  className="flex flex-col border-2 border-amber-500 rounded-[10px] justify-center items-center flex-auto p-10 ">

      <h2>{curso.nome}</h2>
      <p>{curso.descricao}</p>


    </li></a> )}
  </section>
}