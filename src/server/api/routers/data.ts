import { payments } from "../../../../data/payments";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const dataRouter = createTRPCRouter({
  getData: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.payment.findMany();
  }),
  fillData: publicProcedure.mutation(({ ctx }) => {
    return ctx.prisma.payment.createMany({
      data: payments as any[],
    });
  }),
  clearDb: publicProcedure.mutation(({ ctx }) => {
    return ctx.prisma.payment.deleteMany();
  }),
});
