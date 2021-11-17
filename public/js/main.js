const todoEditor = document.querySelector(".editor-container");
const html = document.querySelector("*");

window.onclick = (e) => {
    if (e.target.classList[0] == "new-todo-button") openEditor();
};

const openEditor = () => {
    todoEditor.classList.toggle("editor-container__active");
    html.classList.toggle("hideOverFlow");
};
