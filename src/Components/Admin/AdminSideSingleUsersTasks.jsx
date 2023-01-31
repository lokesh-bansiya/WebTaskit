//

// /admin_side_single_user_events/:id

import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTasks } from "../../Redux/AppContext/actions";
import { AdminSideSingleTaskBoxLokesh } from "./AdminSideSingleTaskBoxLokesh";

const AdminSideSingleUsersTasks = () => {
  const { userEmail } = useParams();
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.AppReducer.tasks);
  console.log("tasks", tasks);

  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(getTasks());
    }
  }, [dispatch, tasks]);

  return (
    <Box>
      {tasks.length === 0 ? (
        <Box
          paddingTop="5%"
          color="red"
          fontWeight="bold"
          fontSize={{
            base: "70%",
            sm: "70%",
            md: "80%",
            lg: "100%",
            xl: "120%",
          }}
        >
          Loading...!
        </Box>
      ) : (
        <Box
          width="90%"
          margin="auto"
          paddingTop="5%"
          display="grid"
          gridTemplateColumns={{ base: "repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)",lg:"repeat(4,1fr)",xl:"repeat(4,1fr)" }}
        >
          {tasks
            .filter((elem) => elem.userID === userEmail)
            .map((item) => {
              return (
                <AdminSideSingleTaskBoxLokesh key={item.id} {...item} colorScheme="yellow"/>
              );
            })}
        </Box>
      )}
    </Box>
  );
};

export { AdminSideSingleUsersTasks };
