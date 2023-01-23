import { EntriesContext, UIContext } from "@/context";
import { entryStatus } from "@/interfaces";
import { Flex } from "@chakra-ui/react";
import { DragEvent, FC, useContext, useMemo } from "react";
import { EntryCard } from "./";

import style from "./Entry.module.css";

interface Props {
  status: entryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [entries]
  );

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");

    const entry = entries.find((entry) => entry._id === id)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  const allowDrop = (event: DragEvent) => {
    event.preventDefault();
  };

  return (
    <div
      onDragOver={allowDrop}
      onDrop={onDropEntry}
      className={`${style["dragg-container"]} ${
        isDragging ? style.dragging : ""
      }`}
    >
      <Flex
        overflowY={"auto"}
        height={"100%"}
        backgroundColor={"transparent"}
        flexDir="column"
        gap={"1rem"}
        opacity={isDragging ? 0.2 : 1}
        transition={"all .3s"}
      >
        {entriesByStatus.map((entry) => (
          <EntryCard key={entry._id} entry={entry} />
        ))}
      </Flex>
    </div>
  );
};
