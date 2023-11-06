import {
  Box,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import Journey from "./Journey";
import TextareaContent from "./TextareaContent";
import EmoteContent from "./EmoteContent";
import Habit from "./Habit";
import CheckboxContent from "./CheckboxContent";
import NewHabit from "./NewHabit";
import Reward from "./Reward";

const Content = ({ type, content, number, questionIndex }) => {
  switch (type) {
    case "h1":
      return (
        <Heading as="h1" size="2xl">
          {content[0]}
        </Heading>
      );
    case "h2":
      return (
        <Heading as="h2" size="xl">
          {content[0]}
        </Heading>
      );
    case "h3":
      return (
        <Heading as="h3" size="lg">
          {content[0]}
        </Heading>
      );
    case "h4":
      return (
        <Heading as="h4" size="md">
          {content[0]}
        </Heading>
      );
    case "h5":
      return (
        <Heading as="h5" size="sm">
          {content[0]}
        </Heading>
      );
    case "h6":
      return (
        <Heading as="h6" size="xs">
          {content[0]}
        </Heading>
      );
    case "p":
      return <Text>{content[0]}</Text>;
    case "ol":
      return (
        <OrderedList>
          {content.map((text, index) => (
            <ListItem key={index}>{text}</ListItem>
          ))}
        </OrderedList>
      );
    case "image":
      return (
        <Box>
          <Image
            boxSize={content[1]}
            objectFit="contain"
            // src={content[0]}
            src="https://talenesia.com/landing_assets/images/logo.png"
            alt={content[2]}
            mx="auto"
          />
          <Heading as="h5" size="sm">
            {content[2]}
          </Heading>
        </Box>
      );
    case "journey":
      return <Journey />;
    case "textarea":
      return (
        <TextareaContent
          content={content[0]}
          number={number}
          questionIndex={questionIndex}
        />
      );
    case "emote":
      return (
        <EmoteContent
          content={content}
          number={number}
          questionIndex={questionIndex}
        />
      );
    case "habit":
      return <Habit />;
    case "new_habit":
      return <NewHabit />;
    case "reward":
      return <Reward />;
    case "calendar":
      return <></>;
    case "checkbox":
      return (
        <CheckboxContent
          content={content}
          number={number}
          questionIndex={questionIndex}
        />
      );
    default:
      return <></>;
  }
};

export default Content;
