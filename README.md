# Home Services Booking Platform (Frontend)

This is a **React + TypeScript** frontend application for a Home Services Booking Platform.  
It demonstrates clean architecture, state management readiness, multi-step booking flow, and responsive UI using Tailwind CSS.

---

## 🛠 Technology Stack

- **React 18** (latest)
- **TypeScript**
- **React Router v6** (routing)
- **React Hook Form** (form handling & validation)
- **Tailwind CSS v4** (styling)
- **Context API** (for future state management)
- **Vite** (fast development build tool)
- **Zod (optional)** for schema validation

---

## 📂 Folder Structure

```txt
src/
├── App.tsx                # Main app with routes
├── main.tsx               # React entry point
├── pages/                 # All pages
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Booking.tsx
│   └── Contact.tsx
├── components/            # Reusable components
│   └── Navbar.tsx
└── index.css              # Tailwind CSS
