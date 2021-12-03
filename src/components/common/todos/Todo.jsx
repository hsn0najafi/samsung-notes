import { useContext } from "react";

import PropTypes from "prop-types";

import Context from "../../context/Context";

const Todo = ({ text, subject }) => {
  const c = useContext(Context);

  return (
    <div className="todo">
      <div className="todo-tools">
        <i className="fa fa-pen"></i>
        <i className="fa fa-trash"></i>
      </div>
      <p className="todo-subject">{subject}</p>
      <p className="todo-text">{text}</p>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string,
  subject: PropTypes.string,
};

export default Todo;
