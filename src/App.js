import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { SignUpPage, LoginPage, ForgetPasswordPage } from "./pages";
import { useDispatch } from "react-redux";
import { getUserProfileAction } from "./reducers/asyncAuthReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfileAction());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgotPassword" element={<ForgetPasswordPage />} />
      </Routes>
    </>
  );
};

export default App;
