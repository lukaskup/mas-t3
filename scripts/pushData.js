const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function pushExampleDataToDB() {
  try {
    // Push data for models with relationships
    const createdPayments = await prisma.payment.createMany({ data: payments });
    const createdInvoices = await prisma.invoice.createMany({ data: invoices });
    const createdPersons = await prisma.person.createMany({ data: persons });
    const createdOrders = await prisma.order.createMany({ data: orders });
    const createdDiscounts = await prisma.discount.createMany({
      data: discounts,
    });
    const createdProducts = await prisma.product.createMany({ data: products });
    const createdProductOrders = await prisma.productOrder.createMany({
      data: productOrders,
    });
    const createdSuppliers = await prisma.supplier.createMany({
      data: suppliers,
    });
    const createdWarehouses = await prisma.warehouse.createMany({
      data: warehouses,
    });
    const createdStocks = await prisma.stock.createMany({ data: stocks });
    const createdCategories = await prisma.category.createMany({
      data: categories,
    });
    const createdDeliveries = await prisma.delivery.createMany({
      data: deliveries,
    });
    const createdReturns = await prisma.return.createMany({ data: returns });

    console.log("Example data pushed to the database successfully.");
  } catch (error) {
    console.error("Error pushing example data to the database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

pushExampleDataToDB();
