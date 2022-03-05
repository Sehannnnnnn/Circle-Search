import React , {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../../../Slices/authSlice';

function LoginPage() {
    const auth = useSelector(state => state.auth.login)
    const dispatch = useDispatch()
    let navigate = useNavigate();

    const [userID, setuserID] = useState("");
    const [userPW, setuserPW] = useState("");
    
    const onIDHandler = (event) => {
        setuserID(event.currentTarget.value)
    }
    const onPWHandler = (event) => {
        setuserPW(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefault();

        dispatch(loginSuccess())
        navigate("/")
        // let data = {
        //     'ID' : userID,
        //     'PW' : userPW
        // }
        // console.log(data)
        // fetch('/api/login',{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         'ID' : userID,
        //         'PW' : userPW
        //         })
        // }).then(resposne => console.log('Success:',resposne))
        // .catch(error => console.error('Error:', error));
    }
    
    return (
    <div>
        <div style={{
                display: 'flex', justifyContent: 'center'
                , width: '100%', height: '100vh'
            }}>
                <form style={{display:'flex', flexDirection: 'column'}} onSubmit={onSubmitHandler}>
                    <h2>로그인</h2>
                    <label>ID</label>
                    <input type="ID" value={userID} onChange={onIDHandler}/>
                    <label>PW</label>
                    <input type="password" value={userPW} onChange={onPWHandler}/>
                    <br/>
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
    </div>
    );
}

export default LoginPage;
