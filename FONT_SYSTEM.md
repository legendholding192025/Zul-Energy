# ZUL ENERGY Font System

This document outlines the custom font system implemented for ZUL ENERGY website.

## Font Hierarchy

### Primary Font: Helvetica
### Secondary Font: Arial

## Font Sizes & Weights

### Helvetica Classes:
- **Headline**: `font-headline` - Helvetica Bold 35pt (~2.92rem)
- **Subhead**: `font-subhead` - Helvetica Bold 25pt (~2.08rem)  
- **Body**: `font-body` - Helvetica Regular 12pt (~1rem)
- **Callout**: `font-callout` - Helvetica Bold Oblique 8pt (~0.67rem)

### Arial Classes (Secondary):
- **Headline**: `font-headline-arial` - Arial Bold 35pt (~2.92rem)
- **Subhead**: `font-subhead-arial` - Arial Bold 25pt (~2.08rem)
- **Body**: `font-body-arial` - Arial Regular 12pt (~1rem)
- **Callout**: `font-callout-arial` - Arial Bold Oblique 8pt (~0.67rem)

## Utility Classes

### Font Family Only:
- `font-primary` - Helvetica with Arial fallback
- `font-secondary` - Arial with Helvetica fallback
- `font-helvetica` - Helvetica with Arial fallback
- `font-arial` - Arial with Helvetica fallback

### Font Weight Utilities:
- `helvetica-bold` - Helvetica Bold
- `helvetica-regular` - Helvetica Regular
- `arial-bold` - Arial Bold
- `arial-regular` - Arial Regular

## Tailwind Integration

### Font Families:
```css
font-primary     /* Helvetica, Arial, sans-serif */
font-secondary   /* Arial, Helvetica, sans-serif */
font-helvetica   /* Helvetica, Arial, sans-serif */
font-arial       /* Arial, Helvetica, sans-serif */
```

### Font Sizes (Tailwind classes):
```css
text-headline-web    /* ~35pt Helvetica Bold */
text-subhead-web     /* ~25pt Helvetica Bold */
text-body-web        /* ~12pt Helvetica Regular */
text-callout-web     /* ~8pt Helvetica Bold Italic */
```

## Usage Examples

### Headlines
```jsx
<h1 className="font-headline">Main Page Title</h1>
<h1 className="font-headline-arial">Main Page Title (Arial)</h1>
```

### Subheadings
```jsx
<h2 className="font-subhead">Section Title</h2>
<h2 className="font-subhead-arial">Section Title (Arial)</h2>
```

### Body Text
```jsx
<p className="font-body">Regular paragraph text</p>
<p className="font-body-arial">Regular paragraph text (Arial)</p>
```

### Callouts
```jsx
<span className="font-callout">Small italic bold text</span>
<span className="font-callout-arial">Small italic bold text (Arial)</span>
```

### Mixing with Tailwind
```jsx
<h1 className="font-headline text-primary-800 mb-4">
  ZUL ENERGY
</h1>
<p className="font-body text-gray-600 max-w-3xl">
  Leading provider of sustainable energy solutions.
</p>
```

## Default Settings

- **Body default**: Helvetica Regular 12pt
- **Font stack**: Helvetica → Arial → system sans-serif
- **Line heights**: Optimized for each font size
- **Responsive**: All sizes work across device breakpoints

## Implementation Notes

1. All existing components have been updated to use the new font system
2. Font sizes are converted from points to rem for web compatibility
3. Fallback fonts ensure consistent display across all systems
4. Classes are available both as component classes and Tailwind utilities
5. Font system is automatically applied to all new components

## Browser Support

- **Helvetica**: Available on macOS/iOS, fallback to Arial on Windows
- **Arial**: Universal system font, available on all platforms
- **Fallback**: System sans-serif as final fallback

## Best Practices

1. Use `font-headline` for main page titles
2. Use `font-subhead` for section headers
3. Use `font-body` for all regular text content
4. Use `font-callout` for small labels, captions, or metadata
5. Prefer Helvetica classes unless specifically requiring Arial
6. Combine with Tailwind color and spacing utilities as needed
