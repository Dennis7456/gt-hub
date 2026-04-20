const QUESTIONS = [
  {
    id: 1,
    question: "Select the best definition of the first step in the appeal structure under the act.",
    options: [
      "Application for review to the Commissioner",
      "Appeal directly to the Council",
      "Appeal directly to the court",
      "Application to the warehouse keeper",
    ],
    correct: 0
  },
  {
    id: 2,
    question: "Which statement correctly reflects the Act: can an officer stop and search a vehicle suspected of carrying uncustomed goods?",
    options: [
      "No, only police may do so",
      "Only after the goods are warehoused",
      "Yes, if the officer has reasonable grounds to believe it carries such goods",
      "Only if the goods are exports",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "Can duty still be payable even after conviction and a fine?",
    options: [
      "No, the fine always replaces duty",
      "Yes, duty may be payable in addition to the fine",
      "Only in export cases",
      "Only if the owner appeals",
    ],
    correct: 1
  },
  {
    id: 4,
    question: "In exam revision, which statement is most accurate? Which Part deals with appeals?",
    options: [
      "Part XIX",
      "Part XXI",
      "Part XVIII",
      "Part XX",
    ],
    correct: 3
  },
  {
    id: 5,
    question: "A candidate is asked: what generally determines the rate of duty? Which answer is correct?",
    options: [
      "The time of entry",
      "The number of officers on duty",
      "The size of the warehouse",
      "The nationality of the importer",
    ],
    correct: 0
  },
  {
    id: 6,
    question: "What is an export processing zone?",
    options: [
      "A government warehouse",
      "A sufferance wharf",
      "A customs airport",
      "A designated part of customs territory treated for import duties and taxes generally as outside customs territory but with controlled access",
    ],
    correct: 3
  },
  {
    id: 7,
    question: "A candidate is asked: what are the two passenger channels used on arrival? Which answer is correct?",
    options: [
      "Air channel and land channel",
      "Import channel and export channel",
      "Green channel and red channel",
      "Blue channel and white channel",
    ],
    correct: 2
  },
  {
    id: 8,
    question: "Choose the best answer: Who may license an internal container depot?",
    options: [
      "The Directorate",
      "The Commissioner",
      "The Council",
      "The station master",
    ],
    correct: 1
  },
  {
    id: 9,
    question: "Which of the following is the best answer to this EACCMA question: What does the Fifth Schedule contain?",
    options: [
      "Exemptions Regime",
      "Warrant of distress",
      "Rules on arrest and search",
      "Prohibited and restricted exports",
    ],
    correct: 0
  },
  {
    id: 10,
    question: "Which of the following is the best answer to this EACCMA question: What special rule applies when searching a female?",
    options: [
      "A male officer may search if two witnesses are present",
      "A female shall not be searched except by a female officer",
      "She may only be searched by police",
      "No female may be searched at all",
    ],
    correct: 1
  },
  {
    id: 11,
    question: "In exam revision, which statement is most accurate? Is importing or exporting concealed goods an offence?",
    options: [
      "No, if duty is later paid",
      "Only for exports",
      "Yes",
      "Only when goods are warehoused",
    ],
    correct: 2
  },
  {
    id: 12,
    question: "Which of the following is the best answer to this EACCMA question: Which Part deals with appeals?",
    options: [
      "Part XXI",
      "Part XIX",
      "Part XVIII",
      "Part XX",
    ],
    correct: 3
  },
  {
    id: 13,
    question: "A candidate is asked: to whom does the act apply? Which answer is correct?",
    options: [
      "Only designated ports",
      "Only customs airports",
      "The Partner States",
      "Only the East African Community Secretariat",
    ],
    correct: 2
  },
  {
    id: 14,
    question: "What does termination of transit procedure mean?",
    options: [
      "Lawful conclusion of the transit movement once the goods reach the approved destination or are otherwise properly accounted for",
      "Automatic conversion into home consumption",
      "Seizure of all transit goods",
      "Issue of entry outwards",
    ],
    correct: 0
  },
  {
    id: 15,
    question: "A candidate is asked: who appoints ports and customs airports? Which answer is correct?",
    options: [
      "The Director General",
      "The Commissioner",
      "The proper officer",
      "The Council",
    ],
    correct: 3
  },
  {
    id: 16,
    question: "A candidate is asked: what must a person in charge of an overland vehicle do before unloading or disposing of goods? Which answer is correct?",
    options: [
      "Only produce a passport",
      "Report arrival, furnish information, make a declaration, answer questions, produce documents, and make due entry",
      "Only pay warehouse rent",
      "Only show proof of ownership",
    ],
    correct: 1
  },
  {
    id: 17,
    question: "Which of the following is the best answer to this EACCMA question: What does the Third Schedule contain?",
    options: [
      "Prohibited and Restricted Exports Generally",
      "Prohibited and Restricted Imports Generally",
      "Declaration of Officer",
      "Exemptions Regime",
    ],
    correct: 0
  },
  {
    id: 18,
    question: "What is a key distinction between a Government warehouse and a bonded warehouse?",
    options: [
      "Government warehouses are only for exports",
      "There is no distinction",
      "A Government warehouse is government-provided and approved; a bonded warehouse is licensed and operated by a warehouse keeper",
      "Bonded warehouses are only for postal articles",
    ],
    correct: 2
  },
  {
    id: 19,
    question: "Which of the following is the best answer to this EACCMA question: What official symbols does the Customs Union have under the Act?",
    options: [
      "A crest and anthem",
      "A logo and stamp",
      "A warrant and charter",
      "A seal and a flag",
    ],
    correct: 3
  },
  {
    id: 20,
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
    id: 21,
    question: "Which of the following is the best answer to this EACCMA question: Is refusing to produce required customs documents an offence?",
    options: [
      "Only at customs airports",
      "No, it is only a civil matter",
      "Only after appeal",
      "Yes",
    ],
    correct: 3
  },
  {
    id: 22,
    question: "In exam revision, which statement is most accurate? Who may license a bonded warehouse?",
    options: [
      "The Directorate",
      "The Council",
      "The Commissioner",
      "The station master",
    ],
    correct: 2
  },
  {
    id: 23,
    question: "A candidate is asked: what powers does section 7 give an officer while on duty? Which answer is correct?",
    options: [
      "The powers, rights, privileges, and protection of a police officer",
      "Power to hear appeals",
      "Power to grant tariff preferences",
      "Power to amend the Schedules",
    ],
    correct: 0
  },
  {
    id: 24,
    question: "Which option best answers the question: what are stores in export procedure?",
    options: [
      "All re-imported goods",
      "Goods for use or sale on board aircraft, vessels, and trains in international transport",
      "Any goods in a customs warehouse",
      "Only fuel in a pipeline",
    ],
    correct: 1
  },
  {
    id: 25,
    question: "Which of the following is the best answer to this EACCMA question: Within how many days after discharge begins must cargo generally be entered?",
    options: [
      "Within 21 days unless more time is allowed",
      "Within 48 hours",
      "Within 60 days",
      "Within 90 days",
    ],
    correct: 0
  },
  {
    id: 26,
    question: "Which of the following is the best answer to this EACCMA question: What does the Sixth Schedule contain?",
    options: [
      "Valuation methods only",
      "Warrant of Distress",
      "Passenger allowance rules only",
      "Officer declaration",
    ],
    correct: 1
  },
  {
    id: 27,
    question: "Which option best answers the question: is pretending to be a customs officer an offence?",
    options: [
      "No, unless goods are seized",
      "Only if the person wears a uniform",
      "Yes",
      "Only if done at a port",
    ],
    correct: 2
  },
  {
    id: 28,
    question: "What is transhipment?",
    options: [
      "Delivery of goods for home consumption",
      "Removal from one bonded warehouse to another",
      "Movement of goods through a Partner State to a foreign destination",
      "Transfer of goods from an arriving craft from a foreign place to another craft departing to a foreign destination",
    ],
    correct: 3
  },
  {
    id: 29,
    question: "Choose the best answer: Who may license a bonded warehouse?",
    options: [
      "The Commissioner",
      "The Directorate",
      "The Council",
      "The station master",
    ],
    correct: 0
  },
  {
    id: 30,
    question: "A candidate is asked: what does the fourth schedule contain? Which answer is correct?",
    options: [
      "Warrant of distress",
      "Determination of Value of Imported Goods Liable to ad Valorem Import Duty",
      "General penalties for offences",
      "Exemptions regime",
    ],
    correct: 1
  },
  {
    id: 31,
    question: "In exam revision, which statement is most accurate? Which body initiates customs and related trade policies for the Community?",
    options: [
      "The Post Office",
      "The warehouse keeper",
      "The Tax Appeals Tribunal",
      "The Directorate of Customs",
    ],
    correct: 3
  },
  {
    id: 32,
    question: "Select the best definition of ad valorem duty.",
    options: [
      "Duty based only on origin",
      "Duty based only on quantity",
      "Duty based on the value of the goods",
      "Duty based only on weight",
    ],
    correct: 2
  },
  {
    id: 33,
    question: "A candidate is asked: what does the first schedule contain? Which answer is correct?",
    options: [
      "Warrant of distress",
      "Declaration of Officer",
      "Exemptions regime",
      "Prohibited and restricted imports",
    ],
    correct: 1
  },
  {
    id: 34,
    question: "What is the main difference between review and appeal under the Act?",
    options: [
      "There is no difference",
      "Appeal comes before review",
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
      "Review is judicial and appeal is administrative",
    ],
    correct: 2
  },
  {
    id: 35,
    question: "What is the main role of entry outwards?",
    options: [
      "It is a warehouse licence",
      "It is an import report",
      "It is a valuation certificate",
      "It is the outward customs authorization linked to lawful loading and departure of the craft",
    ],
    correct: 3
  },
  {
    id: 36,
    question: "Which of the following is the best answer to this EACCMA question: Which Part of the Act specifically lists enforcement powers of officers to prevent smuggling?",
    options: [
      "Part XII",
      "Part XX",
      "Part IX",
      "Part XIV",
    ],
    correct: 0
  },
  {
    id: 37,
    question: "A candidate is asked: what is a bonded warehouse? Which answer is correct?",
    options: [
      "A transit shed for passengers",
      "A warehouse licensed by the Commissioner for dutiable goods on which import duty has not been paid",
      "A warehouse for destroyed goods only",
      "A government office at the port",
    ],
    correct: 1
  },
  {
    id: 38,
    question: "In exam revision, which statement is most accurate? Who uses the red channel?",
    options: [
      "Passengers carrying dutiable or restricted goods and crew members",
      "Only transit drivers",
      "Only warehouse keepers",
      "Only diplomats",
    ],
    correct: 0
  },
  {
    id: 39,
    question: "What is the main difference between transit and transhipment?",
    options: [
      "Transit is passenger clearance and transhipment is appeal",
      "There is no legal difference",
      "Transit moves through territory to a foreign destination; transhipment transfers from one arriving craft to another departing craft",
      "Transit is warehousing and transhipment is export duty",
    ],
    correct: 2
  },
  {
    id: 40,
    question: "Which of the following is the best answer to this EACCMA question: What document is commonly required to support Community tariff treatment?",
    options: [
      "A search warrant",
      "A warrant of distress",
      "A warehouse licence",
      "A Certificate of Origin",
    ],
    correct: 3
  },
  {
    id: 41,
    question: "Choose the best answer: Who uses the red channel?",
    options: [
      "Only diplomats",
      "Only transit drivers",
      "Passengers carrying dutiable or restricted goods and crew members",
      "Only warehouse keepers",
    ],
    correct: 2
  },
  {
    id: 42,
    question: "Which option best answers the question: can an officer stop and search a vehicle suspected of carrying uncustomed goods?",
    options: [
      "Only after the goods are warehoused",
      "Only if the goods are exports",
      "No, only police may do so",
      "Yes, if the officer has reasonable grounds to believe it carries such goods",
    ],
    correct: 3
  },
  {
    id: 43,
    question: "Select the best definition of an erroneous refund.",
    options: [
      "A lawful drawback claim",
      "A case where duty was wrongly refunded and Customs may recover it",
      "A failure to warehouse goods",
      "A temporary import bond",
    ],
    correct: 1
  },
  {
    id: 44,
    question: "Which option best answers the question: what is short shipment?",
    options: [
      "A situation where goods entered or intended for export are not shipped as expected or in full",
      "A type of seizure",
      "A method of customs valuation",
      "A temporary import exemption",
    ],
    correct: 0
  },
  {
    id: 45,
    question: "Select the best definition of the purpose of anti-dumping duty.",
    options: [
      "To recover warehouse rent",
      "To reward exporters",
      "To counter unfairly low-priced imports that injure domestic industry",
      "To regulate baggage",
    ],
    correct: 2
  },
  {
    id: 46,
    question: "Select the best definition of transhipment.",
    options: [
      "Transfer of goods from an arriving craft from a foreign place to another craft departing to a foreign destination",
      "Movement of goods through a Partner State to a foreign destination",
      "Removal from one bonded warehouse to another",
      "Delivery of goods for home consumption",
    ],
    correct: 0
  },
  {
    id: 47,
    question: "Select the best definition of a key distinction between a government warehouse and a bonded warehouse.",
    options: [
      "There is no distinction",
      "A Government warehouse is government-provided and approved; a bonded warehouse is licensed and operated by a warehouse keeper",
      "Bonded warehouses are only for postal articles",
      "Government warehouses are only for exports",
    ],
    correct: 1
  },
  {
    id: 48,
    question: "In exam revision, which statement is most accurate? What is the main difference between review and appeal under the Act?",
    options: [
      "There is no difference",
      "Appeal comes before review",
      "Review is judicial and appeal is administrative",
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
    ],
    correct: 3
  },
  {
    id: 49,
    question: "In exam revision, which statement is most accurate? What happens if a person or goods enter or leave a customs area except through an appointed entrance or exit?",
    options: [
      "Only warehouse rent becomes payable",
      "The customs area appointment lapses",
      "An offence is committed and the goods may be forfeited",
      "Nothing if duty is later paid",
    ],
    correct: 2
  },
  {
    id: 50,
    question: "Which option best answers the question: what does the period of warehousing address?",
    options: [
      "When officers take lunch breaks",
      "How long goods may remain warehoused and what may happen after that period, including sale",
      "How long appeals last",
      "How long a vessel may remain at boarding station",
    ],
    correct: 1
  },
];
