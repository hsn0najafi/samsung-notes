import PropTypes from "prop-types";

const Todo = ({ text, subject }) => {
    return (
        <div className="todo">
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
