import express, { json } from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import schema from "./utils/graphql/schema";

export const expressApp = async () => {
  const app = express();

  app.use(cors());
  app.use(json());

  const server = new ApolloServer({ schema });
  await server.start();

  app.use("/graphql", expressMiddleware(server));

  return app;
};
