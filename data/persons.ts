import {
  IBoss,
  IClient,
  IPhysicalEmployee,
  IOfficeEmployee,
} from "./../models/person";
import { IOrder } from "./../models/order";
import { IInvoice } from "./../models/invoice";
import { v4 as uuidv4 } from "uuid";

export const persons: (IClient)[] = [
  {
    id: uuidv4(),
    firstname: "Lukasz",
    lastname: "Skup",
    phoneNumber: "02 222 222 222",
    email: "lukasz.skup@gmail.com",
    correspondenceAddress: "adres 21",
    deliveryAddress: "adres 12",
  },
  {
    id: uuidv4(),
    firstname: "Kamil",
    lastname: "Skup",
    correspondenceAddress: "adres 2",
    deliveryAddress: "adres 14",
    phoneNumber: "02 222 222 2212",
    email: "Kamil.skup@gmail.com",
  },
  {
    id: uuidv4(),
    firstname: "Mateusz",
    lastname: "Skup",
    correspondenceAddress: "adres 25",
    deliveryAddress: "adres 1",
    phoneNumber: "02 222 222 22322",
    email: "Mateusz.skup@gmail.com",
  },
];
