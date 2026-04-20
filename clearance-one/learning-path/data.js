const TOPICS = [
  {
    id: 1,
    title: "Prohibited & Restricted Goods",
    icon: "🚫",
    color: "#ef4444",
    description: "Learn about goods that are prohibited or restricted from import/export",
    steps: 6
  },
  {
    id: 2,
    title: "Import Procedures & Terms",
    icon: "📋",
    color: "#f59e0b",
    description: "Master core import procedures and Customs terminology",
    steps: 6
  },
  {
    id: 3,
    title: "Arrival & Reporting of Cargo",
    icon: "🚢",
    color: "#10b981",
    description: "Understand cargo arrival procedures by land, sea, and air",
    steps: 6
  },
  {
    id: 4,
    title: "Rummaging & Search",
    icon: "🔍",
    color: "#3b82f6",
    description: "Learn about search powers and rummaging procedures",
    steps: 6
  },
  {
    id: 5,
    title: "Clearance of Vessels & Aircraft",
    icon: "✈️",
    color: "#8b5cf6",
    description: "Master vessel and aircraft clearance requirements",
    steps: 6
  },
  {
    id: 6,
    title: "Amendments & Coasting",
    icon: "📝",
    color: "#ec4899",
    description: "Handle manifest amendments, short/excess landed cargo, and coasting",
    steps: 6
  },
  {
    id: 7,
    title: "Entry of Goods & Documents",
    icon: "📄",
    color: "#06b6d4",
    description: "Learn entry procedures and supporting documentation",
    steps: 6
  },
  {
    id: 8,
    title: "Transit Shed & Warehousing",
    icon: "🏭",
    color: "#84cc16",
    description: "Understand transit sheds, regimes, and warehousing",
    steps: 6
  },
  {
    id: 9,
    title: "Partner Government Agencies",
    icon: "🏛️",
    color: "#f97316",
    description: "Learn about PGAs and their roles in clearance",
    steps: 6
  },
  {
    id: 10,
    title: "Sources of Customs Law & EAC",
    icon: "⚖️",
    color: "#6366f1",
    description: "Master the legal framework and EAC structure",
    steps: 6
  },
  {
    id: 11,
    title: "Customs Instruments",
    icon: "🌍",
    color: "#14b8a6",
    description: "Understand RKC, WTO TFA, and SAFE Framework",
    steps: 6
  },
  {
    id: 12,
    title: "Tax Assessment & CRSP",
    icon: "💰",
    color: "#a855f7",
    description: "Learn tax calculation, CRSP method, and warehouse rent",
    steps: 6
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
