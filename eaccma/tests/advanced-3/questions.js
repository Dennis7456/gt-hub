const QUESTIONS = [
  {
    id: 1,
    question: "From an exam perspective, which statement is most accurate: which statement best distinguishes seizure from forfeiture?",
    options: [
      "Seizure applies only to documents",
      "Forfeiture is temporary detention",
      "They are identical terms with no procedural difference",
      "Seizure is the taking into custody; forfeiture is the legal loss of the property under customs law",
    ],
    correct: 3
  },
  {
    id: 2,
    question: "Which event best marks the legal time of importation of goods?",
    options: [
      "When the goods come within the boundaries of the Partner States",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the owner pays warehouse rent",
      "When the consignee removes the goods from the customs area",
    ],
    correct: 0
  },
  {
    id: 3,
    question: "In a problem question, within export procedure, what are stores?",
    options: [
      "Any goods waiting in a customs warehouse",
      "Any goods seized during a baggage search",
      "Goods for use or sale on board aircraft, vessels, and trains engaged in international transport",
      "Only fuel in pipeline imports",
    ],
    correct: 2
  },
  {
    id: 4,
    question: "Which option most directly reflects the Act if asked about this issue: which body is recognized as the formal appellate forum in Part XX?",
    options: [
      "The Customs Co-operation Council",
      "The Tax Appeals Tribunal",
      "The Directorate of Customs",
      "The Council Committee on Customs Administration",
    ],
    correct: 1
  },
  {
    id: 5,
    question: "Choose the single best legal answer: where are the rules for customs valuation of imported goods liable to ad valorem import duty found?",
    options: [
      "The Second Schedule",
      "The Fifth Schedule",
      "The Fourth Schedule",
      "The Sixth Schedule",
    ],
    correct: 2
  },
  {
    id: 6,
    question: "From an exam perspective, which statement is most accurate: what is the legal effect of section 201?",
    options: [
      "Payment of duty replaces every fine",
      "All duty is automatically waived after conviction",
      "Only warehouse rent remains payable",
      "Duty may remain payable in addition to any fine imposed for the offence",
    ],
    correct: 3
  },
  {
    id: 7,
    question: "Which Schedule is most directly connected to recovery of duty by distress?",
    options: [
      "The Sixth Schedule",
      "The First Schedule",
      "The Third Schedule",
      "The Fourth Schedule",
    ],
    correct: 0
  },
  {
    id: 8,
    question: "In a problem question, what is the core rule in section 120 on rate of duty?",
    options: [
      "Time of condemnation determines the rate",
      "Time of entry determines the rate of duty",
      "Time of warehousing always eliminates the rate",
      "Time of seizure determines the rate",
    ],
    correct: 1
  },
  {
    id: 9,
    question: "Which option most directly reflects the Act if asked about this issue: why is the period of warehousing important?",
    options: [
      "Because warehouse rent is never payable after the first week",
      "Because warehousing automatically makes goods duty-free after 14 days",
      "Because the Act provides a warehousing period and possible sale of goods once lawful storage does not continue indefinitely",
      "Because goods must always be condemned at month's end",
    ],
    correct: 2
  },
  {
    id: 10,
    question: "Choose the single best legal answer: what does restoration of seizures mean?",
    options: [
      "Automatic remission of all future duty",
      "Return of seized goods or things in accordance with the Act",
      "Conversion into warehoused goods by default",
      "A mandatory acquittal in all proceedings",
    ],
    correct: 1
  },
  {
    id: 11,
    question: "From an exam perspective, which statement is most accurate: a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
      "They are the same because both appear in Part X",
      "Valuation applies only to exports and rate of duty applies only to imports",
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
    ],
    correct: 3
  },
  {
    id: 12,
    question: "Which option best states the legal idea of smuggling under the Act?",
    options: [
      "Importing, exporting, carrying coastwise, transferring, or removing goods with intent to defraud revenue or evade prohibitions, restrictions, regulations, or conditions",
      "Any movement of goods between customs areas with approval",
      "Any sale of goods below market value",
      "Any delayed cargo entry after 21 days",
    ],
    correct: 0
  },
  {
    id: 13,
    question: "In a problem question, what is the legal effect of section 201?",
    options: [
      "Only warehouse rent remains payable",
      "All duty is automatically waived after conviction",
      "Payment of duty replaces every fine",
      "Duty may remain payable in addition to any fine imposed for the offence",
    ],
    correct: 3
  },
  {
    id: 14,
    question: "Which option most directly reflects the Act if asked about this issue: an importer argues that because a fine has already been imposed, the unpaid duty should no longer be recovered. Which response best reflects the Act?",
    options: [
      "Duty becomes payable only if the Tribunal later orders it separately",
      "The Act allows payment of duty in addition to the fine",
      "The fine automatically substitutes for all customs obligations",
      "Only export duty may survive after conviction",
    ],
    correct: 1
  },
  {
    id: 15,
    question: "Choose the single best legal answer: a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "Forfeiture happens first and seizure only follows after auction",
      "They are the same and the Act uses the words interchangeably",
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
      "Seizure applies only to documents while forfeiture applies only to vehicles",
    ],
    correct: 2
  },
  {
    id: 16,
    question: "From an exam perspective, which statement is most accurate: what is a short levy in customs law?",
    options: [
      "A case where duty was undercharged and may be recovered",
      "A claim for drawback",
      "A remission for manufacture",
      "A distress warrant after auction",
    ],
    correct: 0
  },
  {
    id: 17,
    question: "Which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods are outside the Act once stored",
    ],
    correct: 1
  },
  {
    id: 18,
    question: "In a problem question, which option best states the legal idea of smuggling under the Act?",
    options: [
      "Importing, exporting, carrying coastwise, transferring, or removing goods with intent to defraud revenue or evade prohibitions, restrictions, regulations, or conditions",
      "Any sale of goods below market value",
      "Any delayed cargo entry after 21 days",
      "Any movement of goods between customs areas with approval",
    ],
    correct: 0
  },
  {
    id: 19,
    question: "Which option most directly reflects the Act if asked about this issue: a trader wants to challenge a customs decision immediately before the Tribunal without first approaching the Commissioner. What is the best answer under Part XX?",
    options: [
      "The Council must first approve all appeals",
      "The trader must first seek a search warrant",
      "The Act first provides for review to the Commissioner before appeal to the Tax Appeals Tribunal",
      "The Tribunal is always the first forum",
    ],
    correct: 2
  },
  {
    id: 20,
    question: "Choose the single best legal answer: what additional legal status does an officer have while performing duty under the Act?",
    options: [
      "Only the powers of the Commissioner",
      "The powers of a magistrate",
      "The legal status of a private investigator",
      "The powers, rights, privileges, and protection of a police officer of that Partner State",
    ],
    correct: 3
  },
  {
    id: 21,
    question: "From an exam perspective, which statement is most accurate: which sequence best reflects the property-consequence logic of Part XVII?",
    options: [
      "Goods are deemed duty-free once a claim is filed",
      "Goods are first restored, then seized, then valued",
      "Goods may be seized, then subjected to claim and condemnation procedure, and ultimately forfeited unless restored",
      "Goods are automatically auctioned before any seizure",
    ],
    correct: 2
  },
  {
    id: 22,
    question: "Imported goods are landed into a transit shed. Until they are lawfully delivered from that shed, how are they treated for responsibility purposes?",
    options: [
      "They are treated as entered for home consumption automatically",
      "They are deemed to remain in the importing aircraft or vessel, so the owner or agent remains responsible unless the shed owner legally takes that responsibility",
      "They become the consignee's responsibility only",
      "They cease to be subject to customs control once placed in the shed",
    ],
    correct: 1
  },
  {
    id: 23,
    question: "In a problem question, within what period must the whole of unloaded cargo generally be entered?",
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
    question: "Which option most directly reflects the Act if asked about this issue: in passenger clearance, which statement about the dual channel system is correct?",
    options: [
      "The red channel is only for exports",
      "Both channels are used only after valuation",
      "The green channel is for crew only",
      "The green channel is for nothing to declare or allowance goods; the red channel is for dutiable or restricted goods",
    ],
    correct: 3
  },
  {
    id: 25,
    question: "Choose the single best legal answer: which event best marks the legal time of importation of goods?",
    options: [
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the owner pays warehouse rent",
      "When the goods come within the boundaries of the Partner States",
      "When the consignee removes the goods from the customs area",
    ],
    correct: 2
  },
  {
    id: 26,
    question: "From an exam perspective, which statement is most accurate: which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
      "The Directorate is a judicial body, while the Commissioner is legislative",
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
    ],
    correct: 1
  },
  {
    id: 27,
    question: "What is the best description of entry outwards?",
    options: [
      "The formal customs step allowing an aircraft or vessel to proceed outward with export cargo or stores",
      "The same thing as condemnation of seized goods",
      "A bonded warehouse licence issued by the Commissioner",
      "A valuation method for export duty",
    ],
    correct: 0
  },
  {
    id: 28,
    question: "In a problem question, which statement best distinguishes seizure from forfeiture?",
    options: [
      "They are identical terms with no procedural difference",
      "Forfeiture is temporary detention",
      "Seizure applies only to documents",
      "Seizure is the taking into custody; forfeiture is the legal loss of the property under customs law",
    ],
    correct: 3
  },
  {
    id: 29,
    question: "Which option most directly reflects the Act if asked about this issue: which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
      "The Directorate is a judicial body, while the Commissioner is legislative",
    ],
    correct: 0
  },
  {
    id: 30,
    question: "Choose the single best legal answer: which section specifically addresses making or using false documents?",
    options: [
      "Section 195",
      "Section 210",
      "Section 203",
      "Section 229",
    ],
    correct: 2
  },
  {
    id: 31,
    question: "From an exam perspective, which statement is most accurate: where are the rules for customs valuation of imported goods liable to ad valorem import duty found?",
    options: [
      "The Sixth Schedule",
      "The Fourth Schedule",
      "The Fifth Schedule",
      "The Second Schedule",
    ],
    correct: 1
  },
  {
    id: 32,
    question: "What additional legal status does an officer have while performing duty under the Act?",
    options: [
      "The legal status of a private investigator",
      "Only the powers of the Commissioner",
      "The powers of a magistrate",
      "The powers, rights, privileges, and protection of a police officer of that Partner State",
    ],
    correct: 3
  },
  {
    id: 33,
    question: "In a problem question, which pairing is correct under the Act?",
    options: [
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
    ],
    correct: 0
  },
  {
    id: 34,
    question: "Which option most directly reflects the Act if asked about this issue: which event best marks the legal time of importation of goods?",
    options: [
      "When the consignee removes the goods from the customs area",
      "When the owner pays warehouse rent",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the goods come within the boundaries of the Partner States",
    ],
    correct: 3
  },
  {
    id: 35,
    question: "Choose the single best legal answer: which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Written consent of the owner",
      "Final conviction by a subordinate court",
      "Reasonable grounds to believe",
      "Approval of the Customs Co-operation Council",
    ],
    correct: 2
  },
  {
    id: 36,
    question: "From an exam perspective, which statement is most accurate: what is the correct appeal path under Part XX?",
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
    question: "What is duty drawback?",
    options: [
      "A method of warehousing goods",
      "An anti-dumping duty on subsidized imports",
      "A refund of all or part of import duty paid when goods are later exported or otherwise used in a qualifying prescribed way",
      "A penalty imposed in addition to export duty",
    ],
    correct: 2
  },
  {
    id: 38,
    question: "In a problem question, which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Reasonable grounds to believe",
      "Written consent of the owner",
      "Final conviction by a subordinate court",
      "Approval of the Customs Co-operation Council",
    ],
    correct: 0
  },
  {
    id: 39,
    question: "Which option most directly reflects the Act if asked about this issue: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods are prohibited imports in every case",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods are outside the Act once stored",
    ],
    correct: 1
  },
  {
    id: 40,
    question: "Choose the single best legal answer: what is the legal effect of section 201?",
    options: [
      "Only warehouse rent remains payable",
      "All duty is automatically waived after conviction",
      "Payment of duty replaces every fine",
      "Duty may remain payable in addition to any fine imposed for the offence",
    ],
    correct: 3
  },
  {
    id: 41,
    question: "From an exam perspective, which statement is most accurate: what must a permanently appointed customs officer do upon appointment?",
    options: [
      "Take an oath only before the Directorate",
      "Make and subscribe the declaration in the First Schedule before a magistrate or commissioner for oaths",
      "File a valuation declaration under the Fourth Schedule",
      "Sign an export bond in the Sixth Schedule",
    ],
    correct: 1
  },
  {
    id: 42,
    question: "In passenger clearance, which statement about the dual channel system is correct?",
    options: [
      "The red channel is only for exports",
      "Both channels are used only after valuation",
      "The green channel is for crew only",
      "The green channel is for nothing to declare or allowance goods; the red channel is for dutiable or restricted goods",
    ],
    correct: 3
  },
  {
    id: 43,
    question: "In a problem question, when may an officer stop and search a vehicle under section 153?",
    options: [
      "When the officer has reasonable grounds to believe it carries uncustomed goods or goods being unlawfully transferred",
      "Only after a Tribunal warrant",
      "Only if the driver first refuses to pay warehouse rent",
      "Only during normal office hours at a customs airport",
    ],
    correct: 0
  },
  {
    id: 44,
    question: "Which option most directly reflects the Act if asked about this issue: what is the best description of entry outwards?",
    options: [
      "The same thing as condemnation of seized goods",
      "A bonded warehouse licence issued by the Commissioner",
      "The formal customs step allowing an aircraft or vessel to proceed outward with export cargo or stores",
      "A valuation method for export duty",
    ],
    correct: 2
  },
  {
    id: 45,
    question: "Choose the single best legal answer: what is a short levy in customs law?",
    options: [
      "A case where duty was undercharged and may be recovered",
      "A distress warrant after auction",
      "A remission for manufacture",
      "A claim for drawback",
    ],
    correct: 0
  },
  {
    id: 46,
    question: "From an exam perspective, which statement is most accurate: within what period must the whole of unloaded cargo generally be entered?",
    options: [
      "Within 30 days after warehousing",
      "Within 14 days after baggage examination",
      "Within 48 hours after arrival in all cases",
      "Within 21 days after commencement of discharge, unless more time is allowed",
    ],
    correct: 3
  },
  {
    id: 47,
    question: "Which Schedule is most directly connected to recovery of duty by distress?",
    options: [
      "The Fourth Schedule",
      "The Sixth Schedule",
      "The First Schedule",
      "The Third Schedule",
    ],
    correct: 1
  },
  {
    id: 48,
    question: "In a problem question, under the Act, who is a proper officer?",
    options: [
      "Any warehouse keeper appointed by the Council",
      "Only the Commissioner personally",
      "Any officer whose right or duty it is to require the performance of, or to perform, the act in question",
      "Any police officer in the country",
    ],
    correct: 2
  },
  {
    id: 49,
    question: "Which option most directly reflects the Act if asked about this issue: which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Reasonable grounds to believe",
      "Final conviction by a subordinate court",
      "Written consent of the owner",
      "Approval of the Customs Co-operation Council",
    ],
    correct: 0
  },
  {
    id: 50,
    question: "Choose the single best legal answer: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are prohibited imports in every case",
    ],
    correct: 2
  },
];
