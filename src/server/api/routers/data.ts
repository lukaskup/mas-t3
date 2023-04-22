import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const dataRouter = createTRPCRouter({
  clearDb: publicProcedure.mutation(() => {
    return "test";
  }),
});
