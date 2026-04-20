const QUESTIONS = [
  {
    id: 1,
    question: "What is the second step after review by the Commissioner?",
    options: [
      "Appeal to the wharf owner",
      "Appeal to the Tax Appeals Tribunal",
      "Appeal to the Directorate",
      "Appeal to the boarding station",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "Into what procedures may imported cargo generally be entered?",
    options: [
      "Only transfer or transit",
      "Only home consumption or warehousing",
      "Home consumption, warehousing, transhipment, transit, or export processing zones",
      "Only seizure or destruction",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "What is the basic rule in section 47?",
    options: [
      "Only prohibited goods may be warehoused",
      "Seized goods must always be warehoused",
      "Warehousing applies only to exports",
      "Dutiable goods may be warehoused",
    ],
    correct: 3
  },
  {
    id: 4,
    question: "What must a permanently appointed customs officer do on appointment?",
    options: [
      "Make and subscribe the declaration in the First Schedule",
      "File an appeal with the Tribunal",
      "License a warehouse",
      "Obtain a search warrant",
    ],
    correct: 0
  },
  {
    id: 5,
    question: "What does the Fifth Schedule contain?",
    options: [
      "Warrant of distress",
      "Exemptions Regime",
      "Rules on arrest and search",
      "Prohibited and restricted exports",
    ],
    correct: 1
  },
  {
    id: 6,
    question: "What is the purpose of anti-dumping duty?",
    options: [
      "To recover warehouse rent",
      "To regulate baggage",
      "To counter unfairly low-priced imports that injure domestic industry",
      "To reward exporters",
    ],
    correct: 2
  },
  {
    id: 7,
    question: "A candidate is asked: what is duty drawback? Which answer is correct?",
    options: [
      "Warehouse rent charged on imports",
      "A penalty for late payment",
      "A type of search power",
      "Refund of all or part of import duty paid on goods later exported or used in a prescribed manner",
    ],
    correct: 3
  },
  {
    id: 8,
    question: "Which option best answers the question: what are stores in export procedure?",
    options: [
      "Goods for use or sale on board aircraft, vessels, and trains in international transport",
      "All re-imported goods",
      "Any goods in a customs warehouse",
      "Only fuel in a pipeline",
    ],
    correct: 0
  },
  {
    id: 9,
    question: "A candidate is asked: what does the sixth schedule contain? Which answer is correct?",
    options: [
      "Valuation methods only",
      "Warrant of Distress",
      "Officer declaration",
      "Passenger allowance rules only",
    ],
    correct: 1
  },
  {
    id: 10,
    question: "Choose the best answer: Who may license an internal container depot?",
    options: [
      "The Directorate",
      "The station master",
      "The Council",
      "The Commissioner",
    ],
    correct: 3
  },
  {
    id: 11,
    question: "Which option best answers the question: what is the short title of the Act?",
    options: [
      "East African Customs Union Act, 2004",
      "Customs Management Code, 2004",
      "East African Community Customs Management Act, 2004",
      "East African Community Revenue Act, 2004",
    ],
    correct: 2
  },
  {
    id: 12,
    question: "Which of the following is the best answer to this EACCMA question: What official symbols does the Customs Union have under the Act?",
    options: [
      "A seal and a flag",
      "A warrant and charter",
      "A crest and anthem",
      "A logo and stamp",
    ],
    correct: 0
  },
  {
    id: 13,
    question: "What is transfer under the Act?",
    options: [
      "Movement of imports through one Partner State to a foreign destination",
      "Movement of goods from one Partner State directly or indirectly to another Partner State, excluding transit, transhipment, and bonded warehousing",
      "Movement of goods from a vessel to a vehicle for export",
      "Movement of baggage through the green channel",
    ],
    correct: 1
  },
  {
    id: 14,
    question: "A candidate is asked: what does the first schedule contain? Which answer is correct?",
    options: [
      "Warrant of distress",
      "Prohibited and restricted imports",
      "Declaration of Officer",
      "Exemptions regime",
    ],
    correct: 2
  },
  {
    id: 15,
    question: "Can imported goods be unloaded before being duly entered?",
    options: [
      "No, unless the proper officer gives written permission subject to conditions",
      "Yes, at any sufferance wharf",
      "Yes, if the goods are perishable",
      "Yes, if the owner is present",
    ],
    correct: 0
  },
  {
    id: 16,
    question: "What is the purpose of examining warehoused goods on delivery?",
    options: [
      "To assign passenger channels",
      "To appoint a new warehouse keeper",
      "To determine whether a search warrant is needed",
      "To confirm identity, condition, and compliance before they leave warehouse control",
    ],
    correct: 3
  },
  {
    id: 17,
    question: "What is the main difference between review and appeal under the Act?",
    options: [
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
      "There is no difference",
      "Review is judicial and appeal is administrative",
      "Appeal comes before review",
    ],
    correct: 0
  },
  {
    id: 18,
    question: "Which of the following is the best answer to this EACCMA question: Are all exports subject to export duty?",
    options: [
      "Only warehoused goods",
      "No, only goods specified as liable to export duty",
      "Yes, every export",
      "Only transit goods",
    ],
    correct: 1
  },
  {
    id: 19,
    question: "A candidate is asked: what is the first step in the appeal structure under the act? Which answer is correct?",
    options: [
      "Appeal directly to the court",
      "Application to the warehouse keeper",
      "Application for review to the Commissioner",
      "Appeal directly to the Council",
    ],
    correct: 2
  },
  {
    id: 20,
    question: "A candidate is asked: to whom does the act apply? Which answer is correct?",
    options: [
      "Only customs airports",
      "Only the East African Community Secretariat",
      "Only designated ports",
      "The Partner States",
    ],
    correct: 3
  },
  {
    id: 21,
    question: "Which of the following is the best answer to this EACCMA question: What special rule applies when searching a female?",
    options: [
      "A male officer may search if two witnesses are present",
      "A female shall not be searched except by a female officer",
      "No female may be searched at all",
      "She may only be searched by police",
    ],
    correct: 1
  },
  {
    id: 22,
    question: "Select the best definition of the second step after review by the commissioner.",
    options: [
      "Appeal to the Tax Appeals Tribunal",
      "Appeal to the boarding station",
      "Appeal to the Directorate",
      "Appeal to the wharf owner",
    ],
    correct: 0
  },
  {
    id: 23,
    question: "What is transit?",
    options: [
      "Loading export goods onto a vessel",
      "Transfer between Partner States only",
      "Movement of goods imported from a foreign place through the territory of one or more Partner States to a foreign destination",
      "Removal of seized goods",
    ],
    correct: 2
  },
  {
    id: 24,
    question: "Which statement correctly reflects the Act: can aiders and abettors be liable for customs offences?",
    options: [
      "No, only principal offenders can be liable",
      "Only in import cases",
      "Only if the Commissioner agrees",
      "Yes",
    ],
    correct: 3
  },
  {
    id: 25,
    question: "Which of the following is the best answer to this EACCMA question: How long before arrival from a foreign port must a vessel normally report?",
    options: [
      "Not less than 24 hours before arrival",
      "Immediately after docking",
      "At the time of export",
      "Within 21 days after discharge",
    ],
    correct: 0
  },
  {
    id: 26,
    question: "What records must an internal container depot owner keep available for examination?",
    options: [
      "Only passenger lists",
      "Records and accounts relating to goods and operations",
      "Only payroll records",
      "Only police reports",
    ],
    correct: 1
  },
  {
    id: 27,
    question: "What is the function of a search warrant under section 158?",
    options: [
      "To appoint customs areas",
      "To issue entry outwards",
      "To grant tariff treatment",
      "To authorize entry and search of premises and seizure of relevant goods or documents",
    ],
    correct: 3
  },
  {
    id: 28,
    question: "Select the best definition of ad valorem duty.",
    options: [
      "Duty based only on quantity",
      "Duty based only on origin",
      "Duty based on the value of the goods",
      "Duty based only on weight",
    ],
    correct: 2
  },
  {
    id: 29,
    question: "Which of the following is the best answer to this EACCMA question: Which Part deals with appeals?",
    options: [
      "Part XXI",
      "Part XX",
      "Part XVIII",
      "Part XIX",
    ],
    correct: 1
  },
  {
    id: 30,
    question: "Select the best definition of forfeiture.",
    options: [
      "The legal loss of goods or things to the state because of an offence or unlawful status",
      "A temporary storage fee",
      "A valuation method",
      "A passenger channel",
    ],
    correct: 0
  },
  {
    id: 31,
    question: "A candidate is asked: what is seizure? Which answer is correct?",
    options: [
      "A warehouse licence",
      "A tariff preference",
      "A customs exemption",
      "The act of taking possession of goods or things liable to forfeiture",
    ],
    correct: 3
  },
  {
    id: 32,
    question: "Which of the following is the best answer to this EACCMA question: What does the Fourth Schedule contain?",
    options: [
      "Warrant of distress",
      "General penalties for offences",
      "Determination of Value of Imported Goods Liable to ad Valorem Import Duty",
      "Exemptions regime",
    ],
    correct: 2
  },
  {
    id: 33,
    question: "Which statement correctly reflects the Act: can an officer stop and search a vehicle suspected of carrying uncustomed goods?",
    options: [
      "Only if the goods are exports",
      "Only after the goods are warehoused",
      "No, only police may do so",
      "Yes, if the officer has reasonable grounds to believe it carries such goods",
    ],
    correct: 3
  },
  {
    id: 34,
    question: "A candidate is asked: what is ad valorem duty? Which answer is correct?",
    options: [
      "Duty based only on weight",
      "Duty based only on origin",
      "Duty based on the value of the goods",
      "Duty based only on quantity",
    ],
    correct: 2
  },
  {
    id: 35,
    question: "What is a key distinction between a Government warehouse and a bonded warehouse?",
    options: [
      "Government warehouses are only for exports",
      "A Government warehouse is government-provided and approved; a bonded warehouse is licensed and operated by a warehouse keeper",
      "There is no distinction",
      "Bonded warehouses are only for postal articles",
    ],
    correct: 1
  },
  {
    id: 36,
    question: "Select the best definition of the basic rule in section 47.",
    options: [
      "Dutiable goods may be warehoused",
      "Warehousing applies only to exports",
      "Seized goods must always be warehoused",
      "Only prohibited goods may be warehoused",
    ],
    correct: 0
  },
  {
    id: 37,
    question: "Can warehoused goods be delivered as stores?",
    options: [
      "Only if passenger baggage",
      "Only after condemnation",
      "No, never",
      "Yes, as provided by the Act",
    ],
    correct: 3
  },
  {
    id: 38,
    question: "Select the best definition of a customs area.",
    options: [
      "Any airport in a Partner State",
      "Any private depot",
      "A place appointed by the Commissioner for carrying out customs operations",
      "Any warehouse near a border",
    ],
    correct: 2
  },
  {
    id: 39,
    question: "A candidate is asked: which part of the act specifically lists enforcement powers of officers to prevent smuggling? Which answer is correct?",
    options: [
      "Part IX",
      "Part XII",
      "Part XIV",
      "Part XX",
    ],
    correct: 1
  },
  {
    id: 40,
    question: "What is the main difference between transit and transhipment?",
    options: [
      "Transit moves through territory to a foreign destination; transhipment transfers from one arriving craft to another departing craft",
      "Transit is passenger clearance and transhipment is appeal",
      "Transit is warehousing and transhipment is export duty",
      "There is no legal difference",
    ],
    correct: 0
  },
  {
    id: 41,
    question: "What is the broad purpose of section 119 on duty-free imports?",
    options: [
      "To classify goods as stores",
      "To make goods imported duty free liable to duty if disposed of contrary to exemption conditions",
      "To grant all importers a rebate",
      "To abolish import duty",
    ],
    correct: 1
  },
  {
    id: 42,
    question: "Which of the following is the best answer to this EACCMA question: Is pretending to be a customs officer an offence?",
    options: [
      "Yes",
      "No, unless goods are seized",
      "Only if done at a port",
      "Only if the person wears a uniform",
    ],
    correct: 0
  },
  {
    id: 43,
    question: "In exam revision, which statement is most accurate? When must an aircraft report be made when destined for a port in a Partner State?",
    options: [
      "After the vessel report is made",
      "24 hours after landing",
      "When baggage is examined",
      "Immediately after take-off from the foreign port",
    ],
    correct: 3
  },
  {
    id: 44,
    question: "Which option best answers the question: where are prohibited and restricted exports generally listed?",
    options: [
      "The Sixth Schedule",
      "The Fourth Schedule",
      "The Third Schedule",
      "The Second Schedule",
    ],
    correct: 2
  },
  {
    id: 45,
    question: "Which of the following is the best answer to this EACCMA question: What does the Sixth Schedule contain?",
    options: [
      "Valuation methods only",
      "Officer declaration",
      "Passenger allowance rules only",
      "Warrant of Distress",
    ],
    correct: 3
  },
  {
    id: 46,
    question: "Which option best answers the question: can an officer stop and search a vehicle suspected of carrying uncustomed goods?",
    options: [
      "Only after the goods are warehoused",
      "No, only police may do so",
      "Yes, if the officer has reasonable grounds to believe it carries such goods",
      "Only if the goods are exports",
    ],
    correct: 2
  },
  {
    id: 47,
    question: "Which option best answers the question: which Part deals with offences, penalties, forfeitures, and seizures?",
    options: [
      "Part XI",
      "Part XVII",
      "Part XV",
      "Part XX",
    ],
    correct: 1
  },
  {
    id: 48,
    question: "What is the main effect of goods being subject to customs control?",
    options: [
      "They may be examined by any officer and cannot be interfered with except by authority",
      "They become duty free",
      "They automatically become warehoused",
      "They cease to require entry",
    ],
    correct: 0
  },
  {
    id: 49,
    question: "Why are export goods not to be discharged in Partner States after entry for export?",
    options: [
      "To exempt them from export duty",
      "To convert them into transit goods automatically",
      "To preserve integrity of the export procedure and prevent diversion",
      "To classify them as passenger baggage",
    ],
    correct: 2
  },
  {
    id: 50,
    question: "How are imported or exported goods through a pipeline controlled?",
    options: [
      "They are controlled only by the operator's internal policy",
      "They are exempt from reporting",
      "They are treated as postal articles",
      "Their nature and quantities must be recorded and reported as directed by the Commissioner",
    ],
    correct: 3
  },
];
