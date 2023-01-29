import React from "react";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import DAdminHomePage from "../Components/Admin/DAdminHomePage";
const AdminDashboard = () => {
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");
  return (
    <Box width="100%" backgroundColor="#e8f7fc">
      <Flex direction={"column"}>
        <h1
          style={{
            color: "#3174ad",
            margin: 0,
            fontSize: 32,
            fontWeight: "bold",
            lineHeight: 1.5,
            letterSpacing: 0.5,
          }}
        >
          Admin DashBoard
        </h1>
        <Box
          justifyContent={"center"}
          alignItems="center"
          margin="auto"
          width="100%"
        >
          <DAdminHomePage />
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;
