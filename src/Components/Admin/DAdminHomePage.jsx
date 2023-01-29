import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/AdminContext/action";
import { useLocation, useSearchParams } from "react-router-dom";
import DBookCart from "./DBookCart";
import DFilterComp from "./DFilterComp";
import { Box, Grid, GridItem } from "@chakra-ui/react";

const DAdminHomePage = () => {
  const users = useSelector((store) => store.AdminReducer.users);
  const dispatch = useDispatch();
  const location = useLocation();
  const [serchParams] = useSearchParams();

  useEffect(() => {
    if (location || users.length === 0) {
      const getUserParams = {
        params: {
          userType: serchParams.getAll("userType"),
        },
      };
      dispatch(getUsers(getUserParams));
    }
  }, [users.length, dispatch, location, serchParams, location.search]);


  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row" }}
      width={{ base: "80%", sm: "80%", md: "90%", lg: "90%", xl: "90%" }}
      margin="auto"
      justifyContent="center"
    >
      <Box
        backgroundColor="white"
        width={{ base: "100%", sm: "100%", md: "20%", lg: "20%", xl: "20%" }}
        display="flex"
        justifyContent="center"
        paddingTop="3%"
        boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
      >
        <DFilterComp />
      </Box>
      <Box width={{ base: "100%", sm: "100%", md: "80%", lg: "80%", xl: "80%" }}>
        <Grid
          width="100%"
          templateColumns={{
            base: "repeat(1,1fr)",
            lg: "repeat(4,1fr)",
            md: "repeat(3,1fr)",
            sm: "repeat(1,1fr)",
          }}
        >
          {users.length > 0 &&
            users.map((ele) => {
              return (
                <GridItem>
                  <DBookCart key={ele.id} bookData={ele} />
                </GridItem>
              );
            })}
        </Grid>
      </Box>
    </Box>
  );
};


export default DAdminHomePage;
