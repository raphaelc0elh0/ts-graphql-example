import { container } from "tsyringe";
import { NotFoundError } from "../../shared/error/NotFoundError";
import AuthorsRepository from "../authors/repository";
import PostsRepository from "./repository";

const authorsRepo = container.resolve(AuthorsRepository);
const postsRepo = container.resolve(PostsRepository);

const resolvers = {
  Post: {
    author(parent: any, args: any, contextValue: any, info: any) {
      const author = authorsRepo.findById(parent.author_id);
      if (!author) {
        throw new NotFoundError("Author not found");
      }

      return author;
    },
  },
  Query: {
    getPosts() {
      return postsRepo.list();
    },
  },
  Mutation: {
    createPost(parent: any, args: any, contextValue: any, info: any) {
      const { title, author_id } = args.input;

      return postsRepo.create({ title, author_id });
    },
  },
};

export default resolvers;
