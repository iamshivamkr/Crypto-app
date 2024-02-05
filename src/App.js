import { Routes, Route } from "react-router-dom";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Header /> */}
              {/* No need bcz its Home only but stil... :) */}
              <Exchanges />
            </>
          }
        />
        {/* <Route/> for Login and signup */}
        <Route
          path="/coins"
          element={
            <>
              <Header />
              <></>
              <Coins />
            </>
          }
        />
        <Route
          path="/coins/:id"
          element={
            <>
              <Header />
              <CoinDetails />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
