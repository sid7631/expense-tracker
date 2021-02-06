import * as actionTypes from '../actions/action-types'

const initialState ={
    isAuthenticated:false,
    token: null,
    user:null,
    loading: false,
    error: null
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case actionTypes.AUTH_START: return { ...state,loading:true,error:null}
        case actionTypes.AUTH_SUCCESS: return {...state,loading:false,error:null,isAuthenticated:true}
        case actionTypes.AUTH_FAIL: return {...state,loading:false,error:action.error, isAuthenticated:false}
        case actionTypes.AUTH_LOGOUT: return {...state,loading:false,error:null, isAuthenticated:false}
        default: return state
    }

}
export default reducer