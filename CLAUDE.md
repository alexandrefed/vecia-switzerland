# Vecia Switzerland - Development Guide

## Project Overview
Vecia Switzerland is the Swiss regional website for an AI automation agency. This **bilingual website** (French/English) emphasizes precision, privacy, and performance for the Swiss market.

## Architecture & Technology Stack
- **Framework**: Astro 4.x with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Deployment**: Vercel with edge functions
- **Internationalization**: Two locales (fr-CH, en-CH) with language switching
- **Content Management**: File-based with Astro content collections
- **Forms**: Custom form handling with edge functions
- **Analytics**: Privacy-focused analytics (no cookies by default)

## Design System
```css
/* Color Palette */
--color-primary: #5B8BFF;     /* Mid blue */
--color-secondary: #9B59F6;   /* Purple */
--color-accent: #3BB4FF;      /* Light blue */
--color-gradient: linear-gradient(135deg, #9B59F6, #3BB4FF);

/* Typography */
--font-body: 'Inter', sans-serif;
--font-heading: 'Space Grotesk', sans-serif;
```

## Key Features
1. **Bilingual Support**: Full French/English language switching
2. **Swiss Market Focus**: GDPR compliance, privacy-first approach
3. **Component Architecture**: Reusable components for consistency
4. **SEO Optimized**: Proper hreflang tags for both languages
5. **Performance**: 90+ Lighthouse score target
6. **Accessibility**: WCAG 2.1 AA compliant
7. **Cookie Consent**: Swiss privacy law compliant

## Project Structure
```
vecia-switzerland/
├── src/
│   ├── components/
│   │   ├── common/         # Shared components
│   │   ├── sections/       # Page sections
│   │   └── ui/            # UI elements
│   ├── content/
│   │   ├── blog/          # Blog posts (FR/EN)
│   │   └── case-studies/  # Case studies (FR/EN)
│   ├── i18n/
│   │   ├── fr-CH.json     # French translations
│   │   └── en-CH.json     # English translations
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── fr/            # French pages
│   │   └── en/            # English pages
│   └── styles/
│       └── global.css
├── public/
│   ├── fonts/
│   └── images/
└── astro.config.mjs
```

## Language & Internationalization

### Language Switching
- Automatic browser language detection
- Manual language switcher in header
- URL-based routing (/fr/* and /en/*)
- Persistent language preference in localStorage

### Translation Files
```typescript
// src/i18n/fr-CH.json
{
  "nav": {
    "home": "Accueil",
    "services": "Services",
    "about": "À propos",
    "contact": "Contact"
  },
  "hero": {
    "title": "IA pour la précision suisse",
    "subtitle": "Automatisation intelligente pour entreprises visionnaires"
  }
}

// src/i18n/en-CH.json
{
  "nav": {
    "home": "Home",
    "services": "Services",
    "about": "About",
    "contact": "Contact"
  },
  "hero": {
    "title": "AI for Swiss Precision",
    "subtitle": "Intelligent automation for visionary businesses"
  }
}
```

## Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Commands
```bash
npm run dev          # Start dev server with HMR
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run check        # Type check TypeScript
```

### Environment Variables
```env
# .env.local (not committed)
PUBLIC_SITE_URL=https://vecia.ch
PUBLIC_API_ENDPOINT=https://api.vecia.ch
FORM_SECRET_KEY=your-secret-key
```

## Content Guidelines

### Pricing (CHF)
- **Starter**: CHF 2,999/month
- **Growth**: CHF 7,999/month
- **Scale**: CHF 19,999/month
- Always display prices with "CHF" prefix
- Include VAT information where applicable

### Writing Style
- Professional but approachable
- Emphasize Swiss values: precision, reliability, privacy
- Use active voice
- Keep sentences concise
- Bilingual consistency in tone

## Component Development

### Creating New Components
```typescript
// src/components/MyComponent.astro
---
interface Props {
  title: string;
  locale: 'fr' | 'en';
}

const { title, locale } = Astro.props;
import { t } from '@/utils/i18n';
---

<div class="component">
  <h2>{t(locale, 'component.title')}</h2>
  <p>{title}</p>
</div>

<style>
  .component {
    @apply p-6 rounded-lg bg-white shadow-md;
  }
</style>
```

### Translation Helper
```typescript
// src/utils/i18n.ts
export function t(locale: string, key: string): string {
  const translations = locale === 'fr' ? frCH : enCH;
  return key.split('.').reduce((obj, k) => obj?.[k], translations) || key;
}
```

## Safety Practices

### Security
- Validate all form inputs
- Sanitize user-generated content
- Use environment variables for secrets
- Implement CSRF protection
- Regular dependency updates

### Performance
- Lazy load images
- Optimize font loading
- Minimize JavaScript bundles
- Use Astro's static generation
- Implement proper caching headers

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- ARIA labels where needed
- Color contrast compliance

## Testing Strategy

### Unit Tests
```typescript
// src/components/__tests__/Button.test.ts
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/astro';
import Button from '../Button.astro';

describe('Button', () => {
  it('renders with correct text', async () => {
    const { getByText } = await render(Button, {
      props: { text: 'Click me' }
    });
    expect(getByText('Click me')).toBeTruthy();
  });
});
```

### E2E Testing
- Test language switching flow
- Form submission validation
- Navigation between pages
- Mobile responsiveness
- Cookie consent flow

## Deployment

### Vercel Configuration
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "regions": ["zrh1"]
}
```

### Pre-deployment Checklist
- [ ] Run type checking
- [ ] Test both language versions
- [ ] Verify all translations
- [ ] Check responsive design
- [ ] Validate forms
- [ ] Test error pages
- [ ] Review SEO meta tags
- [ ] Verify analytics setup

## Troubleshooting

### Common Issues
1. **Language switching not working**: Check localStorage and routing
2. **Translations missing**: Verify key paths in JSON files
3. **Build errors**: Clear cache and node_modules
4. **Form submission failing**: Check environment variables

### Debug Mode
```typescript
// Enable debug logging
if (import.meta.env.DEV) {
  console.log('Current locale:', currentLocale);
  console.log('Available translations:', Object.keys(translations));
}
```

## Resources
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- [Swiss Web Accessibility Guidelines](https://www.accessibility.ch)
- [GDPR Compliance for Switzerland](https://www.edoeb.admin.ch)