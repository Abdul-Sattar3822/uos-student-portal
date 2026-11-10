import { ClipboardList } from 'lucide-react'
import { resultsData } from '../data/mockData'

export default function ExamsResults() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <ClipboardList className="text-primary-600" />
          Exams Result Notice Board
        </h1>
        <p className="text-slate-500 text-sm mt-1">Semester results overview (Demo data)</p>
      </div>

      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-primary-700 text-white text-left">
              <th className="px-5 py-3.5 font-medium">Semester</th>
              <th className="px-5 py-3.5 font-medium">GPA</th>
              <th className="px-5 py-3.5 font-medium">CGPA</th>
              <th className="px-5 py-3.5 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {resultsData.map((r, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="px-5 py-3.5 font-medium">{r.semester}</td>
                <td className="px-5 py-3.5">{r.gpa}</td>
                <td className="px-5 py-3.5 font-semibold text-primary-600">{r.cgpa}</td>
                <td className="px-5 py-3.5">
                  <span className="bg-green-100 text-green-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
