const LoginPage = () => {
  return (
    <>
      <header className="row col">
        <h1>Login Page</h1>
      </header>
      <main className="row">
        <article className="col">
          <form>
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
