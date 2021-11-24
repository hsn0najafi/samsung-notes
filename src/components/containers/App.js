import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Header from "../common/header/Header";
import NewTodo from "../common/newTodo/NewTodo";
import Todos from "../common/todos/Todos";
import Context from "../context/Context";
import MyFragment from "../hoc/MyFragment";

const App = () => {
    // ---------------------------------
    const [todos, setTodos] = useState([
        {
            id: 0,
            subject: "SampleSampleSampleSampleSampleSampleSample",
            text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziuefhuegvbzuiwehfeuhrugfzbdshfgeruigfrbhfbvyrfehdjzfbdhfdg",
            categoriName: "favorite",
        },
        {
            id: 1,
            subject: "SampleSampleSampleSampleSampleSampleSample",
            text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziue",
            categoriName: "private",
        },
        {
            id: 2,
            subject: "SampleSampleSampleSampleSampleSampleSample",
            text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziuefhuegvbzuiwehfeuhrugfzbdshfgeruigfrbhfbvyrfehdjzfbdhfdg",
            categoriName: "favorite",
        },
    ]);
    const [todo, setTodo] = useState("");
    const [categories, setCategories] = useState([
        { id: 0, name: "Favorite", count: 20 },
        { id: 1, name: "Other", count: 30 },
        { id: 2, name: "Work", count: 3 },
        { id: 3, name: "Friday", count: 14 },
    ]);
    const [showTodos, setShowTodos] = useState(true);
    const [currentCategori, setCurrentCategori] = useState("Favorite");
    const [showCategoriPopUp, setShowCategoriPopUp] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [showMoreOptions, setShowMoreOptions] = useState(false);

    // -----------------------------------------------------------

    const handleNewTodo = () => {
        const myTodos = [...todos];
        const myTodo = {
            id: uuidv4.v4(),
            text: todo,
        };
        myTodos.push(myTodo);
        setTodos(myTodos);
        setTodo("");
    };

    const handleSetShowTodos = () => {
        setShowTodos(!showTodos);
    };

    const handleSetShowCategoriPopUp = () => {
        setShowCategoriPopUp(!showCategoriPopUp);
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
                categories,
                setCategories,
                showTodos,
                setShowTodos,
                currentCategori,
                setCurrentCategori,
                showCategoriPopUp,
                setShowCategoriPopUp,
                showSearchBar,
                setShowSearchBar,
                showMoreOptions,
                setShowMoreOptions,

                handleNewTodo,
                handleSetShowTodos,
                handleSetShowCategoriPopUp,
                handleSetShowSearchBar,
                handleSetShowMoreOptions,
            }}
        >
            <MyFragment>
                <Header />
                {showTodos ? <Todos /> : null}
                <NewTodo />
            </MyFragment>
        </Context.Provider>
    );
};

export default App;
