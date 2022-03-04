import { Route, Routes } from "react-router-dom";
import AppointmentPage from "./pages/AppointmentPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import DashAppointment from "./components/Dashboard/DashAppointment";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MakeAdmin from "./components/Dashboard/MakeAdmin";
import AddDoctor from "./components/Dashboard/AddDoctor";
import Review from "./components/Dashboard/Review";
import ManageAppointment from "./components/Dashboard/ManageAppointment";
import ManageAllService from "./components/Dashboard/ManageAllService";
import Patients from "./components/Dashboard/Patients";
import WelcomePage from "./components/Dashboard/WelcomePage";
import AddService from "./components/Dashboard/AddService";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import Payment from "./components/Dashboard/Payment";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            path="appointment"
            element={
              <PrivateRoute>
                <AppointmentPage />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route index element={<WelcomePage />} />
            <Route
              path="appointments"
              element={
                <PrivateRoute>
                  <DashAppointment />
                </PrivateRoute>
              }
            />
            <Route
              path="makeAdmin"
              element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              }
            />
            <Route
              path="addDoctor"
              element={
                <AdminRoute>
                  <AddDoctor />
                </AdminRoute>
              }
            />
            <Route
              path="addService"
              element={
                <AdminRoute>
                  <AddService />
                </AdminRoute>
              }
            />
            <Route
              path="review"
              element={
                <PrivateRoute>
                  <Review />
                </PrivateRoute>
              }
            />
            <Route
              path="patients"
              element={
                <AdminRoute>
                  <Patients />
                </AdminRoute>
              }
            />
            <Route
              path="manageAppointment"
              element={
                <AdminRoute>
                  <ManageAppointment />
                </AdminRoute>
              }
            />
            <Route
              path="manageAllService"
              element={
                <AdminRoute>
                  <ManageAllService />
                </AdminRoute>
              }
            />
            <Route path="payment/:id" element={<Payment />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
