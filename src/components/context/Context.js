import { createContext } from "react";

const Context = createContext({
    todos: [],
    setTodos: () => {},
    todo: "",
    setTodo: () => {},
    cats: [],
    setCats: () => {},
    showTodos: Boolean,
    setShowTodos: () => {},
    currentCat: "",
    setCurrentCat: () => {},
    showCatPopUp: Boolean,
    setShowCatPopUp: () => {},
    showSearchBar: Boolean,
    setShowSearchBar: () => {},
    showMoreOptions: Boolean,
    setShowMoreOptions: () => {},

    handleNewTodo: () => {},
    handleSetShowTodos: () => {},
    handleSetShowCatPopUp: () => {},
    handleSetShowSearchBar: () => {},
    handleSetShowMoreOptions: () => {},
});

export default Context;
