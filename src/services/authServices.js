import axios from "axios";

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

export { loginService };
