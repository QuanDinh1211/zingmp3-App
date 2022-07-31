import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'
import React, { useState, useContext } from 'react'

import stylesLogin from '../../style/login'
import { UserContext } from '../../store/constexts/userContext'

const Login = () => {

    const { login } = useContext(UserContext)

    const [formData, setformData] = useState({
        name: '',
        password: ''
    });

    const { name, password } = formData

    const onChangeName = ({ nativeEvent: { text } }) => {
        setformData({
            ...formData,
            name: text
        })
    }
    const onChangePasswrod = ({ nativeEvent: { text } }) => {
        setformData({
            ...formData,
            password: text
        })
    }

    const handleLogin = async () => {
        await login(formData)
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={stylesLogin.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <Image style={stylesLogin.logo} source={require('../../assets/logo.png')} />
                <View style={stylesLogin.wrapperInput}>
                    <TextInput
                        style={stylesLogin.input}
                        placeholder='Username'
                        placeholderTextColor='#ffffff82'
                        onChange={onChangeName}
                        value={name}
                    />
                </View>
                <View style={stylesLogin.wrapperInput}>
                    <TextInput
                        style={stylesLogin.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        placeholderTextColor='#ffffff82'
                        onChange={onChangePasswrod}
                        value={password}
                    />
                </View>
                <Text style={stylesLogin.textForgot}>Quên mật khẩu?</Text>
                <TouchableOpacity onPress={handleLogin} style={stylesLogin.wrapperLogin}>
                    <Text style={stylesLogin.textLogin}>Login</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default Login