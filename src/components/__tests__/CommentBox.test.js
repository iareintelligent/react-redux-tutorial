import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it("has a textarea and a button", () => {
    expect(wrapped.find("textarea").length).toEqual(1);
    expect(wrapped.find("button").length).toEqual(2);
});

describe("the textarea", () => {
    beforeEach(() => {
        //find textarea element and simulate change on it
        wrapped.find("textarea").simulate("change", {
            target: { value: "new comment" }
        });
        //force component to update
        wrapped.update();
    });

    it("has a textarea that users can type in", () => {
        expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    });

    it("empties the textarea when the form is submitted", () => {
        wrapped.find("form").simulate("submit");
        expect(wrapped.find("textarea").prop("value")).toEqual("");
    });
});
