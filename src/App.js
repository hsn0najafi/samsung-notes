import { Component } from "react";

class App extends Component {
    state = {
        todos: [],
        todo: "",
        showTodos: false,
    };

    // Fetch Todo Text
    setTodoText = (e) => {
        this.setState({ todo: e.target.value });
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    onChange={(event) => this.setTodoText(event)}
                    placeholder="Write Todo .."
                />
            </div>
        );
    }
}

export default App;
