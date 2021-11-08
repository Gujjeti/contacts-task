import {ADD_CONTACT, EDIT_CONTACT,GET_ALL_CONTACTS, UPDATA_CONTACT, DELETE_CONTACT} from './types'

export const getAllContacts = () =>{
    return {type:GET_ALL_CONTACTS};
}

export const addContact = (contact) =>{
    return {type:ADD_CONTACT, payload:contact};
}

export const editContact = (id) =>{
    return {type:EDIT_CONTACT, payload:id};
}


export const updateContact = (contact) =>{
    return {type:UPDATA_CONTACT, payload:contact};
}

export const deleteContact = (id) =>{
    return {type:DELETE_CONTACT, payload:id};
}

