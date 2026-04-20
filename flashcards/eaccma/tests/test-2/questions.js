const QUESTIONS = [
  {
    id: 1,
    question: "What powers does section 7 give an officer while on duty?",
    options: [
      "The powers, rights, privileges, and protection of a police officer",
      "Power to grant tariff preferences",
      "Power to amend the Schedules",
      "Power to hear appeals",
    ],
    correct: 0
  },
  {
    id: 2,
    question: "Who is a proper officer?",
    options: [
      "Only the Commissioner",
      "Only a police officer",
      "Only an officer at a border post",
      "Any officer whose right or duty is to require or perform the act referred to in the Act",
    ],
    correct: 3
  },
  {
    id: 3,
    question: "What is the strongest reason customs valuation matters?",
    options: [
      "It replaces all duty rates",
      "It grants Tribunal jurisdiction",
      "It determines the customs value used to calculate ad valorem import duty",
      "It appoints the proper officer",
    ],
    correct: 2
  },
  {
    id: 4,
    question: "What does the First Schedule contain?",
    options: [
      "Exemptions regime",
      "Declaration of Officer",
      "Warrant of distress",
      "Prohibited and restricted imports",
    ],
    correct: 1
  },
  {
    id: 5,
    question: "Can an officer stop and search a vehicle suspected of carrying uncustomed goods?",
    options: [
      "Yes, if the officer has reasonable grounds to believe it carries such goods",
      "Only after the goods are warehoused",
      "No, only police may do so",
      "Only if the goods are exports",
    ],
    correct: 0
  },
  {
    id: 6,
    question: "What must a permanently appointed customs officer do on appointment?",
    options: [
      "File an appeal with the Tribunal",
      "Obtain a search warrant",
      "Make and subscribe the declaration in the First Schedule",
      "License a warehouse",
    ],
    correct: 2
  },
  {
    id: 7,
    question: "Are all exports subject to export duty?",
    options: [
      "Only warehoused goods",
      "Only transit goods",
      "Yes, every export",
      "No, only goods specified as liable to export duty",
    ],
    correct: 3
  },
  {
    id: 8,
    question: "What is the basic rule in section 47?",
    options: [
      "Only prohibited goods may be warehoused",
      "Dutiable goods may be warehoused",
      "Seized goods must always be warehoused",
      "Warehousing applies only to exports",
    ],
    correct: 1
  },
  {
    id: 9,
    question: "What is smuggling?",
    options: [
      "Importing, exporting, transferring, or moving goods with intent to defraud revenue or evade controls",
      "Any warehousing of goods",
      "Any use of an agent",
      "Any delayed customs entry",
    ],
    correct: 0
  },
  {
    id: 10,
    question: "Which of the following is the best answer to this EACCMA question: What special rule applies when searching a female?",
    options: [
      "No female may be searched at all",
      "A female shall not be searched except by a female officer",
      "A male officer may search if two witnesses are present",
      "She may only be searched by police",
    ],
    correct: 1
  },
  {
    id: 11,
    question: "Which of the following is the best answer to this EACCMA question: What must a permanently appointed customs officer do on appointment?",
    options: [
      "Obtain a search warrant",
      "File an appeal with the Tribunal",
      "Make and subscribe the declaration in the First Schedule",
      "License a warehouse",
    ],
    correct: 2
  },
  {
    id: 12,
    question: "What is the main role of entry outwards?",
    options: [
      "It is a valuation certificate",
      "It is a warehouse licence",
      "It is an import report",
      "It is the outward customs authorization linked to lawful loading and departure of the craft",
    ],
    correct: 3
  },
  {
    id: 13,
    question: "Which of the following is the best answer to this EACCMA question: What document is commonly required to support Community tariff treatment?",
    options: [
      "A Certificate of Origin",
      "A warehouse licence",
      "A search warrant",
      "A warrant of distress",
    ],
    correct: 0
  },
  {
    id: 14,
    question: "Which of the following is the best answer to this EACCMA question: What are the two passenger channels used on arrival?",
    options: [
      "Import channel and export channel",
      "Green channel and red channel",
      "Blue channel and white channel",
      "Air channel and land channel",
    ],
    correct: 1
  },
  {
    id: 15,
    question: "Which option best answers the question: is conspiracy to contravene the Act itself an offence?",
    options: [
      "No, only completed offences matter",
      "Only if goods are exported",
      "Yes",
      "Only if police are involved",
    ],
    correct: 2
  },
  {
    id: 16,
    question: "Which of the following is the best answer to this EACCMA question: What does the Sixth Schedule contain?",
    options: [
      "Valuation methods only",
      "Passenger allowance rules only",
      "Officer declaration",
      "Warrant of Distress",
    ],
    correct: 3
  },
  {
    id: 17,
    question: "Choose the best answer: Who appoints customs areas, boarding stations, and transit sheds?",
    options: [
      "The wharf owner",
      "The Council",
      "The Commissioner",
      "The Tribunal",
    ],
    correct: 2
  },
  {
    id: 18,
    question: "Choose the best answer: Who uses the red channel?",
    options: [
      "Only warehouse keepers",
      "Passengers carrying dutiable or restricted goods and crew members",
      "Only transit drivers",
      "Only diplomats",
    ],
    correct: 1
  },
  {
    id: 19,
    question: "Which option best answers the question: who appoints the Commissioner responsible for customs management in a Partner State?",
    options: [
      "The Tax Appeals Tribunal",
      "The Council directly",
      "The Directorate",
      "The Partner State under its legislation",
    ],
    correct: 3
  },
  {
    id: 20,
    question: "What is the main difference between review and appeal under the Act?",
    options: [
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
      "There is no difference",
      "Appeal comes before review",
      "Review is judicial and appeal is administrative",
    ],
    correct: 0
  },
  {
    id: 21,
    question: "In exam revision, which statement is most accurate? Which Part deals with appeals?",
    options: [
      "Part XXI",
      "Part XX",
      "Part XVIII",
      "Part XIX",
    ],
    correct: 1
  },
  {
    id: 22,
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
    id: 23,
    question: "A candidate is asked: what is the first step in the appeal structure under the act? Which answer is correct?",
    options: [
      "Appeal directly to the Council",
      "Application to the warehouse keeper",
      "Appeal directly to the court",
      "Application for review to the Commissioner",
    ],
    correct: 3
  },
  {
    id: 24,
    question: "What does restoration of seizures mean?",
    options: [
      "The goods become prohibited",
      "The seizure converts into warehousing",
      "Seized goods or things may be returned in accordance with the Act",
      "Duty is cancelled automatically",
    ],
    correct: 2
  },
  {
    id: 25,
    question: "A candidate is asked: who prescribes the working days and hours of general attendance of officers? Which answer is correct?",
    options: [
      "The Commissioner",
      "The warehouse keeper",
      "The Council",
      "The Directorate",
    ],
    correct: 0
  },
  {
    id: 26,
    question: "Which of the following is the best answer to this EACCMA question: What are stores in export procedure?",
    options: [
      "Any goods in a customs warehouse",
      "Only fuel in a pipeline",
      "Goods for use or sale on board aircraft, vessels, and trains in international transport",
      "All re-imported goods",
    ],
    correct: 2
  },
  {
    id: 27,
    question: "Which of the following is the best answer to this EACCMA question: What does the Second Schedule contain?",
    options: [
      "Warrant of distress",
      "Prohibited and Restricted Exports Generally",
      "Determination of Value of Imported Goods",
      "Prohibited and Restricted Imports Generally",
    ],
    correct: 3
  },
  {
    id: 28,
    question: "Which option best answers the question: what does the Third Schedule contain?",
    options: [
      "Prohibited and Restricted Imports Generally",
      "Prohibited and Restricted Exports Generally",
      "Declaration of Officer",
      "Exemptions Regime",
    ],
    correct: 1
  },
  {
    id: 29,
    question: "What special rule applies to a vessel of less than 250 tons register?",
    options: [
      "It may unload anywhere",
      "It is exempt from customs report",
      "It cannot carry transit goods",
      "Its report must, unless otherwise allowed, be made before bulk is broken",
    ],
    correct: 3
  },
  {
    id: 30,
    question: "Which statement correctly reflects the Act: can goods be removed from a customs area before due entry or permission?",
    options: [
      "Yes, if privately warehoused",
      "No, unless permission is granted by the proper officer",
      "Yes, if transit goods",
      "Yes, if carried by rail",
    ],
    correct: 1
  },
  {
    id: 31,
    question: "Select the best definition of the second step after review by the commissioner.",
    options: [
      "Appeal to the wharf owner",
      "Appeal to the boarding station",
      "Appeal to the Tax Appeals Tribunal",
      "Appeal to the Directorate",
    ],
    correct: 2
  },
  {
    id: 32,
    question: "What does the period of warehousing address?",
    options: [
      "How long goods may remain warehoused and what may happen after that period, including sale",
      "When officers take lunch breaks",
      "How long a vessel may remain at boarding station",
      "How long appeals last",
    ],
    correct: 0
  },
  {
    id: 33,
    question: "Select the best definition of duty drawback.",
    options: [
      "A penalty for late payment",
      "Warehouse rent charged on imports",
      "A type of search power",
      "Refund of all or part of import duty paid on goods later exported or used in a prescribed manner",
    ],
    correct: 3
  },
  {
    id: 34,
    question: "What is the main difference between transit and transhipment?",
    options: [
      "There is no legal difference",
      "Transit is warehousing and transhipment is export duty",
      "Transit moves through territory to a foreign destination; transhipment transfers from one arriving craft to another departing craft",
      "Transit is passenger clearance and transhipment is appeal",
    ],
    correct: 2
  },
  {
    id: 35,
    question: "Which of the following is the best answer to this EACCMA question: What does the Third Schedule contain?",
    options: [
      "Declaration of Officer",
      "Prohibited and Restricted Exports Generally",
      "Exemptions Regime",
      "Prohibited and Restricted Imports Generally",
    ],
    correct: 1
  },
  {
    id: 36,
    question: "What is transit?",
    options: [
      "Movement of goods imported from a foreign place through the territory of one or more Partner States to a foreign destination",
      "Loading export goods onto a vessel",
      "Removal of seized goods",
      "Transfer between Partner States only",
    ],
    correct: 0
  },
  {
    id: 37,
    question: "A candidate is asked: what is the basic rule in section 47? Which answer is correct?",
    options: [
      "Only prohibited goods may be warehoused",
      "Warehousing applies only to exports",
      "Seized goods must always be warehoused",
      "Dutiable goods may be warehoused",
    ],
    correct: 3
  },
  {
    id: 38,
    question: "A candidate is asked: what is the second step after review by the commissioner? Which answer is correct?",
    options: [
      "Appeal to the Directorate",
      "Appeal to the boarding station",
      "Appeal to the Tax Appeals Tribunal",
      "Appeal to the wharf owner",
    ],
    correct: 2
  },
  {
    id: 39,
    question: "A candidate is asked: which part of the act specifically lists enforcement powers of officers to prevent smuggling? Which answer is correct?",
    options: [
      "Part XII",
      "Part XX",
      "Part IX",
      "Part XIV",
    ],
    correct: 0
  },
  {
    id: 40,
    question: "What is transhipment?",
    options: [
      "Removal from one bonded warehouse to another",
      "Transfer of goods from an arriving craft from a foreign place to another craft departing to a foreign destination",
      "Delivery of goods for home consumption",
      "Movement of goods through a Partner State to a foreign destination",
    ],
    correct: 1
  },
  {
    id: 41,
    question: "A candidate is asked: what is forfeiture? Which answer is correct?",
    options: [
      "A temporary storage fee",
      "A passenger channel",
      "A valuation method",
      "The legal loss of goods or things to the state because of an offence or unlawful status",
    ],
    correct: 3
  },
  {
    id: 42,
    question: "A candidate is asked: what is seizure? Which answer is correct?",
    options: [
      "The act of taking possession of goods or things liable to forfeiture",
      "A warehouse licence",
      "A tariff preference",
      "A customs exemption",
    ],
    correct: 0
  },
  {
    id: 43,
    question: "What is the broad purpose of section 119 on duty-free imports?",
    options: [
      "To grant all importers a rebate",
      "To make goods imported duty free liable to duty if disposed of contrary to exemption conditions",
      "To classify goods as stores",
      "To abolish import duty",
    ],
    correct: 1
  },
  {
    id: 44,
    question: "A candidate is asked: what is a transit shed? Which answer is correct?",
    options: [
      "A bonded factory",
      "A baggage hall only",
      "A building or premises appointed for deposit of goods subject to customs control",
      "A customs court",
    ],
    correct: 2
  },
  {
    id: 45,
    question: "Which option best answers the question: is making or using a false customs document an offence?",
    options: [
      "Yes",
      "No, if the owner is absent",
      "Only if values are correct",
      "Only in warehousing cases",
    ],
    correct: 0
  },
  {
    id: 46,
    question: "A candidate is asked: what must a person in charge of an overland vehicle do before unloading or disposing of goods? Which answer is correct?",
    options: [
      "Only pay warehouse rent",
      "Only produce a passport",
      "Only show proof of ownership",
      "Report arrival, furnish information, make a declaration, answer questions, produce documents, and make due entry",
    ],
    correct: 3
  },
  {
    id: 47,
    question: "What is the main purpose of recovery of duty by distress?",
    options: [
      "Origin certification",
      "Port appointment",
      "Enforcement and collection of unpaid duty",
      "Passenger examination",
    ],
    correct: 2
  },
  {
    id: 48,
    question: "What is short shipment?",
    options: [
      "A type of seizure",
      "A situation where goods entered or intended for export are not shipped as expected or in full",
      "A method of customs valuation",
      "A temporary import exemption",
    ],
    correct: 1
  },
  {
    id: 49,
    question: "Select the best definition of the basic rule in section 47.",
    options: [
      "Seized goods must always be warehoused",
      "Warehousing applies only to exports",
      "Dutiable goods may be warehoused",
      "Only prohibited goods may be warehoused",
    ],
    correct: 2
  },
  {
    id: 50,
    question: "Why may warehoused goods be moved from one warehouse to another only under customs control?",
    options: [
      "Because transfer is the same as transit",
      "Because revenue and custody of the goods must be protected throughout the movement",
      "Because goods lose owner identity in a warehouse",
      "Because only government warehouses can store dutiable goods",
    ],
    correct: 1
  },
];
