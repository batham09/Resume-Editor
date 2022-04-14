import initialState from './initialState.json';
import *as authActions from '../actions/actions'

const authReducer = (state=initialState.auth,action) => {
    switch(action.type){
        case authActions.SIGN_UP_REQUEST : 
            return {...state,loading:true}
        case authActions.SIGN_UP_SUCCESS : 
            return {...state,loading:false}
        case authActions.SIGN_UP_FAIL : 
            return {...state,loading:false,error:action.payload}
        case authActions.SIGN_IN_REQUEST : 
            return {...state,loading:true}
        case authActions.SIGN_IN_SUCCESS :
            return {...state,loading:false}
        case authActions.SIGN_IN_FAIL :
            return {...state,loading:false,error:action.payload}
        case authActions.REMOVE_ERROR : 
            return {...state,error:''}
        default : return state
    }
}

export default authReducer