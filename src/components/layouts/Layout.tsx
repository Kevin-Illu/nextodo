import { FC } from "react";
import Head from "next/head";
import { Container, Flex } from "@chakra-ui/react";
import { NavBar, SideBar } from "../ui";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ title = "OpenJira", children }) => {
  return (
    <Container maxW={"container.xl"}>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <SideBar />
      <Flex>{children}</Flex>
    </Container>
  );
};
