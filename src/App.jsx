import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Attendance from './pages/Attendance'
import ExamsResults from './pages/ExamsResults'
import DegreeVerification from './pages/DegreeVerification'
import PlaceholderPage from './pages/PlaceholderPage'

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }
  if (!user) return <Navigate to="/login" replace />
  return children
}

function PublicRoute({ children }) {
  const { user, loading } = useAuth()
  if (loading) return null
  if (user) return <Navigate to="/dashboard" replace />
  return children
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="exams-results" element={<ExamsResults />} />
        <Route path="degree-verification" element={<DegreeVerification />} />
        <Route path="eportal" element={<PlaceholderPage />} />
        <Route path="choose-program" element={<PlaceholderPage />} />
        <Route path="virtual-classroom" element={<PlaceholderPage />} />
        <Route path="course-selection" element={<PlaceholderPage />} />
        <Route path="admission" element={<PlaceholderPage />} />
        <Route path="scholarship" element={<PlaceholderPage />} />
        <Route path="downloads" element={<PlaceholderPage />} />
        <Route path="course-evaluation" element={<PlaceholderPage />} />
        <Route path="hec-survey" element={<PlaceholderPage />} />
        <Route path="points-locations" element={<PlaceholderPage />} />
        <Route path="library" element={<PlaceholderPage />} />
        <Route path="hostel" element={<PlaceholderPage />} />
        <Route path="profile" element={<PlaceholderPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}
