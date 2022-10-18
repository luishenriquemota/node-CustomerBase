
export interface IContact {
  name: string;
  email: string;
  telephone: string
}

export interface IReturnContactCreate {
  id: number;
  name: string;
  email?: string;
  telephone?: string;
  client: {
    id: string,
    name:string
  }
}

export interface IReturnContactUpdate {
  id: number,
  name: string,
  email: string,
  telephone: string
}