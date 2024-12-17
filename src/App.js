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
  AuthRoute,
  About
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <AuthRoute>
              <MainDashboard />
            </AuthRoute>
          }
        />
        <Route
          path="/account/:id"
          element={
            <AuthRoute>
              <AccountDetails />
            </AuthRoute>
          }
        />
        <Route
          path="/add-transaction/:id"
          element={
            <AuthRoute>
              <AddTransaction />
            </AuthRoute>
          }
        />
        <Route
          path="/account/:accountId/edit-transaction/:id"
          element={
            <AuthRoute>
              <EditTransaction />
            </AuthRoute>
          }
        />
        <Route
          path="/add-account"
          element={
            <AuthRoute>
              <AddAccount />
            </AuthRoute>
          }
        />
        <Route
          path="/edit-account/:id"
          element={
            <AuthRoute>
              <EditAccount />
            </AuthRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
