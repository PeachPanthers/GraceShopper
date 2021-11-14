import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";
import Footer from "./Footer";
import { Link } from "react-router-dom";
/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  console.log(displayName);
  return (
    <div>
      {displayName === "SIGN UP" ? (
        <div>
          <section id='sectionform'>
            <div class='box-1'>
              {" "}
              <hr />
            </div>
            <div class='box-2 text'>
              <div class='login-div'>
                <div class='logopeach'></div>
                <div class='title'>{displayName}</div>

                <form class='fields' onSubmit={handleSubmit} name={name}>
                  <div>
                    <label htmlFor='first'>
                      <small>First</small>
                    </label>
                    <input class='first' name='first' type='text' />
                  </div>
                  <div>
                    <label htmlFor='last'>
                      <small>Last</small>
                    </label>
                    <input class='last' name='last' type='text' />
                  </div>
                  <div>
                    <label htmlFor='email'>
                      <small>Email</small>
                    </label>
                    <input class='username' name='email' type='text' />
                  </div>
                  <div>
                    <label htmlFor='password'>
                      <small>Password</small>
                    </label>
                    <input class='password' name='password' type='password' />
                  </div>

                  <div>
                    <button class='signin-button' type='submit'>
                      {displayName}
                    </button>
                  </div>
                  {error && error.response && (
                    <div> {error.response.data} </div>
                  )}
                </form>
              </div>{" "}
            </div>
          </section>
        </div>
      ) : (
        <div>
          <section id='sectionform'>
            <div class='box-1'>
              {" "}
              <hr />
            </div>
            <div class='box-2 text'>
              <div class='login-div'>
                <div class='logopeach'></div>
                <div class='title'>{displayName}</div>

                <form class='fields' onSubmit={handleSubmit} name={name}>
                  <div>
                    <label htmlFor='email'>
                      <small>Email</small>
                    </label>
                    <input class='username' name='email' type='text' />
                  </div>
                  <div>
                    <label htmlFor='password'>
                      <small>Password</small>
                    </label>
                    <input class='username' name='password' type='password' />
                  </div>

                  <div>
                    <button class='signin-button' type='submit'>
                      {displayName}
                    </button>
                  </div>
                  {error && error.response && (
                    <div> {error.response.data} </div>
                  )}
                </form>
              </div>{" "}
            </div>
          </section>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "LOGIN",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "SIGN UP",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const first = evt.target.first.value;
      const last = evt.target.last.value;
      const email = evt.target.email.value;
      const password = evt.target.password.value;

      dispatch(authenticate(first, last, email, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
