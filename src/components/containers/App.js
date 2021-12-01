import { Route, Switch } from "react-router-dom";

import About from "../common/about/About";
import Header from "../common/header/Header";
import NewTodo from "../common/newTodo/NewTodo";
import Todos from "../common/todos/Todos";

const App = () => {
  return (
    <div className="app-root">
      <Header />
      <Switch>
        <Route path="/about" exact render={() => <About />} />
        <Route path="/" exact render={() => <Todos />} />
      </Switch>
      <NewTodo />
    </div>
  );
};

export default App;
