import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes';
import './App.css';

// let history = createBrowserHistory()
let hashHistory = require('history').createHashHistory();

class App extends Component {
    constructor() {
        super();
        // 监听全局路有变化
        window.addEventListener('hashchange', (e) => {
            console.log(e.oldURL);
            console.log(e.newURL);
            console.log(e.currentTarget.location);
        });
    }
    render() {
        return (
            <Router history={hashHistory}>
                <div>
                    {/* <Switch>
                        <Route exact path='/' render={() => (
                            <Content userInfo={{ name: 'xxxx' }} />
                        )}></Route>
                        <Route exact path='/xxx' render={() => (
                            <Content userInfo={{ name: 'aaaa' }} />
                        )}></Route>
                    </Switch> */}
                    <Switch>
                        {
                            routes.map(({name, path, exact=true, component}) => (
                                <Route path={path} exact={exact} component={component} key={name} history={hashHistory} />
                            ))
                        }
                        <Redirect from="/*" to="/" />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
