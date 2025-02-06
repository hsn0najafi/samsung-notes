import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './components/containers/App'
import GlobalState from './components/containers/GlobalState'

render(
    <GlobalState>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GlobalState>,
    document.getElementById('root'),
)
