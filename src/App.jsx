import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import CoinDetails from "./pages/CoinDetails";

function App() {
  return (
    <div style={{
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh"
    }}>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/coin-details/:id" element={<CoinDetails />} />
      </Routes>
    </div>
  )
};

export default App;