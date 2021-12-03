import { createContext } from "react";

const Context = createContext({
  //! It's Just For AutoComplete
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
  categoriEditMode: Boolean,
  setNewCategoriTitle: Boolean,
  newCategoriTitle: "",
  showCategoriNameInput: Boolean,
  todosEditMode: Boolean,

  handleNewTodo: () => {},
  handleSetShowTodos: () => {},
  handleSetShowCategoriPopUp: () => {},
  handleSetShowSearchBar: () => {},
  handleSetShowMoreOptions: () => {},
  handleSetShowEditorContainer: () => {},
  handleSetDefaultCategori: () => {},
  handleToggleCategoriEditMode: () => {},
  handleDeleteCategori: () => {},
  handleCategoriNameChange: () => {},
  handleAddNewCategori: () => {},
  handleToggleTodosEditMode: () => {},
});

export default Context;
