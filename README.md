## ADVITYA 2026 – Drama on Deck  
**Bollywood Days Cultural Event Website**

---

## 1. Project Overview

### 1.1 Introduction to ADVITYA 2026  
**ADVITYA 2026 – Drama on Deck** is a themed cultural event website created for a college festival. It represents a Bollywood-inspired celebration where students, performers, and audiences come together to experience cinema, drama, music, and dance in a single, immersive digital space.  

The website serves as the primary **digital face** of the event, combining strong visual design with smooth user experience and modern web practices.

### 1.2 Purpose of the Website  
The website is designed to:

- **Promote the ADVITYA 2026 event** with a strong cinematic brand identity.
- **Provide clear and structured information** about the schedule, activities, rules, and contact details.
- **Enable seamless online registration** for participants and attendees.
- **Engage visitors interactively** through animations, thematic visuals, and smooth navigation.

### 1.3 Target Audience  

- **College students** (participants, performers, volunteers).  
- **Faculty coordinators and organizers** who need a central information hub.  
- **External visitors and guests** who want to know more about the event.  
- **Sponsors and partners** evaluating the professional presentation of the event.

### 1.4 Event Theme and Concept – Bollywood Days  
The event theme, **“Bollywood Days”**, is inspired by classic and contemporary Indian cinema:

- **Visual inspiration**: Film reels, clapboards, red carpets, stage lights, and iconic Bollywood color palettes.  
- **Interaction style**: Cinematic transitions, dramatic typography, and hero imagery that feels like a movie poster.  
- **Content tone**: Playful, energetic, and dramatic, reflecting the spirit of Bollywood storytelling.

### 1.5 Short Explanation of “Drama on Deck”  
“**Drama on Deck**” symbolizes:

- A **stage-like digital platform** where performances, acts, and cultural activities “come on deck” (come alive).  
- An **open invitation** for creativity, expression, and theatrical participation.  
- A **curated experience** where the website itself behaves like an opening sequence to a grand movie premiere.

---

## 2. Problem Statement

### 2.1 Why This Website Was Needed  

Before this project:

- Event information was **scattered across posters, WhatsApp groups, and verbal communication**.  
- Students often missed **deadlines, rules, and updates** due to lack of a unified source.  
- There was no **central event branding** or **professional online presence** to represent ADVITYA.

### 2.2 What Issue It Solves  

The website addresses:

- **Event awareness**: A single, visually appealing platform where all details are easily accessible.  
- **Registration friction**: Replaces manual or form-based communication with clear, directed registration flows (e.g., embedded forms/links).  
- **Engagement gap**: Cinematic intro, interactive sections, and smooth navigation increase interest and retention.  
- **Clarity of information**: Organizes all event details (description, rules, coordinators, contacts) in a structured and readable manner.

---

## 3. Objectives

- **User engagement**  
  - Use animations, visuals, and micro-interactions to hold user attention.  
  - Provide a memorable first impression that reflects the energy of the event.

- **Online registration**  
  - Make it easy for users to discover how to participate.  
  - Integrate or link to online registration forms from relevant sections.

- **Information clarity**  
  - Present event descriptions, rules, schedules, and contact details in a clean, categorized format.  
  - Reduce confusion and repetitive queries to organizers.

- **Immersive cinematic experience**  
  - Simulate a **movie-opening experience** with logo reveal and transitions.  
  - Maintain a cohesive Bollywood theme throughout the website.

---

## 4. Features

### 4.1 Cinematic Intro Animation (ADVITYA 2026 Logo Reveal)  

- **Purpose**: Creates a **first-impression “movie opening”** where the ADVITYA 2026 logo appears with cinematic effects.  
- **Implementation (front-end)**:
  - Built using **HTML** structure, **CSS animations/keyframes**, and **JavaScript-controlled timing**.
  - The intro may display:
    - Logo fade-in / zoom-in.
    - Subtle glow, blur, or light streak effects.
    - Tagline appearing after the main logo.
  - A JavaScript timeout or animation end event triggers the transition to the main website.
- **User control**:
  - Includes a **“Skip Intro” button**, enabling users to bypass the animation.
  - On skip, a flag is stored in `localStorage` (see section 9), and the user is taken directly to the main content on future visits.

### 4.2 Hero Section  

- **Purpose**: Acts as the **primary landing section** after the intro.  
- **Content**:
  - Event title: **“ADVITYA 2026 – Drama on Deck”**.
  - Short tagline summarizing the Bollywood Days theme.
  - A strong **call-to-action (CTA)** such as “Register Now” or “Explore Events”.
- **Technical aspects**:
  - Implemented as a full-height (`100vh`) section with background image/video or gradient.
  - Uses **flexbox or CSS grid** for vertical and horizontal centering.
  - Smooth scroll buttons may use `scrollIntoView()` or anchor links.

