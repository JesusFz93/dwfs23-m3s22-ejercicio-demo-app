import axios from "axios";

const loginService = async () => {
  const form = {
    user_name: "MARGARITA",
    password: "123456",
  };

  const resp = await axios.post(
    "https://dwfs23-m3s21-demo-api.onrender.com/auth/iniciar_sesion",
    form
  );
  console.log(resp);
};

export { loginService };
