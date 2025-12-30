/**
 * Portfolio Data - Single Source of Truth
 * Parsed from user data.txt
 */

import { PortfolioData } from "@/types";

export const portfolioData: PortfolioData = {
  identity: {
    full_name: "Subrat Dash",
    preferred_name: "Subrat",
    headline:
      "Engineering student with interests in AI, ML and backend systems.",
    roles: ["Software Engineer", "Data Science/ML Engineering"],
    location: {
      city: "Bhubaneswar",
      country: "India",
      remote_open: true,
    },
    contact: {
      email: "subratdash2022@gmail.com",
      github: "https://github.com/SubratDash67",
      linkedin: "https://www.linkedin.com/in/subrat-dash-sd2026/",
      resume_pdf:
        "https://drive.google.com/file/d/1sKAjDQcCa8nZa3NsAkYuIqeBz6pmWrt5/view?usp=sharing",
    },
  },

  summary: {
    short:
      "I build data-driven software systems with a focus on machine learning pipelines, analytical backends, and end-to-end engineering rigor. My work emphasizes problem formulation, data quality, model evaluation, and deployment-aware design under real-world constraints such as limited compute and noisy data.",
    focus_areas: [
      "Applied Machine Learning and Predictive Modeling (tabular, time-series, sports analytics)",
      "Backend Systems for ML (APIs, model serving, data pipelines, evaluation tooling)",
      "Explainable and Interpretable ML, with interest in decision analysis and counterfactual reasoning",
    ],
  },

  education: [
    {
      degree: "Bachelor in Technology (B.Tech.)",
      field: "Computer Science and Engineering",
      institution: "KIIT University",
      location: "Bhubaneswar, Odisha",
      start_year: "2022",
      end_year: "2026",
      cgpa: "9.42",
    },
  ],

  skills: {
    languages: [
      {
        name: "Python",
        used_in: [
          "KiitRail: Train Delay Prediction System (ML pipeline, backend integration)",
          "DNS Threat Detection System (feature engineering, BiLSTM, ensemble modeling)",
          "Counterfactual Scout: Football Pass Decision Analysis (data processing, modeling, visualization)",
        ],
      },
      {
        name: "C",
        used_in: [
          "Core academic coursework and systems programming foundations",
        ],
      },
      {
        name: "Java",
        used_in: ["Object-oriented programming and academic projects"],
      },
    ],
    frameworks_and_tools: [
      {
        name: "Scikit-learn",
        context:
          "Classical ML models, stacking ensembles, calibration, and evaluation pipelines",
        artifacts: [
          "https://github.com/SubratDash67/DNS-Threat-Detection",
          "https://github.com/SubratDash67/Football-Project",
        ],
      },
      {
        name: "LightGBM",
        context:
          "High-performance gradient boosting for large-scale tabular data",
        artifacts: ["https://github.com/SubratDash67/DNS-Threat-Detection"],
      },
      {
        name: "PyTorch",
        context:
          "Training lightweight BiLSTM for character-level sequence modeling",
        artifacts: ["https://github.com/SubratDash67/DNS-Threat-Detection"],
      },
      {
        name: "Pandas / NumPy",
        context: "Data cleaning, feature engineering, and exploratory analysis",
        artifacts: [
          "https://github.com/SubratDash67/DNS-Threat-Detection",
          "https://github.com/SubratDash67/Football-Project",
        ],
      },
      {
        name: "Streamlit",
        context: "Interactive analytical dashboards and visual decision analysis",
        artifacts: ["https://github.com/SubratDash67/Football-Project"],
      },
      {
        name: "Git / GitHub",
        context:
          "Version control, open-source distribution, and collaborative workflows",
        artifacts: ["https://github.com/SubratDash67"],
      },
    ],
    systems_and_concepts: [
      "End-to-end machine learning pipelines (ingestion → features → modeling → evaluation → deployment)",
      "Stacked ensemble learning combining neural and tree-based models",
      "Probabilistic modeling and calibration (Platt scaling, confidence estimation)",
      "Counterfactual analysis and expected value frameworks",
      "Feature engineering for tabular, temporal, and character-sequence data",
    ],
    data_and_ml: [
      "LightGBM regression and classification models on structured data",
      "BiLSTM for character-level sequence modeling",
      "Stacking ensembles with logistic regression meta-learners",
      "Evaluation using MAE, R², F1-score, AUC, and Brier score",
      "Temporal, statistical, entropy-based, and string-distance feature engineering",
    ],
  },

  projects: [
    {
      id: "dns-threat-detection",
      title: "DNS Threat Detection System",
      type: "Open-source ML security system",
      timeline: "2024 – 2025",
      one_liner:
        "Detects malicious domains including DGA, typosquatting, and phishing infrastructure.",
      problem_statement:
        "Signature-based and blacklist-driven DNS security systems fail to generalize against algorithmically generated domains and brand impersonation attacks. This project builds a learning-based detection system that operates directly on domain characteristics.",
      technical_approach: [
        "Engineered hybrid feature space combining character-level sequences and structural domain features",
        "Designed a stacking ensemble with BiLSTM and LightGBM using logistic regression as meta-learner",
        "Applied Platt scaling to calibrate probabilities for reliable confidence scoring",
      ],
      tech_stack: ["Python", "PyTorch", "Scikit-learn", "LightGBM"],
      evaluation_and_results: [
        "F1-score: 99.68% on a 1.5M domain dataset",
        "100% recall on brand impersonation (typosquatting) attacks",
      ],
      engineering_depth: [
        "Constrained BiLSTM to 159K parameters to balance expressiveness and training cost",
        "Model performance depends on representativeness and freshness of labeled domain data",
      ],
      links: {
        repo: "https://github.com/SubratDash67/DNS-Threat-Detection",
        demo: "https://pypi.org/project/dns-threat-detector",
      },
      status: "Completed",
    },
    {
      id: "counterfactual-scout",
      title: "Counterfactual Scout: Football Pass Decision Analysis",
      type: "Research-oriented analytics prototype",
      timeline: "2025",
      one_liner:
        "Evaluates football pass decisions using expected value and counterfactual reasoning.",
      problem_statement:
        "Traditional football metrics conflate execution outcomes with decision quality. This project separates the two by quantifying the opportunity cost of unchosen actions using spatial and probabilistic analysis.",
      technical_approach: [
        "Defined expected value as EV = P(success) × territorial value",
        "Trained logistic regression model on StatsBomb 360 freeze-frame data",
        "Built a counterfactual engine comparing actual passes against feasible alternatives",
      ],
      tech_stack: ["Python", "Scikit-learn", "StatsBomb Open Data", "Streamlit"],
      evaluation_and_results: ["AUC: 0.81", "Brier score: 0.088"],
      engineering_depth: [
        "Explicit separation of decision quality from execution variance",
        "Analysis constrained by freeze-frame resolution and defensive labeling fidelity",
      ],
      links: {
        repo: "https://github.com/SubratDash67/Football-Project",
      },
      status: "Completed",
    },
  ],

  training: [
    {
      title: "Cognizant Digital Nurture 4.0",
      description:
        "Enterprise-grade training in backend engineering, including ASP.NET Core REST APIs, JWT-based authentication, Entity Framework Core, and unit testing with NUnit and Moq.",
    },
    {
      title: "IBM Machine Learning Professional Certificate",
      description:
        "Rigorous end-to-end coverage of supervised and unsupervised learning, model evaluation, and applied ML workflows.",
    },
    {
      title: "AWS Academy – Machine Learning Foundations",
      description:
        "Formal grounding in cloud-based ML concepts, data pipelines, and deployment considerations.",
    },
    {
      title: "AWS Academy – Cloud Foundations",
      description:
        "Core understanding of cloud infrastructure, scalability primitives, and service-oriented architectures.",
    },
  ],

  about: {
    technical_philosophy:
      "I approach engineering problems by first formalizing the objective and constraints, then designing systems that make trade-offs explicit. I prioritize data quality, evaluation rigor, and interpretability, and prefer solutions that remain robust under limited compute, noisy inputs, and real-world deployment constraints.",
    learning_style: [
      "Learn by building: implement systems end-to-end to expose hidden assumptions and failure modes.",
      "Validate understanding through metrics, ablations, and comparison against strong baselines.",
    ],
    outside_interests: [
      "Applied sports analytics, particularly decision-making and performance evaluation using data.",
    ],
  },
};

export default portfolioData;
