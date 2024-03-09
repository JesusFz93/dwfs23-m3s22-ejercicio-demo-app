import axios from "axios";
// "https://dwfs23-m3s21-demo-api.onrender.com/auth/iniciar_sesion",

const loginService = async (form) => {
  // const form = {
  //   user_name: "MARGARITA",
  //   password: "1234567",
  // };

  const resp = await axios.post(
    "https://dwfs23-m3s21-demo-api.onrender.com/auth/iniciar_sesion",
    form
  );

  return resp;
};

const registerService = async (form) => {
  const resp = await axios.post(
    "https://dwfs23-m3s21-demo-api.onrender.com/auth/registrar_usuario",
    form
  );

  return resp;
};

const renovarTokenService = async () => {
  const resp = await axios.get(
    "https://dwfs23-m3s21-demo-api.onrender.com/auth/validar_usuario",
    {
      headers: {
        "x-token": localStorage.getItem("token"),
      },
    }
  );

  return resp;
};

export { loginService, registerService, renovarTokenService };
