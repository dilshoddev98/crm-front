import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <div className="w-full min-h-[90vh] flex flex-col md:flex-row ">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
