import React from 'react'
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {createField, Input} from '../common/FormsControl/FormsControl'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from 'react-router-dom'
import s from '../common/FormsControl/FormsControl.module.css'
import {AppStateType} from "../../redux/redux-store";

let maxLength20 = maxLengthCreator(20)
let minLength5 = minLengthCreator(5)

type LoginFormOwnProps = {
    captchaUrl: string | null

}

export type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

type LoginFormValuesTypeKeys = Extract<keyof LoginFormValuesType, string>



const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit, error, captchaUrl}) => {
    return  <form onSubmit={handleSubmit}>
            {createField<LoginFormValuesTypeKeys>('Email','email',[required], Input)}
            {createField<LoginFormValuesTypeKeys>('Password','password',[required], Input, {type: 'password'})}
            {createField<LoginFormValuesTypeKeys>(undefined,'rememberMe',[], Input, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img alt={''} src={captchaUrl}/>}
            {captchaUrl && createField('Symbols from image', "captcha", [required], Input, {})}

            {error && <div className={s.formSummaryError}>{error}</div>}
            <div><button>Log in</button></div>
        </form>
}



const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({
    form: 'login'
})(LoginForm)

type MapStatePropsType = {
    captchaUrl: null | string
    isAuth: boolean
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}


const Login: React.FC <MapStatePropsType & MapDispatchPropsType>= (props) => {
    const onSubmit = (formData: LoginFormValuesType) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
       <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})


export default connect(mapStateToProps, {login})(Login)

