import React, {Fragment} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Routes from "./route/Routes"
import Frontpage from "../src/main/Frontpage"
import "./App.css"

function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path='/' component={Frontpage} />
        <Route component={Routes} />
      </Fragment>
    </Router>
  )
}

export default App
