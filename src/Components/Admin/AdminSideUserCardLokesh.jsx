import { Box, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AdminSideUserCardLokesh = ({ id, userName, userEmail, userType }) => {
    return (
        <Box
            borderRadius="7px"
            boxShadow="rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            margin="2%"
            padding="3%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
        >
            <Box width="90%" margin="auto">
                <Image
                    width="80%"
                    margin="auto"
                    src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                    alt="user"
                />
            </Box>
            <Box fontSize="90%" fontWeight="bold" color="blue.800" width="100%">
                {userName}
            </Box>
            <Box fontSize="90%" fontWeight="bold" width="100%" color="darkred">
                {userEmail}
            </Box>
            <Box fontSize="90%" fontWeight="bold" width="100%">
                {userType}
            </Box>
            <Box
                margin="auto"
                width="90%"
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
                marginTop="5%"
                textAlign="center"
            >
                <Link to={`/admin_side_single_user_events/${userEmail}`}>
                    <Button size={"sm"} colorScheme={"blue"}>
                        Events
                    </Button>
                </Link>
                <Link to={`/admin_side_single_user_tasks/${userEmail}`}>
                    <Button size={"sm"} colorScheme={"green"}>
                        Tasks
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export { AdminSideUserCardLokesh };
