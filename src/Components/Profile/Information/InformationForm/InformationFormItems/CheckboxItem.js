import React from "react";
import {Field} from "redux-form";

export const CheckboxItem = () => {
    return (
        <li>
            <Field name="lookingForAJob"
                   id="lookingForAJob"
                   component="input"
                   type="checkbox"/>
            <label htmlFor="lookingForAJob">
                Looking for a job?
            </label>
        </li>
    )
};