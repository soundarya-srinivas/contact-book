import axios from "axios"
import { clear_contact, create_contact, database, delete_All, delete_contact, get_contact, select_contact, update_contact } from "../Constant/types"

export const Database_Data = () => async dispatch => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
        type: database,
        payload: result.data
    });

}



export const addContactAction = (contact) => async dispatch => {
    const result = await axios.post("https://jsonplaceholder.typicode.com/users", contact);
    dispatch({
        type: create_contact,
        payload: result.data
    });

}
export const get_the_contact = (id)=>{
    return {
        type: get_contact,
        payload: id
    }

}
export const updateContact = (contact) => async dispatch => {
    const result = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact);
    dispatch({
        type: update_contact,
        payload: result.data
    });
}

export const deleteContact = (id) => async dispatch => {
    const result = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: delete_contact,
        payload: id
    });
}
export const selectAllContact = (id) => ({
    type: select_contact,
    payload: id
})

export const clearAllContact = () => ({
    type: clear_contact,

})
export const deleteAllContacts = () => ({
    type: delete_All,

})




