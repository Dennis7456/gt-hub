const QUESTIONS = [
  {
    id: 1,
    question: "In a problem question, a trader wants to challenge a customs decision immediately before the Tribunal without first approaching the Commissioner. What is the best answer under Part XX?",
    options: [
      "The trader must first seek a search warrant",
      "The Act first provides for review to the Commissioner before appeal to the Tax Appeals Tribunal",
      "The Tribunal is always the first forum",
      "The Council must first approve all appeals",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "Which option most directly reflects the Act if asked about this issue: which event best marks the legal time of importation of goods?",
    options: [
      "When the owner pays warehouse rent",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the consignee removes the goods from the customs area",
      "When the goods come within the boundaries of the Partner States",
    ],
    correct: 3
  },
  {
    id: 3,
    question: "Choose the single best legal answer: which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate is a judicial body, while the Commissioner is legislative",
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
    ],
    correct: 2
  },
  {
    id: 4,
    question: "From an exam perspective, which statement is most accurate: which pairing is correct?",
    options: [
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
    ],
    correct: 0
  },
  {
    id: 5,
    question: "A vessel arrives from a foreign port and, before reaching the proper place of mooring, the master allows cargo to be opened without the proper officer's knowledge. Which is the best legal consequence?",
    options: [
      "The act is regular if the consignee later files entry within 21 days",
      "Only the wharf owner becomes liable, not the master",
      "The master commits an offence, and the goods involved may be liable to forfeiture",
      "The goods automatically become exempt from duty",
    ],
    correct: 2
  },
  {
    id: 6,
    question: "In a problem question, what must a permanently appointed customs officer do upon appointment?",
    options: [
      "File a valuation declaration under the Fourth Schedule",
      "Make and subscribe the declaration in the First Schedule before a magistrate or commissioner for oaths",
      "Take an oath only before the Directorate",
      "Sign an export bond in the Sixth Schedule",
    ],
    correct: 1
  },
  {
    id: 7,
    question: "Which option most directly reflects the Act if asked about this issue: which event best marks the legal time of importation of goods?",
    options: [
      "When the goods come within the boundaries of the Partner States",
      "When the owner pays warehouse rent",
      "When the consignee removes the goods from the customs area",
      "When the proper officer completes valuation under the Fourth Schedule",
    ],
    correct: 0
  },
  {
    id: 8,
    question: "Choose the single best legal answer: what is the best description of entry outwards?",
    options: [
      "A bonded warehouse licence issued by the Commissioner",
      "A valuation method for export duty",
      "The same thing as condemnation of seized goods",
      "The formal customs step allowing an aircraft or vessel to proceed outward with export cargo or stores",
    ],
    correct: 3
  },
  {
    id: 9,
    question: "From an exam perspective, which statement is most accurate: which event best marks the legal time of importation of goods?",
    options: [
      "When the goods come within the boundaries of the Partner States",
      "When the consignee removes the goods from the customs area",
      "When the owner pays warehouse rent",
      "When the proper officer completes valuation under the Fourth Schedule",
    ],
    correct: 0
  },
  {
    id: 10,
    question: "A person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "Forfeiture happens first and seizure only follows after auction",
      "They are the same and the Act uses the words interchangeably",
      "Seizure applies only to documents while forfeiture applies only to vehicles",
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
    ],
    correct: 3
  },
  {
    id: 11,
    question: "In a problem question, a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "Seizure applies only to documents while forfeiture applies only to vehicles",
      "Forfeiture happens first and seizure only follows after auction",
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
      "They are the same and the Act uses the words interchangeably",
    ],
    correct: 2
  },
  {
    id: 12,
    question: "Which option most directly reflects the Act if asked about this issue: goods are entered for export but are discharged again within a Partner State instead of completing exportation. Which principle is most directly undermined?",
    options: [
      "The rule that all export goods must first be warehoused",
      "The rule that goods entered for export should not be discharged in a Partner State as though the export procedure could be reversed casually",
      "The rule that duty must always be paid before entry outwards is granted",
      "The rule that all exports must pass through the green channel",
    ],
    correct: 1
  },
  {
    id: 13,
    question: "Choose the single best legal answer: for how long back may the proper officer require books or documents under section 159?",
    options: [
      "Exactly ten years and no less",
      "Only the current calendar year",
      "Only the last fourteen days",
      "Up to five years immediately preceding the requirement",
    ],
    correct: 3
  },
  {
    id: 14,
    question: "From an exam perspective, which statement is most accurate: which event best marks the legal time of importation of goods?",
    options: [
      "When the owner pays warehouse rent",
      "When the goods come within the boundaries of the Partner States",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the consignee removes the goods from the customs area",
    ],
    correct: 1
  },
  {
    id: 15,
    question: "Which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Reasonable grounds to believe",
      "Approval of the Customs Co-operation Council",
      "Final conviction by a subordinate court",
      "Written consent of the owner",
    ],
    correct: 0
  },
  {
    id: 16,
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
    id: 17,
    question: "Which option most directly reflects the Act if asked about this issue: a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
      "They are the same because both appear in Part X",
      "Valuation applies only to exports and rate of duty applies only to imports",
    ],
    correct: 0
  },
  {
    id: 18,
    question: "Choose the single best legal answer: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods automatically become diplomatic goods",
    ],
    correct: 2
  },
  {
    id: 19,
    question: "From an exam perspective, which statement is most accurate: what is the basic starting point of warehousing under Part IV?",
    options: [
      "Only goods in transit may be warehoused",
      "Dutiable goods may be warehoused",
      "Warehousing applies only to export goods",
      "Only seized goods may be warehoused",
    ],
    correct: 1
  },
  {
    id: 20,
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
    id: 21,
    question: "In a problem question, what is the best description of entry outwards?",
    options: [
      "A bonded warehouse licence issued by the Commissioner",
      "The same thing as condemnation of seized goods",
      "The formal customs step allowing an aircraft or vessel to proceed outward with export cargo or stores",
      "A valuation method for export duty",
    ],
    correct: 2
  },
  {
    id: 22,
    question: "Which option most directly reflects the Act if asked about this issue: which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Final conviction by a subordinate court",
      "Reasonable grounds to believe",
      "Approval of the Customs Co-operation Council",
      "Written consent of the owner",
    ],
    correct: 1
  },
  {
    id: 23,
    question: "Choose the single best legal answer: which Schedule contains the declaration of officer?",
    options: [
      "The First Schedule",
      "The Sixth Schedule",
      "The Second Schedule",
      "The Fifth Schedule",
    ],
    correct: 0
  },
  {
    id: 24,
    question: "From an exam perspective, which statement is most accurate: which event best marks the legal time of exportation for goods carried by aircraft or vessel?",
    options: [
      "The moment entry outwards is granted",
      "The moment the goods are packed for transport",
      "The time the cargo is first entered for export",
      "Departure of the carrying aircraft or vessel from its final position, anchorage, or berth at the place of shipment",
    ],
    correct: 3
  },
  {
    id: 25,
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
    id: 26,
    question: "In a problem question, which pairing is correct under the Act?",
    options: [
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
    ],
    correct: 3
  },
  {
    id: 27,
    question: "Which option most directly reflects the Act if asked about this issue: what is duty drawback?",
    options: [
      "A penalty imposed in addition to export duty",
      "An anti-dumping duty on subsidized imports",
      "A refund of all or part of import duty paid when goods are later exported or otherwise used in a qualifying prescribed way",
      "A method of warehousing goods",
    ],
    correct: 2
  },
  {
    id: 28,
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
    id: 29,
    question: "From an exam perspective, which statement is most accurate: a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
      "They are the same and the Act uses the words interchangeably",
      "Forfeiture happens first and seizure only follows after auction",
      "Seizure applies only to documents while forfeiture applies only to vehicles",
    ],
    correct: 0
  },
  {
    id: 30,
    question: "Which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Final conviction by a subordinate court",
      "Reasonable grounds to believe",
      "Written consent of the owner",
      "Approval of the Customs Co-operation Council",
    ],
    correct: 1
  },
  {
    id: 31,
    question: "In a problem question, which pairing is correct under the Act?",
    options: [
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
    ],
    correct: 2
  },
  {
    id: 32,
    question: "Which option most directly reflects the Act if asked about this issue: which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption is a seizure power, while drawback is a search power",
      "Exemption and drawback are identical in all legal effects",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
    ],
    correct: 3
  },
  {
    id: 33,
    question: "Choose the single best legal answer: a trader wants to challenge a customs decision immediately before the Tribunal without first approaching the Commissioner. What is the best answer under Part XX?",
    options: [
      "The Tribunal is always the first forum",
      "The trader must first seek a search warrant",
      "The Act first provides for review to the Commissioner before appeal to the Tax Appeals Tribunal",
      "The Council must first approve all appeals",
    ],
    correct: 2
  },
  {
    id: 34,
    question: "From an exam perspective, which statement is most accurate: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are automatically auctioned before any seizure",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are first restored, then seized, then valued",
      "Goods are deemed duty-free once a claim is filed",
    ],
    correct: 1
  },
  {
    id: 35,
    question: "Why is the period of warehousing important?",
    options: [
      "Because warehouse rent is never payable after the first week",
      "Because goods must always be condemned at month's end",
      "Because warehousing automatically makes goods duty-free after 14 days",
      "Because the Act provides a warehousing period and possible sale of goods once lawful storage does not continue indefinitely",
    ],
    correct: 3
  },
  {
    id: 36,
    question: "In a problem question, what is the legal effect of section 201?",
    options: [
      "Duty may remain payable in addition to any fine imposed for the offence",
      "Payment of duty replaces every fine",
      "Only warehouse rent remains payable",
      "All duty is automatically waived after conviction",
    ],
    correct: 0
  },
  {
    id: 37,
    question: "Which option most directly reflects the Act if asked about this issue: which event best marks the legal time of importation of goods?",
    options: [
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the owner pays warehouse rent",
      "When the consignee removes the goods from the customs area",
      "When the goods come within the boundaries of the Partner States",
    ],
    correct: 3
  },
  {
    id: 38,
    question: "Choose the single best legal answer: a customs officer has reasonable grounds to believe that a vehicle carries uncustomed goods. The driver refuses to stop. What follows most directly under the Act?",
    options: [
      "The refusal itself is an offence, and the officer's stop-and-search power remains engaged",
      "The officer must abandon the matter unless a magistrate is present",
      "The goods become exempt from seizure because the vehicle was moving",
      "The driver may insist on search only after a review to the Commissioner",
    ],
    correct: 0
  },
  {
    id: 39,
    question: "From an exam perspective, which statement is most accurate: when may an officer stop and search a vehicle under section 153?",
    options: [
      "Only if the driver first refuses to pay warehouse rent",
      "Only during normal office hours at a customs airport",
      "When the officer has reasonable grounds to believe it carries uncustomed goods or goods being unlawfully transferred",
      "Only after a Tribunal warrant",
    ],
    correct: 2
  },
  {
    id: 40,
    question: "A trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "Valuation applies only to exports and rate of duty applies only to imports",
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
      "They are the same because both appear in Part X",
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
    ],
    correct: 1
  },
  {
    id: 41,
    question: "In a problem question, which Schedule contains the declaration of officer?",
    options: [
      "The Fifth Schedule",
      "The Second Schedule",
      "The First Schedule",
      "The Sixth Schedule",
    ],
    correct: 2
  },
  {
    id: 42,
    question: "Which option most directly reflects the Act if asked about this issue: a customs officer has reasonable grounds to believe that a vehicle carries uncustomed goods. The driver refuses to stop. What follows most directly under the Act?",
    options: [
      "The driver may insist on search only after a review to the Commissioner",
      "The refusal itself is an offence, and the officer's stop-and-search power remains engaged",
      "The goods become exempt from seizure because the vehicle was moving",
      "The officer must abandon the matter unless a magistrate is present",
    ],
    correct: 1
  },
  {
    id: 43,
    question: "Choose the single best legal answer: imported goods are landed into a transit shed. Until they are lawfully delivered from that shed, how are they treated for responsibility purposes?",
    options: [
      "They are deemed to remain in the importing aircraft or vessel, so the owner or agent remains responsible unless the shed owner legally takes that responsibility",
      "They become the consignee's responsibility only",
      "They are treated as entered for home consumption automatically",
      "They cease to be subject to customs control once placed in the shed",
    ],
    correct: 0
  },
  {
    id: 44,
    question: "From an exam perspective, which statement is most accurate: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
    ],
    correct: 3
  },
  {
    id: 45,
    question: "As a general rule, where must an arriving aircraft or vessel from outside the Partner States first land, touch, or enter?",
    options: [
      "Any place where cargo can be discharged quickly",
      "A lawful port, unless the proper officer allows otherwise in special circumstances",
      "Any sufferance wharf chosen by the master",
      "Any inland warehouse designated by the consignee",
    ],
    correct: 1
  },
  {
    id: 46,
    question: "In a problem question, which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption is a seizure power, while drawback is a search power",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
      "Exemption and drawback are identical in all legal effects",
    ],
    correct: 0
  },
  {
    id: 47,
    question: "Which option most directly reflects the Act if asked about this issue: which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption is a seizure power, while drawback is a search power",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption and drawback are identical in all legal effects",
    ],
    correct: 2
  },
  {
    id: 48,
    question: "Choose the single best legal answer: a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "Seizure applies only to documents while forfeiture applies only to vehicles",
      "Forfeiture happens first and seizure only follows after auction",
      "They are the same and the Act uses the words interchangeably",
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
    ],
    correct: 3
  },
  {
    id: 49,
    question: "From an exam perspective, which statement is most accurate: which event best marks the legal time of importation of goods?",
    options: [
      "When the goods come within the boundaries of the Partner States",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the consignee removes the goods from the customs area",
      "When the owner pays warehouse rent",
    ],
    correct: 0
  },
  {
    id: 50,
    question: "Who is the warehouse keeper in relation to a bonded warehouse?",
    options: [
      "The consignee with the highest-value cargo",
      "The holder of the licence granted in respect of that bonded warehouse",
      "The officer stationed nearest the gate",
      "The Commissioner of Customs",
    ],
    correct: 1
  },
];
