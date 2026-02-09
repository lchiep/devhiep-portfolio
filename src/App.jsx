import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Admin from "./pages/Admin"
import Login from "./pages/Login"

import ProtectedRoute from "./components/ProtectedRoute"
import AdminProjects from "./components/Admin/AdminProjects" // <-- QUAN TRỌNG

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Admin dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* Admin Projects CRUD */}
        <Route
          path="/admin/projects"
          element={
            <ProtectedRoute>
              <AdminProjects />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
