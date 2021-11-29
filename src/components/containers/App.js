import { Route, Switch } from "react-router-dom";

import About from "../common/about/About";
import Header from "../common/header/Header";
import NewTodo from "../common/newTodo/NewTodo";
import Todos from "../common/todos/Todos";
import MyFragment from "../hoc/MyFragment";

const App = () => {
    return (
        <MyFragment>
            <Header />
            <Switch>
                <Route path="/about" exact component={About} />
                <Route path="/" exact component={Todos} />
            </Switch>
            <NewTodo />
        </MyFragment>
    );
};

export default App;
