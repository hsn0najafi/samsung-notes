import React from "react";
import { render } from "react-dom";

import App from "./components/containers/App";
import GlobalState from "./components/containers/GlobalState";

render(
    <GlobalState>
        <App />
    </GlobalState>,
    document.getElementById("root")
);
