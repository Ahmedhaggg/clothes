import {
    LOGIN,
    GET_USER,
    LOGOUT
}  from './type'


export const Login =  data => {
    const { email, profileImg, role, userName, _id } = data.data 
    const payload = {
        userData: { email, profileImg, role, userName, _id },
        token: data.token
    }
    return dispatch => {
        dispatch({
            type: LOGIN,
            payload
        })
    }
}

export const GetUser = () => {
    return dispatch => {
        dispatch({type: GET_USER})
    }
}

export const Logout = () => {
    return dispatch => {
        dispatch({type: LOGOUT})
    }
}