import { Button, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../actions/AuthAction';
import { AuthContext } from '../context/authContext';

const Login = () => {
    const {dispatch}= useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = ()=>{
        dispatch(login('Diego Villalba'))
        navigate('/')
    }
    
    return (
        <div>
        <Text>Login</Text>
        <input />
        <Button colorScheme='pink' px={2}
        onClick={handleLogin}
              >Login</Button>
            
        </div>
    );
};

export default Login;