import { Link } from 'react-router-dom'
import {
  Home, LayoutDashboard, GraduationCap, MonitorPlay, Clock,
  FileText, ClipboardList, Wallet, Download, Send, MapPin,
  BookOpen, Bed, BadgeCheck
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { featureCards, challans } from '../data/mockData'

const iconMap = {
  Home, LayoutDashboard, GraduationCap, MonitorPlay, Clock,
  FileText, ClipboardList, Wallet, Download, Send, MapPin,
  BookOpen, Bed, BadgeCheck
}

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">LMS Dashboard</h1>
          <p className="text-slate-500 text-sm">Welcome back, {user?.name}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="card overflow-hidden">
            <div className="h-28 bg-gradient-to-r from-primary-600 to-primary-500 relative">
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjMiLz4KPC9zdmc+')]"></div>
            </div>
            <div className="px-5 pb-5 -mt-12 relative">
              <div className="w-24 h-24 mx-auto rounded-full border-4 border-white bg-primary-100 flex items-center justify-center shadow-md">
                <span className="text-3xl font-bold text-primary-700">
                  {user?.name?.charAt(0) || 'S'}
                </span>
              </div>
              <div className="text-center mt-3">
                <h2 className="font-bold text-lg text-slate-800">{user?.name}</h2>
                <p className="text-xs text-slate-500 mt-0.5 flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  {user?.department}
                </p>
                <p className="text-sm font-medium text-primary-600 mt-1">{user?.program}</p>
                <p className="text-xs text-slate-500 mt-0.5">{user?.rollNo}</p>
              </div>
              <Link
                to="/choose-program"
                className="mt-4 block w-full text-center btn-primary text-sm py-2.5"
              >
                Choose Your Program
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="lg:col-span-3">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {featureCards.map((card) => {
              const Icon = iconMap[card.icon] || Home
              return (
                <Link
                  key={card.id}
                  to={card.path}
                  className="card p-4 flex items-start gap-3 group hover:border-primary-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-100 transition">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm text-slate-800 group-hover:text-primary-600 transition truncate">
                      {card.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 truncate">{card.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Paid / Unpaid Challans */}
      <div className="card overflow-hidden">
        <div className="bg-primary-700 px-5 py-3.5">
          <h2 className="text-white font-semibold">Paid / Unpaid Challans</h2>
        </div>
        <div className="p-4">
          <p className="text-sm text-red-600 mb-4 bg-red-50 px-3 py-2 rounded-lg">
            If you have paid hostel challan please wait for 2 working days to get <strong>PAID</strong> status.
            If the fee is not marked as paid, ask the concerned provost to update the fee ledger of your payment date.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-left text-slate-500">
                  <th className="pb-3 pr-4 font-medium">PAYMENT</th>
                  <th className="pb-3 pr-4 font-medium">CHALLAN TITLE</th>
                  <th className="pb-3 pr-4 font-medium">PART</th>
                  <th className="pb-3 pr-4 font-medium">SEMESTER</th>
                  <th className="pb-3 pr-4 font-medium">DUE DATE</th>
                  <th className="pb-3 pr-4 font-medium">DOWNLOAD CHALLAN</th>
                  <th className="pb-3 font-medium">DOWNLOAD ADMISSION FORM</th>
                </tr>
              </thead>
              <tbody>
                {challans.map((c) => (
                  <tr key={c.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 pr-4">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          c.status === 'Paid'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="py-3 pr-4 font-medium text-slate-800">{c.title}</td>
                    <td className="py-3 pr-4 text-slate-600">{c.part}</td>
                    <td className="py-3 pr-4 text-slate-600">{c.semester}</td>
                    <td className="py-3 pr-4 text-slate-600">{c.dueDate}</td>
                    <td className="py-3 pr-4">
                      <button className="text-primary-600 hover:text-primary-800 hover:underline text-sm font-medium">
                        Click here to download
                      </button>
                    </td>
                    <td className="py-3">
                      {c.title.includes('Admission') ? (
                        <button className="text-primary-600 hover:text-primary-800 hover:underline text-sm font-medium">
                          Download Admission Form
                        </button>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
