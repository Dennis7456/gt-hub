const TOPICS = [
  {
    "id": 1,
    "title": "What Taxes Are",
    "icon": "\ud83d\udcda",
    "color": "#ef4444",
    "description": "Understand the meaning of taxes, why they matter, and how they differ from other revenue sources.",
    "steps": 5
  },
  {
    "id": 2,
    "title": "Taxation Law",
    "icon": "\u2696\ufe0f",
    "color": "#f59e0b",
    "description": "Understand taxation law and the main Kenyan tax laws listed in the presentation.",
    "steps": 5
  },
  {
    "id": 3,
    "title": "Types and Classification of Taxes",
    "icon": "\ud83c\udfd7\ufe0f",
    "color": "#10b981",
    "description": "Master types of taxes and the difference between direct and indirect taxation.",
    "steps": 6
  },
  {
    "id": 4,
    "title": "Functions of Taxation",
    "icon": "\ud83d\udcd6",
    "color": "#3b82f6",
    "description": "Understand the revenue, social, political, economic, and redistribution functions of taxation.",
    "steps": 6
  },
  {
    "id": 5,
    "title": "Structural Features of Taxes",
    "icon": "\ud83d\udcd6",
    "color": "#8b5cf6",
    "description": "Master taxpayers, tax base, tax periods, and tax rates.",
    "steps": 5
  },
  {
    "id": 6,
    "title": "Tax Rate Structures",
    "icon": "\ud83d\udcd6",
    "color": "#ec4899",
    "description": "Understand proportional, progressive, regressive, marginal, average, and effective tax rates.",
    "steps": 5
  },
  {
    "id": 7,
    "title": "Tax Expenditures",
    "icon": "\ud83d\udcd6",
    "color": "#06b6d4",
    "description": "Understand tax incentives, concessions, advantages, disadvantages, and costs of tax expenditures.",
    "steps": 5
  },
  {
    "id": 8,
    "title": "Canons of Taxation and Good Tax Policy",
    "icon": "\ud83d\udcd6",
    "color": "#84cc16",
    "description": "Master classic canons of taxation and modern principles of good tax policy.",
    "steps": 7
  },
  {
    "id": 9,
    "title": "The Tax Unit",
    "icon": "\ud83d\udcd6",
    "color": "#f97316",
    "description": "Understand individuals, families, partnerships, trusts, and companies as tax units.",
    "steps": 5
  },
  {
    "id": 10,
    "title": "Sovereignty and Jurisdiction to Tax",
    "icon": "\ud83d\udcd6",
    "color": "#6366f1",
    "description": "Understand sovereign power, source-based jurisdiction, and residence-based jurisdiction.",
    "steps": 5
  },
  {
    "id": 11,
    "title": "International Taxation and DTAs",
    "icon": "\ud83d\udcd6",
    "color": "#14b8a6",
    "description": "Understand international tax enforcement problems and the purpose of Double Taxation Agreements.",
    "steps": 5
  },
  {
    "id": 12,
    "title": "Tax Evasion, Avoidance, and Planning",
    "icon": "\ud83d\udcd6",
    "color": "#a855f7",
    "description": "Master the difference between evasion, avoidance, and planning, then consolidate the whole topic.",
    "steps": 6
  }
];

const STEP_TYPES = [
  { id: 1, name: "Learn", icon: "📚", description: "Read and understand key concepts" },
  { id: 2, name: "Recall", icon: "🧠", description: "Test your memory with flashcards" },
  { id: 3, name: "Match", icon: "🎯", description: "Match terms with definitions" },
  { id: 4, name: "Scenario", icon: "💼", description: "Apply knowledge to real situations" },
  { id: 5, name: "Timed Quiz", icon: "⏱️", description: "Quick quiz under time pressure" },
  { id: 6, name: "Boss Challenge", icon: "👑", description: "Master the topic with a final test" }
];

// XP Constants
const XP_PER_STEP = 100;
const XP_PER_TOPIC = 600;
const XP_TOPIC_MASTERY = 50;
const XP_PERFECT_BOSS = 100;
const XP_CHAPTER_COMPLETE = 250;
const TOTAL_CHAPTER_XP = 7200;
