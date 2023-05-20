import { IPhysical, IService } from "./product";
import { IPayment, IPaymentFormValues } from "./payment";
import { IClient } from "./person";

export enum OrderStatus {
  inProgress = "INPROGESS",
  ready = "READY",
  completed = "COMPLETED",
  canceled = "CANCELED",
}

export interface IOrder {
  id: string;
  price: number;
  description: string;
  status: OrderStatus;
  completedAt: Date;
  payment?: IPayment;
  //powtarzalny
  products: (IPhysical | IService)[];
  client: IClient | null;
  createdAt: Date;
}

export type OrderFormValues = Omit<
  IOrder,
  "id" | "createdAt" | "completedAt" | "status" | "payment" | "price"
> & {
  payment: IPaymentFormValues;
};
