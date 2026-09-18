import { useState } from "react";

const FLOW_STAGES = [
  {
    num: "01",
    phase: "Foundation & Ingestion",
    title: "Problem & Data Ingestion",
    icon: "🎯",
    accent: "coffee",
    desc: "Formulate analytical hypotheses, establish the Python data science environment, and ingest raw tabular records.",
    points: [
      "Translating business problems into quantitative data tasks",
      "Setting up libraries: NumPy, Pandas, Matplotlib & Seaborn",
      "Reading CSV files & examining Series / DataFrame anatomy",
    ],
    tech: ["Python", "Pandas", "read_csv()", "DataFrame"],
  },
  {
    num: "02",
    phase: "Data Hygiene",
    title: "Data Cleaning & Preprocessing",
    icon: "🧹",
    accent: "amber",
    desc: "Diagnose imperfections in raw data before modeling, ensuring consistency, structure, and type safety.",
    points: [
      "Handling missing values: dropna(), fillna() & imputation",
      "Duplicate records removal & datatype casting",
      "Vectorized mathematical array operations with NumPy",
    ],
    tech: ["NumPy", "dropna()", "fillna()", "Vector Ops"],
  },
  {
    num: "03",
    phase: "Deep Exploration",
    title: "Exploratory Data Analysis (EDA)",
    icon: "🔍",
    accent: "sage",
    desc: "Interrogate data beyond basic charts — understand distributions, test hypotheses, and uncover correlations.",
    points: [
      "Analyzing numerical vs. categorical feature distributions",
      "Correlation matrices & feature relationship mapping",
      "Targeted visual storytelling (Histograms, Scatter, Box plots)",
    ],
    tech: ["Histograms", "Heatmaps", "Scatter Plots", "Correlation"],
  },
  {
    num: "04",
    phase: "Signal Preparation",
    title: "Feature Engineering & Split",
    icon: "⚙️",
    accent: "caramel",
    desc: "Transform raw variables into high-signal model inputs and establish unbiased validation splits.",
    points: [
      "Categorical encoding: One-Hot & Label Encoding",
      "Numerical normalization & feature scaling (StandardScaler)",
      "Strict train/test splitting (80/20) to prevent data leakage",
    ],
    tech: ["LabelEncoder", "StandardScaler", "train_test_split"],
  },
  {
    num: "05",
    phase: "Applied Modeling",
    title: "Machine Learning Toolkit",
    icon: "🤖",
    accent: "coffee",
    desc: "Select, train, and benchmark machine learning algorithms tailored to continuous or categorical targets.",
    points: [
      "Regression: Linear Regression, Decision Trees, Random Forest",
      "Classification: Logistic Regression, Random Forest, KNN",
      "Unsupervised clustering essentials with K-Means",
    ],
    tech: ["Linear/Logistic", "Decision Trees", "Random Forest", "K-Means"],
  },
  {
    num: "06",
    phase: "Validation & Impact",
    title: "Evaluation & Prediction",
    icon: "📈",
    accent: "amber",
    desc: "Rigorously validate model accuracy, justify evaluation metrics, and generate real-world actionable predictions.",
    points: [
      "Regression metrics: MAE, MSE, RMSE, R² Score",
      "Classification metrics: Accuracy, Precision, Recall, F1-Score",
      "Model interpretability, edge cases, and business impact",
    ],
    tech: ["RMSE & R²", "F1-Score", "Confusion Matrix", "Inference"],
  },
];

export function Workshop() {
  const [activeStage, setActiveStage] = useState(null);

  return (
    <section id="workshop" className="relative z-10 py-16 px-6" aria-label="Day 1 Workshop Flow">
      <div className="max-w-6xl mx-auto">
        {/* Pipeline Stepper / Flow Bar */}
        <div className="reveal mb-10 overflow-x-auto pb-3">
          <div className="flex items-center justify-between min-w-[720px] bg-surface rounded-2xl border border-border-subtle p-3 shadow-soft">
            {FLOW_STAGES.map((s, idx) => {
              const isSelected = activeStage === idx;
              return (
                <div key={s.num} className="flex items-center flex-1 last:flex-none">
                  <button
                    onClick={() => setActiveStage(isSelected ? null : idx)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-left transition-all w-full text-xs font-display font-semibold ${
                      isSelected
                        ? "bg-coffee-900 text-[#FDFBF7] shadow-sm"
                        : "text-coffee-800 hover:bg-surface-soft"
                    }`}
                    aria-label={`Highlight Stage ${s.num}: ${s.title}`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-bold ${
                        isSelected ? "bg-caramel text-white" : "bg-coffee-100 text-coffee-900"
                      }`}
                    >
                      {s.num}
                    </span>
                    <span className="truncate max-w-[100px] sm:max-w-[120px]">{s.title.split(" ")[0]}</span>
                  </button>
                  {idx < FLOW_STAGES.length - 1 && (
                    <span className="text-caramel font-bold px-2 text-xs opacity-60">→</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Connected Flow Diagram Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {FLOW_STAGES.map((stage, i) => {
            const isSelected = activeStage === i;
            const isDimmed = activeStage !== null && activeStage !== i;

            return (
              <div
                key={stage.num}
                onClick={() => setActiveStage(isSelected ? null : i)}
                className={`reveal card-warm p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 relative ${
                  isSelected
                    ? "ring-2 ring-caramel bg-amber-soft/30 -translate-y-1 shadow-card-hover"
                    : isDimmed
                    ? "opacity-60 hover:opacity-100"
                    : ""
                }`}
              >
                {/* Stage Header */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-surface-soft border border-border-subtle flex items-center justify-center text-base">
                        {stage.icon}
                      </span>
                      <span className="font-display font-bold text-xs tracking-wider text-caramel uppercase">
                        Stage {stage.num}
                      </span>
                    </div>
                    <span className="text-[11px] font-display font-semibold px-2.5 py-0.5 rounded-full bg-coffee-100 border border-coffee-200 text-coffee-800">
                      {stage.phase}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-coffee-950 text-lg sm:text-xl mb-2 leading-snug">
                    {stage.title}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4">
                    {stage.desc}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-5">
                    {stage.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary leading-normal">
                        <span className="text-caramel font-bold mt-0.5">›</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills Footer & Flow Connector */}
                <div className="pt-4 border-t border-border-subtle flex items-center justify-between flex-wrap gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {stage.tech.map((t) => (
                      <span key={t} className="badge-warm text-[10px] sm:text-xs py-0.5 px-2">
                        {t}
                      </span>
                    ))}
                  </div>
                  {i < FLOW_STAGES.length - 1 && (
                    <span className="hidden lg:inline-block text-xs font-display font-bold text-caramel">
                      Step {i + 1} ➔ {i + 2}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Compact Workflow Callout */}
        <div className="reveal p-5 sm:p-6 rounded-2xl bg-amber-soft border border-amber-warm/30 flex items-start gap-4">
          <span className="text-2xl mt-0.5 flex-shrink-0">💡</span>
          <div>
            <p className="font-serif font-bold text-coffee-950 text-base mb-1">
              End-to-End Problem Solving Architecture
            </p>
            <p className="text-coffee-900 text-xs sm:text-sm leading-relaxed">
              Every topic in Day 1 builds directly into the next. During the Day 2 Hackathon, teams apply this exact 6-stage flow to transform their assigned challenge dataset into an evaluated, defendable solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
