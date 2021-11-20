import { Fragment } from "react";

import Editor from "./Editor";

const NewTodo = ({ state }) => {
    return (
        <Fragment>
            <Editor />
            <button
                className="new-todo-button fa fa-plus animate__animated  animate__backInRight"
                style={{ right: `${state.showCatPopUp ? "-50px" : ""} ` }}
            ></button>
        </Fragment>
    );
};

export default NewTodo;
