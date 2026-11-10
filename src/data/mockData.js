export const featureCards = [
  {
    id: 'lms',
    title: 'LMS Dashboard',
    description: 'LMS Dashboard',
    icon: 'Home',
    path: '/dashboard',
  },
  {
    id: 'eportal',
    title: 'Eportal Dashboard',
    description: 'ITSC Eportal Dashboard',
    icon: 'LayoutDashboard',
    path: '/eportal',
  },
  {
    id: 'program',
    title: 'Choose Program',
    description: 'Choose your degree program',
    icon: 'GraduationCap',
    path: '/choose-program',
  },
  {
    id: 'classroom',
    title: 'Virtual Class Room',
    description: 'Virtual Class Room',
    icon: 'MonitorPlay',
    path: '/virtual-classroom',
  },
  {
    id: 'attendance',
    title: 'Attendance',
    description: 'Check your attendance',
    icon: 'Clock',
    path: '/attendance',
  },
  {
    id: 'course',
    title: 'Course Selection / Examination Form',
    description: 'Course selection',
    icon: 'FileText',
    path: '/course-selection',
  },
  {
    id: 'results',
    title: 'Exams Result Notice Board',
    description: 'Notice Board For Results',
    icon: 'ClipboardList',
    path: '/exams-results',
  },
  {
    id: 'admission',
    title: 'Admission',
    description: 'Your payment details',
    icon: 'GraduationCap',
    path: '/admission',
  },
  {
    id: 'scholarship',
    title: 'Scholarship',
    description: 'Financial Aid Office',
    icon: 'Wallet',
    path: '/scholarship',
  },
  {
    id: 'downloads',
    title: 'Downloads',
    description: 'Pdfs and Other Documents',
    icon: 'Download',
    path: '/downloads',
  },
  {
    id: 'evaluation',
    title: 'Course Evaluation',
    description: 'Higher Education Commission',
    icon: 'Send',
    path: '/course-evaluation',
  },
  {
    id: 'hec',
    title: 'HEC Survey Form',
    description: 'Higher Education Commission',
    icon: 'Send',
    path: '/hec-survey',
  },
  {
    id: 'points',
    title: 'Points Pick/Drop Locations',
    description: 'Points Pick/Drop Locations',
    icon: 'MapPin',
    path: '/points-locations',
  },
  {
    id: 'library',
    title: 'Koha Library',
    description: 'Koha Library',
    icon: 'BookOpen',
    path: '/library',
  },
  {
    id: 'hostel',
    title: 'Hostel',
    description: 'Form / Paid Fees History',
    icon: 'Bed',
    path: '/hostel',
  },
  {
    id: 'degree',
    title: 'Degree Verification',
    description: 'Request degree verification',
    icon: 'BadgeCheck',
    path: '/degree-verification',
  },
]

export const challans = [
  {
    id: 1,
    status: 'Unpaid',
    title: 'Hostel Challan',
    part: 'FOURTH YEAR',
    semester: '-',
    dueDate: '01-07-2026',
  },
  {
    id: 2,
    status: 'Unpaid',
    title: 'Admission to Next Higher Study Challan',
    part: 'FOURTH YEAR',
    semester: 'EIGHTH SEMESTER',
    dueDate: '10-11-2026',
  },
  {
    id: 3,
    status: 'Paid',
    title: 'Semester Fee Challan',
    part: 'FOURTH YEAR',
    semester: 'SEVENTH SEMESTER',
    dueDate: '15-03-2026',
  },
]

export const attendanceData = [
  { course: 'Software Project Management', present: 28, total: 32, percentage: 87.5 },
  { course: 'Web Engineering', present: 30, total: 32, percentage: 93.8 },
  { course: 'Mobile Application Development', present: 26, total: 30, percentage: 86.7 },
  { course: 'Artificial Intelligence', present: 29, total: 32, percentage: 90.6 },
  { course: 'Final Year Project - II', present: 24, total: 28, percentage: 85.7 },
]

export const resultsData = [
  { semester: '7th Semester', gpa: 3.65, cgpa: 3.42, status: 'Passed' },
  { semester: '6th Semester', gpa: 3.48, cgpa: 3.38, status: 'Passed' },
  { semester: '5th Semester', gpa: 3.52, cgpa: 3.35, status: 'Passed' },
  { semester: '4th Semester', gpa: 3.30, cgpa: 3.28, status: 'Passed' },
]

export const degreeRequests = [
  {
    id: 'DV-2026-001',
    type: 'Degree Verification',
    submitted: '05-11-2026',
    status: 'Pending',
    remarks: 'Under review by Examination Branch',
  },
  {
    id: 'DV-2026-002',
    type: 'Transcript Verification',
    submitted: '20-10-2026',
    status: 'Completed',
    remarks: 'Verified and dispatched',
  },
]

export const navItems = [
  { label: 'LMS Dashboard', path: '/dashboard', icon: 'Home' },
  { label: 'Eportal Dashboard', path: '/eportal', icon: 'LayoutDashboard' },
  { label: 'Choose Program', path: '/choose-program', icon: 'GraduationCap' },
  { label: 'Virtual Class Room', path: '/virtual-classroom', icon: 'MonitorPlay' },
  { label: 'Attendance', path: '/attendance', icon: 'Clock' },
  { label: 'Course Selection / Examination Form', path: '/course-selection', icon: 'FileText' },
  { label: 'Exams Result Notice Board', path: '/exams-results', icon: 'ClipboardList' },
  { label: 'Admission', path: '/admission', icon: 'GraduationCap' },
  { label: 'Scholarship', path: '/scholarship', icon: 'Wallet' },
  { label: 'Downloads', path: '/downloads', icon: 'Download' },
  { label: 'Degree Verification', path: '/degree-verification', icon: 'BadgeCheck' },
]
