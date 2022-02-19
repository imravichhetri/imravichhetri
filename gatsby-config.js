module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "online-portfolio",
    intro: 'I’m 27 years old engineer located in India, who is working from home right now and working with a company called Innovaccer Analytics Pvt. Ltd.  I’ve also worked with various startup like Dailyhunt and Blackbuck. I love web development and I’ve provided my help as a consultant to various startups. I’ve good hands on JavaScript, ReactJS, NodeJS, ExpressJS, GraphQL , Apollo Client, Redux, etc.',
    educations: [
      {
        year: "2013 - 2017",
        designation: "B.Tech (Computer Science and Engineering)",
        responsiblities: [
        ]
      },
    ],
    experiences: [
      {
        year: "2021 - Present",
        designation: "Senior Software Engineer",
        responsiblities: [
          "Helped in adding various user type to the system, like MD, Specialist.",
          "Migrated hard coded logic to config driven UI which reduced the file size by 10%.",
          "Helped in finding best resources for the organisation by taking interviews."
        ]
      },
      {
        year: "2019 - 2021",
        designation: "Software Engineer",
        responsiblities: [
          "Single handedly revamped old platform used by employees that was built using Angular v1.4 to new platform using React v16 for smooth creation and completion of orders.",
          "Integrated CI/CD for smoother deployment of web app.", 
          "Increased the performance of web application by 20-30%."
        ]
      },
      {
        year: "2017 - 2019",
        designation: "Software Engineer",
        responsiblities: [
          "Designed and developed UI for notification content feeder sub-system which serves breaking news and real-time trending news to notification engine which helped in increasing DAU by 5%.",
          "Mentored new interns throughout their internship journey, giving them advice about careers."
        ]
      }
    ],
    contacts: [
      {
        alt: "Email",
        text: "imravichhetri@gmail.com",
        icon: `${__dirname}/src/images/icons/mail.svg`,                                                                 
        href: "mailto:imravichhetri@gmail.com",
      },
      {
        alt: "Phone",
        text: "+91-7017872344",
        icon: `${__dirname}/src/images/icons/phone.svg`,                                                                   
        href: "tel:+917017872344",
      },
      {
        alt: "LinkedIn",
        text: "https://www.linkedin.com/in/imravichhetri",
        icon: `${__dirname}/src/images/icons/linkedin.svg` ,
        href: "https://www.linkedin.com/in/imravichhetri",
      },
      {
        alt: "Instagram",
        text: "@foodie.backpacker",
        icon: `${__dirname}/src/images/icons/instagram.svg`,
        href: "https://instagram.com/foodie.backpacker"                                                                   
      },
      {
        alt: "Github",
        text: "@imravichhetri",
        icon: `${__dirname}/src/images/icons/github.svg`,                                                                  
        href: "https://github.com/imravichhetri"                                                                   
      }
    ]
  },
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-transition-link",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
