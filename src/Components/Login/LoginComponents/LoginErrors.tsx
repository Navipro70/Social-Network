import {Field} from "redux-form";
import {LoginInput} from "../../Common/FieldControls";
import React, {FC} from "react";
import {Nullable} from "../../../Types/types";

type PropsType = {
    error: Nullable<string>
    captchaSrc: Nullable<string>
}

export const LoginErrors: FC<PropsType> = ({error, captchaSrc}) => (
    <div className="form-row common-login-error">
        {error}
        <img src={captchaSrc!} alt=""/>
        {captchaSrc &&
        <Field type="text" name="captcha" component={LoginInput} placeholder="Captcha"/>}
    </div>
);