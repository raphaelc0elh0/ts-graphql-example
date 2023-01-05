import { NotFoundError } from "../../shared/error/NotFoundError";
import AuthorsRepository from "../authors/repository";
import PostsRepository from "./repository";

import {
  MutationResolvers,
  PostResolvers,
  QueryResolvers,
} from "../../utils/graphql/generated";

const authorsRepo = new AuthorsRepository();
const postsRepo = new PostsRepository();

const resolvers = {
  Post: {
    author(parent, args, contextValue, info) {
      const author = authorsRepo.findById(parent.author_id);
      if (!author) {
        throw new NotFoundError("Author not found");
      }

      return author;
    },
  } as PostResolvers,

  Query: {
    getPosts() {
      return postsRepo.list();
    },
  } as QueryResolvers,

  Mutation: {
    createPost(parent, args, contextValue, info) {
      const { title, author_id } = args.input;

      return postsRepo.create({ title, author_id });
    },
  } as MutationResolvers,
};

export default resolvers;
