const QUESTIONS = [
  {
    id: 1,
    question: "Choose the single best legal answer: what is a short levy in customs law?",
    options: [
      "A claim for drawback",
      "A remission for manufacture",
      "A case where duty was undercharged and may be recovered",
      "A distress warrant after auction",
    ],
    correct: 2
  },
  {
    id: 2,
    question: "From an exam perspective, which statement is most accurate: who is the warehouse keeper in relation to a bonded warehouse?",
    options: [
      "The holder of the licence granted in respect of that bonded warehouse",
      "The Commissioner of Customs",
      "The officer stationed nearest the gate",
      "The consignee with the highest-value cargo",
    ],
    correct: 0
  },
  {
    id: 3,
    question: "Which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
      "The Directorate is a judicial body, while the Commissioner is legislative",
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
    ],
    correct: 3
  },
  {
    id: 4,
    question: "In a problem question, which pairing is correct under the Act?",
    options: [
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
    ],
    correct: 1
  },
  {
    id: 5,
    question: "Which option most directly reflects the Act if asked about this issue: which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
      "The Directorate is a judicial body, while the Commissioner is legislative",
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
    ],
    correct: 0
  },
  {
    id: 6,
    question: "Choose the single best legal answer: for how long back may the proper officer require books or documents under section 159?",
    options: [
      "Exactly ten years and no less",
      "Up to five years immediately preceding the requirement",
      "Only the current calendar year",
      "Only the last fourteen days",
    ],
    correct: 1
  },
  {
    id: 7,
    question: "From an exam perspective, which statement is most accurate: within export procedure, what are stores?",
    options: [
      "Any goods waiting in a customs warehouse",
      "Any goods seized during a baggage search",
      "Goods for use or sale on board aircraft, vessels, and trains engaged in international transport",
      "Only fuel in pipeline imports",
    ],
    correct: 2
  },
  {
    id: 8,
    question: "Which pairing is correct under the Act?",
    options: [
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
    ],
    correct: 3
  },
  {
    id: 9,
    question: "In a problem question, which statement best distinguishes seizure from forfeiture?",
    options: [
      "Seizure applies only to documents",
      "They are identical terms with no procedural difference",
      "Seizure is the taking into custody; forfeiture is the legal loss of the property under customs law",
      "Forfeiture is temporary detention",
    ],
    correct: 2
  },
  {
    id: 10,
    question: "Which option most directly reflects the Act if asked about this issue: which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
      "The Directorate is a judicial body, while the Commissioner is legislative",
    ],
    correct: 1
  },
  {
    id: 11,
    question: "Choose the single best legal answer: which event best marks the legal time of exportation for goods carried by aircraft or vessel?",
    options: [
      "The time the cargo is first entered for export",
      "The moment the goods are packed for transport",
      "The moment entry outwards is granted",
      "Departure of the carrying aircraft or vessel from its final position, anchorage, or berth at the place of shipment",
    ],
    correct: 3
  },
  {
    id: 12,
    question: "From an exam perspective, which statement is most accurate: a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
      "Forfeiture happens first and seizure only follows after auction",
      "They are the same and the Act uses the words interchangeably",
      "Seizure applies only to documents while forfeiture applies only to vehicles",
    ],
    correct: 0
  },
  {
    id: 13,
    question: "What is the core rule in section 120 on rate of duty?",
    options: [
      "Time of seizure determines the rate",
      "Time of warehousing always eliminates the rate",
      "Time of condemnation determines the rate",
      "Time of entry determines the rate of duty",
    ],
    correct: 3
  },
  {
    id: 14,
    question: "In a problem question, for how long back may the proper officer require books or documents under section 159?",
    options: [
      "Only the last fourteen days",
      "Up to five years immediately preceding the requirement",
      "Only the current calendar year",
      "Exactly ten years and no less",
    ],
    correct: 1
  },
  {
    id: 15,
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
    id: 16,
    question: "Choose the single best legal answer: which responsibility belongs most directly to the Commissioner in a Partner State?",
    options: [
      "Appointing ports by Council Gazette",
      "Promulgating the Treaty",
      "Management and control of Customs, including collection of and accounting for customs revenue",
      "Serving as the final appellate body",
    ],
    correct: 2
  },
  {
    id: 17,
    question: "From an exam perspective, which statement is most accurate: which Schedule should an officer consult first for prohibited and restricted exports generally?",
    options: [
      "The Third Schedule",
      "The Fourth Schedule",
      "The Sixth Schedule",
      "The Second Schedule",
    ],
    correct: 0
  },
  {
    id: 18,
    question: "Which Schedule should an officer consult first for prohibited and restricted exports generally?",
    options: [
      "The Sixth Schedule",
      "The Third Schedule",
      "The Fourth Schedule",
      "The Second Schedule",
    ],
    correct: 1
  },
  {
    id: 19,
    question: "In a problem question, which pairing is correct under the Act?",
    options: [
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Commissioner appoints ports, while the Council appoints customs areas",
    ],
    correct: 2
  },
  {
    id: 20,
    question: "Which option most directly reflects the Act if asked about this issue: when may an officer stop and search a vehicle under section 153?",
    options: [
      "Only if the driver first refuses to pay warehouse rent",
      "Only during normal office hours at a customs airport",
      "Only after a Tribunal warrant",
      "When the officer has reasonable grounds to believe it carries uncustomed goods or goods being unlawfully transferred",
    ],
    correct: 3
  },
  {
    id: 21,
    question: "Choose the single best legal answer: which set correctly states the main entry options for imported cargo?",
    options: [
      "Home consumption, warehousing, transhipment, transit, or export processing zones",
      "Only home consumption and warehousing",
      "Home consumption, condemnation, seizure, or auction",
      "Transit, distress, remission, or drawback",
    ],
    correct: 0
  },
  {
    id: 22,
    question: "From an exam perspective, which statement is most accurate: where are the rules for customs valuation of imported goods liable to ad valorem import duty found?",
    options: [
      "The Second Schedule",
      "The Fifth Schedule",
      "The Fourth Schedule",
      "The Sixth Schedule",
    ],
    correct: 2
  },
  {
    id: 23,
    question: "Which of the following best states the role of the Commissioner in the appeal structure?",
    options: [
      "The Commissioner only appoints the Tribunal and never reviews decisions",
      "The Commissioner is the first review authority before a further appeal goes to the Tax Appeals Tribunal",
      "The Commissioner hears only criminal smuggling trials",
      "The Commissioner is the final judicial body",
    ],
    correct: 1
  },
  {
    id: 24,
    question: "In a problem question, which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
    ],
    correct: 3
  },
  {
    id: 25,
    question: "Which option most directly reflects the Act if asked about this issue: where are the rules for customs valuation of imported goods liable to ad valorem import duty found?",
    options: [
      "The Fifth Schedule",
      "The Fourth Schedule",
      "The Second Schedule",
      "The Sixth Schedule",
    ],
    correct: 1
  },
  {
    id: 26,
    question: "Choose the single best legal answer: which pairing is correct under the Act?",
    options: [
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Commissioner appoints ports, while the Council appoints customs areas",
    ],
    correct: 2
  },
  {
    id: 27,
    question: "From an exam perspective, which statement is most accurate: a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "Valuation applies only to exports and rate of duty applies only to imports",
      "They are the same because both appear in Part X",
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
    ],
    correct: 3
  },
  {
    id: 28,
    question: "What is a short levy in customs law?",
    options: [
      "A case where duty was undercharged and may be recovered",
      "A distress warrant after auction",
      "A remission for manufacture",
      "A claim for drawback",
    ],
    correct: 0
  },
  {
    id: 29,
    question: "In a problem question, what additional legal status does an officer have while performing duty under the Act?",
    options: [
      "The powers of a magistrate",
      "The legal status of a private investigator",
      "Only the powers of the Commissioner",
      "The powers, rights, privileges, and protection of a police officer of that Partner State",
    ],
    correct: 3
  },
  {
    id: 30,
    question: "Which option most directly reflects the Act if asked about this issue: which statement best distinguishes seizure from forfeiture?",
    options: [
      "Seizure is the taking into custody; forfeiture is the legal loss of the property under customs law",
      "Seizure applies only to documents",
      "Forfeiture is temporary detention",
      "They are identical terms with no procedural difference",
    ],
    correct: 0
  },
  {
    id: 31,
    question: "Choose the single best legal answer: which pairing is correct?",
    options: [
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
    ],
    correct: 1
  },
  {
    id: 32,
    question: "From an exam perspective, which statement is most accurate: which statement about the Second and Third Schedules is correct?",
    options: [
      "The Second Schedule deals with valuation, while the Third deals with exemptions",
      "Both schedules only concern warehousing",
      "The Second Schedule deals with imports, while the Third Schedule deals with exports",
      "The Second Schedule deals with distress, while the Third deals with officer declarations",
    ],
    correct: 2
  },
  {
    id: 33,
    question: "Which pairing is correct?",
    options: [
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
    ],
    correct: 0
  },
  {
    id: 34,
    question: "In a problem question, which Schedule should an officer consult first for prohibited and restricted exports generally?",
    options: [
      "The Sixth Schedule",
      "The Fourth Schedule",
      "The Third Schedule",
      "The Second Schedule",
    ],
    correct: 2
  },
  {
    id: 35,
    question: "Which option most directly reflects the Act if asked about this issue: which Schedule should an officer consult first for prohibited and restricted exports generally?",
    options: [
      "The Second Schedule",
      "The Sixth Schedule",
      "The Fourth Schedule",
      "The Third Schedule",
    ],
    correct: 3
  },
  {
    id: 36,
    question: "Choose the single best legal answer: what is the correct appeal path under Part XX?",
    options: [
      "Appeal to the police first, then to the Commissioner",
      "Application for review to the Commissioner, then appeal to the Tax Appeals Tribunal",
      "Appeal directly to the Directorate",
      "Application to the warehouse keeper, then to the magistrate",
    ],
    correct: 1
  },
  {
    id: 37,
    question: "From an exam perspective, which statement is most accurate: what is duty drawback?",
    options: [
      "A penalty imposed in addition to export duty",
      "An anti-dumping duty on subsidized imports",
      "A refund of all or part of import duty paid when goods are later exported or otherwise used in a qualifying prescribed way",
      "A method of warehousing goods",
    ],
    correct: 2
  },
  {
    id: 38,
    question: "Which event best marks the legal time of importation of goods?",
    options: [
      "When the owner pays warehouse rent",
      "When the goods come within the boundaries of the Partner States",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the consignee removes the goods from the customs area",
    ],
    correct: 1
  },
  {
    id: 39,
    question: "In a problem question, which Schedule contains the declaration of officer?",
    options: [
      "The Fifth Schedule",
      "The Sixth Schedule",
      "The Second Schedule",
      "The First Schedule",
    ],
    correct: 3
  },
  {
    id: 40,
    question: "Which option most directly reflects the Act if asked about this issue: for how long back may the proper officer require books or documents under section 159?",
    options: [
      "Up to five years immediately preceding the requirement",
      "Only the last fourteen days",
      "Only the current calendar year",
      "Exactly ten years and no less",
    ],
    correct: 0
  },
  {
    id: 41,
    question: "Choose the single best legal answer: which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption is a seizure power, while drawback is a search power",
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
      "Exemption and drawback are identical in all legal effects",
    ],
    correct: 1
  },
  {
    id: 42,
    question: "From an exam perspective, which statement is most accurate: which statement best captures the meaning of uncustomed goods?",
    options: [
      "Dutiable goods whose full duties have not been paid, and goods dealt with contrary to customs law",
      "Only seized goods awaiting condemnation",
      "Only goods without invoices",
      "Only prohibited imports in the Second Schedule",
    ],
    correct: 0
  },
  {
    id: 43,
    question: "Which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are deemed duty-free once a claim is filed",
      "Goods are automatically auctioned before any seizure",
      "Goods are first restored, then seized, then valued",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
    ],
    correct: 3
  },
  {
    id: 44,
    question: "In a problem question, when may an officer stop and search a vehicle under section 153?",
    options: [
      "Only after a Tribunal warrant",
      "Only during normal office hours at a customs airport",
      "When the officer has reasonable grounds to believe it carries uncustomed goods or goods being unlawfully transferred",
      "Only if the driver first refuses to pay warehouse rent",
    ],
    correct: 2
  },
  {
    id: 45,
    question: "Which option most directly reflects the Act if asked about this issue: which Schedule is most directly connected to recovery of duty by distress?",
    options: [
      "The First Schedule",
      "The Sixth Schedule",
      "The Fourth Schedule",
      "The Third Schedule",
    ],
    correct: 1
  },
  {
    id: 46,
    question: "Choose the single best legal answer: within export procedure, what are stores?",
    options: [
      "Any goods waiting in a customs warehouse",
      "Any goods seized during a baggage search",
      "Goods for use or sale on board aircraft, vessels, and trains engaged in international transport",
      "Only fuel in pipeline imports",
    ],
    correct: 2
  },
  {
    id: 47,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct?",
    options: [
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
    ],
    correct: 3
  },
  {
    id: 48,
    question: "Which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Reasonable grounds to believe",
      "Written consent of the owner",
      "Final conviction by a subordinate court",
      "Approval of the Customs Co-operation Council",
    ],
    correct: 0
  },
  {
    id: 49,
    question: "In a problem question, which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption is a seizure power, while drawback is a search power",
      "Exemption and drawback are identical in all legal effects",
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
    ],
    correct: 2
  },
  {
    id: 50,
    question: "Which option most directly reflects the Act if asked about this issue: what is the basic starting point of warehousing under Part IV?",
    options: [
      "Warehousing applies only to export goods",
      "Dutiable goods may be warehoused",
      "Only seized goods may be warehoused",
      "Only goods in transit may be warehoused",
    ],
    correct: 1
  },
];
