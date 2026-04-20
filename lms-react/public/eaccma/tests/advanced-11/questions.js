const QUESTIONS = [
  {
    id: 1,
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
    id: 2,
    question: "Choose the single best legal answer: during a lawful search, an officer cannot access a locked compartment in a vehicle suspected of carrying uncustomed goods. Which statement is most accurate?",
    options: [
      "Only a warehouse keeper may authorize forced opening",
      "The officer must wait until the owner volunteers the key",
      "The officer may open it in the manner, including by force, that is reasonably necessary under the Act",
      "The officer may condemn the goods without searching the compartment",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "From an exam perspective, which statement is most accurate: a vessel arrives from a foreign port and, before reaching the proper place of mooring, the master allows cargo to be opened without the proper officer's knowledge. Which is the best legal consequence?",
    options: [
      "The act is regular if the consignee later files entry within 21 days",
      "The master commits an offence, and the goods involved may be liable to forfeiture",
      "The goods automatically become exempt from duty",
      "Only the wharf owner becomes liable, not the master",
    ],
    correct: 1
  },
  {
    id: 4,
    question: "Which pairing is correct?",
    options: [
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
    ],
    correct: 0
  },
  {
    id: 5,
    question: "In a problem question, what is the best description of entry outwards?",
    options: [
      "A valuation method for export duty",
      "The formal customs step allowing an aircraft or vessel to proceed outward with export cargo or stores",
      "The same thing as condemnation of seized goods",
      "A bonded warehouse licence issued by the Commissioner",
    ],
    correct: 1
  },
  {
    id: 6,
    question: "Which option most directly reflects the Act if asked about this issue: imported goods are landed into a transit shed. Until they are lawfully delivered from that shed, how are they treated for responsibility purposes?",
    options: [
      "They cease to be subject to customs control once placed in the shed",
      "They are treated as entered for home consumption automatically",
      "They become the consignee's responsibility only",
      "They are deemed to remain in the importing aircraft or vessel, so the owner or agent remains responsible unless the shed owner legally takes that responsibility",
    ],
    correct: 3
  },
  {
    id: 7,
    question: "Choose the single best legal answer: which statement best captures the meaning of uncustomed goods?",
    options: [
      "Dutiable goods whose full duties have not been paid, and goods dealt with contrary to customs law",
      "Only goods without invoices",
      "Only seized goods awaiting condemnation",
      "Only prohibited imports in the Second Schedule",
    ],
    correct: 0
  },
  {
    id: 8,
    question: "From an exam perspective, which statement is most accurate: which event best marks the legal time of importation of goods?",
    options: [
      "When the consignee removes the goods from the customs area",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the goods come within the boundaries of the Partner States",
      "When the owner pays warehouse rent",
    ],
    correct: 2
  },
  {
    id: 9,
    question: "An importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "The Act allows payment of duty in addition to the fine",
      "Only export duty may survive after conviction",
      "Duty becomes payable only if the Tribunal later orders it separately",
      "The fine automatically substitutes for all customs obligations",
    ],
    correct: 0
  },
  {
    id: 10,
    question: "In a problem question, goods are entered for export but are discharged again within a Partner State instead of completing exportation. Which principle is most directly undermined?",
    options: [
      "The rule that all exports must pass through the green channel",
      "The rule that goods entered for export should not be discharged in a Partner State as though the export procedure could be reversed casually",
      "The rule that duty must always be paid before entry outwards is granted",
      "The rule that all export goods must first be warehoused",
    ],
    correct: 1
  },
  {
    id: 11,
    question: "Which option most directly reflects the Act if asked about this issue: an importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "Duty becomes payable only if the Tribunal later orders it separately",
      "The fine automatically substitutes for all customs obligations",
      "Only export duty may survive after conviction",
      "The Act allows payment of duty in addition to the fine",
    ],
    correct: 3
  },
  {
    id: 12,
    question: "Choose the single best legal answer: which of the following best states the role of the Commissioner in the appeal structure?",
    options: [
      "The Commissioner hears only criminal smuggling trials",
      "The Commissioner only appoints the Tribunal and never reviews decisions",
      "The Commissioner is the first review authority before a further appeal goes to the Tax Appeals Tribunal",
      "The Commissioner is the final judicial body",
    ],
    correct: 2
  },
  {
    id: 13,
    question: "From an exam perspective, which statement is most accurate: goods are entered for export but are discharged again within a Partner State instead of completing exportation. Which principle is most directly undermined?",
    options: [
      "The rule that goods entered for export should not be discharged in a Partner State as though the export procedure could be reversed casually",
      "The rule that all export goods must first be warehoused",
      "The rule that all exports must pass through the green channel",
      "The rule that duty must always be paid before entry outwards is granted",
    ],
    correct: 0
  },
  {
    id: 14,
    question: "A person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "Seizure applies only to documents while forfeiture applies only to vehicles",
      "Forfeiture happens first and seizure only follows after auction",
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
      "They are the same and the Act uses the words interchangeably",
    ],
    correct: 2
  },
  {
    id: 15,
    question: "In a problem question, which event best marks the legal time of exportation for goods carried by aircraft or vessel?",
    options: [
      "The time the cargo is first entered for export",
      "The moment entry outwards is granted",
      "The moment the goods are packed for transport",
      "Departure of the carrying aircraft or vessel from its final position, anchorage, or berth at the place of shipment",
    ],
    correct: 3
  },
  {
    id: 16,
    question: "Which option most directly reflects the Act if asked about this issue: which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption and drawback are identical in all legal effects",
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
      "Exemption is a seizure power, while drawback is a search power",
    ],
    correct: 1
  },
  {
    id: 17,
    question: "Choose the single best legal answer: a vessel arrives from a foreign port and, before reaching the proper place of mooring, the master allows cargo to be opened without the proper officer's knowledge. Which is the best legal consequence?",
    options: [
      "The act is regular if the consignee later files entry within 21 days",
      "Only the wharf owner becomes liable, not the master",
      "The master commits an offence, and the goods involved may be liable to forfeiture",
      "The goods automatically become exempt from duty",
    ],
    correct: 2
  },
  {
    id: 18,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct under the Act?",
    options: [
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
    ],
    correct: 0
  },
  {
    id: 19,
    question: "An importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because warehousing is reserved only for seized goods",
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
      "Because warehousing transfers ownership permanently to Customs",
      "Because once warehoused, goods become prohibited goods by law",
    ],
    correct: 1
  },
  {
    id: 20,
    question: "In a problem question, what additional legal status does an officer have while performing duty under the Act?",
    options: [
      "The legal status of a private investigator",
      "The powers of a magistrate",
      "Only the powers of the Commissioner",
      "The powers, rights, privileges, and protection of a police officer of that Partner State",
    ],
    correct: 3
  },
  {
    id: 21,
    question: "Which option most directly reflects the Act if asked about this issue: a trader wants to challenge a customs decision immediately before the Tribunal without first approaching the Commissioner. What is the best answer under Part XX?",
    options: [
      "The Act first provides for review to the Commissioner before appeal to the Tax Appeals Tribunal",
      "The Tribunal is always the first forum",
      "The trader must first seek a search warrant",
      "The Council must first approve all appeals",
    ],
    correct: 0
  },
  {
    id: 22,
    question: "Choose the single best legal answer: an officer is determining duty on imported goods that attract ad valorem duty. What is the most direct legal source for the valuation rules?",
    options: [
      "Section 145 read together with the First Schedule",
      "Section 130 read together with the Sixth Schedule",
      "Section 122 read together with the Fourth Schedule",
      "Section 114 read together with the Fifth Schedule",
    ],
    correct: 2
  },
  {
    id: 23,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct under the Act?",
    options: [
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
    ],
    correct: 3
  },
  {
    id: 24,
    question: "Imported goods are landed into a transit shed. Until they are lawfully delivered from that shed, how are they treated for responsibility purposes?",
    options: [
      "They cease to be subject to customs control once placed in the shed",
      "They are deemed to remain in the importing aircraft or vessel, so the owner or agent remains responsible unless the shed owner legally takes that responsibility",
      "They become the consignee's responsibility only",
      "They are treated as entered for home consumption automatically",
    ],
    correct: 1
  },
  {
    id: 25,
    question: "In a problem question, which set correctly states the main entry options for imported cargo?",
    options: [
      "Home consumption, condemnation, seizure, or auction",
      "Only home consumption and warehousing",
      "Transit, distress, remission, or drawback",
      "Home consumption, warehousing, transhipment, transit, or export processing zones",
    ],
    correct: 3
  },
  {
    id: 26,
    question: "Which option most directly reflects the Act if asked about this issue: which event best marks the legal time of exportation for goods carried by aircraft or vessel?",
    options: [
      "The time the cargo is first entered for export",
      "The moment entry outwards is granted",
      "Departure of the carrying aircraft or vessel from its final position, anchorage, or berth at the place of shipment",
      "The moment the goods are packed for transport",
    ],
    correct: 2
  },
  {
    id: 27,
    question: "Choose the single best legal answer: which pairing is correct under the Act?",
    options: [
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Commissioner appoints ports, while the Council appoints customs areas",
    ],
    correct: 0
  },
  {
    id: 28,
    question: "From an exam perspective, which statement is most accurate: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods are prohibited imports in every case",
    ],
    correct: 1
  },
  {
    id: 29,
    question: "What does restoration of seizures mean?",
    options: [
      "Return of seized goods or things in accordance with the Act",
      "A mandatory acquittal in all proceedings",
      "Automatic remission of all future duty",
      "Conversion into warehoused goods by default",
    ],
    correct: 0
  },
  {
    id: 30,
    question: "In a problem question, imported goods are landed into a transit shed. Until they are lawfully delivered from that shed, how are they treated for responsibility purposes?",
    options: [
      "They cease to be subject to customs control once placed in the shed",
      "They become the consignee's responsibility only",
      "They are deemed to remain in the importing aircraft or vessel, so the owner or agent remains responsible unless the shed owner legally takes that responsibility",
      "They are treated as entered for home consumption automatically",
    ],
    correct: 2
  },
  {
    id: 31,
    question: "Which option most directly reflects the Act if asked about this issue: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are first restored, then seized, then valued",
      "Goods are deemed duty-free once a claim is filed",
      "Goods are automatically auctioned before any seizure",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
    ],
    correct: 3
  },
  {
    id: 32,
    question: "Choose the single best legal answer: which event best marks the legal time of importation of goods?",
    options: [
      "When the consignee removes the goods from the customs area",
      "When the goods come within the boundaries of the Partner States",
      "When the owner pays warehouse rent",
      "When the proper officer completes valuation under the Fourth Schedule",
    ],
    correct: 1
  },
  {
    id: 33,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct?",
    options: [
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
    ],
    correct: 0
  },
  {
    id: 34,
    question: "As a general rule, where must an arriving aircraft or vessel from outside the Partner States first land, touch, or enter?",
    options: [
      "Any sufferance wharf chosen by the master",
      "A lawful port, unless the proper officer allows otherwise in special circumstances",
      "Any inland warehouse designated by the consignee",
      "Any place where cargo can be discharged quickly",
    ],
    correct: 1
  },
  {
    id: 35,
    question: "In a problem question, a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "Forfeiture happens first and seizure only follows after auction",
      "Seizure applies only to documents while forfeiture applies only to vehicles",
      "They are the same and the Act uses the words interchangeably",
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
    ],
    correct: 3
  },
  {
    id: 36,
    question: "Which option most directly reflects the Act if asked about this issue: a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
      "They are the same because both appear in Part X",
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
      "Valuation applies only to exports and rate of duty applies only to imports",
    ],
    correct: 2
  },
  {
    id: 37,
    question: "Choose the single best legal answer: a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "Valuation applies only to exports and rate of duty applies only to imports",
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
      "They are the same because both appear in Part X",
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
    ],
    correct: 1
  },
  {
    id: 38,
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
    id: 39,
    question: "Which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption and drawback are identical in all legal effects",
      "Exemption is a seizure power, while drawback is a search power",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
    ],
    correct: 3
  },
  {
    id: 40,
    question: "In a problem question, which Schedule is most directly connected to recovery of duty by distress?",
    options: [
      "The Third Schedule",
      "The First Schedule",
      "The Sixth Schedule",
      "The Fourth Schedule",
    ],
    correct: 2
  },
  {
    id: 41,
    question: "Which option most directly reflects the Act if asked about this issue: an officer is determining duty on imported goods that attract ad valorem duty. What is the most direct legal source for the valuation rules?",
    options: [
      "Section 114 read together with the Fifth Schedule",
      "Section 122 read together with the Fourth Schedule",
      "Section 130 read together with the Sixth Schedule",
      "Section 145 read together with the First Schedule",
    ],
    correct: 1
  },
  {
    id: 42,
    question: "Choose the single best legal answer: which set correctly states the main entry options for imported cargo?",
    options: [
      "Only home consumption and warehousing",
      "Transit, distress, remission, or drawback",
      "Home consumption, warehousing, transhipment, transit, or export processing zones",
      "Home consumption, condemnation, seizure, or auction",
    ],
    correct: 2
  },
  {
    id: 43,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct under the Act?",
    options: [
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
    ],
    correct: 3
  },
  {
    id: 44,
    question: "Which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Reasonable grounds to believe",
      "Final conviction by a subordinate court",
      "Written consent of the owner",
      "Approval of the Customs Co-operation Council",
    ],
    correct: 0
  },
  {
    id: 45,
    question: "In a problem question, during a lawful search, an officer cannot access a locked compartment in a vehicle suspected of carrying uncustomed goods. Which statement is most accurate?",
    options: [
      "The officer may condemn the goods without searching the compartment",
      "Only a warehouse keeper may authorize forced opening",
      "The officer may open it in the manner, including by force, that is reasonably necessary under the Act",
      "The officer must wait until the owner volunteers the key",
    ],
    correct: 2
  },
  {
    id: 46,
    question: "Which option most directly reflects the Act if asked about this issue: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are deemed duty-free once a claim is filed",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are first restored, then seized, then valued",
      "Goods are automatically auctioned before any seizure",
    ],
    correct: 1
  },
  {
    id: 47,
    question: "Choose the single best legal answer: what is the legal effect of section 201?",
    options: [
      "Duty may remain payable in addition to any fine imposed for the offence",
      "Only warehouse rent remains payable",
      "Payment of duty replaces every fine",
      "All duty is automatically waived after conviction",
    ],
    correct: 0
  },
  {
    id: 48,
    question: "From an exam perspective, which statement is most accurate: which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
      "Exemption and drawback are identical in all legal effects",
      "Exemption is a seizure power, while drawback is a search power",
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
    ],
    correct: 3
  },
  {
    id: 49,
    question: "Imported goods are landed into a transit shed. Until they are lawfully delivered from that shed, how are they treated for responsibility purposes?",
    options: [
      "They cease to be subject to customs control once placed in the shed",
      "They are deemed to remain in the importing aircraft or vessel, so the owner or agent remains responsible unless the shed owner legally takes that responsibility",
      "They are treated as entered for home consumption automatically",
      "They become the consignee's responsibility only",
    ],
    correct: 1
  },
  {
    id: 50,
    question: "In a problem question, which event best marks the legal time of importation of goods?",
    options: [
      "When the owner pays warehouse rent",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the goods come within the boundaries of the Partner States",
      "When the consignee removes the goods from the customs area",
    ],
    correct: 2
  },
];
