import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLoginRegister from "./components/FormLoginRegister";
import InputsLogin from "./components/Login";
import InputsRegister from "./components/Register";
import HomeContain from "./components/HomeContain";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <FormLoginRegister>
              <InputsLogin />
            </FormLoginRegister>
          }
        />
        <Route
          path="/register"
          element={
            <FormLoginRegister>
              <InputsRegister />
            </FormLoginRegister>
          }
        />

        <Route path="/Home" element={<HomeContain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
