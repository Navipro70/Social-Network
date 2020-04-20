import {Field} from "redux-form";
import {LoginInput} from "../../Common/FieldControls";
import React from "react";


export const LoginErrors = ({error, captchaSrc}) => {
    return (
        <div className="form-row common-login-error">
            {error}
            <img src={captchaSrc} alt=""/>
            {captchaSrc &&
            <Field type="text" name="captcha" component={LoginInput} placeholder="Captcha"/>}
        </div>
    )
};