const QUESTIONS = [
  {
    id: 1,
    question: "Which option most directly reflects the Act if asked about this issue: what is the legal effect of section 201?",
    options: [
      "Payment of duty replaces every fine",
      "Duty may remain payable in addition to any fine imposed for the offence",
      "All duty is automatically waived after conviction",
      "Only warehouse rent remains payable",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "Choose the single best legal answer: during a lawful search, an officer cannot access a locked compartment in a vehicle suspected of carrying uncustomed goods. Which statement is most accurate?",
    options: [
      "The officer may condemn the goods without searching the compartment",
      "Only a warehouse keeper may authorize forced opening",
      "The officer may open it in the manner, including by force, that is reasonably necessary under the Act",
      "The officer must wait until the owner volunteers the key",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "From an exam perspective, which statement is most accurate: which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Written consent of the owner",
      "Approval of the Customs Co-operation Council",
      "Final conviction by a subordinate court",
      "Reasonable grounds to believe",
    ],
    correct: 3
  },
  {
    id: 4,
    question: "Which pairing is correct?",
    options: [
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
    ],
    correct: 0
  },
  {
    id: 5,
    question: "In a problem question, imported goods are landed into a transit shed. Until they are lawfully delivered from that shed, how are they treated for responsibility purposes?",
    options: [
      "They become the consignee's responsibility only",
      "They are deemed to remain in the importing aircraft or vessel, so the owner or agent remains responsible unless the shed owner legally takes that responsibility",
      "They are treated as entered for home consumption automatically",
      "They cease to be subject to customs control once placed in the shed",
    ],
    correct: 1
  },
  {
    id: 6,
    question: "Which option most directly reflects the Act if asked about this issue: within export procedure, what are stores?",
    options: [
      "Goods for use or sale on board aircraft, vessels, and trains engaged in international transport",
      "Any goods waiting in a customs warehouse",
      "Only fuel in pipeline imports",
      "Any goods seized during a baggage search",
    ],
    correct: 0
  },
  {
    id: 7,
    question: "Choose the single best legal answer: which reporting pair is correct under the Act?",
    options: [
      "A vessel reports after discharge; an aircraft 24 hours before landing",
      "Both report only after arrival",
      "A vessel reports only after bulk is broken",
      "A vessel reports not less than 24 hours before arrival; an aircraft reports immediately after take-off from the foreign port",
    ],
    correct: 3
  },
  {
    id: 8,
    question: "From an exam perspective, which statement is most accurate: what does restoration of seizures mean?",
    options: [
      "A mandatory acquittal in all proceedings",
      "Automatic remission of all future duty",
      "Return of seized goods or things in accordance with the Act",
      "Conversion into warehoused goods by default",
    ],
    correct: 2
  },
  {
    id: 9,
    question: "Which event best marks the legal time of exportation for goods carried by aircraft or vessel?",
    options: [
      "The moment entry outwards is granted",
      "Departure of the carrying aircraft or vessel from its final position, anchorage, or berth at the place of shipment",
      "The time the cargo is first entered for export",
      "The moment the goods are packed for transport",
    ],
    correct: 1
  },
  {
    id: 10,
    question: "In a problem question, which pairing is correct?",
    options: [
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
    ],
    correct: 2
  },
  {
    id: 11,
    question: "Which option most directly reflects the Act if asked about this issue: which pairing is correct under the Act?",
    options: [
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Commissioner appoints ports, while the Council appoints customs areas",
    ],
    correct: 0
  },
  {
    id: 12,
    question: "Choose the single best legal answer: which statement about the Second and Third Schedules is correct?",
    options: [
      "Both schedules only concern warehousing",
      "The Second Schedule deals with valuation, while the Third deals with exemptions",
      "The Second Schedule deals with distress, while the Third deals with officer declarations",
      "The Second Schedule deals with imports, while the Third Schedule deals with exports",
    ],
    correct: 3
  },
  {
    id: 13,
    question: "From an exam perspective, which statement is most accurate: within export procedure, what are stores?",
    options: [
      "Any goods seized during a baggage search",
      "Any goods waiting in a customs warehouse",
      "Goods for use or sale on board aircraft, vessels, and trains engaged in international transport",
      "Only fuel in pipeline imports",
    ],
    correct: 2
  },
  {
    id: 14,
    question: "Which responsibility belongs most directly to the Commissioner in a Partner State?",
    options: [
      "Serving as the final appellate body",
      "Management and control of Customs, including collection of and accounting for customs revenue",
      "Promulgating the Treaty",
      "Appointing ports by Council Gazette",
    ],
    correct: 1
  },
  {
    id: 15,
    question: "In a problem question, which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Written consent of the owner",
      "Approval of the Customs Co-operation Council",
      "Final conviction by a subordinate court",
      "Reasonable grounds to believe",
    ],
    correct: 3
  },
  {
    id: 16,
    question: "Which option most directly reflects the Act if asked about this issue: which Schedule should an officer consult first for prohibited and restricted exports generally?",
    options: [
      "The Third Schedule",
      "The Sixth Schedule",
      "The Fourth Schedule",
      "The Second Schedule",
    ],
    correct: 0
  },
  {
    id: 17,
    question: "Choose the single best legal answer: who is the warehouse keeper in relation to a bonded warehouse?",
    options: [
      "The officer stationed nearest the gate",
      "The Commissioner of Customs",
      "The consignee with the highest-value cargo",
      "The holder of the licence granted in respect of that bonded warehouse",
    ],
    correct: 3
  },
  {
    id: 18,
    question: "From an exam perspective, which statement is most accurate: under the Act, who is a proper officer?",
    options: [
      "Any officer whose right or duty it is to require the performance of, or to perform, the act in question",
      "Only the Commissioner personally",
      "Any warehouse keeper appointed by the Council",
      "Any police officer in the country",
    ],
    correct: 0
  },
  {
    id: 19,
    question: "Which statement best distinguishes seizure from forfeiture?",
    options: [
      "Forfeiture is temporary detention",
      "They are identical terms with no procedural difference",
      "Seizure is the taking into custody; forfeiture is the legal loss of the property under customs law",
      "Seizure applies only to documents",
    ],
    correct: 2
  },
  {
    id: 20,
    question: "In a problem question, which pairing is correct?",
    options: [
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
    ],
    correct: 1
  },
  {
    id: 21,
    question: "Which option most directly reflects the Act if asked about this issue: where is the exemptions regime set out?",
    options: [
      "The Third Schedule",
      "The Sixth Schedule",
      "The Fifth Schedule",
      "The First Schedule",
    ],
    correct: 2
  },
  {
    id: 22,
    question: "Choose the single best legal answer: which statement about the Second and Third Schedules is correct?",
    options: [
      "Both schedules only concern warehousing",
      "The Second Schedule deals with distress, while the Third deals with officer declarations",
      "The Second Schedule deals with valuation, while the Third deals with exemptions",
      "The Second Schedule deals with imports, while the Third Schedule deals with exports",
    ],
    correct: 3
  },
  {
    id: 23,
    question: "From an exam perspective, which statement is most accurate: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are deemed duty-free once a claim is filed",
      "Goods are first restored, then seized, then valued",
      "Goods are automatically auctioned before any seizure",
    ],
    correct: 0
  },
  {
    id: 24,
    question: "A trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
      "Valuation applies only to exports and rate of duty applies only to imports",
      "They are the same because both appear in Part X",
    ],
    correct: 1
  },
  {
    id: 25,
    question: "In a problem question, an importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
      "Because warehousing is reserved only for seized goods",
      "Because warehousing transfers ownership permanently to Customs",
      "Because once warehoused, goods become prohibited goods by law",
    ],
    correct: 0
  },
  {
    id: 26,
    question: "Which option most directly reflects the Act if asked about this issue: which pairing is correct under the Act?",
    options: [
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
    ],
    correct: 3
  },
  {
    id: 27,
    question: "Choose the single best legal answer: for how long back may the proper officer require books or documents under section 159?",
    options: [
      "Only the current calendar year",
      "Exactly ten years and no less",
      "Up to five years immediately preceding the requirement",
      "Only the last fourteen days",
    ],
    correct: 2
  },
  {
    id: 28,
    question: "From an exam perspective, which statement is most accurate: who is the warehouse keeper in relation to a bonded warehouse?",
    options: [
      "The Commissioner of Customs",
      "The holder of the licence granted in respect of that bonded warehouse",
      "The consignee with the highest-value cargo",
      "The officer stationed nearest the gate",
    ],
    correct: 1
  },
  {
    id: 29,
    question: "What must an officer show to obtain a search warrant under section 158?",
    options: [
      "Reasonable grounds, declared on oath, to believe uncustomed goods or related documents are in the premises",
      "Written approval of the warehouse keeper",
      "Prior condemnation of the goods by a court",
      "Proof that duty has already been finally assessed",
    ],
    correct: 0
  },
  {
    id: 30,
    question: "In a problem question, which responsibility belongs most directly to the Commissioner in a Partner State?",
    options: [
      "Serving as the final appellate body",
      "Appointing ports by Council Gazette",
      "Management and control of Customs, including collection of and accounting for customs revenue",
      "Promulgating the Treaty",
    ],
    correct: 2
  },
  {
    id: 31,
    question: "Which option most directly reflects the Act if asked about this issue: which pairing is correct under the Act?",
    options: [
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
    ],
    correct: 3
  },
  {
    id: 32,
    question: "Choose the single best legal answer: which body is recognized as the formal appellate forum in Part XX?",
    options: [
      "The Customs Co-operation Council",
      "The Tax Appeals Tribunal",
      "The Directorate of Customs",
      "The Council Committee on Customs Administration",
    ],
    correct: 1
  },
  {
    id: 33,
    question: "From an exam perspective, which statement is most accurate: which responsibility belongs most directly to the Commissioner in a Partner State?",
    options: [
      "Management and control of Customs, including collection of and accounting for customs revenue",
      "Serving as the final appellate body",
      "Appointing ports by Council Gazette",
      "Promulgating the Treaty",
    ],
    correct: 0
  },
  {
    id: 34,
    question: "What is the legal effect of section 201?",
    options: [
      "Payment of duty replaces every fine",
      "Duty may remain payable in addition to any fine imposed for the offence",
      "All duty is automatically waived after conviction",
      "Only warehouse rent remains payable",
    ],
    correct: 1
  },
  {
    id: 35,
    question: "In a problem question, which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
      "Exemption is a seizure power, while drawback is a search power",
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption and drawback are identical in all legal effects",
    ],
    correct: 2
  },
  {
    id: 36,
    question: "Which option most directly reflects the Act if asked about this issue: which Schedule is most directly connected to recovery of duty by distress?",
    options: [
      "The Fourth Schedule",
      "The First Schedule",
      "The Third Schedule",
      "The Sixth Schedule",
    ],
    correct: 3
  },
  {
    id: 37,
    question: "Choose the single best legal answer: which reporting pair is correct under the Act?",
    options: [
      "A vessel reports only after bulk is broken",
      "A vessel reports after discharge; an aircraft 24 hours before landing",
      "A vessel reports not less than 24 hours before arrival; an aircraft reports immediately after take-off from the foreign port",
      "Both report only after arrival",
    ],
    correct: 2
  },
  {
    id: 38,
    question: "From an exam perspective, which statement is most accurate: which Schedule is most directly connected to recovery of duty by distress?",
    options: [
      "The Fourth Schedule",
      "The Sixth Schedule",
      "The Third Schedule",
      "The First Schedule",
    ],
    correct: 1
  },
  {
    id: 39,
    question: "Who is the warehouse keeper in relation to a bonded warehouse?",
    options: [
      "The Commissioner of Customs",
      "The consignee with the highest-value cargo",
      "The officer stationed nearest the gate",
      "The holder of the licence granted in respect of that bonded warehouse",
    ],
    correct: 3
  },
  {
    id: 40,
    question: "In a problem question, which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods are prohibited imports in every case",
    ],
    correct: 0
  },
  {
    id: 41,
    question: "Which option most directly reflects the Act if asked about this issue: what is the main Community-level role of the Directorate of Customs?",
    options: [
      "To replace national Commissioners in revenue collection",
      "To issue all warehouse licences",
      "To hear all customs appeals",
      "To initiate customs and related trade policies for the Community and coordinate them in the Partner States",
    ],
    correct: 3
  },
  {
    id: 42,
    question: "Choose the single best legal answer: which option best states the legal idea of smuggling under the Act?",
    options: [
      "Importing, exporting, carrying coastwise, transferring, or removing goods with intent to defraud revenue or evade prohibitions, restrictions, regulations, or conditions",
      "Any movement of goods between customs areas with approval",
      "Any sale of goods below market value",
      "Any delayed cargo entry after 21 days",
    ],
    correct: 0
  },
  {
    id: 43,
    question: "From an exam perspective, which statement is most accurate: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are prohibited imports in every case",
    ],
    correct: 2
  },
  {
    id: 44,
    question: "Which Schedule is most directly connected to recovery of duty by distress?",
    options: [
      "The First Schedule",
      "The Sixth Schedule",
      "The Third Schedule",
      "The Fourth Schedule",
    ],
    correct: 1
  },
  {
    id: 45,
    question: "In a problem question, as a general rule, where must an arriving aircraft or vessel from outside the Partner States first land, touch, or enter?",
    options: [
      "Any place where cargo can be discharged quickly",
      "Any inland warehouse designated by the consignee",
      "A lawful port, unless the proper officer allows otherwise in special circumstances",
      "Any sufferance wharf chosen by the master",
    ],
    correct: 2
  },
  {
    id: 46,
    question: "Which option most directly reflects the Act if asked about this issue: when may an officer stop and search a vehicle under section 153?",
    options: [
      "When the officer has reasonable grounds to believe it carries uncustomed goods or goods being unlawfully transferred",
      "Only if the driver first refuses to pay warehouse rent",
      "Only after a Tribunal warrant",
      "Only during normal office hours at a customs airport",
    ],
    correct: 0
  },
  {
    id: 47,
    question: "Choose the single best legal answer: which option best states the legal idea of smuggling under the Act?",
    options: [
      "Any delayed cargo entry after 21 days",
      "Importing, exporting, carrying coastwise, transferring, or removing goods with intent to defraud revenue or evade prohibitions, restrictions, regulations, or conditions",
      "Any movement of goods between customs areas with approval",
      "Any sale of goods below market value",
    ],
    correct: 1
  },
  {
    id: 48,
    question: "From an exam perspective, which statement is most accurate: which option best states the legal idea of smuggling under the Act?",
    options: [
      "Any movement of goods between customs areas with approval",
      "Any delayed cargo entry after 21 days",
      "Any sale of goods below market value",
      "Importing, exporting, carrying coastwise, transferring, or removing goods with intent to defraud revenue or evade prohibitions, restrictions, regulations, or conditions",
    ],
    correct: 3
  },
  {
    id: 49,
    question: "A trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
      "Valuation applies only to exports and rate of duty applies only to imports",
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
      "They are the same because both appear in Part X",
    ],
    correct: 0
  },
  {
    id: 50,
    question: "In a problem question, for how long back may the proper officer require books or documents under section 159?",
    options: [
      "Exactly ten years and no less",
      "Up to five years immediately preceding the requirement",
      "Only the current calendar year",
      "Only the last fourteen days",
    ],
    correct: 1
  },
];
