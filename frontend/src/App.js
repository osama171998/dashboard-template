
import React from "react";
import { SignUp, Dashboard } from "./components/exporter"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import StoreProvider from "./store/index"
function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

    </StoreProvider>
  );
}

export default App;
