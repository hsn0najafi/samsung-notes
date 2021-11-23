import { useContext } from "react";

import Context from "../../context/Context";

import Todo from "./Todo";

const Todos = () => {
    const c = useContext(Context);

    return (
        <div className="todos">
            {c.todos.map((t) => (
                <Todo text={t.text} key={t.id} subject={t.subject} />
            ))}
        </div>
    );
};

export default Todos;
