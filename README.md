# Inspection Bubble

A floating snippet manager designed for inspection report writing. Quickly access, search, and copy commonly used text snippets with a single click.

## Features

- **Floating Bubble Button**: Draggable button that stays on top - position it anywhere on your screen
- **15 Pre-configured Categories**: General, Electrical, Plumbing, Structural, Safety, HVAC, Roofing, Exterior, Interior, Appliances, Foundation, Windows/Doors, Recommendations, Defects, Satisfactory
- **50+ Sample Snippets**: Pre-loaded with common inspection report phrases
- **One-Click Copy**: Click any snippet to instantly copy it to your clipboard
- **Search**: Find any snippet across all categories with the search bar
- **Settings Panel**: Add, edit, and delete categories and snippets
- **Import/Export**: Backup and restore your data as JSON files
- **Persistent Storage**: All your customizations are saved in localStorage

## How to Use

1. **Open** the `index.html` file in your web browser
2. **Click** the floating purple bubble button to open the panel
3. **Browse** categories or use the search bar to find snippets
4. **Click** any snippet to copy it to your clipboard
5. **Paste** (Ctrl+V / Cmd+V) into your inspection report

### Managing Snippets

1. Click the **gear icon** to open Settings
2. **Categories tab**: Add new categories with custom names and emoji icons
3. **Snippets tab**: Add new snippets to any category
4. **Import/Export tab**: Backup your data or import from a previous export

### Keyboard Shortcuts

- **Escape**: Close the panel or settings modal

## File Structure

```
inspektion-bubblet-v2/
├── index.html    # Main HTML structure
├── styles.css    # All styling
├── app.js        # Application logic
├── data.js       # Default categories and snippets
└── README.md     # This file
```

## Customization

### Adding Your Own Snippets

1. Open Settings (gear icon)
2. Go to "Snippets" tab
3. Select a category, enter title and text
4. Click "Add Snippet"

### Creating New Categories

1. Open Settings (gear icon)
2. Go to "Categories" tab
3. Enter category name and an emoji icon
4. Click "Add Category"

### Backing Up Your Data

1. Open Settings (gear icon)
2. Go to "Import/Export" tab
3. Click "Export Data" to download a JSON file
4. Store this file safely as a backup

## Browser Compatibility

Works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

Free to use and modify for personal use.
