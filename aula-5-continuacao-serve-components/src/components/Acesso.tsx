  import fs from 'fs/promises'
  //criando arquivo quando o usuario loga, essa criação é feita pelo serivodr node home virou um server componente
  

export default async function Acesso(){
  await fs.appendFile('acesso.txx', `${Date.now}` ,'utf8');
  const data = fs.readFile('acesso.txx'); 
  return (
    <div>{data}</div>
  )
}