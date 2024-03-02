import { useReducer } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import PropTypes from "prop-types";

const initialState = {
  products: [],
  product: {},
};

const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(productReducer, initialState);

  const obtenerProductos = () => {};

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
