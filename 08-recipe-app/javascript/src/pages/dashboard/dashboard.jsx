import { useEffect } from "react";
import Header from "../../components/header/header";
import SwitchTheme from "../../components/switch_theme/switchTheme";
import Footer from "../../components/footer/footer";
import {
  useLoaderData,
  Outlet,
  Link,
  useSubmit,
  useLocation,
} from "react-router-dom";
import "./dashboard.scss";

const Dashboard = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <Header>
        <div className="d-flex align-items-center buttons-header">
          <button className="btn btn-warning logout">Logout</button>
          <SwitchTheme />
        </div>
      </Header>
      <main style={{ padding: "0 20px" }}>
        <div className="recipes-list">
          <div className="search">
            <div className="mb-3">
              <label htmlFor="search" className="form-label">
                Search
              </label>
              <input
                type="text"
                className="form-control"
                id="search"
                aria-describedby="search"
                name="search"
              />
            </div>
          </div>
          <Link to="/dashboard/add">
            <button className="btn btn-warning w-100 fw-semibold">
              <i className="bi bi-plus-lg"></i>Add recipe
            </button>
          </Link>

          <ul>
            {!data && <span className="add-first">No data</span>}
            <li className="fw-semibold recipe">
              <span className="d-block w-100 date">2023-10-10</span>
              <span className="d-block w-100 title">Szymon</span>
            </li>
          </ul>
        </div>
        <div className="recipe-details">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Dashboard;

function useSessionTimeout() {
  const submit = useSubmit();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      submit(null, { method: "post", action: "/logout" });
    }, 5 * 60_000);

    return () => clearTimeout(timer);
  }, [submit, location]);
}
