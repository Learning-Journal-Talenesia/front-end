import {
  Box,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
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

  const { activeStep } = useSteps({
    index: themeIndex,
    count: journey.length,
  });

  return (
    <Stepper
      index={activeStep}
      orientation="vertical"
      height="400px"
      gap="0"
      width="100%"
    >
      {journey.map(({ id, name }, index) => (
        <Step
          key={id}
          flexDirection={index % 2 === 1 ? "row-reverse" : "row"}
          width="100%"
          minH="100px"
        >
          <Box flex="1"></Box>
          <Box position="relative">
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <StepSeparator />
          </Box>

          <Box flex="1" textAlign={index % 2 === 1 ? "end" : "start"}>
            <StepTitle>{name}</StepTitle>
          </Box>
        </Step>
      ))}
    </Stepper>
  );
};

export default Journey;
