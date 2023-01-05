import { NotFoundError } from "../../shared/error/NotFoundError";
import PostsRepository from "../posts/repository";
import AuthorsRepository from "./repository";

import { AuthorResolvers, QueryResolvers } from "../../utils/graphql/generated";

const authorsRepo = new AuthorsRepository();
const postsRepo = new PostsRepository();

const resolvers = {
  Author: {
    posts(parent, args, contextValue, info) {
      return postsRepo.listByAuthor(parent.id);
    },
  } as AuthorResolvers,

  Query: {
    getAuthor(parent, args, contextValue, info) {
      const author = authorsRepo.findById(args.id);
      if (!author) {
        throw new NotFoundError("Author not found");
      }

      return author;
    },
  } as QueryResolvers,
};

export default resolvers;
