import { NotFoundError } from "../../shared/error/NotFoundError";
import AuthorsRepository from "../authors/repository";
import PostsRepository from "./repository";

const resolvers = {
  Post: {
    author(parent: any, args: any, contextValue: any, info: any) {
      const author = new AuthorsRepository().findById(parent.author_id);
      if (!author) {
        throw new NotFoundError("Author not found");
      }

      return author;
    },
  },
  Query: {
    getPosts() {
      const posts = new PostsRepository().list();

      return posts;
    },
  },
};

export default resolvers;
