import type { IPhysical, IService } from "./product";
import type { IPayment, IPaymentFormValues } from "./payment";
import type { IClient } from "./person";

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
  createdAt: Date;
  completedAt: Date;
  payment: IPayment;
  products: (IPhysical | IService)[];
  client: IClient | undefined;
}

export type OrderFormValues = Omit<
  IOrder,
  "id" | "createdAt" | "completedAt" | "status" | "payment" | "price"
> & {
  payment: IPaymentFormValues;
};
