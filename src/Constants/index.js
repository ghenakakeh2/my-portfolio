import {
    mobile,
    backend,
    creator,
    curd,
    portfolio,
    robots,
    travel,
    Hangman_Game,
    cyborg,
    memory_game,
    IO,
    fetch_repo,
    challing_json_placeholder,
    social_media,

    logo_collage,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    bootstrap,
    sass,
    jquery,
    github,
    vercel,
    vs_code,
    chatgpt,
    postman,
    oprating_system,
    database,
    data_strcture,
    problem_solving,
    algorithm,
    kasper,
    remostart







  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "skills",
    },
    {
      id: "Education",
      title: "education",
    },
    {
      id: "projects",
      title: "projects",
    },
    {
      id: "contact",
      title: "contact",
    },
  
  
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
    id:1,
    name:"front end",
    data:[
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name:"Bootstrap",
        icon:bootstrap,
      } ,
       {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name:"sass",
        icon:sass,

      },

          {
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        name:"jQuery",
        icon:jquery,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
        // {
      //   name: "TypeScript",
      //   icon: typescript,
      // },

     
      // {
      //   name: "Three JS",
      //   icon: threejs,
      // },
    
     
      // {
      //   name: "docker",
      //   icon: docker,
      // },
      ]
      
    },


{
  id:2,
  name:"Other",
  data:[
    {
      id:"git",
      name:"git",
      icon: git,
    },
    {
      id:"gitHub",
      name:"gitHub",
      icon: github
    },
    {
      id:"vercel",
      name:"vercel",
      icon:vercel

    },
    {
      id:"vs Code",
      name:"vs Code",
      icon:vs_code

    },
    {
      id:"postman",
      name:"postman",
      icon:postman

    },
    {
      id:"chatGPT",
      name:"chatGPT",
      icon:chatgpt

    },

    {
      id:"figma",
      name: "figma",
      icon: figma,
    },
   
  ]

},
{
  id:3,
  name:"Computer Science",
  data:[{
    id:"Problem Solving",
    name:"Problem Solving",
    icon:problem_solving
    
  },
  {
    id:"Data Structure",
    name:"Data Structure",
    icon:data_strcture
  },
  {
    id:"Algorithm",
    name:"Algorithm",
    icon:algorithm
  },
  {
    id:"DataBase",
    name:"DataBase",
    icon:database
  },
  // {
  //   id:"Network",
  //   name:"Network"
  // },
  // {
  //   id:"Assembly",
  //   name:"Assembly",
  //   icon:assembly
  // },
  {
    id:"Operating System",
    name:"Operating System",
    icon:oprating_system
  }


  
  ]
}

]


  
  const experiences = [
    {
      title: "Informatics Engineer",
      company_name: " Faculty of Informatics Engineering, University of Aleppo",
      icon: logo_collage,
      iconBg: "#383E56",
      date: "March 2019",
      points: [
        "I am in my graduation year and about to finish my studies at the College of Informatics Engineering",
       
      ],
    },
    {
      title: "Trainee at Remostart Company",
      company_name: "Remostart",
      icon: remostart,
      iconBg: "#E6DEDD",
      date: "Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other deve,
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "React Advanced",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 ",
      points: [
        "I took the advanced React course offered by Meta in the Front End learning series",
        "It was a really useful experience to increase and develop my knowledge in React",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
  
    {
      name: "Robot website",
      description:
        "",
      tags: [
        {
          name: "js",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: robots,
      source_code_link: "https://github.com/",
      Live_Demo:"https://ghenakakeh2.github.io/spacial-templete-robot/"
    },
    {
      name: "Portfolio website ",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/ghenakakeh2/portfolio",
      Live_Demo:"https://ghenakakeh2.github.io/portfolio/"

    },

    {
      name: "Travel website ",
      description:
        "",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "blue-text-gradient",
        },
      
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: travel,
      source_code_link: "https://github.com/ghenakakeh2/travel-website",
      Live_Demo:"https://ghenakakeh2.github.io/travel-website/"

    },

    {
      name: "Crud Operations",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: curd,
      source_code_link: "https://github.com/ghenakakeh2/crud-react-",
      Live_Demo:"https://ghenakakeh2.github.io/crud-react-/"
    },
    {
      name: "Hangman Game ",
      description:
        "",
      tags: [
        {
          name: "js",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Hangman_Game,
      source_code_link: "https://github.com/ghenakakeh2/hangman-game",
      Live_Demo:"https://ghenakakeh2.github.io/hangman-game/"

    },
    {
      name: "cyborg ",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: cyborg,
      source_code_link: "https://github.com/ghenakakeh2/cyborg",
      Live_Demo:"https://ghenakakeh2.github.io/cyborg/"

    },
    {
      name: "memory Game ",
      description:
        "",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "blue-text-gradient",
        },
       
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: memory_game,
      source_code_link: "https://github.com/ghenakakeh2/memory-game",
      Live_Demo:"https://ghenakakeh2.github.io/memory-game/"

    },
    {
      name: "Social Media Application",
      description:
        "",
      tags: [
        {
          name: "js",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "axios",
          color: "blue-text-gradient",
        },
      ],
      image: social_media,
      source_code_link: "https://github.com/ghenakakeh2/social-media-application-js",
      Live_Demo:"https://ghenakakeh2.github.io/social-media-application-js/home.html"

    },
    {
      name: "Kasper",
      description:
        "",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "blue-text-gradient",
        },
       
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: kasper,
      source_code_link: "https://github.com/ghenakakeh2/project2-html-css",
      Live_Demo:"https://ghenakakeh2.github.io/project2-html-css/main-html.html"

    },
    {
      name: "IO",
      description:
        "",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "blue-text-gradient",
        },
       
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: IO,
      source_code_link: "https://github.com/ghenakakeh2/project3-html-css",
      Live_Demo:"https://ghenakakeh2.github.io/project3-html-css/main-html.html"

    },
    {
      name: "Fetch Repositories",
      description:
        "",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "blue-text-gradient",
        },
      
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fetch_repo,
      source_code_link: "https://github.com/ghenakakeh2/info-user-in-github",
      Live_Demo:"https://ghenakakeh2.github.io/info-user-in-github/"

    },
    {
      name: "Fetch Repositories",
      description:
        "",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "blue-text-gradient",
        },
    
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: challing_json_placeholder,
      source_code_link: "https://github.com/ghenakakeh2/challing-json-placeholder",
      Live_Demo:" https://ghenakakeh2.github.io/challing-json-placeholder/"

    },


  
  
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };