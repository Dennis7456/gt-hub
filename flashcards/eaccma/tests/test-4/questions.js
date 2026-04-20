const QUESTIONS = [
  {
    id: 1,
    question: "What is the function of a search warrant under section 158?",
    options: [
      "To grant tariff treatment",
      "To authorize entry and search of premises and seizure of relevant goods or documents",
      "To appoint customs areas",
      "To issue entry outwards",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "Which of the following is the best answer to this EACCMA question: Which Part deals with offences, penalties, forfeitures, and seizures?",
    options: [
      "Part XI",
      "Part XV",
      "Part XVII",
      "Part XX",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "A candidate is asked: who prescribes the working days and hours of general attendance of officers? Which answer is correct?",
    options: [
      "The Commissioner",
      "The warehouse keeper",
      "The Directorate",
      "The Council",
    ],
    correct: 0
  },
  {
    id: 4,
    question: "In exam revision, which statement is most accurate? What are uncustomed goods?",
    options: [
      "Only warehoused goods",
      "Only seized goods",
      "Only prohibited goods",
      "Dutiable goods on which full duties have not been paid and goods dealt with contrary to customs law",
    ],
    correct: 3
  },
  {
    id: 5,
    question: "Which of the following is the best answer to this EACCMA question: What does the Fourth Schedule contain?",
    options: [
      "General penalties for offences",
      "Warrant of distress",
      "Determination of Value of Imported Goods Liable to ad Valorem Import Duty",
      "Exemptions regime",
    ],
    correct: 2
  },
  {
    id: 6,
    question: "Choose the best answer: Who uses the red channel?",
    options: [
      "Only transit drivers",
      "Passengers carrying dutiable or restricted goods and crew members",
      "Only warehouse keepers",
      "Only diplomats",
    ],
    correct: 1
  },
  {
    id: 7,
    question: "In exam revision, which statement is most accurate? What document is commonly required to support Community tariff treatment?",
    options: [
      "A warrant of distress",
      "A warehouse licence",
      "A search warrant",
      "A Certificate of Origin",
    ],
    correct: 3
  },
  {
    id: 8,
    question: "A candidate is asked: who appoints ports and customs airports? Which answer is correct?",
    options: [
      "The Council",
      "The Commissioner",
      "The proper officer",
      "The Director General",
    ],
    correct: 0
  },
  {
    id: 9,
    question: "What happens if goods remain unentered after the allowed period?",
    options: [
      "They become duty free",
      "They become stores",
      "They may be removed by or at the expense of the agent to a Customs warehouse",
      "They are automatically sold",
    ],
    correct: 2
  },
  {
    id: 10,
    question: "What is the main difference between review and appeal under the Act?",
    options: [
      "There is no difference",
      "Appeal comes before review",
      "Review is judicial and appeal is administrative",
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
    ],
    correct: 3
  },
  {
    id: 11,
    question: "A candidate is asked: where are prohibited and restricted imports generally listed? Which answer is correct?",
    options: [
      "The Fourth Schedule",
      "The Second Schedule",
      "The Third Schedule",
      "The Fifth Schedule",
    ],
    correct: 1
  },
  {
    id: 12,
    question: "In exam revision, which statement is most accurate? Which Part deals with appeals?",
    options: [
      "Part XX",
      "Part XXI",
      "Part XVIII",
      "Part XIX",
    ],
    correct: 0
  },
  {
    id: 13,
    question: "A candidate is asked: what does the sixth schedule contain? Which answer is correct?",
    options: [
      "Passenger allowance rules only",
      "Valuation methods only",
      "Officer declaration",
      "Warrant of Distress",
    ],
    correct: 3
  },
  {
    id: 14,
    question: "A candidate is asked: what is the second step after review by the commissioner? Which answer is correct?",
    options: [
      "Appeal to the Tax Appeals Tribunal",
      "Appeal to the wharf owner",
      "Appeal to the boarding station",
      "Appeal to the Directorate",
    ],
    correct: 0
  },
  {
    id: 15,
    question: "What is an erroneous refund?",
    options: [
      "A lawful drawback claim",
      "A temporary import bond",
      "A case where duty was wrongly refunded and Customs may recover it",
      "A failure to warehouse goods",
    ],
    correct: 2
  },
  {
    id: 16,
    question: "In exam revision, which statement is most accurate? Which body initiates customs and related trade policies for the Community?",
    options: [
      "The warehouse keeper",
      "The Directorate of Customs",
      "The Post Office",
      "The Tax Appeals Tribunal",
    ],
    correct: 1
  },
  {
    id: 17,
    question: "Which of the following is the best answer to this EACCMA question: What does the First Schedule contain?",
    options: [
      "Prohibited and restricted imports",
      "Exemptions regime",
      "Declaration of Officer",
      "Warrant of distress",
    ],
    correct: 2
  },
  {
    id: 18,
    question: "What does termination of transit procedure mean?",
    options: [
      "Lawful conclusion of the transit movement once the goods reach the approved destination or are otherwise properly accounted for",
      "Seizure of all transit goods",
      "Automatic conversion into home consumption",
      "Issue of entry outwards",
    ],
    correct: 0
  },
  {
    id: 19,
    question: "A candidate is asked: which part of the act specifically lists enforcement powers of officers to prevent smuggling? Which answer is correct?",
    options: [
      "Part IX",
      "Part XIV",
      "Part XX",
      "Part XII",
    ],
    correct: 3
  },
  {
    id: 20,
    question: "Which of the following is the best answer to this EACCMA question: When must an aircraft report be made when destined for a port in a Partner State?",
    options: [
      "24 hours after landing",
      "Immediately after take-off from the foreign port",
      "After the vessel report is made",
      "When baggage is examined",
    ],
    correct: 1
  },
  {
    id: 21,
    question: "Which option best answers the question: what is the short title of the Act?",
    options: [
      "East African Community Customs Management Act, 2004",
      "Customs Management Code, 2004",
      "East African Customs Union Act, 2004",
      "East African Community Revenue Act, 2004",
    ],
    correct: 0
  },
  {
    id: 22,
    question: "Which of the following is the best answer to this EACCMA question: To whom does the Act apply?",
    options: [
      "Only designated ports",
      "Only customs airports",
      "The Partner States",
      "Only the East African Community Secretariat",
    ],
    correct: 2
  },
  {
    id: 23,
    question: "What is the purpose of countervailing duty?",
    options: [
      "To license customs agents",
      "To manage transit sheds",
      "To settle appeals",
      "To offset subsidies bestowed directly or indirectly on manufacture, production, or export",
    ],
    correct: 3
  },
  {
    id: 24,
    question: "What is the purpose of examining warehoused goods on delivery?",
    options: [
      "To determine whether a search warrant is needed",
      "To confirm identity, condition, and compliance before they leave warehouse control",
      "To assign passenger channels",
      "To appoint a new warehouse keeper",
    ],
    correct: 1
  },
  {
    id: 25,
    question: "What is the broad purpose of section 119 on duty-free imports?",
    options: [
      "To abolish import duty",
      "To classify goods as stores",
      "To make goods imported duty free liable to duty if disposed of contrary to exemption conditions",
      "To grant all importers a rebate",
    ],
    correct: 2
  },
  {
    id: 26,
    question: "Select the best definition of forfeiture.",
    options: [
      "A valuation method",
      "A passenger channel",
      "A temporary storage fee",
      "The legal loss of goods or things to the state because of an offence or unlawful status",
    ],
    correct: 3
  },
  {
    id: 27,
    question: "Why are Customs seals protected by criminal sanction?",
    options: [
      "They are decorative only",
      "They preserve integrity of customs control over goods or conveyances",
      "They replace entry documents",
      "They determine tariff rates",
    ],
    correct: 1
  },
  {
    id: 28,
    question: "What is a key distinction between a Government warehouse and a bonded warehouse?",
    options: [
      "A Government warehouse is government-provided and approved; a bonded warehouse is licensed and operated by a warehouse keeper",
      "Government warehouses are only for exports",
      "Bonded warehouses are only for postal articles",
      "There is no distinction",
    ],
    correct: 0
  },
  {
    id: 29,
    question: "In exam revision, which statement is most accurate? What special rule applies when searching a female?",
    options: [
      "She may only be searched by police",
      "A female shall not be searched except by a female officer",
      "A male officer may search if two witnesses are present",
      "No female may be searched at all",
    ],
    correct: 1
  },
  {
    id: 30,
    question: "Which of the following is the best answer to this EACCMA question: Which Part of the Act specifically lists enforcement powers of officers to prevent smuggling?",
    options: [
      "Part XII",
      "Part IX",
      "Part XX",
      "Part XIV",
    ],
    correct: 0
  },
  {
    id: 31,
    question: "Which option best answers the question: what does the Second Schedule contain?",
    options: [
      "Prohibited and Restricted Exports Generally",
      "Determination of Value of Imported Goods",
      "Prohibited and Restricted Imports Generally",
      "Warrant of distress",
    ],
    correct: 2
  },
  {
    id: 32,
    question: "A candidate is asked: what does the first schedule contain? Which answer is correct?",
    options: [
      "Exemptions regime",
      "Warrant of distress",
      "Prohibited and restricted imports",
      "Declaration of Officer",
    ],
    correct: 3
  },
  {
    id: 33,
    question: "In exam revision, which statement is most accurate? What is a customs area?",
    options: [
      "Any warehouse near a border",
      "A place appointed by the Commissioner for carrying out customs operations",
      "Any private depot",
      "Any airport in a Partner State",
    ],
    correct: 1
  },
  {
    id: 34,
    question: "In exam revision, which statement is most accurate? Are all exports subject to export duty?",
    options: [
      "Only transit goods",
      "Yes, every export",
      "No, only goods specified as liable to export duty",
      "Only warehoused goods",
    ],
    correct: 2
  },
  {
    id: 35,
    question: "Which option best answers the question: what are stores in export procedure?",
    options: [
      "Only fuel in a pipeline",
      "Any goods in a customs warehouse",
      "All re-imported goods",
      "Goods for use or sale on board aircraft, vessels, and trains in international transport",
    ],
    correct: 3
  },
  {
    id: 36,
    question: "A candidate is asked: what is the first step in the appeal structure under the act? Which answer is correct?",
    options: [
      "Application for review to the Commissioner",
      "Application to the warehouse keeper",
      "Appeal directly to the court",
      "Appeal directly to the Council",
    ],
    correct: 0
  },
  {
    id: 37,
    question: "Select the best definition of smuggling.",
    options: [
      "Any use of an agent",
      "Any warehousing of goods",
      "Any delayed customs entry",
      "Importing, exporting, transferring, or moving goods with intent to defraud revenue or evade controls",
    ],
    correct: 3
  },
  {
    id: 38,
    question: "Which option best answers the question: what is the main difference between transit and transhipment?",
    options: [
      "Transit moves through territory to a foreign destination; transhipment transfers from one arriving craft to another departing craft",
      "There is no legal difference",
      "Transit is passenger clearance and transhipment is appeal",
      "Transit is warehousing and transhipment is export duty",
    ],
    correct: 0
  },
  {
    id: 39,
    question: "In exam revision, which statement is most accurate? What does restoration of seizures mean?",
    options: [
      "The seizure converts into warehousing",
      "Duty is cancelled automatically",
      "Seized goods or things may be returned in accordance with the Act",
      "The goods become prohibited",
    ],
    correct: 2
  },
  {
    id: 40,
    question: "Why is personal baggage separately treated in export procedure?",
    options: [
      "Because baggage is always stores",
      "Because passenger-carried goods require customs treatment distinct from ordinary cargo",
      "Because only imports involve baggage",
      "Because baggage is never under customs control",
    ],
    correct: 1
  },
  {
    id: 41,
    question: "A candidate is asked: why may warehoused goods be moved from one warehouse to another only under customs control? Which answer is correct?",
    options: [
      "Because goods lose owner identity in a warehouse",
      "Because only government warehouses can store dutiable goods",
      "Because transfer is the same as transit",
      "Because revenue and custody of the goods must be protected throughout the movement",
    ],
    correct: 3
  },
  {
    id: 42,
    question: "In exam revision, which statement is most accurate? What does allowance for tare relate to?",
    options: [
      "A search power",
      "Deduction for the weight of packaging or container in appropriate cases",
      "A tariff preference under COMESA",
      "A warehouse penalty",
    ],
    correct: 1
  },
  {
    id: 43,
    question: "Choose the best answer: Who may require a bond before goods are warehoused?",
    options: [
      "The warehouse keeper",
      "The Post Office",
      "The proper officer",
      "The Tribunal",
    ],
    correct: 2
  },
  {
    id: 44,
    question: "Which of the following is the best answer to this EACCMA question: What happens if goods remain unentered after the allowed period?",
    options: [
      "They may be removed by or at the expense of the agent to a Customs warehouse",
      "They become duty free",
      "They become stores",
      "They are automatically sold",
    ],
    correct: 0
  },
  {
    id: 45,
    question: "Which option best answers the question: what does the period of warehousing address?",
    options: [
      "When officers take lunch breaks",
      "How long a vessel may remain at boarding station",
      "How long appeals last",
      "How long goods may remain warehoused and what may happen after that period, including sale",
    ],
    correct: 3
  },
  {
    id: 46,
    question: "Select the best definition of the main effect of goods being subject to customs control.",
    options: [
      "They become duty free",
      "They automatically become warehoused",
      "They may be examined by any officer and cannot be interfered with except by authority",
      "They cease to require entry",
    ],
    correct: 2
  },
  {
    id: 47,
    question: "Select the best definition of the main difference between review and appeal under the act.",
    options: [
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
      "Appeal comes before review",
      "There is no difference",
      "Review is judicial and appeal is administrative",
    ],
    correct: 0
  },
  {
    id: 48,
    question: "Which of the following is the best answer to this EACCMA question: How far back may the proper officer require books and documents under section 159?",
    options: [
      "Ten years only",
      "Up to five years immediately preceding the demand",
      "No time limit is mentioned",
      "One year only",
    ],
    correct: 1
  },
  {
    id: 49,
    question: "Which option best answers the question: what is the main effect of goods being subject to customs control?",
    options: [
      "They become duty free",
      "They cease to require entry",
      "They automatically become warehoused",
      "They may be examined by any officer and cannot be interfered with except by authority",
    ],
    correct: 3
  },
  {
    id: 50,
    question: "Which of the following is the best answer to this EACCMA question: Why are Customs seals protected by criminal sanction?",
    options: [
      "They preserve integrity of customs control over goods or conveyances",
      "They replace entry documents",
      "They are decorative only",
      "They determine tariff rates",
    ],
    correct: 0
  },
];
