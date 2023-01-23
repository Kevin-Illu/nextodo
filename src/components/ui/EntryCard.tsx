import { DragEvent, FC, useContext } from "react";
import { Entry } from "@/interfaces";
import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { UIContext } from "@/context";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);

  const onDragStart = (event: DragEvent) => {
    event.dataTransfer.setData("text", entry._id);
    startDragging();
  };

  const onDragEnd = () => {
    // todo: cancelar on drag
    endDragging();
  };

  return (
    <Card
      size={"md"}
      bg={"blue.400"}
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardHeader>
        <Heading size="md">{entry.description}</Heading>
      </CardHeader>
      <CardBody>
        <Text>hace 30 minutos</Text>
      </CardBody>
    </Card>
  );
};
