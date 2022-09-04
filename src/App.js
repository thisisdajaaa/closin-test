import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Marketplace } from "./pages/Marketplace";
import "./App.module.css";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/marketplace" exact element={<Marketplace />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
