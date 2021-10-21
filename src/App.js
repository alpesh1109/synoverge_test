import React from "react";
import { Switch, Route } from 'react-router-dom';
import DigitSum from "./components/DigitSum";
import Header from "./components/Header";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={DigitSum} />
      </Switch>
    </>
  )
}
export default App;