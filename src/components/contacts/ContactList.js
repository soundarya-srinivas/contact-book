import React from 'react'
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../Actions/ContactAction';

export const ContactList = ({contact,selectAll}) => {
    const dispatch = useDispatch();
    
    const {id,name,phone,email} = contact
    return (
        
          <tr>
                            <td >
                                <div className="custom-control custom-checkbox">
                                    <input checked={selectAll} type="checkbox" className="custome-control-input" />
                                    <label className="custom-control-label"></label>

                                </div>
                            </td>
                            <td >{id}</td>
                            <td><Avatar name = {name} className="mr-2" size="45" round={true}/>{name}</td>
                            <td>{phone}</td>
                            <td>{email}</td>
                            <td>
                                <Link to={`/contacts/edit/${id}`}>
                                <span className="material-icons">edit</span>
                                </Link>
                               
                                <button className="material-icons" onClick={()=>{
                                    dispatch(deleteContact(id))
                                }}>remove</button>
                               
                                </td>
                        </tr>  
     
    )
}
