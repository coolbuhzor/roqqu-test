import "./App.css";
import SideBar from "./components/side-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Exchange,
  Prices,
  Promotions,
  Notifications,
  Activities,
  Settings,
  Wallets,
} from "./pages";

function App() {
  return (
    <section className="App bg-[#020717] min-h-screen flex items-start max-w-[1440px] justify-center h-screen overflow-y-scroll">
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/prices" element={<Prices />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/wallets" element={<Wallets />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </section>
  );
}

export default App;
