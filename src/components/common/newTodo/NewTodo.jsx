import { Fragment, useContext } from "react";

import Context from "../../context/Context";

import Editor from "./Editor";

const NewTodo = () => {
    const c = useContext(Context);

    return (
        <Fragment>
            <Editor />
            <button
                className="new-todo-button fa fa-plus animate__animated  animate__backInRight"
                style={{ right: `${c.showCatPopUp ? "-50px" : ""} ` }}
            ></button>
        </Fragment>
    );
};

export default NewTodo;
