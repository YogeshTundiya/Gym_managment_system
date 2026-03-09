# Unified Project Requirements

This document combines the Product Requirements Document (PRD) and Technical Requirements Document (TRD) for the Gym Management System (Client Side PWA).

---

# Product Requirements Document (PRD): Gym Management System (Client Side PWA)

## 1. Introduction
This document outlines the product requirements for the client-side Progressive Web Application (PWA) of the Gym Management System. The application is designed to be accessed primarily via a QR code scan at the gym location or via direct URL. It focuses on lead generation, member engagement, class/PT booking, and digital compliance.

## 2. Goals & Objectives
*   **Speed & Accessibility:** Deliver a lightning-fast, premium PWA accessible via QR code.
*   **Lead Generation:** Capture prospective member details efficiently and trigger automated follow-ups.
*   **Self-Service Booking:** Enable members to seamlessly book group classes and personal training sessions.
*   **Digital Compliance:** Streamline the intake process with digital PAR-Q forms, waivers, and contracts.
*   **Premium Experience:** Wow users with a modern, high-end design featuring smooth scrolling (Lenis) and dynamic animations (GSAP).

## 3. Target Audience
*   **Prospective Members (Guests):** Users scanning the QR code to inquire about packages, take a trial, or view the facility.
*   **Active Members:** Current gym members logging in to book sessions, view billing, or contact trainers.
*   **Gym Admin/Staff:** Indirectly involved on the client side, but the primary recipients of lead notifications and booking data.

## 4. Key Features & Modules

### 4.1. Core Application Architecture
*   **Platform:** Progressive Web App (PWA) optimized for mobile devices but fully responsive.
*   **Tech Stack:** Next.js (React framework), Lenis (smooth scroll), GSAP (animations), Tailwind CSS (styling).
*   **Entry Point:** QR Code scan leading to the main landing/splash screen.

### 4.2. Pages & Navigation
The application will consist of the following primary sections accessible from the main page or navigation menu:
*   **Home:** Splash screen, quick actions, high-level overview.
*   **Inquiry:** Lead capture form.
*   **Packages:** Display of membership options.
*   **Book Class:** Group class schedule and booking interface.
*   **Book PT:** Personal trainer selection and session booking.
*   **Trainers:** Profiles, qualifications, and achievements of staff.
*   **Gallery:** Visuals of facility and classes.
*   **Reviews:** Display of Google or internal reviews.
*   **Client Login:** Access to member portal (billing, history).
*   **Compliance:** PAR-Q, Waivers, PT Contracts.
*   **Feedback/Contact:** Suggestion box and contact information (Socials, Phone, Logo).

### 4.3. Detailed Module Requirements

#### A. Lead & Package Modules
*   **Inquiry System:**
    *   Fields: Name, Mobile Number, Preferred Branch, Main Fitness Goal (Dropdown: Weight Loss, Strength, General Fitness).
    *   OTP Verification: Mobile number must be verified via OTP before submission.
    *   Automations:
        *   Trigger a personalized WhatsApp "Welcome" message to the prospect.
        *   Send a "New Lead" push/email notification to the Gym Admin.
*   **Packages & Offers:**
    *   UI: Premium card-based layout.
    *   Pricing Display: Show "Base Price" crossed out next to the "Offer Price" when applicable.
    *   Urgency Engine: Implement countdown timers on active offers (e.g., "Deal ends in 4 hours 12 mins").

#### B. The Booking Engine
*   **Book Group Class:**
    *   Access Control: Only active members can complete a booking.
    *   Schedule View: Display classes by day/time with trainer info.
    *   Capacity Management: Every class has a hard capacity limit (e.g., 20).
    *   Waitlist Logic: If capacity is reached, subsequent booking attempts place the user on a Waitlist.
*   **Book PT Session:**
    *   Trainer Integration: Availability calendar must sync with the trainer's "Off-duty" hours defined in the admin panel.
    *   Token System implementation:
        *   Each PT booking deducts exactly 1 "PT Credit" from the member's account.
        *   Booking is blocked if PT Credits = 0.

#### C. Digital Compliance (Legal Docs)
*   **PAR-Q (Physical Activity Readiness Questionnaire):**
    *   UI: Multi-step, easy-to-read questionnaire form.
    *   Safety Trigger Logic: If the user answers "Yes" to specific critical questions (e.g., "Heart Condition"), the system immediately blocks further registration/joining.
    *   Prompt: Display message: "Please consult a doctor and provide a medical certificate to the front desk before continuing."
*   **Trial Waiver & Release Form:**
    *   Content: Standard liability waiver text.
    *   Digital Signature: Implement a touch-friendly signature pad component.
*   **PT Contract:**
    *   Workflow: After signing the contract agreement (digital signature).
    *   Document Generation: Generate a secure PDF of the signed contract.
    *   Distribution: Automatically email the PDF to the client.
    *   Storage: Save the document securely in the "Member Documents" section linked to the Admin panel.

## 5. Non-Functional Requirements
*   **Performance:** The app must load almost instantly, especially when accessed over cellular networks via QR code.
*   **Aesthetics:** High-end, "wow" factor design matching the provided Figma/image screenshots. Vibrant colors, dark mode support (if specified in design), glassmorphism where appropriate.
*   **Animations:** Extensive use of GSAP for micro-interactions, page transitions, and element reveals to create a dynamic feel.
*   **UX/UI:** Smooth scrolling via Lenis is mandatory to enhance the premium feel.

## 6. Future Phases (Out of Scope for Phase 1)
*   Full Gym Admin Dashboard build-out.
*   Advanced E-commerce features (merchandise sales).
*   Deep integrations with physical access control systems (turnstiles).

---

