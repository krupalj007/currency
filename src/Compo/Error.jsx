import { Alert, AlertIcon, Heading, Stack } from "@chakra-ui/react";
import React from "react";


const ErrorComponent = () => {
const message = 'Error While Fetching Data'
  return (
  <Stack h={'85vh'}>
     <Stack m={'12'}>
 <Heading size={'lg'} display={'flex'} justifyContent={'center'} alignItems={'center'} color={'red'} >Error 6040</Heading>
  <Heading size={'md'} display={'flex'} justifyContent={'center'} alignItems={'center'}>Data Not Found :-)</Heading>+
 </Stack>
        <Alert
      status="error"
      position={"fixed"}
      bottom={"25"}
      left={"50%"}
      transform={"translateX(-50%)"}
      w={"container.lg"}
    >
      <AlertIcon />
      {message}
    </Alert>
  </Stack>
  );
};



export default ErrorComponent;
