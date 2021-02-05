// const initialState = {
//     userData: {
//         email: "",
//         profileImg: "",
//         role: "",
//         userName: "",
//         _id: ""
//     },
//     token: ""
// }
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'
import { 
    LOGIN,
    GET_USER,
    LOGOUT
} from '../actions/type'

const reducer = (state = {}, action) => {

    let user = read_cookie("user")
    if (action.type === LOGIN) {
        bake_cookie("user", action.payload)
        return action.payload
    } else if (action.type === GET_USER) {
        return user
    } else if (action.type === LOGOUT) {
        delete_cookie("user")
        return {}
    }
    return user
    // let user = 
    // return {
    //     state: action.payload
    // }
}

export default reducer