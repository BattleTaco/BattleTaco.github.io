/* All site copy lives here. Colors are in _globalColor.scss. */

import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Long enough to register, short enough not to gate the page
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Michael Ramirez",
  title: "Hi y'all, I'm Michael!",
  subTitle:
    "Machine Learning Engineer at Flock Safety, working on the OCR and state classification task heads of a multi-task license plate recognition model deployed nationwide. Most of my job is figuring out why a model fails on the plates it has never seen, then closing that gap with better data. On the side I run independent research on whether ground-penetrating radar can find fossils, which is the closest I have gotten to the dinosaurs that got me into science in the first place. Either way, I care more about results that reproduce than results that impress.",
  resumeLink: "./resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/BattleTaco",
  linkedin: "https://www.linkedin.com/in/michael-ramirez-ml/",
  gmail: "galvis14306@gmail.com",
  medium: "https://medium.com/@Michael_Ram",
  stackoverflow: "https://stackoverflow.com/users/13587150/battletaco",
  kaggle: "https://www.kaggle.com/battletaco",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "PRODUCTION COMPUTER VISION, AND RESEARCH THAT REPORTS WHAT ACTUALLY HAPPENED",
  skills: [
    "Own model quality for OCR and state classification heads on a production vision model, from head-level training through evaluation protocol and error analysis",
    "Hunt down failure modes: character-confusion patterns, unfamiliar fonts, day and night capture, and the distribution shift that production data quietly introduces",
    "Curate and repair training data, then fine-tune against it, which is usually where the real accuracy lives",
    "Benchmark against third-party OCR and image-quality models to find weaknesses in our own",
    "Build and monitor training pipelines through orchestration workflows, and partner with platform and tooling teams",
    "Run independent research end to end: falsifiable hypotheses, physics or zero-parameter baselines, and every number reproducible from committed artifacts"
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
      duration: "January 2025 - Expected May 2028",
      desc: "Pursuing my M.S. in CS at Georgia Tech while working full time, one course at a time. Specializing in Machine Learning.",
      descBullets: [
        "Completed: Deep Learning, Reinforcement Learning, Machine Learning, Machine Learning for Trading, and AI Ethics.",
        "Coursework has been heavy on empirical evaluation: bias-variance analysis, learning curves, and model diagnostics across trees, ensembles, neural networks, and dimensionality reduction.",
        "The Deep Learning course produced the multi-agent transformer project below, which I have since taken well past what the class required."
      ]
    },
    {
      schoolName: "University of Minnesota - Twin Cities",
      logo: require("./assets/images/m2.avif"),
      subHeader: "Bachelor of Arts in Computer Science",
      duration: "September 2020 - May 2024",
      desc: "Studied AI, machine learning, and deep learning, and got my first real research experience in surgical computer vision.",
      descBullets: [
        "Dean's List: Fall 2020, Spring 2021, Spring 2022, Spring 2024.",
        "Contributed to a four-person research project on segmentation for robotic-assisted laparoscopic surgery, building the contour-correspondence component in OpenCV.",
        "Coursework in Machine Learning Fundamentals, Deep Learning, Statistical Computing, and Regression Analysis.",
        "Computational linear algebra and programming for large-scale data analysis."
      ]
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, // Self-rated percentage bars read as noise to engineers. Results below do the talking.
  experience: [],
  displayCodersrank: false // Set to true if you're displaying Codersrank badges
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Engineer, Multimodal ML",
      company: "Flock Safety",
      companylogo: require("./assets/images/flocksafety.png"),
      date: "October 2025 - Present",
      desc: "Model quality for license plate OCR and state classification on a multi-task computer vision model running nationwide in production.",
      descBullets: [
        "Develop and evaluate the license plate OCR and license plate state classification heads of the production license plate recognition model, covering head-level training, evaluation protocol, and error analysis.",
        "Diagnose customer-reported misreads by isolating character-confusion patterns and unfamiliar plate fonts, tracing them to distribution shift in production data the deployed model was never trained against.",
        "Drove edge-case plate categories from roughly 100% error on 100-plate sampled audits down to under 10% through targeted dataset curation and fine-tuning, measured by per-category F1 on held-out samples.",
        "Monitor OCR and state prediction accuracy nationwide across all U.S. states and day/night capture conditions, investigating any category that drops below threshold and driving retraining.",
        "Benchmark the production model against third-party OCR and image-quality models from Hugging Face to surface weaknesses and validate training data quality.",
        "Run training pipelines through the platform team's Prefect orchestration workflows, and work on edge deployment and inference optimization for real-time video analytics."
      ]
    },
    {
      role: "Data Scientist",
      company: "Marani Health",
      companylogo: require("./assets/images/marani.png"),
      date: "May 2024 - June 2025",
      desc: "Sole data scientist at the company, leading all data science and AI development for a HIPAA-compliant maternal health platform.",
      descBullets: [
        "Owned the entire data science and AI function: data infrastructure, clinical trial analysis, model development, and LLM fine-tuning for patient-facing features.",
        "Built and maintained the data lake and ingestion pipelines that consolidated fragmented clinical and device data into a single analysis-ready source.",
        "Produced regulatory-grade statistical reporting for clinical trial research, replacing manual assembly of fragmented datasets.",
        "Built and fine-tuned LLM-powered clinical copilots integrated with SQL pipelines and prompt engineering workflows, cutting provider review time for patient summaries and survey insights.",
        "Built scalable EHR data pipelines using JSON, HL7, and FHIR in Mirth Connect, and deployed HIPAA-compliant LLM APIs on AWS with FastAPI, Celery, and a custom QUEST evaluation framework."
      ]
    },
    {
      role: "Data Science Intern",
      company: "Marani Health",
      companylogo: require("./assets/images/marani.png"),
      date: "May 2023 - May 2024",
      desc: "Applied deep learning and MLOps to maternal and fetal health monitoring. Built cloud infrastructure and data pipelines supporting distributed research teams.",
      descBullets: [
        "Improved predictive accuracy in maternal and fetal heartbeat monitoring by applying EC57 research standards to deep learning architectures in Python and PyTorch.",
        "Designed and deployed a cloud-based AWS platform (EC2, S3, Lambda) that supported distributed labeling teams and improved labeling throughput.",
        "Shortened model retraining cycles by implementing MLOps practices, dataset versioning, and experiment tracking.",
        "Collaborated with clinicians, engineers, and product managers to translate medical research into deployable models."
      ]
    },
    {
      role: "Modeling and Simulation Intern",
      company: "Donaldson Inc.",
      companylogo: require("./assets/images/donaldson.jpg"),
      date: "January 2022 - August 2022",
      desc: "Machine learning and data engineering for manufacturing intelligence at a global filtration company, focused on sustainability and operational efficiency.",
      descBullets: [
        "Enabled real-time anomaly detection in manufacturing by porting a research-based Isolation Forest implementation from R to Python and integrating it into factory telemetry monitoring.",
        "Identified operational inefficiencies with KMeans clustering and deep neural networks in support of the company's carbon reduction goals.",
        "Contributed to a Snowflake-based ETL pipeline processing millions of manufacturing sensor records daily.",
        "Delivered energy consumption analytics with SQL, Pandas, and Seaborn that showed leadership where the savings actually were."
      ]
    },
    {
      role: "Machine Learning Engineer",
      company: "i4Score",
      companylogo: require("./assets/images/i4.png"),
      date: "January 2022 - May 2022",
      desc: "Scored Michigan tech companies on business viability so local investors could triage which ones to look at.",
      descBullets: [
        "Built a Scrapy-based web scraping pipeline collecting structured profiles for 2,000+ Michigan tech companies.",
        "Engineered a regex and Pandas preprocessing pipeline that improved feature quality for downstream models.",
        "Designed and fine-tuned a BERT + LSTM hybrid NLP model in PyTorch for business viability prediction.",
        "Automated evaluation workflows for hundreds of regional startups, speeding up market readiness assessments for local investors."
      ]
    }
  ]
};

