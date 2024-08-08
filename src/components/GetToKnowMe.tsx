import { useSteps, Box, Stepper, Step, StepIndicator, StepStatus, StepIcon, Progress, StepDescription, StepNumber, StepSeparator, StepTitle, Flex, Container, Input, Button } from "@chakra-ui/react"
import { render } from "react-dom";

type GetToKnowMeProps = {
  }
  
function GetToKnowMe() {
  
    return (
      <>
        <Container maxW='container.xl' centerContent>
          <Input placeholder="Is Elliot good at..." />
          <Button colorScheme='blue'>Submit</Button>
          


        </Container>
      </>
      )
    }

  export default GetToKnowMe