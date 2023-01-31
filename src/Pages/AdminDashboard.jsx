import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { AdminSideHomePageByLokesh } from "../Components/Admin/AdminSideHomePageByLokesh";
const AdminDashboard = () => {
  return (
    <Box>
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
          padding={5}
          width={"100%"}
          margin="auto"
        >
          {/* <DAdminHomePage /> */}
          <AdminSideHomePageByLokesh/>
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;
