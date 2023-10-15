import { Heading } from "@chakra-ui/react";

const HeadingBox = ({ children, ...rest }) => {
  return (
    <Heading
      py="3"
      px="7"
      bgColor="app.blue.active"
      borderRadius="full"
      display="table"
      textColor="white"
      fontWeight="bold"
      size="lg"
      {...rest}
    >
      {children}
    </Heading>
  );
};

export default HeadingBox;
