import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import './LoginPage.css';
import HomePage from '../HomePage/HomePage';

function LoginPage() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <div className="form-content">
                        <span>
                            <input type="text" className="username" placeholder="Username" />
                        </span><br/>
                        <span>
                            <input type="password" className="password" placeholder="Password" />
                        </span><br/>
                        <Link className="login-button" type="button" to="/home">
                            Login
                        </Link>
                    </div>
                </Route>
                <Route path="/home">
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default LoginPage;