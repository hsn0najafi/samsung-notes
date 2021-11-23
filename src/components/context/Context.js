import { createContext } from "react";

const Context = createContext({
    todos: [],
    setTodos: () => {},
    todo: "",
    setTodo: () => {},
    categories: [],
    setCategories: () => {},
    showTodos: Boolean,
    setShowTodos: () => {},
    currentCategori: "",
    setCurrentCategori: () => {},
    showCategoriPopUp: Boolean,
    setShowCategoriPopUp: () => {},
    showSearchBar: Boolean,
    setShowSearchBar: () => {},
    showMoreOptions: Boolean,
    setShowMoreOptions: () => {},

    handleNewTodo: () => {},
    handleSetShowTodos: () => {},
    handleSetShowCategoriPopUp: () => {},
    handleSetShowSearchBar: () => {},
    handleSetShowMoreOptions: () => {},
});

export default Context;
