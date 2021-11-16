import Todo from "./Todo";

const Todos = ({ todos }) => {
    return (
        <div>
            <div>
                {todos.map((t) => (
                    <Todo text={t.text} key={t.id} />
                ))}
            </div>
        </div>
    );
};

export default Todos;
