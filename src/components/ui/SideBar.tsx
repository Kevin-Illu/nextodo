import { useContext } from "react";
import { UIContext } from "@/context";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";

export const SideBar = () => {
  const { sidemenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <>
      <Drawer placement="left" isOpen={sidemenuOpen} onClose={closeSideMenu}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Options</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
