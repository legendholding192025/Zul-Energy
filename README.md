# ZUL ENERGY - Sustainable Energy Solutions Website

A modern, fully responsive Next.js website for ZUL ENERGY, featuring 10 distinct sections showcasing energy solutions and capabilities.

## Features

- ✅ **Fully Responsive Design** - Optimized for all device sizes
- ✅ **Modern UI/UX** - Clean, professional design with Tailwind CSS
- ✅ **10 Distinct Sections** - Each section is a separate, reusable component
- ✅ **TypeScript Support** - Type-safe development
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML

## Sections

1. **Header** - Navigation and branding
2. **Hero** - Main banner with call-to-action
3. **Why Us** - Key differentiators and benefits
4. **Solutions** - Energy solutions showcase
5. **Capabilities** - Technical capabilities and stats
6. **Certifications** - Industry certifications and standards
7. **Case Studies** - Success stories and projects
8. **Our Clients** - Client testimonials and logos
9. **Contact Us** - Contact form and information
10. **Footer** - Links, newsletter signup, and company info

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── WhyUs.tsx
│   ├── Solutions.tsx
│   ├── Capabilities.tsx
│   ├── Certifications.tsx
│   ├── CaseStudies.tsx
│   ├── OurClients.tsx
│   ├── ContactUs.tsx
│   └── Footer.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

Each section component is designed to be easily customizable:

- **Content**: Replace placeholder text and data in each component
- **Styling**: Modify Tailwind classes or add custom CSS
- **Images**: Replace placeholder divs with actual images
- **Functionality**: Add interactive features and API integrations

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary to ZUL ENERGY.
