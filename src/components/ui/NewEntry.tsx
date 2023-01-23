import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, Flex, Textarea } from "@chakra-ui/react";
import { AddIcon, CheckCircleIcon } from "@chakra-ui/icons";
import { EntriesContext, UIContext } from "@/context";

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);

  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const cleanForm = () => {
    setTouched(false);
    setIsAddingEntry(false);
    setInputValue("");
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
  };

  return (
    <Flex direction={"column"} margin={"0 1rem"} gap={"1rem"}>
      {isAddingEntry ? (
        <>
          <Box>
            {}
            <Textarea
              resize={"none"}
              placeholder={
                inputValue.length <= 0 && touched
                  ? "ingrese un valor"
                  : "add some entry :)"
              }
              isInvalid={inputValue.length <= 0 && touched}
              value={inputValue}
              onChange={onTextFieldChanges}
              onBlur={() => setTouched(true)}
            />
          </Box>
          <Box display={"flex"} gap={".8rem"} justifyContent={"space-between"}>
            <Button onClick={cleanForm}>Cancel</Button>
            <Button
              onClick={() => {
                onSave();
                cleanForm();
              }}
              rightIcon={<CheckCircleIcon />}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button onClick={() => setIsAddingEntry(true)} leftIcon={<AddIcon />}>
          Add a new Entry
        </Button>
      )}
    </Flex>
  );
};
