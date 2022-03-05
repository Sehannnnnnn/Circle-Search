import {
    LOGIN_USER,
    REGISTER_USER1,
    REGISTER_USER2,
    AUTH_USER
} from '../Actions/types';

export default function userReducer(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {...state, loginSuccess: action.payload}
            break;
        case REGISTER_USER1:
            return { ...state, register1Success: action.payload }
            break;
        case REGISTER_USER2:
            return { ...state, register2Success: action.payload }
            break;
        case AUTH_USER:
            return { ...state, userData: action.payload }
            break;
            
        default:
            return state;
    }
}