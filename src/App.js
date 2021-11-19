import { Component, Fragment } from "react";

import Header from "./components/Header";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";

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
        cats: [
            { name: "Favorite", count: 20 },
            { name: "Other", count: 30 },
            { name: "Work", count: 3 },
            { name: "Friday", count: 14 },
        ],
        showTodos: true,
        currentCat: "Favorite",
        showCatPopUp: false,
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

    handleShowPopUp = () => {
        this.setState({ showCatPopUp: !this.state.showCatPopUp });
    };

    render() {
        const {
            setTodoText,
            state,
            handleNewTodo,
            handleShowTodos,
            handleShowPopUp,
        } = this;

        return (
            <Fragment>
                <Header state={state} handleShowPopUp={handleShowPopUp} />
                {state.showTodos ? <Todos todos={state.todos} /> : null}
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
