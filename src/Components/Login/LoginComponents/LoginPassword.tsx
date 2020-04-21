import React, {FC} from "react";
import "../login.css"
import {Field} from "redux-form";
import {LoginInput} from "../../Common/FieldControls";
import {emptyField} from "../../../utils/validators";

type PropsType = {
    maxLength20: (value: string) => string | undefined
    minLength5: (value: string) => string | undefined
}

export const LoginPassword: FC<PropsType> = ({maxLength20, minLength5}) => (
    <div className="form-row">
        <Field type="password" name="password" id="password"
               component={LoginInput} placeholder="Password"
               validate={[emptyField, maxLength20, minLength5]}
        />
    </div>
);
