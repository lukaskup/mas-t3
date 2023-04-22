import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import EventEmitter from "events";
import { IncomingMessage } from "http";
import { getSession } from "next-auth/react";

const eventEmitter = new EventEmitter();

export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions
) => {
  const req = opts?.req;
  const res = opts?.res;

  const session = req && res && (await getSession({ req }));

  return {
    req,
    res,
    session,
    eventEmitter,
  };
};

type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => trpc.router<Context>();
