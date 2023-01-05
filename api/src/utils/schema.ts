import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

const typeDefs = loadSchemaSync("./src/**/*.graphql", {
  loaders: [new GraphQLFileLoader()],
});
const resolvers = mergeResolvers(loadFilesSync("./src/**/resolvers.ts"));

export const schema = makeExecutableSchema({ typeDefs, resolvers });
