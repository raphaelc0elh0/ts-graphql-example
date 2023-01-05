import { container } from "tsyringe";
import AuthorsRepository from "../../modules/authors/repository";
import PostsRepository from "../../modules/posts/repository";

container.registerSingleton("AuthorsRepo", AuthorsRepository);
container.registerSingleton("PostsRepo", PostsRepository);
