import * as Types from './../constants/ActionTypes';
import callAPI from '../utils/apiCaller';



export const actFetchProductsRequest = () => {
    return (dispatch) => {
        return callAPI('product', 'GET', null).then(res => {
            dispatch(actFetchProducts(res.data));
        })
    }
}
export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

//delete
export const actDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callAPI(`product/${id}`, 'DELETE', null).then(res => {
            console.log(res);
            dispatch(actDeleteProduct(id));
        });
    }
}


export const actDeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    }
}
// add
export const addProductRequest = (product) => {
    return (dispatch) => {
        callAPI('product', 'POST', product).then(res => {
            dispatch(addProduct(res.data));
        });
    }
}

export const addProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}
//get product to edit
export const getProductToEditRequest = (id) => {
    return dispatch => {
        return callAPI(`product/${id}`, 'GET', null).then(res => {
            dispatch(getProductToEdit(res.data));
        })
    }
}


export const getProductToEdit = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    }
}
//update
export const updateProductRequest=(id,product)=>{
    return dispatch=>{
        return callAPI(`product/${id}`,'PUT',product).then(res=>{
            dispatch(updateProduct(res.data));
        });
    }
}
export const updateProduct=(product)=>{
    return {
        type:Types.UPDATE_PRODUCT,
        product
    }
}