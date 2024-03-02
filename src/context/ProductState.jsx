import { useReducer, useCallback } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import PropTypes from "prop-types";

import {
  obtenerProductoService,
  obtenerProductosService,
} from "../services/productsServices";

const initialState = {
  products: [],
  product: {},
};

const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(productReducer, initialState);

  const obtenerProductos = useCallback(async () => {
    const resp = await obtenerProductosService();
    // console.log(resp.data.data);

    dispatch({
      type: "OBTENER_PRODUCTOS",
      payload: resp.data.data,
    });
  }, []);

  const obtenerProducto = useCallback(async (id) => {
    const resp = await obtenerProductoService(id);
    // console.log(resp.data.data);

    dispatch({
      type: "OBTENER_PRODUCTO",
      payload: resp.data.data,
    });
  }, []);

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
