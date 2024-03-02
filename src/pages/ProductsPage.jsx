import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { NavLink } from "react-router-dom";

const ProductsPage = () => {
  const { obtenerProductos, products } = useContext(ProductContext);

  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <NavLink
                  className="btn btn-info"
                  to={`/products/${product.id}`}
                >
                  Ver mas...
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
