import React, { FC, useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Entry } from "@/interfaces";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

export interface Adding {
  isAddingEntry: boolean;
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Fugiat dolor non eu ullamco enim ullamco irure.",
      status: "pending",
      createAt: Date.now() - 100000,
    },
    {
      _id: uuidv4(),
      description:
        "Ut magna velit nisi ipsum nostrud duis reprehenderit ex ut eu.",
      status: "finished",
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "Eiusmod cupidatat minim nulla ipsum nostrud consectetur aute nisi elit est.",
      status: "pending",
      createAt: Date.now() - 1000000,
    },
  ],
};

interface Props {
  children?: React.ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "[Entry] - Add-Entry", payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] - Entry-Update", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
