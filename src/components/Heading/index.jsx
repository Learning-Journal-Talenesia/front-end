const Heading = ({ children, rest }) => {
  return (
    <Heading
      py="16px"
      px="32px"
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

export default Heading;
