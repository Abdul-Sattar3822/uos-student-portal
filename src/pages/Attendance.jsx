import { Clock } from 'lucide-react'
import { attendanceData } from '../data/mockData'

export default function Attendance() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Clock className="text-primary-600" />
          Attendance
        </h1>
        <p className="text-slate-500 text-sm mt-1">Current semester attendance summary (Demo data)</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {attendanceData.map((item, i) => (
          <div key={i} className="card p-5">
            <h3 className="font-semibold text-slate-800 text-sm mb-3">{item.course}</h3>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-bold text-primary-600">{item.percentage}%</p>
                <p className="text-xs text-slate-500 mt-1">
                  {item.present} / {item.total} classes
                </p>
              </div>
              <div className="w-16 h-16 relative">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e2e8f0"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={item.percentage >= 85 ? '#16a34a' : '#eab308'}
                    strokeWidth="3"
                    strokeDasharray={`${item.percentage}, 100`}
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-5">
        <p className="text-sm text-slate-500">
          <strong>Note:</strong> This is demo data for educational purposes only. Actual attendance is managed through the official University of Sindh portal.
        </p>
      </div>
    </div>
  )
}
