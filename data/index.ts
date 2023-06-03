const payments: Payment[] = [
  {
    id: "1",
    number: "P001",
    completed: true,
    type: PaymentType.online,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    number: "P002",
    completed: false,
    type: PaymentType.cash,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const invoices: Invoice[] = [
  {
    id: "1",
    number: "INV001",
    nip: "123456789",
    paymentId: "1",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    number: "INV002",
    nip: "987654321",
    paymentId: "2",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const persons: Person[] = [
  {
    id: "1",
    firstname: "John",
    lastname: "Doe",
    phoneNumber: "1234567890",
    type: "customer",
    email: "johndoe@example.com",
    address: "123 Main Street",
    pesel: "12345678901234",
    position: "Manager",
    wage: 5000,
    deliveryAddress: "456 Elm Street",
    correspondenceAddress: "789 Oak Street",
    education: "Bachelor's Degree",
    incomingMeetings: ["Meeting A", "Meeting B"],
    courses: ["Course A", "Course B"],
    orders: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    firstname: "Jane",
    lastname: "Smith",
    phoneNumber: "9876543210",
    type: "customer",
    email: "janesmith@example.com",
    address: "456 Elm Street",
    pesel: "98765432109876",
    position: "Sales Representative",
    wage: 4000,
    deliveryAddress: "789 Oak Street",
    correspondenceAddress: "123 Main Street",
    education: "Master's Degree",
    incomingMeetings: ["Meeting C", "Meeting D"],
    courses: ["Course C", "Course D"],
    orders: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const orders: Order[] = [
  {
    id: "1",
    price: 100.99,
    description: "Order 1 description",
    status: OrderStatus.inProgress,
    completedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    products: [],
  },
  {
    id: "2",
    price: 50.5,
    description: "Order 2 description",
    status: OrderStatus.completed,
    completedAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    products: [],
  },
];

const discounts: Discount[] = [
  {
    id: "1",
    name: "Discount A",
    percentValue: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
    products: [],
  },
  {
    id: "2",
    name: "Discount B",
    percentValue: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
    products: [],
  },
];

const products: Product[] = [
  {
    id: "1",
    name: "Product A",
    price: 9.99,
    type: ProductType.physical,
    parameters: ["Param A", "Param B"],
    orders: [],
    stocks: [],
  },
  {
    id: "2",
    name: "Product B",
    price: 19.99,
    type: ProductType.service,
    parameters: ["Param C", "Param D"],
    categoryId: "2",
    discountId: "2",
    supplierId: "2",
    orders: [],
    stocks: [],
  },
];

const productOrders: ProductOrder[] = [
  {
    id: "1",
    productId: "1",
    orderId: "1",
    qty: 2,
  },
  {
    id: "2",
    productId: "2",
    orderId: "1",
    qty: 1,
  },
];

const suppliers: Supplier[] = [
  {
    id: "1",
    name: "Supplier A",
    address: "123 Supplier Street",
    email: "suppliera@example.com",
    phone: "1234567890",
    createdAt: new Date(),
    updatedAt: new Date(),
    products: [],
  },
  {
    id: "2",
    name: "Supplier B",
    address: "456 Supplier Street",
    email: "supplierb@example.com",
    phone: "9876543210",
    createdAt: new Date(),
    updatedAt: new Date(),
    products: [],
  },
];

const warehouses: Warehouse[] = [
  {
    id: "1",
    name: "Warehouse A",
    location: "Location A",
    capacity: 1000,
    createdAt: new Date(),
    updatedAt: new Date(),
    stocks: [],
  },
  {
    id: "2",
    name: "Warehouse B",
    location: "Location B",
    capacity: 2000,
    createdAt: new Date(),
    updatedAt: new Date(),
    stocks: [],
  },
];

const stocks: Stock[] = [
  {
    id: "1",
    productId: "1",
    warehouseId: "1",
    quantity: 50,
    createdAt: new Date(),
    updatedAt: new Date(),
    product: products[0] as Product,
    warehouse: warehouses[0] as Warehouse,
  },
  {
    id: "2",
    productId: "2",
    warehouseId: "2",
    quantity: 100,
    createdAt: new Date(),
    updatedAt: new Date(),
    product: products[0] as Product,
    warehouse: warehouses[0] as Warehouse,
  },
];

const categories: Category[] = [
  {
    id: "1",
    name: "Category A",
    createdAt: new Date(),
    updatedAt: new Date(),
    products: [],
  },
  {
    id: "2",
    name: "Category B",
    createdAt: new Date(),
    updatedAt: new Date(),
    products: [],
  },
];

const deliveries: Delivery[] = [
  {
    id: "1",
    orderId: "1",
    employeeId: "EMP001",
    deliveredAt: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
    order: orders[0] as Order,
  },
];

const returns: Return[] = [
  {
    id: "1",
    orderId: "1",
    reason: "Product damaged",
    createdAt: new Date(),
    updatedAt: new Date(),
    order: orders[0] as Order,
  },
];
