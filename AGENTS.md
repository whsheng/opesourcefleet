# OpenSourceFleet - AI Agent Guide

## Project Overview

OpenSourceFleet is a documentation website and resource directory for open-source fleet management technologies. It is built with [Docusaurus](https://docusaurus.io/) v2.0.1 and serves as an authoritative guide for fleet operators, developers, and technology enthusiasts.

**Live Site**: https://opensourcefleet.com

**Key Purpose**: Catalog and document open-source fleet management software, compatible hardware devices, communication protocols, and industry insights.

## Technology Stack

| Component | Technology | Version |
|-----------|------------|---------|
| Framework | Docusaurus | 2.0.1 |
| Frontend | React | 17.0.2 |
| Language | JavaScript (ES6+) | - |
| Styling | Infima CSS + Custom CSS | - |
| Package Manager | npm | - |
| Node.js | - | 22.x |

## Project Structure

```
opensourcefleet/
├── docs/                          # Documentation content (Markdown)
│   ├── software-hub/              # Software directory
│   │   ├── fleet-management/
│   │   ├── gps-tracking/
│   │   ├── route-optimization/
│   │   └── maintenance/
│   ├── hardware-hub/              # Hardware catalog
│   │   ├── devices/
│   │   └── gateways/
│   ├── protocol-hub/              # Protocol documentation
│   │   ├── standards/
│   │   └── custom/
│   └── insights/                  # Blog and trends
│       ├── trends/
│       └── blog/
├── src/                           # Custom React components and pages
│   ├── components/
│   │   └── HomepageFeatures/      # Homepage feature cards
│   ├── css/
│   │   └── custom.css             # Global CSS overrides
│   └── pages/
│       ├── index.js               # Homepage component
│       └── index.module.css       # Homepage styles
├── static/                        # Static assets
│   └── img/                       # Images and icons
│       ├── logo.png
│       ├── favicon.ico
│       ├── hero-fleet.svg
│       ├── icon-software.svg
│       ├── icon-hardware.svg
│       └── icon-protocol.svg
├── docusaurus.config.js           # Site configuration
├── sidebars.js                    # Navigation sidebar structure
├── babel.config.js                # Babel preset configuration
└── package.json                   # Dependencies and scripts
```

## Build and Development Commands

```bash
# Install dependencies
npm install

# Start development server (hot reload enabled)
# Use this for content editing - no need to build
npm run start
# Site available at http://localhost:3000

# Build for production
npm run build
# Static files generated in `build/` directory

# Serve production build locally
npm run serve

# Clear Docusaurus cache
npm run clear

# Generate translation files (not currently used)
npm run write-translations

# Generate heading IDs
npm run write-heading-ids
```

## Content Organization

The site is organized into 4 core hubs:

### 1. Software Hub (`docs/software-hub/`)
- **Fleet Management Platforms** - Complete solutions (Traccar, OpenFMS)
- **GPS Tracking** - Real-time tracking software
- **Route Optimization** - VRP solvers and routing algorithms
- **Maintenance** - CMMS and preventive maintenance tools

### 2. Hardware Hub (`docs/hardware-hub/`)
- **GPS Devices** - Trackers, OBD-II devices
- **Gateways & Routers** - Cellular, telematics gateways

### 3. Protocol Hub (`docs/protocol-hub/`)
- **Standard Protocols** - GT06, TK103, H02, Meitrack
- **Custom & Proprietary** - Teltonika, CalAmp protocols

### 4. Insights (`docs/insights/`)
- **Trends & Analysis** - Industry reports and landscape analysis
- **Blog** - News, tutorials, community updates

## Content Format Guidelines

### Markdown Frontmatter

All documentation files must include frontmatter at the top:

```markdown
---
sidebar_position: 1
---

# Page Title

Content here...
```

### Content Style

- **Language**: All content in English
- **Tone**: Objective and factual, avoid marketing language
- **Structure**: Use tables for comparisons, lists for features
- **Links**: Include official website and GitHub links
- **Software entries** should include:
  - Website link
  - GitHub repository link
  - Programming language
  - License information
  - Key features list

### Example Software Entry Format

```markdown
### Software Name

Brief description.

- **Website**: [example.com](https://example.com)
- **GitHub**: [user/repo](https://github.com/user/repo)
- **Language**: Go, React
- **License**: Apache 2.0

**Key Features:**
- Feature 1
- Feature 2
```

## Sidebar Configuration

Sidebars are defined in `sidebars.js`. The site uses 4 separate sidebars:

- `softwareHubSidebar` - Software Hub navigation
- `hardwareHubSidebar` - Hardware Hub navigation
- `protocolHubSidebar` - Protocol Hub navigation
- `insightsSidebar` - Insights navigation

When adding new categories or documents, update the corresponding sidebar in `sidebars.js`.

## Site Configuration

Key settings in `docusaurus.config.js`:

- **Site Metadata**: Title, tagline, URL in `config` object
- **Navigation**: Navbar items in `themeConfig.navbar`
- **Footer**: Copyright and links in `themeConfig.footer`
- **SEO**: Meta tags in `themeConfig.metadata`
- **Analytics**: Google Analytics 4 (gtag) configured
- **i18n**: Currently only English (`en`) locale

### Google Analytics
- Tracking ID: `G-548CS1QLJJ`
- Configured via `gtag` plugin

### External Links
- "Get OpenFMS" button links to https://openfms.io

## Styling Guidelines

### CSS Variables

Global styles in `src/css/custom.css`:

```css
/* Primary color palette - green theme */
--ifm-color-primary: #2e8555;
--ifm-color-primary-dark: #29784c;
--ifm-color-primary-darker: #277148;
--ifm-color-primary-darkest: #205d3b;
--ifm-color-primary-light: #33925d;
--ifm-color-primary-lighter: #359962;
--ifm-color-primary-lightest: #3cad6e;
```

### Dark Mode

Docusaurus supports automatic dark mode. Dark theme colors are defined in the `[data-theme='dark']` section of `custom.css`.

## Deployment

### Development Workflow

1. **For content updates**:
   - Use `npm run start` for hot-reload development
   - Edit Markdown files in `docs/`
   - Changes auto-refresh in browser
   - No build step needed for content-only changes

2. **Before committing**:
   - Verify changes render correctly
   - Check for broken links
   - Ensure frontmatter is correct

### Production Deployment

**Manual Deployment**:
```bash
npm run build
# Deploy `build/` folder to static hosting
```

**CI/CD (Recommended)**:
- Configure GitHub Actions to auto-build on push to main
- Build command: `npm run build`
- Deploy `build/` directory to hosting platform

### Environment Requirements

- Node.js 22.x (specified in `engines`)
- npm or yarn
- Modern browser for development

## Common Tasks

### Adding New Software

1. Navigate to appropriate category in `docs/software-hub/`
2. Edit `index.md` or create new `.md` file
3. Follow existing format with frontmatter
4. Update sidebar if creating new page

### Adding New Hardware

1. Go to `docs/hardware-hub/devices/` or `docs/hardware-hub/gateways/`
2. Add device specifications and compatibility notes
3. Add photos to `static/img/` if available

### Adding Protocol Documentation

1. Edit `docs/protocol-hub/standards/index.md` for standard protocols
2. Edit `docs/protocol-hub/custom/index.md` for proprietary protocols
3. Include message format tables and example packets

### Adding Blog Posts

1. Create new `.md` in `docs/insights/blog/`
2. Use date prefix: `2024-01-15-post-title.md`
3. Update `docs/insights/blog/index.md` to list new post

## Testing

Docusaurus does not include automated tests by default. Manual testing checklist:

- [ ] `npm run start` launches without errors
- [ ] All navigation links work
- [ ] Sidebars display correctly
- [ ] Images load properly
- [ ] Dark/light mode toggle works
- [ ] Mobile responsive layout
- [ ] No console errors in browser

## Security Considerations

- No sensitive data should be committed to the repository
- External links use `noopener noreferrer` for security
- Google Analytics is configured with `anonymizeIP: true`
- Site is static HTML - no server-side processing

## Dependencies

Key dependencies (from `package.json`):

```json
{
  "@docusaurus/core": "2.0.1",
  "@docusaurus/preset-classic": "2.0.1",
  "@mdx-js/react": "^1.6.22",
  "clsx": "^1.2.1",
  "prism-react-renderer": "^1.3.5",
  "react": "^17.0.2",
  "react-dom": "^17.0.2"
}
```

## Troubleshooting

### Common Issues

1. **Build fails with Node version error**:
   - Ensure Node.js 22.x is installed
   - Use `nvm` to switch Node versions if needed

2. **Changes not reflecting in browser**:
   - Clear cache: `npm run clear`
   - Restart dev server

3. **Sidebar not showing new page**:
   - Verify page has frontmatter with `sidebar_position`
   - Check `sidebars.js` configuration

4. **Images not loading**:
   - Ensure images are in `static/img/`
   - Reference with `/img/filename.ext` path

## Git Workflow

```bash
# Quick updates (typo fixes, small additions)
git add .
git commit -m "docs: fix typo in software hub"
git push

# Major content additions
git checkout -b content/add-new-software
# ... make changes ...
git add .
git commit -m "docs: add [Software Name] to fleet management"
git push origin content/add-new-software
# Create Pull Request on GitHub
```

## License

MIT License - See LICENSE file for details.
