# Rafli Ardana - Portfolio Website

A static, responsive portfolio website for showcasing Rafli Ardana's profile, projects, technical skills, and contact information.

## Live Demo

Visit the portfolio at [https://rafliard.my.id](https://rafliard.my.id).

## Features

- Responsive navigation with a mobile menu and active-section highlighting
- Smooth scrolling between page sections
- Single-column About section focused on the profile description
- Five featured project cards in a three-column desktop grid
- Skills grouped into Frontend, Backend, Design, and Tools categories
- Scroll-triggered reveal animations for content cards
- Contact form submission through Web3Forms with inline status feedback
- External links to GitHub, LinkedIn, project repositories, live demos, and the Framer design portfolio
- Responsive layouts for desktop, tablet, and mobile screens

## Sections

1. **Home** - Introduction, project call-to-action, and social links
2. **About** - Professional profile and background
3. **Projects** - Featured work with descriptions, technology tags, source code, and demo links where available
4. **Skills** - Technologies and tools grouped by category
5. **Contact** - Email, location, and a contact form

## Featured Projects

| Project | Description | Links |
| --- | --- | --- |
| TokoKrenkass | E-commerce web application built with Firebase | [Code](https://github.com/rafliardana/tokokrenkass) · [Live Demo](https://krenkass.web.app/) |
| RetailSIM | Retail simulation and management system | [Code](https://github.com/ALIIF28/simretail4) · [Live Demo](https://simretail4.vercel.app) |
| Produk Online | Online product catalog with Firebase integration | [Live Demo](https://produk-online-50a30.web.app/) |
| Sistem Bouquet Kustom | Custom bouquet ordering and management system for Faedah Shop | [Code](https://github.com/rafliardana/Sistem-Bouquet-Kustom-Faedah-Shop) |
| Sistem Inventory | Inventory system for products, stock levels, and operational records | [Code](https://github.com/crendyyy/sistemInventory) |

## Skills

- **Frontend Development:** HTML5, CSS3, JavaScript, React, PHP, Laravel
- **Backend Development:** MySQL, PostgreSQL, Microsoft SQL Server, Firebase, Supabase, Cloudinary
- **Design:** UI/UX Design, Figma, Framer, Canva, Draw.io / PlantUML
- **Tools & Others:** Git & GitHub, Laragon / XAMPP, SQL Server Management Studio, VS Code, Docker, Agile

## Technologies

- HTML5
- CSS3 with CSS Grid, Flexbox, custom properties, transitions, and animations
- Vanilla JavaScript
- Font Awesome 6.4.0
- Web3Forms

The site uses the operating system's native sans-serif font stack and does not require a package manager or application framework.

## Responsive Layout

The stylesheet defines the following breakpoints:

- `968px` and below: contact and skills sections switch to one column
- `768px` and below: navigation becomes a mobile menu, projects switch to one column, and hero buttons stack vertically
- `480px` and below: spacing and typography are reduced for smaller screens

On larger screens, the Projects section uses three columns and two explicit grid rows.

## Getting Started

### Prerequisites

- A modern web browser
- Optional: Python 3 for serving the site locally

### Run locally

Clone the repository:

```bash
git clone https://github.com/rafliardana/RafliPorto.git
cd RafliPorto
```

Open `index.html` directly in a browser, or start a local static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

No dependency installation or build step is required for local development.

## Project Structure

```text
RafliPorto/
├── .figma/
│   └── make/             # Figma Make lifecycle and deployment configuration
├── CNAME                 # Custom domain configuration
├── index.html            # Page structure and portfolio content
├── style.css             # Layout, visual styles, animations, and responsive rules
├── script.js             # Navigation, scrolling, animations, and form handling
└── README.md             # Project documentation
```

## Customization

- Edit personal details, projects, skills, and links in `index.html`.
- Update colors through the custom properties in the `:root` block of `style.css`.
- Adjust layout and breakpoints in `style.css`.
- Modify navigation, animations, or contact form behavior in `script.js`.
- Replace the Web3Forms access key in `index.html` when using a different form account.
- Update `CNAME` when deploying to another custom domain.

## External Links

- [GitHub](https://github.com/rafliardana)
- [Design Portfolio](https://rafliporto.framer.website/)

## Author

**Rafli Ardana**

- GitHub: [@rafliardana](https://github.com/rafliardana)
- Design portfolio: [rafliporto.framer.website](https://rafliporto.framer.website/)

## Acknowledgments

- [Font Awesome](https://fontawesome.com/) for interface icons
- Design inspiration from modern portfolio websites
