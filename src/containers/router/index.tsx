import { FC, memo } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../../views/dashboard";
import Signup from "../../views/auth/signup";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default memo(Router);