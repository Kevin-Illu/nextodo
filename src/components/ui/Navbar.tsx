import { FC, useContext } from "react";
import { Box, Flex, IconButton, useTheme } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { UIContext } from "@/context";

export const NavBar: FC = () => {
  const theme = useTheme();
  const { openSideMenu } = useContext(UIContext);

  return (
    <Box maxWidth={"100%"}>
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"1rem 0"}
      >
        <Box gap={"1rem"}>
          <IconButton
            aria-label="open menu"
            icon={<HamburgerIcon />}
            onClick={openSideMenu}
          />
        </Box>
      </Flex>
    </Box>
  );
};
