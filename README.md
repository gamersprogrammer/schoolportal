# School Portal Frontend Interface 🎓

A responsive, component-driven frontend interface for a student academic portal, developed as a practical implementation of modern web development methodologies. This project was built to fulfill the practical requirements of the Student Industrial Work Experience Scheme (SIWES) at Maocular Tech Expert.

## 📝 Project Description

The School Portal Frontend Interface is a clean, static web application designed to provide students with a streamlined view of their academic activities. The interface focuses purely on frontend design (no backend logic) to demonstrate modern UI/UX principles, responsive layout structuring, and reusable component architecture. 

Users can navigate through a welcome landing page, a functional-looking login screen, and a comprehensive dashboard that displays enrolled courses, upcoming schedules, attendance metrics, and recent announcements.

## ✨ Features

*   **Landing Page**: A clean, welcoming entry point with clear call-to-action navigation.
*   **Student Login Page**: A structured authentication interface utilizing React state for form handling.
*   **Interactive Dashboard**: A central hub displaying summary cards for courses, assignments, exams, and attendance.
*   **Course Section**: Dynamic grids displaying reusable course cards with mock progress bars and instructor details.
*   **Announcements & Scheduling**: Side-panel widgets displaying upcoming events and school updates.
*   **Responsive Layout**: Fully optimized for mobile, tablet, and desktop screens using Tailwind utility classes.

## 🛠️ Technology Stack

*   **Framework**: React (using Vite for fast build tooling).
*   **Language**: TypeScript for type-safe components, structured props, and reduced runtime errors.
*   **Styling**: Tailwind CSS (v4) for rapid, utility-first styling and fluid responsiveness.
*   **Icons**: Lucide React for consistent, lightweight SVG iconography.

## 📂 Component Architecture

The project follows a modular, component-based folder structure to ensure maintainability and separation of concerns:

```text
src/
├── data/
│   └── mockData.tsx          # Centralized static data (courses, schedules, links)
├── components/
│   ├── Navbar.tsx            # Top navigation with mobile menu toggle and search
│   ├── Sidebar.tsx           # Collapsible side navigation menu
│   └── SummaryCard.tsx       # Reusable dashboard metric card
├── pages/
│   ├── LandingPage.tsx       # Initial welcome view
│   ├── LoginPage.tsx         # User authentication view
│   └── DashboardPage.tsx     # Main application dashboard
├── App.tsx                   # Main layout wrapper and state-based router
├── index.css                 # Global CSS and Tailwind imports
└── main.tsx                  # Application entry point
```

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18 or higher recommended)
*   npm, yarn, or pnpm

### Installation

1. **Clone the repository** (or extract the project folder).
   ```bash
   git clone <repository-url>
   cd school-portal-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **View the application**
   Open your browser and navigate to the local host address provided in the terminal (usually `http://localhost:5173`).

## 👨‍💻 Author

**Ezeonyeasi Valentine**
*   **Institution**: Federal University of Technology, Owerri (FUTO)
*   **Department**: Information Technology
*   **Organization of Attachment**: Maocular Tech Expert (Suite A1, Asher Plaza, Arab Road, Kubwa, Abuja)

## 🙏 Acknowledgments
This project was developed under the supervision and mentorship of the management and staff at **Maocular Tech Expert** during the SIWES program. Special thanks to the FUTO SIWES coordination team and the Department of Information Technology for integrating practical industrial experience into the academic curriculum.