import { Formik } from "formik";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-black.svg";
import LoginImage from "./images/login.png";
import "./login.scss";

const Login = () => {
  return (
    <div className="d-flex justify-content-around align-items-center w-100 login-container">
      <img
        src={Logo}
        alt="Logo"
        className="position-absolute logo"
        loading="lazy"
      />
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            values.email = values.password = "";
            setSubmitting(false);
          }, 2000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form className="text-start" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span className="fs-6 text-danger">
                {errors.email && touched.email && errors.email}
              </span>
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <span className="fs-6 text-danger">
                {errors.password && touched.password && errors.password}
              </span>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-warning"
            >
              Login
            </button>
            <div className="mb-3 register">
              Don't have an accound?
              <Link to="/register">
                <span className="text-warning fw-bold"> Join us</span>
              </Link>
            </div>
          </form>
        )}
      </Formik>
      <img src={LoginImage} alt="Login" className="page-image" loading="lazy" />
    </div>
  );
};

export default Login;
