import { SET_USER_KEY } from '../const/userConst'

export const userReducer = (state, action) => {
    const { type, payload: { isAuthenticated, user } } = action

    switch (type) {
        case SET_USER_KEY:
            return {
                ...state,
                isLoading: false,
                isAuthenticated,
                user
            }

        default:
            return state
    }
}