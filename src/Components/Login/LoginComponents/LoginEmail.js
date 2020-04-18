import React from "react"
import "../login.css"
import {Field} from "redux-form"
import {LoginInput} from "../../Common/FieldControls"
import {emailValidator, emptyField} from "../../../utils/validators"

export const LoginEmail = () => {
    return (
        <div className="form-row">
            <Field type="text" name="login" id="email"
                   component={LoginInput} placeholder="Email"
                   validate={[emptyField, emailValidator]}
            />
        </div>
    )
};