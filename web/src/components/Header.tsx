import { Button, Container, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Container py={2}>
      <HStack>
        <Link to="/posts">
          <Button>Posts</Button>
        </Link>
        <Link to="/authors">
          <Button>Autores</Button>
        </Link>
      </HStack>
    </Container>
  );
};
