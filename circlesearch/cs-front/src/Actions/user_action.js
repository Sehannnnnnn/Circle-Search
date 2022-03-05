import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    REGISTER_USER1
} from './types';
import axios from 'axios';

export function loginUser(dataToSubmit) {
    fetch('/api/login',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: dataToSubmit.ID, 
            pw : dataToSubmit.PW
        })
    }).then(resposne => console.log('Success:',JSON.stringify(resposne))).catch(error => console.error('Error:', error));

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser1(dataToSubmit) {
    const request = axios.post('/user/register1',dataToSubmit).then(resposne => resposne.data)

    return {
        type: REGISTER_USER1,
        payload: request
    }
}

export function registerUser2(dataToSubmit) {
    const request = axios.post('/user/register2',dataToSubmit).then(resposne => resposne.data)

    return {
        type: REGISTER_USER1,
        payload: request
    }
}

export function auth() {


    return {
        type: AUTH_USER,
        payload: request
    }
}
