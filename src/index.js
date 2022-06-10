import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AuthRouter from './router/AuthRouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
   <ChakraProvider>
            <AuthRouter/>
   </ChakraProvider>
    </React.StrictMode>
);


