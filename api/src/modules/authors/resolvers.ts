import { NotFoundError } from "../../shared/error/NotFoundError";
import PostsRepository from "../posts/repository";
import AuthorsRepository from "./repository";

const resolvers = {
  Author: {
    posts(parent: any, args: any, contextValue: any, info: any) {
      const posts = new PostsRepository().listByAuthor(parent.id);

      return posts;
    },
  },
  Query: {
    getAuthor(parent: any, args: any, contextValue: any, info: any) {
      const author = new AuthorsRepository().findById(args.id);
      if (!author) {
        throw new NotFoundError("Author not found");
      }

      return author;
    },
  },
};

export default resolvers;
