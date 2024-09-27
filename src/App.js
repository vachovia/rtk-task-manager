import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Home,
  Login,
  Navbar,
  Register,
  AddAccount,
  EditAccount,
  MainDashboard,
  AccountDetails,
  AddTransaction,
  EditTransaction,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<MainDashboard />} />
        <Route path="/account" element={<AccountDetails />} />
        <Route path="/account/:id" element={<AccountDetails />} />
        <Route path="/add-transaction/:id" element={<AddTransaction />} />
        <Route path="/edit-transaction/:id" element={<EditTransaction />} />
        <Route path="/add-account" element={<AddAccount />} />
        <Route path="/edit-account/:id" element={<EditAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
