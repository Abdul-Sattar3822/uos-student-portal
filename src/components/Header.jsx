import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, Bell, ChevronDown, LogOut, User, Image } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Header({ onMenuClick }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-30 bg-primary-600 text-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-primary-700 rounded-lg lg:hidden"
          >
            <Menu size={22} />
          </button>
          <div className="hidden sm:flex items-center gap-4">
            <Link to="/dashboard" className="font-medium hover:text-primary-100 transition">
              LMS Dashboard
            </Link>
            <Link to="/profile" className="font-medium hover:text-primary-100 transition flex items-center gap-1">
              <Image size={16} />
              Update Profile Image
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="relative p-2 hover:bg-primary-700 rounded-lg transition">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-400 rounded-full"></span>
          </button>

          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 p-1.5 hover:bg-primary-700 rounded-lg transition"
            >
              <div className="w-8 h-8 bg-primary-400 rounded-full flex items-center justify-center text-sm font-semibold">
                {user?.name?.charAt(0) || 'S'}
              </div>
              <span className="hidden sm:block text-sm font-medium max-w-[120px] truncate">
                {user?.name || 'Student'}
              </span>
              <ChevronDown size={16} />
            </button>

            {dropdownOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)} />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-1 z-50 text-slate-700">
                  <Link
                    to="/profile"
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 hover:bg-slate-50 text-sm"
                  >
                    <User size={16} />
                    My Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2.5 hover:bg-slate-50 text-sm w-full text-left text-red-600"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
