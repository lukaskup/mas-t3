import { createTRPCRouter } from "./trpc";
import { dataRouter } from "./routers/data";
import { authRouter } from "./routers/auth";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  data: dataRouter,
  // auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