### 4.3 Event Description Section  

- **Purpose**: Provide a **detailed narrative** about ADVITYA and the Bollywood Days theme.  
- **Content**:
  - Brief description of the festival.
  - Explanation of how “Drama on Deck” fits within Bollywood culture.
  - Key highlights (e.g., drama competitions, dance performances, music, stand-up).  
- **Technical details**:
  - Structured using **semantic HTML tags** like `section`, `h2`, `p`.  
  - Uses CSS typography and spacing for readability.

### 4.4 Interactive Activities Section  

- **Purpose**: Showcase **individual activities/events** in a dynamic way.  
- **Content**:
  - Cards for each activity (e.g., Drama Competition, Bollywood Quiz, Dance Battle, Open Mic).  
  - Each card may contain:
    - Title  
    - Short description  
    - Venue / time  
    - “Know More” or “Register” link
- **Technical details**:
  - Typically implemented using **flexbox or grid cards**.
  - Hover effects with **CSS transitions** (e.g., scale, shadow, glow).
  - Optional modal or expanded section triggered with JavaScript to show detailed rules or prize info.

### 4.5 Poster & Event Details Section  

- **Purpose**: Present **official posters, flyers, and detailed event information**.  
- **Content**:
  - High-quality event posters in image format.  
  - Accompanying details like dates, venues, dress codes, and time slots.  
- **Technical details**:
  - Images optimized and compressed for faster loading.
  - Implemented using responsive image containers.
  - Optional **lightbox effect** (image enlarges on click) using custom JS or a lightweight plugin.

### 4.6 Coordinator Details Section  

- **Purpose**: Make it easy for participants to **reach the right person**.  
- **Content**:
  - Cards or list items with:
    - Coordinator name  
    - Role (Faculty coordinator / Student coordinator)  
    - Contact number / email  
    - Department or club  
- **Technical details**:
  - Semantic markup, e.g., `ul` / `li` or `article` elements.
  - Clickable links for email (`mailto:`) and WhatsApp/phone where applicable.
  - Optional icons using icon fonts or SVGs.

### 4.7 Footer Section  

- **Purpose**: Provide **closing information and utility links**.  
- **Content**:
  - Copyright text (e.g., “© 2026 ADVITYA – Drama on Deck”).  
  - Links to:
    - Social media pages (Instagram, YouTube, etc.).  
    - College website or cultural committee page.  
  - A back-to-top button.
- **Technical details**:
  - Sticky or static footer depending on layout.
  - Back-to-top button uses smooth scrolling logic.

### 4.8 Smooth Scrolling  

- **Purpose**: Enhance user experience when navigating between sections.  
- **Implementation**:
  - Navigation links (`<a href="#section-id">`) bound to a JavaScript function using `scrollIntoView({ behavior: 'smooth' })` or CSS `scroll-behavior: smooth`.
  - Ensures a **gradual transition** instead of abrupt jumps.
- **Effect**:
  - Feels more cinematic and professional, matching the Bollywood theme.

### 4.9 Responsive Design  

- **Purpose**: Ensure the site works well across **mobile, tablet, and desktop**.  
- **Implementation**:
  - CSS **media queries** at key breakpoints (see section 8).  
  - Flexible units (`%`, `vh`, `vw`, `rem`) for font sizes and layout.  
  - Mobile-friendly navigation (e.g., hamburger menu) if implemented.

### 4.10 Skip Intro Logic Using `localStorage`  

- **Goal**: Prevent returning users from seeing the intro animation **every time** they visit.  
- **Technical behavior**:
  - On first visit:
    - Intro animation is shown.
    - If the user either waits for the animation or clicks “Skip”, JavaScript sets a flag in `localStorage`, e.g. `localStorage.setItem('advityaIntroSeen', 'true')`.
  - On next visit:
    - JavaScript checks `localStorage.getItem('advityaIntroSeen')`.
    - If the value is `true`, the intro section is **skipped/hidden**, and the user is taken directly to the hero section.
- **User benefit**:
  - First-time users get the full experience.
  - Returning users enjoy faster access to content.

---

## 5. Technology Stack

- **HTML5**
  - Used for **semantic structure** (`header`, `section`, `footer`).
  - Ensures accessibility and SEO-friendly markup.
- **CSS3**
  - Handles **layout, typography, colors, and animations**.
  - Used for keyframes, transitions, responsive design, and cinematic styling.
- **JavaScript (Vanilla JS)**
  - Manages **intro animation control**, **skip logic with `localStorage`**, **smooth scrolling**, and any interactive UI features (open modals, toggles).
