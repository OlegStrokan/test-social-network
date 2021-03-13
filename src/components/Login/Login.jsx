import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {createField, FormControl} from '../../components/common/FormsControl/FormsControl'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from 'react-router-dom'
import s from '../common/FormsControl/FormsControl.module.css'

let maxLength20 = maxLengthCreator(20)
let minLength5 = minLengthCreator(5)

const Input = FormControl("input")

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return  <form onSubmit={handleSubmit}>
            {createField('Email','email',[required], Input)}
            {createField('Password','password',[required], Input, {type: 'password'})}
            {createField(null,'rememberMe',[], Input, {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField('Symbols from image', "captcha", [required], Input, {})}

            {error && <div className={s.formSummaryError}>{error}</div>}
            <div><button>Log in</button></div>
        </form>
}



const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
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

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})


export default connect(mapStateToProps, {login})(Login)

