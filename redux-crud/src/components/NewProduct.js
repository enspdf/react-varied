import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction } from "../actions/productAction";
import { showAlert, hideAlertAction } from "../actions/alertAction";

const NewProduct = ({ history }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  const alert = useSelector((state) => state.alert.alert);

  const addProduct = (product) => dispatch(createProductAction(product));

  const submitNewProduct = (e) => {
    e.preventDefault();

    if (name.trim() === "" || price <= 0) {
      const alert = {
        msg: "All fields are required",
        classes: "alert alert-danger text-center text-uppercase p3",
      };

      dispatch(showAlert(alert));

      return;
    }

    dispatch(hideAlertAction());

    addProduct({
      name,
      price,
    });

    history.push("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add New Product
            </h2>
            {alert ? <p className={alert.classes}>{alert.msg}</p> : null}
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product Price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add
              </button>
            </form>
            {loading ? <p>Loading...</p> : null}
            {error ? (
              <p className="alert alert-danger p2 mt-4 text-center">
                An error has occurred
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
