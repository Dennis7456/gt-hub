const TOPICS = [
  {
    "id": 1,
    "title": "Introduction to Customs Valuation",
    "icon": "\ud83d\udcd6",
    "color": "#ef4444",
    "description": "Understand what customs valuation is and why it matters in customs administration.",
    "steps": 5
  },
  {
    "id": 2,
    "title": "History and Objectives of Customs Valuation",
    "icon": "\ud83d\udcd6",
    "color": "#f59e0b",
    "description": "Understand how the WTO customs valuation system developed and what it seeks to achieve.",
    "steps": 5
  },
  {
    "id": 3,
    "title": "Structure of the WTO Customs Valuation Agreement",
    "icon": "\ud83d\udcd6",
    "color": "#10b981",
    "description": "Understand the parts, annexes, and core article groupings of the Agreement.",
    "steps": 5
  },
  {
    "id": 4,
    "title": "The Six Methods of Valuation",
    "icon": "\ud83d\udcd6",
    "color": "#3b82f6",
    "description": "Learn the six valuation methods and the rule of sequential application.",
    "steps": 5
  },
  {
    "id": 5,
    "title": "Transaction Value: Core Concept",
    "icon": "\ud83d\udcd6",
    "color": "#8b5cf6",
    "description": "Understand the transaction value method as the primary valuation method.",
    "steps": 5
  },
  {
    "id": 6,
    "title": "Transaction Value: Application",
    "icon": "\ud83d\udcd6",
    "color": "#ec4899",
    "description": "Apply transaction value in practical valuation situations.",
    "steps": 6
  },
  {
    "id": 7,
    "title": "Restrictions, Conditions, Proceeds, and Related Parties",
    "icon": "\ud83d\udcd6",
    "color": "#06b6d4",
    "description": "Understand the major Article 1 limits on use of transaction value.",
    "steps": 6
  },
  {
    "id": 8,
    "title": "Article 8 Adjustments: General Rules",
    "icon": "\ud83d\udcd6",
    "color": "#84cc16",
    "description": "Understand the overall logic of Article 8 adjustments.",
    "steps": 5
  },
  {
    "id": 9,
    "title": "Article 8 Adjustments: Commissions, Containers, and Assists",
    "icon": "\ud83d\udcd6",
    "color": "#f97316",
    "description": "Understand the first group of compulsory Article 8 additions.",
    "steps": 6
  },
  {
    "id": 10,
    "title": "Article 8 Adjustments: Royalties, Proceeds, and Optional Adjustments",
    "icon": "\ud83d\udcd6",
    "color": "#6366f1",
    "description": "Understand the more complex Article 8 additions and the role of transport terms.",
    "steps": 6
  },
  {
    "id": 11,
    "title": "Documentation in Customs Valuation",
    "icon": "\ud83d\udcd6",
    "color": "#14b8a6",
    "description": "Understand the role of documents in establishing and verifying customs value.",
    "steps": 5
  },
  {
    "id": 12,
    "title": "Grand Mastery Path",
    "icon": "\ud83d\udcd6",
    "color": "#a855f7",
    "description": "Bring the entire Customs Valuation I topic together for revision and exam readiness.",
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
