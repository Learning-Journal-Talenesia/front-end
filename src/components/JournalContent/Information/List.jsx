import { Heading, ListItem, OrderedList } from "@chakra-ui/react";

const List = ({ data }) => {
  return (
    <>
      <Heading>{data.heading}</Heading>
      <OrderedList>
        {data.content.map((text) => (
          <ListItem>{text}</ListItem>
        ))}
      </OrderedList>
    </>
  );
};

export default List;
