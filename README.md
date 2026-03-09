<div align="center">

# 🏋️‍♂️ JERAI FITZONE — Gym Management System

### A Premium, Production-Grade Gym Management Platform

[![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-E91E63?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![GSAP](https://img.shields.io/badge/GSAP-3.14-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<br/>

> **A beautifully crafted, full-featured gym management system** built with cutting-edge web technologies. Featuring dual dashboards for **Admin** and **Client** roles, immersive animations, and a premium dark-green design language.

<br/>

</div>

---

## ✨ Highlights

| 🎨 **Premium UI/UX** | ⚡ **Blazing Fast** | 🔐 **Role-Based Access** | 📱 **Fully Responsive** |
|:---:|:---:|:---:|:---:|
| Glassmorphism, smooth animations, and a bespoke dark-green design system | Built on Next.js 16 with Turbopack for instant HMR | Separate Admin & Client dashboards with demo credentials | Optimized layouts for desktop, tablet, and mobile |

---

## 🖼️ Screenshots

<details>
<summary><strong>🔐 Portal — Login & Registration</strong></summary>
<br/>

- Animated glassmorphism card with Framer Motion
- **iOS-style pill switcher** for toggling between Sign In / Create Account
- Breathing ambient background orbs
- **One-click demo auto-fill** for Admin & Client credentials

</details>

<details>
<summary><strong>🏠 Landing Page — Home</strong></summary>
<br/>

- Hero section with GSAP scroll-triggered animations
- Facility gallery with hover parallax effects
- Trainer profiles, reviews, and package showcases
- Smooth scrolling powered by Lenis

</details>

<details>
<summary><strong>👨‍💼 Admin Dashboard</strong></summary>
<br/>

- Revenue analytics with interactive Recharts graphs
- Client management & inquiry tracking
- Billing module, QR scanner, and report generation
- Elegant dark-mode sidebar with active-route highlighting

</details>

<details>
<summary><strong>🏃 Client Dashboard</strong></summary>
<br/>

- Personal progress analytics & workout tracking
- Class schedule & booking system
- Membership plan viewer & QR code access
- Settings & profile management

</details>

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/), [GSAP 3.14](https://greensock.com/) |
| **Smooth Scroll** | [Lenis](https://github.com/studio-freight/lenis) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Charts** | [Recharts](https://recharts.org/) |
| **Forms** | [React Signature Canvas](https://www.npmjs.com/package/react-signature-canvas) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |

---

## 📂 Project Structure

```
gym_managment_system/
├── client/                          # Next.js Frontend Application
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── app/
│   │   │   ├── (dashboard)/
│   │   │   │   ├── admin/           # 🛡️ Admin Dashboard
│   │   │   │   │   ├── page.tsx     #   Overview & Analytics
│   │   │   │   │   ├── billing/     #   Billing Management
│   │   │   │   │   ├── clients/     #   Client Directory
│   │   │   │   │   ├── inquiries/   #   Lead & Inquiry Tracking
│   │   │   │   │   ├── reports/     #   Reports & Exports
│   │   │   │   │   ├── scanner/     #   QR Code Scanner
│   │   │   │   │   └── settings/    #   System Settings
│   │   │   │   └── client/          # 🏃 Client Dashboard
│   │   │   │       ├── page.tsx     #   Member Overview
│   │   │   │       ├── analytics/   #   Progress Tracking
│   │   │   │       ├── plan/        #   Membership Plan
│   │   │   │       ├── qr/          #   QR Check-In Code
│   │   │   │       ├── schedule/    #   Class Schedule
│   │   │   │       └── settings/    #   Profile Settings
│   │   │   ├── portal/              # 🔐 Login / Signup Portal
│   │   │   ├── register/            # 📝 Registration & Waivers
│   │   │   ├── page.tsx             # 🏠 Landing Page
│   │   │   ├── not-found.tsx        # 404 Page
│   │   │   ├── globals.css          # Design System & Tokens
│   │   │   └── layout.tsx           # Root Layout
│   │   └── components/
│   │       ├── booking/             # Class scheduling components
│   │       ├── forms/               # Waiver & PAR-Q forms
│   │       ├── providers/           # Theme, Modal, Scroll providers
│   │       ├── sections/            # Landing page sections
│   │       └── ui/                  # Navbar, Footer, NavigationWrapper
│   ├── package.json
│   └── tsconfig.json
├── project_requirements.md          # 📋 Full PRD & Technical Spec
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn / pnpm)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YogeshTundiya/Gym_managment_system.git

# 2. Navigate to the project
cd Gym_managment_system

# 3. Install dependencies
cd client
npm install

# 4. Start the development server
npm run dev
```

The app will be running at **[http://localhost:3000](http://localhost:3000)** 🚀

---

## 🔐 Demo Credentials

The portal page includes **one-click auto-fill buttons** for quick access:

| Role | Email | Password | Dashboard |
|:---:|:---:|:---:|:---:|
| **Admin** | `admin@elite.com` | `demo123` | `/admin` — Full management suite |
| **Client** | `client@elite.com` | `demo123` | `/client` — Member dashboard |

---

## 🎨 Design System

The application uses a carefully curated, premium design language:

```
🟢 Brand Primary    #0D5C46    Deep forest green
🟢 Brand Secondary  #0A4A38    Darker green for hover states
🟢 Brand Accent     #E8F3F0    Light green surface
⚫ Dark Background  #0F1623    Dashboard dark mode base
⚫ Dark Card        #151D2A    Card surfaces in dark mode
⬜ Background       #F8FAFC    Light mode body
⬜ Card Background  #FFFFFF    Clean white cards
```

### Typography
- **Sans-serif:** Inter — Clean and modern
- **Serif:** Playfair Display — Elegant headings

### Animations
- **GSAP** — Scroll-triggered entrance animations, parallax effects
- **Framer Motion** — Page transitions, tab switches, micro-interactions
- **Lenis** — Butter-smooth native scroll feel

---

## 📋 Key Features

### 🏠 Landing Page
- ✅ Hero section with GSAP scroll animations
- ✅ Facility gallery with hover effects
- ✅ Trainer profiles & reviews carousel
- ✅ Membership packages with urgency timers
- ✅ Lead generation section with OTP verification
- ✅ Smooth scrolling (Lenis)

### 🔐 Authentication Portal
- ✅ Animated glassmorphism login card
- ✅ Framer Motion form transitions
- ✅ iOS-style pill tab switcher
- ✅ One-click demo credential auto-fill
- ✅ Form validation with animated error states

### 🛡️ Admin Dashboard
- ✅ Revenue & member analytics (Recharts)
- ✅ Client directory with search & filters
- ✅ Inquiry / Lead management pipeline
- ✅ Billing & payment tracking
- ✅ QR code scanner for check-ins
- ✅ Reports & data exports
- ✅ System settings & configuration

### 🏃 Client Dashboard
- ✅ Personalized performance analytics
- ✅ Class schedule & booking engine
- ✅ Membership plan viewer
- ✅ QR code for front-desk check-in
- ✅ Profile & settings management

### 📝 Registration Flow
- ✅ Multi-step lead generation with phone OTP
- ✅ PAR-Q health questionnaire
- ✅ Digital waiver with signature capture
- ✅ Legal compliance forms

---

## 🧪 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

### Built with ❤️ by [Yogesh Tundiya](https://github.com/YogeshTundiya)

<br/>

**⭐ Star this repo if you found it useful! ⭐**

</div>
