import { Construction } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const titles = {
  '/eportal': 'Eportal Dashboard',
  '/choose-program': 'Choose Program',
  '/virtual-classroom': 'Virtual Class Room',
  '/course-selection': 'Course Selection / Examination Form',
  '/admission': 'Admission',
  '/scholarship': 'Scholarship',
  '/downloads': 'Downloads',
  '/course-evaluation': 'Course Evaluation',
  '/hec-survey': 'HEC Survey Form',
  '/points-locations': 'Points Pick/Drop Locations',
  '/library': 'Koha Library',
  '/hostel': 'Hostel',
  '/profile': 'Update Profile Image',
}

export default function PlaceholderPage() {
  const location = useLocation()
  const title = titles[location.pathname] || 'Page'

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
        <Construction className="text-primary-600" size={28} />
      </div>
      <h1 className="text-2xl font-bold text-slate-800 mb-2">{title}</h1>
      <p className="text-slate-500 max-w-md">
        This section is available in the original portal. In this educational frontend prototype,
        detailed content for this page has not been fully recreated.
      </p>
      <p className="text-xs text-slate-400 mt-4">
        Demo only – Independent student project
      </p>
    </div>
  )
}
