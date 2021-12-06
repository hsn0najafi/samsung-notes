import { useContext } from "react";

import Context from "../../context/Context";
import MyFragment from "../../hoc/MyFragment";

import Todo from "./Todo";

const Todos = () => {
  const c = useContext(Context);

  return (
    <MyFragment>
      <div className="todos">
        {c.todos.map((t) => (
          <Todo
            text={t.text}
            key={t.id}
            subject={t.subject}
            handleDelete={() => c.handleDeleteTodos(t.id)}
            handleEdit={() => c.handleEditTodos(t.id)}
          />
        ))}
      </div>
    </MyFragment>
  );
};

export default Todos;
