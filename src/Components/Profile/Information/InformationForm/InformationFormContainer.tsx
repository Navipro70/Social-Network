import React, {FC} from "react";
import InformationForm from "./InformationForm"
import {ProfileInformationType, profileType} from "../../../../Types/types";
import {DispatchReduxFormType} from "../../../../Types/ReduxFormTypes";

export type PropsType = {
    profile: profileType
    thunkPutUserInformation: (data: ProfileInformationType, userIf: number) => void
    setEditMode: (editMode: boolean) => void
}

const InformationFormContainer: FC<PropsType> = ({profile, thunkPutUserInformation, setEditMode}) => {
    const onSubmit = (data: ProfileInformationType, dispatch: DispatchReduxFormType) => {
        thunkPutUserInformation(data, profile.userId);
        setEditMode(true);
    };

    return (
        <div>
            <InformationForm
                initialValues={{...profile, ...profile.contacts}}
                setEditMode={setEditMode}
                profile={profile}
                thunkPutUserInformation={thunkPutUserInformation}
                onSubmit={onSubmit}/>
        </div>
    )
};

export default InformationFormContainer;