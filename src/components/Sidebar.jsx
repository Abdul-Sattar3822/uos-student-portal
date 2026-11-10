import { NavLink } from 'react-router-dom'
import {
  Home, LayoutDashboard, GraduationCap, MonitorPlay, Clock,
  FileText, ClipboardList, Wallet, Download, BadgeCheck, X
} from 'lucide-react'
import { navItems } from '../data/mockData'

const iconMap = {
  Home, LayoutDashboard, GraduationCap, MonitorPlay, Clock,
  FileText, ClipboardList, Wallet, Download, BadgeCheck
}

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-full w-64 bg-primary-700 text-white
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0 lg:static lg:z-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-primary-600">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary-700 font-bold text-sm">UoS</span>
            </div>
            <div>
              <p className="font-semibold text-sm leading-tight">University of Sindh</p>
              <p className="text-xs text-primary-200">Student Portal</p>
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden p-1 hover:bg-primary-600 rounded">
            <X size={20} />
          </button>
        </div>

        <nav className="p-3 space-y-1 overflow-y-auto h-[calc(100%-80px)]">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon] || Home
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
              >
                <Icon size={18} />
                <span className="text-sm">{item.label}</span>
              </NavLink>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
