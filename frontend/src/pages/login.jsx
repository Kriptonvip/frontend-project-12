
function Login() {
  return (
    <div className="container-fluid h-100">
            <div className="row justify-content-center align-content-center h-100">
                <div className="col-12 col-md-8 col-xxl-6">
                    <div className="card shadow-sm">
                        <div className="card-body row p-5">
                          <div className="col-12 col-md-12  d-flex align-items-center justify-content-center">
                            <form className="col-12 col-md-6 mt-3 mt-mb-0">
                                <h1 className="text-center mb-4">Войти</h1>
                                <div className="form-floating mb-3">
                                  <input name="username" autocomplete="username"
                                        required="" placeholder="Ваш ник" id="username" className="form-control"
                                        value=""></input>
                                        <label for="username">Ваш ник</label>
                                </div>
                                <div className="form-floating mb-4">
                                  <input name="password" autocomplete="current-password"
                                        required="" placeholder="Пароль" type="password" id="password"
                                        className="form-control" value="">
                                  </input>
                                        <label className="form-label" for="password">Пароль</label>
                                </div>
                                <button type="submit" className="w-100 mb-3 btn btn-outline-primary">Войти</button>
                            </form>
                        </div>
                        <div className="card-footer p-4">
                            <div className="text-center"><span>Нет аккаунта?</span> <a href="/signup">Регистрация</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}

export default Login;
