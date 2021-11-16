import { Component } from "react";

import Todo from "./components/Todos";

class App extends Component {
    state = {
        todos: [],
        todo: "",
        showTodos: false,
    };

    // Make New Todo
    handleNewTodo = () => {
        const todos = [...this.state.todos];
        const todo = {
            id: Math.random() * 1000000,
            text: this.state.todo,
        };
        todos.push(todo);
        this.setState({ todos, todo: "" });
    };

    // Fetch Todo Text
    setTodoText = (e) => {
        this.setState({ todo: e.target.value });
    };

    handleShowTodos = () => {
        this.setState({ showTodos: !this.state.showTodos });
    };

    render() {
        const { setTodoText, state, handleNewTodo, handleShowTodos } = this;

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
                    className={`fa ${
                        state.showTodos ? "fa-eye-slash" : "fa-eye"
                    }`}
                />
                {state.showTodos ? <Todo todos={state.todos} /> : null}
            </div>
        );
    }
}

export default App;
