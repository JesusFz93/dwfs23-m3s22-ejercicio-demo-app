import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const ProductsPage = () => {
  const { obtenerProductos } = useContext(ProductContext);

  const handleClick = () => {
    obtenerProductos();
  };

  return (
    <>
      <header className="row col">
        <h1>Products Page</h1>
      </header>
      <main className="row">
        <article className="col">
          <p>Contenido de la pagina productos</p>
          <button className="btn btn-info" onClick={handleClick}>
            Obtener productos
          </button>
        </article>
      </main>
    </>
  );
};

export default ProductsPage;
