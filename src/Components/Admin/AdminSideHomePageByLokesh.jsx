import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Redux/AdminContext/action";
import { AdminSideUserCardLokesh } from "./AdminSideUserCardLokesh";


const AdminSideHomePageByLokesh = () => {

    const users = useSelector((store) => store.AdminReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        if (users.length === 0) {
            dispatch(getUsers());
        }
    }, [dispatch, users, users.length]);

    return (
        <Box width='100%'>
            <Box>Admin Panel</Box>
            <Box
            >
                {
                    users.length === 0 ?
                        <Box>Users loading...</Box> :

                        <Box
                            display="grid"
                            width="85%"
                            margin='auto'
                            gridTemplateColumns={{ base: "repeat(5,1fr)" }}
                        >
                            {
                                users.map((item) => {
                                    return (
                                    <AdminSideUserCardLokesh
                                        key={item.id}
                                        id={item.id}
                                        userName={item.userName}
                                        userEmail={item.userEmail}
                                        userType={item.userType}
                                    />
                                    );
                                })
                            }
                        </Box>
                }
            </Box>
        </Box>
    );
};


export { AdminSideHomePageByLokesh };