# Profile Card Project

A responsive, accessible profile card component built with semantic HTML5, CSS3, and vanilla JavaScript.

## 📋 Project Overview

This project is a modern profile card that showcases personal information including bio, social links, hobbies, and dislikes. Built following web accessibility standards and best practices for semantic HTML.

## ✨ Features

- **Semantic HTML5**: Proper use of `<article>`, `<header>`, `<section>`, `<nav>`, and `<figure>` elements
- **Fully Responsive**: Optimized layouts for mobile, tablet, and desktop devices
- **Accessible**: ARIA labels, keyboard navigation support, and screen reader friendly
- **Real-time Clock**: Displays current time in milliseconds using `Date.now()`
- **Social Links**: Connected to Twitter, Instagram, GitHub, and LinkedIn
- **Modern Design**: Clean, professional styling with custom CSS

## 🛠️ Technologies Used

- HTML5
- CSS3 (with separate responsive stylesheets)
- Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Roboto)

## 📁 Project Structure

```
project-root/
│
├── index.html              # Main HTML file
├── main.js                 # JavaScript for time display
├── avatar.png              # Profile avatar image
│
└── styles/
    ├── css-reset.css       # CSS reset
    ├── main.css            # Base styles
    └── main-lg.css         # Responsive styles for larger screens
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML/CSS/JavaScript (for modifications)

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

```bash
# If using git
git clone [your-repo-url]
cd profile-card

# Open in browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

## 📝 Customization

### Update Personal Information

Edit `index.html` to customize:

1. **Name**: Change the content in `<h2 data-testid="test-user-name">`
2. **Bio**: Update the paragraph in `<p data-testid="test-user-bio">`
3. **Avatar**: Replace `avatar.png` with your own image
4. **Social Links**: Update the `href` attributes in the social links section
5. **Hobbies/Dislikes**: Modify the list items in respective sections

### Styling

- **Base styles**: Edit `styles/main.css`
- **Responsive design**: Modify `styles/main-lg.css`
- **Colors, fonts, spacing**: Customize CSS variables or values as needed

## 🧪 Testing

The project includes specific `data-testid` attributes for automated testing:

- `test-profile-card` - Main card container
- `test-user-name` - User's name
- `test-user-bio` - Biography paragraph
- `test-user-time` - Timestamp display
- `test-user-avatar` - Profile image
- `test-user-social-links` - Social links container
- `test-user-social-[platform]` - Individual social links
- `test-user-hobbies` - Hobbies section
- `test-user-dislikes` - Dislikes section

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support with visible focus styles
- Alt text on images
- Proper heading hierarchy
- Screen reader friendly content

## 📱 Responsive Design

- **Mobile (< 800px)**: Stacked vertical layout
- **Tablet/Desktop (≥ 800px)**: Avatar on left, content on right
- Flexible layouts that adapt to content changes

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal and educational use.

## 👤 Author

**Fathia Diekola Gbolahan**
- Twitter: [@thia_wip](https://x.com/thia_wip)
- Instagram: [@thia_wip](https://www.instagram.com/thia_wip/)
- GitHub: [@Thia100](https://github.com/Thia100)
- LinkedIn: [Fathia Gbolahan](https://www.linkedin.com/in/fathia-gbolahan)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- HNG Internship for project requirements

---

**Note**: This project was created as part of the HNG Internship program. For more information about HNG, visit [HNG Internship](https://hng.tech/internship).