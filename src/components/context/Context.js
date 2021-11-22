import { createContext } from "react";

const Context = createContext({
    todos: [],
    handleShowPopUp: () => {},
});

export default Context;
