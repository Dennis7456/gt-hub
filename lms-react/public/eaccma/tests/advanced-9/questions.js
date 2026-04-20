const QUESTIONS = [
  {
    id: 1,
    question: "Which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption and drawback are identical in all legal effects",
      "Exemption is a seizure power, while drawback is a search power",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
    ],
    correct: 0
  },
  {
    id: 2,
    question: "In a problem question, which event best marks the legal time of exportation for goods carried by aircraft or vessel?",
    options: [
      "The moment entry outwards is granted",
      "The moment the goods are packed for transport",
      "Departure of the carrying aircraft or vessel from its final position, anchorage, or berth at the place of shipment",
      "The time the cargo is first entered for export",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "Which option most directly reflects the Act if asked about this issue: an importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because warehousing transfers ownership permanently to Customs",
      "Because warehousing is reserved only for seized goods",
      "Because once warehoused, goods become prohibited goods by law",
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
    ],
    correct: 3
  },
  {
    id: 4,
    question: "Choose the single best legal answer: imported goods are landed into a transit shed. Until they are lawfully delivered from that shed, how are they treated for responsibility purposes?",
    options: [
      "They cease to be subject to customs control once placed in the shed",
      "They are deemed to remain in the importing aircraft or vessel, so the owner or agent remains responsible unless the shed owner legally takes that responsibility",
      "They become the consignee's responsibility only",
      "They are treated as entered for home consumption automatically",
    ],
    correct: 1
  },
  {
    id: 5,
    question: "From an exam perspective, which statement is most accurate: which option best states the legal idea of smuggling under the Act?",
    options: [
      "Any movement of goods between customs areas with approval",
      "Any delayed cargo entry after 21 days",
      "Importing, exporting, carrying coastwise, transferring, or removing goods with intent to defraud revenue or evade prohibitions, restrictions, regulations, or conditions",
      "Any sale of goods below market value",
    ],
    correct: 2
  },
  {
    id: 6,
    question: "Where is the exemptions regime set out?",
    options: [
      "The First Schedule",
      "The Fifth Schedule",
      "The Sixth Schedule",
      "The Third Schedule",
    ],
    correct: 1
  },
  {
    id: 7,
    question: "In a problem question, which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods automatically become diplomatic goods",
    ],
    correct: 0
  },
  {
    id: 8,
    question: "Which option most directly reflects the Act if asked about this issue: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are deemed duty-free once a claim is filed",
      "Goods are first restored, then seized, then valued",
      "Goods are automatically auctioned before any seizure",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
    ],
    correct: 3
  },
  {
    id: 9,
    question: "Choose the single best legal answer: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are deemed duty-free once a claim is filed",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are first restored, then seized, then valued",
      "Goods are automatically auctioned before any seizure",
    ],
    correct: 1
  },
  {
    id: 10,
    question: "From an exam perspective, which statement is most accurate: which statement about the Second and Third Schedules is correct?",
    options: [
      "The Second Schedule deals with distress, while the Third deals with officer declarations",
      "Both schedules only concern warehousing",
      "The Second Schedule deals with imports, while the Third Schedule deals with exports",
      "The Second Schedule deals with valuation, while the Third deals with exemptions",
    ],
    correct: 2
  },
  {
    id: 11,
    question: "Which event best marks the legal time of exportation for goods carried by aircraft or vessel?",
    options: [
      "The moment the goods are packed for transport",
      "The time the cargo is first entered for export",
      "The moment entry outwards is granted",
      "Departure of the carrying aircraft or vessel from its final position, anchorage, or berth at the place of shipment",
    ],
    correct: 3
  },
  {
    id: 12,
    question: "In a problem question, which pairing is correct?",
    options: [
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
    ],
    correct: 0
  },
  {
    id: 13,
    question: "Which option most directly reflects the Act if asked about this issue: under the Act, who is a proper officer?",
    options: [
      "Only the Commissioner personally",
      "Any police officer in the country",
      "Any warehouse keeper appointed by the Council",
      "Any officer whose right or duty it is to require the performance of, or to perform, the act in question",
    ],
    correct: 3
  },
  {
    id: 14,
    question: "Choose the single best legal answer: which pairing is correct?",
    options: [
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
    ],
    correct: 2
  },
  {
    id: 15,
    question: "From an exam perspective, which statement is most accurate: during a lawful search, an officer cannot access a locked compartment in a vehicle suspected of carrying uncustomed goods. Which statement is most accurate?",
    options: [
      "The officer may open it in the manner, including by force, that is reasonably necessary under the Act",
      "The officer must wait until the owner volunteers the key",
      "The officer may condemn the goods without searching the compartment",
      "Only a warehouse keeper may authorize forced opening",
    ],
    correct: 0
  },
  {
    id: 16,
    question: "Within what period must the whole of unloaded cargo generally be entered?",
    options: [
      "Within 48 hours after arrival in all cases",
      "Within 21 days after commencement of discharge, unless more time is allowed",
      "Within 14 days after baggage examination",
      "Within 30 days after warehousing",
    ],
    correct: 1
  },
  {
    id: 17,
    question: "In a problem question, during a lawful search, an officer cannot access a locked compartment in a vehicle suspected of carrying uncustomed goods. Which statement is most accurate?",
    options: [
      "The officer must wait until the owner volunteers the key",
      "Only a warehouse keeper may authorize forced opening",
      "The officer may open it in the manner, including by force, that is reasonably necessary under the Act",
      "The officer may condemn the goods without searching the compartment",
    ],
    correct: 2
  },
  {
    id: 18,
    question: "Which option most directly reflects the Act if asked about this issue: when may an officer stop and search a vehicle under section 153?",
    options: [
      "Only during normal office hours at a customs airport",
      "Only after a Tribunal warrant",
      "Only if the driver first refuses to pay warehouse rent",
      "When the officer has reasonable grounds to believe it carries uncustomed goods or goods being unlawfully transferred",
    ],
    correct: 3
  },
  {
    id: 19,
    question: "Choose the single best legal answer: which body is recognized as the formal appellate forum in Part XX?",
    options: [
      "The Tax Appeals Tribunal",
      "The Customs Co-operation Council",
      "The Council Committee on Customs Administration",
      "The Directorate of Customs",
    ],
    correct: 0
  },
  {
    id: 20,
    question: "From an exam perspective, which statement is most accurate: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are deemed duty-free once a claim is filed",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are automatically auctioned before any seizure",
      "Goods are first restored, then seized, then valued",
    ],
    correct: 1
  },
  {
    id: 21,
    question: "Which reporting pair is correct under the Act?",
    options: [
      "A vessel reports only after bulk is broken",
      "Both report only after arrival",
      "A vessel reports not less than 24 hours before arrival; an aircraft reports immediately after take-off from the foreign port",
      "A vessel reports after discharge; an aircraft 24 hours before landing",
    ],
    correct: 2
  },
  {
    id: 22,
    question: "In a problem question, which pairing is correct under the Act?",
    options: [
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
    ],
    correct: 3
  },
  {
    id: 23,
    question: "Which option most directly reflects the Act if asked about this issue: a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "Seizure applies only to documents while forfeiture applies only to vehicles",
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
      "They are the same and the Act uses the words interchangeably",
      "Forfeiture happens first and seizure only follows after auction",
    ],
    correct: 1
  },
  {
    id: 24,
    question: "Choose the single best legal answer: which reporting pair is correct under the Act?",
    options: [
      "A vessel reports not less than 24 hours before arrival; an aircraft reports immediately after take-off from the foreign port",
      "Both report only after arrival",
      "A vessel reports after discharge; an aircraft 24 hours before landing",
      "A vessel reports only after bulk is broken",
    ],
    correct: 0
  },
  {
    id: 25,
    question: "From an exam perspective, which statement is most accurate: an officer is determining duty on imported goods that attract ad valorem duty. What is the most direct legal source for the valuation rules?",
    options: [
      "Section 114 read together with the Fifth Schedule",
      "Section 145 read together with the First Schedule",
      "Section 122 read together with the Fourth Schedule",
      "Section 130 read together with the Sixth Schedule",
    ],
    correct: 2
  },
  {
    id: 26,
    question: "Goods are entered for export but are discharged again within a Partner State instead of completing exportation. Which principle is most directly undermined?",
    options: [
      "The rule that all exports must pass through the green channel",
      "The rule that goods entered for export should not be discharged in a Partner State as though the export procedure could be reversed casually",
      "The rule that duty must always be paid before entry outwards is granted",
      "The rule that all export goods must first be warehoused",
    ],
    correct: 1
  },
  {
    id: 27,
    question: "In a problem question, who is the warehouse keeper in relation to a bonded warehouse?",
    options: [
      "The Commissioner of Customs",
      "The officer stationed nearest the gate",
      "The consignee with the highest-value cargo",
      "The holder of the licence granted in respect of that bonded warehouse",
    ],
    correct: 3
  },
  {
    id: 28,
    question: "Which option most directly reflects the Act if asked about this issue: goods are entered for export but are discharged again within a Partner State instead of completing exportation. Which principle is most directly undermined?",
    options: [
      "The rule that goods entered for export should not be discharged in a Partner State as though the export procedure could be reversed casually",
      "The rule that duty must always be paid before entry outwards is granted",
      "The rule that all export goods must first be warehoused",
      "The rule that all exports must pass through the green channel",
    ],
    correct: 0
  },
  {
    id: 29,
    question: "Choose the single best legal answer: where are the rules for customs valuation of imported goods liable to ad valorem import duty found?",
    options: [
      "The Fifth Schedule",
      "The Fourth Schedule",
      "The Second Schedule",
      "The Sixth Schedule",
    ],
    correct: 1
  },
  {
    id: 30,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct under the Act?",
    options: [
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Commissioner appoints ports, while the Council appoints customs areas",
    ],
    correct: 0
  },
  {
    id: 31,
    question: "What is duty drawback?",
    options: [
      "An anti-dumping duty on subsidized imports",
      "A penalty imposed in addition to export duty",
      "A method of warehousing goods",
      "A refund of all or part of import duty paid when goods are later exported or otherwise used in a qualifying prescribed way",
    ],
    correct: 3
  },
  {
    id: 32,
    question: "In a problem question, what is the best description of entry outwards?",
    options: [
      "A valuation method for export duty",
      "A bonded warehouse licence issued by the Commissioner",
      "The formal customs step allowing an aircraft or vessel to proceed outward with export cargo or stores",
      "The same thing as condemnation of seized goods",
    ],
    correct: 2
  },
  {
    id: 33,
    question: "Which option most directly reflects the Act if asked about this issue: what is the legal effect of section 201?",
    options: [
      "All duty is automatically waived after conviction",
      "Duty may remain payable in addition to any fine imposed for the offence",
      "Payment of duty replaces every fine",
      "Only warehouse rent remains payable",
    ],
    correct: 1
  },
  {
    id: 34,
    question: "Choose the single best legal answer: goods are entered for export but are discharged again within a Partner State instead of completing exportation. Which principle is most directly undermined?",
    options: [
      "The rule that duty must always be paid before entry outwards is granted",
      "The rule that all export goods must first be warehoused",
      "The rule that all exports must pass through the green channel",
      "The rule that goods entered for export should not be discharged in a Partner State as though the export procedure could be reversed casually",
    ],
    correct: 3
  },
  {
    id: 35,
    question: "From an exam perspective, which statement is most accurate: during a lawful search, an officer cannot access a locked compartment in a vehicle suspected of carrying uncustomed goods. Which statement is most accurate?",
    options: [
      "The officer may open it in the manner, including by force, that is reasonably necessary under the Act",
      "Only a warehouse keeper may authorize forced opening",
      "The officer may condemn the goods without searching the compartment",
      "The officer must wait until the owner volunteers the key",
    ],
    correct: 0
  },
  {
    id: 36,
    question: "When may an officer stop and search a vehicle under section 153?",
    options: [
      "Only if the driver first refuses to pay warehouse rent",
      "Only after a Tribunal warrant",
      "When the officer has reasonable grounds to believe it carries uncustomed goods or goods being unlawfully transferred",
      "Only during normal office hours at a customs airport",
    ],
    correct: 2
  },
  {
    id: 37,
    question: "In a problem question, what is the best description of entry outwards?",
    options: [
      "A valuation method for export duty",
      "The formal customs step allowing an aircraft or vessel to proceed outward with export cargo or stores",
      "A bonded warehouse licence issued by the Commissioner",
      "The same thing as condemnation of seized goods",
    ],
    correct: 1
  },
  {
    id: 38,
    question: "Which option most directly reflects the Act if asked about this issue: what is the basic starting point of warehousing under Part IV?",
    options: [
      "Only seized goods may be warehoused",
      "Only goods in transit may be warehoused",
      "Dutiable goods may be warehoused",
      "Warehousing applies only to export goods",
    ],
    correct: 2
  },
  {
    id: 39,
    question: "Choose the single best legal answer: what must a permanently appointed customs officer do upon appointment?",
    options: [
      "Make and subscribe the declaration in the First Schedule before a magistrate or commissioner for oaths",
      "File a valuation declaration under the Fourth Schedule",
      "Take an oath only before the Directorate",
      "Sign an export bond in the Sixth Schedule",
    ],
    correct: 0
  },
  {
    id: 40,
    question: "From an exam perspective, which statement is most accurate: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
    ],
    correct: 3
  },
  {
    id: 41,
    question: "Which section specifically addresses making or using false documents?",
    options: [
      "Section 203",
      "Section 195",
      "Section 210",
      "Section 229",
    ],
    correct: 0
  },
  {
    id: 42,
    question: "In a problem question, which event best marks the legal time of importation of goods?",
    options: [
      "When the owner pays warehouse rent",
      "When the goods come within the boundaries of the Partner States",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the consignee removes the goods from the customs area",
    ],
    correct: 1
  },
  {
    id: 43,
    question: "Which option most directly reflects the Act if asked about this issue: a customs officer has reasonable grounds to believe that a vehicle carries uncustomed goods. The driver refuses to stop. What follows most directly under the Act?",
    options: [
      "The goods become exempt from seizure because the vehicle was moving",
      "The driver may insist on search only after a review to the Commissioner",
      "The officer must abandon the matter unless a magistrate is present",
      "The refusal itself is an offence, and the officer's stop-and-search power remains engaged",
    ],
    correct: 3
  },
  {
    id: 44,
    question: "Choose the single best legal answer: an importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "Only export duty may survive after conviction",
      "Duty becomes payable only if the Tribunal later orders it separately",
      "The Act allows payment of duty in addition to the fine",
      "The fine automatically substitutes for all customs obligations",
    ],
    correct: 2
  },
  {
    id: 45,
    question: "From an exam perspective, which statement is most accurate: what is the correct appeal path under Part XX?",
    options: [
      "Appeal directly to the Directorate",
      "Appeal to the police first, then to the Commissioner",
      "Application to the warehouse keeper, then to the magistrate",
      "Application for review to the Commissioner, then appeal to the Tax Appeals Tribunal",
    ],
    correct: 3
  },
  {
    id: 46,
    question: "A person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "They are the same and the Act uses the words interchangeably",
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
      "Forfeiture happens first and seizure only follows after auction",
      "Seizure applies only to documents while forfeiture applies only to vehicles",
    ],
    correct: 1
  },
  {
    id: 47,
    question: "In a problem question, which pairing is correct?",
    options: [
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
    ],
    correct: 2
  },
  {
    id: 48,
    question: "Which option most directly reflects the Act if asked about this issue: which statement about the Second and Third Schedules is correct?",
    options: [
      "The Second Schedule deals with imports, while the Third Schedule deals with exports",
      "Both schedules only concern warehousing",
      "The Second Schedule deals with distress, while the Third deals with officer declarations",
      "The Second Schedule deals with valuation, while the Third deals with exemptions",
    ],
    correct: 0
  },
  {
    id: 49,
    question: "Choose the single best legal answer: what is duty drawback?",
    options: [
      "A penalty imposed in addition to export duty",
      "An anti-dumping duty on subsidized imports",
      "A method of warehousing goods",
      "A refund of all or part of import duty paid when goods are later exported or otherwise used in a qualifying prescribed way",
    ],
    correct: 3
  },
  {
    id: 50,
    question: "From an exam perspective, which statement is most accurate: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are first restored, then seized, then valued",
      "Goods are automatically auctioned before any seizure",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are deemed duty-free once a claim is filed",
    ],
    correct: 2
  },
];
