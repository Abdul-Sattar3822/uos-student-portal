import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { GraduationCap, AlertCircle } from 'lucide-react'

export default function Login() {
  const [rollNo, setRollNo] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loginType, setLoginType] = useState('roll')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (!rollNo.trim() || !password.trim()) {
      setError('Please enter both Roll No / CNIC and Password')
      return
    }
    const success = login(rollNo, password)
    if (success) {
      navigate('/dashboard')
    } else {
      setError('Invalid credentials. For demo, enter any non-empty values.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 flex flex-col">
      {/* Top bar */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
            <GraduationCap className="text-white" size={22} />
          </div>
          <div>
            <h1 className="font-semibold text-slate-800">University of Sindh, Jamshoro</h1>
            <p className="text-xs text-slate-500">Student e-Portal</p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm text-slate-600">
          <a href="#" className="hover:text-primary-600">HOME</a>
          <a href="#" className="hover:text-primary-600 font-medium text-primary-600">LOGIN</a>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6">
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-primary-600 px-6 py-5">
              <h2 className="text-xl font-semibold text-white text-center">LOGIN</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="loginType"
                    checked={loginType === 'roll'}
                    onChange={() => setLoginType('roll')}
                    className="text-primary-600"
                  />
                  Roll No / CNIC
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="loginType"
                    checked={loginType === 'passport'}
                    onChange={() => setLoginType('passport')}
                    className="text-primary-600"
                  />
                  Passport
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Roll No / CNIC <span className="text-red-500">*</span>
                  <span className="text-red-500 text-xs ml-1">(without dashes)</span>
                </label>
                <input
                  type="text"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  placeholder="e.g., 2K23/SWE/42 or 4210112345671"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-3 py-2 rounded-lg">
                  <AlertCircle size={16} />
                  {error}
                </div>
              )}

              <button type="submit" className="w-full btn-primary py-3 text-base">
                LOGIN
              </button>

              <button
                type="button"
                className="w-full text-sm text-slate-500 hover:text-primary-600 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition"
              >
                FORGOT PASSWORD?
              </button>
            </form>
          </div>

          {/* Instructions */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-primary-600 px-6 py-5">
              <h2 className="text-xl font-semibold text-white text-center">Important Notes / Instructions</h2>
            </div>
            <div className="p-6 space-y-4 text-sm text-slate-600">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="font-semibold text-amber-800 mb-1">Educational Demo Only</p>
                <p className="text-amber-700">
                  This is an independent frontend prototype created for a university assignment.
                  It is <strong>not</strong> connected to the official University of Sindh systems.
                </p>
              </div>
              <ul className="space-y-2 list-disc list-inside">
                <li>Enter any non-empty Roll No and Password to access the demo dashboard.</li>
                <li>No real credentials or personal data are stored or transmitted.</li>
                <li>All student information displayed is fictional sample data.</li>
                <li>For official access, visit the real portal at itsc.usindh.edu.pk</li>
              </ul>
              <p className="text-xs text-slate-400 pt-4 border-t">
                © 2026 Educational Frontend Prototype
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
