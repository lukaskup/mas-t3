interface Payment {
  id: string;
  number: string;
  completed: boolean;
  type: string;
  invoiceId?: string;
  invoice?: Invoice;
  orderId?: string;
  order?: Order;
  createdAt: Date;
  updatedAt: Date;
}

interface Invoice {
  id: string;
  number: string;
  nip: string;
  paymentId: string;
  payment?: Payment;
  createdAt: Date;
  updatedAt: Date;
}

interface Person {
  id: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  type: string;
  email?: string;
  address?: string;
  pesel?: string;
  position?: string;
  wage?: number;
  deliveryAddress?: string;
  correspondenceAddress?: string;
  education?: string;
  incomingMeetings: string[];
  courses: string[];
  orders: Order[];
  createdAt: Date;
  updatedAt: Date;
}

interface Order {
  id: string;
  price: number;
  description: string;
  status: string;
  completedAt?: Date;
  payment?: Payment;
  createdAt: Date;
  updatedAt: Date;
  products: ProductOrder[];
  delivery?: Delivery;
  return?: Return;
  personId?: string;
  person?: Person;
}

interface Discount {
  id: string;
  name: string;
  percentValue: number;
  createdAt: Date;
  updatedAt: Date;
  products: Product[];
}

interface Product {
  id: string;
  name: string;
  price: number;
  type: ProductType;
  parameters: string[];
  category?: Category;
  orders: ProductOrder[];
  discountId?: string;
  discount?: Discount;
  supplierId?: string;
  supplier?: Supplier;
  stocks: Stock[];
  categoryId?: string;
}

interface ProductOrder {
  id: string;
  productId: string;
  orderId: string;
  product?: Product;
  order?: Order;
  qty: number;
}

interface Supplier {
  id: string;
  name: string;
  address: string;
  email?: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
  products: Product[];
}

interface Warehouse {
  id: string;
  name: string;
  location: string;
  capacity: number;
  createdAt: Date;
  updatedAt: Date;
  stocks: Stock[];
}

interface Stock {
  id: string;
  productId: string;
  warehouseId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
  product: Product;
  warehouse: Warehouse;
}

interface Category {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  products: Product[];
}

interface Delivery {
  id: string;
  orderId: string;
  employeeId: string;
  deliveredAt: Date;
  createdAt: Date;
  updatedAt: Date;
  order: Order;
}

interface Return {
  id: string;
  orderId: string;
  reason: string;
  createdAt: Date;
  updatedAt: Date;
  order: Order;
}

enum PaymentType {
  online = "ONLINE",
  cash = "CASH",
}

enum OrderStatus {
  inProgress = "IN_PROGRESS",
  completed = "COMPLETED",
}

enum ProductType {
  physical = "PHYSICAL",
  service = "SERVICE",
}
