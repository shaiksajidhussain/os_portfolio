import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, I am <span className="text-yellow-200 font-bold">Sajid Hussain</span>
            </div>
        
            <div className="mt-3">
              I am a <span className="text-yellow-200 font-bold">Frontend Developer</span>
            </div>
            <div className="mt-3">
              I am a motivated and versatile individual, always eager to take on new challenges. With
              a passion for learning I am dedicated to delivering high-quality results. With a
              positive attitude and a growth mindset, I am ready to make a meaningful contribution
              and achieve great things.
            </div>
          </div>
        )
      },
      {
        id: "about-skills",
        title: "skills.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="mb-3">Here are some of my skills:</div>
            <div className="mb-2">
              <span className="text-purple-300 font-bold">Frontend:</span> HTML, CSS, Tailwind
              CSS, Bootstrap, JavaScript, React Js, Next Js, Three Js
            </div>
            <div className="mb-2">
              <span className="text-purple-300 font-bold">Backend:</span> Express Js, Python,
              Java, MySQL, MongoDB, Firebase
            </div>
            <div className="mb-2">
              <span className="text-purple-300 font-bold">UI/UX:</span> Figma
            </div>
            <div className="mb-2">
              <span className="text-purple-300 font-bold">App Development:</span> React Native
            </div>
            <div>
              <span className="text-purple-300 font-bold">Others:</span> Git, GitHub, Netlify, VS
              Code, Jira
            </div>
          </div>
        )
      },
      {
        id: "about-experience",
        title: "experience.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="mb-3">
              <span className="text-yellow-200 font-bold">Melody Mocktails</span> - MERN STACK
              Developer
            </div>
            <div className="text-gray-400 mb-3">June 2024 – Dec 2024</div>
            <div className="mb-4">
              During a 4-month engagement, we successfully delivered three significant projects,
              showcasing versatility and efficiency in handling diverse client needs using the MERN
              stack.
            </div>
            <div className="mb-3">
              <span className="text-yellow-200 font-bold">QubicGen</span> - MERN STACK Developer
            </div>
            <div className="text-gray-400 mb-3">Feb 2023 - On Going</div>
            <div className="mb-4">
              Spearheaded the creation of company website using React.js, Express.js, and MongoDB.
              Integrated various libraries and frameworks for a modern user experience.
            </div>
            <div className="mb-3">
              <span className="text-yellow-200 font-bold">Marolix Technology Solutions</span> -
              Java FullStack Developer
            </div>
            <div className="mb-4">
              Crafted Tidy Tangle—a user-friendly app for seamless home services using Java, Spring
              Boot, and Angular.
            </div>
            <div className="mb-3">
              <span className="text-yellow-200 font-bold">SRIC</span> - Frontend Developer Intern
            </div>
            <div className="mb-4">
              Designed and developed SRICs public website with ReactJS, Material UI, and
              CodeIgniter.
            </div>
            <div>
              <span className="text-yellow-200 font-bold">Skilync</span> - Web Designer Intern
              (June 2022 - Aug 2022)
            </div>
          </div>
        )
      },
      {
        id: "about-education",
        title: "education.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="mb-3">
              <span className="text-yellow-200 font-bold">
                Srinivasa Ramanujan Institute of Technology, Anantapur
              </span>
            </div>
            <div className="text-gray-400 mb-2">Bachelor of Technology - BTech, EEE</div>
            <div className="text-gray-400 mb-3">Aug 2019 – May 2023 | Grade: 7.12 CGPA</div>
            <div className="mb-3">
              <span className="text-yellow-200 font-bold">Narayana Junior College, Anantapur</span>
            </div>
            <div className="text-gray-400 mb-2">Class 12, Science Stream (MPC)</div>
            <div className="text-gray-400 mb-3">Apr 2017 – Apr 2019 | Grade: 88.2%</div>
            <div>
              <span className="text-yellow-200 font-bold">Keshava Reddy School, Anantapur</span>
            </div>
            <div className="text-gray-400 mb-2">Class 10</div>
            <div className="text-gray-400">Apr 2015 – Apr 2017 | Grade: 92.3%</div>
          </div>
        )
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6 py-1">
            <li>
              Email:{" "}
              <a
                className="text-blue-300 hover:underline"
                href="mailto:sanjusazid0@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                sanjusazid0@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                className="text-blue-300 hover:underline"
                href="tel:+917893160318"
                target="_blank"
                rel="noreferrer"
              >
                +91 7893160318
              </a>
            </li>
            <li>
              Location: <span className="text-white">AndhraPradesh, India</span>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300 hover:underline"
                href="https://github.com/shaiksajidhussain"
                target="_blank"
                rel="noreferrer"
              >
                @shaiksajidhussain
              </a>
            </li>
            <li>
              Youtube:{" "}
              <a
                className="text-blue-300 hover:underline"
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Youtube Profile
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "projects",
    title: "projects",
    type: "folder",
    children: [
      {
        id: "projects-bhavani",
        title: "bhavani-chit-funds.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-200 font-bold mb-2">Bhavani Chit Funds</div>
            <div className="mb-2">
              A chit fund is a rotating savings and credit association system where members pool
              money periodically.
            </div>
            <div className="text-gray-400">
              Tech: Html, Tailwind CSS, Javascript, React Js, Express Js, MongoDB
            </div>
          </div>
        )
      },
      {
        id: "projects-imagifine",
        title: "imagifine.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-200 font-bold mb-2">Imagifine</div>
            <div className="mb-2">
              A cutting-edge SaaS application that harnesses the power of AI to transform text
              prompts into stunning, realistic images.
            </div>
            <div className="text-gray-400">
              Tech: Nextjs, Tailwindcss, Expressjs, Mongodb
            </div>
          </div>
        )
      },
      {
        id: "projects-milk-diary",
        title: "milk-diary.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-200 font-bold mb-2">Milk Diary</div>
            <div className="mb-2">
              Advanced Milk Diary Management System to streamline the dairy business processes of
              Arokya and Hatsun.
            </div>
            <div className="text-gray-400">
              Tech: React Js, Express Js, Postgres, Prisma, Devops, Vercel
            </div>
          </div>
        )
      },
      {
        id: "projects-uispark",
        title: "uispark.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-200 font-bold mb-2">UiSpark</div>
            <div className="mb-2">
              Ignite Your Web Design with Instant UI Magic! Pre-built, pixel-perfect components
              library.
            </div>
            <div className="text-gray-400">
              Tech: Html, Css, Tailwind CSS, Javascript, React Js, Express Js, MongoDB
            </div>
          </div>
        )
      },
      {
        id: "projects-qubicgen",
        title: "qubicgen-portfolio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-200 font-bold mb-2">QubicGen Portfolio</div>
            <div className="mb-2">
              Service based company website offering RPA, Web Development, SAP, CyberSecurity
              services.
            </div>
            <div className="text-gray-400">
              Tech: Html, Tailwind CSS, Javascript, React Js, Express Js, MongoDB
            </div>
          </div>
        )
      },
      {
        id: "projects-pinkify",
        title: "pinkify.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-200 font-bold mb-2">Pinkify</div>
            <div className="mb-2">
              Customized version of Spotify with a pink theme, offering an ads-free listening
              experience.
            </div>
            <div className="text-gray-400">Tech: React Native, Figma, Firebase</div>
          </div>
        )
      }
    ]
  },
  {
    id: "blogs",
    title: "blogs",
    type: "folder",
    children: [
      {
        id: "blogs-zustand",
        title: "zustand-vs-redux.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-200 font-bold mb-2">
              Zustand vs Redux: Why I Switched for My LMS Project
            </div>
            <div className="text-gray-400">Expert | June 12, 2025</div>
          </div>
        )
      },
      {
        id: "blogs-imagifine",
        title: "imagifine-article.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-200 font-bold mb-2">
              How I Built Imagifine: An AI Image Generation SaaS App with Stunning 3D Interactions
            </div>
            <div className="text-gray-400">Expert | June 11, 2025</div>
          </div>
        )
      },
      {
        id: "blogs-portfolio",
        title: "portfolio-article.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div className="text-yellow-200 font-bold mb-2">
              Building My Portfolio with React, R3F, GSAP & Framer Motion
            </div>
            <div className="text-gray-400">Expert | June 11, 2025</div>
          </div>
        )
      }
    ]
  }
];

export default terminal;
