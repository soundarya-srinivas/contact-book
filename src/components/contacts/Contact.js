import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { clearAllContact, Database_Data, deleteAllContacts, selectAllContact } from '../../Actions/ContactAction';
import { ContactList } from './ContactList';

export const Contact = () => {
    useEffect(() => {

        dispatch(Database_Data())

    }, [])

    const [selectAll, setSelectAll] = useState(false)
    const dispatch = useDispatch();
    const contactsList = useSelector(state => state.contactsAvailable.contacts)



    const selectedAllContacts = useSelector(state => state.contactsAvailable.selectedContacts)
    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contactsList.map(contactIds => contactIds.id)))
        } else if (!selectAll) {
            dispatch(clearAllContact())
        }

    }, [selectAll])
    return (

        <div>
            {
                selectedAllContacts.length > 0 ? (<button className="btn btn-danger mb-3" onClick={() => {
                    dispatch(deleteAllContacts())
                }}>delete All</button>) : null
            }
            <table className="table shadow table-striped table-hover">
                <thead>
                    <tr>
                        <th >
                            <div className="custom-control custom-checkbox">
                                <input id="selectAll"
                                    value={selectAll}
                                    type="checkbox"
                                    className="custome-control-input"
                                    onClick={() => { setSelectAll(!selectAll) }} />
                                <label htmlFor="selectAll" className="custom-control-label"></label>

                            </div>
                        </th>
                        <th >Id</th>
                        <th >Name</th>
                        <th >Phone number</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>

                    {contactsList.map((e) => {

                        return (<ContactList contact={e} key={e.id} selectAll={selectAll} />)
                    })}
                </tbody>
            </table>
        </div>
    )
}
