const TOPICS = [
  {
    "id": 1,
    "title": "What International Trade Is",
    "icon": "\ud83d\udcd6",
    "color": "#ef4444",
    "description": "Understand the meaning of international trade and its most important core terms.",
    "steps": 5
  },
  {
    "id": 2,
    "title": "Why Countries Trade",
    "icon": "\ud83d\udcd6",
    "color": "#f59e0b",
    "description": "Understand why international trade occurs and what benefits and problems it creates.",
    "steps": 5
  },
  {
    "id": 3,
    "title": "Types of Trade and Trade Structure",
    "icon": "\ud83d\udcd6",
    "color": "#10b981",
    "description": "Understand the main types and classifications of international trade.",
    "steps": 4
  },
  {
    "id": 4,
    "title": "Players in International Trade",
    "icon": "\ud83d\udcd6",
    "color": "#3b82f6",
    "description": "Identify all major players in an international trade transaction and understand their roles.",
    "steps": 5
  },
  {
    "id": 5,
    "title": "Steps in International Trade",
    "icon": "\ud83d\udcd6",
    "color": "#8b5cf6",
    "description": "Understand the main stages in an international trade transaction.",
    "steps": 5
  },
  {
    "id": 6,
    "title": "Documents Used in International Trade",
    "icon": "\ud83d\udcd6",
    "color": "#ec4899",
    "description": "Master the main document categories and important individual documents used in trade.",
    "steps": 6
  },
  {
    "id": 7,
    "title": "Methods of Payment in International Trade",
    "icon": "\ud83d\udcd6",
    "color": "#06b6d4",
    "description": "Understand the major payment methods and the risks they create for exporter and importer.",
    "steps": 5
  },
  {
    "id": 8,
    "title": "Modes of Transport and Logistics Choice",
    "icon": "\ud83d\udcd6",
    "color": "#84cc16",
    "description": "Understand transport modes and how to choose among them.",
    "steps": 5
  },
  {
    "id": 9,
    "title": "Incoterms 2020",
    "icon": "\ud83d\udcd6",
    "color": "#f97316",
    "description": "Understand what Incoterms do, what they do not do, and how the 11 rules are organized.",
    "steps": 5
  },
  {
    "id": 10,
    "title": "The 11 Incoterms in Practice",
    "icon": "\ud83d\udcd6",
    "color": "#6366f1",
    "description": "Understand the meaning and basic seller-buyer responsibility split under each Incoterm.",
    "steps": 5
  },
  {
    "id": 11,
    "title": "Kenya-EU and Kenya-UK EPAs",
    "icon": "\ud83d\udcd6",
    "color": "#14b8a6",
    "description": "Understand the two EPAs, their objectives, implementation, challenges, and mitigation measures.",
    "steps": 5
  },
  {
    "id": 12,
    "title": "Grand Mastery Path",
    "icon": "\ud83d\udcd6",
    "color": "#a855f7",
    "description": "Bring the full topic together from terms to transaction flow, documents, payments, logistics, Incoterms, and EPAs.",
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
