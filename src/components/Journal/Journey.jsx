import { Box, Flex, Heading } from "@chakra-ui/react";
import { useSidebar } from "../../context/Sidebar.context";
import { useParams } from "react-router-dom";
import { useMemo } from "react";

const Journey = () => {
  const { journey } = useSidebar();
  const { theme_id } = useParams();
  const themeIndex = useMemo(() => {
    let res = 0;
    journey.forEach(({ id }, index) => {
      if (id === Number(theme_id)) {
        res = index;
      }
    });

    return res;
  }, [journey, theme_id]);

  return (
    <Box>
      {journey.map(({ id, name }, index) => (
        <Flex
          key={id}
          gap="3"
          alignItems="center"
          direction={index % 2 === 1 ? "row-reverse" : "row"}
        >
          <Heading
            flex="1"
            size="md"
            textAlign={index % 2 === 1 ? "start" : "end"}
          >
            {name}
          </Heading>
          <Box position="relative" w="40px">
            <Box bgColor="app.green.active" w="20px" mx="auto" h="120px"></Box>
            <Box
              borderRadius="full"
              bgColor={
                index === themeIndex
                  ? "app.blue.hover"
                  : index < themeIndex
                  ? "app.blue.active"
                  : "app.blue.disable"
              }
              w="40px"
              h="40px"
              position="absolute"
              top="40px"
            ></Box>
          </Box>
          <Box flex="1"></Box>
        </Flex>
      ))}
    </Box>
  );
};

export default Journey;
