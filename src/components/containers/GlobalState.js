import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Context from "../context/Context";

const GlobalState = ({ children }) => {
    // --------------------------------

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
        {
            id: 4,
            subject: "SampleSampleSampleSampleSampleSampleSample",
            text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziuefhuegvbzuiwehfeuhrugfzbdshfgeruigfrbhfbvyrfehdjzfbdhfdg",
            categoriName: "favorite",
        },
        {
            id: 5,
            subject: "SampleSampleSampleSampleSampleSampleSample",
            text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziue",
            categoriName: "private",
        },
        {
            id: 6,
            subject: "SampleSampleSampleSampleSampleSampleSample",
            text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziuefhuegvbzuiwehfeuhrugfzbdshfgeruigfrbhfbvyrfehdjzfbdhfdg",
            categoriName: "favorite",
        },
        {
            id: 7,
            subject: "SampleSampleSampleSampleSampleSampleSample",
            text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziuefhuegvbzuiwehfeuhrugfzbdshfgeruigfrbhfbvyrfehdjzfbdhfdg",
            categoriName: "favorite",
        },
        {
            id: 8,
            subject: "SampleSampleSampleSampleSampleSampleSample",
            text: "abhasgydaebhbzsdhgyegzfrhsdbhzsdbv zsjdvziue",
            categoriName: "private",
        },
        {
            id: 9,
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
    const [showEditorContainer, setShowEditorContainer] = useState(true);

    // -------------------------------------------------------------------

    const handleNewTodo = () => {
        const myTodos = [...todos];
        const myTodo = {
            id: uuidv4(),
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

    const handleSetShowEditorContainer = () => {
        setShowEditorContainer(!showEditorContainer);
    };

    // ----------------------------------------------

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
                showEditorContainer,

                handleNewTodo,
                handleSetShowTodos,
                handleSetShowCategoriPopUp,
                handleSetShowSearchBar,
                handleSetShowMoreOptions,
                handleSetShowEditorContainer,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default GlobalState;
