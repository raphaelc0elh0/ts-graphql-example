import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container py={4}>{children}</Container>
    </>
  );
};
