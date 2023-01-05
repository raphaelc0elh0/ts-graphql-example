import { useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();

  return <div>{id}</div>;
}
