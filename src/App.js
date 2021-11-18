import { Component, Fragment } from "react";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todos";

class App extends Component {
    state = {
        todos: [
            {
                id: 0,
                subject: "SampleSampleSampleSampleSampleSampleSample",
                text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziuefhuegvbzuiwehfeuhrugfzbdshfgeruigfrbhfbvyrfehdjzfbdhfdg",
                catName: "favorite",
            },
            {
                id: 1,
                subject: "SampleSampleSampleSampleSampleSampleSample",
                text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziue",
                catName: "private",
            },
            {
                id: 2,
                subject: "SampleSampleSampleSampleSampleSampleSample",
                text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziuefhuegvbzuiwehfeuhrugfzbdshfgeruigfrbhfbvyrfehdjzfbdhfdg",
                catName: "favorite",
            },
            {
                id: 3,
                subject: "SampleSampleSampleSampleSampleSampleSample",
                text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziue",
                catName: "private",
            },
            {
                id: 4,
                subject: "SampleSampleSampleSampleSample",
                text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziuefhuegvbzuiwehfeuhrugfzbdshfgeruigfrbhfbvyrfehdjzfbdhfdg",
                catName: "favorite",
            },
            {
                id: 5,
                subject: "SampleSampleSampleSampleSample",
                text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziue",
                catName: "private",
            },
            {
                id: 6,
                subject: "SampleSampleSampleSampleSamplSampleSamplee",
                text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziuefhuegvbzuiwehfeuhrugfzbdshfgeruigfrbhfbvyrfehdjzfbdhfdg",
                catName: "favorite",
            },
            {
                id: 7,
                subject: "SampleSampleSampleSampleSampleSampleSample",
                text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziue",
                catName: "private",
            },
            {
                id: 8,
                subject: "SampleSampleSampleSampleSample",
                text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziuefhuegvbzuiwehfeuhrugfzbdshfgeruigfrbhfbvyrfehdjzfbdhfdg",
                catName: "favorite",
            },
            {
                id: 9,
                subject: "SampleSampleSampleSampleSampleSampleSample",
                text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziue",
                catName: "favorite",
            },
        ],
        todo: "",
        cats: ["Favorite", "private"],
        showTodos: true,
        currentCat: "Favorite",
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
            <Fragment>
                <Header state={state} />
                <div className="todos">
                    {state.showTodos ? <Todo todos={state.todos} /> : null}
                </div>
                <NewTodo
                    setTodoText={setTodoText}
                    state={state}
                    handleNewTodo={handleNewTodo}
                    handleShowTodos={handleShowTodos}
                />
            </Fragment>
        );
    }
}

export default App;
