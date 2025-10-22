# Personal Portfolio Project

A responsive, accessible personal portfolio website featuring a profile card, about page, and contact form. Built with semantic HTML5, CSS3, and vanilla JavaScript following web accessibility standards and best practices.

## 📋 Project Overview

This portfolio project consists of three main pages:
1. **Profile Card** - A modern card showcasing personal information, social links, and interests
2. **About Me Page** - A reflective page sharing biography, goals, and personal journey
3. **Contact Form** - A fully validated contact form with real-time error handling

## ✨ Features

### General Features
- **Semantic HTML5**: Proper use of `<article>`, `<header>`, `<section>`, `<nav>`, `<main>`, and `<form>` elements
- **Fully Responsive**: Optimized layouts for mobile, tablet, and desktop devices
- **Accessible**: ARIA labels, keyboard navigation support, and screen reader friendly
- **Modern Design**: Clean, professional styling with custom CSS

### Profile Card Features
- Real-time clock displaying current time in milliseconds using `Date.now()`
- Social media links (Twitter, Instagram, GitHub, LinkedIn)
- Personal hobbies and dislikes sections
- Custom avatar image

### About Me Page Features
- Structured biography section
- Program goals and aspirations
- Areas of low confidence (honest self-reflection)
- Note to future self
- Additional thoughts and reflections

### Contact Form Features
- Real-time form validation with custom error messages
- Email format validation (name@example.com)
- Message length validation (minimum 10 characters)
- Success message display on valid submission
- Clear, accessible error messaging
- Auto-clearing form after successful submission

## 🛠️ Technologies Used

- HTML5
- CSS3 (with responsive design)
- Vanilla JavaScript
- Font Awesome Icons (v7.0.1)
- Google Fonts (Roboto)

## 📁 Project Structure
```
project-root/
│
├── index.html              # Profile card page
├── about.html              # About me page
├── contact.html            # Contact form page
├── avatar.png              # Profile avatar image
│
├── scripts/
│   ├── main.js            # Time display script (profile card)
│   └── contact.js         # Form validation script
│
└── styles/
    ├── css-reset.css      # CSS reset
    ├── main.css           # Profile card base styles
    ├── main-lg.css        # Profile card responsive styles
    ├── about.css          # About page styles
    ├── about-lg.css       # About page responsive styles
    └── contact.css        # Contact form styles
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for modifications)

### Installation

1. Clone or download this repository
2. Open any HTML file in your web browser
3. No build process required!
```bash
# If using git
git clone [your-repo-url]
cd personal-portfolio

# Open in browser
open index.html      # Profile card
open about.html      # About me
open contact.html    # Contact form
```

## 📝 Customization

### Profile Card (index.html)

1. **Name**: Change content in `<h2 data-testid="test-user-name">`
2. **Bio**: Update paragraph in `<p data-testid="test-user-bio">`
3. **Avatar**: Replace `avatar.png` with your image
4. **Social Links**: Update `href` attributes in social links section
5. **Hobbies/Dislikes**: Modify list items in respective sections

### About Me Page (about.html)

1. **Biography**: Edit content in `<section data-testid="test-about-bio">`
2. **Goals**: Update list items in goals section
3. **Confidence Areas**: Modify areas of low confidence
4. **Future Note**: Personalize your note to future self
5. **Extra Thoughts**: Add your own reflections

### Contact Form (contact.html)

1. **Form Styling**: Customize `styles/contact.css`
2. **Validation Messages**: Edit error messages in `scripts/contact.js`
3. **Success Message**: Modify success text in form submission handler
4. **Email Pattern**: Adjust regex in `contact.js` if needed

## 🧪 Testing

### Profile Card Test IDs
- `test-profile-card` - Main card container
- `test-user-name` - User's name
- `test-user-bio` - Biography paragraph
- `test-user-time` - Timestamp display
- `test-user-avatar` - Profile image
- `test-user-social-links` - Social links container
- `test-user-social-[platform]` - Individual social links (twitter, instagram, github, linkedin)
- `test-user-hobbies` - Hobbies section
- `test-user-dislikes` - Dislikes section

### About Page Test IDs
- `test-about-page` - Main container
- `test-about-bio` - Biography section
- `test-about-goals` - Goals section
- `test-about-confidence` - Low confidence areas section
- `test-about-future-note` - Future self note section
- `test-about-extra` - Extra thoughts section

### Contact Form Test IDs
- `test-contact-name` - Full name input
- `test-contact-email` - Email input
- `test-contact-subject` - Subject input
- `test-contact-message` - Message textarea
- `test-contact-submit` - Submit button
- `test-contact-error-name` - Name error message
- `test-contact-error-email` - Email error message
- `test-contact-error-subject` - Subject error message
- `test-contact-error-message` - Message error message
- `test-contact-success` - Success message

## ♿ Accessibility Features

- Semantic HTML structure across all pages
- ARIA labels and roles on interactive elements
- Keyboard navigation support with visible focus states
- All form inputs have associated labels
- Error messages tied to inputs with `aria-describedby`
- `role="alert"` on error and success messages for screen readers
- Alt text on images
- Proper heading hierarchy (h1, h2, h3)
- Screen reader friendly content

## 📱 Responsive Design

- **Mobile (< 800px)**: Stacked vertical layouts
- **Tablet/Desktop (≥ 800px)**: 
  - Profile card: Avatar on left, content on right
  - About page: Centered content with comfortable reading width
  - Contact form: Centered form with optimal input widths
- Flexible layouts that adapt to content changes
- Touch-friendly tap targets on mobile

## 🔧 Form Validation Rules

The contact form implements comprehensive validation:

1. **All fields required** - Name, Email, Subject, Message
2. **Email format** - Must match pattern: `name@example.com`
3. **Message length** - Minimum 10 characters
4. **Real-time validation** - Errors shown on blur (when leaving field)
5. **Inline error messages** - Clear, specific error text for each field
6. **Success feedback** - Confirmation message after valid submission
7. **Auto-reset** - Form clears after successful submission

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

**Fathia Diekola Gbolahan**
- Nigerian Computer Science Student & Frontend Developer
- Twitter: [@thia_wip](https://x.com/thia_wip)
- Instagram: [@thia_wip](https://www.instagram.com/thia_wip/)
- GitHub: [@Thia100](https://github.com/Thia100)
- LinkedIn: [Fathia Gbolahan](https://www.linkedin.com/in/fathia-gbolahan)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for Roboto typography
- HNG Internship for project requirements and learning opportunity

## 🎯 Project Goals

This portfolio was built to:
- Demonstrate proficiency in HTML5, CSS3, and JavaScript
- Showcase understanding of web accessibility standards
- Practice responsive design principles
- Implement client-side form validation
- Create a professional online presence

---

**Note**: This project was created as part of the HNG Internship program. For more information about HNG, visit:
- [HNG Internship](https://hng.tech/internship)
- [Hire HNG Developers](https://hng.tech/hire)