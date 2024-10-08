/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import resumePDF from "./containers/resume/resume.pdf";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Michael Ramirez",
  title: "Hi all, I'm Michael",
  subTitle: emoji(
    "I'm a Data Scientist specializing in AI/ML and statistics 📊 with experience in building deep learning models using Python, TensorFlow, and PyTorch. Passionate about creating data-driven solutions, especially in healthcare and computer vision 🚀."
  ),
  resumeLink: resumePDF, // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/BattleTaco",
  linkedin: "https://www.linkedin.com/in/michael-ramirez-ab011a1b1/",
  gmail: "galvis14306@gmail.com",
  gitlab: "https://gitlab.com/BattleTaco1",
  instagram: "https://instagram.com/ramirez_m.r",
  medium: "https://medium.com/BattleTaco",
  stackoverflow: "https://stackoverflow.com/users/13587150/battletaco",
  kaggle: "https://www.kaggle.com/battletaco",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PASSIONATE DATA SCIENTIST & MACHINE LEARNING ENGINEER DRIVEN BY INNOVATIVE SOLUTIONS",
  skills: [
    emoji(
      "⚡ Build and optimize machine learning models for predictive analysis and decision-making"
    ),
    emoji(
      "⚡ Develop deep learning solutions for computer vision, NLP, and healthcare applications"
    ),
    emoji(
      "⚡ Leverage data science to drive insights, using tools like TensorFlow, PyTorch, and scikit-learn"
    ),
    emoji(
      "⚡ Deploy scalable AI/ML models on cloud platforms like AWS and Google Cloud"
    ),
    emoji(
      "⚡ Collaborate on end-to-end data pipelines and model deployment with a focus on real-time performance"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "pytorch",
      customIcon: "src/logos/pytorch.svg"
    },
    {
      skillName: "tensorflow",
      customIcon: "src/logos/tensorflow.svg"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "mySQL",
      customIcon: "src/logos/mysqp.svg"
    },
    {
      skillName: "postgreSQL",
      customIcon: "src/logos/postgresql.svg"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "pandas",
      customIcon: "src/logos/pandas.svg"
    },
    {
      skillName: "Cplusplus",
      customIcon: "src/logos/cplusplus.svg"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Institute of Technology",
      logo: require("./assets/images/Georgia-Tech-Logo-PNG-Picture1.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2025 - Current",
      desc: "Pursuing a Master of Science in Computer Science at Georgia Tech, ranked among the top 10 computer science programs in the world. Specializing in Artificial Intelligence and Machine Learning, with coursework designed to deepen expertise in AI/ML algorithms, data processing, and large-scale systems.",
      descBullets: [
        "Enrolled in one of the top-ranked CS programs globally, focusing on AI, Machine Learning, algorithms, and systems design.",
        "Pursuing advanced courses in Machine Learning, Artificial Intelligence, Algorithm Design, Database Systems, and High-Performance Computing.",
        "Building a foundation in scalable and efficient algorithm design, advanced database systems, and the deployment of large-scale data processing solutions.",
        "Exposure to cutting-edge research and development in areas such as distributed systems, advanced algorithms, and AI, all from a globally recognized institution."
      ]
    },
    {
      schoolName: "University of Minnesota - Twin Cities",
      logo: require("./assets/images/m2.avif"),
      subHeader: "Bachelor of Arts in Computer Science",
      duration: "September 2020 - May 2024",
      desc: "Graduated with a strong foundation in Computer Science, focusing on AI, machine learning, and deep learning. Took advanced courses in deep learning, statistical computing, and AI, while actively participating in research projects that applied cutting-edge techniques to healthcare and robotics.",
      descBullets: [
        "Led research in robotic-assisted laparoscopic surgery, improving model accuracy by 15% using deep learning techniques and novel segmentation algorithms.",
        "Completed advanced courses such as Machine Learning Fundamentals, Deep Learning, Statistical Computing, and Regression Analysis, consistently applying statistical methods to real-world problems.",
        "Developed a strong foundation in computational linear algebra and programming principles, enabling the creation of efficient algorithms for large-scale data analysis."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning & Predictive Modeling",
      progressPercentage: "90%"
    },
    {
      Stack: "Deep Learning (TensorFlow, PyTorch)",
      progressPercentage: "85%"
    },
    {
      Stack: "Statistical Modeling & Data Analysis",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Wrangling & Data Engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud Computing & Model Deployment",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set to true if you're displaying Codersrank badges
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Jr. Data Scientist",
      company: "Marani Health",
      companylogo: require("./assets/images/marani.png"),
      date: "May 2023 – Present",
      desc: "Served as the sole Data Scientist in a fast-growing health tech startup, conducting in-depth research, statistical analysis, and signal processing to support innovative maternal and fetal health solutions.",
      descBullets: [
        "Developed and refined signal processing algorithms to enhance the accuracy and reliability of maternal and fetal health monitoring systems.",
        "Conducted extensive statistical analysis and research to validate data integrity and improve healthcare outcomes.",
        "Worked closely with engineers and clinicians to design and implement a comprehensive metrics dashboard, utilizing SQL and database management to track key health indicators.",
        "Contributed to research and data initiatives that supported regulatory processes, including FDA approval for cutting-edge health technology."
      ]
    },
    {
      role: "Modeling and Simulations Intern",
      company: "Donaldson Inc.",
      companylogo: require("./assets/images/donaldson.jpg"),
      date: "Feb 2022 – Aug 2022",
      desc: "Contributed to the development and optimization of data-driven solutions in a global manufacturing environment, focusing on predictive analytics, statistical modeling, and process improvements.",
      descBullets: [
        "Developed predictive models and statistical analyses to enhance manufacturing efficiency and reduce operational costs.",
        "Worked with large datasets to identify trends and anomalies, leading to process optimizations in filtration systems.",
        "Collaborated with cross-functional teams to integrate data insights into production workflows, improving product quality and consistency.",
        "Automated data collection and reporting processes, providing real-time visibility into key performance indicators for senior management."
      ]
    },
    {
      role: "Software Engineer",
      company: "i4Score",
      companylogo: require("./assets/images/i4.png"),
      date: "Jan 2022 – May 2022",
      desc: "Worked on advanced data analytics and machine learning projects, contributing to the development of performance metrics and predictive models aimed at improving business decision-making and operational efficiency.",
      descBullets: [
        "Built and optimized machine learning models to predict key business performance metrics, improving forecasting accuracy and strategic planning.",
        "Conducted detailed statistical analyses to identify patterns and insights, providing actionable data to drive business outcomes.",
        "Collaborated with a multidisciplinary team to develop data pipelines and automate the delivery of performance metrics in real-time.",
        "Worked on integrating predictive analytics into existing business processes, leading to more efficient resource allocation and improved decision-making."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-8328369584",
  email_address: "galvis14306@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
