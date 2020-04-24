import React from "react";
import {InformationFormProvider} from "./InformationForm"

const InformationFormContainer = ({profile, thunkPutUserInformation, setEditMode}) => {
    const onSubmit = (data, dispatch) => {
        thunkPutUserInformation(data, profile.userId);
        setEditMode(true);
    };

    return (
        <div>
            <InformationFormProvider initialValues={{...profile, ...profile.contacts}}
                                     setEditMode={setEditMode} profile={profile}
                                     thunkPutUserInformation={thunkPutUserInformation}
                                     onSubmit={onSubmit}/>
        </div>
    )
};

export default InformationFormContainer;