import Header from "../common/header/Header";
import NewTodo from "../common/newTodo/NewTodo";
import Todos from "../common/todos/Todos";
import MyFragment from "../hoc/MyFragment";

const App = () => {
    return (
        <MyFragment>
            <Header />
            <Todos />
            <NewTodo />
        </MyFragment>
    );
};

export default App;
