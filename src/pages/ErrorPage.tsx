import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar></NavBar>
      <Box margin={10}>
        <Heading fontSize={"2xl"}>Oops...</Heading>
        <Text>
          {isRouteErrorResponse(error) === true
            ? "This page does not exist"
            : "Sorry, an unexpected error occurs"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
