// DataThon 2026 — Single source of truth for all copy
export const GOOGLE_FORM_LINK = "https://forms.gle/Eg5h2ZpY3MFZvj918";

export const EVENT = {
  name: "DataThon",
  year: "2026",
  tagline: "From Data to Impact",
  format: "1-Day Data Science Workshop + 1-Day Hands-on Hackathon",
  dates: "25–26 September 2026",
  dept: "Department of Artificial Intelligence & Machine Learning",
  keywords: ["Learn", "Analyse", "Predict", "Build", "Innovate"],
};

export const HIGHLIGHTS = [
  { icon: "📅", value: "25–26 Sept 2026", label: "Event Dates" },
  { icon: "📖", value: "1-Day Workshop", label: "Practical DS Foundations" },
  { icon: "💻", value: "1-Day Hackathon", label: "Live Hands-on Challenge" },
  { icon: "👥", value: "3 Members / Team", label: "Fixed Team Size" },
  { icon: "⚡", value: "Only 15 Teams", label: "First Come, First Served", urgent: true },
];

export const DAYS = [
  {
    day: "Day 1",
    date: "25 September 2026",
    title: "Data Science Workshop",
    subtitle: "From Problem to Prediction",
    desc: "Students master the complete Data Science workflow through practical examples — from defining a problem and cleaning raw data, through exploratory data analysis, all the way to building and evaluating machine learning models.",
    badge: "Day 1 · Workshop",
    accent: "coffee",
  },
  {
    day: "Day 2",
    date: "26 September 2026",
    title: "Data Science Hackathon",
    subtitle: "From Data to Impact",
    desc: "Teams apply the end-to-end Data Science workflow to tackle a real-world problem. Every team receives a unique dataset and problem statement to build, validate, and present a working solution.",
    badge: "Day 2 · Hackathon",
    accent: "caramel",
  },
];

export const DS_PIPELINE = [
  "Real-World Problem",
  "Data Collection",
  "Data Understanding",
  "Data Cleaning",
  "EDA",
  "Feature Engineering",
  "Train / Test Split",
  "Model Selection",
  "Model Training",
  "Model Evaluation",
  "Prediction",
];

export const WORKSHOP_TOPICS = [
  {
    num: "01",
    title: "What is Data Science?",
    items: [
      "What is Data Science?",
      "Data Science vs AI & ML",
      "Deep Learning overview",
      "Real-world business applications",
      "Types of Data Science problems",
    ],
    tags: ["Healthcare", "Finance", "Agriculture", "Education", "Business", "Manufacturing", "Sports"],
  },
  {
    num: "02",
    title: "Data Science Problem-Solving Path",
    isPipeline: true,
    desc: "The common rigorous framework applied during both the workshop and the hackathon.",
  },
  {
    num: "03",
    title: "Python for Data Science",
    items: [
      "Variables, Lists, Dictionaries",
      "Conditions, Loops & Functions",
      "Importing scientific libraries",
      "Reading CSV files & data sources",
    ],
  },
  {
    num: "04",
    title: "NumPy Fundamentals",
    items: [
      "Arrays & Array Dimensions",
      "Mathematical vector operations",
      "Statistical functions (Mean, Min, Max)",
      "Standard deviation & variances",
    ],
  },
  {
    num: "05",
    title: "Pandas for Data Analysis",
    items: [
      "Series & DataFrame anatomy",
      "read_csv(), head(), info(), describe()",
      "Column indexing & row filtering",
      "Handling missing values: dropna(), fillna()",
    ],
  },
  {
    num: "06",
    title: "Data Visualization",
    isVizTable: true,
    callout: "Don't just make charts. Pick the visual that directly answers the analytical question.",
    vizRows: [
      { q: "Distribution", v: "Histogram" },
      { q: "Comparison", v: "Bar Chart" },
      { q: "Relationship", v: "Scatter Plot" },
      { q: "Trend over time", v: "Line Chart" },
      { q: "Category share", v: "Pie / Donut Chart" },
    ],
  },
];

