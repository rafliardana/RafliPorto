import {
  BriefcaseBusiness,
  Code2,
  Database,
  Figma,
  Github,
  GraduationCap,
  Home,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Palette,
  Wrench
} from "lucide-react";

export const DATA = {
  name: "M. Rafli Ardhana",
  firstName: "Rafli",
  initials: "MRA",
  url: "https://rafliard.my.id",
  location: "Batam, Indonesia",
  description:
    "Information Systems student and aspiring software developer bridging business operations, administration, and practical web technology.",
  summary:
    "I am an Information Systems undergraduate with a foundation in programming, database management, and technical problem-solving. My experience in operations, logistics, customer service, and administration helps me translate real business needs into clear, practical digital solutions. I enjoy building useful web applications and thoughtful digital experiences while continuously expanding my technical and design skills.",
  navbar: [
    { href: "#hero", icon: Home, label: "Home" },
    { href: "#about", icon: Code2, label: "About" },
    { href: "#work", icon: BriefcaseBusiness, label: "Work" },
    { href: "#education", icon: GraduationCap, label: "Education" },
    { href: "#skills", icon: Layers3, label: "Skills" },
    { href: "#projects", icon: Palette, label: "Projects" },
    { href: "#contact", icon: Mail, label: "Contact" }
  ],
  contact: {
    email: "rafliardana.bisnis@gmail.com",
    linkedin: "https://www.linkedin.com/in/rafliardhana",
    github: "https://github.com/rafliardana",
    design: "https://rafliporto.framer.website/"
  },
  work: [
    {
      company: "PT. Maitri Gemilang Sukses",
      initials: "MGS",
      location: "Batam, Indonesia",
      title: "Administrative Officer",
      start: "Nov 2025",
      end: "Feb 2026",
      description:
        "Managed daily fleet sales deposit reports, operational administration, licensing documents, biosolar barcode processing, customer service, petty cash, and monthly financial accountability. Also created daily social media content to improve the company's digital visibility."
    },
    {
      company: "PT. Pertamina Patra Niaga (SAR–Kepri)",
      initials: "PPN",
      location: "Batam, Indonesia",
      title: "Facilitator",
      start: "Apr 2024",
      end: "Dec 2024",
      description:
        "Guided customers through registration, verified submitted data for accuracy and completeness, and provided responsive support throughout the process."
    },
    {
      company: "PT. Asia Paperindo Perkasa",
      initials: "APP",
      location: "Batam, Indonesia",
      title: "Logistics Officer Intern",
      start: "Aug 2022",
      end: "Dec 2022",
      description:
        "Organized warehouse item placement, supported packaging and shipment preparation, and maintained an orderly storage system for efficient product retrieval."
    }
  ],
  education: [
    {
      school: "Batam Institute of Technology",
      initials: "ITEBA",
      degree: "Information Systems",
      start: "2024",
      end: "2028"
    },
    {
      school: "SMK Negeri 4 Batam",
      initials: "SMK4",
      degree: "Logistics Engineering",
      start: "2022",
      end: "2024"
    }
  ],
  skillGroups: [
    {
      name: "Application",
      icon: Code2,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "PHP", "Laravel"]
    },
    {
      name: "Data & Services",
      icon: Database,
      skills: [
        "MySQL",
        "PostgreSQL",
        "Microsoft SQL Server",
        "Firebase",
        "Supabase",
        "Cloudinary"
      ]
    },
    {
      name: "Design & Modeling",
      icon: Figma,
      skills: ["UI/UX Design", "Figma", "Framer", "Canva", "Draw.io", "PlantUML"]
    },
    {
      name: "Tools",
      icon: Wrench,
      skills: [
        "Git & GitHub",
        "Laragon",
        "XAMPP",
        "SSMS",
        "VS Code",
        "Docker",
        "Agile",
        "Microsoft Office",
        "IT Support"
      ]
    }
  ],
  projects: [
    {
      title: "TokoKrenkass",
      href: "https://krenkass.web.app/",
      dates: "2026",
      description:
        "A web-based apparel catalog and storefront designed for product discovery, inventory visibility, and a streamlined shopping experience.",
      technologies: ["HTML", "JavaScript", "Firebase", "Cloudinary"],
      image: "/projects/tokokrenkass.svg",
      imageAlt: "Abstract storefront preview for the TokoKrenkass project",
      links: [
        { type: "Website", href: "https://krenkass.web.app/", icon: MapPin },
        {
          type: "Source",
          href: "https://github.com/rafliardana/tokokrenkass",
          icon: Github
        }
      ]
    },
    {
      title: "RetailSIM",
      href: "https://simretail4.vercel.app",
      dates: "2026",
      description:
        "A retail management simulation with role-based workflows for cashiers, warehouse staff, administrators, and business owners.",
      technologies: ["PHP", "MySQL", "JavaScript", "Retail Operations"],
      image: "/projects/retailsim.svg",
      imageAlt: "Abstract point-of-sale dashboard preview for RetailSIM",
      links: [
        { type: "Website", href: "https://simretail4.vercel.app", icon: MapPin },
        {
          type: "Source",
          href: "https://github.com/ALIIF28/Project-System-Pos-Retail1_-",
          icon: Github
        }
      ]
    },
    {
      title: "Produk Online",
      href: "https://produk-online-50a30.web.app/",
      dates: "2026",
      description:
        "A Firebase-backed e-commerce experience with authentication, product management, cart, checkout, and customer workflows.",
      technologies: ["JavaScript", "Firebase", "Authentication", "E-commerce"],
      image: "/projects/produk-online.svg",
      imageAlt: "Abstract e-commerce product grid preview for Produk Online",
      links: [
        {
          type: "Website",
          href: "https://produk-online-50a30.web.app/",
          icon: MapPin
        }
      ]
    },
    {
      title: "Custom Bouquet System",
      href: "https://faedahshop.figma.site/",
      dates: "2026",
      description:
        "A responsive e-commerce and customization experience that helps customers create personalized bouquets for Faedah Shop.",
      technologies: ["TypeScript", "React", "E-commerce", "Responsive UI"],
      image: "/projects/bouquet.svg",
      imageAlt: "Abstract bouquet customizer preview for Faedah Shop",
      links: [
        {
          type: "Website",
          href: "https://faedahshop.figma.site/",
          icon: MapPin
        },
        {
          type: "Source",
          href: "https://github.com/rafliardana/Sistem-Bouquet-Kustom-Faedah-Shop",
          icon: Github
        }
      ]
    },
    {
      title: "Inventory System",
      href: "https://github.com/crendyyy/sistemInventory",
      dates: "2026",
      description:
        "A Laravel inventory application for managing products, monitoring stock levels, and keeping operational records organized.",
      technologies: ["Laravel", "Blade", "PHP", "MySQL"],
      image: "/projects/inventory.svg",
      imageAlt: "Abstract inventory dashboard preview for the Inventory System",
      links: [
        {
          type: "Source",
          href: "https://github.com/crendyyy/sistemInventory",
          icon: Github
        }
      ]
    }
  ],
  social: [
    { name: "GitHub", url: "https://github.com/rafliardana", icon: Github },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/rafliardhana",
      icon: Linkedin
    }
  ]
} as const;
