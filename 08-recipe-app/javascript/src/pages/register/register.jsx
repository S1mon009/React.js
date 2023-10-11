import Header from "../../components/header/header";
import SwitchTheme from "../../components/switch_theme/switchTheme";
import Footer from "../../components/footer/footer";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { register } from "../../supabase/data";
import "./register.scss";

const Register = () => {
  return (
    <div>
      <Header>
        <SwitchTheme />
      </Header>
      <main className="d-flex justify-content-center align-items-center w-100">
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
            setTimeout(() => {
              register(values);
              setSubmitting(false);
            }, 400);
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
                  value={values.password}
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
                Already have an accound? <Link to="/login">Login</Link>
              </div>
            </form>
          )}
        </Formik>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
