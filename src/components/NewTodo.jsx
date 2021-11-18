import { Fragment } from "react";

const NewTodo = ({ state }) => {
    return (
        <Fragment>
            <div className="editor-container"></div>
            <button
                className="new-todo-button fa fa-plus animate__animated  animate__backInRight"
                style={{ right: `${state.showCatPopUp ? "-50px" : ""} ` }}
            ></button>
        </Fragment>
    );
};

export default NewTodo;
