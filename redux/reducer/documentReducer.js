import *as documentActions from "../actions/actions"
import initialState from './initialState.json';

const documentReducer=(state=initialState, action) => {
    switch(action.type){
        case documentActions.SET_SKIN:{
            return {...state, id: action.payload.id, skindCd: action.payload.skindCd}
        }
        case documentActions.UPDATE_SKIN:{
            return {...state, skindCd:action.payload.skindCd}
        }
        default:return state
    }
}
export default documentReducer;