export const EDA_CARDS = [
  {
    icon: "🔍",
    title: "Understand the Data",
    color: "coffee",
    items: [
      "Row count and feature dimensions",
      "Semantic meaning of each column",
      "Numerical vs Categorical variables",
      "Identification of target variable",
    ],
  },
  {
    icon: "⚠️",
    title: "Diagnose Data Quality",
    color: "amber",
    items: [
      "Missing values and imputation strategy",
      "Duplicate records detection",
      "Outliers and anomalies",
      "Incorrect data types & class imbalance",
    ],
  },
  {
    icon: "💡",
    title: "Discover Patterns",
    color: "sage",
    items: [
      "Feature relationships & correlations",
      "Trends across cohorts or time",
      "Important predictor features",
      "Key distribution differences",
    ],
  },
];

export const ML_TYPES = [
  {
    type: "Type 1",
    title: "Regression",
    desc: "Predict continuous numerical quantities from feature inputs.",
    accent: "coffee",
    examples: ["House Price", "Salary", "Marks", "Electricity Use", "Crop Yield"],
  },
  {
    type: "Type 2",
    title: "Classification",
    desc: "Predict discrete category membership from feature inputs.",
    accent: "caramel",
    examples: ["Pass / Fail", "Loan Approved", "Churn / Retained", "Water Quality"],
  },
  {
    type: "Type 3 (Brief)",
    title: "Unsupervised",
    desc: "Uncover natural clusters and patterns without preset labels.",
    accent: "sage",
    examples: ["Clustering", "K-Means"],
    note: "Primary Hackathon Focus: Regression & Classification",
  },
];

export const ML_TOOLBOX = {
  Regression: ["Linear Regression", "Decision Tree Regressor", "Random Forest Regressor"],
  Classification: ["Logistic Regression", "Decision Tree", "Random Forest", "K-Nearest Neighbors"],
  Clustering: ["K-Means Clustering"],
};

export const REGRESSION_METRICS = ["MAE", "MSE", "RMSE", "R² Score"];
export const CLASSIFICATION_METRICS = ["Accuracy", "Precision", "Recall", "F1-Score", "Confusion Matrix"];

export const HACKATHON_WORKFLOW = [
  "Understand the Problem",
  "Understand the Data",
  "Data Preprocessing",
  "EDA & Visual Analysis",
  "Feature Engineering",
  "Model Building",
  "Model Evaluation",
  "Model Tuning",
  "Final Predictions",
  "Interactive Interface",
  "Final Presentation",
];

export const DELIVERABLES = [
  "Problem Statement Formulation",
  "Dataset Understanding & Scope",
  "Data Dictionary & Variable Descriptions",
  "Documented Preprocessing Pipeline",
  "Min. 5 Meaningful EDA Visualizations",
  "At Least 2 Distinct ML Models",
  "Comprehensive Model Comparison",
  "Evaluation Metrics & Justification",
  "Final Prediction Results",
  "Working Prediction Interface / Demo",
  "Actionable Insights & Recommendations",
];

export const PROBLEM_DOMAINS = [
  { icon: "🎓", domain: "Education", problems: ["Student Academic Performance Predictor", "Student Dropout Risk Prediction"] },
  { icon: "🚗", domain: "Automobile", problems: ["Used Vehicle Price Prediction"] },
  { icon: "🏠", domain: "Real Estate", problems: ["Rental Housing Price Prediction"] },
  { icon: "📊", domain: "Business", problems: ["Customer Churn Prediction"] },
  { icon: "💳", domain: "Finance", problems: ["Loan Credit Approval Assessment"] },
  { icon: "👥", domain: "Human Resources", problems: ["Employee Salary Expectation", "Employee Attrition Risk"] },
  { icon: "🌾", domain: "Agriculture", problems: ["Seasonal Crop Yield Prediction"] },
  { icon: "💧", domain: "Environment", problems: ["Water Potability Classification", "Air Quality Index Category"] },
  { icon: "⚡", domain: "Energy", problems: ["Grid Electricity Demand Forecast"] },
  { icon: "🍽️", domain: "Hospitality", problems: ["Restaurant Rating & Review Impact"] },
  { icon: "🛒", domain: "Retail & Commerce", problems: ["Customer Purchase Intent Prediction"] },
  { icon: "🚦", domain: "Transportation", problems: ["Traffic Accident Severity Predictor"] },
];

