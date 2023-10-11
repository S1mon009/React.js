import "./login.scss";
import Header from "../../components/header/header";
import SwitchTheme from "../../components/switch_theme/switchTheme";
import Footer from "../../components/footer/footer";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { login } from "../../supabase/data";

const Login = () => {
  return (
    <div>
      <Header>
        <SwitchTheme />
      </Header>
      <main className="d-flex justify-content-center align-items-center w-100">
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
            } else if (values.password.length < 8) {
              errors.password = "Password must have 8 characters";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              login(values);
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
                Don't have an accound? <Link to="/register">Join us</Link>
              </div>
            </form>
          )}
        </Formik>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
