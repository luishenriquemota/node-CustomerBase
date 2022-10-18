


export interface IClient {
  name: string;
  email: string;
  password: string;
  telephone: string
}

export interface IReturnClient {
  id: string;
  name: string;
  email: string;
  telephone: string;
  created_at: Date;
}


export interface IChangeClient {
  name: string,
  email: string,
  telephone: string;
}


export interface ILogin {
  email: string,
  password: string
}