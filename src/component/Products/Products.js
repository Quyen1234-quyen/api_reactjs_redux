import React, { Component, Fragment } from 'react';
class Products extends Component {
    render() {

        return (
            <Fragment>
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">Panel title</h3>
                    </div>

                    <div className="panel-body">

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>STT</th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Hanh Dong</th>
                                </tr>
                            </thead>
                            <tbody>
                               {this.props.children}
                            </tbody>
                        </table>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Products;