type pageParams = {
  params : Promise<{id: string}>
}

type Produto = {
  id: number,
  preco: number,
  descricao: string,
  estoque: number,
  importado: number,
  nome: string
}



export default async function Produto({params}: pageParams){
  const { id } = await params
  const response = await fetch(`https://api.origamid.online/produtos/${id}`)
  const data: Produto = await response.json();
  console.log(data)
  return <div>
    <h1>{data.nome}</h1>
    <p>{data.preco}</p>

  </div>
}