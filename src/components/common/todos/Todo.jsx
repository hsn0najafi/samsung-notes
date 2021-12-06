import { useContext } from "react";

import PropTypes from "prop-types";

import Context from "../../context/Context";

const Todo = ({ text, subject, handleDelete, handleEdit }) => {
  const c = useContext(Context);

  return (
    <div className="todo">
      <section>
        <header>
          <p className="todo-subject">{subject}</p>
        </header>
        <main>
          <p className="todo-text">{text}</p>
        </main>
      </section>
      {c.todosEditMode ? (
        <article className="todo-tools flex-center-col">
          <i className="fa fa-pen" onClick={handleEdit}></i>
          <i className="fa fa-trash" onClick={handleDelete}></i>
        </article>
      ) : null}
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string,
  subject: PropTypes.string,
};

export default Todo;
