const QUESTIONS = [
  {
    id: 1,
    question: "Which of the following is the best answer to this EACCMA question: What records must an internal container depot owner keep available for examination?",
    options: [
      "Only police reports",
      "Only passenger lists",
      "Records and accounts relating to goods and operations",
      "Only payroll records",
    ],
    correct: 2
  },
  {
    id: 2,
    question: "Which option best answers the question: can duty still be payable even after conviction and a fine?",
    options: [
      "Yes, duty may be payable in addition to the fine",
      "No, the fine always replaces duty",
      "Only if the owner appeals",
      "Only in export cases",
    ],
    correct: 0
  },
  {
    id: 3,
    question: "Select the best definition of the purpose of countervailing duty.",
    options: [
      "To license customs agents",
      "To offset subsidies bestowed directly or indirectly on manufacture, production, or export",
      "To manage transit sheds",
      "To settle appeals",
    ],
    correct: 1
  },
  {
    id: 4,
    question: "Which of the following is the best answer to this EACCMA question: Why are warehouse operations controlled?",
    options: [
      "To convert all goods into stores",
      "To eliminate the need for entry",
      "To give warehouses legislative power",
      "To protect customs revenue and ensure goods remain properly accounted for",
    ],
    correct: 3
  },
  {
    id: 5,
    question: "Which statement correctly reflects the Act: can imported goods be unloaded before being duly entered?",
    options: [
      "No, unless the proper officer gives written permission subject to conditions",
      "Yes, if the goods are perishable",
      "Yes, at any sufferance wharf",
      "Yes, if the owner is present",
    ],
    correct: 0
  },
  {
    id: 6,
    question: "What must happen if an aircraft or vessel is wrecked or forced to land by unavoidable cause?",
    options: [
      "The craft is automatically condemned",
      "The goods automatically become abandoned",
      "The master or agent must report the craft, cargo, and stores to the nearest officer or administrative officer",
      "The owner must appeal first",
    ],
    correct: 2
  },
  {
    id: 7,
    question: "Which option best answers the question: what legal threshold commonly justifies searches under Part XII?",
    options: [
      "Prior Tribunal authorization",
      "Reasonable grounds to believe",
      "Proof beyond all doubt",
      "Consent of the owner only",
    ],
    correct: 1
  },
  {
    id: 8,
    question: "Which of the following is the best answer to this EACCMA question: Why are export goods not to be discharged in Partner States after entry for export?",
    options: [
      "To exempt them from export duty",
      "To classify them as passenger baggage",
      "To convert them into transit goods automatically",
      "To preserve integrity of the export procedure and prevent diversion",
    ],
    correct: 3
  },
  {
    id: 9,
    question: "A candidate is asked: what is the main purpose of recovery of duty by distress? Which answer is correct?",
    options: [
      "Origin certification",
      "Enforcement and collection of unpaid duty",
      "Port appointment",
      "Passenger examination",
    ],
    correct: 1
  },
  {
    id: 10,
    question: "Which option best answers the question: what is the main effect of goods being subject to customs control?",
    options: [
      "They become duty free",
      "They cease to require entry",
      "They may be examined by any officer and cannot be interfered with except by authority",
      "They automatically become warehoused",
    ],
    correct: 2
  },
  {
    id: 11,
    question: "A candidate is asked: what does termination of transit procedure mean? Which answer is correct?",
    options: [
      "Automatic conversion into home consumption",
      "Seizure of all transit goods",
      "Issue of entry outwards",
      "Lawful conclusion of the transit movement once the goods reach the approved destination or are otherwise properly accounted for",
    ],
    correct: 3
  },
  {
    id: 12,
    question: "Which of the following is the best answer to this EACCMA question: What legal threshold commonly justifies searches under Part XII?",
    options: [
      "Reasonable grounds to believe",
      "Consent of the owner only",
      "Prior Tribunal authorization",
      "Proof beyond all doubt",
    ],
    correct: 0
  },
  {
    id: 13,
    question: "A candidate is asked: what is the main purpose of licensing customs agents? Which answer is correct?",
    options: [
      "To transfer customs revenue to agents",
      "To regulate who may act for owners in customs dealings",
      "To create exemptions",
      "To appoint ports",
    ],
    correct: 1
  },
  {
    id: 14,
    question: "Which option best answers the question: what happens if goods remain unentered after the allowed period?",
    options: [
      "They are automatically sold",
      "They become stores",
      "They may be removed by or at the expense of the agent to a Customs warehouse",
      "They become duty free",
    ],
    correct: 2
  },
  {
    id: 15,
    question: "In exam revision, which statement is most accurate? Which items may be delivered without entry subject to an undertaking to furnish entry within 48 hours?",
    options: [
      "All warehoused goods",
      "All restricted imports",
      "All passenger baggage",
      "Bullion, currency notes, coin, or perishable goods",
    ],
    correct: 3
  },
  {
    id: 16,
    question: "A candidate is asked: why may warehoused goods be moved from one warehouse to another only under customs control? Which answer is correct?",
    options: [
      "Because revenue and custody of the goods must be protected throughout the movement",
      "Because transfer is the same as transit",
      "Because goods lose owner identity in a warehouse",
      "Because only government warehouses can store dutiable goods",
    ],
    correct: 0
  },
  {
    id: 17,
    question: "Select the best definition of the main purpose of licensing customs agents.",
    options: [
      "To transfer customs revenue to agents",
      "To appoint ports",
      "To create exemptions",
      "To regulate who may act for owners in customs dealings",
    ],
    correct: 3
  },
  {
    id: 18,
    question: "In exam revision, which statement is most accurate? Can warehoused goods be delivered as stores?",
    options: [
      "Yes, as provided by the Act",
      "Only after condemnation",
      "No, never",
      "Only if passenger baggage",
    ],
    correct: 0
  },
  {
    id: 19,
    question: "Which of the following is the best answer to this EACCMA question: How far back may the proper officer require books and documents under section 159?",
    options: [
      "Ten years only",
      "One year only",
      "Up to five years immediately preceding the demand",
      "No time limit is mentioned",
    ],
    correct: 2
  },
  {
    id: 20,
    question: "In exam revision, which statement is most accurate? How far back may the proper officer require books and documents under section 159?",
    options: [
      "No time limit is mentioned",
      "Up to five years immediately preceding the demand",
      "Ten years only",
      "One year only",
    ],
    correct: 1
  },
  {
    id: 21,
    question: "Select the best definition of the function of a search warrant under section 158.",
    options: [
      "To authorize entry and search of premises and seizure of relevant goods or documents",
      "To appoint customs areas",
      "To grant tariff treatment",
      "To issue entry outwards",
    ],
    correct: 0
  },
  {
    id: 22,
    question: "Select the best definition of the main effect of goods being subject to customs control.",
    options: [
      "They become duty free",
      "They may be examined by any officer and cannot be interfered with except by authority",
      "They cease to require entry",
      "They automatically become warehoused",
    ],
    correct: 1
  },
  {
    id: 23,
    question: "A candidate is asked: may an officer open a compartment in a searched vehicle by force if access is denied? Which answer is correct?",
    options: [
      "Only after appeal to the Tribunal",
      "Only if the Council approves",
      "Yes, in such manner including force as deemed necessary",
      "No, force is never permitted",
    ],
    correct: 2
  },
  {
    id: 24,
    question: "Which option best answers the question: what is short shipment?",
    options: [
      "A method of customs valuation",
      "A type of seizure",
      "A temporary import exemption",
      "A situation where goods entered or intended for export are not shipped as expected or in full",
    ],
    correct: 3
  },
  {
    id: 25,
    question: "Select the best definition of the significance of section 61 on unlawfully taking warehoused goods.",
    options: [
      "It creates drawback claims",
      "It abolishes all warehousing",
      "It penalizes unlawful taking or interference because warehoused goods remain under customs control",
      "It concerns only transit sheds",
    ],
    correct: 2
  },
  {
    id: 26,
    question: "A candidate is asked: what is the difference between exemption and drawback? Which answer is correct?",
    options: [
      "Exemption applies only to exports",
      "Drawback applies only after seizure",
      "Exemption and drawback are identical",
      "Exemption means duty is not charged in the first place; drawback means duty already paid is later refunded",
    ],
    correct: 3
  },
  {
    id: 27,
    question: "Which of the following is the best answer to this EACCMA question: Why may warehoused goods be moved from one warehouse to another only under customs control?",
    options: [
      "Because revenue and custody of the goods must be protected throughout the movement",
      "Because only government warehouses can store dutiable goods",
      "Because goods lose owner identity in a warehouse",
      "Because transfer is the same as transit",
    ],
    correct: 0
  },
  {
    id: 28,
    question: "Which statement correctly reflects the Act: can duty still be payable even after conviction and a fine?",
    options: [
      "Only if the owner appeals",
      "Yes, duty may be payable in addition to the fine",
      "No, the fine always replaces duty",
      "Only in export cases",
    ],
    correct: 1
  },
  {
    id: 29,
    question: "In exam revision, which statement is most accurate? What records must an internal container depot owner keep available for examination?",
    options: [
      "Only police reports",
      "Only passenger lists",
      "Only payroll records",
      "Records and accounts relating to goods and operations",
    ],
    correct: 3
  },
  {
    id: 30,
    question: "Which of the following is the best answer to this EACCMA question: What does restoration of seizures mean?",
    options: [
      "The goods become prohibited",
      "The seizure converts into warehousing",
      "Seized goods or things may be returned in accordance with the Act",
      "Duty is cancelled automatically",
    ],
    correct: 2
  },
  {
    id: 31,
    question: "In exam revision, which statement is most accurate? What is the main difference between review and appeal under the Act?",
    options: [
      "There is no difference",
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
      "Review is judicial and appeal is administrative",
      "Appeal comes before review",
    ],
    correct: 1
  },
  {
    id: 32,
    question: "Which of the following is the best answer to this EACCMA question: What special rule applies to a vessel of less than 250 tons register?",
    options: [
      "Its report must, unless otherwise allowed, be made before bulk is broken",
      "It may unload anywhere",
      "It is exempt from customs report",
      "It cannot carry transit goods",
    ],
    correct: 0
  },
  {
    id: 33,
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
    id: 34,
    question: "Select the best definition of short shipment.",
    options: [
      "A type of seizure",
      "A situation where goods entered or intended for export are not shipped as expected or in full",
      "A method of customs valuation",
      "A temporary import exemption",
    ],
    correct: 1
  },
  {
    id: 35,
    question: "What is the difference between remission and rebate?",
    options: [
      "Rebate is a type of seizure",
      "Remission is a passenger allowance",
      "They are always identical",
      "Both are duty reliefs, but remission is relief granted in qualifying cases while rebate is duty relief allowed under specific statutory conditions",
    ],
    correct: 3
  },
  {
    id: 36,
    question: "In exam revision, which statement is most accurate? What does restoration of seizures mean?",
    options: [
      "Seized goods or things may be returned in accordance with the Act",
      "The goods become prohibited",
      "The seizure converts into warehousing",
      "Duty is cancelled automatically",
    ],
    correct: 0
  },
  {
    id: 37,
    question: "What is the key idea behind owner liability for acts of a duly authorised agent?",
    options: [
      "Only agents can ever be liable",
      "Agency always eliminates owner liability",
      "The owner's customs responsibility may continue even where an authorised agent acts on the owner's behalf",
      "Only the Commissioner becomes liable",
    ],
    correct: 2
  },
  {
    id: 38,
    question: "Which option best answers the question: what is condemnation in customs law?",
    options: [
      "An import declaration",
      "The formal legal process by which seized goods or things are declared forfeited",
      "A border route appointment",
      "A type of drawback",
    ],
    correct: 1
  },
  {
    id: 39,
    question: "In exam revision, which statement is most accurate? Why are warehouse operations controlled?",
    options: [
      "To protect customs revenue and ensure goods remain properly accounted for",
      "To eliminate the need for entry",
      "To convert all goods into stores",
      "To give warehouses legislative power",
    ],
    correct: 0
  },
  {
    id: 40,
    question: "Which option best answers the question: what is the main role of entry outwards?",
    options: [
      "It is an import report",
      "It is a warehouse licence",
      "It is a valuation certificate",
      "It is the outward customs authorization linked to lawful loading and departure of the craft",
    ],
    correct: 3
  },
  {
    id: 41,
    question: "Which statement correctly reflects the Act: can goods subject to customs control be abandoned to customs?",
    options: [
      "Yes, with permission of the Commissioner",
      "Yes, automatically on arrival",
      "No, never",
      "Yes, but only after Tribunal approval",
    ],
    correct: 0
  },
  {
    id: 42,
    question: "Which of the following is the best answer to this EACCMA question: Why are Customs seals protected by criminal sanction?",
    options: [
      "They determine tariff rates",
      "They are decorative only",
      "They preserve integrity of customs control over goods or conveyances",
      "They replace entry documents",
    ],
    correct: 2
  },
  {
    id: 43,
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
    id: 44,
    question: "In exam revision, which statement is most accurate? What must a wharf owner provide to the satisfaction of the Commissioner?",
    options: [
      "Only a customs flag",
      "Suitable office accommodation for officers and shed accommodation for goods",
      "Only parking for customs vehicles",
      "Only rail access",
    ],
    correct: 1
  },
  {
    id: 45,
    question: "Select the best definition of the legal status of a place directed by the proper officer for unsuitable cargo storage.",
    options: [
      "It is deemed to be a transit shed for that purpose",
      "It becomes a bonded warehouse permanently",
      "It becomes a port",
      "It ceases to be under customs control",
    ],
    correct: 0
  },
  {
    id: 46,
    question: "In exam revision, which statement is most accurate? What must happen if an aircraft or vessel is wrecked or forced to land by unavoidable cause?",
    options: [
      "The goods automatically become abandoned",
      "The owner must appeal first",
      "The craft is automatically condemned",
      "The master or agent must report the craft, cargo, and stores to the nearest officer or administrative officer",
    ],
    correct: 3
  },
  {
    id: 47,
    question: "Which option best answers the question: what is the key idea behind owner liability for acts of a duly authorised agent?",
    options: [
      "Only the Commissioner becomes liable",
      "The owner's customs responsibility may continue even where an authorised agent acts on the owner's behalf",
      "Agency always eliminates owner liability",
      "Only agents can ever be liable",
    ],
    correct: 1
  },
  {
    id: 48,
    question: "Which option best answers the question: what is the legal status of a place directed by the proper officer for unsuitable cargo storage?",
    options: [
      "It becomes a bonded warehouse permanently",
      "It ceases to be under customs control",
      "It is deemed to be a transit shed for that purpose",
      "It becomes a port",
    ],
    correct: 2
  },
  {
    id: 49,
    question: "Select the best definition of the key idea behind owner liability for acts of a duly authorised agent.",
    options: [
      "Only agents can ever be liable",
      "The owner's customs responsibility may continue even where an authorised agent acts on the owner's behalf",
      "Agency always eliminates owner liability",
      "Only the Commissioner becomes liable",
    ],
    correct: 1
  },
  {
    id: 50,
    question: "Select the best definition of the difference between remission and rebate.",
    options: [
      "Remission is a passenger allowance",
      "Rebate is a type of seizure",
      "They are always identical",
      "Both are duty reliefs, but remission is relief granted in qualifying cases while rebate is duty relief allowed under specific statutory conditions",
    ],
    correct: 3
  },
];
