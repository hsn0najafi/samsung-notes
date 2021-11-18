const todoEditor = document.querySelector(".editor-container");

window.onclick = ({ target: { classList } }) => {
    if (classList[0] == "new-todo-button") openEditor();
};

const openEditor = () => {
    todoEditor.classList.toggle("editor-container__active");
};
