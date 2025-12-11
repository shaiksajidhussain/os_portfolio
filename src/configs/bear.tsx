import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: "i-fa-solid:paw",
    md: [
      {
        id: "about",
        title: "About",
        file: "markdown/about.md",
        icon: "i-material-symbols:person",
        excerpt: "Hi, I am Sajid Hussain. I am a Frontend Developer..."
      },
      {
        id: "skills",
        title: "Skills",
        file: "markdown/skills.md",
        icon: "i-material-symbols:code",
        excerpt: "Here are some of my skills on which I have been working on for the past 2 years..."
      },
      {
        id: "experience",
        title: "Experience",
        file: "markdown/experience.md",
        icon: "i-material-symbols:work",
        excerpt: "My professional experience as a MERN Stack Developer..."
      },
      {
        id: "education",
        title: "Education",
        file: "markdown/education.md",
        icon: "i-material-symbols:school",
        excerpt: "My education has been a journey of self-discovery and growth..."
      },
      {
        id: "contact",
        title: "Contact",
        file: "markdown/contact.md",
        icon: "i-material-symbols:mail",
        excerpt: "Have a project in mind or want to collaborate? I'd love to hear from you!"
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "projects",
        title: "Projects",
        file: "markdown/projects.md",
        icon: "i-material-symbols:folder",
        excerpt: "I have worked on a wide range of projects. From web apps to android apps..."
      },
      {
        id: "bhavani-chit-funds",
        title: "Bhavani Chit Funds",
        file: "markdown/bhavani-chit-funds.md",
        icon: "i-material-symbols:account-balance",
        excerpt: "A chit fund is a rotating savings and credit association system...",
        link: "#"
      },
      {
        id: "inspireleap",
        title: "InspireLeap Portfolio",
        file: "markdown/inspireleap.md",
        icon: "i-material-symbols:rocket-launch",
        excerpt: "Modern, high-performance web application using Next.js and Express.js...",
        link: "#"
      },
      {
        id: "imagifine",
        title: "Imagifine",
        file: "markdown/imagifine.md",
        icon: "i-material-symbols:image",
        excerpt: "A cutting-edge SaaS application that harnesses the power of AI...",
        link: "#"
      },
      {
        id: "milk-diary",
        title: "Milk Diary",
        file: "markdown/milk-diary.md",
        icon: "i-material-symbols:local-drink",
        excerpt: "Advanced Milk Diary Management System for Arokya and Hatsun...",
        link: "#"
      },
      {
        id: "uispark",
        title: "UiSpark",
        file: "markdown/uispark.md",
        icon: "i-material-symbols:spark",
        excerpt: "Ignite Your Web Design with Instant UI Magic! Pre-built components library...",
        link: "#"
      },
      {
        id: "dealsmocktails",
        title: "Dealsmocktails",
        file: "markdown/dealsmocktails.md",
        icon: "i-material-symbols:local-offer",
        excerpt: "Dynamic deals website for Melody Mocktails with real-time updates...",
        link: "#"
      },
      {
        id: "qubicgen-portfolio",
        title: "QubicGen Portfolio",
        file: "markdown/qubicgen-portfolio.md",
        icon: "i-material-symbols:business",
        excerpt: "Service based company website built with React Js, Express Js, MongoDB...",
        link: "#"
      },
      {
        id: "pinkify",
        title: "Pinkify",
        file: "markdown/pinkify.md",
        icon: "i-material-symbols:music-note",
        excerpt: "Customized version of Spotify with a pink theme, ads-free listening...",
        link: "#"
      }
    ]
  },
  {
    id: "blogs",
    title: "Blogs",
    icon: "i-material-symbols:article",
    md: [
      {
        id: "blogs",
        title: "Latest Articles",
        file: "markdown/blogs.md",
        icon: "i-material-symbols:newspaper",
        excerpt: "My latest blog posts and articles..."
      }
    ]
  }
];

export default bear;
