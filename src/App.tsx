import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { routes } from "./utils/data";
import { Analytics } from "./pages";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Analytics />} />
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                key={route.label}
                element={route.element}
              />
            );
          })}
        </Route>
          <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
