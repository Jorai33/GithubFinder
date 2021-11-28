import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import {
    SET_ALERT,
    REMOVE_ALERT
} from "../types";

function AlertState(props) {
    const initialState = {
        alert: null
    };

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // Set Alert 
    const setAlert = (msg, type) => {   
        dispatch({
            type: SET_ALERT,
            payload: { 
                message: msg,
                type: type
            }
        });
        
        setTimeout(() => {
            dispatch({type: REMOVE_ALERT});
        }, 3000);
    }

    return (
    <AlertContext.Provider
        value={{
          alert: state.alert,
          setAlert
        }}
    > 
        {props.children} 
    </AlertContext.Provider>
    );
    
} 


export default AlertState;