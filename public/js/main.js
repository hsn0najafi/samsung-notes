const todoEditor = document.querySelector(".editor-container");
const popUp = document.querySelector(".popUp-catergoriSelect");

window.onclick = ({ target: { classList } }) => {
    if (classList[0] == "new-todo-button") openEditor();
    if (classList[0] == "catNameButton") openCats();
    if (
        classList[0] != "catNameButton" &&
        classList[0] != "popUp-catergoriSelect"
    ) {
        closeCats();
    }
};

const openEditor = () => {
    todoEditor.classList.toggle("editor-container__active");
};

const openCats = () => {
    popUp.classList.add("popUp-catergoriSelect__active");
};

const closeCats = () => {
    popUp.classList.remove("popUp-catergoriSelect__active");
};
