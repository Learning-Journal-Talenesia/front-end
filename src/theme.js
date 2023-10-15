import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    app: {
      green: {
        active: "#40B66B",
        hover: "#49DF80",
        disable: "#85BE9A",
      },
      blue: {
        active: "#40C5F6",
        hover: "#40EBF6",
        disable: "#80BFD6",
      },
      purple: "#525FB0",
    },
  },
  components: {
    Button: {
      variants: {
        primary: {
          bgColor: "app.green.active",
          borderRadius: "full",
          textColor: "white",
          _hover: {
            bgColor: "app.green.hover",
            _disabled: {
              bgColor: "app.green.disable",
            },
            _loading: {
              bgColor: "app.green.disable",
            },
          },
          _disabled: {
            bgColor: "app.green.disable",
          },
          _loading: {
            bgColor: "app.green.disable",
          },
        },
        secondary: {
          bgColor: "white",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "app.green.active",
          borderRadius: "full",
          textColor: "app.green.active",
          _hover: {
            bgColor: "white",
            borderColor: "app.green.hover",
            textColor: "app.green.hover",
            _disabled: {
              borderColor: "app.green.disable",
              textColor: "app.green.disable",
            },
            _loading: {
              borderColor: "app.green.disable",
              textColor: "app.green.disable",
            },
          },
          _disabled: {
            borderColor: "app.green.disable",
            textColor: "app.green.disable",
          },
          _loading: {
            borderColor: "app.green.disable",
            textColor: "app.green.disable",
          },
        },
      },
    },
  },
});

export default theme;
