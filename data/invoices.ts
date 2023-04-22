import { IInvoice } from "../models/invoice";
import { v4 as uuidv4 } from "uuid";

export const invoices: IInvoice[] = [
  {
    id: uuidv4(),
    nip: 123123123,
    number: 123123123,
  },
  {
    id: uuidv4(),
    nip: 1111111111,
    number: 1221212121,
  },
];
