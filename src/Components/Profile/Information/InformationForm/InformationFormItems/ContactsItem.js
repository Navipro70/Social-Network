import React from "react";
import {Field} from "redux-form";
import {SettingField} from "../../../../Common/FieldControls";


export const ContactsItem = ({name, placeholder, validators}) => {
    return (
        <li>
            <Field name={`${name}`}
                   placeholder={placeholder}
                   validate={[...validators]}
                   component={SettingField}/>
        </li>
    )
};