import { Fragment, useContext } from "react";

import Context from "../../context/Context";

import Editor from "./Editor";

const NewTodo = () => {
    const c = useContext(Context);

    return (
        <Fragment>
            {c.showEditorContainer ? <Editor /> : null}

            <button
                className="new-todo-button flex-center-row fa fa-plus animate__animated  animate__backInRight"
                style={{ right: `${c.showCategoriPopUp ? "-50px" : ""} ` }}
                onClick={c.handleSetShowEditorContainer}
            ></button>
        </Fragment>
    );
};

export default NewTodo;
