import { IPayment, PaymentType } from "./../models/payment";
import { v4 as uuidv4 } from "uuid";
import { invoices } from "./invoices";

export const payments: IPayment[] = [
  {
    id: uuidv4(),
    completed: true,
    createdAt: new Date(2022, 1, 1),
    type: PaymentType.cash,
    invoice: invoices[0],
  },
];
