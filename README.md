# Game Portal Website

## Project Structure
```
OR web/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # Game data & rendering
├── images/             # Put your images here
│   ├── background.jpg  # Background image
│   ├── poster.jpg      # Top horizontal poster
│   ├── game1.jpg       # Game card images
│   ├── game2.jpg
│   ├── game3.jpg
│   ├── game4.jpg
│   ├── game5.jpg
│   ├── game6.jpg
│   ├── game7.jpg
│   └── game8.jpg
└── README.md
```

## How to Customize

### 1. Add Your Images
Place your JPG files in the `images/` folder with these names:
- `background.jpg` - Full-screen background (will be lightened to 15% opacity)
- `poster.jpg` - Horizontal poster for the top hero section (16:5 aspect ratio recommended)
- `game1.jpg` through `game8.jpg` - Game card images (16:10 aspect ratio recommended)

### 2. Update Game Data
Edit `script.js` and modify the `gamesData` array:
```javascript
const gamesData = [
    {
        id: 1,
        title: "Your Game Title",
        description: "Your game description here...",
        image: "images/game1.jpg",
        registerLink: "https://forms.gle/YOUR_GOOGLE_FORM_LINK"
    },
    // Add more games as needed
];
```

### 3. Add More Games
Simply add more objects to the `gamesData` array following the same format. The grid will automatically adjust.

### 4. Google Form Links
Replace the placeholder links (`https://forms.gle/your-form-link-X`) with your actual Google Form URLs.

## Features
- ✅ Responsive grid (2-3 columns on desktop, 1 column on mobile)
- ✅ Light background with your custom image
- ✅ Top hero section with horizontal poster
- ✅ Game cards with image, title, description, register button
- ✅ Hover animations on cards
- ✅ Placeholder handling for missing images
- ✅ Clean, modern design with smooth transitions

## Browser Support
Modern browsers (Chrome, Firefox, Safari, Edge) - last 2 versions.