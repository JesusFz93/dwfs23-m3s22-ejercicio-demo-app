import axios from "axios";

const URL = "http://localhost:4000/productos";

const obtenerProductosService = async () => {
  const resp = await axios.get(URL);
  return resp;
};

const obtenerProductoService = async (id) => {
  const resp = await axios.get(`${URL}/${id}`);
  return resp;
};

export { obtenerProductosService, obtenerProductoService };
