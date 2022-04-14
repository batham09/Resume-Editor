import *as authActions from './actions';

// export ki zarurat nhi hai kyuki thunk vala kaam krne vaale hai 
// usme ek function banate hai usko export karaate hai 

 const registerReq=()=>{
    return{
        type: authActions.SIGN_UP_REQUEST  
    }

}
const registerFail=(err)=>{
    return{
        type: authActions.SIGN_UP_FAIL,
        payload: err  
    }

}
const registerSuc=()=>{
    return{
        type: authActions.SIGN_UP_SUCCESS  
    }
}

const removeErr=()=>{
    return{
        type: authActions.REMOVE_ERROR  
    }
}

export const register =(userData)=>{
    // thunk vala kaam hai joki 
    // return karta hai function jisme dispatch milta hai
    return(dispatch, getState,{getFirestore, getFirebase})=>{
        dispatch(registerReq())
        const firebase= getFirebase()
        const firestore= getFirestore();
        firebase.auth().createUserWithEmailAndPassword  (userData.email, userData.password).then(async(data)=>{
            const res= await firestore.collection('users').doc(data.user.uid).set({
                email: userData.email,
                resumeIds:[]
            })
            // success
            dispatch(registerSuc());
        }).catch((err)=>{
            dispatch(registerFail(err));
            setTimeout(()=>{
                dispatch(removeErr())
            },2000)
        })
    }
}


const signinReq=()=>{
    return{
        type: authActions.SIGN_IN_REQUEST  
    }

}
const signinFail=(err)=>{
    return{
        type: authActions.SIGN_IN_FAIL,
        payload: err  
    }

}
const signinSuc=()=>{
    return{
        type: authActions.SIGN_IN_SUCCESS  
    }
}


export const signin =(userData)=>{
    // thunk vala kaam hai joki 
    // return karta hai function jisme dispatch milta hai
    return async(dispatch, getState,{getFirebase, getFirestore})=>{
        dispatch(signinReq())
        const firebase= getFirebase()

        try{
            const res= await firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
            // success
            dispatch(signinSuc);
        }catch(err){
            dispatch(signinFail(err))
            setTimeout(() => {
                dispatch(removeErr())
            },2000);
        }

    }
}


export const signout =(userData)=>{
    // thunk vala kaam hai joki 
    // return karta hai function jisme dispatch milta hai
    return async(dispatch, getState,{getFirebase, getFirestore})=>{
        // dispatch({type:authActions.SIGN_OUT_REQUEST})
        const firebase= getFirebase()
        firebase.auth().signOut().then(()=>{
            dispatch({type:authActions.SIGN_OUT_SUCCESS})
        }).catch((err)=>{
            dispatch({type:authActions.SIGN_OUT_FAIL, payload: err.message})
            setTimeout(() => {
                dispatch(removeErr())
            },2000);
        })
        
    }
}
