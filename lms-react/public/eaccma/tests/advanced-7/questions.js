const QUESTIONS = [
  {
    id: 1,
    question: "Choose the single best legal answer: which statement best distinguishes seizure from forfeiture?",
    options: [
      "They are identical terms with no procedural difference",
      "Seizure applies only to documents",
      "Seizure is the taking into custody; forfeiture is the legal loss of the property under customs law",
      "Forfeiture is temporary detention",
    ],
    correct: 2
  },
  {
    id: 2,
    question: "From an exam perspective, which statement is most accurate: what is the core rule in section 120 on rate of duty?",
    options: [
      "Time of warehousing always eliminates the rate",
      "Time of entry determines the rate of duty",
      "Time of condemnation determines the rate",
      "Time of seizure determines the rate",
    ],
    correct: 1
  },
  {
    id: 3,
    question: "Imported goods are landed into a transit shed. Until they are lawfully delivered from that shed, how are they treated for responsibility purposes?",
    options: [
      "They are deemed to remain in the importing aircraft or vessel, so the owner or agent remains responsible unless the shed owner legally takes that responsibility",
      "They cease to be subject to customs control once placed in the shed",
      "They are treated as entered for home consumption automatically",
      "They become the consignee's responsibility only",
    ],
    correct: 0
  },
  {
    id: 4,
    question: "In a problem question, which statement best captures the meaning of uncustomed goods?",
    options: [
      "Only prohibited imports in the Second Schedule",
      "Only seized goods awaiting condemnation",
      "Only goods without invoices",
      "Dutiable goods whose full duties have not been paid, and goods dealt with contrary to customs law",
    ],
    correct: 3
  },
  {
    id: 5,
    question: "Which option most directly reflects the Act if asked about this issue: a customs officer has reasonable grounds to believe that a vehicle carries uncustomed goods. The driver refuses to stop. What follows most directly under the Act?",
    options: [
      "The goods become exempt from seizure because the vehicle was moving",
      "The refusal itself is an offence, and the officer's stop-and-search power remains engaged",
      "The officer must abandon the matter unless a magistrate is present",
      "The driver may insist on search only after a review to the Commissioner",
    ],
    correct: 1
  },
  {
    id: 6,
    question: "Choose the single best legal answer: during a lawful search, an officer cannot access a locked compartment in a vehicle suspected of carrying uncustomed goods. Which statement is most accurate?",
    options: [
      "The officer may open it in the manner, including by force, that is reasonably necessary under the Act",
      "The officer must wait until the owner volunteers the key",
      "The officer may condemn the goods without searching the compartment",
      "Only a warehouse keeper may authorize forced opening",
    ],
    correct: 0
  },
  {
    id: 7,
    question: "From an exam perspective, which statement is most accurate: which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption is a seizure power, while drawback is a search power",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption and drawback are identical in all legal effects",
    ],
    correct: 2
  },
  {
    id: 8,
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
    id: 9,
    question: "In a problem question, which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Approval of the Customs Co-operation Council",
      "Reasonable grounds to believe",
      "Final conviction by a subordinate court",
      "Written consent of the owner",
    ],
    correct: 1
  },
  {
    id: 10,
    question: "Which option most directly reflects the Act if asked about this issue: which statement about the Second and Third Schedules is correct?",
    options: [
      "The Second Schedule deals with distress, while the Third deals with officer declarations",
      "The Second Schedule deals with valuation, while the Third deals with exemptions",
      "Both schedules only concern warehousing",
      "The Second Schedule deals with imports, while the Third Schedule deals with exports",
    ],
    correct: 3
  },
  {
    id: 11,
    question: "Choose the single best legal answer: which responsibility belongs most directly to the Commissioner in a Partner State?",
    options: [
      "Management and control of Customs, including collection of and accounting for customs revenue",
      "Appointing ports by Council Gazette",
      "Promulgating the Treaty",
      "Serving as the final appellate body",
    ],
    correct: 0
  },
  {
    id: 12,
    question: "From an exam perspective, which statement is most accurate: for how long back may the proper officer require books or documents under section 159?",
    options: [
      "Exactly ten years and no less",
      "Only the last fourteen days",
      "Up to five years immediately preceding the requirement",
      "Only the current calendar year",
    ],
    correct: 2
  },
  {
    id: 13,
    question: "An importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "Only export duty may survive after conviction",
      "The Act allows payment of duty in addition to the fine",
      "Duty becomes payable only if the Tribunal later orders it separately",
      "The fine automatically substitutes for all customs obligations",
    ],
    correct: 1
  },
  {
    id: 14,
    question: "In a problem question, when may an officer stop and search a vehicle under section 153?",
    options: [
      "When the officer has reasonable grounds to believe it carries uncustomed goods or goods being unlawfully transferred",
      "Only during normal office hours at a customs airport",
      "Only if the driver first refuses to pay warehouse rent",
      "Only after a Tribunal warrant",
    ],
    correct: 0
  },
  {
    id: 15,
    question: "Which option most directly reflects the Act if asked about this issue: which statement best captures the meaning of uncustomed goods?",
    options: [
      "Only seized goods awaiting condemnation",
      "Only goods without invoices",
      "Only prohibited imports in the Second Schedule",
      "Dutiable goods whose full duties have not been paid, and goods dealt with contrary to customs law",
    ],
    correct: 3
  },
  {
    id: 16,
    question: "Choose the single best legal answer: a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "They are the same because both appear in Part X",
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
      "Valuation applies only to exports and rate of duty applies only to imports",
    ],
    correct: 2
  },
  {
    id: 17,
    question: "From an exam perspective, which statement is most accurate: where is the exemptions regime set out?",
    options: [
      "The Sixth Schedule",
      "The Third Schedule",
      "The First Schedule",
      "The Fifth Schedule",
    ],
    correct: 3
  },
  {
    id: 18,
    question: "In passenger clearance, which statement about the dual channel system is correct?",
    options: [
      "The red channel is only for exports",
      "Both channels are used only after valuation",
      "The green channel is for nothing to declare or allowance goods; the red channel is for dutiable or restricted goods",
      "The green channel is for crew only",
    ],
    correct: 2
  },
  {
    id: 19,
    question: "In a problem question, which Schedule should an officer consult first for prohibited and restricted exports generally?",
    options: [
      "The Third Schedule",
      "The Sixth Schedule",
      "The Fourth Schedule",
      "The Second Schedule",
    ],
    correct: 0
  },
  {
    id: 20,
    question: "Which option most directly reflects the Act if asked about this issue: within export procedure, what are stores?",
    options: [
      "Any goods seized during a baggage search",
      "Goods for use or sale on board aircraft, vessels, and trains engaged in international transport",
      "Any goods waiting in a customs warehouse",
      "Only fuel in pipeline imports",
    ],
    correct: 1
  },
  {
    id: 21,
    question: "Choose the single best legal answer: which event best marks the legal time of importation of goods?",
    options: [
      "When the consignee removes the goods from the customs area",
      "When the owner pays warehouse rent",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the goods come within the boundaries of the Partner States",
    ],
    correct: 3
  },
  {
    id: 22,
    question: "From an exam perspective, which statement is most accurate: why is the period of warehousing important?",
    options: [
      "Because the Act provides a warehousing period and possible sale of goods once lawful storage does not continue indefinitely",
      "Because warehouse rent is never payable after the first week",
      "Because warehousing automatically makes goods duty-free after 14 days",
      "Because goods must always be condemned at month's end",
    ],
    correct: 0
  },
  {
    id: 23,
    question: "Which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption and drawback are identical in all legal effects",
      "Exemption is a seizure power, while drawback is a search power",
    ],
    correct: 1
  },
  {
    id: 24,
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
    id: 25,
    question: "Which option most directly reflects the Act if asked about this issue: a vessel arrives from a foreign port and, before reaching the proper place of mooring, the master allows cargo to be opened without the proper officer's knowledge. Which is the best legal consequence?",
    options: [
      "The act is regular if the consignee later files entry within 21 days",
      "The goods automatically become exempt from duty",
      "Only the wharf owner becomes liable, not the master",
      "The master commits an offence, and the goods involved may be liable to forfeiture",
    ],
    correct: 3
  },
  {
    id: 26,
    question: "Choose the single best legal answer: which event best marks the legal time of exportation for goods carried by aircraft or vessel?",
    options: [
      "The moment entry outwards is granted",
      "Departure of the carrying aircraft or vessel from its final position, anchorage, or berth at the place of shipment",
      "The moment the goods are packed for transport",
      "The time the cargo is first entered for export",
    ],
    correct: 1
  },
  {
    id: 27,
    question: "From an exam perspective, which statement is most accurate: what additional legal status does an officer have while performing duty under the Act?",
    options: [
      "The powers, rights, privileges, and protection of a police officer of that Partner State",
      "Only the powers of the Commissioner",
      "The powers of a magistrate",
      "The legal status of a private investigator",
    ],
    correct: 0
  },
  {
    id: 28,
    question: "Which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are first restored, then seized, then valued",
      "Goods are deemed duty-free once a claim is filed",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are automatically auctioned before any seizure",
    ],
    correct: 2
  },
  {
    id: 29,
    question: "In a problem question, an importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because warehousing transfers ownership permanently to Customs",
      "Because warehousing is reserved only for seized goods",
      "Because once warehoused, goods become prohibited goods by law",
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
    ],
    correct: 3
  },
  {
    id: 30,
    question: "Which option most directly reflects the Act if asked about this issue: which pairing is correct under the Act?",
    options: [
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
    ],
    correct: 0
  },
  {
    id: 31,
    question: "Choose the single best legal answer: which pairing is correct under the Act?",
    options: [
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Commissioner appoints ports, while the Council appoints customs areas",
    ],
    correct: 2
  },
  {
    id: 32,
    question: "From an exam perspective, which statement is most accurate: which of the following best states the role of the Commissioner in the appeal structure?",
    options: [
      "The Commissioner hears only criminal smuggling trials",
      "The Commissioner is the first review authority before a further appeal goes to the Tax Appeals Tribunal",
      "The Commissioner is the final judicial body",
      "The Commissioner only appoints the Tribunal and never reviews decisions",
    ],
    correct: 1
  },
  {
    id: 33,
    question: "Which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are deemed duty-free once a claim is filed",
      "Goods are automatically auctioned before any seizure",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are first restored, then seized, then valued",
    ],
    correct: 2
  },
  {
    id: 34,
    question: "In a problem question, which statement about the Second and Third Schedules is correct?",
    options: [
      "The Second Schedule deals with valuation, while the Third deals with exemptions",
      "Both schedules only concern warehousing",
      "The Second Schedule deals with distress, while the Third deals with officer declarations",
      "The Second Schedule deals with imports, while the Third Schedule deals with exports",
    ],
    correct: 3
  },
  {
    id: 35,
    question: "Which option most directly reflects the Act if asked about this issue: which reporting pair is correct under the Act?",
    options: [
      "A vessel reports not less than 24 hours before arrival; an aircraft reports immediately after take-off from the foreign port",
      "Both report only after arrival",
      "A vessel reports after discharge; an aircraft 24 hours before landing",
      "A vessel reports only after bulk is broken",
    ],
    correct: 0
  },
  {
    id: 36,
    question: "Choose the single best legal answer: what is duty drawback?",
    options: [
      "A method of warehousing goods",
      "A refund of all or part of import duty paid when goods are later exported or otherwise used in a qualifying prescribed way",
      "An anti-dumping duty on subsidized imports",
      "A penalty imposed in addition to export duty",
    ],
    correct: 1
  },
  {
    id: 37,
    question: "From an exam perspective, which statement is most accurate: an importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because warehousing transfers ownership permanently to Customs",
      "Because once warehoused, goods become prohibited goods by law",
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
      "Because warehousing is reserved only for seized goods",
    ],
    correct: 2
  },
  {
    id: 38,
    question: "What is the core rule in section 120 on rate of duty?",
    options: [
      "Time of warehousing always eliminates the rate",
      "Time of condemnation determines the rate",
      "Time of seizure determines the rate",
      "Time of entry determines the rate of duty",
    ],
    correct: 3
  },
  {
    id: 39,
    question: "In a problem question, what is the legal effect of section 201?",
    options: [
      "Duty may remain payable in addition to any fine imposed for the offence",
      "Only warehouse rent remains payable",
      "Payment of duty replaces every fine",
      "All duty is automatically waived after conviction",
    ],
    correct: 0
  },
  {
    id: 40,
    question: "Which option most directly reflects the Act if asked about this issue: which event best marks the legal time of importation of goods?",
    options: [
      "When the consignee removes the goods from the customs area",
      "When the goods come within the boundaries of the Partner States",
      "When the owner pays warehouse rent",
      "When the proper officer completes valuation under the Fourth Schedule",
    ],
    correct: 1
  },
  {
    id: 41,
    question: "Choose the single best legal answer: a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "Valuation applies only to exports and rate of duty applies only to imports",
      "They are the same because both appear in Part X",
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
    ],
    correct: 2
  },
  {
    id: 42,
    question: "From an exam perspective, which statement is most accurate: where is the exemptions regime set out?",
    options: [
      "The Third Schedule",
      "The Fifth Schedule",
      "The Sixth Schedule",
      "The First Schedule",
    ],
    correct: 1
  },
  {
    id: 43,
    question: "An importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "Duty becomes payable only if the Tribunal later orders it separately",
      "The fine automatically substitutes for all customs obligations",
      "Only export duty may survive after conviction",
      "The Act allows payment of duty in addition to the fine",
    ],
    correct: 3
  },
  {
    id: 44,
    question: "In a problem question, what is the core rule in section 120 on rate of duty?",
    options: [
      "Time of entry determines the rate of duty",
      "Time of warehousing always eliminates the rate",
      "Time of seizure determines the rate",
      "Time of condemnation determines the rate",
    ],
    correct: 0
  },
  {
    id: 45,
    question: "Which option most directly reflects the Act if asked about this issue: a trader wants to challenge a customs decision immediately before the Tribunal without first approaching the Commissioner. What is the best answer under Part XX?",
    options: [
      "The Tribunal is always the first forum",
      "The trader must first seek a search warrant",
      "The Council must first approve all appeals",
      "The Act first provides for review to the Commissioner before appeal to the Tax Appeals Tribunal",
    ],
    correct: 3
  },
  {
    id: 46,
    question: "Choose the single best legal answer: what additional legal status does an officer have while performing duty under the Act?",
    options: [
      "The powers, rights, privileges, and protection of a police officer of that Partner State",
      "Only the powers of the Commissioner",
      "The legal status of a private investigator",
      "The powers of a magistrate",
    ],
    correct: 0
  },
  {
    id: 47,
    question: "From an exam perspective, which statement is most accurate: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods are outside the Act once stored",
    ],
    correct: 1
  },
  {
    id: 48,
    question: "An importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because once warehoused, goods become prohibited goods by law",
      "Because warehousing transfers ownership permanently to Customs",
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
      "Because warehousing is reserved only for seized goods",
    ],
    correct: 2
  },
  {
    id: 49,
    question: "In a problem question, what is the core rule in section 120 on rate of duty?",
    options: [
      "Time of warehousing always eliminates the rate",
      "Time of entry determines the rate of duty",
      "Time of seizure determines the rate",
      "Time of condemnation determines the rate",
    ],
    correct: 1
  },
  {
    id: 50,
    question: "Which option most directly reflects the Act if asked about this issue: which event best marks the legal time of importation of goods?",
    options: [
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the consignee removes the goods from the customs area",
      "When the goods come within the boundaries of the Partner States",
      "When the owner pays warehouse rent",
    ],
    correct: 2
  },
];
