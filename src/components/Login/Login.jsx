import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {FormControl} from '../../components/common/FormsControl/FormsControl'

let maxLength20 = maxLengthCreator(20)
let minLength5 = minLengthCreator(5)

const Input = FormControl("input")

const LoginForm = (props) => {
    return  <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={"Login"} name={"login"} component={Input} validate={[required,maxLength20,minLength5]}/></div>
            <div><Field placeholder={"Password"} name={"password"} component={Input} validate={[required,maxLength20,minLength5]}/></div>
            <div><Field type="checkbox" name={"rememberMe"} component={Input}/>Remember me</div>
            <div><button>Log in</button></div>
        </form>
}



const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
       <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
export default Login

