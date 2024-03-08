
export interface Titulo_Interface {
  id?: number;
  tipo: 0 | 1 ;
  descricao: String;
  valor: number;
  categoria? : string;
  data : Date;
  quitado : boolean
}
