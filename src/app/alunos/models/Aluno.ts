export interface IAluno {
  id: number;
  name: string;
  email: string;
}

export class Aluno {
  id: number;
  name: string;
  email: string;

  constructor(data: IAluno) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
  }
}