# Technical Requirements Document (TRD): Gym Management System (Client Side PWA)

## 1. System Overview
This document specifies the technical architecture, technology stack, and implementation details for the client-side Progressive Web Application (PWA) of the Gym Management System. The application must be performant, SEO-friendly, and provide a premium user experience with advanced animations.

## 2. Technology Stack

### 2.1. Core Framework & Libraries
*   **Framework:** Next.js (App Router recommended for optimal performance and SEO).
*   **Language:** TypeScript for type safety and maintainability.
*   **Styling:** Vanilla CSS or CSS Modules (preferred over Tailwind CSS for maximum customizability as per initial requirements, unless Tailwind is explicitly approved). We will leverage custom CSS variables for a robust design system.
*   **Animations:** GSAP (GreenSock Animation Platform) for complex sequence animations, scroll triggers, and micro-interactions.
*   **Smooth Scrolling:** Lenis (Studio Freight) to provide high-end, smooth scroll experiences integrated with GSAP ScrollTrigger.
*   **State Management:** React Context API or Zustand (lightweight, simple).

### 2.2. Infrastructure & Deployment (Proposed)
*   **Hosting:** Vercel (ideal for Next.js) or equivalent serverless environment.
*   **Database (Phase 1 Stub/Integration):** PostgreSQL (via Prisma ORM) or Supabase/Firebase for rapid prototyping of the backend logic (Lead capture, booking state).
*   **Authentication:** NextAuth.js (supporting OTP via SMS provider).

## 3. Architecture & Data Flow

### 3.1. Front-End Architecture
*   **Component Strategy:** Atomic design principles (Atoms, Molecules, Organisms, Templates, Pages).
*   **Routing:** Next.js App Router (`/app` directory).
    *   `/`: Splash Screen -> Home (Hero, features)
    *   `/packages`: Membership options
    *   `/classes`: Group class schedule
    *   `/pt`: Personal trainer booking
    *   `/compliance`: Multi-step form for PAR-Q and Waivers
*   **PWA Setup:**
    *   `manifest.json` generation.
    *   Service Worker implementation for offline caching of critical assets (images, fonts, offline fallback page).

### 3.2. Integration Points (Client-Side Logic)
*   **Lead Generation (Inquiry):**
    *   API Route: `POST /api/leads`
    *   Payload: Name, Mobile, Branch, Goal.
    *   Action: Send OTP.
    *   API Route: `POST /api/leads/verify`
    *   Payload: OTP code.
    *   Action: Trigger DB insert, Trigger WhatsApp API (e.g., Twilio/MessageBird), Trigger Push Notification (e.g., Pusher/Firebase Cloud Messaging) to Admin.
*   **Booking System:**
    *   API Route: `GET /api/classes` (Fetch schedule)
    *   API Route: `POST /api/bookings/class`
        *   Validation: Check active membership token.
        *   Logic: Check capacity. If full, append to Waitlist array.
*   **PT Booking System:**
    *   API Route: `GET /api/trainers/{id}/availability` (Respect admin 'Off-duty' hours).
    *   API Route: `POST /api/bookings/pt`
        *   Validation: Check `pt_credits` > 0. Decrement on success.
*   **Compliance (PAR-Q & Waiver):**
    *   Component: Digital Signature Pad (using a library like `react-signature-canvas`).
    *   API Route: `POST /api/compliance/submit`
        *   Action: Process signature base64 data, generate PDF (using an API service or serverless function with `puppeteer` or `pdf-lib`), email to client (SendGrid/Resend).

## 4. Performance & UX Specifications

### 4.1. Core Web Vitals targets
*   **LCP (Largest Contentful Paint):** < 2.5s
*   **FID (First Input Delay):** < 100ms
*   **CLS (Cumulative Layout Shift):** < 0.1

### 4.2. Animation Strategy (GSAP & Lenis)
*   **Lenis Initialization:** Wrap the layout component in a Lenis provider. Sync `requestAnimationFrame` with GSAP's ticker.
*   **Splash Screen:** High-priority loader ensuring critical CSS and JS are parsed before revealing the landing experience.
*   **Micro-interactions:** Magnetic buttons, hover reveals on package cards, smooth transitions between steps in the compliance forms.
*   **Scroll Animations:** Staggered reveals for trainer profiles, parallax effects on hero images, timeline-based scrubbing for the "Inside the Zone" gallery.

### 4.3. Styling Guidelines
*   **Color Palette:** Derived from the provided UI designs (Deep Greens, Soft Creams, Off-Whites, High-Contrast Text).
*   **Typography:** Modern, legible sans-serif font stack (e.g., Inter or a premium alternative loaded via Next.js Font Optimization).
*   **Responsiveness:** Mobile-first approach. Since the primary entry is a QR code, the mobile view is critical.

## 5. Security Requirements
*   **Input Validation:** Sanitize all inputs on the client (Zod or Yup) and re-validate on the server API routes.
*   **OTP Verification:** Mandatory for lead capture to prevent spam.
*   **CSRF Protection:** Implement CSRF tokens for all state-changing mutations (`POST`, `PUT`, `DELETE`).
*   **Rate Limiting:** Apply rate limiting to critical API endpoints (especially OTP generation and booking submissions) to prevent abuse.

## 6. Implementation Phases (Immediate Next Steps)
1.  Initialize Next.js project with TypeScript.
2.  Set up the Vanilla CSS architecture (variables, resets, utility classes).
3.  Implement Lenis and basic GSAP configuration.
4.  Build foundational UI components (Buttons, Inputs, Cards).
5.  Develop the Home Page (Splash, Hero, Inquiry Form).
6.  Develop the Compliance Flow (Forms, Signature).
7.  Develop the Booking Interfaces (Classes & PT).
