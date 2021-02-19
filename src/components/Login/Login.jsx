import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {FormControl} from '../../components/common/FormsControl/FormsControl'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from 'react-router-dom'
import s from '../common/FormsControl/FormsControl.module.css'

let maxLength20 = maxLengthCreator(20)
let minLength5 = minLengthCreator(5)

const Input = FormControl("input")

const LoginForm = (props) => {
    return  <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Email"} name={"email"}
                        component={Input} validate={[required,maxLength20,minLength5]}/></div>
            <div><Field placeholder={"Password"} name={"password"}
                        component={Input} validate={[required,maxLength20,minLength5]}/></div>
            <div><Field type="checkbox" name={"rememberMe"}
                        component={Input}/>Remember me</div>
        {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div><button>Log in</button></div>
        </form>
}



const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
       <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login})(Login)

