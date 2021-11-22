import { useState } from "react";

import Header from "./components/common/header/Header";
import NewTodo from "./components/common/newTodo/NewTodo";
import Todos from "./components/common/todos/Todos";
import Context from "./components/context/Context";

const App = () => {
    const [todos, setTodos] = useState({
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
        ],
    });

    const [todo, setTodo] = useState({ todo: "" });

    const [cats, setCats] = useState({
        cats: [
            { id: 0, name: "Favorite", count: 20 },
            { id: 1, name: "Other", count: 30 },
            { id: 2, name: "Work", count: 3 },
            { id: 3, name: "Friday", count: 14 },
        ],
    });

    const [showTodos, setShowTodos] = useState({
        showTodos: true,
    });

    const [currentCat, setCurrentCat] = useState({
        currentCat: "Favorite",
    });

    const [showCatPopUp, setShowCatPopUp] = useState({
        showCatPopUp: false,
    });

    const [showSearchBar, setshowSearchBar] = useState({
        showSearchBar: false,
    });

    const [showMoreOptions, setShowMoreOptions] = useState({
        showMoreOptions: false,
    });

    // Make New Todo
    const handleNewTodo = () => {
        const todos = [...this.state.todos];
        const todo = {
            id: Math.random() * 1000000,
            text: this.state.todo,
        };
        todos.push(todo);
        this.setState({ todos, todo: "" });
    };

    // Fetch Todo Text
    const setTodoText = (e) => {
        this.setState({ todo: e.target.value });
    };

    // Show/Hide, Todos
    const handleShowTodos = () => {
        this.setState({ showTodos: !this.state.showTodos });
    };

    // Show Or Hide CategoriSelector
    const handleShowPopUp = () => {
        this.setState({ showCatPopUp: !this.state.showCatPopUp });
    };

    const handleShowSearchBar = () => {
        this.setState({ showSearchBar: !this.state.showSearchBar });
    };

    const handleShowMoreOptions = () => {
        this.setState({ showMoreOptions: !this.state.showMoreOptions });
    };

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
        <Context.Provider
            value={{
                state: this.state,
                handleShowPopUp: this.handleShowPopUp,
            }}
        >
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
        </Context.Provider>
    );
};

export default App;
