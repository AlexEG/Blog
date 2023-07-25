import { Routes, Route } from "react-router-dom";
import SectionComingSoon from "../SectionComingSoon";

import JS_W3School_1_1 from "./W3School/JS_W3School_1_1";
import JS_W3School_1_2 from "./W3School/JS_W3School_1_2";
import JS_W3School_1_3 from "./W3School/JS_W3School_1_3";

function JavaScriptW3SchoolRoutes() {
  return (
    <Routes>
      <Route path="js-introduction" element={<JS_W3School_1_1 />}></Route>
      <Route path="js-where-to" element={<JS_W3School_1_2 />}></Route>
      <Route path="js-output" element={<JS_W3School_1_3 />}></Route>

      <Route path="*" element={<SectionComingSoon />}></Route>
    </Routes>
  );
}
export default JavaScriptW3SchoolRoutes;
