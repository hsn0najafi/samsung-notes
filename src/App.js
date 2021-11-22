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

    const [showSearchBar, setShowSearchBar] = useState({
        showSearchBar: false,
    });

    const [showMoreOptions, setShowMoreOptions] = useState({
        showMoreOptions: false,
    });

    // Make New Todo
    const handleNewTodo = () => {
        const todos = [...todos];
        const myTodo = {
            id: Math.random() * 1000000,
            text: todo,
        };
        todos.push(myTodo);
        setTodos({ todos });
        setTodo({ todo: "" });
    };

    // Fetch Todo Text
    const setTodoText = (e) => {
        setTodo({ todo: e.target.value });
    };

    // Show/Hide, Todos
    const handleShowTodos = () => {
        setShowTodos({ showTodos: !showTodos });
    };

    // Show Or Hide CategoriSelector
    const handleShowPopUp = () => {
        setShowCatPopUp({ showCatPopUp: !showCatPopUp });
    };

    const handleShowSearchBar = () => {
        setShowSearchBar({ showSearchBar: !showSearchBar });
    };

    const handleShowMoreOptions = () => {
        setShowMoreOptions({ showMoreOptions: !showMoreOptions });
    };

    return (
        <Context.Provider
            value={{
                state: todos,
                handleShowPopUp,
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
