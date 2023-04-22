import { StringValidation } from "zod";
import { IInvoice } from "./invoice";
import { IOrder } from "./order";

export enum PaymentType {
  online = "ONLINE",
  cash = "CASH",
}

export interface IPayment {
  id: string;
  number: StringValidation;
  completed: boolean;
  type: PaymentType;
  invoice?: IInvoice;
  order?: IOrder;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPaymentFormValues {
  type: PaymentType;
  invoiceNipNumber?: string;
}
