import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ["comment 1", "comment ii", "comment three"]
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it("creates one <li> per comment", () => {
    expect(wrapped.find("li").length).toEqual(3);
});

it("displays the text for each comment", () => {
    expect(wrapped.render().text()).toContain("comment 1");
    expect(wrapped.render().text()).toContain("comment ii");
    expect(wrapped.render().text()).toContain("comment three");
});
