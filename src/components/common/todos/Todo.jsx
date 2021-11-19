const Todo = ({ text, subject }) => {
    return (
        <div className="todo">
            <p className="todo-subject">{subject}</p>
            <p className="todo-text">{text}</p>
        </div>
    );
};

export default Todo;
