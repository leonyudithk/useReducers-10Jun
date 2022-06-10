import { Button } from '@chakra-ui/react';
import React, { useReducer} from 'react';
import { CounterReducer, init, initialState } from '../reducers/CounterReducer';
import { types } from '../types/types';

const Counter = () => {
  //estructura del useReducers
    const [counter, dispatch] = useReducer(CounterReducer, initialState, init);

    return (
        <div>
        <h1>Counter: {counter}</h1>
        <hr/>
             <Button colorScheme='pink' px={2}
              onClick={()=>
              dispatch({type: types.increment})
              }>+1</Button>


             <Button colorScheme='purple' px={2}
             onClick={()=>
                dispatch({type: types.decrement})
             }>-1</Button>

             <Button colorScheme='yellow' px={2}
             onClick={()=>
                dispatch({type: types.reset})
             }>Reset</Button>
        </div>
    );
};

export default Counter;