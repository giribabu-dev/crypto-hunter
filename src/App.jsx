import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import CoinDetails from "./pages/CoinDetails";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/coin-details/:id" element={<CoinDetails />} />
      </Routes>
    </>
  )
};

export default App;