import { BrowserRouter, Switch, Route } from "react-router-dom";
import registrationPage from "./pages/registrationPage";
import gamePage from "./pages/gamePage";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={registrationPage} />
        <Route exact path='/gamePage' component={gamePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;