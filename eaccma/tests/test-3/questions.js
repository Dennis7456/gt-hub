const QUESTIONS = [
  {
    id: 1,
    question: "What are uncustomed goods?",
    options: [
      "Only warehoused goods",
      "Dutiable goods on which full duties have not been paid and goods dealt with contrary to customs law",
      "Only seized goods",
      "Only prohibited goods",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "What is forfeiture?",
    options: [
      "A temporary storage fee",
      "A passenger channel",
      "The legal loss of goods or things to the state because of an offence or unlawful status",
      "A valuation method",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "What is the first step in the appeal structure under the Act?",
    options: [
      "Appeal directly to the Council",
      "Application to the warehouse keeper",
      "Appeal directly to the court",
      "Application for review to the Commissioner",
    ],
    correct: 3
  },
  {
    id: 4,
    question: "When must an aircraft report be made when destined for a port in a Partner State?",
    options: [
      "Immediately after take-off from the foreign port",
      "24 hours after landing",
      "When baggage is examined",
      "After the vessel report is made",
    ],
    correct: 0
  },
  {
    id: 5,
    question: "What is the second step after review by the Commissioner?",
    options: [
      "Appeal to the boarding station",
      "Appeal to the Tax Appeals Tribunal",
      "Appeal to the Directorate",
      "Appeal to the wharf owner",
    ],
    correct: 1
  },
  {
    id: 6,
    question: "What does the First Schedule contain?",
    options: [
      "Declaration of Officer",
      "Exemptions regime",
      "Warrant of distress",
      "Prohibited and restricted imports",
    ],
    correct: 0
  },
  {
    id: 7,
    question: "Who appoints customs areas, boarding stations, and transit sheds?",
    options: [
      "The wharf owner",
      "The Council",
      "The Tribunal",
      "The Commissioner",
    ],
    correct: 3
  },
  {
    id: 8,
    question: "Which option best answers the question: which Part deals with offences, penalties, forfeitures, and seizures?",
    options: [
      "Part XI",
      "Part XV",
      "Part XVII",
      "Part XX",
    ],
    correct: 2
  },
  {
    id: 9,
    question: "Which of the following is the best answer to this EACCMA question: Are all exports subject to export duty?",
    options: [
      "No, only goods specified as liable to export duty",
      "Only warehoused goods",
      "Only transit goods",
      "Yes, every export",
    ],
    correct: 0
  },
  {
    id: 10,
    question: "In exam revision, which statement is most accurate? What is the main purpose of warehousing under the Act?",
    options: [
      "To convert imports into exports",
      "To keep dutiable goods under customs control while duty payment or final disposal is deferred",
      "To exempt all goods from duty",
      "To replace valuation",
    ],
    correct: 1
  },
  {
    id: 11,
    question: "Which of the following is the best answer to this EACCMA question: Which body initiates customs and related trade policies for the Community?",
    options: [
      "The warehouse keeper",
      "The Tax Appeals Tribunal",
      "The Post Office",
      "The Directorate of Customs",
    ],
    correct: 3
  },
  {
    id: 12,
    question: "A candidate is asked: to whom does the act apply? Which answer is correct?",
    options: [
      "Only customs airports",
      "Only the East African Community Secretariat",
      "The Partner States",
      "Only designated ports",
    ],
    correct: 2
  },
  {
    id: 13,
    question: "Which of the following is the best answer to this EACCMA question: What document is commonly required to support Community tariff treatment?",
    options: [
      "A search warrant",
      "A warehouse licence",
      "A warrant of distress",
      "A Certificate of Origin",
    ],
    correct: 3
  },
  {
    id: 14,
    question: "What does termination of transit procedure mean?",
    options: [
      "Seizure of all transit goods",
      "Lawful conclusion of the transit movement once the goods reach the approved destination or are otherwise properly accounted for",
      "Issue of entry outwards",
      "Automatic conversion into home consumption",
    ],
    correct: 1
  },
  {
    id: 15,
    question: "What is the significance of section 61 on unlawfully taking warehoused goods?",
    options: [
      "It penalizes unlawful taking or interference because warehoused goods remain under customs control",
      "It abolishes all warehousing",
      "It creates drawback claims",
      "It concerns only transit sheds",
    ],
    correct: 0
  },
  {
    id: 16,
    question: "Which of the following is the best answer to this EACCMA question: Which Part deals with appeals?",
    options: [
      "Part XVIII",
      "Part XIX",
      "Part XX",
      "Part XXI",
    ],
    correct: 2
  },
  {
    id: 17,
    question: "A candidate is asked: what does the sixth schedule contain? Which answer is correct?",
    options: [
      "Officer declaration",
      "Valuation methods only",
      "Passenger allowance rules only",
      "Warrant of Distress",
    ],
    correct: 3
  },
  {
    id: 18,
    question: "Select the best definition of the main purpose of warehousing under the act.",
    options: [
      "To keep dutiable goods under customs control while duty payment or final disposal is deferred",
      "To replace valuation",
      "To convert imports into exports",
      "To exempt all goods from duty",
    ],
    correct: 0
  },
  {
    id: 19,
    question: "Which of the following is the best answer to this EACCMA question: What does the First Schedule contain?",
    options: [
      "Exemptions regime",
      "Prohibited and restricted imports",
      "Declaration of Officer",
      "Warrant of distress",
    ],
    correct: 2
  },
  {
    id: 20,
    question: "A candidate is asked: why is access to a warehouse controlled? Which answer is correct?",
    options: [
      "To provide tariff treatment",
      "To protect goods under customs control and prevent loss or interference",
      "To regulate appeals",
      "To create a customs airport",
    ],
    correct: 1
  },
  {
    id: 21,
    question: "In exam revision, which statement is most accurate? What must a permanently appointed customs officer do on appointment?",
    options: [
      "File an appeal with the Tribunal",
      "Obtain a search warrant",
      "License a warehouse",
      "Make and subscribe the declaration in the First Schedule",
    ],
    correct: 3
  },
  {
    id: 22,
    question: "What is the purpose of countervailing duty?",
    options: [
      "To settle appeals",
      "To offset subsidies bestowed directly or indirectly on manufacture, production, or export",
      "To manage transit sheds",
      "To license customs agents",
    ],
    correct: 1
  },
  {
    id: 23,
    question: "In exam revision, which statement is most accurate? When must an aircraft report be made when destined for a port in a Partner State?",
    options: [
      "Immediately after take-off from the foreign port",
      "After the vessel report is made",
      "When baggage is examined",
      "24 hours after landing",
    ],
    correct: 0
  },
  {
    id: 24,
    question: "What is the broad purpose of section 119 on duty-free imports?",
    options: [
      "To classify goods as stores",
      "To abolish import duty",
      "To make goods imported duty free liable to duty if disposed of contrary to exemption conditions",
      "To grant all importers a rebate",
    ],
    correct: 2
  },
  {
    id: 25,
    question: "What is transhipment?",
    options: [
      "Removal from one bonded warehouse to another",
      "Delivery of goods for home consumption",
      "Movement of goods through a Partner State to a foreign destination",
      "Transfer of goods from an arriving craft from a foreign place to another craft departing to a foreign destination",
    ],
    correct: 3
  },
  {
    id: 26,
    question: "A candidate is asked: into what procedures may imported cargo generally be entered? Which answer is correct?",
    options: [
      "Only transfer or transit",
      "Only seizure or destruction",
      "Home consumption, warehousing, transhipment, transit, or export processing zones",
      "Only home consumption or warehousing",
    ],
    correct: 2
  },
  {
    id: 27,
    question: "What is the main difference between review and appeal under the Act?",
    options: [
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
      "Review is judicial and appeal is administrative",
      "Appeal comes before review",
      "There is no difference",
    ],
    correct: 0
  },
  {
    id: 28,
    question: "A candidate is asked: what does the fourth schedule contain? Which answer is correct?",
    options: [
      "General penalties for offences",
      "Determination of Value of Imported Goods Liable to ad Valorem Import Duty",
      "Exemptions regime",
      "Warrant of distress",
    ],
    correct: 1
  },
  {
    id: 29,
    question: "What is the main difference between transit and transhipment?",
    options: [
      "There is no legal difference",
      "Transit is passenger clearance and transhipment is appeal",
      "Transit moves through territory to a foreign destination; transhipment transfers from one arriving craft to another departing craft",
      "Transit is warehousing and transhipment is export duty",
    ],
    correct: 2
  },
  {
    id: 30,
    question: "What legal threshold commonly justifies searches under Part XII?",
    options: [
      "Prior Tribunal authorization",
      "Proof beyond all doubt",
      "Consent of the owner only",
      "Reasonable grounds to believe",
    ],
    correct: 3
  },
  {
    id: 31,
    question: "In exam revision, which statement is most accurate? Which body initiates customs and related trade policies for the Community?",
    options: [
      "The Directorate of Customs",
      "The Post Office",
      "The warehouse keeper",
      "The Tax Appeals Tribunal",
    ],
    correct: 0
  },
  {
    id: 32,
    question: "Which option best answers the question: is pretending to be a customs officer an offence?",
    options: [
      "Only if the person wears a uniform",
      "Yes",
      "Only if done at a port",
      "No, unless goods are seized",
    ],
    correct: 1
  },
  {
    id: 33,
    question: "Which of the following is the best answer to this EACCMA question: What does the Third Schedule contain?",
    options: [
      "Prohibited and Restricted Imports Generally",
      "Declaration of Officer",
      "Prohibited and Restricted Exports Generally",
      "Exemptions Regime",
    ],
    correct: 2
  },
  {
    id: 34,
    question: "What must happen if an aircraft or vessel is wrecked or forced to land by unavoidable cause?",
    options: [
      "The goods automatically become abandoned",
      "The master or agent must report the craft, cargo, and stores to the nearest officer or administrative officer",
      "The owner must appeal first",
      "The craft is automatically condemned",
    ],
    correct: 1
  },
  {
    id: 35,
    question: "Select the best definition of the key difference between valuation and rate of duty.",
    options: [
      "Valuation applies only to exports",
      "Rate of duty replaces valuation",
      "They are the same legal concept",
      "Valuation determines customs value; the rate determines how duty is applied to that value or other measure",
    ],
    correct: 3
  },
  {
    id: 36,
    question: "Which statement correctly reflects the Act: can duty still be payable even after conviction and a fine?",
    options: [
      "Yes, duty may be payable in addition to the fine",
      "Only if the owner appeals",
      "Only in export cases",
      "No, the fine always replaces duty",
    ],
    correct: 0
  },
  {
    id: 37,
    question: "Select the best definition of the main difference between review and appeal under the act.",
    options: [
      "Appeal comes before review",
      "Review is judicial and appeal is administrative",
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
      "There is no difference",
    ],
    correct: 2
  },
  {
    id: 38,
    question: "A candidate is asked: may an officer open a compartment in a searched vehicle by force if access is denied? Which answer is correct?",
    options: [
      "Only after appeal to the Tribunal",
      "Yes, in such manner including force as deemed necessary",
      "Only if the Council approves",
      "No, force is never permitted",
    ],
    correct: 1
  },
  {
    id: 39,
    question: "A candidate is asked: what is transhipment? Which answer is correct?",
    options: [
      "Movement of goods through a Partner State to a foreign destination",
      "Removal from one bonded warehouse to another",
      "Delivery of goods for home consumption",
      "Transfer of goods from an arriving craft from a foreign place to another craft departing to a foreign destination",
    ],
    correct: 3
  },
  {
    id: 40,
    question: "Select the best definition of the function of a search warrant under section 158.",
    options: [
      "To authorize entry and search of premises and seizure of relevant goods or documents",
      "To appoint customs areas",
      "To issue entry outwards",
      "To grant tariff treatment",
    ],
    correct: 0
  },
  {
    id: 41,
    question: "Which option best answers the question: what is the main difference between transit and transhipment?",
    options: [
      "Transit is passenger clearance and transhipment is appeal",
      "Transit moves through territory to a foreign destination; transhipment transfers from one arriving craft to another departing craft",
      "Transit is warehousing and transhipment is export duty",
      "There is no legal difference",
    ],
    correct: 1
  },
  {
    id: 42,
    question: "Which option best answers the question: what is an export processing zone?",
    options: [
      "A sufferance wharf",
      "A government warehouse",
      "A customs airport",
      "A designated part of customs territory treated for import duties and taxes generally as outside customs territory but with controlled access",
    ],
    correct: 3
  },
  {
    id: 43,
    question: "Which of the following is the best answer to this EACCMA question: What records must an internal container depot owner keep available for examination?",
    options: [
      "Records and accounts relating to goods and operations",
      "Only passenger lists",
      "Only police reports",
      "Only payroll records",
    ],
    correct: 0
  },
  {
    id: 44,
    question: "In exam revision, which statement is most accurate? Why are Customs seals protected by criminal sanction?",
    options: [
      "They replace entry documents",
      "They are decorative only",
      "They preserve integrity of customs control over goods or conveyances",
      "They determine tariff rates",
    ],
    correct: 2
  },
  {
    id: 45,
    question: "A candidate is asked: what is the difference between exemption and drawback? Which answer is correct?",
    options: [
      "Exemption and drawback are identical",
      "Drawback applies only after seizure",
      "Exemption applies only to exports",
      "Exemption means duty is not charged in the first place; drawback means duty already paid is later refunded",
    ],
    correct: 3
  },
  {
    id: 46,
    question: "Which option best answers the question: what legal threshold commonly justifies searches under Part XII?",
    options: [
      "Proof beyond all doubt",
      "Consent of the owner only",
      "Reasonable grounds to believe",
      "Prior Tribunal authorization",
    ],
    correct: 2
  },
  {
    id: 47,
    question: "Which of the following is the best answer to this EACCMA question: What does the period of warehousing address?",
    options: [
      "How long appeals last",
      "How long goods may remain warehoused and what may happen after that period, including sale",
      "When officers take lunch breaks",
      "How long a vessel may remain at boarding station",
    ],
    correct: 1
  },
  {
    id: 48,
    question: "Which option best answers the question: what is the main role of entry outwards?",
    options: [
      "It is the outward customs authorization linked to lawful loading and departure of the craft",
      "It is an import report",
      "It is a warehouse licence",
      "It is a valuation certificate",
    ],
    correct: 0
  },
  {
    id: 49,
    question: "In exam revision, which statement is most accurate? How far back may the proper officer require books and documents under section 159?",
    options: [
      "No time limit is mentioned",
      "Up to five years immediately preceding the demand",
      "One year only",
      "Ten years only",
    ],
    correct: 1
  },
  {
    id: 50,
    question: "A candidate is asked: what must the report on arrival show separately? Which answer is correct?",
    options: [
      "Only prohibited and restricted goods",
      "Only warehoused and seized goods",
      "Transit goods, transhipment goods, goods remaining on board for other ports, and goods for re-exportation on the same craft",
      "Only passenger baggage and stores",
    ],
    correct: 2
  },
];
