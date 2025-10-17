# King's Genomics Bioinformatics web-landing page
A modern, terminal-themed portfolio website for King's Genomics Bioinformatics team, built with Astro and Tailwind CSS.

## Credits
This portfolio is based on the original structure from [RyanFitzgerald's devportfolio](https://github.com/RyanFitzgerald/devportfolio/tree/master), adapted and customized for bioinformatics research showcase.

## Built With

- **[Astro](https://astro.build/)** - Static site generator for modern web apps
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tabler Icons](https://tabler.io/icons)** - Free and open source icons
- **TypeScript** - For type-safe configuration

## Getting Started
## Configuration

The template is designed to be easily customizable through the `src/config.ts` file. This single file controls all content and sections of the portfolio.

### Configuration Structure

#### Services
The services section supports nested sub-services with detailed information, to add or remove, you just edit the following block:

```typescript
services: [
  {
    name: "Nanopore",
    description: "Comprehensive analysis of long-read sequencing data using Oxford Nanopore Technologies",
    skills: ["Direct RNA", "Long-read", "Adaptive", "cDNA"],
    subServices: [
      {
        name: "Direct RNA",
        description: "Direct RNA sequencing for methylation pattern analysis",
        link: "#",
      },
      {
        name: "Human Variation Analysis",
        description: "Detection of SNPs, SVs, CNVs and methylation patterns",
        link: "#",
      }
    ]
  }
]
```

#### Recent Projects
To add/remove a project just replicate the structure inside the `{}`. Example below:

```typescript
recent: [
  {
    Study: "PRADA",
    Group: "Led by Johan Zvrskovec from Translational Neuropsychiatry Group",
    dateRange: "Current",
    Support: [
      "Supporting setup of adaptive sequencing pipeline",
      "Custom tools for matching CPIC guidelines for clinicians"
    ]
  }
]
```

#### People/Team
To add/remove a person just replicate the structure inside the `{}`. Example below:

```typescript
people: [
  {
    name: "Sang Hyuck Lee",
    title: "Lead Bioinformatician",
    profileUrl: "https://www.kcl.ac.uk/people/sang-hyuck-lee",
    image: "https://www.kcl.ac.uk/image.png",
    description: "Brief bio and research interests"
  }
]
```

### Hiding Sections

If you want to hide any section, simply remove or set it to an empty array in the config:

```typescript
services: []  // This will hide the Services section
recent: []    // This will hide Recent Projects section
people: []    // This will hide People section
```

## Project Structure

```
kgb-portfolio/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          # Astro components
│   │   ├── About.astro      # About section with skills
│   │   ├── Services.astro   # Services with modal pop-ups
│   │   ├── Recent.astro     # Recent projects timeline
│   │   ├── Footer.astro     # Site footer with social links
│   │   ├── Header.astro     # Sticky navigation header
│   │   ├── Hero.astro       # Hero section
│   │   └── People.astro     # Team members showcase
│   ├── pages/
│   │   └── index.astro      # Main page layout
│   ├── styles/
│   │   └── global.css       # Global styles and variables
│   └── config.ts            # Site configuration ⭐
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## License
This project is MIT licensed. See `LICENSE` for details.
