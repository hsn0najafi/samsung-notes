const Todos = ({ todos }) => {
    return (
        <div>
            <div>
                {todos.map((t) => (
                    <p>{t.text}</p>
                ))}
            </div>
        </div>
    );
};

export default Todos;
