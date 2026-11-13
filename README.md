# Blue Feathers Staffing Solutions LLP

A modern, responsive corporate website developed for **Blue Feathers Staffing Solutions LLP**. The website showcases the company's recruitment services, industry expertise, business approach, and contact information while providing an accessible platform for job seekers and organizations looking for recruitment support.

🔗 **Live Website:** https://blue-feathers-staffing-eight.vercel.app/

🔗 **GitHub Repository:** https://github.com/Anuragp-0407/Blue-Feathers-Staffing

---

## 📌 Project Overview

Blue Feathers Staffing Solutions LLP is a staffing and recruitment company focused on connecting businesses with suitable talent and helping individuals discover meaningful career opportunities.

This website serves as the company's digital presence, allowing visitors to:

- Learn about the company and its founders.
- Explore recruitment services.
- Discover the industries served by the organization.
- Understand the company's recruitment process.
- Find answers to frequently asked questions.
- Contact the company through an online enquiry form.
- Connect with the company through its contact channels.

The website is designed with a clean corporate appearance, responsive layouts, interactive elements, and a consistent navy-blue and cyan visual identity.

---

## ✨ Key Features

### 1. Home Page
- Modern hero section with background imagery.
- Company introduction and overview.
- Founders' introduction section.
- Industries We Serve section.
- Interactive navigation and call-to-action buttons.
- Company footer with navigation links.

### 2. About Us
- Company introduction and background.
- Information about the founders.
- Company vision and approach.
- Professional presentation of the organization's purpose.

### 3. Services
- Overview of recruitment solutions.
- Industry-specific recruitment information.
- Structured recruitment process.
- Why Choose Us section.
- Contact call-to-action.

### 4. Industries We Serve

The website highlights recruitment support across nine industries:

1. NBFC
2. Banking
3. Insurance
4. Finance
5. Asset Management
6. Broking
7. BPO
8. Construction
9. Real Estate

Each industry includes a dedicated icon and descriptive information.

### 5. FAQ
- Frequently asked questions.
- Information about recruitment services.
- Guidance for job seekers and employers.

### 6. Contact Us
- Company contact information.
- Email and phone contact links.
- LinkedIn profile link.
- Online contact form.
- Job Seeker and Employer enquiry options.
- Automatic enquiry-type selection.
- Form submission through Web3Forms.
- Submission loading, success, and error states.
- Success confirmation popup.

### 7. Responsive Design
- Desktop, tablet, and mobile-friendly layouts.
- Responsive navigation menu.
- Adaptive content grids.
- Interactive hover effects and animations.
- Consistent styling across pages.

---

## 🛠️ Technologies Used

The project is developed using the following technologies:

| Technology | Purpose |
|---|---|
| React.js | Frontend development |
| Vite | Development server and build tool |
| JavaScript | Application functionality |
| HTML5 | Website structure |
| CSS3 | Styling, animations, and responsive layouts |
| React Router DOM | Client-side navigation |
| Lucide React | Icons and visual elements |
| Web3Forms | Contact form submission |
| Git & GitHub | Version control and source code management |
| Vercel | Website deployment and hosting |

---

## 📂 Project Structure

```text
Blue-Feathers-Staffing/
│
├── public/
│   ├── assets/
│   │   ├── blue-feathers-logo.png
│   │   └── founders.jpg
│   │
│   └── ...
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── App.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   ├── ScrollToTop.jsx
│   │
│   ├── styles.css
│   ├── Services.css
│   ├── Contact.css
│   └── ...
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

*Note: This is a representative structure. Additional assets and CSS files may exist in the project.*

---

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git

### Step 1: Clone the Repository

```bash
git clone https://github.com/Anuragp-0407/Blue-Feathers-Staffing.git
```

### Step 2: Navigate to the Project Directory

```bash
cd Blue-Feathers-Staffing
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Configure Environment Variables

Create a `.env` file in the project root directory.

Add your Web3Forms access key:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Replace `your_web3forms_access_key` with your actual Web3Forms access key.

**Important:**
- Do not commit your `.env` file to GitHub.
- Make sure `.env` is included in `.gitignore`.
- Vite environment variables prefixed with `VITE_` are exposed in the frontend build. Do not store private server-side credentials in them.

### Step 5: Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

To generate an optimized production build, run:

```bash
npm run build
```

The generated production files will be available in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 📧 Contact Form Integration

The website uses **Web3Forms** to handle contact form submissions without requiring a custom backend.

### How It Works

1. A visitor fills out the contact form.
2. The form collects the visitor's name, email, phone number, subject, and message.
3. React handles the form submission.
4. The form data is sent to the Web3Forms API.
5. The visitor receives a success or error message based on the submission response.

API endpoint:

```text
https://api.web3forms.com/submit
```

Official Website:

https://web3forms.com/

---

## 🚀 Deployment

The website is deployed using **Vercel**.

### Deployment Steps

1. Push the project source code to GitHub.
2. Sign in to Vercel using your GitHub account.
3. Import the `Blue-Feathers-Staffing` repository.
4. Configure the project settings.

Recommended build configuration:

| Setting | Value |
|---|---|
| Framework Preset | Vite |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

5. Add the environment variable:

```text
VITE_WEB3FORMS_ACCESS_KEY
```

6. Deploy the project.

### React Router Configuration

For direct access and page refreshes on routes such as `/about`, `/services`, `/faq`, and `/contact`, configure the following `vercel.json` file in the project root:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Vercel automatically creates new deployments when changes are pushed to the connected GitHub repository.

---

## 🔐 Security Considerations

The project follows basic frontend security practices:

- Environment files are excluded from Git tracking.
- External links opening in new tabs use `rel="noopener noreferrer"`.
- Contact form fields use appropriate HTML input types and required-field validation.
- HTTPS is provided through the hosting platform.
- Dependencies should be reviewed and updated regularly.

The Web3Forms access key is used in client-side code and should not be treated as a private secret.

---

## 🔄 Future Enhancements

Potential improvements for future versions include:

- Dedicated candidate registration and profile management.
- Online job listings and application submissions.
- Resume and CV upload functionality.
- Employer enquiry management dashboard.
- Recruitment application tracking.
- Admin panel for managing website content.
- Search engine optimization improvements.
- Website analytics and performance monitoring.

These features may require backend services, database integration, and additional security controls.

---

## 📞 Contact Information

**Blue Feathers Staffing Solutions LLP**

- Email: bluefeatherstaffing@gmail.com
- Phone: +91 82340 97668
- Phone: +91 91310 76100

For recruitment enquiries, business partnerships, and career-related questions, visitors can contact the organization through the website's Contact Us page.

---

## 📄 License

This project was developed for Blue Feather Staffing Solutions LLP.

The website's source code and design are intended for this project. Reuse or redistribution should be undertaken only with appropriate authorization.

---

**Developed with React.js and Vite.**

*Connecting People. Creating Opportunities. Building Possibilities.*
