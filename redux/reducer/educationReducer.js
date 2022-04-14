import *as educationActions from '../actions/actions';
import { updateEducation } from '../actions/education.Actions';
import initialState from './initialState.json';

const eductaionReducer=(state=initialState.education, action)=>{
    switch(action.type){
        case educationActions.UPDATE_EDUCATION:{
            return{...action.payload}
        }
        case educationActions.SET_EDUCATION:{
            return{...action.payload}
        }
        default: return state
    }
}

export default eductaionReducer;