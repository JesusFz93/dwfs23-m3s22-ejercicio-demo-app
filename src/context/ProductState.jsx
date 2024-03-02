import { useReducer } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import PropTypes from "prop-types";

import { obtenerProductosService } from "../services/productsServices";

const initialState = {
  products: [],
  product: {},
};

const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(productReducer, initialState);

  const obtenerProductos = async () => {
    const resp = await obtenerProductosService();
    console.log(resp.data.data);
  };

  const obtenerProducto = () => {};

  return (
    <ProductContext.Provider
      value={{
        products: globalState.products,
        product: globalState.product,
        obtenerProductos,
        obtenerProducto,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductState.propTypes = {
  children: PropTypes.node,
};

export default ProductState;
