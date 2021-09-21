export interface ICurso {
  id: number;
  name: string;
}

export class Curso {
  id: number;
  name: string;

  constructor(data: ICurso) {
    this.id = data.id;
    this.name = data.name;
  }
}
