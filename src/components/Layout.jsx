import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-50">
          <Outlet />
        </main>
        <footer className="bg-primary-700 text-primary-100 text-xs py-2 px-4 flex justify-between">
          <span>Developer Team</span>
          <span>© 2026, Educational Frontend Prototype – University of Sindh Student Portal</span>
        </footer>
      </div>
    </div>
  )
}
