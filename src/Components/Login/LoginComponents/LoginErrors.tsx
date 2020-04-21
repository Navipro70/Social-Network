import {Field} from "redux-form";
import {LoginInput} from "../../Common/FieldControls";
import React, {FC} from "react";

type PropsType = {
    error: string | null
    captchaSrc: string | null
}

export const LoginErrors: FC<PropsType> = ({error, captchaSrc}) => (
    <div className="form-row common-login-error">
        {error}
        <img src={captchaSrc!} alt=""/>
        {captchaSrc &&
        <Field type="text" name="captcha" component={LoginInput} placeholder="Captcha"/>}
    </div>
);