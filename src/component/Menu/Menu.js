import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';
const menu = [
    {
        name: 'Trang Chu',
        to: '/',
        exact: true
    },
    {
        name: 'Danh Sach San Pham',
        to: '/product-list',
        exact: false
    }
]
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? "active" : "";
                return (
                    <li className={active}>
                        <Link to={to} >
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
}
class Menu extends Component {



    showMenu = (menu) => {
        var result = null;
        if (menu.length > 0) {
            result = menu.map(
                (menu, index) => {
                    return <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                }
            );
        }

        return result;
    }
    render() {
        return (
            <Fragment>
                <div className="navbar navbar-default">
                    <a className="navbar-brand" href="#">Call API</a>
                    <ul className="nav navbar-nav">
                        {this.showMenu(menu)}
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default Menu;