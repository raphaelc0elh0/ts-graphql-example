type Post = {
  id: string;
  title: string;
  votes: number;
  author_id: string;
};

export default class PostsRepository {
  private posts: Post[] = [
    {
      id: "980cfbd1-4829-44ed-9f7f-dfcb8cecad08",
      title: "Post",
      votes: 0,
      author_id: "b6e4e429-3c3d-4dd2-a92e-983b6608d081",
    },
  ];

  findById(id: string) {
    return this.posts.find((post) => post.id === id);
  }

  list() {
    return this.posts;
  }

  listByAuthor(author_id: string) {
    return this.posts.filter((post) => post.author_id === author_id);
  }
}