export const EDA_FLOW = [
  "Guiding Question",
  "Data Analysis",
  "Visual Evidence",
  "Key Observation",
  "Interpretation",
  "Actionable Conclusion",
];

export const EVAL_COMPONENTS = [
  { label: "Problem Understanding & Formulation", marks: 10 },
  { label: "Data Preprocessing & Cleaning", marks: 15 },
  { label: "EDA – 5 Focused Analytical Questions", marks: 20 },
  { label: "Feature Engineering & Selection", marks: 10 },
  { label: "Machine Learning Model Building", marks: 15 },
  { label: "Model Evaluation, Comparison & Tuning", marks: 10 },
  { label: "Working Prediction Interface / Prototype", marks: 10 },
  { label: "Presentation & Solution Defense", marks: 10 },
];

export const PHILOSOPHY_FLOW = [
  "Problem Framing",
  "Rigorous Preprocessing",
  "Evidence-Based EDA",
  "Sound Methodology",
  "Model Comparison",
  "Real-world Interpretation",
  "Working Prototype",
  "Clear Presentation",
];

export const AI_ALLOWED = [
  "Exploring conceptual ideas & workflows",
  "Debugging syntax and code errors",
  "Assisting with documentation & comments",
  "Comparing algorithmic alternatives",
];

export const AI_MUST_EXPLAIN = [
  "Why you selected specific models over alternatives",
  "Why each preprocessing step was necessary for this dataset",
  "What each visualization actually demonstrates about the problem",
  "What evaluation metrics mean in your domain context",
  "Why one model outperformed another on this specific data",
  "How the predictions translate to real-world impact",
];

// ELIGIBILITY RULES
export const ELIGIBILITY_RULES = {
  nonIT: {
    title: "Non-IT Branches",
    subtitle: "All Years Eligible",
    branches: "Mechanical, Civil, Electrical (EEE), ECE, Chemical, Biotech, etc.",
    years: ["1st Year", "2nd Year", "3rd Year", "4th / Final Year"],
    status: "All academic batches eligible",
    isEligible: true,
  },
  it: {
    title: "IT Branches",
    subtitle: "Strictly 3rd Year Only",
    branches: "CSE, ISE, AIML, AIDS, Information Technology, etc.",
    years: ["3rd Year Students ONLY"],
    status: "1st, 2nd, and 4th years are NOT eligible",
    isEligible: true,
  },
  ineligible: {
    title: "Not Eligible",
    items: [
      "1st-Year Students from IT branches",
      "2nd-Year Students from IT branches",
      "4th / Final-Year Students from IT branches",
      "Solo participants or teams with less/more than 3 members",
    ],
  },
};

export const CONTACTS = [
  { name: "Vikas A", phone: "95913 59657", tel: "+919591359657", initial: "V" },
  { name: "Tuba", phone: "90198 05382", tel: "+919019805382", initial: "T" },
  { name: "Anagha", phone: "90196 10253", tel: "+919019610253", initial: "A" },
];

export const TEAM_REQUIREMENTS = [
  { icon: "👥", title: "3 Members / Team", desc: "Fixed team size of exactly three students" },
  { icon: "🎓", title: "Eligibility Checked", desc: "Non-IT (All years) or IT (3rd year only)" },
  { icon: "⚡", title: "15 Teams Only", desc: "Strict limit to ensure personalized mentoring", urgent: true },
  { icon: "⏱️", title: "First-Come Basis", desc: "First 15 complete teams receive confirmed slots" },
  { icon: "🔒", title: "Closes at 15", desc: "Form automatically closes once slots are filled", danger: true },
];
