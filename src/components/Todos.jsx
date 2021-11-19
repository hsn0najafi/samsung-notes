import Todo from "./Todo";

const Todos = ({ todos }) => {
    return (
        <div className="todos">
            {todos.map((t) => (
                <Todo text={t.text} key={t.id} subject={t.subject} />
            ))}
        </div>
    );
};

export default Todos;
