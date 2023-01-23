import { EntryList, Layout, NewEntry } from "@/components";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import style from "../styles/home.module.css";

export default function Home() {
  return (
    <Layout title="home">
      <Flex className={style["task-container"]}>
        <Card className={style.task}>
          <CardHeader>
            <Heading size="md">Pendientes</Heading>
          </CardHeader>
          <NewEntry />
          <CardBody overflowY={"auto"}>
            <EntryList status="pending" />
          </CardBody>
        </Card>
        <Card className={style.task}>
          <CardHeader>
            <Heading size="md">En progreso</Heading>
          </CardHeader>
          <CardBody overflowY={"auto"}>
            <EntryList status="in-progress" />
          </CardBody>
        </Card>
        <Card className={style.task}>
          <CardHeader>
            <Heading size="md">Completadas</Heading>
          </CardHeader>
          <CardBody overflowY={"auto"}>
            <EntryList status="finished" />
          </CardBody>
        </Card>
      </Flex>
    </Layout>
  );
}
