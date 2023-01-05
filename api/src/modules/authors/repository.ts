type Author = {
  id: string;
  firstName: string;
  lastName: string;
};

export default class AuthorsRepository {
  private authors: Author[] = [
    {
      id: "b6e4e429-3c3d-4dd2-a92e-983b6608d081",
      firstName: "Raphael",
      lastName: "Coelho",
    },
  ];

  findById(id: string) {
    return this.authors.find((author) => author.id === id);
  }
}
