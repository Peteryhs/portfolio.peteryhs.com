import { Icons } from "@/components/icons";
import { ArrowUp, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Peter Shao",
  initials: "PS",
  url: "https://peteryhs.com",
  location: "Oakville, ON",
  locationLink: "https://g.co/kgs/puXAe5K",
  description:
    "Highschool tech enthusiast, audio/camera nerd, AI \"expert\" and aspiring software engineer.",
  summary:
    "Ever since grade 5 when I got my first computer, I've been captivated by technology. My high school years have been all about STEM, from building [hardware and software solutions](/#projects) for myself and others to [participating in hackathons](/#hackathons) as well as [programs like Shad](/#work). I'm also the president of my school’s [AI club](/#work), an executive at our school’s hackathon, [Hack the Ridge](/#work), as well as a member of the [CommTech Council](/#work).",
  avatarUrl: "/me.jpg",
  skills: [
    "Python",

    "Next.js",
    "Docker",
    "HTML",
    "CSS",
    "JavaScript",
    "C",
    "SQL",
    "TypeScript",
    "Angular",
    "React",
    "Node.js",
    

  ],
  navbar: [
    { href: "/", icon: ArrowUp, label: "Back To Top" },
  ],
  contact: {
    email: "contact.blooming721@passfwd.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Peteryhs",
        icon: Icons.github,

        navbar: true,
      },
      Peterfat11: {
        name: "#Peterfat11",
        url: " ",
        icon: Icons.discord,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/peter-shao-53b83331b/",
        icon: Icons.linkedin,

        navbar: true,
      },

      Email: {
        name: "Send Email",
        url: "mailto:contact.blooming721@passfwd.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Hack The Ridge",
      href: "https://hacktheridge.ca",
      badges: [],
      location: "Oakville, Canada",
      title: "Marketing and Workshop Executive",
      logoUrl: "/htr.png",
      start: "Oct 2024",
      end: "Present",
      description:
        "Organized and executed marketing campaigns for the hackathon on Instagram as well as our website. Coordinated and hosted workshops for students to learn new technologies and skills.",
    },
    {
      company: "Shad Canada",
      badges: [],
      href: "https://shad.ca",
      location: "Kamloops, BC",
      title: "Alumnus",
      logoUrl: "/shad.jpg",
      start: "July 2024",
      end: "Present",
      description:
        `Attended the Shad program at Thompson Rivers University in Kamloops, BC. Developed a business plan for a startup that would provide a platform for traditional energy workers to transition to renewable energy jobs.`,
    },
    {
      company: "DECA Ontario",
      href: "https://deca.ca",
      badges: [],
      location: "Toronto, ON",
      title: "Provincial Champion, ICDC Competitor",
      logoUrl: "/deca.jpg",
      start: "November 2023",
      end: "Present",
      description:
        "Competed in the DECA Ontario competition in the TTDM and BLTDM categories. Placed 2nd in the regional competition and advanced to the provincial competition.",
    },
    {
      company: "IRHS AI Club",
      href: "https://irhsai.club",
      badges: [],
      location: "Oakville, ON",
      title: "President",
      logoUrl: "/ridge_ai.png",
      start: "September 2024 ",
      end: "Present",
      description:
        "Founded and led the AI club at my high school. Organized workshops and lessons for students to learn how to use AI efficiently, effectively and ethically. Our club also had the honor of hosting the MPP of Oakville Mr. Crawford for a discussion on AI and its impact on society.",
    },
    {
      company: "IRHS CommTech Council & Threater Tech Crew",
      href: "https://irs.hdsb.ca",
      badges: [],
      location: "Oakville, ON",
      title: "Member",
      logoUrl: "/irhs.png",
      start: "September 2022",
      end: "Present",
      description:
        "Member of the CommTech Council at my high school. Helped organize and execute events such as the school's annual talent show and assemblies. Also a member of the Theater Tech Crew, where I helped set up and run the video, sound and lighting for school productions.",
    },
  ],
  education: [
    {
      school: "Iroquois Ridge High School",
      href: "https://irs.hdsb.ca",
      degree: "High School Diploma",
      logoUrl: "/irhs.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Havardx - CS50",
      href: "https://cs50.harvard.edu/x/2024/",
      degree: "CS50x Certificate",
      logoUrl: "/cs50-black.png",
      start: "2024",
      end: "2024",
    },

    {
      school: "St. Marguerite D'Youville Catholic Elementary School",
      href: "https://elem.hcdsb.org/stmarguerite/",
      degree: "Elementary School Diploma",
      logoUrl: "https://pbs.twimg.com/profile_images/1676195898047569920/7oFo4Mkp_400x400.jpg",
      start: "2021",
      end: "2022",
    },
    {
      school: "Our Lady of Peace Catholic Elementary School",
      href: "https://elem.hcdsb.org/ourladyofpeace/",
      degree: "Elementary School Diploma",
      logoUrl: "https://elem.hcdsb.org/wp-content/uploads/2021/06/logo_hcdsb_FOS-HT_OLP.png",
      start: "2019",
      end: "2020",
    },
    {
      school: "École Father Robinson School",
      href: "https://www.gscs.ca/rbi",
      degree: "Elementary School Diploma",
      logoUrl: "https://www.svusd.org/uploaded/themes/default_17/images/districts/_robinson/RobinsonCircle_Clear.png",
      start: "2018",
      end: "2019",
    },
    {
      school: "晋元附校",
      href: "https://jyzxfx.pte.sh.cn/",
      degree: "Elementary School Diploma",
      logoUrl: "/jyfx.png",
      start: "2015",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "My Protfolio",
      href: "https://protfolio.peteryhs.com",
      dates: "December 2024 - Present",
      description:
        "My personal portfolio website, built with Next.js and TailwindCSS.",
      technologies: [
        "Next.js",
        "TailwindCSS",
        "TypeScript",
        "Vercel",
      ],
      links: [
        {
          type: "Soruce",
          href: "https://github.com/Peteryhs/portfolio.peteryhs.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Website",
          href: "https://protfolio.peteryhs.com",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/pf.png",
      video:
        "",
    },
    {
      title: "EcoImpact",
      href: "https://github.com/anaqvi02/EcoImpact",
      dates: "October 2024 - November 2024",
      active: true,
      description:
        "Presented at Horizon Hacks 2024, EcoImpact is a web application that survays the user's behavaiours and determining their carbon footprint and steps to improve it -- using AI and machine learning.",
      technologies: [
        "Html",
        "Css",
        "JavaScript",
        "Flash",
        "Python",
        "OpenAI",
      ],
      links: [
        {
          type: "Soruce",
          href: "https://github.com/anaqvi02/EcoImpact",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/ecoimpact.png",
      video:
        "",
    },
    {
      title: "Final Typer",
      href: "https://github.com/Peteryhs/Final-Typer",
      dates: "December 2024 - Present",
      active: true,
      description:
        "A sophisticated text typing simulator with customizable typing patterns and realistic human-like behavior.",
      technologies: [
        "Python",
        "CustomTkinter",
        "PyAutoGUI",
        "Algorithms",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Peteryhs/Final-Typer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/FT-1.mov",
    },
    {
      title: "iamsigma.xyz",
      href: "https://iamsigma.xyz",
      dates: "October 2024 - December 2024",
      active: true,
      description:
        "Joke domain that I got from Horizon Hacks, which I developed a into a fun interactive website that also show cases my (horrible) photography skills.",
      technologies: [
        "Html",
        "Css",
        "JavaScript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://iamsigma.xyz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Peteryhs/Brainrot-iamsigma.xyz",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.brainrot.best/iamsigma.mp4",
    },
    {
      title: "Hack The Ridge Chat",
      href: "https://github.com/Kevin8675/HTR-Chat",
      dates: "December 2022 - Present",
      active: true,
      description:
        "Presented at Hack the Ridge 2022, this project is a self hosted chat application that allows users to communicate with each other in real-time. It also has a feature that allows users to create and join chat rooms. This project was awared with honorble mention at the event.",
      technologies: [
        "Html",
        "Css",
        "JavaScript",
        "Typescript",
        "Angular",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Kevin8675/HTR-Chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/htrc.png",
      video:
        "",
    },
    {
      title: "Hack The Ridge Dashboard",
      href: "https://dash.hacktheridge.ca",
      dates: "November 2024 - Present",
      active: true,
      description:
        "Dashboard system created for Hack the Ridge 2024, helps to inform hackers about the day's events as well as keeping them on track.",
      technologies: [
        "Next.js",
        "Typescript",
        "Shadcn UI",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://dash.hacktheridge.ca",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Peteryhs/dash.hacktheridge.ca",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:
        "/htrdash.mp4",
    },
    {
      title: "Intellilearn",
      href: "https://github.com/Peteryhs/IntelliLearn",
      dates: "December 2023 - Present",
      active: true,
      description:
        "With the release of OpenAI's assistants API, we decied to build IntelliLearn as your ultimate personal learning ally, seamlessly blending the power of GPT-4 and knowledge grounding. Presented at Hack the Ridge 2023, this project was awared best pitch.",
      technologies: [
        "Html",
        "Css",
        "JavaScript",
        "Typescript",
        "Angular",
        "OpenAI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Peteryhs/IntelliLearn",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/A_minimalist_Intellilearn_logo_on_a_dark_backgroun-1735352707046.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Hack the Ridge 2023",
      dates: "December 9th 2023",
      location: "Oakville, Ontario",
      description:
        "Developed IntelliLearn, a personal learning assistant that uses OpenAI's GPT-4 to help users learn new concepts and skills.",
      image:
      "/htr.png",
 
      links: [],
    },
    {
      title: "Horizon Hacks",
      dates: "October 25th – November 1st, 2024",
      location: "Virtual",
      description:
        "Developed EcoImpact, a web application that survays the user's behavaiours and determining their carbon footprint and steps to improve it -- using AI and machine learning.",
      image:
      "/hoh.png",
  
      links: [],
    },


    {
      title: "HDSB Hackathon",
      dates: "January 2023 ",
      location: "Virtual",
      description:
        "Developed a concept web application of a improved version of the D2L Brightspace platform.",
      image:
        "",

      links: [],
    },
    {
      title: "Hack the Ridge 2022",
      dates: "December 10 2022",
      location: "Oakville, Ontario",
      description:
        "Developed Hack the Ridge Chat, a self hosted chat application that allows users to communicate with each other in real-time.",
      image:
        "/htr.png",

      links: [],
    },


  ],
} as const;
