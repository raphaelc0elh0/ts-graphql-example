import { container } from "tsyringe";
import { NotFoundError } from "../../shared/error/NotFoundError";
import PostsRepository from "../posts/repository";
import AuthorsRepository from "./repository";

const authorsRepo = container.resolve(AuthorsRepository);
const postsRepo = container.resolve(PostsRepository);

const resolvers = {
  Author: {
    posts(parent: any, args: any, contextValue: any, info: any) {
      return postsRepo.listByAuthor(parent.id);
    },
  },
  Query: {
    getAuthor(parent: any, args: any, contextValue: any, info: any) {
      const author = authorsRepo.findById(args.id);
      if (!author) {
        throw new NotFoundError("Author not found");
      }

      return author;
    },
  },
};

export default resolvers;
