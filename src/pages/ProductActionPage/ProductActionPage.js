import React, { Component, Fragment } from 'react';
import callAPI from '../../utils/apiCaller';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtName: '',
            txtPrice: '',
            checkBox: ''
        };
    }
    componentDidMount() {
        var { match } = this.props;

        if (match) {
            var id = match.params.id;
            this.props.getProduct(id);
            this.setState({

            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.editProduct) {
            this.setState({
                id: nextProps.editProduct.id,
                txtName: nextProps.editProduct.name,
                txtPrice: nextProps.editProduct.price,
                checkBox: nextProps.editProduct.status
            })
        }
    }
    OnChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });

    }
    onSave = (e) => {
        e.preventDefault();
        var { id, txtName, txtPrice, checkBox } = this.state;
        var { history } = this.props;
        var product = {
            id: id,
            name: txtName,
            price: txtPrice,
            status: checkBox
        }
        if (id) {
            this.props.updateProduct(id,{
                name: txtName,
                price: txtPrice,
                status: checkBox
            });
            history.goBack();
        } else {
            this.props.addProduct(product);
            history.goBack();
        }

    }
    render() {
        var { txtName, txtPrice, checkBox } = this.state;
        return (
            <Fragment>

                <div className="container">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                        <form action="" method="POST" className="form-horizontal" role="form" onSubmit={this.onSave}>
                            <div className="form-group">
                                <legend>Them San Pham</legend>
                            </div>

                            <div className="form-group">
                                <label>Ten San Pham</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="txtName"
                                    value={txtName}
                                    onChange={this.OnChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Gia San Pham</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="txtPrice"
                                    value={txtPrice}
                                    onChange={this.OnChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Trang Thai</label>
                            </div>
                            <div className="check-box">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="checkBox"
                                        checked={checkBox}
                                        value={checkBox}
                                        onChange={this.OnChange}

                                    />
                                    Con Hang
                                </label>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>

            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        editProduct: state.editProduct
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        addProduct: (product) => {
            dispatch(actions.addProductRequest(product));
        },
        getProduct: (id) => {
            dispatch(actions.getProductToEditRequest(id));
        },
        updateProduct:(id,product)=>{
            dispatch(actions.updateProductRequest(id,product));
        }
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);