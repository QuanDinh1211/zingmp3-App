import { SET_USER_KEY } from '../const/userConst'

export const SET_USER = (data) => {
    return {
        type: SET_USER_KEY,
        payload: data
    }
}