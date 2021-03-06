import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { HookStore } from './store/HookStore'
import { renderRoutes } from 'react-router-config'
import routes from './router'

const App = (props: any) => {
    return (
        <HookStore>
            <Router>{renderRoutes(routes)}</Router>
        </HookStore>
    )
}

export default App
