import *as contactAction from '../actions/actions';

export const setContact=(contact)=>{
    return{
        type:contactAction.SET_CONTACT,
        payload:contact
    }
}

export const updateContact=(contact)=>{
    return{
        type: contactAction.UPDATE_CONTACT,
        payload:contact
    }
}