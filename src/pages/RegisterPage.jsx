import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

const initForm = {
  user_name: "",
  password: "",
};

const RegisterPage = () => {
  const { user, registrarUsuario } = useContext(AuthContext);

  const [form, setForm] = useState(initForm);
  // const [user, setUser] = useState({});

  const handleInciarSesion = async (e) => {
    e.preventDefault();

    await registrarUsuario(form);

    // console.log(form);

    // try {
    //   // const resp = await registerService(form);
    //   // // console.log(resp.data.data);
    //   // setUser(resp.data.data);
    // } catch (error) {
    //   console.log(error.response.data.msg);
    // }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <header className="row col">
        <h1>Register Page</h1>
      </header>
      <main className="row">
        <article className="col">
          <form onSubmit={handleInciarSesion}>
            <div className="mb-3">
              <label htmlFor="inputUserName" className="form-label">
                User name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUserName"
                name="user_name"
                value={form.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Registrar Usuario
            </button>
          </form>
        </article>
      </main>
      <section className="row">
        <article className="col">
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </article>
      </section>
    </>
  );
};

export default RegisterPage;
