import { shallow } from "enzyme";

import { BookmarkForm } from "../index";

describe("BookmarkForm", () => {
  let onHandleChangeMock, onHandleSaveMock;

  beforeEach(() => {
    onHandleChangeMock = jest.fn();
    onHandleSaveMock = jest.fn();
  });
  let props = {
    onHandleChange: onHandleChangeMock,
    onHandleSave: onHandleSaveMock,
    form: {
      title: "",
      link: "",
    },
  };

  it("should match snapshot", () => {
    const rendered = shallow(<BookmarkForm {...props} />);
    expect(rendered).toMatchSnapshot();
  });

  it("should match Onchange Event", () => {
    const rendered = shallow(
      <BookmarkForm
        {...props}
        onHandleSave={onHandleSaveMock}
        onHandleChange={onHandleChangeMock}
      />
    );

    rendered
      .find("input")
      .at(0)
      .simulate("change", {
        target: { name: "title", value: "Test react app" },
      });
    rendered
      .find("input")
      .at(1)
      .simulate("change", {
        target: { name: "link", value: "http://link.com" },
      });

    rendered.find("form").simulate("submit");
    expect(onHandleChangeMock).toHaveBeenCalled();
    expect(onHandleSaveMock).toHaveBeenCalled();
    expect(rendered).toMatchSnapshot();
  });

  it("should match Onchange empty", () => {
    props.form.title = "test";
    const rendered = shallow(
      <BookmarkForm
        {...props}
        onHandleSave={onHandleSaveMock}
        onHandleChange={onHandleChangeMock}
      />
    );

    expect(onHandleSaveMock).toHaveBeenCalled();
    expect(rendered).toMatchSnapshot();
  });
});
