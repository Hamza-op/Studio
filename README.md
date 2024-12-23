# Portfolio Website

A modern, minimalist portfolio website inspired by Ludwig Favre's design. This website is built using HTML5, CSS3, and vanilla JavaScript, focusing on showcasing visual work in a clean and elegant manner.

## Features

- Responsive grid layout for project showcase
- Modern, minimalist design with dark theme
- Smooth transitions and animations
- Modal view for project details
- Mobile-friendly navigation
- Social media integration
- About and contact sections

## Project Structure

```
portfolio-website/
├── index.html
├── css/
│   ├── main.css
│   └── normalize.css
├── js/
│   └── main.js
├── images/
│   └── projects/
└── README.md
```

## Setup Instructions

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Create the following directory structure:
```bash
mkdir -p css js images/projects
```

3. Add your project images to the `images/projects` directory.

4. Update the project data in `js/main.js`:
- Modify the `workData` array to include your projects
- Update image paths and project details

5. Customize the content:
- Update your name in `index.html`
- Modify the about section text
- Update social media links
- Add your contact information

## Development

To run the website locally, you can use any local server. Here's an example using Python:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000` in your browser.

## Deployment

The website can be deployed to any static hosting service. Here are some recommended options:

1. GitHub Pages
2. Netlify
3. Vercel
4. AWS S3
5. Firebase Hosting

## Browser Support

The website is compatible with modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
To modify the color scheme, edit the CSS variables in `css/main.css`:

```css
:root {
    --background-color: #000000;
    --text-color: #ffffff;
    --accent-color: #333333;
    --spacing-unit: 20px;
}
```

### Grid Layout
To modify the grid layout, adjust the following CSS in `css/main.css`:

```css
.work-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Credits

- Design inspired by Ludwig Favre's portfolio
- Normalize.css by Nicolas Gallagher 