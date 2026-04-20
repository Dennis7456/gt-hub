const QUESTIONS = [
  {
    id: 1,
    question: "From an exam perspective, which statement is most accurate: which event best marks the legal time of importation of goods?",
    options: [
      "When the owner pays warehouse rent",
      "When the consignee removes the goods from the customs area",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the goods come within the boundaries of the Partner States",
    ],
    correct: 3
  },
  {
    id: 2,
    question: "What is duty drawback?",
    options: [
      "A penalty imposed in addition to export duty",
      "An anti-dumping duty on subsidized imports",
      "A refund of all or part of import duty paid when goods are later exported or otherwise used in a qualifying prescribed way",
      "A method of warehousing goods",
    ],
    correct: 2
  },
  {
    id: 3,
    question: "In a problem question, which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Final conviction by a subordinate court",
      "Reasonable grounds to believe",
      "Written consent of the owner",
      "Approval of the Customs Co-operation Council",
    ],
    correct: 1
  },
  {
    id: 4,
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
    id: 5,
    question: "Choose the single best legal answer: during a lawful search, an officer cannot access a locked compartment in a vehicle suspected of carrying uncustomed goods. Which statement is most accurate?",
    options: [
      "The officer may condemn the goods without searching the compartment",
      "The officer must wait until the owner volunteers the key",
      "Only a warehouse keeper may authorize forced opening",
      "The officer may open it in the manner, including by force, that is reasonably necessary under the Act",
    ],
    correct: 3
  },
  {
    id: 6,
    question: "From an exam perspective, which statement is most accurate: an importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "The Act allows payment of duty in addition to the fine",
      "The fine automatically substitutes for all customs obligations",
      "Only export duty may survive after conviction",
      "Duty becomes payable only if the Tribunal later orders it separately",
    ],
    correct: 0
  },
  {
    id: 7,
    question: "An importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "The fine automatically substitutes for all customs obligations",
      "The Act allows payment of duty in addition to the fine",
      "Only export duty may survive after conviction",
      "Duty becomes payable only if the Tribunal later orders it separately",
    ],
    correct: 1
  },
  {
    id: 8,
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
    id: 9,
    question: "Which option most directly reflects the Act if asked about this issue: what is the correct appeal path under Part XX?",
    options: [
      "Appeal to the police first, then to the Commissioner",
      "Appeal directly to the Directorate",
      "Application to the warehouse keeper, then to the magistrate",
      "Application for review to the Commissioner, then appeal to the Tax Appeals Tribunal",
    ],
    correct: 3
  },
  {
    id: 10,
    question: "Choose the single best legal answer: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are outside the Act once stored",
    ],
    correct: 2
  },
  {
    id: 11,
    question: "From an exam perspective, which statement is most accurate: under the Act, who is a proper officer?",
    options: [
      "Any officer whose right or duty it is to require the performance of, or to perform, the act in question",
      "Any warehouse keeper appointed by the Council",
      "Only the Commissioner personally",
      "Any police officer in the country",
    ],
    correct: 0
  },
  {
    id: 12,
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
    id: 13,
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
    id: 14,
    question: "Which option most directly reflects the Act if asked about this issue: an importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because warehousing is reserved only for seized goods",
      "Because warehousing transfers ownership permanently to Customs",
      "Because once warehoused, goods become prohibited goods by law",
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
    ],
    correct: 3
  },
  {
    id: 15,
    question: "Choose the single best legal answer: why is the period of warehousing important?",
    options: [
      "Because the Act provides a warehousing period and possible sale of goods once lawful storage does not continue indefinitely",
      "Because warehouse rent is never payable after the first week",
      "Because warehousing automatically makes goods duty-free after 14 days",
      "Because goods must always be condemned at month's end",
    ],
    correct: 0
  },
  {
    id: 16,
    question: "From an exam perspective, which statement is most accurate: which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Approval of the Customs Co-operation Council",
      "Reasonable grounds to believe",
      "Final conviction by a subordinate court",
      "Written consent of the owner",
    ],
    correct: 1
  },
  {
    id: 17,
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
    id: 18,
    question: "In a problem question, as a general rule, where must an arriving aircraft or vessel from outside the Partner States first land, touch, or enter?",
    options: [
      "A lawful port, unless the proper officer allows otherwise in special circumstances",
      "Any place where cargo can be discharged quickly",
      "Any sufferance wharf chosen by the master",
      "Any inland warehouse designated by the consignee",
    ],
    correct: 0
  },
  {
    id: 19,
    question: "Which option most directly reflects the Act if asked about this issue: which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Approval of the Customs Co-operation Council",
      "Final conviction by a subordinate court",
      "Reasonable grounds to believe",
      "Written consent of the owner",
    ],
    correct: 2
  },
  {
    id: 20,
    question: "Choose the single best legal answer: what is the legal effect of section 201?",
    options: [
      "All duty is automatically waived after conviction",
      "Duty may remain payable in addition to any fine imposed for the offence",
      "Payment of duty replaces every fine",
      "Only warehouse rent remains payable",
    ],
    correct: 1
  },
  {
    id: 21,
    question: "From an exam perspective, which statement is most accurate: what additional legal status does an officer have while performing duty under the Act?",
    options: [
      "Only the powers of the Commissioner",
      "The powers of a magistrate",
      "The legal status of a private investigator",
      "The powers, rights, privileges, and protection of a police officer of that Partner State",
    ],
    correct: 3
  },
  {
    id: 22,
    question: "Imported goods are landed into a transit shed. Until they are lawfully delivered from that shed, how are they treated for responsibility purposes?",
    options: [
      "They are treated as entered for home consumption automatically",
      "They become the consignee's responsibility only",
      "They are deemed to remain in the importing aircraft or vessel, so the owner or agent remains responsible unless the shed owner legally takes that responsibility",
      "They cease to be subject to customs control once placed in the shed",
    ],
    correct: 2
  },
  {
    id: 23,
    question: "In a problem question, an importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
      "Because once warehoused, goods become prohibited goods by law",
      "Because warehousing transfers ownership permanently to Customs",
      "Because warehousing is reserved only for seized goods",
    ],
    correct: 0
  },
  {
    id: 24,
    question: "Which option most directly reflects the Act if asked about this issue: which Schedule should an officer consult first for prohibited and restricted exports generally?",
    options: [
      "The Sixth Schedule",
      "The Third Schedule",
      "The Fourth Schedule",
      "The Second Schedule",
    ],
    correct: 1
  },
  {
    id: 25,
    question: "Choose the single best legal answer: which event best marks the legal time of exportation for goods carried by aircraft or vessel?",
    options: [
      "The moment entry outwards is granted",
      "The moment the goods are packed for transport",
      "Departure of the carrying aircraft or vessel from its final position, anchorage, or berth at the place of shipment",
      "The time the cargo is first entered for export",
    ],
    correct: 2
  },
  {
    id: 26,
    question: "From an exam perspective, which statement is most accurate: an importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "The Act allows payment of duty in addition to the fine",
      "Only export duty may survive after conviction",
      "Duty becomes payable only if the Tribunal later orders it separately",
      "The fine automatically substitutes for all customs obligations",
    ],
    correct: 0
  },
  {
    id: 27,
    question: "Which pairing is correct under the Act?",
    options: [
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
    ],
    correct: 3
  },
  {
    id: 28,
    question: "In a problem question, which set correctly states the main entry options for imported cargo?",
    options: [
      "Home consumption, condemnation, seizure, or auction",
      "Home consumption, warehousing, transhipment, transit, or export processing zones",
      "Only home consumption and warehousing",
      "Transit, distress, remission, or drawback",
    ],
    correct: 1
  },
  {
    id: 29,
    question: "Which option most directly reflects the Act if asked about this issue: a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "Seizure applies only to documents while forfeiture applies only to vehicles",
      "Forfeiture happens first and seizure only follows after auction",
      "They are the same and the Act uses the words interchangeably",
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
    ],
    correct: 3
  },
  {
    id: 30,
    question: "Choose the single best legal answer: which event best marks the legal time of exportation for goods carried by aircraft or vessel?",
    options: [
      "Departure of the carrying aircraft or vessel from its final position, anchorage, or berth at the place of shipment",
      "The time the cargo is first entered for export",
      "The moment the goods are packed for transport",
      "The moment entry outwards is granted",
    ],
    correct: 0
  },
  {
    id: 31,
    question: "From an exam perspective, which statement is most accurate: which reporting pair is correct under the Act?",
    options: [
      "Both report only after arrival",
      "A vessel reports not less than 24 hours before arrival; an aircraft reports immediately after take-off from the foreign port",
      "A vessel reports after discharge; an aircraft 24 hours before landing",
      "A vessel reports only after bulk is broken",
    ],
    correct: 1
  },
  {
    id: 32,
    question: "Which pairing is correct under the Act?",
    options: [
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Commissioner appoints ports, while the Council appoints customs areas",
    ],
    correct: 2
  },
  {
    id: 33,
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
    id: 34,
    question: "Which option most directly reflects the Act if asked about this issue: what special safeguard applies when a female is searched under section 155?",
    options: [
      "She must be searched only by a female officer",
      "She is fully exempt from personal search",
      "She may only be searched after midnight",
      "She may only be searched in the presence of the Commissioner",
    ],
    correct: 0
  },
  {
    id: 35,
    question: "Choose the single best legal answer: what must a permanently appointed customs officer do upon appointment?",
    options: [
      "Take an oath only before the Directorate",
      "File a valuation declaration under the Fourth Schedule",
      "Make and subscribe the declaration in the First Schedule before a magistrate or commissioner for oaths",
      "Sign an export bond in the Sixth Schedule",
    ],
    correct: 2
  },
  {
    id: 36,
    question: "From an exam perspective, which statement is most accurate: when may an officer stop and search a vehicle under section 153?",
    options: [
      "Only after a Tribunal warrant",
      "When the officer has reasonable grounds to believe it carries uncustomed goods or goods being unlawfully transferred",
      "Only during normal office hours at a customs airport",
      "Only if the driver first refuses to pay warehouse rent",
    ],
    correct: 1
  },
  {
    id: 37,
    question: "A vessel arrives from a foreign port and, before reaching the proper place of mooring, the master allows cargo to be opened without the proper officer's knowledge. Which is the best legal consequence?",
    options: [
      "The master commits an offence, and the goods involved may be liable to forfeiture",
      "The act is regular if the consignee later files entry within 21 days",
      "The goods automatically become exempt from duty",
      "Only the wharf owner becomes liable, not the master",
    ],
    correct: 0
  },
  {
    id: 38,
    question: "In a problem question, which statement best distinguishes seizure from forfeiture?",
    options: [
      "Forfeiture is temporary detention",
      "Seizure applies only to documents",
      "They are identical terms with no procedural difference",
      "Seizure is the taking into custody; forfeiture is the legal loss of the property under customs law",
    ],
    correct: 3
  },
  {
    id: 39,
    question: "Which option most directly reflects the Act if asked about this issue: which statement about the Second and Third Schedules is correct?",
    options: [
      "Both schedules only concern warehousing",
      "The Second Schedule deals with valuation, while the Third deals with exemptions",
      "The Second Schedule deals with imports, while the Third Schedule deals with exports",
      "The Second Schedule deals with distress, while the Third deals with officer declarations",
    ],
    correct: 2
  },
  {
    id: 40,
    question: "Choose the single best legal answer: who is the warehouse keeper in relation to a bonded warehouse?",
    options: [
      "The Commissioner of Customs",
      "The holder of the licence granted in respect of that bonded warehouse",
      "The officer stationed nearest the gate",
      "The consignee with the highest-value cargo",
    ],
    correct: 1
  },
  {
    id: 41,
    question: "From an exam perspective, which statement is most accurate: a trader wants to challenge a customs decision immediately before the Tribunal without first approaching the Commissioner. What is the best answer under Part XX?",
    options: [
      "The Act first provides for review to the Commissioner before appeal to the Tax Appeals Tribunal",
      "The trader must first seek a search warrant",
      "The Tribunal is always the first forum",
      "The Council must first approve all appeals",
    ],
    correct: 0
  },
  {
    id: 42,
    question: "What is the correct appeal path under Part XX?",
    options: [
      "Appeal to the police first, then to the Commissioner",
      "Appeal directly to the Directorate",
      "Application for review to the Commissioner, then appeal to the Tax Appeals Tribunal",
      "Application to the warehouse keeper, then to the magistrate",
    ],
    correct: 2
  },
  {
    id: 43,
    question: "In a problem question, which pairing is correct?",
    options: [
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
    ],
    correct: 1
  },
  {
    id: 44,
    question: "Which option most directly reflects the Act if asked about this issue: an officer is determining duty on imported goods that attract ad valorem duty. What is the most direct legal source for the valuation rules?",
    options: [
      "Section 114 read together with the Fifth Schedule",
      "Section 145 read together with the First Schedule",
      "Section 130 read together with the Sixth Schedule",
      "Section 122 read together with the Fourth Schedule",
    ],
    correct: 3
  },
  {
    id: 45,
    question: "Choose the single best legal answer: which event best marks the legal time of exportation for goods carried by aircraft or vessel?",
    options: [
      "Departure of the carrying aircraft or vessel from its final position, anchorage, or berth at the place of shipment",
      "The moment the goods are packed for transport",
      "The time the cargo is first entered for export",
      "The moment entry outwards is granted",
    ],
    correct: 0
  },
  {
    id: 46,
    question: "From an exam perspective, which statement is most accurate: where are the rules for customs valuation of imported goods liable to ad valorem import duty found?",
    options: [
      "The Sixth Schedule",
      "The Fifth Schedule",
      "The Fourth Schedule",
      "The Second Schedule",
    ],
    correct: 2
  },
  {
    id: 47,
    question: "Which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate is a judicial body, while the Commissioner is legislative",
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
    ],
    correct: 1
  },
  {
    id: 48,
    question: "In a problem question, which pairing is correct?",
    options: [
      "Fourth Schedule—appeals; Fifth Schedule—warehousing; Sixth Schedule—transit sheds",
      "Fourth Schedule—seizures; Fifth Schedule—smuggling; Sixth Schedule—imports by post",
      "Fourth Schedule—exports; Fifth Schedule—officer declaration; Sixth Schedule—valuation",
      "Fourth Schedule—valuation; Fifth Schedule—exemptions; Sixth Schedule—warrant of distress",
    ],
    correct: 3
  },
  {
    id: 49,
    question: "Which option most directly reflects the Act if asked about this issue: a trader wants to challenge a customs decision immediately before the Tribunal without first approaching the Commissioner. What is the best answer under Part XX?",
    options: [
      "The Act first provides for review to the Commissioner before appeal to the Tax Appeals Tribunal",
      "The Council must first approve all appeals",
      "The Tribunal is always the first forum",
      "The trader must first seek a search warrant",
    ],
    correct: 0
  },
  {
    id: 50,
    question: "Choose the single best legal answer: an importer places dutiable goods in a bonded warehouse and later asks why Customs still controls access to the premises. What is the best answer?",
    options: [
      "Because warehousing is reserved only for seized goods",
      "Because warehoused goods remain under customs control, and access must be regulated to protect revenue and accountability",
      "Because warehousing transfers ownership permanently to Customs",
      "Because once warehoused, goods become prohibited goods by law",
    ],
    correct: 1
  },
];
