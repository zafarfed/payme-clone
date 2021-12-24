import {Route, Switch, BrowserRouter} from "react-router-dom";
import '../src/pictures/1-2-5-768x628.png'
import Home from "./Components/Home";
import LoginPage from "./Components/Login/LoginPage";
import Cabinet from "./Components/Cabinet/Cabinet";

function App() {
    return (
        <>
        <BrowserRouter>
                <Switch>
                    <Route path={'/'} exact={true} component={Home}/>
                    <Route path={'/login'} exact={true} component={LoginPage}/>
                    <Route path={'/cabinet'} exact={true} component={Cabinet}/>
                </Switch>
        </BrowserRouter>
        </>
    );
}export default App;