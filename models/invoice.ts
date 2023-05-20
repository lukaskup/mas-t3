import { IPayment } from "./payment";

export interface IInvoice {
  id: string;
  number: number;
  nip: number;
  //opcjonalny
  payment?: IPayment;
}
