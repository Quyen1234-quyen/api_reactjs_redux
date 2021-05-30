import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';


class ProductItem extends Component {
    onDelete=(id)=>{
        if(confirm("Ban co muon xoa khong")){//eslint-disable-line
            this.props.onDelete(id);
        }
    }
    render() {
        var { product, index } = this.props;
        if(product){
            var statusName = product.status ? "Con Hang" : "Het Hang";
            var statusClass = product.status ? "warning" : "default";
        }
        
        return (
            <Fragment>
                <tr>
                    <th>{index}</th>
                    <th>{product.id}</th>
                    <th>{product.name}</th>
                    <th>{product.price}</th>
                    <td>
                        <span className={`label label-${statusClass}`}>
                            {statusName}
                        </span>

                    </td>
                    <td>

                        <Link 
                            to={`/product/${product.id}/edit`}
                            type="button" 
                            className="btn btn-success"
                        >
                            Sua
                        </Link>
                        &nbsp;
                        <button 
                            type="button" 
                            className="btn btn-warning"
                            onClick={()=>this.onDelete(product.id)}
                        >
                            Xoa
                        </button>

                    </td>
                </tr>
            </Fragment>
        );
    }
}

export default ProductItem;