const QUESTIONS = [
  {
    id: 1,
    question: "In a problem question, an importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because once warehoused, goods become prohibited goods by law",
      "Because warehousing transfers ownership permanently to Customs",
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
      "Because warehousing is reserved only for seized goods",
    ],
    correct: 2
  },
  {
    id: 2,
    question: "Which option most directly reflects the Act if asked about this issue: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods automatically become diplomatic goods",
    ],
    correct: 1
  },
  {
    id: 3,
    question: "Choose the single best legal answer: which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
      "The Directorate is a judicial body, while the Commissioner is legislative",
    ],
    correct: 0
  },
  {
    id: 4,
    question: "From an exam perspective, which statement is most accurate: in passenger clearance, which statement about the dual channel system is correct?",
    options: [
      "The green channel is for crew only",
      "The red channel is only for exports",
      "Both channels are used only after valuation",
      "The green channel is for nothing to declare or allowance goods; the red channel is for dutiable or restricted goods",
    ],
    correct: 3
  },
  {
    id: 5,
    question: "What does restoration of seizures mean?",
    options: [
      "Return of seized goods or things in accordance with the Act",
      "Conversion into warehoused goods by default",
      "Automatic remission of all future duty",
      "A mandatory acquittal in all proceedings",
    ],
    correct: 0
  },
  {
    id: 6,
    question: "In a problem question, which responsibility belongs most directly to the Commissioner in a Partner State?",
    options: [
      "Promulgating the Treaty",
      "Management and control of Customs, including collection of and accounting for customs revenue",
      "Appointing ports by Council Gazette",
      "Serving as the final appellate body",
    ],
    correct: 1
  },
  {
    id: 7,
    question: "Which option most directly reflects the Act if asked about this issue: a customs officer has reasonable grounds to believe that a vehicle carries uncustomed goods. The driver refuses to stop. What follows most directly under the Act?",
    options: [
      "The driver may insist on search only after a review to the Commissioner",
      "The goods become exempt from seizure because the vehicle was moving",
      "The refusal itself is an offence, and the officer's stop-and-search power remains engaged",
      "The officer must abandon the matter unless a magistrate is present",
    ],
    correct: 2
  },
  {
    id: 8,
    question: "Choose the single best legal answer: what is the core rule in section 120 on rate of duty?",
    options: [
      "Time of seizure determines the rate",
      "Time of warehousing always eliminates the rate",
      "Time of condemnation determines the rate",
      "Time of entry determines the rate of duty",
    ],
    correct: 3
  },
  {
    id: 9,
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
    id: 10,
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
    id: 11,
    question: "In a problem question, what is the main Community-level role of the Directorate of Customs?",
    options: [
      "To hear all customs appeals",
      "To initiate customs and related trade policies for the Community and coordinate them in the Partner States",
      "To issue all warehouse licences",
      "To replace national Commissioners in revenue collection",
    ],
    correct: 1
  },
  {
    id: 12,
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
    id: 13,
    question: "Choose the single best legal answer: what special safeguard applies when a female is searched under section 155?",
    options: [
      "She is fully exempt from personal search",
      "She may only be searched after midnight",
      "She must be searched only by a female officer",
      "She may only be searched in the presence of the Commissioner",
    ],
    correct: 2
  },
  {
    id: 14,
    question: "From an exam perspective, which statement is most accurate: what is the correct appeal path under Part XX?",
    options: [
      "Application for review to the Commissioner, then appeal to the Tax Appeals Tribunal",
      "Appeal directly to the Directorate",
      "Appeal to the police first, then to the Commissioner",
      "Application to the warehouse keeper, then to the magistrate",
    ],
    correct: 0
  },
  {
    id: 15,
    question: "Which pairing is correct?",
    options: [
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
    ],
    correct: 3
  },
  {
    id: 16,
    question: "In a problem question, in passenger clearance, which statement about the dual channel system is correct?",
    options: [
      "The green channel is for crew only",
      "The green channel is for nothing to declare or allowance goods; the red channel is for dutiable or restricted goods",
      "The red channel is only for exports",
      "Both channels are used only after valuation",
    ],
    correct: 1
  },
  {
    id: 17,
    question: "Which option most directly reflects the Act if asked about this issue: an importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
      "Because warehousing transfers ownership permanently to Customs",
      "Because once warehoused, goods become prohibited goods by law",
      "Because warehousing is reserved only for seized goods",
    ],
    correct: 0
  },
  {
    id: 18,
    question: "Choose the single best legal answer: which of the following best states the role of the Commissioner in the appeal structure?",
    options: [
      "The Commissioner is the final judicial body",
      "The Commissioner only appoints the Tribunal and never reviews decisions",
      "The Commissioner is the first review authority before a further appeal goes to the Tax Appeals Tribunal",
      "The Commissioner hears only criminal smuggling trials",
    ],
    correct: 2
  },
  {
    id: 19,
    question: "From an exam perspective, which statement is most accurate: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
    ],
    correct: 3
  },
  {
    id: 20,
    question: "Which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
      "The Directorate is a judicial body, while the Commissioner is legislative",
    ],
    correct: 1
  },
  {
    id: 21,
    question: "In a problem question, imported goods are landed into a transit shed. Until they are lawfully delivered from that shed, how are they treated for responsibility purposes?",
    options: [
      "They become the consignee's responsibility only",
      "They cease to be subject to customs control once placed in the shed",
      "They are treated as entered for home consumption automatically",
      "They are deemed to remain in the importing aircraft or vessel, so the owner or agent remains responsible unless the shed owner legally takes that responsibility",
    ],
    correct: 3
  },
  {
    id: 22,
    question: "Which option most directly reflects the Act if asked about this issue: which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Written consent of the owner",
      "Reasonable grounds to believe",
      "Approval of the Customs Co-operation Council",
      "Final conviction by a subordinate court",
    ],
    correct: 1
  },
  {
    id: 23,
    question: "Choose the single best legal answer: which of the following best states the role of the Commissioner in the appeal structure?",
    options: [
      "The Commissioner is the first review authority before a further appeal goes to the Tax Appeals Tribunal",
      "The Commissioner is the final judicial body",
      "The Commissioner only appoints the Tribunal and never reviews decisions",
      "The Commissioner hears only criminal smuggling trials",
    ],
    correct: 0
  },
  {
    id: 24,
    question: "From an exam perspective, which statement is most accurate: an importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because once warehoused, goods become prohibited goods by law",
      "Because warehousing is reserved only for seized goods",
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
      "Because warehousing transfers ownership permanently to Customs",
    ],
    correct: 2
  },
  {
    id: 25,
    question: "Which pairing is correct under the Act?",
    options: [
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Commissioner appoints ports, while the Council appoints customs areas",
    ],
    correct: 0
  },
  {
    id: 26,
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
    id: 27,
    question: "Which option most directly reflects the Act if asked about this issue: which pairing is correct under the Act?",
    options: [
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
    ],
    correct: 3
  },
  {
    id: 28,
    question: "Choose the single best legal answer: which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption and drawback are identical in all legal effects",
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption is a seizure power, while drawback is a search power",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
    ],
    correct: 1
  },
  {
    id: 29,
    question: "From an exam perspective, which statement is most accurate: which statement best captures the meaning of uncustomed goods?",
    options: [
      "Only goods without invoices",
      "Only prohibited imports in the Second Schedule",
      "Only seized goods awaiting condemnation",
      "Dutiable goods whose full duties have not been paid, and goods dealt with contrary to customs law",
    ],
    correct: 3
  },
  {
    id: 30,
    question: "What special safeguard applies when a female is searched under section 155?",
    options: [
      "She may only be searched in the presence of the Commissioner",
      "She must be searched only by a female officer",
      "She may only be searched after midnight",
      "She is fully exempt from personal search",
    ],
    correct: 1
  },
  {
    id: 31,
    question: "In a problem question, a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "Forfeiture happens first and seizure only follows after auction",
      "Seizure applies only to documents while forfeiture applies only to vehicles",
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
      "They are the same and the Act uses the words interchangeably",
    ],
    correct: 2
  },
  {
    id: 32,
    question: "Which option most directly reflects the Act if asked about this issue: which of the following best states the role of the Commissioner in the appeal structure?",
    options: [
      "The Commissioner is the first review authority before a further appeal goes to the Tax Appeals Tribunal",
      "The Commissioner is the final judicial body",
      "The Commissioner hears only criminal smuggling trials",
      "The Commissioner only appoints the Tribunal and never reviews decisions",
    ],
    correct: 0
  },
  {
    id: 33,
    question: "Choose the single best legal answer: an importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "Duty becomes payable only if the Tribunal later orders it separately",
      "Only export duty may survive after conviction",
      "The Act allows payment of duty in addition to the fine",
      "The fine automatically substitutes for all customs obligations",
    ],
    correct: 2
  },
  {
    id: 34,
    question: "From an exam perspective, which statement is most accurate: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods automatically become diplomatic goods",
    ],
    correct: 1
  },
  {
    id: 35,
    question: "Which of the following best states the role of the Commissioner in the appeal structure?",
    options: [
      "The Commissioner hears only criminal smuggling trials",
      "The Commissioner only appoints the Tribunal and never reviews decisions",
      "The Commissioner is the final judicial body",
      "The Commissioner is the first review authority before a further appeal goes to the Tax Appeals Tribunal",
    ],
    correct: 3
  },
  {
    id: 36,
    question: "In a problem question, which set correctly states the main entry options for imported cargo?",
    options: [
      "Home consumption, warehousing, transhipment, transit, or export processing zones",
      "Transit, distress, remission, or drawback",
      "Home consumption, condemnation, seizure, or auction",
      "Only home consumption and warehousing",
    ],
    correct: 0
  },
  {
    id: 37,
    question: "Which option most directly reflects the Act if asked about this issue: which body is recognized as the formal appellate forum in Part XX?",
    options: [
      "The Council Committee on Customs Administration",
      "The Customs Co-operation Council",
      "The Tax Appeals Tribunal",
      "The Directorate of Customs",
    ],
    correct: 2
  },
  {
    id: 38,
    question: "Choose the single best legal answer: which reporting pair is correct under the Act?",
    options: [
      "A vessel reports only after bulk is broken",
      "A vessel reports not less than 24 hours before arrival; an aircraft reports immediately after take-off from the foreign port",
      "Both report only after arrival",
      "A vessel reports after discharge; an aircraft 24 hours before landing",
    ],
    correct: 1
  },
  {
    id: 39,
    question: "From an exam perspective, which statement is most accurate: which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Reasonable grounds to believe",
      "Final conviction by a subordinate court",
      "Written consent of the owner",
      "Approval of the Customs Co-operation Council",
    ],
    correct: 0
  },
  {
    id: 40,
    question: "Which Schedule is most directly connected to recovery of duty by distress?",
    options: [
      "The Third Schedule",
      "The Fourth Schedule",
      "The First Schedule",
      "The Sixth Schedule",
    ],
    correct: 3
  },
  {
    id: 41,
    question: "In a problem question, which event best marks the legal time of importation of goods?",
    options: [
      "When the owner pays warehouse rent",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the goods come within the boundaries of the Partner States",
      "When the consignee removes the goods from the customs area",
    ],
    correct: 2
  },
  {
    id: 42,
    question: "Which option most directly reflects the Act if asked about this issue: for how long back may the proper officer require books or documents under section 159?",
    options: [
      "Up to five years immediately preceding the requirement",
      "Exactly ten years and no less",
      "Only the current calendar year",
      "Only the last fourteen days",
    ],
    correct: 0
  },
  {
    id: 43,
    question: "Choose the single best legal answer: which pairing is correct under the Act?",
    options: [
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
    ],
    correct: 1
  },
  {
    id: 44,
    question: "From an exam perspective, which statement is most accurate: which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Final conviction by a subordinate court",
      "Written consent of the owner",
      "Approval of the Customs Co-operation Council",
      "Reasonable grounds to believe",
    ],
    correct: 3
  },
  {
    id: 45,
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
    id: 46,
    question: "In a problem question, which reporting pair is correct under the Act?",
    options: [
      "A vessel reports only after bulk is broken",
      "A vessel reports not less than 24 hours before arrival; an aircraft reports immediately after take-off from the foreign port",
      "A vessel reports after discharge; an aircraft 24 hours before landing",
      "Both report only after arrival",
    ],
    correct: 1
  },
  {
    id: 47,
    question: "Which option most directly reflects the Act if asked about this issue: which Schedule contains the declaration of officer?",
    options: [
      "The Sixth Schedule",
      "The Fifth Schedule",
      "The Second Schedule",
      "The First Schedule",
    ],
    correct: 3
  },
  {
    id: 48,
    question: "Choose the single best legal answer: which pairing is correct under the Act?",
    options: [
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
    ],
    correct: 2
  },
  {
    id: 49,
    question: "From an exam perspective, which statement is most accurate: a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "Valuation applies only to exports and rate of duty applies only to imports",
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
      "They are the same because both appear in Part X",
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
    ],
    correct: 1
  },
  {
    id: 50,
    question: "Which pairing is correct?",
    options: [
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
    ],
    correct: 3
  },
];
