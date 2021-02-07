import HomePage from "./pages/HomePage";
import React, {Component} from 'react';
import {MuiThemeProvider} from "@material-ui/core";
import {Switch, Route, withRouter} from 'react-router-dom';
import Header from "./components/Header";

class App extends Component {

    render() {
        const {location} = this.props;
        return (
            <>
                <Header/>
                <Switch location={location}>
                    <Route key={"route-homepage"} path="/">
                        <HomePage key={"page_accueil"}/>
                    </Route>
                </Switch>
            </>
        );
    }
}

export default (withRouter(App));
