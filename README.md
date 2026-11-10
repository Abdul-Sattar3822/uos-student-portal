# University of Sindh Student Portal – Frontend Prototype

**Independent Educational Project**  
This is a **frontend-only recreation** of the University of Sindh Student Portal (ITSC ePortal), developed as a university assignment.

> ⚠️ **Disclaimer**  
> This is **not** an official University of Sindh application.  
> It is not affiliated with, endorsed by, or connected to the University of Sindh or ITSC.  
> No real student data, credentials, or university systems are used.  
> All student information shown is **fictional mock data**.

## Features

- Modern, professional login page
- Responsive student dashboard with profile card
- Feature cards matching original portal modules
- Paid / Unpaid Challans table
- Attendance overview (demo)
- Exam results notice board (demo)
- **Degree Verification** (mandatory extra feature) with form + request history
- Functional sidebar navigation
- Demo authentication (any non-empty credentials)
- Fully responsive (desktop + mobile)

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Demo Login

Enter **any non-empty** Roll Number and Password on the login page to access the dashboard.

## Project Structure

```
src/
├── components/     # Layout, Sidebar, Header
├── pages/          # Login, Dashboard, Attendance, etc.
├── context/        # AuthContext (demo only)
├── data/           # Mock student & academic data
└── App.jsx
```

## Deployment

This project is ready for deployment on **Vercel**:

1. Push the repository to GitHub
2. Import the project in Vercel
3. Deploy (Vite is auto-detected)

Or use GitHub Pages with a static build.

## License

This project is created for educational purposes only.
