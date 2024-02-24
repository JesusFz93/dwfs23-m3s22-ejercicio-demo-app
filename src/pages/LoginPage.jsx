import { loginService } from "../services/authServices";
import { useState } from "react";

const initForm = {
  user_name: "",
  password: "",
};

const LoginPage = () => {
  const [form, setForm] = useState(initForm);

  const handleInciarSesion = async (e) => {
    e.preventDefault();

    try {
      const resp = await loginService();
      console.log(resp.data.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  return (
    <>
      <header className="row col">
        <h1>Login Page</h1>
      </header>
      <main className="row">
        <article className="col">
          <form onSubmit={handleInciarSesion}>
            <div className="mb-3">
              <label htmlFor="inputUserName" className="form-label">
                User name
              </label>
              <input type="text" className="form-control" id="inputUserName" />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Iniciar Sesion
            </button>
          </form>
        </article>
      </main>
    </>
  );
};

export default LoginPage;
