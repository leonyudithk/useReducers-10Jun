import { Box, Button, Flex, Image, Link, Spacer, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../actions/AuthAction';
import { AuthContext } from '../context/authContext';

const NavBars = () => {
const {dispatch} = useContext(AuthContext)
const navigate = useNavigate()

const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
}

    return (
        <div>
            <Flex
                bg="purple"
                w="100%"
                px={3}
                py={2}
                justifyContent="space-between"
                alignItems="center"
            >
                <Box display="flex"  alignItems="center">
                   <Image src="https://res.cloudinary.com/danimel/image/upload/v1649216902/HEFLO-BPMN-Herramienta_opmdfs.png" 
                   maxWidth="30%"
                   size={20}/>
                   <Text px={3} >Use Reducer</Text>
                </Box>
                <Spacer />
                <Box display="flex" justifyContent= "space-around" alignItems="center">
                   <Link as={NavLink} to="/" px={2}
                   style={({isActive})=> isActive ? {color: "white"} : {color: "pink"}}
                   >Home</Link>
                    <Link as={NavLink} to="/counter" px={2}
                   style={({isActive})=> isActive ? {color: "white"} : {color: "pink"}}
                   >Counter</Link>
                    <Link as={NavLink} to="/perfil" px={2}
                   style={({isActive})=> isActive ? {color: "white"} : {color: "pink"}}
                   >Perfil</Link>
                   <Button colorScheme='pink' px={2} onClick={handleLogout}>Logout</Button>
                </Box>
            </Flex>
        </div>
    );
};

export default NavBars;