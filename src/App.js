import { Component } from "react";

import NewTodo from "./components/NewTodo";
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

    // Show/Hide, Todos
    handleShowTodos = () => {
        this.setState({ showTodos: !this.state.showTodos });
    };

    render() {
        const { setTodoText, state, handleNewTodo, handleShowTodos } = this;

        return (
            <div>
                {state.showTodos ? <Todo todos={state.todos} /> : null}
                <NewTodo
                    setTodoText={setTodoText}
                    state={state}
                    handleNewTodo={handleNewTodo}
                    handleShowTodos={handleShowTodos}
                />
            </div>
        );
    }
}

export default App;
