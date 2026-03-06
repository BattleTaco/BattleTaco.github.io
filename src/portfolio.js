/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  title: "Hi y'all, I'm Michael!",
  subTitle:
    "Machine Learning Engineer who loves building and shipping production AI systems. I work on real-world ML infrastructure and models at Flock Safety while pursuing my M.S. in Computer Science (Machine Learning) at Georgia Tech. Day to day, I'm hands-on across the full ML lifecycle: data engineering, experimentation, model deployment, monitoring, and continuous improvement.",
  resumeLink: "./resume.pdf", // Set to empty to hide the button
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
  title: "What I Do",
  subTitle:
    "ML ENGINEER WHO BUILDS AND DEPLOYS PRODUCTION AI SYSTEMS THAT CREATE REAL-WORLD IMPACT",
  skills: [
    "Build end-to-end ML infrastructure, from data engineering and experimentation all the way through model deployment, monitoring, and iteration",
    "Develop and fine-tune deep learning models in PyTorch for supervised learning, computer vision, and time-series problems",
    "Architect scalable MLOps pipelines with Docker, AWS, FastAPI, and CI/CD for reliable model serving",
    "Apply reinforcement learning techniques including policy optimization, simulation environments, and agent training",
    "Integrate LLMs and applied AI through prompt engineering, retrieval systems, and domain-specific solutions",
    "Build reliable data pipelines and turn model outputs into actionable insights"
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
      customIcon: "src/logos/mysql.svg"
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
    },
    {
      skillName: "FastAPI",
      customIcon: "src/logos/fastapi.svg"
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
      subHeader:
        "Master of Science in Computer Science, Machine Learning Specialization",
      duration: "January 2025 - May 2027",
      desc: "Pursuing my M.S. in CS at Georgia Tech, one of the top 10 CS programs globally. Specializing in Machine Learning with coursework in advanced ML algorithms, reinforcement learning, computer vision, and large-scale AI systems.",
      descBullets: [
        "Specializing in Machine Learning with coursework in Supervised/Unsupervised Learning, Reinforcement Learning, and AI systems design.",
        "Running rigorous empirical evaluations of ML systems, analyzing bias-variance tradeoffs, learning curves, and model diagnostics across decision trees, ensemble methods, neural networks, and dimensionality reduction techniques.",
        "Building expertise in scalable algorithm design, distributed systems, and production ML deployment pipelines.",
        "Balancing full-time ML engineering work at Flock Safety with graduate research."
      ]
    },
    {
      schoolName: "University of Minnesota - Twin Cities",
      logo: require("./assets/images/m2.avif"),
      subHeader: "Bachelor of Arts in Computer Science",
      duration: "September 2020 - May 2024",
      desc: "Graduated with a strong foundation in CS, focusing on AI, machine learning, and deep learning. Dean's List across multiple semesters. Took advanced coursework in deep learning, statistical computing, and AI while doing hands-on research.",
      descBullets: [
        "Dean's List: Fall 2020, Spring 2021, Spring 2022, Spring 2024.",
        "Led research in robotic-assisted laparoscopic surgery, improving model accuracy by 15% using deep learning and novel segmentation algorithms.",
        "Completed courses in Machine Learning Fundamentals, Deep Learning, Statistical Computing, and Regression Analysis, applying statistical methods to real-world problems.",
        "Built a strong foundation in computational linear algebra and programming principles for large-scale data analysis."
      ]
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning & Deep Learning (PyTorch, TensorFlow)",
      progressPercentage: "95%"
    },
    {
      Stack: "Computer Vision & OCR Systems",
      progressPercentage: "90%"
    },
    {
      Stack: "MLOps & Production Deployment (Docker, AWS, CI/CD)",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Engineering & Pipeline Architecture",
      progressPercentage: "85%"
    },
    {
      Stack: "Reinforcement Learning & Simulation",
      progressPercentage: "80%"
    },
    {
      Stack: "LLMs & Applied AI",
      progressPercentage: "80%"
    },
    {
      Stack: "Statistical Modeling & Experimental Design",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set to true if you're displaying Codersrank badges
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Engineer II",
      company: "Flock Safety",
      companylogo: require("./assets/images/flocksafety.png"),
      date: "October 2025 - Present",
      desc: "Building and deploying production ML systems that power large-scale computer vision pipelines for public safety, serving 5,000+ law enforcement agencies across 49 states.",
      descBullets: [
        "Contribute to machine learning systems deployed in production environments supporting large-scale computer vision pipelines for vehicle and license plate recognition.",
        "Train and evaluate ML models for OCR and state classification tasks using curated datasets and iterative experimentation.",
        "Perform exploratory data analysis and failure mode investigations to identify model misreads, edge cases, and distribution shifts across diverse plate types and environments.",
        "Develop internal Python tools to support dataset exploration, reranking workflows, and ML experimentation.",
        "Curate high-quality training datasets by filtering noisy samples, resolving annotation disagreements, and optimizing hit rates for targeted model training campaigns.",
        "Collaborate with ML infrastructure and tooling teams to debug training pipeline issues and improve dataset generation workflows.",
        "Investigate real-world model failures and edge cases to improve system robustness and accuracy."
      ]
    },
    {
      role: "Data Scientist",
      company: "Marani Health",
      companylogo: require("./assets/images/marani.png"),
      date: "May 2024 - June 2025",
      desc: "Sole Data Scientist leading all AI development and deployment for HIPAA-compliant healthcare solutions. Shipped production ML and LLM systems that cut provider review times and automated clinical workflows.",
      descBullets: [
        "Deployed LLM-powered clinical copilots with SQL pipelines, prompt engineering, and automated data cleaning, reducing provider review times by 74% and improving patient care efficiency.",
        "Designed automated statistical reporting pipelines that increased valid trial outcomes by 61% and boosted reporting accuracy by 40% for fragmented clinical trial datasets.",
        "Built scalable EHR data pipelines using JSON, HL7, and FHIR in Mirth Connect, enabling real-time maternal care monitoring across multiple healthcare systems.",
        "Architected and deployed HIPAA-compliant LLM APIs on AWS with FastAPI, Celery, and secure logging, backed by a custom QUEST LLM evaluation framework.",
        "Built QuickSight dashboards to track provider KPIs and patient outcome trends so leadership could make faster, data-driven clinical decisions."
      ]
    },
    {
      role: "Data Science Intern",
      company: "Marani Health",
      companylogo: require("./assets/images/marani.png"),
      date: "May 2023 - May 2024",
      desc: "Applied deep learning and MLOps to maternal and fetal health monitoring systems. Built cloud infrastructure and data pipelines to support distributed research teams.",
      descBullets: [
        "Increased predictive accuracy by 4% in maternal and fetal heartbeat monitoring by applying EC57 research standards to deep learning architectures in Python and PyTorch.",
        "Boosted data labeling efficiency by 50% and ensured 99.9% uptime by designing and deploying a cloud-based AWS platform (EC2, S3, Lambda) supporting distributed teams.",
        "Improved data pipeline speed by 70% and reduced false positives by 30% while sustaining 98% model accuracy through automated Python/Pandas preprocessing and regex-based extraction.",
        "Shortened AI model retraining cycles by implementing MLOps best practices, dataset versioning, and experiment tracking for production-ready healthcare AI.",
        "Collaborated with cross-functional teams including clinicians, engineers, and product managers to translate medical research into scalable AI models."
      ]
    },
    {
      role: "Modeling and Simulation Intern",
      company: "Donaldson Inc.",
      companylogo: require("./assets/images/donaldson.jpg"),
      date: "January 2022 - August 2022",
      desc: "Applied machine learning and data engineering to manufacturing intelligence at a global filtration company. Focused on sustainability and operational efficiency through anomaly detection and IoT analytics.",
      descBullets: [
        "Reduced downtime risk by enabling real-time anomaly detection in manufacturing through adapting a research-based Isolation Forest algorithm from R to Python, integrating it into factory telemetry monitoring pipelines.",
        "Supported a 41% carbon emissions reduction target by identifying operational inefficiencies with KMeans clustering and deep neural networks, accelerating root cause analysis across IoT-connected systems.",
        "Improved large-scale data ingestion capacity by contributing to a Snowflake-based ETL pipeline processing millions of manufacturing sensor records daily.",
        "Recovered $100K+ in potential annual energy savings through SQL, Pandas, and Seaborn-driven analytics, delivering actionable insights to leadership."
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "i4Score",
      companylogo: require("./assets/images/i4.png"),
      date: "January 2022 - May 2022",
      desc: "Built ML-powered analytics pipelines for investment intelligence. Delivered scalable NLP and web scraping solutions that scored 2,000+ tech companies for viability prediction.",
      descBullets: [
        "Delivered investment-grade analytics on 2,000+ Michigan tech companies by building a scalable Scrapy-based web scraping pipeline with 94% extraction accuracy.",
        "Increased downstream model precision by 40% through engineering a custom regex + Pandas data preprocessing pipeline, improving feature quality for ML models.",
        "Boosted business viability prediction accuracy by 30% by designing and fine-tuning a BERT + LSTM hybrid NLP model in PyTorch with optimized hyperparameters.",
        "Automated evaluation workflows for hundreds of regional startups, enabling faster market readiness assessments for local investors."
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

// Completed Projects Section

const completedProjects = {
  title: "Projects",
  subtitle:
    "COMPLETED ML PROJECTS THAT DEMONSTRATE PRODUCTION-QUALITY ENGINEERING",
  projects: [
    {
      title:
        "Empirical Evaluation of Supervised and Unsupervised Learning Systems",
      date: "Aug 2025 - Dec 2025",
      association: "Georgia Institute of Technology",
      description:
        "Ran rigorous, controlled experiments to evaluate how classical ML systems perform under realistic data conditions. Implemented and analyzed decision trees, ensemble methods, neural networks, K-Means, GMMs, PCA, ICA, and Random Projections. The focus was on reproducibility, bias-variance tradeoff analysis, and understanding failure modes rather than chasing a single metric.",
      tags: [
        "Supervised Learning",
        "Unsupervised Learning",
        "Dimensionality Reduction",
        "Experimental Design",
        "Model Diagnostics"
      ],
      icon: "fas fa-microscope"
    },
    {
      title: "Kaggle Competition Portfolio, Top 10% Contributor",
      date: "Jul 2025 - Aug 2025",
      association: "Independent",
      description:
        "Hit 0.93 ROC AUC and placed in the top 10% of a binary classification competition with a custom XGBoost pipeline. Built FeatureComb, a feature engineering framework that auto-generates 1,000+ two-way and three-way categorical feature interactions to capture relationships that standard encoding misses. The full pipeline includes custom preprocessing, stratified cross-validation, and hyperparameter tuning.",
      tags: [
        "XGBoost",
        "Feature Engineering",
        "ML Pipelines",
        "Cross Validation",
        "Model Optimization"
      ],
      icon: "fas fa-trophy"
    },
    {
      title: "Reinforcement Learning for Stock Trading",
      date: "May 2025 - Aug 2025",
      association: "Georgia Institute of Technology",
      description:
        "Built ML systems that learn trading strategies from historical market data. The project spans six major subprojects covering portfolio optimization with constraint-based allocation, reinforcement learning agents (Q-Learning, policy gradient), and custom market simulators for strategy evaluation.",
      tags: [
        "Reinforcement Learning",
        "Portfolio Optimization",
        "Q-Learning",
        "Market Simulation",
        "Time-Series Analysis"
      ],
      icon: "fas fa-chart-line"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Active Research Section

const researchProjects = {
  title: "Research",
  subtitle:
    "ACTIVE RESEARCH APPLYING MACHINE LEARNING TO REAL-WORLD SCIENTIFIC PROBLEMS",
  projects: [
    {
      title:
        "Machine Learning for Paleontology: Detecting Fossilized Structures Using Computer Vision and Geophysical Data",
      date: "2025 - Present",
      status: "Proposed Research (In Development)",
      association: "Independent Research",
      overview:
        "I'm exploring whether machine learning and computer vision can help paleontologists find fossilized structures buried underground. Right now, fossil discovery mostly depends on manual fieldwork and a lot of excavation. I want to see if ML models can analyze geological imaging data and pick up on patterns that match fossilized bone structures before any digging starts.",
      phases: [
        {
          title: "Subsurface Fossil Detection",
          description:
            "Using geophysical imaging data (ground-penetrating radar, seismic imaging, geological tomography) with CNNs, Vision Transformers, and 3D CNN architectures to spot structural anomalies that look like fossilized remains. Also involves signal normalization, noise reduction, and representation learning through PCA, autoencoders, and VAEs."
        },
        {
          title: "Fossil Classification",
          description:
            "Building classification systems to identify bone type, species, and morphological similarity from digitized fossil scans with ResNet, EfficientNet, and Vision Transformers. Working with datasets from the Smithsonian, MorphoSource, and digital morphology repositories."
        }
      ],
      researchQuestions: [
        "Can ML models pick up on structural patterns in geophysical imaging data that actually correspond to fossilized bone?",
        "How well can computer vision tell the difference between real fossilized bone and geological formations that just look like bone?",
        "Can representation learning pull out meaningful geological features from subsurface scans to improve fossil detection?"
      ],
      tags: [
        "Computer Vision",
        "Deep Learning",
        "Paleontology",
        "Geophysics",
        "CNNs",
        "Vision Transformers",
        "Representation Learning",
        "Anomaly Detection"
      ],
      icon: "fas fa-bone",
      githubLink: "", // GitHub link, to be added when repository is created
      motivation:
        "Dinosaurs and ancient life have fascinated me since I was a kid. This project sits right at the intersection of two things I really care about: machine learning and paleontology. I want to see if ML can actually help with scientific discovery and maybe speed up paleontological research in a meaningful way."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Certifications & Honors",
  subtitle:
    "Professional certifications and academic recognition I've picked up along the way.",

  achievementsCards: [
    {
      title: "Fundamentals of Deep Learning, NVIDIA",
      subtitle:
        "Hands-on deep learning certification covering neural network architectures, training techniques, and GPU-accelerated computing.",
      image: require("./assets/images/nvidia_logo.png"),
      imageAlt: "NVIDIA Logo",
      footerLink: []
    },
    {
      title: "Deep Neural Networks with PyTorch, IBM",
      subtitle:
        "Certification in building and training deep neural networks with PyTorch, covering CNNs, transfer learning, and model optimization.",
      image: require("./assets/images/pytorch_cert.png"),
      imageAlt: "PyTorch Certification",
      footerLink: []
    },
    {
      title: "Machine Learning in Python, DataCamp",
      subtitle:
        "ML certification covering supervised and unsupervised learning, model evaluation, and scikit-learn.",
      image: require("./assets/images/datacamp_logo.png"),
      imageAlt: "DataCamp Logo",
      footerLink: []
    },
    {
      title: "Dean's List, University of Minnesota",
      subtitle:
        "Made the Dean's List four semesters: Fall 2020, Spring 2021, Spring 2022, and Spring 2024.",
      image: require("./assets/images/m2.avif"),
      imageAlt: "University of Minnesota Logo",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I like writing about what I'm learning, whether it's responsible AI, machine learning, or just the craft of building things that matter.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@Michael_Ram/ethics-in-ai-1-6bccc89006c6",
      title: "Ethics in AI #1",
      description:
        "In Ethics in AI #1, I explore the critical need for ethical oversight in AI, discussing issues like biased policing and ethical data collection as AI technology rapidly advances."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "TALKS AND PRESENTATIONS",

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "Podcast",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
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
  title: "Contact Me",
  subtitle:
    "Want to talk about ML, collaborate on something, or just say hi? My inbox is always open.",
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
  completedProjects,
  researchProjects,
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
