import Header from "../../components/header/header";
import SwitchTheme from "../../components/switch_theme/switchTheme";
import Footer from "../../components/footer/footer";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <>
      <Header>
        <div className="d-flex align-items-center buttons-header">
          <button className="btn btn-warning logout">Logout</button>
          <SwitchTheme />
        </div>
      </Header>
      <main style={{ padding: "0 20px" }}>
        <div className="sidebar">sZy,o</div>
        <div className="h-100 recipies"></div>
      </main>
      <Footer />
    </>
  );
};
export default Dashboard;
