import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import EnglishPage from './Languages/EnglishPage';
import FrenchPage from './Languages/FrenchPage';
import SpanishPage from './Languages/SpanishPage';

import './App.css';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={EnglishPage} />
                        <Route exact path='/fr' component={FrenchPage} />
                        <Route exact path='/es' component={SpanishPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
