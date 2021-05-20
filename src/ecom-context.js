import React, { createContext, useReducer } from 'react';
import reducer, { initialState } from './store/reducer/auth';

export const StateContext = createContext(initialState);

const Store = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={{ state, dispatch }}>
            {props.children}
        </StateContext.Provider>
    );
};

const withState = (Child) => (props) => (
    <StateContext.Consumer>
        {(context) => <Child {...props} {...context} />}
    </StateContext.Consumer>
);


export { Store, withState };

