import React from "react";
import "../login.css"
import {Field} from "redux-form";
import {LoginInput} from "../../Common/FieldControls";
import {emptyField} from "../../../utils/validators";

export const LoginPassword = ({maxLength20, minLength5}) => {
    return (
        <div className="form-row">
            <Field type="password" name={"password"} id="password"
                   component={LoginInput} placeholder="Password"
                   validate={[emptyField, maxLength20, minLength5]}
            />
        </div>
    )
};