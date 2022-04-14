import *as contactAction from '../actions/actions';
import initialState from './initialState.json';

const contactReducer=(state= initialState.contact, action)=>{
    switch(action.type){
        case contactAction.SET_CONTACT:{
            //idhr vese toh apn state ko spread kara kr daalte hai pr state me null pada hai!
            //  toh payload me ek obj aayega usko he spread kara lia apn ne 
            return {...action.payload}
        }
        case contactAction.UPDATE_CONTACT:{
            return {...action.payload}
        }

        default:return state
    }
}
export default contactReducer