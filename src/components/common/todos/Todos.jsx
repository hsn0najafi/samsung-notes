import { useContext } from "react";

import Context from "../../context/Context";
import MyFragment from "../../hoc/MyFragment";

import Todo from "./Todo";

const Todos = () => {
    const c = useContext(Context);

    return (
        <MyFragment>
            {c.showTodos ? (
                <div className="todos flex-center-col">
                    {c.todos.map((t) => (
                        <Todo text={t.text} key={t.id} subject={t.subject} />
                    ))}
                </div>
            ) : null}
        </MyFragment>
    );
};

export default Todos;