- **(Optional) Libraries**
  - If used, examples might include:
    - **Google Fonts** for typography.
    - A lightweight **icon library** (e.g., Font Awesome or custom SVG set).
  - Libraries are chosen to be **minimal**, focusing on performance and fast loading.

**Why this stack?**  
- Simple enough to **host statically** on any platform (GitHub Pages, Netlify, college server).  
- No heavy frameworks, ensuring **fast load times** and easy maintenance.  
- Ideal for a **front-end focused academic project** where core HTML/CSS/JS skills are demonstrated.

---

## 6. Folder Structure

Example folder structure for the project:

```text
ADVITYA-2026-Drama-on-Deck/
├─ index.html
├─ style.css       
├─ index.js            
│            
├─ assets/
│  ├─ images/
│  │  ├─ logo.png
│  │  ├─ hero-bg.jpg
│  │  ├─ posters/
│  │  │  ├─ poster1.jpg
│  │  │  └─ poster2.jpg
│  │  └─ coordinators/
│  │     ├─ coord1.jpg
│  │     └─ coord2.jpg
│  ├─ icons/
│  │  └─ *.svg
│  └─ fonts/
│     └─ (if self-hosted)
├─ README.md
└─ LICENSE (optional)
```

---

## 7. Installation & Setup Guide

### 7.1 Prerequisites  

- A modern web browser (Chrome, Edge, Firefox, Safari).  
- Optional: A local HTTP server for best experience (e.g., VS Code Live Server, `http-server`, or any static server).

### 7.2 Clone or Download  

If using Git:

```bash
git clone https://github.com/NorthEastClubVITB/Drama-On-Deck
cd ADVITYA-2026-Drama-on-Deck
```

Or download as a ZIP from the repository and extract to a folder.

### 7.3 Running the Project Locally  

**Option 1 – Open directly in browser**

- Double-click `index.html`, or  
- Right-click `index.html` and choose “Open With” → your browser.

**Option 2 – Serve with a local server (recommended)**

- Using VS Code Live Server:
  - Open the folder in VS Code.
  - Right-click `index.html` → **Open with Live Server**.
- Or using Node.js `http-server` (if installed):
  ```bash
  npx http-server .
  ```
  Then open the provided URL (e.g., `http://localhost:8080`) in your browser.

### 7.4 Configuration Steps  

- Update event details directly in `index.html` (titles, dates, venue).  
- Update poster images in `assets/images/posters/`.  
- Update coordinator details in the corresponding section in HTML.  
- If using external registration links, replace placeholder links with actual URLs.

---

## 8. Responsiveness Strategy

### 8.1 Approach  

- **Mobile-first** or **desktop-first**, depending on implementation; a common and recommended approach is:
  - **Mobile-first**:
    - Start with simple single-column layouts for small screens.
    - Gradually enhance layout for larger viewports using media queries.

### 8.2 Example Breakpoints  

Typical CSS breakpoints (may vary depending on actual design):

- **Small devices**: up to 576px  
- **Tablets**: 577px – 768px  
- **Small laptops**: 769px – 1024px  
- **Desktops**: 1025px and above  

Media query examples:

```css
@media (min-width: 576px) { /* tablet styles */ }
@media (min-width: 768px) { /* small laptop styles */ }
@media (min-width: 1024px) { /* desktop styles */ }
```

### 8.3 Testing Methods  

- Manual testing on:
  - Phone browser (Android/iOS).  
  - Desktop browser with **developer tools** → responsive design mode.  
- Checking:
  - Navigation usability.  
  - Readability of text.  
  - Behavior of hero background, cards, and grid layouts.  
  - Animation smoothness on lower-end devices.

---

## 9. Animation Logic

### 9.1 How the Intro Animation Works  

- **Structure**:
  - Intro container (e.g., `#intro-screen`) with logo and text elements.
- **CSS**:
  - Define `@keyframes` for:
    - Fade in / fade out.  
    - Scale or translate transformations.  
    - Opacity and blur transitions.
- **JavaScript**:
  - On page load:
    - Display `#intro-screen`.
    - Listen for `animationend` or use a `setTimeout` based on animation duration.
    - After completion, hide `#intro-screen` and reveal the main content (`#main-content`).

### 9.2 How the Skip Functionality Works  

- **Skip button**:
  - A button (e.g., “Skip Intro”) is visible during the intro.
  - On click:
    - Immediately hide the intro screen.
    - Show the main content.
    - Set a `localStorage` flag:
      ```js
      localStorage.setItem('advityaIntroSeen', 'true');
      ```
- **On subsequent visits**:
  - At initial script execution:
    ```js
    const introSeen = localStorage.getItem('advityaIntroSeen') === 'true';
    if (introSeen) {
      // Directly show main content
      document.getElementById('intro-screen').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    } else {
      // Play intro animation
    }
    ```

