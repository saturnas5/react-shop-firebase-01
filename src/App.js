import HomePage from "./page/HomePage/HomePage";
import './App.css'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ShopPage from "./page/ShopPage/ShopPage";
import Header from "./components/Header/Header";


const App = () => {
  return (
      <>
      <Header/>
      <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route path='/shop'>
              <ShopPage/>
          </Route>
      </Switch>
      </>
  )
}

export default () => {
  return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
  );
};
