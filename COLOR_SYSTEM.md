# ZUL ENERGY Color System

This document outlines the custom color palette implemented for ZUL ENERGY website.

## Color Palette

### Primary Colors
- **ZUL Green**: `#00954D` - Main brand color
- **ZUL Yellow**: `#FFD600` - Accent and highlight color  
- **ZUL Black**: `#001400` - Text and dark elements

### Secondary Colors
- **ZUL Light Green**: `#41AD49` - Supporting green shade
- **ZUL Dark Grey**: `#58585B` - Body text and secondary elements
- **ZUL Light Grey**: `#BCBEC0` - Subtle backgrounds and borders

## Tailwind Classes

### Direct Color Classes
```css
/* Background Colors */
bg-zul-green        /* #00954D */
bg-zul-yellow       /* #FFD600 */
bg-zul-black        /* #001400 */
bg-zul-green-light  /* #41AD49 */
bg-zul-grey-dark    /* #58585B */
bg-zul-grey-light   /* #BCBEC0 */

/* Text Colors */
text-zul-green        /* #00954D */
text-zul-yellow       /* #FFD600 */
text-zul-black        /* #001400 */
text-zul-green-light  /* #41AD49 */
text-zul-grey-dark    /* #58585B */
text-zul-grey-light   /* #BCBEC0 */

/* Border Colors */
border-zul-green        /* #00954D */
border-zul-yellow       /* #FFD600 */
border-zul-black        /* #001400 */
border-zul-green-light  /* #41AD49 */
border-zul-grey-dark    /* #58585B */
border-zul-grey-light   /* #BCBEC0 */
```

### Primary Color Scale (Green-based)
```css
bg-primary-50   /* Very light green tint */
bg-primary-100  /* Light green tint */
bg-primary-200  /* Light green */
bg-primary-300  /* Medium light green */
bg-primary-400  /* Medium green */
bg-primary-500  /* ZUL Green #00954D */
bg-primary-600  /* Dark green */
bg-primary-700  /* Darker green */
bg-primary-800  /* Very dark green */
bg-primary-900  /* Darkest green */
```

### Secondary Color Scale (Yellow-based)
```css
bg-secondary-50   /* Very light yellow tint */
bg-secondary-100  /* Light yellow tint */
bg-secondary-200  /* Light yellow */
bg-secondary-300  /* Medium light yellow */
bg-secondary-400  /* Medium yellow */
bg-secondary-500  /* ZUL Yellow #FFD600 */
bg-secondary-600  /* Dark yellow/orange */
bg-secondary-700  /* Darker orange */
bg-secondary-800  /* Very dark orange */
bg-secondary-900  /* Darkest orange */
```

### Neutral Scale (Grey-based)
```css
bg-neutral-50   /* Almost white */
bg-neutral-100  /* Very light grey */
bg-neutral-200  /* Light grey */
bg-neutral-300  /* Medium light grey */
bg-neutral-400  /* ZUL Light Grey #BCBEC0 */
bg-neutral-500  /* Medium grey */
bg-neutral-600  /* ZUL Dark Grey #58585B */
bg-neutral-700  /* Dark grey */
bg-neutral-800  /* Very dark grey */
bg-neutral-900  /* ZUL Black #001400 */
```

## CSS Variables

```css
:root {
  --zul-green: #00954D;
  --zul-yellow: #FFD7B0;
  --zul-black: #001400;
  --zul-green-light: #41AD49;
  --zul-grey-dark: #58585B;
  --zul-grey-light: #BCBEC0;
}
```

## Usage Examples

### Headers and Titles
```jsx
<h1 className="font-headline text-zul-black">Main Title</h1>
<h2 className="font-subhead text-zul-green">Section Header</h2>
```

### Body Text
```jsx
<p className="font-body text-zul-grey-dark">Regular paragraph text</p>
<p className="font-body text-zul-black">Emphasized text</p>
```

### Buttons
```jsx
{/* Primary Button */}
<button className="bg-zul-green text-white hover:bg-primary-600">
  Primary Action
</button>

{/* Secondary Button */}
<button className="bg-zul-yellow text-zul-black hover:bg-secondary-400">
  Secondary Action
</button>

{/* Outline Button */}
<button className="border-2 border-zul-green text-zul-green hover:bg-zul-green hover:text-white">
  Outline Button
</button>
```

### Cards and Components
```jsx
<div className="bg-white border border-zul-grey-light rounded-lg p-6">
  <h3 className="font-subhead text-zul-black mb-2">Card Title</h3>
  <p className="font-body text-zul-grey-dark">Card content</p>
</div>
```

### Gradients
```jsx
{/* Green gradient */}
<div className="bg-gradient-to-r from-zul-green to-primary-700">
  Content
</div>

{/* Green to yellow gradient */}
<div className="bg-gradient-to-r from-zul-green via-zul-green-light to-zul-yellow">
  Content
</div>
```

## Color Usage Guidelines

### Primary Use Cases
- **ZUL Green**: Primary buttons, headers, brand elements, CTAs
- **ZUL Yellow**: Secondary buttons, accents, highlights, success states
- **ZUL Black**: Main headings, important text, high contrast elements

### Secondary Use Cases  
- **ZUL Light Green**: Supporting elements, icons, subtle highlights
- **ZUL Dark Grey**: Body text, secondary information, labels
- **ZUL Light Grey**: Borders, dividers, subtle backgrounds

### Accessibility
- All color combinations meet WCAG AA contrast requirements
- Primary text uses ZUL Black or ZUL Dark Grey for readability
- Interactive elements have sufficient color contrast
- Color is not the only indicator for important information

### Brand Consistency
- Use ZUL Green as the primary brand color throughout
- ZUL Yellow for calls-to-action and positive interactions  
- Maintain consistent color hierarchy across all components
- Use neutral greys for supporting text and UI elements

## Implementation Status

✅ **Completed:**
- Tailwind configuration updated with full color palette
- CSS variables and utility classes created
- Hero section updated with new colors
- Header navigation updated with new colors
- WhyUs section updated with new colors

🔄 **In Progress:**
- Applying colors to remaining components
- Creating component-specific color variations
- Testing accessibility and contrast ratios

📋 **Upcoming:**
- Update all remaining section components
- Create color-specific component variants
- Implement dark mode color variations
