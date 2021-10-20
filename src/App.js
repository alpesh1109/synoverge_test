import React from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DigitSum from "./DigitSum";

function App() {

    return (
      <>
        <Switch>
          <Route exact path="/" component={DigitSum} />
        </Switch>
      </>
    )
}
export default App;