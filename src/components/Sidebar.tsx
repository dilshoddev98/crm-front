import { Link, useLocation } from "react-router-dom";
import { routes } from "../utils/data";
import clsx from "clsx";
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="flex flex-row flex-wrap md:flex-col bg-primary p-2 gap-2 w-full md:w-[15%] ">
      {routes.map((route) => {
        return (
          <Link
            to={route.path}
            key={route.path}
            className={clsx(
              "text-white border border-transparent p-2 rounded hover:border-slate-400",
              {
                "border-slate-400": location.pathname === route.path,
              }
            )}
          >
            {route.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
