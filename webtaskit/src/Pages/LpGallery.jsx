import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LpGalleryCard } from "../Components/Todos/LpGalleryCard";
import { getTasks } from "../Redux/AppContext/actions";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LpGallery = () => {

    const tasks = useSelector((store) => store.AppReducer.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        if (tasks.length === 0) {
            dispatch(getTasks());
        };
    }, [dispatch, tasks.length]);

    return (
        <Box>
            <Box>
                <Text fontSize="200%" fontWeight="bold">Todos Gallery</Text>
                <Link to="/todohomepage"><Button backgroundColor="blue.400" color="white" fontWeight="bold">Back</Button></Link>
            </Box>
        <Box
            display="grid"
            width={{ base: "85%", sm: "95%", md: "95%", lg: "95%", xl: "95%" }}
            margin="auto"
            gap={{ base: "0%", sm: "0% 4%", md: "1% 2%", lg: "1% 2%", xl: "1% 2%" }}
            height="fit-content"
            paddingBottom={{ base: "10%", sm: "10%", md: "15%", lg: "5%", xl: "5%" }}
            gridTemplateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(5, 1fr)" }}
        >
            {tasks.length > 0 &&
            tasks.map((item) => {
                return <LpGalleryCard key={item.id} {...item} colorScheme="gray" />
            })}
        </Box>
        </Box>
    );
};

export {LpGallery}