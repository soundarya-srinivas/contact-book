import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router';
import { get_the_contact, updateContact } from '../../Actions/ContactAction';

import { useNavigate } from 'react-router-dom';
import { addContactAction } from '../../Actions/ContactAction';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

export const EditContacts = () => {

    const contactsList = useSelector(state => state.contactsAvailable.contacts)
   

    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();

   const selectedContact = useSelector((e)=>e.contactsAvailable.contact);
   let { id } = useParams();
   useEffect(() => {
       if(selectedContact!=null){
           setName(selectedContact.name);
           setPhone(selectedContact.phone);
           setEmail(selectedContact.email);
       }
       dispatch(get_the_contact(id))
   }, [selectedContact])

   function onUpdateContact(e){
       e.preventDefault();
       const update_contact =Object.assign(selectedContact, {
           name:name,
           phone:phone,
           email:email
       })
       dispatch(updateContact(update_contact));
       navigate("/");
   }

    return (
        <div>
            <div className="card border-0 shadow">
                <div className="card-header">add a contact</div>
                <div className="card-body">
                    <form onSubmit={(e)=>onUpdateContact(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="enter your name"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}>

                            </input>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="phone number"
                                value={phone}
                                onChange={(e) => { setPhone(e.target.value) }}>

                            </input>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="enter your email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}>

                            </input>
                            <button className="btn btn-danger" type="submit">Edit button</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
