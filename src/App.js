import React from "react";
import Navbar from "./components/home/Navbar";
import SignIn from "./components/auth/SignIn";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    {/* <Route exact path="/">
                        <Home />
                    </Route> */}
                    <Route exact path="/login">
                        <SignIn />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
