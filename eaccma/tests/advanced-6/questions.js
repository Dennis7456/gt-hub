const QUESTIONS = [
  {
    id: 1,
    question: "Which option most directly reflects the Act if asked about this issue: what is the main Community-level role of the Directorate of Customs?",
    options: [
      "To initiate customs and related trade policies for the Community and coordinate them in the Partner States",
      "To issue all warehouse licences",
      "To hear all customs appeals",
      "To replace national Commissioners in revenue collection",
    ],
    correct: 0
  },
  {
    id: 2,
    question: "Choose the single best legal answer: which Schedule is most directly connected to recovery of duty by distress?",
    options: [
      "The First Schedule",
      "The Fourth Schedule",
      "The Third Schedule",
      "The Sixth Schedule",
    ],
    correct: 3
  },
  {
    id: 3,
    question: "From an exam perspective, which statement is most accurate: what is the core rule in section 120 on rate of duty?",
    options: [
      "Time of warehousing always eliminates the rate",
      "Time of condemnation determines the rate",
      "Time of entry determines the rate of duty",
      "Time of seizure determines the rate",
    ],
    correct: 2
  },
  {
    id: 4,
    question: "What is a short levy in customs law?",
    options: [
      "A claim for drawback",
      "A case where duty was undercharged and may be recovered",
      "A remission for manufacture",
      "A distress warrant after auction",
    ],
    correct: 1
  },
  {
    id: 5,
    question: "In a problem question, which pairing is correct?",
    options: [
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
    ],
    correct: 0
  },
  {
    id: 6,
    question: "Which option most directly reflects the Act if asked about this issue: what is the basic starting point of warehousing under Part IV?",
    options: [
      "Warehousing applies only to export goods",
      "Dutiable goods may be warehoused",
      "Only goods in transit may be warehoused",
      "Only seized goods may be warehoused",
    ],
    correct: 1
  },
  {
    id: 7,
    question: "Choose the single best legal answer: why is the period of warehousing important?",
    options: [
      "Because warehousing automatically makes goods duty-free after 14 days",
      "Because warehouse rent is never payable after the first week",
      "Because goods must always be condemned at month's end",
      "Because the Act provides a warehousing period and possible sale of goods once lawful storage does not continue indefinitely",
    ],
    correct: 3
  },
  {
    id: 8,
    question: "From an exam perspective, which statement is most accurate: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are first restored, then seized, then valued",
      "Goods are automatically auctioned before any seizure",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are deemed duty-free once a claim is filed",
    ],
    correct: 2
  },
  {
    id: 9,
    question: "Which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
      "The Directorate is a judicial body, while the Commissioner is legislative",
    ],
    correct: 0
  },
  {
    id: 10,
    question: "In a problem question, which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are first restored, then seized, then valued",
      "Goods are automatically auctioned before any seizure",
      "Goods are deemed duty-free once a claim is filed",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
    ],
    correct: 3
  },
  {
    id: 11,
    question: "Which option most directly reflects the Act if asked about this issue: what must an officer show to obtain a search warrant under section 158?",
    options: [
      "Written approval of the warehouse keeper",
      "Proof that duty has already been finally assessed",
      "Reasonable grounds, declared on oath, to believe uncustomed goods or related documents are in the premises",
      "Prior condemnation of the goods by a court",
    ],
    correct: 2
  },
  {
    id: 12,
    question: "Choose the single best legal answer: a trader wants to challenge a customs decision immediately before the Tribunal without first approaching the Commissioner. What is the best answer under Part XX?",
    options: [
      "The Council must first approve all appeals",
      "The Act first provides for review to the Commissioner before appeal to the Tax Appeals Tribunal",
      "The Tribunal is always the first forum",
      "The trader must first seek a search warrant",
    ],
    correct: 1
  },
  {
    id: 13,
    question: "From an exam perspective, which statement is most accurate: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods are outside the Act once stored",
    ],
    correct: 0
  },
  {
    id: 14,
    question: "Who is the warehouse keeper in relation to a bonded warehouse?",
    options: [
      "The officer stationed nearest the gate",
      "The holder of the licence granted in respect of that bonded warehouse",
      "The consignee with the highest-value cargo",
      "The Commissioner of Customs",
    ],
    correct: 1
  },
  {
    id: 15,
    question: "In a problem question, which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are deemed duty-free once a claim is filed",
      "Goods are first restored, then seized, then valued",
      "Goods are automatically auctioned before any seizure",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
    ],
    correct: 3
  },
  {
    id: 16,
    question: "Which option most directly reflects the Act if asked about this issue: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are automatically auctioned before any seizure",
      "Goods are deemed duty-free once a claim is filed",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are first restored, then seized, then valued",
    ],
    correct: 2
  },
  {
    id: 17,
    question: "Choose the single best legal answer: a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
      "Valuation applies only to exports and rate of duty applies only to imports",
      "They are the same because both appear in Part X",
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
    ],
    correct: 3
  },
  {
    id: 18,
    question: "From an exam perspective, which statement is most accurate: which event best marks the legal time of exportation for goods carried by aircraft or vessel?",
    options: [
      "The moment entry outwards is granted",
      "Departure of the carrying aircraft or vessel from its final position, anchorage, or berth at the place of shipment",
      "The time the cargo is first entered for export",
      "The moment the goods are packed for transport",
    ],
    correct: 1
  },
  {
    id: 19,
    question: "An importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "Only export duty may survive after conviction",
      "Duty becomes payable only if the Tribunal later orders it separately",
      "The Act allows payment of duty in addition to the fine",
      "The fine automatically substitutes for all customs obligations",
    ],
    correct: 2
  },
  {
    id: 20,
    question: "In a problem question, what does restoration of seizures mean?",
    options: [
      "Return of seized goods or things in accordance with the Act",
      "A mandatory acquittal in all proceedings",
      "Automatic remission of all future duty",
      "Conversion into warehoused goods by default",
    ],
    correct: 0
  },
  {
    id: 21,
    question: "Which option most directly reflects the Act if asked about this issue: where is the exemptions regime set out?",
    options: [
      "The First Schedule",
      "The Sixth Schedule",
      "The Fifth Schedule",
      "The Third Schedule",
    ],
    correct: 2
  },
  {
    id: 22,
    question: "Choose the single best legal answer: what must a permanently appointed customs officer do upon appointment?",
    options: [
      "Sign an export bond in the Sixth Schedule",
      "Take an oath only before the Directorate",
      "File a valuation declaration under the Fourth Schedule",
      "Make and subscribe the declaration in the First Schedule before a magistrate or commissioner for oaths",
    ],
    correct: 3
  },
  {
    id: 23,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct?",
    options: [
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
    ],
    correct: 1
  },
  {
    id: 24,
    question: "In passenger clearance, which statement about the dual channel system is correct?",
    options: [
      "The green channel is for nothing to declare or allowance goods; the red channel is for dutiable or restricted goods",
      "Both channels are used only after valuation",
      "The red channel is only for exports",
      "The green channel is for crew only",
    ],
    correct: 0
  },
  {
    id: 25,
    question: "In a problem question, in passenger clearance, which statement about the dual channel system is correct?",
    options: [
      "The green channel is for crew only",
      "The red channel is only for exports",
      "Both channels are used only after valuation",
      "The green channel is for nothing to declare or allowance goods; the red channel is for dutiable or restricted goods",
    ],
    correct: 3
  },
  {
    id: 26,
    question: "Which option most directly reflects the Act if asked about this issue: under the Act, who is a proper officer?",
    options: [
      "Any warehouse keeper appointed by the Council",
      "Any officer whose right or duty it is to require the performance of, or to perform, the act in question",
      "Only the Commissioner personally",
      "Any police officer in the country",
    ],
    correct: 1
  },
  {
    id: 27,
    question: "Choose the single best legal answer: what is a short levy in customs law?",
    options: [
      "A case where duty was undercharged and may be recovered",
      "A claim for drawback",
      "A distress warrant after auction",
      "A remission for manufacture",
    ],
    correct: 0
  },
  {
    id: 28,
    question: "From an exam perspective, which statement is most accurate: which statement about the Second and Third Schedules is correct?",
    options: [
      "The Second Schedule deals with valuation, while the Third deals with exemptions",
      "The Second Schedule deals with distress, while the Third deals with officer declarations",
      "The Second Schedule deals with imports, while the Third Schedule deals with exports",
      "Both schedules only concern warehousing",
    ],
    correct: 2
  },
  {
    id: 29,
    question: "Which reporting pair is correct under the Act?",
    options: [
      "A vessel reports after discharge; an aircraft 24 hours before landing",
      "Both report only after arrival",
      "A vessel reports only after bulk is broken",
      "A vessel reports not less than 24 hours before arrival; an aircraft reports immediately after take-off from the foreign port",
    ],
    correct: 3
  },
  {
    id: 30,
    question: "In a problem question, goods are entered for export but are discharged again within a Partner State instead of completing exportation. Which principle is most directly undermined?",
    options: [
      "The rule that all export goods must first be warehoused",
      "The rule that all exports must pass through the green channel",
      "The rule that goods entered for export should not be discharged in a Partner State as though the export procedure could be reversed casually",
      "The rule that duty must always be paid before entry outwards is granted",
    ],
    correct: 2
  },
  {
    id: 31,
    question: "Which option most directly reflects the Act if asked about this issue: which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption and drawback are identical in all legal effects",
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption is a seizure power, while drawback is a search power",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
    ],
    correct: 1
  },
  {
    id: 32,
    question: "Choose the single best legal answer: which pairing is correct under the Act?",
    options: [
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
    ],
    correct: 0
  },
  {
    id: 33,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct?",
    options: [
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
    ],
    correct: 1
  },
  {
    id: 34,
    question: "What must a permanently appointed customs officer do upon appointment?",
    options: [
      "Make and subscribe the declaration in the First Schedule before a magistrate or commissioner for oaths",
      "File a valuation declaration under the Fourth Schedule",
      "Take an oath only before the Directorate",
      "Sign an export bond in the Sixth Schedule",
    ],
    correct: 0
  },
  {
    id: 35,
    question: "In a problem question, an importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "The fine automatically substitutes for all customs obligations",
      "Duty becomes payable only if the Tribunal later orders it separately",
      "The Act allows payment of duty in addition to the fine",
      "Only export duty may survive after conviction",
    ],
    correct: 2
  },
  {
    id: 36,
    question: "Which option most directly reflects the Act if asked about this issue: under the Act, who is a proper officer?",
    options: [
      "Only the Commissioner personally",
      "Any warehouse keeper appointed by the Council",
      "Any police officer in the country",
      "Any officer whose right or duty it is to require the performance of, or to perform, the act in question",
    ],
    correct: 3
  },
  {
    id: 37,
    question: "Choose the single best legal answer: a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
      "Forfeiture happens first and seizure only follows after auction",
      "They are the same and the Act uses the words interchangeably",
      "Seizure applies only to documents while forfeiture applies only to vehicles",
    ],
    correct: 0
  },
  {
    id: 38,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct under the Act?",
    options: [
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Commissioner appoints ports, while the Council appoints customs areas",
    ],
    correct: 1
  },
  {
    id: 39,
    question: "Which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are automatically auctioned before any seizure",
      "Goods are deemed duty-free once a claim is filed",
      "Goods are first restored, then seized, then valued",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
    ],
    correct: 3
  },
  {
    id: 40,
    question: "In a problem question, which statement best distinguishes seizure from forfeiture?",
    options: [
      "They are identical terms with no procedural difference",
      "Forfeiture is temporary detention",
      "Seizure is the taking into custody; forfeiture is the legal loss of the property under customs law",
      "Seizure applies only to documents",
    ],
    correct: 2
  },
  {
    id: 41,
    question: "Which option most directly reflects the Act if asked about this issue: which body is recognized as the formal appellate forum in Part XX?",
    options: [
      "The Directorate of Customs",
      "The Tax Appeals Tribunal",
      "The Council Committee on Customs Administration",
      "The Customs Co-operation Council",
    ],
    correct: 1
  },
  {
    id: 42,
    question: "Choose the single best legal answer: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
    ],
    correct: 3
  },
  {
    id: 43,
    question: "From an exam perspective, which statement is most accurate: why is the period of warehousing important?",
    options: [
      "Because the Act provides a warehousing period and possible sale of goods once lawful storage does not continue indefinitely",
      "Because warehouse rent is never payable after the first week",
      "Because goods must always be condemned at month's end",
      "Because warehousing automatically makes goods duty-free after 14 days",
    ],
    correct: 0
  },
  {
    id: 44,
    question: "Which of the following best states the role of the Commissioner in the appeal structure?",
    options: [
      "The Commissioner is the final judicial body",
      "The Commissioner hears only criminal smuggling trials",
      "The Commissioner is the first review authority before a further appeal goes to the Tax Appeals Tribunal",
      "The Commissioner only appoints the Tribunal and never reviews decisions",
    ],
    correct: 2
  },
  {
    id: 45,
    question: "In a problem question, what does restoration of seizures mean?",
    options: [
      "Conversion into warehoused goods by default",
      "Return of seized goods or things in accordance with the Act",
      "Automatic remission of all future duty",
      "A mandatory acquittal in all proceedings",
    ],
    correct: 1
  },
  {
    id: 46,
    question: "Which option most directly reflects the Act if asked about this issue: which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Written consent of the owner",
      "Final conviction by a subordinate court",
      "Approval of the Customs Co-operation Council",
      "Reasonable grounds to believe",
    ],
    correct: 3
  },
  {
    id: 47,
    question: "Choose the single best legal answer: which Schedule contains the declaration of officer?",
    options: [
      "The First Schedule",
      "The Second Schedule",
      "The Fifth Schedule",
      "The Sixth Schedule",
    ],
    correct: 0
  },
  {
    id: 48,
    question: "From an exam perspective, which statement is most accurate: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are automatically auctioned before any seizure",
      "Goods are deemed duty-free once a claim is filed",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are first restored, then seized, then valued",
    ],
    correct: 2
  },
  {
    id: 49,
    question: "Which body is recognized as the formal appellate forum in Part XX?",
    options: [
      "The Tax Appeals Tribunal",
      "The Council Committee on Customs Administration",
      "The Customs Co-operation Council",
      "The Directorate of Customs",
    ],
    correct: 0
  },
  {
    id: 50,
    question: "In a problem question, a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "Valuation applies only to exports and rate of duty applies only to imports",
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
      "They are the same because both appear in Part X",
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
    ],
    correct: 1
  },
];
