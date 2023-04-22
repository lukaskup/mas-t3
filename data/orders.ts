import { persons } from "./persons";
import { IOrder, OrderStatus } from "./../models/order";
import { IInvoice } from "./../models/invoice";
import { v4 as uuidv4 } from "uuid";
import { payments } from "./payments";
import { products } from "./products";

export const orders: IOrder[] = [
  {
    id: uuidv4(),
    completedAt: new Date(),
    createdAt: new Date(),
    description: "test",
    price: 20,
    products: [products[0], products[1], products[2]],
    payment: payments[0],
    status: OrderStatus.inProgress,
    client: persons[0],
  },
];
