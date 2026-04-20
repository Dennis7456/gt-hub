const TOPICS = [
  {
    "id": 1,
    "title": "Why This Agreement Exists",
    "icon": "\ud83d\udcd6",
    "color": "#ef4444",
    "description": "Understand why the Agreement was created and why transaction value is central.",
    "steps": 5
  },
  {
    "id": 2,
    "title": "Structure of the Agreement",
    "icon": "\ud83d\udcd6",
    "color": "#f59e0b",
    "description": "Understand the internal structure of the Agreement and the role of its parts and annexes.",
    "steps": 5
  },
  {
    "id": 3,
    "title": "Article 1: Transaction Value",
    "icon": "\ud83d\udcd6",
    "color": "#10b981",
    "description": "Understand Article 1 in detail as the primary method of customs valuation.",
    "steps": 5
  },
  {
    "id": 4,
    "title": "Related Parties and Acceptability of Price",
    "icon": "\ud83d\udcd6",
    "color": "#3b82f6",
    "description": "Understand how related-party sales are treated and how price acceptability is tested.",
    "steps": 6
  },
  {
    "id": 5,
    "title": "Articles 2 and 3: Identical and Similar Goods",
    "icon": "\ud83d\udcd6",
    "color": "#8b5cf6",
    "description": "Understand how customs uses identical and similar goods when Article 1 cannot be used.",
    "steps": 5
  },
  {
    "id": 6,
    "title": "Articles 5 and 6: Deductive and Computed Value",
    "icon": "\ud83d\udcd6",
    "color": "#ec4899",
    "description": "Understand deductive value and computed value and how they differ.",
    "steps": 5
  },
  {
    "id": 7,
    "title": "Article 7: Fallback and Prohibited Bases",
    "icon": "\ud83d\udcd6",
    "color": "#06b6d4",
    "description": "Understand how fallback valuation works and what customs may never use.",
    "steps": 5
  },
  {
    "id": 8,
    "title": "Article 8 Additions",
    "icon": "\ud83d\udcd6",
    "color": "#84cc16",
    "description": "Understand Article 8 additions and when they may be made.",
    "steps": 6
  },
  {
    "id": 9,
    "title": "Currency, Confidentiality, Appeal, and Release of Goods",
    "icon": "\ud83d\udcd6",
    "color": "#f97316",
    "description": "Understand the procedural rights and operational protections in Articles 9 to 17.",
    "steps": 5
  },
  {
    "id": 10,
    "title": "Articles 17 to 24 and the Committees",
    "icon": "\ud83d\udcd6",
    "color": "#6366f1",
    "description": "Understand customs verification powers, the committee system, and final provisions.",
    "steps": 5
  },
  {
    "id": 11,
    "title": "Interpretative Notes and Technical Understanding",
    "icon": "\ud83d\udcd6",
    "color": "#14b8a6",
    "description": "Use the interpretative notes to deepen exam understanding and apply the rules more confidently.",
    "steps": 5
  },
  {
    "id": 12,
    "title": "Grand Mastery Path",
    "icon": "\ud83d\udcd6",
    "color": "#a855f7",
    "description": "Bring the whole Agreement together for revision, application, and exam readiness.",
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
