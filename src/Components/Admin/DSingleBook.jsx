import {
  Box,
  Image,
  Button,
  GridItem,
  Grid,
  Flex,
  Text,
  Container,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { getUsers } from "../../Redux/AdminContext/action";
import {
  getCheckPoint,
  getEvents,
  getTasks,
  updateEvent,
} from "../../Redux/AppContext/actions";
import { LpAdminGalleryCard } from "../Todos/LpAdminGalleryCard";


const DSingleBook = () => {
  const { id } = useParams();

  const tasks = useSelector((store) => store.AppReducer.tasks);
  console.log("🚀 ~ file: DSingleBook.jsx:14 ~ DSingleBook ~ tasks", tasks);
  let userEvents = useSelector((store) => store.AppReducer.events);
  const checkPoints = useSelector((store) => store.AppReducer.checkPoint);
  const [checkedUserId, setCheckedUserId] = useState("");
  const [detail, setDetail] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  userEvents?.forEach((item) => {
    item.start = new Date(item.start);
    item.end = new Date(item.end);
  });

  if (userEvents.length > 0) {
    userEvents = userEvents.filter((item) => item.userID === checkedUserId);
  }

  const users = useSelector((store) => store.AdminReducer.users);
  const [showtodo, setShowtodo] = useState(false);
  const [showcalender, setShowcalender] = useState(false);
  const [currentuser, setCurrentUser] = useState([]);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const handleTodo = () => {
    if (showtodo) {
      setShowtodo(false);
    } else {
      setShowtodo(true);
    }
  };

  const handleCalender = () => {
    if (showcalender) {
      setShowcalender(false);
    } else {
      setShowcalender(true);
    }
  };

  const handleUpdateEvent = (id, newEvent) => {
    console.log(id, newEvent);
    dispatch(updateEvent(id, newEvent)).then(() => dispatch(getEvents()));
  };

  useEffect(() => {
    checkPoints.length > 0 &&
      checkPoints.map((elem) => {
        if (elem.checkValidate === true) {
          setCheckedUserId(elem.mailID);
        }
      });
  }, [checkPoints.length]);

  useEffect(() => {
    if (checkPoints.length === 0) {
      dispatch(getCheckPoint());
    }
  }, [dispatch, checkPoints.length]);


  useEffect(() => {
    if (users.length === 0) {
      dispatch(getUsers());
    }
  }, [users.length, dispatch]);


  useEffect(() => {
    if (id) {
      const user = users.find((item) => item.id == id);

      console.log(user.todos);
      users && setCurrentUser(user);
    }
  }, [id]);


  useEffect(() => {
    if (tasks.length === 0) {
      dispatch(getTasks());
    }
    if (userEvents.length === 0) {
      dispatch(getEvents());
    }
    console.log("h");
  }, [dispatch, tasks.length, userEvents.length]);


  return (
    <>
      <Box 
        width={{base: "90%", sm: "80%", md: "80%", lg:"70%", xl: "70%"}} 
        borderRadius="20px" 
        margin="auto" 
        padding="5%" 
        marginBottom="1%" 
        marginTop="3%" 
        boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
        >
        <Grid
          width={"75%"}
          margin={"auto"}
          gridTemplateColumns={{
            lg: "repeat(2,1fr)",
            md: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap={"50px"}
        >
          <GridItem>
            <Image
              boxShadow={"rgba(43, 64, 70, 0.14) 0px 12px 32px"}
              margin={"auto"}
              padding={"20px"}
              width={{ lg: "200px", md: "200px", sm: "200px" }}
              borderRadius={"50%"}
              src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
            />
          </GridItem>
          <GridItem
            textAlign="left"
            width="85%"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
              {currentuser.userName}
            </h1>
            <h1
              style={{
                textAlign: "left",
                fontSize: "20px",
                marginBottom: "5px",
              }}
            >
              {currentuser.userEmail}
            </h1>
            <p
              style={{
                textAlign: "left",
                fontSize: "19px",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              {currentuser.userType}
            </p>
          </GridItem>
        </Grid>
      </Box>

      <Box>
        <Flex padding="4%" justifyContent="space-evenly">
          <Button _hover={{bg: "blue.200", color: "black"}} bg="blue.500" color="white" fontWeight="bold" onClick={handleTodo}>Show Todos</Button>
          <Button _hover={{bg: "blue.200", color: "black"}} bg="blue.500" color="white" fontWeight="bold" onClick={handleCalender}>Show Calender</Button>
        </Flex>
      </Box>

      {showtodo ? (
        <Box
          width={"full"}
          display={"grid"}
          templateColumns={{
            lg: "repeat(4,1fr)",
            md: "repeat(3,1fr)",
            sm: "repeat(2,1fr)",
            base: "repeat(2,1fr)",
          }}
        >
          <Grid
            w={{base: "90%", sm: "90%", md: "100%", lg: "90%", xl: "90%"}}
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap="3%"
            padding="2%"
            paddingTop="5px"
            margin={"auto"}
            justifyContent={"space-evenly"}
            align="center"
          >
            {tasks.length > 0 &&
              tasks
                .filter((item) => item.userID === currentuser.userEmail)

                .map((item) => {
                  return (
                    <GridItem
                      key={item.id}
                      justify={"center"}
                      align="center"
                      border={"1px solid grey"}
                      padding={"3px"}
                      borderRadius={"10px"}
                    >
                      <LpAdminGalleryCard
                        key={item.id}
                        {...item}
                        colorScheme="red"
                      />
                    </GridItem>
                  );
                })}
          </Grid>
        </Box>
      ) : (
        <></>
      )}

      {showcalender ? (
        <Box display="flex" flexDirection={"column"}>
          <Container
            maxW="container.xl"
            margin={"auto"}
            mt="20px"
            justify={"center"}
            align="center"
          >
            <Grid
              w="full"
              templateColumns={{
                base: "repeat(1, 1fr)",
                sm: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap={4}
              paddingTop="5px"
            >
              {userEvents.length > 0 &&
                userEvents.map((item, index) => {
                  return (
                    <GridItem key={item.id} justify={"center"} align="center">
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        paddingBottom={5}
                        boxShadow={" rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}
                        borderRadius={5}
                      >
                        <Stack
                          display={"flex"}
                          flexDirection={"row"}
                          justifyContent={"space-evenly"}
                          alignItems="center"
                          padding={5}
                        >
                          <Text fontWeight={600} fontSize="xl">
                            Title:{" "}
                          </Text>
                          <Text
                            fontWeight={500}
                            fontSize="xl"
                            color={"#008B8B"}
                          >
                            {item.title}
                          </Text>
                        </Stack>
                        <Stack
                          display={"flex"}
                          flexDirection={"row"}
                          justify={"space-evenly"}
                          align="center"
                          padding={5}
                        >
                          <Text fontWeight={600} fontSize="xl">
                            Start Date :{" "}
                          </Text>
                          <Text
                            fontWeight={500}
                            fontSize="xl"
                            color={"#008B8B"}
                          >
                            {`${item.start.getFullYear()}-${
                              item.start.getMonth() + 1 < 10
                                ? `0${item.start.getMonth() + 1}`
                                : item.start.getMonth() + 1
                            }-${
                              item.start.getDate() + 1 < 10
                                ? `0${item.start.getDate()}`
                                : item.start.getDate()
                            }`}
                          </Text>
                        </Stack>
                        <Stack
                          display={"flex"}
                          flexDirection={"row"}
                          justify={"space-evenly"}
                          align="center"
                          padding={5}
                        >
                          <Text fontWeight={600} fontSize="xl">
                            End Date :
                          </Text>

                          <Text
                            fontWeight={500}
                            fontSize="xl"
                            color={"#008B8B"}
                          >
                            {`${" "} ${item.end.getFullYear()}-${
                              item.end.getMonth() + 1 < 10
                                ? `0${item.end.getMonth() + 1}`
                                : item.end.getMonth() + 1
                            }-${
                              item.end.getDate() + 1 < 10
                                ? `0${item.end.getDate()}`
                                : item.end.getDate()
                            }`}
                          </Text>
                        </Stack>

                        <Link to="/calendarhomepage">
                          <Button
                            margin="auto"
                            bg={"black"}
                            color={"blue.400"}
                            onClick={onOpen}
                          >
                            Edit Event
                          </Button>
                        </Link>

                        <Modal isOpen={isOpen} onClose={onClose}>
                          <ModalOverlay />
                          <ModalContent>
                            <ModalHeader>Add Event Description</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                              {/* Description  */}

                              <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Input
                                  placeholder="Type here..."
                                  name="description"
                                  type="text"
                                  value={detail}
                                  onChange={(e) => {
                                    setDetail(e.target.value);
                                  }}
                                  autoFocus
                                />
                              </FormControl>
                            </ModalBody>

                            <ModalFooter>
                              <Button
                                colorScheme="blue"
                                mr={3}
                                onClick={() => {
                                  onClose();
                                }}
                              >
                                Submit
                              </Button>
                            </ModalFooter>
                          </ModalContent>
                        </Modal>
                      </Box>
                    </GridItem>
                  );
                })}
            </Grid>
          </Container>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default DSingleBook;
