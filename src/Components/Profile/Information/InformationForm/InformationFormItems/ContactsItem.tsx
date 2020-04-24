import React, {FC} from "react";
import {Field} from "redux-form";
import {SettingField} from "../../../../Common/FieldControls";

type PropsType = {
    name: string
    placeholder: string
    validators: Function[] //Пофиксить тип
}

export const ContactsItem: FC<PropsType> = ({name, placeholder, validators}) => (
    <li>
        <Field name={name}
               placeholder={placeholder}
               validate={[...validators]}
               component={SettingField}/>
    </li>
);