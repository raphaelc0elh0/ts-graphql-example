import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { components } from "./components";

const theme = extendTheme(
  {
    styles: {
      global: {
        body: {
          bg: "gray.100",
        },
      },
    },
    colors,
    components,
  },
  withDefaultColorScheme({ colorScheme: "hostel-pink" })
);

export default theme;
