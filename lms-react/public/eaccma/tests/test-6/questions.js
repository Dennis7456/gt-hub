const QUESTIONS = [
  {
    id: 1,
    question: "A candidate is asked: what is the basic rule in section 47? Which answer is correct?",
    options: [
      "Warehousing applies only to exports",
      "Seized goods must always be warehoused",
      "Dutiable goods may be warehoused",
      "Only prohibited goods may be warehoused",
    ],
    correct: 2
  },
  {
    id: 2,
    question: "A candidate is asked: what does the fifth schedule contain? Which answer is correct?",
    options: [
      "Exemptions Regime",
      "Warrant of distress",
      "Prohibited and restricted exports",
      "Rules on arrest and search",
    ],
    correct: 0
  },
  {
    id: 3,
    question: "Which of the following is the best answer to this EACCMA question: Is refusing to produce required customs documents an offence?",
    options: [
      "No, it is only a civil matter",
      "Yes",
      "Only at customs airports",
      "Only after appeal",
    ],
    correct: 1
  },
  {
    id: 4,
    question: "Which of the following is the best answer to this EACCMA question: What does the Fifth Schedule contain?",
    options: [
      "Prohibited and restricted exports",
      "Warrant of distress",
      "Rules on arrest and search",
      "Exemptions Regime",
    ],
    correct: 3
  },
  {
    id: 5,
    question: "A candidate is asked: who appoints ports and customs airports? Which answer is correct?",
    options: [
      "The Council",
      "The Director General",
      "The Commissioner",
      "The proper officer",
    ],
    correct: 0
  },
  {
    id: 6,
    question: "What is the function of a search warrant under section 158?",
    options: [
      "To appoint customs areas",
      "To authorize entry and search of premises and seizure of relevant goods or documents",
      "To issue entry outwards",
      "To grant tariff treatment",
    ],
    correct: 1
  },
  {
    id: 7,
    question: "Select the best definition of the basic rule in section 47.",
    options: [
      "Seized goods must always be warehoused",
      "Only prohibited goods may be warehoused",
      "Warehousing applies only to exports",
      "Dutiable goods may be warehoused",
    ],
    correct: 3
  },
  {
    id: 8,
    question: "A candidate is asked: what is duty drawback? Which answer is correct?",
    options: [
      "Warehouse rent charged on imports",
      "A penalty for late payment",
      "Refund of all or part of import duty paid on goods later exported or used in a prescribed manner",
      "A type of search power",
    ],
    correct: 2
  },
  {
    id: 9,
    question: "Which of the following is the best answer to this EACCMA question: Which Part deals with offences, penalties, forfeitures, and seizures?",
    options: [
      "Part XX",
      "Part XVII",
      "Part XI",
      "Part XV",
    ],
    correct: 1
  },
  {
    id: 10,
    question: "Select the best definition of the second step after review by the commissioner.",
    options: [
      "Appeal to the boarding station",
      "Appeal to the wharf owner",
      "Appeal to the Tax Appeals Tribunal",
      "Appeal to the Directorate",
    ],
    correct: 2
  },
  {
    id: 11,
    question: "Which of the following is the best answer to this EACCMA question: What does the Sixth Schedule contain?",
    options: [
      "Warrant of Distress",
      "Valuation methods only",
      "Officer declaration",
      "Passenger allowance rules only",
    ],
    correct: 0
  },
  {
    id: 12,
    question: "Which option best answers the question: is pretending to be a customs officer an offence?",
    options: [
      "Only if done at a port",
      "Only if the person wears a uniform",
      "No, unless goods are seized",
      "Yes",
    ],
    correct: 3
  },
  {
    id: 13,
    question: "A candidate is asked: what is seizure? Which answer is correct?",
    options: [
      "A warehouse licence",
      "The act of taking possession of goods or things liable to forfeiture",
      "A tariff preference",
      "A customs exemption",
    ],
    correct: 1
  },
  {
    id: 14,
    question: "A candidate is asked: into what procedures may imported cargo generally be entered? Which answer is correct?",
    options: [
      "Home consumption, warehousing, transhipment, transit, or export processing zones",
      "Only seizure or destruction",
      "Only home consumption or warehousing",
      "Only transfer or transit",
    ],
    correct: 0
  },
  {
    id: 15,
    question: "What is the main difference between review and appeal under the Act?",
    options: [
      "Appeal comes before review",
      "There is no difference",
      "Review is judicial and appeal is administrative",
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
    ],
    correct: 3
  },
  {
    id: 16,
    question: "A candidate is asked: what does the first schedule contain? Which answer is correct?",
    options: [
      "Exemptions regime",
      "Warrant of distress",
      "Declaration of Officer",
      "Prohibited and restricted imports",
    ],
    correct: 2
  },
  {
    id: 17,
    question: "Which of the following is the best answer to this EACCMA question: Where are prohibited and restricted exports generally listed?",
    options: [
      "The Sixth Schedule",
      "The Third Schedule",
      "The Fourth Schedule",
      "The Second Schedule",
    ],
    correct: 1
  },
  {
    id: 18,
    question: "Who may require a bond before goods are warehoused?",
    options: [
      "The warehouse keeper",
      "The Post Office",
      "The proper officer",
      "The Tribunal",
    ],
    correct: 2
  },
  {
    id: 19,
    question: "What is transfer under the Act?",
    options: [
      "Movement of goods from one Partner State directly or indirectly to another Partner State, excluding transit, transhipment, and bonded warehousing",
      "Movement of baggage through the green channel",
      "Movement of imports through one Partner State to a foreign destination",
      "Movement of goods from a vessel to a vehicle for export",
    ],
    correct: 0
  },
  {
    id: 20,
    question: "A candidate is asked: who prescribes the working days and hours of general attendance of officers? Which answer is correct?",
    options: [
      "The Directorate",
      "The warehouse keeper",
      "The Council",
      "The Commissioner",
    ],
    correct: 3
  },
  {
    id: 21,
    question: "A candidate is asked: what does the fourth schedule contain? Which answer is correct?",
    options: [
      "Determination of Value of Imported Goods Liable to ad Valorem Import Duty",
      "Warrant of distress",
      "General penalties for offences",
      "Exemptions regime",
    ],
    correct: 0
  },
  {
    id: 22,
    question: "What must a wharf owner provide to the satisfaction of the Commissioner?",
    options: [
      "Only parking for customs vehicles",
      "Only a customs flag",
      "Only rail access",
      "Suitable office accommodation for officers and shed accommodation for goods",
    ],
    correct: 3
  },
  {
    id: 23,
    question: "What is the significance of section 61 on unlawfully taking warehoused goods?",
    options: [
      "It abolishes all warehousing",
      "It penalizes unlawful taking or interference because warehoused goods remain under customs control",
      "It creates drawback claims",
      "It concerns only transit sheds",
    ],
    correct: 1
  },
  {
    id: 24,
    question: "A candidate is asked: what is the first step in the appeal structure under the act? Which answer is correct?",
    options: [
      "Application to the warehouse keeper",
      "Appeal directly to the court",
      "Application for review to the Commissioner",
      "Appeal directly to the Council",
    ],
    correct: 2
  },
  {
    id: 25,
    question: "In exam revision, which statement is most accurate? Which Part deals with appeals?",
    options: [
      "Part XIX",
      "Part XVIII",
      "Part XXI",
      "Part XX",
    ],
    correct: 3
  },
  {
    id: 26,
    question: "Select the best definition of a bonded warehouse.",
    options: [
      "A government office at the port",
      "A warehouse for destroyed goods only",
      "A warehouse licensed by the Commissioner for dutiable goods on which import duty has not been paid",
      "A transit shed for passengers",
    ],
    correct: 2
  },
  {
    id: 27,
    question: "A candidate is asked: why may warehoused goods be moved from one warehouse to another only under customs control? Which answer is correct?",
    options: [
      "Because revenue and custody of the goods must be protected throughout the movement",
      "Because transfer is the same as transit",
      "Because only government warehouses can store dutiable goods",
      "Because goods lose owner identity in a warehouse",
    ],
    correct: 0
  },
  {
    id: 28,
    question: "Which of the following is the best answer to this EACCMA question: What happens if entered goods are not removed from the first point of entry within 14 days?",
    options: [
      "Their valuation lapses",
      "They become liable to customs warehouse rent",
      "They are immediately forfeited",
      "They become prohibited goods",
    ],
    correct: 1
  },
  {
    id: 29,
    question: "In exam revision, which statement is most accurate? What happens if a person or goods enter or leave a customs area except through an appointed entrance or exit?",
    options: [
      "The customs area appointment lapses",
      "Nothing if duty is later paid",
      "An offence is committed and the goods may be forfeited",
      "Only warehouse rent becomes payable",
    ],
    correct: 2
  },
  {
    id: 30,
    question: "Why are rules on gross weight, reputed quantity, litre equivalent, and tare included in Part X?",
    options: [
      "To provide workable methods for computing duty in different physical measurement situations",
      "To regulate appeals",
      "To define smuggling",
      "To abolish ad valorem duty",
    ],
    correct: 0
  },
  {
    id: 31,
    question: "Select the best definition of the main purpose of recovery of duty by distress.",
    options: [
      "Port appointment",
      "Passenger examination",
      "Origin certification",
      "Enforcement and collection of unpaid duty",
    ],
    correct: 3
  },
  {
    id: 32,
    question: "In exam revision, which statement is most accurate? What is transfer under the Act?",
    options: [
      "Movement of baggage through the green channel",
      "Movement of goods from one Partner State directly or indirectly to another Partner State, excluding transit, transhipment, and bonded warehousing",
      "Movement of imports through one Partner State to a foreign destination",
      "Movement of goods from a vessel to a vehicle for export",
    ],
    correct: 1
  },
  {
    id: 33,
    question: "A candidate is asked: can imported goods be unloaded before being duly entered? Which answer is correct?",
    options: [
      "Yes, at any sufferance wharf",
      "Yes, if the goods are perishable",
      "Yes, if the owner is present",
      "No, unless the proper officer gives written permission subject to conditions",
    ],
    correct: 3
  },
  {
    id: 34,
    question: "In exam revision, which statement is most accurate? Why are export goods not to be discharged in Partner States after entry for export?",
    options: [
      "To classify them as passenger baggage",
      "To convert them into transit goods automatically",
      "To preserve integrity of the export procedure and prevent diversion",
      "To exempt them from export duty",
    ],
    correct: 2
  },
  {
    id: 35,
    question: "In exam revision, which statement is most accurate? How far back may the proper officer require books and documents under section 159?",
    options: [
      "Up to five years immediately preceding the demand",
      "One year only",
      "No time limit is mentioned",
      "Ten years only",
    ],
    correct: 0
  },
  {
    id: 36,
    question: "Select the best definition of the main role of entry outwards.",
    options: [
      "It is a warehouse licence",
      "It is the outward customs authorization linked to lawful loading and departure of the craft",
      "It is an import report",
      "It is a valuation certificate",
    ],
    correct: 1
  },
  {
    id: 37,
    question: "In exam revision, which statement is most accurate? What is the main difference between review and appeal under the Act?",
    options: [
      "Review is judicial and appeal is administrative",
      "Appeal comes before review",
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
      "There is no difference",
    ],
    correct: 2
  },
  {
    id: 38,
    question: "Which option best answers the question: what is the broad purpose of section 119 on duty-free imports?",
    options: [
      "To abolish import duty",
      "To classify goods as stores",
      "To grant all importers a rebate",
      "To make goods imported duty free liable to duty if disposed of contrary to exemption conditions",
    ],
    correct: 3
  },
  {
    id: 39,
    question: "A candidate is asked: what does termination of transit procedure mean? Which answer is correct?",
    options: [
      "Issue of entry outwards",
      "Lawful conclusion of the transit movement once the goods reach the approved destination or are otherwise properly accounted for",
      "Automatic conversion into home consumption",
      "Seizure of all transit goods",
    ],
    correct: 1
  },
  {
    id: 40,
    question: "Select the best definition of transit.",
    options: [
      "Movement of goods imported from a foreign place through the territory of one or more Partner States to a foreign destination",
      "Transfer between Partner States only",
      "Loading export goods onto a vessel",
      "Removal of seized goods",
    ],
    correct: 0
  },
  {
    id: 41,
    question: "Select the best definition of the key difference between valuation and rate of duty.",
    options: [
      "They are the same legal concept",
      "Rate of duty replaces valuation",
      "Valuation applies only to exports",
      "Valuation determines customs value; the rate determines how duty is applied to that value or other measure",
    ],
    correct: 3
  },
  {
    id: 42,
    question: "Why is section 159 especially important after seizure?",
    options: [
      "It allows compulsory production of records relevant to seized goods or related dealings",
      "It automatically restores the goods",
      "It ends all prosecutions",
      "It grants exemptions",
    ],
    correct: 0
  },
  {
    id: 43,
    question: "Which option best answers the question: what is the main effect of goods being subject to customs control?",
    options: [
      "They automatically become warehoused",
      "They become duty free",
      "They may be examined by any officer and cannot be interfered with except by authority",
      "They cease to require entry",
    ],
    correct: 2
  },
  {
    id: 44,
    question: "In exam revision, which statement is most accurate? How are imported or exported goods through a pipeline controlled?",
    options: [
      "They are controlled only by the operator's internal policy",
      "Their nature and quantities must be recorded and reported as directed by the Commissioner",
      "They are exempt from reporting",
      "They are treated as postal articles",
    ],
    correct: 1
  },
  {
    id: 45,
    question: "Select the best definition of transhipment.",
    options: [
      "Transfer of goods from an arriving craft from a foreign place to another craft departing to a foreign destination",
      "Delivery of goods for home consumption",
      "Removal from one bonded warehouse to another",
      "Movement of goods through a Partner State to a foreign destination",
    ],
    correct: 0
  },
  {
    id: 46,
    question: "Which option best answers the question: what is condemnation in customs law?",
    options: [
      "A border route appointment",
      "The formal legal process by which seized goods or things are declared forfeited",
      "An import declaration",
      "A type of drawback",
    ],
    correct: 1
  },
  {
    id: 47,
    question: "Why is personal baggage separately treated in export procedure?",
    options: [
      "Because baggage is never under customs control",
      "Because only imports involve baggage",
      "Because passenger-carried goods require customs treatment distinct from ordinary cargo",
      "Because baggage is always stores",
    ],
    correct: 2
  },
  {
    id: 48,
    question: "Select the best definition of the legal status of a place directed by the proper officer for unsuitable cargo storage.",
    options: [
      "It ceases to be under customs control",
      "It becomes a port",
      "It becomes a bonded warehouse permanently",
      "It is deemed to be a transit shed for that purpose",
    ],
    correct: 3
  },
  {
    id: 49,
    question: "In exam revision, which statement is most accurate? Why is section 159 especially important after seizure?",
    options: [
      "It ends all prosecutions",
      "It allows compulsory production of records relevant to seized goods or related dealings",
      "It grants exemptions",
      "It automatically restores the goods",
    ],
    correct: 1
  },
  {
    id: 50,
    question: "Which of the following is the best answer to this EACCMA question: Why is section 159 especially important after seizure?",
    options: [
      "It allows compulsory production of records relevant to seized goods or related dealings",
      "It automatically restores the goods",
      "It ends all prosecutions",
      "It grants exemptions",
    ],
    correct: 0
  },
];
