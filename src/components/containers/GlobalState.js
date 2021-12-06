import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import sweetAlert from "sweetalert";

import Context from "../context/Context";

const GlobalState = ({ children }) => {
  /**
   * All Aplication States
   */
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [subject, setSubject] = useState("");
  const [categories, setCategories] = useState([
    { id: 0, name: "default", count: 0 },
  ]);
  const [currentCategori, setCurrentCategori] = useState("default");
  const [showCategoriPopUp, setShowCategoriPopUp] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showEditorContainer, setShowEditorContainer] = useState(false);
  const [categoriEditMode, setCategoriEditMode] = useState(false);
  const [newCategoriTitle, setNewCategoriTitle] = useState("");
  const [showCategoriNameInput, setShowCategoriNameInput] = useState(false);
  const [todosEditMode, setTodosEditMode] = useState(false);
  const [currentEditingTodoID, setCurrentEditingTodoID] = useState();

  const handleNewTodo = () => {
    if (todosEditMode) {
      /**
       * Create New Todo And Replace by Selected
       */
      editMyTodo();
    } else {
      /**
       * Create And Add New Todo
       */
      addMyNewTodo();
    }

    // Close From Editor After Add
    setShowEditorContainer(!showEditorContainer);

    // Empty Editor Inputs
    setSubject("");
    setTodo("");
  };

  const editMyTodo = () => {
    const allTodos = [...todos];
    const todoIndex = allTodos.findIndex((t) => t.id === currentEditingTodoID);
    allTodos[todoIndex] = {
      id: currentEditingTodoID,
      categoriName: currentCategori,
      subject,
      text: todo,
    };
    setTodos(allTodos);
  };

  const addMyNewTodo = () => {
    const Todo = {
      id: uuidv4(),
      categoriName: currentCategori,
      subject,
      text: todo,
    };
    // Push New Todo Before Another Todos
    let Todos = [Todo, ...todos];

    authenticateNewTodos(Todos);
  };

  const authenticateNewTodos = (Todos) => {
    if (subject !== "" && todo !== "") {
      setTodos(Todos);

      // Alert
      sweetAlert("Success", "Added To TodoList", "success");

      // Increase Default Categori Count
      increaseCategoriCount();
    }
  };

  const increaseCategoriCount = () => {
    const allCategories = [...categories];
    const CurrentCategoriId = allCategories.findIndex(
      (cc) => (cc.name = currentCategori)
    );

    allCategories[CurrentCategoriId].count++;
    setCategories(allCategories);
  };

  const handleSetShowCategoriPopUp = () => {
    if (categoriEditMode === false) {
      setShowCategoriPopUp(!showCategoriPopUp);
    }
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

  const handleSetDefaultCategori = (id) => {
    const selectedCategori = [...categories].filter((c) => c.id === id);
    setCurrentCategori(selectedCategori[0].name);
  };

  const handleToggleCategoriEditMode = () => {
    setCategoriEditMode(!categoriEditMode);
    setShowCategoriNameInput(!showCategoriNameInput);
  };

  const handleDeleteCategori = (id) => {
    const Categories = [...categories];
    const undeletedCategories = Categories.filter((c) => c.id !== id);
    setCategories(undeletedCategories);
  };

  const handleCategoriNameChange = (id) => {
    setShowCategoriNameInput(!showCategoriNameInput);

    if (newCategoriTitle !== "") {
      const allCategories = [...categories];
      const targetCategoriIndex = allCategories.findIndex((tg) => tg.id === id);
      allCategories[targetCategoriIndex].name = newCategoriTitle;
      setCategories(allCategories);
    }

    setNewCategoriTitle("");
  };

  const handleAddNewCategori = () => {
    const allCategories = [...categories];
    const newCategori = {
      id: uuidv4(),
      name: newCategoriTitle,
      count: 0,
    };

    if (newCategoriTitle !== "") {
      allCategories.push(newCategori);
      setCategories(allCategories);

      setNewCategoriTitle("");
    }
  };

  const handleToggleTodosEditMode = () => {
    setTodosEditMode(!todosEditMode);
    setShowMoreOptions(!showMoreOptions);
  };

  const handleDeleteTodos = (id) => {
    const undeletedTodos = [...todos].filter((t) => t.id !== id);
    setTodos(undeletedTodos);

    if (todos.length === 1) {
      setTodosEditMode(!todosEditMode);
    }
  };

  const handleEditTodos = (id) => {
    setCurrentEditingTodoID(id);
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
        currentCategori,
        setCurrentCategori,
        showCategoriPopUp,
        setShowCategoriPopUp,
        showSearchBar,
        setShowSearchBar,
        showMoreOptions,
        setShowMoreOptions,
        showEditorContainer,
        subject,
        setSubject,
        categoriEditMode,
        setNewCategoriTitle,
        newCategoriTitle,
        showCategoriNameInput,
        todosEditMode,
        setCurrentEditingTodoID,

        handleNewTodo,
        handleSetShowCategoriPopUp,
        handleSetShowSearchBar,
        handleSetShowMoreOptions,
        handleSetShowEditorContainer,
        handleSetDefaultCategori,
        handleToggleCategoriEditMode,
        handleDeleteCategori,
        handleCategoriNameChange,
        handleAddNewCategori,
        handleToggleTodosEditMode,
        handleDeleteTodos,
        handleEditTodos,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default GlobalState;
