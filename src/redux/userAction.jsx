import {ADD_USER} from "./userActionType.jsx"

export const addUser = (userData) => {
    return {
        type: "ADD_USER",
        payload: userData
    }
}


export default addUser