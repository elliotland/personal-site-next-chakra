import { useSteps, Box, Stepper, Step, StepIndicator, StepStatus, StepIcon, Progress, StepDescription, StepNumber, StepSeparator, StepTitle } from "@chakra-ui/react"
import { render } from "react-dom";

type Props = {
    activeStep: number;
    setActiveStep: (step: number) => void;
    children?: React.ReactNode;
    gap?: string;
  }

const steps = [
    { title: 'First', description: 'Contact Info' },
    { title: 'Second', description: 'Date & Time' },
    { title: 'Third', description: 'Select Rooms' },
  ]
  
function GetToKnowMe() {
    const { activeStep, setActiveStep } = useSteps({
      index: 1,
      count: steps.length,
    })
  
    const activeStepText = steps[activeStep].description
  
    const max = steps.length - 1
  
    return (
        <Stepper index={activeStep} orientation='vertical' height='400px' gap='0'>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>
    
              <Box flexShrink='0'>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>
    
              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      )
    }

  export default GetToKnowMe