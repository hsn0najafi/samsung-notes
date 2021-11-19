import { Component } from "react";

import Header from "./components/common/header/Header";
import NewTodo from "./components/NewTodo";
import Todos from "./components/common/todos/Todos";

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
            { id: 0, name: "Favorite", count: 20 },
            { id: 1, name: "Other", count: 30 },
            { id: 2, name: "Work", count: 3 },
            { id: 3, name: "Friday", count: 14 },
        ],
        showTodos: true,
        currentCat: "Favorite",
        showCatPopUp: false,
        showSearchBar: false,
        showMoreOptions: false,
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

    // Show Or Hide CategoriSelector
    handleShowPopUp = () => {
        this.setState({ showCatPopUp: !this.state.showCatPopUp });
    };

    handleShowSearchBar = () => {
        this.setState({ showSearchBar: !this.state.showSearchBar });
    };

    handleShowMoreOptions = () => {
        this.setState({ showMoreOptions: !this.state.showMoreOptions });
    };

    render() {
        const {
            setTodoText,
            state,
            handleNewTodo,
            handleShowTodos,
            handleShowPopUp,
            handleShowSearchBar,
            handleShowMoreOptions,
        } = this;

        return (
            <div className="root">
                <Header
                    state={state}
                    handleShowPopUp={handleShowPopUp}
                    handleShowSearchBar={handleShowSearchBar}
                    handleShowMoreOptions={handleShowMoreOptions}
                />
                {state.showTodos ? <Todos todos={state.todos} /> : null}
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
