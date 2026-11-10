import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

const DEMO_STUDENT = {
  id: '2K23/SWEE/5',
  name: 'Abdul Sattar Abro',
  rollNo: '2K23/SWEE/5',
  program: 'BS (Software Engineering)',
  department: 'SOFTWARE ENGINEERING (FET)',
  faculty: 'Faculty of Engineering & Technology',
  semester: '8th Semester',
  year: 'Fourth Year',
  email: 'abdul.sattar.abro@students.usindh.edu.pk',
  phone: '0300-1234567',
  avatar: null,
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('uos_demo_user')
    if (saved) {
      setUser(JSON.parse(saved))
    }
    setLoading(false)
  }, [])

  const login = (rollNo, password) => {
    if (rollNo.trim() && password.trim()) {
      const student = { ...DEMO_STUDENT, rollNo: rollNo.trim() }
      setUser(student)
      localStorage.setItem('uos_demo_user', JSON.stringify(student))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('uos_demo_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}
