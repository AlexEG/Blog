import { BrowserRouter, Routes, Route } from "react-router-dom";

import DocsHomePage from "./pages/DocsHomePage";
import Page404 from "./pages/Page404";
// JavaScript
import JSMDNRoutes from "./DATA/JS/JavaScriptMDNRoutes";
import JavaScriptW3SchoolRoutes from "./DATA/JS/JavaScriptW3SchoolRoutes";
import JSHome from "./pages/JSHome";

// TailwindCSS
import TailwindCSSHome from "./pages/TailwindCSSHome";
import TailwindcssOfficialRoutes from "./DATA/TailwindCSS/TailwindcssOfficialRoutes";

// CSS
import CSSHome from "./pages/CSSHome";
import CSSMDNRoutes from "./DATA/CSS/CSSMDNRoutes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DocsHomePage />}></Route>

        <Route path="javascript" element={<JSHome />}>
          <Route path="mdn/*" element={<JSMDNRoutes />}></Route>
          <Route
            path="w3-school/*"
            element={<JavaScriptW3SchoolRoutes />}
          ></Route>
        </Route>

        <Route path="tailwindcss" element={<TailwindCSSHome />}>
          <Route
            path="official/*"
            element={<TailwindcssOfficialRoutes />}
          ></Route>
        </Route>

        <Route path="css" element={<CSSHome />}>
          <Route path="mdn/*" element={<CSSMDNRoutes />}></Route>
        </Route>

        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
