# Vecia Switzerland - Claude Code Context

## Project Overview
Vecia Switzerland is the Swiss regional website for an AI automation agency. This bilingual website (French/English) emphasizes precision, privacy, and performance for the Swiss market.

## Architecture
- **Framework**: Astro 4.x with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: Vercel with edge functions
- **i18n**: Two locales (fr-CH, en-CH)
- **Content**: File-based with content collections

## Design System
- Primary: #5B8BFF (Mid blue)
- Secondary: #9B59F6 (Purple)
- Accent: #3BB4FF (Light blue)
- Gradient: linear-gradient(135deg, #9B59F6, #3BB4FF)
- Typography: Inter for body, Space Grotesk for headings

## Key Features
1. Multilingual routing with automatic locale detection
2. Component-based architecture for modularity
3. SEO optimized with proper hreflang tags
4. Performance optimized (90+ Lighthouse score target)
5. GDPR compliant with cookie consent
6. Accessible (WCAG 2.1 AA)

## Development Commands
```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format with Prettier
```

## Deployment
- Automatic deployment via GitHub integration
- Environment variables set in Vercel dashboard
- Edge functions for form handling

## Content Structure
- Hero sections with regional taglines
- Service offerings (Data-Ops, Marketing Suite, Decision Intelligence)
- Industry-specific pages
- Case studies and resources
- Pricing tiers (Starter, Growth, Scale)

## Testing Approach
- Component testing with Vitest
- E2E testing for critical paths
- Lighthouse CI for performance
- Manual testing for i18n flows