import React from "react";
import StatusHook from "./StatusHook";
import {create, act} from "react-test-renderer";
import {thunkSetStatus} from "../../../../redux/profile-reducer";

describe("Status component basic tests", () => {
    const component = create(<StatusHook isOwner={true} statusText={"SomeText"} setStatus={thunkSetStatus}/>)
        .root;
    test("isOwner should be in props", () => {
        expect(component.props.isOwner).toBeTruthy()
    });
    test("statusText should be in props", () => {
        expect(component.props.statusText).toBe("SomeText")
    });
    test("setStatus function should be in props", () => {
        expect(component.props.setStatus).toBe(thunkSetStatus)
    });
    test("Check span element", () => {
        const spanText = component.findByType("span").props.children;
        expect(spanText).toBe("SomeText")
    });
});

describe("Status component tests with special props", () => {
    const component = create(<StatusHook isOwner={false} statusText={""} setStatus={thunkSetStatus}/>)
        .root;
    test("Check span text, when status is empty string and no Owner person", () => {
        const spanText = component.findByType("span").props.children;
        expect(spanText).toBe("No status")
    });
    test("Check span text, when status is empty string and no Owner person", () => {
        const component = create(<StatusHook isOwner={true} statusText={""} setStatus={thunkSetStatus}/>)
            .root; // spec comp with isOwner = true and statusText = ""
        const spanText = component.findByType("span").props.children;
        expect(spanText).toBe("Change status")
    });
});

