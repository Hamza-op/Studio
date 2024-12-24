# Studio 110 Portfolio Website

A modern, responsive portfolio website showcasing creative work and projects.

## Features

- Clean, minimalist design
- Responsive grid layout for work showcase
- Dark/Light mode toggle
- Loading animation
- About & Contact sections
- Social media integration
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3
- JavaScript
- [Lottie Files](https://lottiefiles.com/) for loading animation
- Normalize.css for consistent styling

## Setup

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - it's a static website

## Structure

```
studio/
├── css/
│   ├── normalize.css
│   ├── main.css
│   ├── animations.css
│   └── loader.css
├── js/
│   ├── main.js
│   ├── animations.js
│   ├── loader.js
│   └── cache-manager.js
├── index.html
├── service-worker.js
└── README.md
```

## Technical Details

### Loading System
- Uses Lottie for high-quality vector animations
- Implements a cache manager for resource preloading
- Service Worker for offline functionality
- Minimum 2-second loading time for smooth transitions

### Animation System
- Hardware-accelerated 3D transforms
- Efficient requestAnimationFrame usage
- Optimized for performance
- Clean animation cleanup

### Caching System
- Service Worker based caching
- Resource preloading
- Offline functionality
- Automatic cache updates

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations
- All animations are optimized for 60fps
- Resources are cached for faster subsequent loads
- Smooth transitions between states
- Efficient memory management
- Hardware acceleration where possible

## Development

### Prerequisites
- Modern web browser
- Local web server for testing

### Running Locally
1. Clone the repository
2. Serve the files using a local web server
3. Open `index.html` in your browser

### Making Changes
- CSS changes: Update relevant files in `/css`
- JS changes: Update relevant files in `/js`
- Loading animation: Modify Lottie animation in `loader.js`

## Best Practices
- Use `will-change` sparingly
- Implement proper cleanup for animations
- Follow modular code structure
- Maintain clean and documented code
- Test across different devices and browsers

## Future Improvements
- Add more interactive elements
- Enhance offline capabilities
- Implement dynamic content loading
- Add more animation variations
- Further performance optimizations

## License
All rights reserved Studio 110