import React, { Component, Fragment } from 'react';

import Products from './../../component/Products/Products';
import ProductItem from './../../component/ProductItem/ProductItem';
import callAPI from './../../utils/apiCaller';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from './../../actions/index';
class ProductListPage extends Component {
    constructor(props) {
        super(props);
    }
    onDelete=(id)=>{
        this.props.actDeleteProduct(id);
    }

    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map(
                (product, index) => {
                    return (
                        <ProductItem
                            key={index}
                            index={index}
                            product={product}
                            onDelete={this.onDelete}
                        />
                    );
                }
            );
        }

        return result;
    }
    componentDidMount() {
        this.props.fetchAllProduct();
        
    }
    render() {
       
        // var {products}=this.props;
        var {products} =this.props ;
        return (
            <Fragment>

                <div className="container">

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                            <Link to="product/add" className="btn btn-info">
                                Them San Pham
                            </Link>
                            <hr />
                            <Products>
                                { this.showProducts(products)}
                            </Products>



                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return (
        {
            products: state.products
        }
    )
}
const mapDispatchToProps=(dispatch,props)=>{
    return{
        fetchAllProduct:()=>{
            dispatch(action.actFetchProductsRequest());
        },
        actDeleteProduct:(id)=>{
            dispatch(action.actDeleteProductRequest(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);