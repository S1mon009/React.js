import { Formik } from "formik";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-black.svg";
import RegisterImage from "./images/register.png";
import "./register.scss";

const Register = () => {
  return (
    <div className="d-flex justify-content-around align-items-center w-100 register-container">
      <img
        src={Logo}
        alt="Logo"
        className="position-absolute logo"
        loading="lazy"
      />
      <img
        src={RegisterImage}
        alt="Register"
        className="page-image"
        loading="lazy"
      />
      <Formik
        initialValues={{ email: "", password: "", checkbox: false }}
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
          } else if (values.password.length < 8) {
            errors.password = "Password must have 8 characters";
          }
          if (!values.checkbox) {
            errors.checkbox = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          setTimeout(() => {
            values.email = values.password = "";
            values.checkbox = false;
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
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

              <div id="emailHelp" className="form-text subtext">
                We'll never share your email with anyone else.
              </div>
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
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input checkbox"
                id="inputCheckbox"
                name="checkbox"
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.checkbox}
              />
              <label className="form-check-label" htmlFor="inputCheckbox">
                Agree to terms and conditions
              </label>
              <span className="d-block fs-6 text-danger error-checkbox">
                {errors.checkbox && touched.checkbox && errors.checkbox}
              </span>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-warning"
            >
              Register
            </button>
            <div className="mb-3 register">
              Already have an accound?
              <Link to="/login">
                <span className="text-warning fw-bold"> Login</span>
              </Link>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