// Pinned GitHub repos, fetched at build time by fetch.js.
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Completed Projects Section

const completedProjects = {
  title: "Projects",
  subtitle: "EVERY NUMBER HERE REPRODUCES FROM COMMITTED CODE",
  projects: [
    {
      title:
        "Predicting Receiver Openness at the Throw: A Multi-Agent Spatio-Temporal Transformer",
      date: "Jan 2026 - Aug 2026",
      association: "Georgia Institute of Technology",
      description:
        "Whether a multi-agent spatio-temporal transformer can predict which receiver will be most open at the throw better than straight-line physics. It cannot, and establishing that was the work. A 1.3M-parameter model with spatial attention across players and temporal attention across frames, self-supervised trajectory pretraining, then a fine-tuned openness head. It reaches statistical parity with zero-parameter constant-velocity extrapolation and never beats it, at any forecast horizon tested. The original course version reported 82-84%; validity work dissolved that into three failures that never crashed, and all three are now CI regression tests verified to fail when the bug is reintroduced.",
      tags: [
        "Transformers",
        "PyTorch",
        "Self-Supervised Pretraining",
        "Statistical Testing",
        "Reproducibility"
      ],
      icon: "fas fa-diagram-project",
      link: "https://github.com/BattleTaco/nfl-receiver-openness",
      linkLabel: "Code and every reported number",
      chart: {
        type: "bars",
        title: "Top-1 accuracy, held-out weeks 17-18",
        caption:
          "Paired McNemar test cannot separate the transformer from physics (p = 0.54). Three seeds, scored once on untouched data.",
        max: 100,
        unit: "%",
        series: [
          {label: "Constant velocity (0 params)", value: 79.3, highlight: true},
          {label: "Transformer (1.3M params)", value: 78.2},
          {label: "MLP baseline", value: 74.9},
          {label: "Static geometry floor", value: 70.3}
        ]
      }
    },
    {
      title:
        "Empirical Evaluation of Supervised and Unsupervised Learning Systems",
      date: "Aug 2025 - Dec 2025",
      association: "Georgia Institute of Technology",
      description:
        "Controlled experiments on how classical ML systems behave under realistic data conditions. Implemented and analyzed decision trees, ensemble methods, neural networks, K-Means, GMMs, PCA, ICA, and Random Projections. The focus was reproducibility, bias-variance analysis, and understanding failure modes rather than chasing a single metric.",
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
      title: "Reinforcement Learning for Stock Trading",
      date: "May 2025 - Aug 2025",
      association: "Georgia Institute of Technology",
      description:
        "ML systems that learn trading strategies from historical market data, across six subprojects covering constraint-based portfolio optimization, reinforcement learning agents (Q-Learning, policy gradient), and custom market simulators for strategy evaluation.",
      tags: [
        "Reinforcement Learning",
        "Q-Learning",
        "Portfolio Optimization",
        "Market Simulation",
        "Time-Series Analysis"
      ],
      icon: "fas fa-chart-line"
    },
    {
      title: "Feature Engineering for Tabular Competition Modeling",
      date: "Jul 2025 - Aug 2025",
      association: "Independent",
      description:
        "Built FeatureComb, a feature engineering framework that auto-generates two-way and three-way categorical interactions to capture relationships standard encoding misses, wrapped in a custom XGBoost pipeline with stratified cross-validation and hyperparameter tuning.",
      tags: [
        "XGBoost",
        "Feature Engineering",
        "ML Pipelines",
        "Cross Validation",
        "Model Optimization"
      ],
      icon: "fas fa-layer-group"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Active Research Section

const researchProjects = {
  title: "Research",
  subtitle: "INDEPENDENT RESEARCH, HYPOTHESES WRITTEN DOWN BEFORE THE RESULTS",
  projects: [
    {
      title: "Non-Invasive Fossil Prospecting from Ground-Penetrating Radar",
      date: "March 2026 - Present",
      status: "Active Research",
      association: "Independent Research, sole author",
      overview:
        "Fossil discovery still runs on manual survey and a lot of digging. I am testing whether a subsurface anomaly detector trained on voids and utilities transfers to fossil-like targets, and my hypothesis says it should not. High-permittivity bone reflects negative at the top interface where a low-permittivity void reflects positive, and the bone contrast is roughly 1.7x weaker in dry sand. I validated that inversion in a 1D forward model first, then promoted it into a claim about machine learning transfer. Four sub-hypotheses, each with its falsification condition written down before anything was run, including one that treats a null result on real data as a publishable finding.",
      phases: [
        {
          title: "Controlled Synthetic Benchmark",
          description:
            "A gprMax benchmark that holds scene geometry, depth, host medium, and target geometry constant and varies only the target dielectric, emitting each scene once per target type under a shared ID so conditions pair exactly. Four conditions: void, bone, a magnitude-matched anti-bone control that isolates polarity from contrast strength, and a null with no contrast."
        },
        {
          title: "Physics Baseline Before Deep Learning",
          description:
            "A Ricker-pulse matched filter with zero learned parameters that reads reflection polarity from normalized cross-correlation. It classifies all four conditions correctly and groups the anti-bone control with the void exactly as the mechanism predicts. If a CNN cannot beat this, the extra complexity has not earned its place."
        },
        {
          title: "Learned Detection and the Real-Data Anchor",
          description:
            "YOLOv8n detectors on synthetic B-scans reach mAP@0.5 of 0.58 to 0.60. Everything so far is synthetic. The open question, and the one that decides whether any of this matters, is whether it survives contact with real fossil GPR digitized from the literature."
        }
      ],
      researchQuestions: [
        "Does a void-trained subsurface detector fail on fossil-like targets specifically because reflection polarity inverts, rather than because synthetic data just looks different?",
        "Can physics-grounded synthetic bone data plus polarity-aware adaptation measurably close that gap?",
        "Does any of it transfer to real fossil GPR, and if not, is the negative result itself the contribution?"
      ],
      tags: [
        "Computer Vision",
        "Signal Processing",
        "gprMax",
        "YOLOv8",
        "Physics Baselines",
        "Domain Shift",
        "Paleontology"
      ],
      icon: "fas fa-bone",
      githubLink: "https://github.com/BattleTaco/paleo-gpr-ml",
      chart: {
        type: "polarity",
        title: "Physics baseline separates bone from voids by polarity alone",
        caption:
          "Top-interface reflection sign, dry sand at 400 MHz. The anti-bone control carries bone's contrast magnitude with a void's sign, and the filter groups it with the void. Zero learned parameters, synthetic gprMax data.",
        rows: [
          {label: "Void", eps: "ε = 1.0", sign: 1, detected: true},
          {label: "Bone", eps: "ε = 9.0", sign: -1, detected: true},
          {
            label: "Anti-bone (control)",
            eps: "ε = 1.8",
            sign: 1,
            detected: true
          },
          {
            label: "Null (no contrast)",
            eps: "ε = 4.0",
            sign: 0,
            detected: false
          }
        ]
      },
      motivation:
        "Dinosaurs got me into science before anything else did. This sits right where machine learning meets paleontology, and I would rather find out honestly whether ML can help paleontologists than assume it can."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Certifications & Honors",
  subtitle: "Certifications and academic recognition.",

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
    "I write up what I'm learning, mostly responsible AI and machine learning, usually before I have it fully figured out.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@Michael_Ram/my-first-foray-into-kaggles-store-sales-forecasting-25e2d2edf366",
      title: "My First Foray into Kaggle's Store Sales Forecasting",
      description:
        "Time-series forecasting across thousands of product families in the Favorita store sales competition, and where a tidy problem statement stops being tidy."
    },
    {
      url: "https://medium.com/@Michael_Ram/back-to-kaggle-how-i-hit-0-967-3b079ed8b81e",
      title: "Back to Kaggle: How I Hit 0.967",
      description:
        "Back on Kaggle with one rule: ship something clean, reproducible, and correct. Careful preprocessing and XGBoost, no leakage, 0.967 on Playground Series S5E8."
    },
    {
      url: "https://medium.com/@Michael_Ram/ethics-in-ai-2-the-nightmare-of-predictive-ai-f7d0fd484d38",
      title: "Ethics in AI #2 - The Nightmare of Predictive AI",
      description:
        "Humans have always wanted to predict the future. What goes wrong when we point predictive AI at people and treat the output as fact."
    },
    {
      url: "https://medium.com/@Michael_Ram/cracking-the-code-how-resnet-revolutionized-deep-learning-4d250f4afec8",
      title: "How ResNet Changed Deep Learning",
      description:
        "Why stacking more layers stopped making networks better, and how residual connections fixed it. A walk through the ResNet paper."
    },
    {
      url: "https://medium.com/@Michael_Ram/ethics-in-ai-1-6bccc89006c6",
      title: "Ethics in AI #1",
      description:
        "A first pass at why AI needs ethical oversight, working through biased policing and data collection as the concrete cases."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "TALKS AND PRESENTATIONS",

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: "Podcast",
  subtitle: "",

  // Add an embed link here if this section is ever turned on.
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  subtitle:
    "If you want to talk about ML, or you think I got something on this site wrong, email me.",
  // Phone deliberately left out: this page is public and indexed, and a tel:
  // link is trivially harvested. Email and LinkedIn are the way in.
  number: "",
  email_address: "galvis14306@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
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
