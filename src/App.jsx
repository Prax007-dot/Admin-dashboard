import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme.js";
import { useSelector } from "react-redux";
import "./App.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Layout from "./scenes/Layout.jsx";
import Dashboard from "./scenes/Dashboard.jsx";
import Products from "./scenes/Products.jsx";
import Customers from "./scenes/Customers.jsx";
import Transactons from "./scenes/Transactons.jsx";
import Geography from "./scenes/Geography.jsx";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactons />} />
              <Route path="/geography" element={<Geography/>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
