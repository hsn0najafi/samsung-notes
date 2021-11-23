import { useState } from "react";

import Header from "./components/common/header/Header";
import NewTodo from "./components/common/newTodo/NewTodo";
import Todos from "./components/common/todos/Todos";
import Context from "./components/context/Context";

const App = () => {
    // ---------------------------------
    const [todos, setTodos] = useState([
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
    ]);
    const [todo, setTodo] = useState("");
    const [cats, setCats] = useState([
        { id: 0, name: "Favorite", count: 20 },
        { id: 1, name: "Other", count: 30 },
        { id: 2, name: "Work", count: 3 },
        { id: 3, name: "Friday", count: 14 },
    ]);
    const [showTodos, setShowTodos] = useState(true);
    const [currentCat, setCurrentCat] = useState("Favorite");
    const [showCatPopUp, setShowCatPopUp] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showMoreOptions, setShowMoreOptions] = useState(false);

    // -----------------------------------------------------------

    const handleNewTodo = () => {
        const myTodos = [...todos];
        const myTodo = {
            id: Math.random() * 1000000,
            text: todo,
        };
        myTodos.push(myTodo);
        setTodos(myTodos);
        setTodo("");
    };

    const handleSetShowTodos = () => {
        setShowTodos(!showTodos);
    };

    const handleSetShowCatPopUp = () => {
        setShowCatPopUp(!showCatPopUp);
    };

    const handleSetShowSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    };

    const handleSetShowMoreOptions = () => {
        setShowMoreOptions(!showMoreOptions);
    };

    // -----------------------------------------

    return (
        <Context.Provider
            value={{
                todos,
                setTodos,
                todo,
                setTodo,
                cats,
                setCats,
                showTodos,
                setShowTodos,
                currentCat,
                setCurrentCat,
                showCatPopUp,
                setShowCatPopUp,
                showSearchBar,
                setShowSearchBar,
                showMoreOptions,
                setShowMoreOptions,

                handleNewTodo,
                handleSetShowTodos,
                handleSetShowCatPopUp,
                handleSetShowSearchBar,
                handleSetShowMoreOptions,
            }}
        >
            <div className="root">
                <Header />
                {showTodos ? <Todos /> : null}
                <NewTodo />
            </div>
        </Context.Provider>
    );
};

export default App;
