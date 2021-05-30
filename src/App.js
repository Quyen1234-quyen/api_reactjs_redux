
import React, { Component, Fragment } from 'react';
import './App.css';
import Menu from './component/Menu/Menu';
import Products from './component/Products/Products';
import router from './router';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
class App extends Component {
    showRouter = (router) => {
        var result = null;
        if (router.length > 0) {
            result = router.map(
                (router, index) => {
                    return (
                        <Route
                            key={index}
                            path={router.path}
                            exact={router.exact}
                            component={router.main}
                        />
                    );
                }
            );
        }


        return <Switch>{result}</Switch>;
    }
    render() {
        return (
            <Fragment>
                
                <Router>
                    <Menu />
                    {this.showRouter(router)}

                </Router>


            </Fragment>
        );
    }
}

export default App;
