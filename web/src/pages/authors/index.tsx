import { useGetAuthorsQuery } from "../../utils/graphql/generated";

export default function AuthorList() {
  const { data } = useGetAuthorsQuery();

  return (
    <>
      {data?.getAuthors.map((author) => (
        <div key={author?.id}>
          {author?.id}, {author?.firstName}
        </div>
      ))}
    </>
  );
}
