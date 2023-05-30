import { IClient } from './../src/models/person';
import { IInvoice } from "./invoice";
import { IOrder } from "./order";

export enum PaymentType {
  online = "ONLINE",
  cash = "CASH",
}

export interface IPayment {
  id: string;
  number: string;
  completed: boolean;
  type: PaymentType;
  //zwykla
  invoice?: IInvoice;
  order?: IOrder;
  client: IClient;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPaymentFormValues {
  type: PaymentType;
  invoiceNipNumber?: string;
}

export class Payment {
  public id: string = "";
  public number: string = "cuid";
  public completed: boolean = false;
  public type: PaymentType = PaymentType.cash;
  public invoice?: IInvoice;
  public order?: IOrder;
  public createdAt: Date = new Date();
  public updatedAt: Date = new Date();
  public getAmount = () => {
    return this.order?.products.reduce((prev, curr) => prev + curr.price, 0);
  };

  public static VAT = 0.23;

  //@ts-ignore
  public getVatValue = this.getAmount() ? this.getAmount() * Payment.VAT : 0;

  Payment({ payment }: { payment: IPayment }) {
    this.id = payment.id;
    this.number = payment.number;
    this.completed = payment.completed;
    this.type = payment.type;
    this.createdAt = payment.createdAt;
    this.updatedAt = payment.updatedAt;
  }

  public static showInfo(payment: IPayment) {
    console.log(
      `${payment.id} - ${payment.number} - ${payment.createdAt.toISOString()}`
    );
  }

  public changeId(id: number): void;
  public changeId(id: string): void;

  public changeId(id: number | string) {
    if (typeof id === "number") {
      this.id = id.toString();
    } else {
      this.id = id;
    }
  }
}