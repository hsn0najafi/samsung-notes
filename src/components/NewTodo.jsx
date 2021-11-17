const NewTodo = ({ setTodoText, state, handleNewTodo, handleShowTodos }) => {
    return (
        <div>
            <input
                type="text"
                onChange={(event) => setTodoText(event)}
                placeholder="Write Todo .."
                value={state.todo}
            />
            <button onClick={handleNewTodo} className="fa fa-plus" />
            <button
                onClick={handleShowTodos}
                className={`fa ${state.showTodos ? "fa-eye-slash" : "fa-eye"}`}
            />
        </div>
    );
};

export default NewTodo;
