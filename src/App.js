import HomePage from "./page/homepage/HomePage";
import './App.css'
import {BrowserRouter, Switch, Route} from "react-router-dom";


const App = () => {
  return (
      <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
      </Switch>
  )
}

export default () => {
  return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  );
};
