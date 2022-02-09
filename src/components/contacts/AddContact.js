import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { addContactAction } from '../../Actions/ContactAction';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

export const AddContact = () => {
    let navigate = useNavigate();
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
     const dispatch = useDispatch();
     
    function createNewContact(e){
e.preventDefault();
        
        const new_conatct={
            // id:shortid.generate(),
            name:name,
            phone:phone,
            email:email
        }
        dispatch(addContactAction(new_conatct))
        navigate("/");
    }
    
    return (
        <div>
            <div className="card border-0 shadow">
                <div className="card-header">add a contact</div>
                <div className="card-body">
                    <form onSubmit={(e)=>{createNewContact(e)}}>
                        <div className="form-group">
                            <input 
                            type="text"
                            className="form-control" 
                            placeholder="enter your name" 
                            value={name} 
                            onChange={(e)=>{setName(e.target.value)}}>

                            </input>
                            <input 
                            type="text"
                            className="form-control" 
                            placeholder="phone number" 
                            value={phone} 
                            onChange={(e)=>{setPhone(e.target.value)}}>
                                
                            </input>
                            <input 
                            type="text"
                            className="form-control" 
                            placeholder="enter your email" 
                            value={email} 
                            onChange={(e)=>{setEmail(e.target.value)}}>
                                
                            </input>
                            <button className="btn btn-primary btn-lg" >Add new contact</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
