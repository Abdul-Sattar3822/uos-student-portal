import { useState } from 'react'
import { BadgeCheck, Send, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { degreeRequests as initialRequests } from '../data/mockData'

export default function DegreeVerification() {
  const { user } = useAuth()
  const [requests, setRequests] = useState(initialRequests)
  const [form, setForm] = useState({
    fullName: user?.name || '',
    rollNo: user?.rollNo || '',
    program: user?.program || '',
    requestType: 'Degree Verification',
    purpose: '',
    remarks: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Full name is required'
    if (!form.rollNo.trim()) e.rollNo = 'Roll number is required'
    if (!form.purpose.trim()) e.purpose = 'Purpose is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const newRequest = {
      id: `DV-2026-${String(requests.length + 1).padStart(3, '0')}`,
      type: form.requestType,
      submitted: new Date().toLocaleDateString('en-GB').replace(/\//g, '-'),
      status: 'Pending',
      remarks: 'Submitted successfully – awaiting review',
    }
    setRequests([newRequest, ...requests])
    setSubmitted(true)
    setForm({ ...form, purpose: '', remarks: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const statusIcon = (status) => {
    if (status === 'Completed') return <CheckCircle size={16} className="text-green-600" />
    if (status === 'Pending') return <Clock size={16} className="text-amber-600" />
    return <AlertCircle size={16} className="text-slate-500" />
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <BadgeCheck className="text-primary-600" />
          Degree Verification
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Request verification of your degree or transcript (Demo)
        </p>
      </div>

      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg flex items-center gap-2">
          <CheckCircle size={18} />
          Request submitted successfully! You can track it in the history below.
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Student Info */}
        <div className="card p-5">
          <h2 className="font-semibold text-slate-800 mb-4">Student Information</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500">Full Name</span>
              <span className="font-medium">{user?.name}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500">Roll Number</span>
              <span className="font-medium">{user?.rollNo}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500">Program</span>
              <span className="font-medium">{user?.program}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-500">Department</span>
              <span className="font-medium text-right">{user?.department}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-slate-500">Current Year</span>
              <span className="font-medium">{user?.year}</span>
            </div>
          </div>
        </div>

        {/* Request Form */}
        <div className="card p-5">
          <h2 className="font-semibold text-slate-800 mb-4">Verification Request Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Request Type</label>
              <select
                value={form.requestType}
                onChange={(e) => setForm({ ...form, requestType: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm"
              >
                <option>Degree Verification</option>
                <option>Transcript Verification</option>
                <option>Provisional Certificate</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Purpose <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.purpose}
                onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                placeholder="e.g., Job application, Higher studies"
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm ${
                  errors.purpose ? 'border-red-400' : 'border-slate-300'
                }`}
              />
              {errors.purpose && <p className="text-red-500 text-xs mt-1">{errors.purpose}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Additional Remarks</label>
              <textarea
                value={form.remarks}
                onChange={(e) => setForm({ ...form, remarks: e.target.value })}
                rows={3}
                placeholder="Any additional information..."
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none text-sm resize-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <Send size={16} />
              Submit Request
            </button>
          </form>
        </div>
      </div>

      {/* Request History */}
      <div className="card overflow-hidden">
        <div className="bg-primary-700 px-5 py-3.5">
          <h2 className="text-white font-semibold">Request History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-left text-slate-500 bg-slate-50">
                <th className="px-5 py-3 font-medium">Request ID</th>
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Submitted</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="px-5 py-3 font-medium text-primary-600">{r.id}</td>
                  <td className="px-5 py-3">{r.type}</td>
                  <td className="px-5 py-3 text-slate-600">{r.submitted}</td>
                  <td className="px-5 py-3">
                    <span className="inline-flex items-center gap-1.5">
                      {statusIcon(r.status)}
                      <span
                        className={`font-medium ${
                          r.status === 'Completed' ? 'text-green-700' : 'text-amber-700'
                        }`}
                      >
                        {r.status}
                      </span>
                    </span>
                  </td>
                  <td className="px-5 py-3 text-slate-500">{r.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
