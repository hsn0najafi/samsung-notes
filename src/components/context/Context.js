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
    showEditorContainer: Boolean,
    subject: "",
    setSubject: "",

    handleNewTodo: () => {},
    handleSetShowTodos: () => {},
    handleSetShowCategoriPopUp: () => {},
    handleSetShowSearchBar: () => {},
    handleSetShowMoreOptions: () => {},
    handleSetShowEditorContainer: () => {},
});

export default Context;
