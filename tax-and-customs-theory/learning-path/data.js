const TOPICS = [
  {
    "id": 1,
    "title": "What Customs Is",
    "icon": "\ud83d\udcda",
    "color": "#ef4444",
    "description": "Understand the meaning of Customs, the course objectives, and the broad idea of customs administration.",
    "steps": 5
  },
  {
    "id": 2,
    "title": "Origins of Customs",
    "icon": "\ud83d\udcdc",
    "color": "#f59e0b",
    "description": "Understand how taxation and customs duties began in early societies.",
    "steps": 5
  },
  {
    "id": 3,
    "title": "Customs Across Continents",
    "icon": "\ud83c\udf0d",
    "color": "#10b981",
    "description": "Learn major customs milestones in Europe, North America, Asia, Africa, and East Africa.",
    "steps": 6
  },
  {
    "id": 4,
    "title": "East African Customs Union",
    "icon": "\ud83e\udd1d",
    "color": "#3b82f6",
    "description": "Understand East African customs features, integration goals, and reasons for collapse.",
    "steps": 5
  },
  {
    "id": 5,
    "title": "Global Customs Cooperation and WCO",
    "icon": "\ud83c\udfdb\ufe0f",
    "color": "#8b5cf6",
    "description": "Understand why international customs cooperation developed and how the WCO works.",
    "steps": 6
  },
  {
    "id": 6,
    "title": "Core Roles of Customs",
    "icon": "\u2699\ufe0f",
    "color": "#ec4899",
    "description": "Master the practical and legal roles of Customs in trade, revenue, safety, and statistics.",
    "steps": 6
  },
  {
    "id": 7,
    "title": "Facilitation, Protection, and Smuggling Control",
    "icon": "\ud83d\udec2",
    "color": "#06b6d4",
    "description": "Understand how Customs facilitates lawful trade while controlling risks and preventing smuggling.",
    "steps": 5
  },
  {
    "id": 8,
    "title": "Customs Control and Barriers",
    "icon": "\ud83c\udfaf",
    "color": "#84cc16",
    "description": "Understand customs control, customs barriers, and their economic and social logic.",
    "steps": 6
  },
  {
    "id": 9,
    "title": "Basic Control Tools and Customs Areas",
    "icon": "\ud83d\udd27",
    "color": "#f97316",
    "description": "Master the practical tools Customs uses to control movement of goods and conveyances.",
    "steps": 5
  },
  {
    "id": 10,
    "title": "Reports, Declarations, and Goods under Customs Control",
    "icon": "\ud83d\udccb",
    "color": "#6366f1",
    "description": "Understand report requirements, customs entry, and the meaning of goods under customs control.",
    "steps": 6
  },
  {
    "id": 11,
    "title": "Legal Framework of Customs Work",
    "icon": "\u2696\ufe0f",
    "color": "#14b8a6",
    "description": "Master the legal authorities, EACCMA schedules, and regulations that govern customs work.",
    "steps": 6
  },
  {
    "id": 12,
    "title": "Smart Customs and Final Mastery",
    "icon": "\ud83d\ude80",
    "color": "#a855f7",
    "description": "Understand the future of customs administrations and consolidate the whole course.",
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
