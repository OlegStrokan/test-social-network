import React from 'react'
import s from './FormsControl.module.css'
import {Field} from "redux-form";

export const  FormControl = Element => ({ input, meta: {touched, error}, ...props }) => {
    const hasError = touched && error
    return (
        <div className={ s.formControl + " " + (hasError ? s.error : "") }>
            <Element {...input} {...props} />
            { hasError && <span> { error } </span> }
        </div>
    )
}

export const createField = (placeholder, name, validators, component,props = {}, text = '') => (
    <div><Field placeholder={placeholder}
                name={name}
                validate={validators}
                component={component}
                {...props}/>{text}</div>
)

