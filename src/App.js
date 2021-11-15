import { Component } from "react";

class App extends Component {
    state = {
        todos: [],
        todo: "",
        showTodos: false,
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="Write Todo .." />
            </div>
        );
    }
}

export default App;
