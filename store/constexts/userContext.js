import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useReducer, useEffect } from "react"

import { userReducer } from '../reducers/userReducer'
import { apiurl, STORAGE_TOCKEN_NAME } from '../const'
import { SET_USER } from '../action/userAction'
import setUserToken from '../../ultil/setUserToken'

export const UserContext = createContext()

const UserContextProvider = ({ children }) => {

    const [userState, dispatch] = useReducer(userReducer, {
        user: null,
        isLoading: false,
        isAuthenticated: true
    })

    const loadUser = async () => {

        try {
            const accessToken = await AsyncStorage.getItem(STORAGE_TOCKEN_NAME)

            if (accessToken) {
                setUserToken(accessToken)
            }
            const response = await axios.get(`${apiurl}/user`)
            if (response.data.success) {
                dispatch(SET_USER({
                    isAuthenticated: true,
                    user: response.data.user
                }))
            }
        } catch (err) {

            await AsyncStorage.removeItem(STORAGE_TOCKEN_NAME)
            setUserToken(null)
            dispatch(SET_USER({
                isAuthenticated: false,
                user: null
            }))
        }
    }

    // useEffect(() => {
    //     loadUser()
    // }, [])

    const login = async (data) => {
        try {
            const response = await axios.post(`${apiurl}/user/login`, data)
            if (response.data.success) {
                await AsyncStorage.setItem(STORAGE_TOCKEN_NAME, response.data.accessToken)
            }
            await loadUser()
            return response.data
        } catch (err) {
            if (err.response.data) {
                return err.response.data
            }
            else {
                return { success: false, message: err.message }
            }
        }
    }

    const UserContextData = { login, userState }

    return (
        <UserContext.Provider value={UserContextData}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider