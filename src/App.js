import { Component } from "react";

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

    render() {
        const { setTodoText, state, handleNewTodo } = this;

        return (
            <div>
                <input
                    type="text"
                    onChange={(event) => setTodoText(event)}
                    placeholder="Write Todo .."
                    value={state.todo}
                />
                <button onClick={handleNewTodo} className="fa fa-plus" />
            </div>
        );
    }
}

export default App;