### 9.3 Performance Considerations  

- Use **CSS-based animations** instead of heavy JavaScript loops.  
- Avoid large video backgrounds in the intro; prefer **compressed images** or subtle CSS animations.  
- Minimize **repaints and reflows** by animating transform and opacity instead of layout properties (margin, width, height).  
- Ensure the intro duration is reasonable (e.g., 3–5 seconds maximum).

---

## 10. UI/UX Design Decisions

### 10.1 Color Palette and Why  

- **Primary colors**:
  - Rich **gold** / **yellow** shades to represent **glamour and spotlight**.
  - **Deep red / maroon** or **dark blue/black** as background shades to evoke **theatre curtains, night sky, and cinema halls**.
- **Accent colors**:
  - Subtle **neon accents** or **light gradients** for hover states and buttons.
- **Reasoning**:
  - Reflects **Bollywood’s vibrant and dramatic identity**.
  - Maintains sufficient **contrast** for readability and accessibility.

### 10.2 Typography Choices  

- Titles:
  - Bold, cinematic font (e.g., a display or sans-serif font with strong presence).
- Body text:
  - Clean, readable sans-serif font for long paragraphs.
- Reasoning:
  - Strikes a balance between **drama and clarity**.
  - Ensures content remains legible on mobile devices.

### 10.3 Layout Decisions  

- **Hero section**:
  - Full-width, full-height; focuses user attention on event branding.
- **Sectional design**:
  - Clear separation between sections (activities, coordinators, posters) using **spacing and background changes**.
- **Navigation**:
  - Fixed or sticky navbar for easy access to different sections.
- **Card-based layout**:
  - For events and coordinators, cards help **visually group information** and improve scannability.

### 10.4 Cinematic Theme Explanation  

- Use of **gradients, shadows, and lighting effects** to simulate stage lights.  
- Smooth transitions between sections to mimic **camera movement**.  
- Intro animation to give the feel of an **opening credits sequence**.  
- Iconography and images aligned with **film reels, clapperboards, and drama masks**.

---

## 11. Performance Optimization

### 11.1 Lazy Loading  

- Images in the poster and activities sections can use:
  - Native `loading="lazy"` attribute on `<img>` tags.
- Reduces **initial page load time**, especially on mobile data.

### 11.2 Lightweight Animations  

- Prefer **CSS transitions and keyframes** over heavy JS libraries.  
- Limit the number of simultaneously running animations.  
- Avoid unnecessary parallax or 3D effects that can cause lag on low-end devices.

### 11.3 Optimized Assets  

- Compress images using tools (e.g., TinyPNG, Squoosh) before adding them.  
- Use **appropriate resolutions** for backgrounds and posters.  
- Use SVGs for icons where possible to maintain sharpness and reduce size.

---

## 12. Future Enhancements

- **Backend integration**
  - Connect to a backend (e.g., Node.js, Python, or PHP) for **storing registrations** and managing participants dynamically.

- **Admin dashboard**
  - Admin interface to:
    - View registrations.  
    - Manage events (add/edit/update).  
    - Export participant lists.

- **Real-time registration counter**
  - Display **live participant counts** per event using AJAX/WebSocket updates.

- **Payment gateway integration**
  - Enable **online payments** for registration fees using Razorpay/Stripe/UPI integrations.

- **AI-based interaction**
  - Integrate a **chatbot or FAQ assistant** that answers common queries (timings, dress code, registration steps) using simple AI or rule-based logic.

---

## 13. Challenges Faced

- **Design consistency**
  - Maintaining a **coherent visual style** across multiple sections and devices.
  - Balancing the dramatic Bollywood aesthetic with clean academic presentation.

- **Animation timing**
  - Ensuring the **intro animation duration** is impactful but not annoying.
  - Synchronizing animation end events and skip logic without glitches.

- **Responsiveness adjustments**
  - Adapting **typography, grid layouts, and images** for small screens.
  - Handling **nav menu behavior** and hero section visibility across different aspect ratios.

---

## 14. Conclusion

The **ADVITYA 2026 – Drama on Deck** website successfully combines **cinematic design, clear information architecture, and modern front-end techniques** to create an engaging platform for a college cultural event. It improves event visibility, simplifies registration, and reflects the energy of Bollywood Days in a professional, web-ready format.

From this project, key **learning outcomes** include practical experience with **semantic HTML**, **responsive CSS**, **JavaScript for interaction and state management (`localStorage`)**, UI/UX decision-making, and performance-conscious design. This README documents the project in a form suitable for **academic evaluation, portfolio presentation, and GitHub publication**.
