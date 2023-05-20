import { IPayment, PaymentType } from "./../models/payment";
import { invoices } from "./invoices";

export const payments: IPayment[] = [
  {
    id: "id",
    completed: true,
    createdAt: new Date(2022, 1, 1),
    type: PaymentType.cash,
    number: "1234",
    updatedAt: new Date(2022, 2, 1),
  },
];
