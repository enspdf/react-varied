import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS_ERROR,
  GET_DELETE_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
  GET_EDIT_PRODUCT,
  EDIT_PRODUCT,
  EDIT_PRODUCT_SUCCESS,
  EDIT_PRODUCT_ERROR,
} from "../types";
import axiosClient from "../config/axios";
import Swal from "sweetalert2";

export function createProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct());

    try {
      await axiosClient.post("/products", product);
      dispatch(addProductSuccess(product));
      Swal.fire("Success", "The product was added successfully", "success");
    } catch (error) {
      console.error(error);
      dispatch(addProductError(true));
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error has occurred, try again",
      });
    }
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductError = (state) => ({
  type: ADD_PRODUCT_ERROR,
  payload: state,
});

export function loadProductsAction() {
  return async (dispatch) => {
    dispatch(loadProducts());

    try {
      const response = await axiosClient.get("/products");
      dispatch(loadProductsSuccess(response.data));
    } catch (error) {
      console.error(error);
      dispatch(loadProductError());
    }
  };
}

const loadProducts = () => ({
  type: LOAD_PRODUCTS,
  payload: true,
});

const loadProductsSuccess = (products) => ({
  type: LOAD_PRODUCTS_SUCCESS,
  payload: products,
});

const loadProductError = () => ({
  type: LOAD_PRODUCTS_ERROR,
  payload: true,
});

export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(getDeleteProduct(id));

    try {
      await axiosClient.delete(`/products/${id}`);
      dispatch(deleteProductSuccess());

      Swal.fire("Deleted!", "The producthas been deleted", "success");
    } catch (error) {
      console.error(error);
      dispatch(deleteProductError());
    }
  };
}

const getDeleteProduct = (id) => ({
  type: GET_DELETE_PRODUCT,
  payload: id,
});

const deleteProductSuccess = () => ({
  type: DELETE_PRODUCT_SUCCESS,
});

const deleteProductError = () => ({
  type: DELETE_PRODUCT_ERROR,
  payload: true,
});

export function getEditProduct(product) {
  return (dispatch) => {
    dispatch(getProductAction(product));
  };
}

const getProductAction = (product) => ({
  type: GET_EDIT_PRODUCT,
  payload: product,
});

export function editProductAction(product) {
  return async (dispatch) => {
    dispatch(editProduct());

    try {
      axiosClient.put(`/products/${product.id}`, product);
      dispatch(editProductSuccess(product));
    } catch (error) {
      console.log(error);
      dispatch(editProductError());
    }
  };
}

const editProduct = () => ({
  type: EDIT_PRODUCT,
});

const editProductSuccess = (product) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: product,
});

const editProductError = () => ({
  type: EDIT_PRODUCT_ERROR,
});
