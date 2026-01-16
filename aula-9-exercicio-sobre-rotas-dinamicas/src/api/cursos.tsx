type Curso = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

type Aula = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
};

export async function GetCursos(){
  const response = await fetch('https://api.origamid.online/cursos')
  const data = await response.json() as Curso[]
  return data
} 

export async function GetCurso(curso:string) {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}`)
  const data = await response.json()
  return data as Curso & {
    aulas: Aula[]
  }
}

export async function GetAula(curso:string, aula:string) {
  const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`);
  const data = await response.json();
  return data as Aula
}