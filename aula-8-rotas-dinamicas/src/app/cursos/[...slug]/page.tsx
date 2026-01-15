type pageParams = {
  params: Promise<{slug: string}>
}


export default async function Cursos({params}: pageParams){
  const { slug } = await params

  console.log(slug)
  return <div>
    <h1>Cursos</h1>
    <p></p>

  </div>
}