
import { clear_contact, create_contact, database, delete_All, delete_contact, get_contact, select_contact, update_contact } from "../Constant/types";

const initialState={
  contacts:[],
    contact:null,
    selectedContacts:[]
}

export const contactReducer = (state = initialState,{type,payload})=>{

    switch(type){
        case database:
            return{
                ...state,
                contacts:payload
            }
        case create_contact:
          
            return{
                ...state,
                contacts:[payload,...state.contacts]
            }
            case get_contact:
                let arr=state.contacts.filter((e)=> e.id ==payload)
               arr = arr.values();
               for(let val of arr){
                   arr = val;
               }
                return{
                    ...state,
                    contact:arr
                }
                case update_contact:
                    return{
                        ...state,
                        contacts:state.contacts.map((contact)=>
                        contact.id == payload.id?payload:contact),
                    }
                    case delete_contact:
                        return{
                            ...state,
                            contacts:state.contacts.filter((contact)=>contact.id!=payload)
                        }
                        case select_contact:
                            return{
                                ...state,
                                selectedContacts:payload

                            }
                            case clear_contact:
                                return{
                                    ...state,
                                    selectedContacts:[]
                                }
                                case delete_All:
                                    return{
                                        ...state,
                                        contacts:[]
                                    }


        default:
            return state;

    }
}