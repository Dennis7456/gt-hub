const TOPICS = [
  {
    "id": 1,
    "title": "What Tax History Is About",
    "icon": "\ud83d\udcd6",
    "color": "#ef4444",
    "description": "Understand the big picture of tax history and why studying it matters.",
    "steps": 5
  },
  {
    "id": 2,
    "title": "Ancient Civilizations",
    "icon": "\ud83d\udcd6",
    "color": "#f59e0b",
    "description": "Understand the earliest forms of taxation in ancient societies.",
    "steps": 6
  },
  {
    "id": 3,
    "title": "The Medieval Period",
    "icon": "\ud83d\udcd6",
    "color": "#10b981",
    "description": "Understand how feudal systems and the Church shaped taxation in medieval society.",
    "steps": 5
  },
  {
    "id": 4,
    "title": "The Age of Enlightenment",
    "icon": "\ud83d\udcd6",
    "color": "#3b82f6",
    "description": "Understand how tax thought changed during the Enlightenment.",
    "steps": 4
  },
  {
    "id": 5,
    "title": "The Early Modern Era",
    "icon": "\ud83d\udcd6",
    "color": "#8b5cf6",
    "description": "Understand major tax developments in the Early Modern Era.",
    "steps": 5
  },
  {
    "id": 6,
    "title": "Industrial Revolution and Industrial Age",
    "icon": "\ud83d\udcd6",
    "color": "#ec4899",
    "description": "Understand how industrialization transformed taxation.",
    "steps": 4
  },
  {
    "id": 7,
    "title": "The Contemporary Era",
    "icon": "\ud83d\udcd6",
    "color": "#06b6d4",
    "description": "Understand the main tax features of the contemporary era.",
    "steps": 5
  },
  {
    "id": 8,
    "title": "Big Themes in Tax Evolution",
    "icon": "\ud83d\udcd6",
    "color": "#84cc16",
    "description": "Understand the major themes that run across the whole history of taxation.",
    "steps": 6
  },
  {
    "id": 9,
    "title": "Compare the Eras",
    "icon": "\ud83d\udcd6",
    "color": "#f97316",
    "description": "Compare tax systems across historical periods and understand change over time.",
    "steps": 5
  },
  {
    "id": 10,
    "title": "Tax, Society, and Power",
    "icon": "\ud83d\udcd6",
    "color": "#6366f1",
    "description": "Understand how taxation interacts with power, legitimacy, religion, war, trade, and state-building.",
    "steps": 5
  },
  {
    "id": 11,
    "title": "Revision Power Pack",
    "icon": "\ud83d\udcd6",
    "color": "#14b8a6",
    "description": "Strengthen weak areas and improve long-term retention.",
    "steps": 4
  },
  {
    "id": 12,
    "title": "Grand Mastery Path",
    "icon": "\ud83d\udcd6",
    "color": "#a855f7",
    "description": "Consolidate the entire topic from origins to the modern era.",
    "steps": 5
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
