import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createRouter } from "./context";
import { prisma } from "../../db";

export const authRouter = createRouter()
  .query("getSession", {
    resolve({ ctx }) {
      return ctx.session;
    },
  })
  .mutation("signup", {
    input: z.object({
      email: z.string().email(),
      name: z.string(),
      password: z.string(),
      passwordConfirm: z.string(),
    }),
    async resolve({ ctx }) {
      const { req, res } = ctx;
      if (!!!req) return res?.send(400);
      const user = req.body["0"].json;

      if (user.password !== user.confirmPassword) return res?.send(400);

      await prisma?.user.create({
        data: {
          email: user.email,
          name: user.name,
          password: "",
        },
      });

      return res?.send(200);
    },
  })
  .middleware(async ({ ctx, next }) => {
    if (!ctx.session) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return next();
  })
  .query("getSecretMessage", {
    async resolve({ ctx }) {
      return "You are logged in and can see this secret message!";
    },
  });
