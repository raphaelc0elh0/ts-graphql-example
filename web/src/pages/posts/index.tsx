import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Input,
  LinkOverlay,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  CreatePost,
  useCreatePostMutation,
  useGetAuthorsQuery,
  useGetPostsQuery,
} from "../../utils/graphql/generated";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function PostList() {
  const getAuthorsQuery = useGetAuthorsQuery();
  const { data, loading, refetch } = useGetPostsQuery();
  const [mutate, mutation] = useCreatePostMutation();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useForm<CreatePost>();

  const onSubmit = async (data: CreatePost) => {
    mutate({ variables: { input: data } })
      .then(() => {
        refetch();
      })
      .catch((e) => console.log(e))
      .finally(() => {
        form.reset();
        onClose();
      });
  };

  return (
    <>
      {loading || mutation.loading ? <>Carregando...</> : null}

      <Stack>
        {data?.getPosts.map((post) => (
          <Link key={post?.id} to={`/posts/${post?.id}`}>
            <LinkOverlay>
              <Card>
                <CardHeader>
                  <Heading>{post?.title}</Heading>
                  <Text>{post?.votes}</Text>
                </CardHeader>
              </Card>
            </LinkOverlay>
          </Link>
        ))}
      </Stack>

      <Button onClick={onOpen} mt={4}>
        Criar Post
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <ModalHeader>Criar Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack>
                <FormControl isRequired>
                  <FormLabel>Título</FormLabel>
                  <Input {...form.register("title")} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Autor</FormLabel>
                  <Select
                    placeholder="Selecionar"
                    {...form.register("author_id")}
                  >
                    {getAuthorsQuery.data?.getAuthors.map((author) => (
                      <option key={author?.id} value={author?.id}>
                        {author?.firstName} {author?.lastName}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" ms="auto">
                Enviar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
