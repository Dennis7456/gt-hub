const QUESTIONS = [
  {
    id: 1,
    question: "Which option best answers the question: can duty still be payable even after conviction and a fine?",
    options: [
      "Only if the owner appeals",
      "Yes, duty may be payable in addition to the fine",
      "Only in export cases",
      "No, the fine always replaces duty",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "A candidate is asked: what is the difference between exemption and drawback? Which answer is correct?",
    options: [
      "Exemption means duty is not charged in the first place; drawback means duty already paid is later refunded",
      "Exemption and drawback are identical",
      "Exemption applies only to exports",
      "Drawback applies only after seizure",
    ],
    correct: 0
  },
  {
    id: 3,
    question: "Which of the following is the best answer to this EACCMA question: What happens if entered goods are not removed from the first point of entry within 14 days?",
    options: [
      "They become prohibited goods",
      "They are immediately forfeited",
      "They become liable to customs warehouse rent",
      "Their valuation lapses",
    ],
    correct: 2
  },
  {
    id: 4,
    question: "In exam revision, which statement is most accurate? What is the main difference between review and appeal under the Act?",
    options: [
      "Review is judicial and appeal is administrative",
      "Appeal comes before review",
      "There is no difference",
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
    ],
    correct: 3
  },
  {
    id: 5,
    question: "What is the key idea behind owner liability for acts of a duly authorised agent?",
    options: [
      "Only agents can ever be liable",
      "The owner's customs responsibility may continue even where an authorised agent acts on the owner's behalf",
      "Only the Commissioner becomes liable",
      "Agency always eliminates owner liability",
    ],
    correct: 1
  },
  {
    id: 6,
    question: "Which option best answers the question: what is short shipment?",
    options: [
      "A method of customs valuation",
      "A temporary import exemption",
      "A type of seizure",
      "A situation where goods entered or intended for export are not shipped as expected or in full",
    ],
    correct: 3
  },
  {
    id: 7,
    question: "Which of the following is the best answer to this EACCMA question: What does termination of transit procedure mean?",
    options: [
      "Issue of entry outwards",
      "Automatic conversion into home consumption",
      "Lawful conclusion of the transit movement once the goods reach the approved destination or are otherwise properly accounted for",
      "Seizure of all transit goods",
    ],
    correct: 2
  },
  {
    id: 8,
    question: "Which statement correctly reflects the Act: can duty still be payable even after conviction and a fine?",
    options: [
      "Yes, duty may be payable in addition to the fine",
      "Only in export cases",
      "No, the fine always replaces duty",
      "Only if the owner appeals",
    ],
    correct: 0
  },
  {
    id: 9,
    question: "Which of the following is the best answer to this EACCMA question: What must a wharf owner provide to the satisfaction of the Commissioner?",
    options: [
      "Only rail access",
      "Only parking for customs vehicles",
      "Only a customs flag",
      "Suitable office accommodation for officers and shed accommodation for goods",
    ],
    correct: 3
  },
  {
    id: 10,
    question: "In exam revision, which statement is most accurate? What does restoration of seizures mean?",
    options: [
      "Seized goods or things may be returned in accordance with the Act",
      "The seizure converts into warehousing",
      "Duty is cancelled automatically",
      "The goods become prohibited",
    ],
    correct: 0
  },
  {
    id: 11,
    question: "Select the best definition of the main difference between review and appeal under the act.",
    options: [
      "There is no difference",
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
      "Appeal comes before review",
      "Review is judicial and appeal is administrative",
    ],
    correct: 1
  },
  {
    id: 12,
    question: "A candidate is asked: what is the function of a search warrant under section 158? Which answer is correct?",
    options: [
      "To appoint customs areas",
      "To issue entry outwards",
      "To authorize entry and search of premises and seizure of relevant goods or documents",
      "To grant tariff treatment",
    ],
    correct: 2
  },
  {
    id: 13,
    question: "Which of the following is the best answer to this EACCMA question: Why are Customs seals protected by criminal sanction?",
    options: [
      "They determine tariff rates",
      "They preserve integrity of customs control over goods or conveyances",
      "They are decorative only",
      "They replace entry documents",
    ],
    correct: 1
  },
  {
    id: 14,
    question: "Which of the following is the best answer to this EACCMA question: Why are warehouse operations controlled?",
    options: [
      "To give warehouses legislative power",
      "To convert all goods into stores",
      "To protect customs revenue and ensure goods remain properly accounted for",
      "To eliminate the need for entry",
    ],
    correct: 2
  },
  {
    id: 15,
    question: "What must happen if an aircraft or vessel is wrecked or forced to land by unavoidable cause?",
    options: [
      "The goods automatically become abandoned",
      "The craft is automatically condemned",
      "The owner must appeal first",
      "The master or agent must report the craft, cargo, and stores to the nearest officer or administrative officer",
    ],
    correct: 3
  },
  {
    id: 16,
    question: "In exam revision, which statement is most accurate? Which items may be delivered without entry subject to an undertaking to furnish entry within 48 hours?",
    options: [
      "Bullion, currency notes, coin, or perishable goods",
      "All restricted imports",
      "All warehoused goods",
      "All passenger baggage",
    ],
    correct: 0
  },
  {
    id: 17,
    question: "Which of the following is the best answer to this EACCMA question: What happens if a person or goods enter or leave a customs area except through an appointed entrance or exit?",
    options: [
      "Nothing if duty is later paid",
      "An offence is committed and the goods may be forfeited",
      "The customs area appointment lapses",
      "Only warehouse rent becomes payable",
    ],
    correct: 1
  },
  {
    id: 18,
    question: "A candidate is asked: can goods subject to customs control be abandoned to customs? Which answer is correct?",
    options: [
      "Yes, automatically on arrival",
      "Yes, but only after Tribunal approval",
      "No, never",
      "Yes, with permission of the Commissioner",
    ],
    correct: 3
  },
  {
    id: 19,
    question: "Which of the following is the best answer to this EACCMA question: What does restoration of seizures mean?",
    options: [
      "The goods become prohibited",
      "Duty is cancelled automatically",
      "Seized goods or things may be returned in accordance with the Act",
      "The seizure converts into warehousing",
    ],
    correct: 2
  },
  {
    id: 20,
    question: "In exam revision, which statement is most accurate? What happens if a person or goods enter or leave a customs area except through an appointed entrance or exit?",
    options: [
      "An offence is committed and the goods may be forfeited",
      "Nothing if duty is later paid",
      "The customs area appointment lapses",
      "Only warehouse rent becomes payable",
    ],
    correct: 0
  },
  {
    id: 21,
    question: "Choose the best answer: Who may require a bond before goods are warehoused?",
    options: [
      "The Post Office",
      "The Tribunal",
      "The warehouse keeper",
      "The proper officer",
    ],
    correct: 3
  },
  {
    id: 22,
    question: "Which of the following is the best answer to this EACCMA question: What legal threshold commonly justifies searches under Part XII?",
    options: [
      "Consent of the owner only",
      "Prior Tribunal authorization",
      "Reasonable grounds to believe",
      "Proof beyond all doubt",
    ],
    correct: 2
  },
  {
    id: 23,
    question: "In exam revision, which statement is most accurate? What is the purpose of examining warehoused goods on delivery?",
    options: [
      "To confirm identity, condition, and compliance before they leave warehouse control",
      "To determine whether a search warrant is needed",
      "To appoint a new warehouse keeper",
      "To assign passenger channels",
    ],
    correct: 0
  },
  {
    id: 24,
    question: "Which option best answers the question: what is condemnation in customs law?",
    options: [
      "A type of drawback",
      "The formal legal process by which seized goods or things are declared forfeited",
      "A border route appointment",
      "An import declaration",
    ],
    correct: 1
  },
  {
    id: 25,
    question: "Which option best answers the question: what is the purpose of anti-dumping duty?",
    options: [
      "To reward exporters",
      "To regulate baggage",
      "To counter unfairly low-priced imports that injure domestic industry",
      "To recover warehouse rent",
    ],
    correct: 2
  },
  {
    id: 26,
    question: "Which statement correctly reflects the Act: can goods subject to customs control be abandoned to customs?",
    options: [
      "No, never",
      "Yes, with permission of the Commissioner",
      "Yes, but only after Tribunal approval",
      "Yes, automatically on arrival",
    ],
    correct: 1
  },
  {
    id: 27,
    question: "Which of the following is the best answer to this EACCMA question: How are imported or exported goods through a pipeline controlled?",
    options: [
      "Their nature and quantities must be recorded and reported as directed by the Commissioner",
      "They are exempt from reporting",
      "They are treated as postal articles",
      "They are controlled only by the operator's internal policy",
    ],
    correct: 0
  },
  {
    id: 28,
    question: "In exam revision, which statement is most accurate? What does allowance for tare relate to?",
    options: [
      "A warehouse penalty",
      "A search power",
      "A tariff preference under COMESA",
      "Deduction for the weight of packaging or container in appropriate cases",
    ],
    correct: 3
  },
  {
    id: 29,
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
    id: 30,
    question: "In exam revision, which statement is most accurate? What is a key distinction between a Government warehouse and a bonded warehouse?",
    options: [
      "Bonded warehouses are only for postal articles",
      "There is no distinction",
      "Government warehouses are only for exports",
      "A Government warehouse is government-provided and approved; a bonded warehouse is licensed and operated by a warehouse keeper",
    ],
    correct: 3
  },
  {
    id: 31,
    question: "Select the best definition of transhipment.",
    options: [
      "Removal from one bonded warehouse to another",
      "Delivery of goods for home consumption",
      "Transfer of goods from an arriving craft from a foreign place to another craft departing to a foreign destination",
      "Movement of goods through a Partner State to a foreign destination",
    ],
    correct: 2
  },
  {
    id: 32,
    question: "A candidate is asked: what must the report on arrival show separately? Which answer is correct?",
    options: [
      "Transit goods, transhipment goods, goods remaining on board for other ports, and goods for re-exportation on the same craft",
      "Only passenger baggage and stores",
      "Only prohibited and restricted goods",
      "Only warehoused and seized goods",
    ],
    correct: 0
  },
  {
    id: 33,
    question: "A candidate is asked: what is the main purpose of licensing customs agents? Which answer is correct?",
    options: [
      "To appoint ports",
      "To transfer customs revenue to agents",
      "To regulate who may act for owners in customs dealings",
      "To create exemptions",
    ],
    correct: 2
  },
  {
    id: 34,
    question: "Select the best definition of the main effect of goods being subject to customs control.",
    options: [
      "They cease to require entry",
      "They become duty free",
      "They automatically become warehoused",
      "They may be examined by any officer and cannot be interfered with except by authority",
    ],
    correct: 3
  },
  {
    id: 35,
    question: "Which statement correctly reflects the Act: can warehoused goods be delivered as stores?",
    options: [
      "Only if passenger baggage",
      "Yes, as provided by the Act",
      "No, never",
      "Only after condemnation",
    ],
    correct: 1
  },
  {
    id: 36,
    question: "Which of the following is the best answer to this EACCMA question: May an officer open a compartment in a searched vehicle by force if access is denied?",
    options: [
      "Yes, in such manner including force as deemed necessary",
      "Only after appeal to the Tribunal",
      "No, force is never permitted",
      "Only if the Council approves",
    ],
    correct: 0
  },
  {
    id: 37,
    question: "Select the best definition of a key distinction between a government warehouse and a bonded warehouse.",
    options: [
      "There is no distinction",
      "A Government warehouse is government-provided and approved; a bonded warehouse is licensed and operated by a warehouse keeper",
      "Government warehouses are only for exports",
      "Bonded warehouses are only for postal articles",
    ],
    correct: 1
  },
  {
    id: 38,
    question: "A candidate is asked: what is the main purpose of recovery of duty by distress? Which answer is correct?",
    options: [
      "Enforcement and collection of unpaid duty",
      "Origin certification",
      "Passenger examination",
      "Port appointment",
    ],
    correct: 0
  },
  {
    id: 39,
    question: "Select the best definition of the main purpose of licensing customs agents.",
    options: [
      "To create exemptions",
      "To transfer customs revenue to agents",
      "To appoint ports",
      "To regulate who may act for owners in customs dealings",
    ],
    correct: 3
  },
  {
    id: 40,
    question: "Which option best answers the question: why are rules on gross weight, reputed quantity, litre equivalent, and tare included in Part X?",
    options: [
      "To define smuggling",
      "To regulate appeals",
      "To provide workable methods for computing duty in different physical measurement situations",
      "To abolish ad valorem duty",
    ],
    correct: 2
  },
  {
    id: 41,
    question: "Select the best definition of the difference between remission and rebate.",
    options: [
      "Both are duty reliefs, but remission is relief granted in qualifying cases while rebate is duty relief allowed under specific statutory conditions",
      "They are always identical",
      "Remission is a passenger allowance",
      "Rebate is a type of seizure",
    ],
    correct: 0
  },
  {
    id: 42,
    question: "In exam revision, which statement is most accurate? What is the difference between remission and rebate?",
    options: [
      "Remission is a passenger allowance",
      "Rebate is a type of seizure",
      "They are always identical",
      "Both are duty reliefs, but remission is relief granted in qualifying cases while rebate is duty relief allowed under specific statutory conditions",
    ],
    correct: 3
  },
  {
    id: 43,
    question: "Which of the following is the best answer to this EACCMA question: Why is section 159 especially important after seizure?",
    options: [
      "It grants exemptions",
      "It allows compulsory production of records relevant to seized goods or related dealings",
      "It automatically restores the goods",
      "It ends all prosecutions",
    ],
    correct: 1
  },
  {
    id: 44,
    question: "In exam revision, which statement is most accurate? What must happen if an aircraft or vessel is wrecked or forced to land by unavoidable cause?",
    options: [
      "The owner must appeal first",
      "The goods automatically become abandoned",
      "The master or agent must report the craft, cargo, and stores to the nearest officer or administrative officer",
      "The craft is automatically condemned",
    ],
    correct: 2
  },
  {
    id: 45,
    question: "In exam revision, which statement is most accurate? Why is section 159 especially important after seizure?",
    options: [
      "It automatically restores the goods",
      "It ends all prosecutions",
      "It grants exemptions",
      "It allows compulsory production of records relevant to seized goods or related dealings",
    ],
    correct: 3
  },
  {
    id: 46,
    question: "Which of the following is the best answer to this EACCMA question: What must happen if an aircraft or vessel is wrecked or forced to land by unavoidable cause?",
    options: [
      "The craft is automatically condemned",
      "The master or agent must report the craft, cargo, and stores to the nearest officer or administrative officer",
      "The owner must appeal first",
      "The goods automatically become abandoned",
    ],
    correct: 1
  },
  {
    id: 47,
    question: "Which of the following is the best answer to this EACCMA question: Why are transit and transhipment included within Part V?",
    options: [
      "Because exportation excludes foreign goods",
      "Because all transit goods are home-consumption goods",
      "Because outward movement under customs control includes more than ordinary local exports",
      "Because Part V only concerns baggage",
    ],
    correct: 2
  },
  {
    id: 48,
    question: "Select the best definition of the key idea behind owner liability for acts of a duly authorised agent.",
    options: [
      "The owner's customs responsibility may continue even where an authorised agent acts on the owner's behalf",
      "Only agents can ever be liable",
      "Only the Commissioner becomes liable",
      "Agency always eliminates owner liability",
    ],
    correct: 0
  },
  {
    id: 49,
    question: "A candidate is asked: why are transit and transhipment included within part v? Which answer is correct?",
    options: [
      "Because all transit goods are home-consumption goods",
      "Because exportation excludes foreign goods",
      "Because outward movement under customs control includes more than ordinary local exports",
      "Because Part V only concerns baggage",
    ],
    correct: 2
  },
  {
    id: 50,
    question: "Which option best answers the question: what is the key idea behind owner liability for acts of a duly authorised agent?",
    options: [
      "Only the Commissioner becomes liable",
      "Agency always eliminates owner liability",
      "Only agents can ever be liable",
      "The owner's customs responsibility may continue even where an authorised agent acts on the owner's behalf",
    ],
    correct: 3
  },
];
