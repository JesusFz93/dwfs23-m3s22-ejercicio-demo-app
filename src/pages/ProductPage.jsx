import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductContext from "../context/ProductContext";

const ProductPage = () => {
  const { obtenerProducto, product } = useContext(ProductContext);

  const { id } = useParams();

  useEffect(() => {
    obtenerProducto(id);
  }, [obtenerProducto, id]);

  return (
    <>
      <main className="row">
        <article className="col">
          {product && (
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.image}
                    className="img-fluid rounded-start"
                    alt={product.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>
      </main>
    </>
  );
};

export default ProductPage;
