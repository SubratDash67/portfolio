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
      title: "Real-time Malicious Domain Detection at Scale",
      type: "Open-source ML Security System · PyPI Package",
      timeline: "2024 – 2025",
      one_liner:
        "Hybrid ensemble (BiLSTM + LightGBM) processing 1.5M+ domains with 99.68% F1-score for DGA, typosquatting, and phishing detection.",
      problem_statement:
        "Enterprise DNS security relies on static blacklists and signature matching—approaches that fail against algorithmically generated domains (DGAs) and sophisticated brand impersonation attacks. With new malicious domains emerging at scale, organizations need real-time, learning-based detection that generalizes beyond known threats.",
      technical_approach: [
        "Engineered 47-dimensional hybrid feature space combining character-level n-gram sequences with structural domain attributes (entropy, length distributions, TLD patterns)",
        "Designed stacking ensemble architecture: BiLSTM (159K params) captures sequential character dependencies while LightGBM exploits statistical features—logistic regression meta-learner fuses predictions",
        "Applied Platt scaling for probability calibration, enabling reliable confidence thresholds for production alerting",
      ],
      tech_stack: ["Python", "PyTorch", "Scikit-learn", "LightGBM", "NumPy"],
      evaluation_and_results: [
        "F1-score: 99.68% on 1.5M domain benchmark (balanced DGA/benign/typosquatting)",
        "100% recall on brand impersonation attacks with <0.3% false positive rate",
        "Published as PyPI package with CLI interface for batch and streaming inference",
      ],
      engineering_depth: [
        "BiLSTM constrained to 159K parameters—deliberate trade-off between sequence expressiveness and inference latency (<10ms per domain)",
        "Feature engineering handles adversarial evasion: entropy-based metrics detect randomization, edit-distance features catch typosquatting variants",
        "Model retraining pipeline designed for weekly updates as new threat intelligence arrives",
      ],
      links: {
        repo: "https://github.com/SubratDash67/DNS-Threat-Detection",
        demo: "https://pypi.org/project/dns-threat-detector",
      },
      status: "Completed",
    },
    {
      id: "counterfactual-scout",
      title: "Probabilistic Decision Quality Framework for Sports Analytics",
      type: "Research-Oriented Analytics · StatsBomb Data",
      timeline: "2025",
      one_liner:
        "Counterfactual reasoning engine quantifying Expected Threat (xT) gain per pass—identifies high-risk, high-reward playmakers beyond completion rate metrics (AUC 0.81).",
      problem_statement:
        "Traditional football analytics reward safe, backward passes equally with penetrating through-balls. Completion rate conflates execution luck with decision quality. This framework isolates decision-making skill by computing what a player *should* have done given the spatial configuration of teammates, opponents, and goal proximity.",
      technical_approach: [
        "Derived Expected Value metric: EV = P(success | spatial context) × Δ Territorial Value, where territorial value maps pitch coordinates to goal-scoring probability",
        "Trained calibrated logistic regression on 50K+ StatsBomb 360 freeze-frames with 22-player positional embeddings",
        "Built counterfactual engine: for each actual pass, enumerate all feasible alternatives and compute opportunity cost as EV(best alternative) − EV(chosen action)",
      ],
      tech_stack: ["Python", "Scikit-learn", "StatsBomb Open Data", "Streamlit", "Pandas"],
      evaluation_and_results: [
        "Pass success prediction AUC: 0.81 with Brier score 0.088 (well-calibrated probabilities)",
        "Framework surfaces 'hidden playmakers'—players with high decision quality but low completion rates due to aggressive risk-taking",
        "Interactive Streamlit dashboard for match-level and player-level decision analysis",
      ],
      engineering_depth: [
        "Explicit separation of decision quality from execution variance—a completed pass to a poor location scores lower than an intercepted pass to a dangerous zone",
        "Territorial value grid trained on historical shot data; updates per-match to reflect team-specific attacking patterns",
        "Analysis bounded by freeze-frame temporal resolution (25fps) and defensive pressure annotation fidelity",
      ],
      links: {
        repo: "https://github.com/SubratDash67/Football-Project",
      },
      status: "Completed",
    },
    {
      id: "kiitrail",
      title: "KiitRail: Predictive Train Delay Platform",
      type: "Full-Stack ML Application · Production Deployed",
      timeline: "2024",
      one_liner:
        "End-to-end delay forecasting system for 250+ trains achieving 4.59-minute MAE and 94.39% R²—deployed with real-time recommendations for 1000+ daily users.",
      problem_statement:
        "Indian Railways passengers face unpredictable delays with no advance warning system. Existing apps show current status but cannot forecast future delays. This project delivers probabilistic delay predictions by fusing 12 months of arrival data with meteorological features, enabling travelers to make informed departure decisions.",
      technical_approach: [
        "Architected ML pipeline processing 250+ trains × 365 days of historical arrivals at Bhubaneswar junction",
        "Engineered 23 features: lag-based delay propagation (t-1, t-2 arrivals), cyclical temporal encodings (hour, day-of-week), and weather correlates (rainfall, visibility)",
        "Trained LightGBM regressor with Optuna hyperparameter optimization; 5-fold time-series CV to prevent leakage",
      ],
      tech_stack: ["Python", "LightGBM", "Scikit-learn", "FastAPI", "React", "Vercel"],
      evaluation_and_results: [
        "MAE: 4.59 minutes | R²: 94.39% on held-out test set (last 2 months of data)",
        "Sub-100ms inference latency via FastAPI backend with model caching",
        "Live deployment at kiitrail.vercel.app serving real-time predictions",
      ],
      engineering_depth: [
        "Lag features capture cascading delay effects—upstream train delays propagate to downstream arrivals with learnable attenuation",
        "Recommendation engine ranks alternative trains by predicted on-time probability, surfacing reliable options during disruptions",
        "Model retrained weekly on fresh arrival data to adapt to seasonal schedule changes",
      ],
      links: {
        demo: "https://kiitrail.vercel.app",
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
