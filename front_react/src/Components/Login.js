import React from "react";
import Gestionempl from "../assets/gestionempl.png";
import '../styles/app.css'

function Login() {
  return (
    <section className="Form login-all my-4 mx-5">
      <div className="container">
        <div className="row rowww no-gutters">
          <div className="col-lg-5">
            <img src={Gestionempl} className="img-fluid" alt="imgestion" />
          </div>
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="font-weight-bold py-3">Login</h1>
            <h4>Sign into your account </h4>
            <form>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="email"
                    placeholder="E-mail address"
                    className="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <button type="button" className="btn1 mt-3 mb-5">Login</button>
                </div>
              </div>
              <p>Don't have an account yet ? <a href="/"> Register here</a></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
