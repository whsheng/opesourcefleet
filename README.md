# OpenSourceFleet

> The Global Resource Hub for Open Source Fleet Technologies

OpenSourceFleet is a comprehensive documentation website and resource directory for open-source fleet management technologies. Built with [Docusaurus](https://docusaurus.io/), it serves as an authoritative guide for fleet operators, developers, and technology enthusiasts.

🌐 **Live Site**: [https://opensourcefleet.com](https://opensourcefleet.com)

---

## 📚 Website Structure

The site is organized into 4 core hubs:

### 1. Software Hub
A curated directory of open-source fleet management software:
- **Fleet Management Platforms** - Complete solutions like Traccar, OpenFMS
- **GPS Tracking & Telematics** - Real-time tracking software
- **Route Optimization** - VRP solvers and routing algorithms
- **Maintenance Management** - CMMS and preventive maintenance tools

### 2. Hardware Hub
Catalog of compatible hardware devices:
- **GPS Tracking Devices** - Hardwired, OBD-II, and battery-powered trackers
- **Gateways & Routers** - Cellular, telematics, and LoRaWAN gateways
- **Sensors & Accessories** - Fuel sensors, dashcams, temperature sensors

### 3. Protocol Hub
Technical documentation for communication protocols:
- **Standard Protocols** - GT06, TK103, H02, Meitrack
- **Custom & Proprietary** - Teltonika, CalAmp, and custom protocol design
- **Vehicle Communication** - OBD-II, CAN Bus, J1939

### 4. Insights
Industry analysis and community content:
- **Trends & Analysis** - Fleet technology landscape reports
- **Blog** - Latest news, tutorials, and community updates

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/opensourcefleet/opensourcefleet.git
cd opensourcefleet

# Install dependencies
npm install

# Start development server
npm run start
```

The site will be available at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

Static files will be generated in the `build` directory.

### Serve Production Build Locally

```bash
npm run serve
```

---

## 🚀 Deployment Workflow

### Local Development (Content Editing)

**You DON'T need to run `npm run build` for content updates!**

```bash
# 1. Start dev server (hot reload enabled)
npm run start

# 2. Edit markdown files in docs/ folder
# Changes automatically refresh in browser

# 3. Commit and push your changes
git add .
git commit -m "docs: add new software"
git push
```

**During development:**
- ✅ Use `npm run start` - it watches files and auto-refreshes
- ❌ Don't use `npm run build` - it's only for production

### Production Deployment

**Option A: Manual Deployment**

If you're manually deploying to a static host:

```bash
# Build static files
npm run build

# Deploy the build/ folder to your web server
# (e.g., rsync, FTP, or host-specific CLI)
```

**Option B: CI/CD Auto-Deployment (Recommended)**

Configure GitHub Actions or similar CI to auto-build and deploy:

```yaml
# .github/workflows/deploy.yml example
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      # Deploy build/ to your hosting platform
```

**With CI/CD configured:**
- Just push content changes to main branch
- Build and deploy happens automatically
- You never run `npm run build` locally

---

## 📝 Daily Content Updates

### Adding New Software

1. Navigate to the appropriate category in `docs/software-hub/`
2. Create a new `.md` file or edit existing `index.md`
3. Follow the existing format with frontmatter:

```markdown
---
sidebar_position: 5
---

# Software Name

Brief description.

- **Website**: [example.com](https://example.com)
- **GitHub**: [user/repo](https://github.com/user/repo)
- **License**: MIT/Apache/GPL

## Key Features
- Feature 1
- Feature 2
```

### Adding Hardware Information

1. Go to `docs/hardware-hub/devices/` or `docs/hardware-hub/gateways/`
2. Add device specifications, compatibility notes, and reviews
3. Include photos/diagrams in `static/img/` if available

### Adding Protocol Documentation

1. Edit `docs/protocol-hub/standards/index.md` for standard protocols
2. Edit `docs/protocol-hub/custom/index.md` for proprietary protocols
3. Include message format tables and example packets

### Adding Insights/Blog Posts

1. Create new `.md` files in `docs/insights/trends/` or `docs/insights/blog/`
2. Use date prefix for blog posts: `2024-01-15-post-title.md`
3. Update `docs/insights/blog/index.md` to list new posts

---

## 🔄 Content Update Workflow

### Quick Updates (Typo fixes, small additions)

```bash
# Edit files directly
git add .
git commit -m "docs: fix typo in software hub"
git push
```

### Major Content Additions

```bash
# Create a new branch
git checkout -b content/add-new-software

# Make your changes
# ... edit files ...

# Preview changes locally
npm run start

# Commit and push
git add .
git commit -m "docs: add [Software Name] to fleet management section"
git push origin content/add-new-software

# Create Pull Request on GitHub
```

### Content Guidelines

1. **Be Objective**: Present facts, not marketing copy
2. **Include Sources**: Link to official websites and repositories
3. **Keep Updated**: Periodically review and update information
4. **Use English**: All content should be in English for global accessibility
5. **Follow Format**: Maintain consistent structure within each category

---

## 🏗️ Project Structure

```
opensourcefleet/
├── docs/                          # Documentation content
│   ├── software-hub/              # Software directory
│   ├── hardware-hub/              # Hardware catalog
│   ├── protocol-hub/              # Protocol documentation
│   └── insights/                  # Blog and trends
├── src/                           # Custom pages and components
├── static/                        # Static assets (images, files)
├── docusaurus.config.js           # Site configuration
├── sidebars.js                    # Navigation structure
└── package.json                   # Dependencies
```

---

## 🤝 Contributing

We welcome contributions from the community!

### Ways to Contribute

1. **Submit Software/Hardware** - Know a great open-source tool? Add it!
2. **Improve Documentation** - Fix errors, clarify explanations
3. **Share Experience** - Write case studies or implementation guides
4. **Protocol Docs** - Contribute technical protocol information

### Contribution Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run start`
5. Submit a Pull Request

---

## 📋 Maintenance Checklist

### Weekly
- [ ] Check for new software releases
- [ ] Review and respond to issues
- [ ] Check broken links

### Monthly
- [ ] Update software version information
- [ ] Add new hardware to catalog
- [ ] Review and merge community PRs
- [ ] Update trends/analysis content

### Quarterly
- [ ] Comprehensive content audit
- [ ] Update comparison tables
- [ ] Refresh featured articles
- [ ] Review site analytics

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 💬 Community

- **Issues**: Report bugs or request features via GitHub [Issues](https://github.com/whsheng/opesourcefleet/issues)

---

## 🙏 Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/)
- Sponsored by [OpenFMS](https://openfms.io)

---

*Last Updated: February 2026*
