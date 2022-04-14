import *as documentActions from './actions';
import { v4 as uuidv4 } from 'uuid';
import documentReducer from '../reducer/documentReducer';
export const setSkin= (skinCd)=>{
    return{
        type: documentActions.SET_SKIN,
        payload: {
            id: uuidv4(),
            skinCd:skinCd
        }
    }
}

export const updateSkin= (skinCd)=>{
    return{
        type: documentActions.UPDATE_SKIN,
        payload:{
            skinCd:skinCd
        }
    }
}