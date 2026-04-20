const QUESTIONS = [
  {
    id: 1,
    question: "Choose the single best legal answer: which body is recognized as the formal appellate forum in Part XX?",
    options: [
      "The Customs Co-operation Council",
      "The Council Committee on Customs Administration",
      "The Directorate of Customs",
      "The Tax Appeals Tribunal",
    ],
    correct: 3
  },
  {
    id: 2,
    question: "From an exam perspective, which statement is most accurate: a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
      "Forfeiture happens first and seizure only follows after auction",
      "Seizure applies only to documents while forfeiture applies only to vehicles",
      "They are the same and the Act uses the words interchangeably",
    ],
    correct: 0
  },
  {
    id: 3,
    question: "Which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are deemed duty-free once a claim is filed",
      "Goods are first restored, then seized, then valued",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are automatically auctioned before any seizure",
    ],
    correct: 2
  },
  {
    id: 4,
    question: "In a problem question, an importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "Only export duty may survive after conviction",
      "The Act allows payment of duty in addition to the fine",
      "Duty becomes payable only if the Tribunal later orders it separately",
      "The fine automatically substitutes for all customs obligations",
    ],
    correct: 1
  },
  {
    id: 5,
    question: "Which option most directly reflects the Act if asked about this issue: which event best marks the legal time of importation of goods?",
    options: [
      "When the consignee removes the goods from the customs area",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the goods come within the boundaries of the Partner States",
      "When the owner pays warehouse rent",
    ],
    correct: 2
  },
  {
    id: 6,
    question: "Choose the single best legal answer: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are first restored, then seized, then valued",
      "Goods are automatically auctioned before any seizure",
      "Goods are deemed duty-free once a claim is filed",
    ],
    correct: 0
  },
  {
    id: 7,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct under the Act?",
    options: [
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
    ],
    correct: 3
  },
  {
    id: 8,
    question: "Which Schedule contains the declaration of officer?",
    options: [
      "The Fifth Schedule",
      "The First Schedule",
      "The Sixth Schedule",
      "The Second Schedule",
    ],
    correct: 1
  },
  {
    id: 9,
    question: "In a problem question, which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Approval of the Customs Co-operation Council",
      "Final conviction by a subordinate court",
      "Written consent of the owner",
      "Reasonable grounds to believe",
    ],
    correct: 3
  },
  {
    id: 10,
    question: "Which option most directly reflects the Act if asked about this issue: a customs officer has reasonable grounds to believe that a vehicle carries uncustomed goods. The driver refuses to stop. What follows most directly under the Act?",
    options: [
      "The officer must abandon the matter unless a magistrate is present",
      "The driver may insist on search only after a review to the Commissioner",
      "The refusal itself is an offence, and the officer's stop-and-search power remains engaged",
      "The goods become exempt from seizure because the vehicle was moving",
    ],
    correct: 2
  },
  {
    id: 11,
    question: "Choose the single best legal answer: a trader wants to challenge a customs decision immediately before the Tribunal without first approaching the Commissioner. What is the best answer under Part XX?",
    options: [
      "The trader must first seek a search warrant",
      "The Act first provides for review to the Commissioner before appeal to the Tax Appeals Tribunal",
      "The Council must first approve all appeals",
      "The Tribunal is always the first forum",
    ],
    correct: 1
  },
  {
    id: 12,
    question: "From an exam perspective, which statement is most accurate: which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
      "Exemption and drawback are identical in all legal effects",
      "Exemption is a seizure power, while drawback is a search power",
    ],
    correct: 0
  },
  {
    id: 13,
    question: "Which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods automatically become diplomatic goods",
    ],
    correct: 1
  },
  {
    id: 14,
    question: "In a problem question, which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Reasonable grounds to believe",
      "Final conviction by a subordinate court",
      "Approval of the Customs Co-operation Council",
      "Written consent of the owner",
    ],
    correct: 0
  },
  {
    id: 15,
    question: "Which option most directly reflects the Act if asked about this issue: as a general rule, where must an arriving aircraft or vessel from outside the Partner States first land, touch, or enter?",
    options: [
      "Any sufferance wharf chosen by the master",
      "Any inland warehouse designated by the consignee",
      "A lawful port, unless the proper officer allows otherwise in special circumstances",
      "Any place where cargo can be discharged quickly",
    ],
    correct: 2
  },
  {
    id: 16,
    question: "Choose the single best legal answer: a trader wants to challenge a customs decision immediately before the Tribunal without first approaching the Commissioner. What is the best answer under Part XX?",
    options: [
      "The trader must first seek a search warrant",
      "The Council must first approve all appeals",
      "The Tribunal is always the first forum",
      "The Act first provides for review to the Commissioner before appeal to the Tax Appeals Tribunal",
    ],
    correct: 3
  },
  {
    id: 17,
    question: "From an exam perspective, which statement is most accurate: a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
      "They are the same because both appear in Part X",
      "Valuation applies only to exports and rate of duty applies only to imports",
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
    ],
    correct: 0
  },
  {
    id: 18,
    question: "Which pairing is correct?",
    options: [
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
    ],
    correct: 3
  },
  {
    id: 19,
    question: "In a problem question, goods are entered for export but are discharged again within a Partner State instead of completing exportation. Which principle is most directly undermined?",
    options: [
      "The rule that duty must always be paid before entry outwards is granted",
      "The rule that all export goods must first be warehoused",
      "The rule that goods entered for export should not be discharged in a Partner State as though the export procedure could be reversed casually",
      "The rule that all exports must pass through the green channel",
    ],
    correct: 2
  },
  {
    id: 20,
    question: "Which option most directly reflects the Act if asked about this issue: a customs officer has reasonable grounds to believe that a vehicle carries uncustomed goods. The driver refuses to stop. What follows most directly under the Act?",
    options: [
      "The driver may insist on search only after a review to the Commissioner",
      "The refusal itself is an offence, and the officer's stop-and-search power remains engaged",
      "The officer must abandon the matter unless a magistrate is present",
      "The goods become exempt from seizure because the vehicle was moving",
    ],
    correct: 1
  },
  {
    id: 21,
    question: "Choose the single best legal answer: which section specifically addresses making or using false documents?",
    options: [
      "Section 210",
      "Section 229",
      "Section 203",
      "Section 195",
    ],
    correct: 2
  },
  {
    id: 22,
    question: "From an exam perspective, which statement is most accurate: which event best marks the legal time of exportation for goods carried by aircraft or vessel?",
    options: [
      "The moment the goods are packed for transport",
      "Departure of the carrying aircraft or vessel from its final position, anchorage, or berth at the place of shipment",
      "The moment entry outwards is granted",
      "The time the cargo is first entered for export",
    ],
    correct: 1
  },
  {
    id: 23,
    question: "Within what period must the whole of unloaded cargo generally be entered?",
    options: [
      "Within 21 days after commencement of discharge, unless more time is allowed",
      "Within 30 days after warehousing",
      "Within 14 days after baggage examination",
      "Within 48 hours after arrival in all cases",
    ],
    correct: 0
  },
  {
    id: 24,
    question: "In a problem question, which option best states the legal idea of smuggling under the Act?",
    options: [
      "Any sale of goods below market value",
      "Any movement of goods between customs areas with approval",
      "Any delayed cargo entry after 21 days",
      "Importing, exporting, carrying coastwise, transferring, or removing goods with intent to defraud revenue or evade prohibitions, restrictions, regulations, or conditions",
    ],
    correct: 3
  },
  {
    id: 25,
    question: "Which option most directly reflects the Act if asked about this issue: a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
      "Seizure applies only to documents while forfeiture applies only to vehicles",
      "Forfeiture happens first and seizure only follows after auction",
      "They are the same and the Act uses the words interchangeably",
    ],
    correct: 0
  },
  {
    id: 26,
    question: "Choose the single best legal answer: during a lawful search, an officer cannot access a locked compartment in a vehicle suspected of carrying uncustomed goods. Which statement is most accurate?",
    options: [
      "The officer must wait until the owner volunteers the key",
      "The officer may open it in the manner, including by force, that is reasonably necessary under the Act",
      "The officer may condemn the goods without searching the compartment",
      "Only a warehouse keeper may authorize forced opening",
    ],
    correct: 1
  },
  {
    id: 27,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct?",
    options: [
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
    ],
    correct: 2
  },
  {
    id: 28,
    question: "Which event best marks the legal time of importation of goods?",
    options: [
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the owner pays warehouse rent",
      "When the consignee removes the goods from the customs area",
      "When the goods come within the boundaries of the Partner States",
    ],
    correct: 3
  },
  {
    id: 29,
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
    id: 30,
    question: "Which option most directly reflects the Act if asked about this issue: which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
      "The Directorate is a judicial body, while the Commissioner is legislative",
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
    ],
    correct: 0
  },
  {
    id: 31,
    question: "Choose the single best legal answer: a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "Valuation applies only to exports and rate of duty applies only to imports",
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
      "They are the same because both appear in Part X",
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
    ],
    correct: 3
  },
  {
    id: 32,
    question: "From an exam perspective, which statement is most accurate: where are the rules for customs valuation of imported goods liable to ad valorem import duty found?",
    options: [
      "The Fifth Schedule",
      "The Fourth Schedule",
      "The Second Schedule",
      "The Sixth Schedule",
    ],
    correct: 1
  },
  {
    id: 33,
    question: "Which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are prohibited imports in every case",
    ],
    correct: 2
  },
  {
    id: 34,
    question: "In a problem question, which statement best captures the meaning of uncustomed goods?",
    options: [
      "Only seized goods awaiting condemnation",
      "Dutiable goods whose full duties have not been paid, and goods dealt with contrary to customs law",
      "Only prohibited imports in the Second Schedule",
      "Only goods without invoices",
    ],
    correct: 1
  },
  {
    id: 35,
    question: "Which option most directly reflects the Act if asked about this issue: an importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "The fine automatically substitutes for all customs obligations",
      "Only export duty may survive after conviction",
      "Duty becomes payable only if the Tribunal later orders it separately",
      "The Act allows payment of duty in addition to the fine",
    ],
    correct: 3
  },
  {
    id: 36,
    question: "Choose the single best legal answer: which statement about the Second and Third Schedules is correct?",
    options: [
      "The Second Schedule deals with imports, while the Third Schedule deals with exports",
      "Both schedules only concern warehousing",
      "The Second Schedule deals with valuation, while the Third deals with exemptions",
      "The Second Schedule deals with distress, while the Third deals with officer declarations",
    ],
    correct: 0
  },
  {
    id: 37,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct?",
    options: [
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
    ],
    correct: 3
  },
  {
    id: 38,
    question: "Which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Written consent of the owner",
      "Reasonable grounds to believe",
      "Approval of the Customs Co-operation Council",
      "Final conviction by a subordinate court",
    ],
    correct: 1
  },
  {
    id: 39,
    question: "In a problem question, which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are first restored, then seized, then valued",
      "Goods are automatically auctioned before any seizure",
      "Goods are deemed duty-free once a claim is filed",
    ],
    correct: 0
  },
  {
    id: 40,
    question: "Which option most directly reflects the Act if asked about this issue: an importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because once warehoused, goods become prohibited goods by law",
      "Because warehousing transfers ownership permanently to Customs",
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
      "Because warehousing is reserved only for seized goods",
    ],
    correct: 2
  },
  {
    id: 41,
    question: "Choose the single best legal answer: which pairing is correct?",
    options: [
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
    ],
    correct: 1
  },
  {
    id: 42,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct?",
    options: [
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
    ],
    correct: 3
  },
  {
    id: 43,
    question: "During a lawful search, an officer cannot access a locked compartment in a vehicle suspected of carrying uncustomed goods. Which statement is most accurate?",
    options: [
      "The officer may open it in the manner, including by force, that is reasonably necessary under the Act",
      "The officer must wait until the owner volunteers the key",
      "Only a warehouse keeper may authorize forced opening",
      "The officer may condemn the goods without searching the compartment",
    ],
    correct: 0
  },
  {
    id: 44,
    question: "In a problem question, an officer is determining duty on imported goods that attract ad valorem duty. What is the most direct legal source for the valuation rules?",
    options: [
      "Section 130 read together with the Sixth Schedule",
      "Section 114 read together with the Fifth Schedule",
      "Section 122 read together with the Fourth Schedule",
      "Section 145 read together with the First Schedule",
    ],
    correct: 2
  },
  {
    id: 45,
    question: "Which option most directly reflects the Act if asked about this issue: which Schedule is most directly connected to recovery of duty by distress?",
    options: [
      "The Sixth Schedule",
      "The Fourth Schedule",
      "The First Schedule",
      "The Third Schedule",
    ],
    correct: 0
  },
  {
    id: 46,
    question: "Choose the single best legal answer: an importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because once warehoused, goods become prohibited goods by law",
      "Because warehousing transfers ownership permanently to Customs",
      "Because warehousing is reserved only for seized goods",
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
    ],
    correct: 3
  },
  {
    id: 47,
    question: "From an exam perspective, which statement is most accurate: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are first restored, then seized, then valued",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are deemed duty-free once a claim is filed",
      "Goods are automatically auctioned before any seizure",
    ],
    correct: 1
  },
  {
    id: 48,
    question: "Which pairing is correct?",
    options: [
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
    ],
    correct: 2
  },
  {
    id: 49,
    question: "In a problem question, an importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because once warehoused, goods become prohibited goods by law",
      "Because warehousing is reserved only for seized goods",
      "Because warehousing transfers ownership permanently to Customs",
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
    ],
    correct: 3
  },
  {
    id: 50,
    question: "Which option most directly reflects the Act if asked about this issue: which pairing is correct under the Act?",
    options: [
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
    ],
    correct: 2
  },
];
