const QUESTIONS = [
  {
    id: 1,
    question: "As a general rule, where must an arriving aircraft or vessel from outside the Partner States first land, touch, or enter?",
    options: [
      "Any inland warehouse designated by the consignee",
      "A lawful port, unless the proper officer allows otherwise in special circumstances",
      "Any sufferance wharf chosen by the master",
      "Any place where cargo can be discharged quickly",
    ],
    correct: 1
  },
  {
    id: 2,
    question: "In a problem question, which Schedule is most directly connected to recovery of duty by distress?",
    options: [
      "The Sixth Schedule",
      "The Third Schedule",
      "The First Schedule",
      "The Fourth Schedule",
    ],
    correct: 0
  },
  {
    id: 3,
    question: "Which option most directly reflects the Act if asked about this issue: a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "They are the same because both appear in Part X",
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
      "Valuation applies only to exports and rate of duty applies only to imports",
    ],
    correct: 2
  },
  {
    id: 4,
    question: "Choose the single best legal answer: a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "Forfeiture happens first and seizure only follows after auction",
      "Seizure applies only to documents while forfeiture applies only to vehicles",
      "They are the same and the Act uses the words interchangeably",
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
    ],
    correct: 3
  },
  {
    id: 5,
    question: "From an exam perspective, which statement is most accurate: what is duty drawback?",
    options: [
      "A refund of all or part of import duty paid when goods are later exported or otherwise used in a qualifying prescribed way",
      "A method of warehousing goods",
      "An anti-dumping duty on subsidized imports",
      "A penalty imposed in addition to export duty",
    ],
    correct: 0
  },
  {
    id: 6,
    question: "Which pairing is correct under the Act?",
    options: [
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
    ],
    correct: 1
  },
  {
    id: 7,
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
    id: 8,
    question: "Which option most directly reflects the Act if asked about this issue: who is the warehouse keeper in relation to a bonded warehouse?",
    options: [
      "The Commissioner of Customs",
      "The officer stationed nearest the gate",
      "The holder of the licence granted in respect of that bonded warehouse",
      "The consignee with the highest-value cargo",
    ],
    correct: 2
  },
  {
    id: 9,
    question: "Choose the single best legal answer: which set correctly states the main entry options for imported cargo?",
    options: [
      "Home consumption, condemnation, seizure, or auction",
      "Home consumption, warehousing, transhipment, transit, or export processing zones",
      "Only home consumption and warehousing",
      "Transit, distress, remission, or drawback",
    ],
    correct: 1
  },
  {
    id: 10,
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
    id: 11,
    question: "Within what period must the whole of unloaded cargo generally be entered?",
    options: [
      "Within 14 days after baggage examination",
      "Within 30 days after warehousing",
      "Within 21 days after commencement of discharge, unless more time is allowed",
      "Within 48 hours after arrival in all cases",
    ],
    correct: 2
  },
  {
    id: 12,
    question: "In a problem question, within export procedure, what are stores?",
    options: [
      "Goods for use or sale on board aircraft, vessels, and trains engaged in international transport",
      "Any goods waiting in a customs warehouse",
      "Any goods seized during a baggage search",
      "Only fuel in pipeline imports",
    ],
    correct: 0
  },
  {
    id: 13,
    question: "Which option most directly reflects the Act if asked about this issue: what is the legal effect of section 201?",
    options: [
      "Payment of duty replaces every fine",
      "Duty may remain payable in addition to any fine imposed for the offence",
      "Only warehouse rent remains payable",
      "All duty is automatically waived after conviction",
    ],
    correct: 1
  },
  {
    id: 14,
    question: "Choose the single best legal answer: a trader says valuation and rate of duty are the same issue. Which answer is best?",
    options: [
      "They are distinct: valuation determines the customs value, while the rate of duty determines what percentage or amount applies to that value or quantity",
      "Valuation applies only to exports and rate of duty applies only to imports",
      "Rate of duty is set only after seizure, while valuation applies only after appeal",
      "They are the same because both appear in Part X",
    ],
    correct: 0
  },
  {
    id: 15,
    question: "From an exam perspective, which statement is most accurate: where is the exemptions regime set out?",
    options: [
      "The First Schedule",
      "The Third Schedule",
      "The Sixth Schedule",
      "The Fifth Schedule",
    ],
    correct: 3
  },
  {
    id: 16,
    question: "Where are the rules for customs valuation of imported goods liable to ad valorem import duty found?",
    options: [
      "The Fifth Schedule",
      "The Sixth Schedule",
      "The Fourth Schedule",
      "The Second Schedule",
    ],
    correct: 2
  },
  {
    id: 17,
    question: "In a problem question, which event best marks the legal time of importation of goods?",
    options: [
      "When the goods come within the boundaries of the Partner States",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the consignee removes the goods from the customs area",
      "When the owner pays warehouse rent",
    ],
    correct: 0
  },
  {
    id: 18,
    question: "Which option most directly reflects the Act if asked about this issue: a customs officer has reasonable grounds to believe that a vehicle carries uncustomed goods. The driver refuses to stop. What follows most directly under the Act?",
    options: [
      "The goods become exempt from seizure because the vehicle was moving",
      "The driver may insist on search only after a review to the Commissioner",
      "The refusal itself is an offence, and the officer's stop-and-search power remains engaged",
      "The officer must abandon the matter unless a magistrate is present",
    ],
    correct: 2
  },
  {
    id: 19,
    question: "Choose the single best legal answer: goods are entered for export but are discharged again within a Partner State instead of completing exportation. Which principle is most directly undermined?",
    options: [
      "The rule that all export goods must first be warehoused",
      "The rule that goods entered for export should not be discharged in a Partner State as though the export procedure could be reversed casually",
      "The rule that duty must always be paid before entry outwards is granted",
      "The rule that all exports must pass through the green channel",
    ],
    correct: 1
  },
  {
    id: 20,
    question: "From an exam perspective, which statement is most accurate: in passenger clearance, which statement about the dual channel system is correct?",
    options: [
      "Both channels are used only after valuation",
      "The red channel is only for exports",
      "The green channel is for crew only",
      "The green channel is for nothing to declare or allowance goods; the red channel is for dutiable or restricted goods",
    ],
    correct: 3
  },
  {
    id: 21,
    question: "Why is the period of warehousing important?",
    options: [
      "Because warehousing automatically makes goods duty-free after 14 days",
      "Because the Act provides a warehousing period and possible sale of goods once lawful storage does not continue indefinitely",
      "Because goods must always be condemned at month's end",
      "Because warehouse rent is never payable after the first week",
    ],
    correct: 1
  },
  {
    id: 22,
    question: "In a problem question, imported goods are landed into a transit shed. Until they are lawfully delivered from that shed, how are they treated for responsibility purposes?",
    options: [
      "They become the consignee's responsibility only",
      "They are treated as entered for home consumption automatically",
      "They are deemed to remain in the importing aircraft or vessel, so the owner or agent remains responsible unless the shed owner legally takes that responsibility",
      "They cease to be subject to customs control once placed in the shed",
    ],
    correct: 2
  },
  {
    id: 23,
    question: "Which option most directly reflects the Act if asked about this issue: which responsibility belongs most directly to the Commissioner in a Partner State?",
    options: [
      "Management and control of Customs, including collection of and accounting for customs revenue",
      "Promulgating the Treaty",
      "Serving as the final appellate body",
      "Appointing ports by Council Gazette",
    ],
    correct: 0
  },
  {
    id: 24,
    question: "Choose the single best legal answer: which of the following best states the role of the Commissioner in the appeal structure?",
    options: [
      "The Commissioner is the final judicial body",
      "The Commissioner only appoints the Tribunal and never reviews decisions",
      "The Commissioner hears only criminal smuggling trials",
      "The Commissioner is the first review authority before a further appeal goes to the Tax Appeals Tribunal",
    ],
    correct: 3
  },
  {
    id: 25,
    question: "From an exam perspective, which statement is most accurate: which event best marks the legal time of importation of goods?",
    options: [
      "When the goods come within the boundaries of the Partner States",
      "When the consignee removes the goods from the customs area",
      "When the proper officer completes valuation under the Fourth Schedule",
      "When the owner pays warehouse rent",
    ],
    correct: 0
  },
  {
    id: 26,
    question: "Which of the following best states the role of the Commissioner in the appeal structure?",
    options: [
      "The Commissioner is the final judicial body",
      "The Commissioner hears only criminal smuggling trials",
      "The Commissioner only appoints the Tribunal and never reviews decisions",
      "The Commissioner is the first review authority before a further appeal goes to the Tax Appeals Tribunal",
    ],
    correct: 3
  },
  {
    id: 27,
    question: "In a problem question, goods are entered for export but are discharged again within a Partner State instead of completing exportation. Which principle is most directly undermined?",
    options: [
      "The rule that all export goods must first be warehoused",
      "The rule that goods entered for export should not be discharged in a Partner State as though the export procedure could be reversed casually",
      "The rule that duty must always be paid before entry outwards is granted",
      "The rule that all exports must pass through the green channel",
    ],
    correct: 1
  },
  {
    id: 28,
    question: "Which option most directly reflects the Act if asked about this issue: which Schedule contains the declaration of officer?",
    options: [
      "The Sixth Schedule",
      "The Fifth Schedule",
      "The First Schedule",
      "The Second Schedule",
    ],
    correct: 2
  },
  {
    id: 29,
    question: "Choose the single best legal answer: what is a short levy in customs law?",
    options: [
      "A distress warrant after auction",
      "A remission for manufacture",
      "A claim for drawback",
      "A case where duty was undercharged and may be recovered",
    ],
    correct: 3
  },
  {
    id: 30,
    question: "From an exam perspective, which statement is most accurate: which responsibility belongs most directly to the Commissioner in a Partner State?",
    options: [
      "Appointing ports by Council Gazette",
      "Promulgating the Treaty",
      "Management and control of Customs, including collection of and accounting for customs revenue",
      "Serving as the final appellate body",
    ],
    correct: 2
  },
  {
    id: 31,
    question: "What is the basic starting point of warehousing under Part IV?",
    options: [
      "Only seized goods may be warehoused",
      "Dutiable goods may be warehoused",
      "Warehousing applies only to export goods",
      "Only goods in transit may be warehoused",
    ],
    correct: 1
  },
  {
    id: 32,
    question: "In a problem question, which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
      "Exemption and drawback are identical in all legal effects",
      "Exemption is a seizure power, while drawback is a search power",
    ],
    correct: 0
  },
  {
    id: 33,
    question: "Which option most directly reflects the Act if asked about this issue: a person says seizure and forfeiture are the same because both involve losing control of goods. Which response is best?",
    options: [
      "Seizure applies only to documents while forfeiture applies only to vehicles",
      "They are the same and the Act uses the words interchangeably",
      "Forfeiture happens first and seizure only follows after auction",
      "They are related but different: seizure is taking the goods into custody, while forfeiture is the legal loss of the goods under customs law",
    ],
    correct: 3
  },
  {
    id: 34,
    question: "Choose the single best legal answer: which statement best distinguishes exemption from drawback?",
    options: [
      "Exemption means duty is not charged in the first place, while drawback is refund of duty already paid in qualifying circumstances",
      "Exemption applies only to exports, while drawback applies only to passenger baggage",
      "Exemption and drawback are identical in all legal effects",
      "Exemption is a seizure power, while drawback is a search power",
    ],
    correct: 0
  },
  {
    id: 35,
    question: "From an exam perspective, which statement is most accurate: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are prohibited imports in every case",
    ],
    correct: 2
  },
  {
    id: 36,
    question: "Which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
      "The Directorate is a judicial body, while the Commissioner is legislative",
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
    ],
    correct: 1
  },
  {
    id: 37,
    question: "In a problem question, which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are prohibited imports in every case",
    ],
    correct: 2
  },
  {
    id: 38,
    question: "Which option most directly reflects the Act if asked about this issue: what does restoration of seizures mean?",
    options: [
      "Automatic remission of all future duty",
      "Return of seized goods or things in accordance with the Act",
      "A mandatory acquittal in all proceedings",
      "Conversion into warehoused goods by default",
    ],
    correct: 1
  },
  {
    id: 39,
    question: "Choose the single best legal answer: which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate is a judicial body, while the Commissioner is legislative",
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
    ],
    correct: 3
  },
  {
    id: 40,
    question: "From an exam perspective, which statement is most accurate: where are the rules for customs valuation of imported goods liable to ad valorem import duty found?",
    options: [
      "The Fourth Schedule",
      "The Second Schedule",
      "The Sixth Schedule",
      "The Fifth Schedule",
    ],
    correct: 0
  },
  {
    id: 41,
    question: "Which statement best distinguishes the Directorate from the Commissioner?",
    options: [
      "The Directorate is a judicial body, while the Commissioner is legislative",
      "The Directorate handles all seizures personally, while the Commissioner hears all appeals",
      "The Directorate licenses bonded warehouses, while the Commissioner issues the Treaty",
      "The Directorate operates at Community policy-coordination level, while the Commissioner manages Customs and revenue in a Partner State",
    ],
    correct: 3
  },
  {
    id: 42,
    question: "In a problem question, what must a permanently appointed customs officer do upon appointment?",
    options: [
      "Take an oath only before the Directorate",
      "Sign an export bond in the Sixth Schedule",
      "Make and subscribe the declaration in the First Schedule before a magistrate or commissioner for oaths",
      "File a valuation declaration under the Fourth Schedule",
    ],
    correct: 2
  },
  {
    id: 43,
    question: "Which option most directly reflects the Act if asked about this issue: which Schedule is most directly connected to recovery of duty by distress?",
    options: [
      "The Third Schedule",
      "The Sixth Schedule",
      "The First Schedule",
      "The Fourth Schedule",
    ],
    correct: 1
  },
  {
    id: 44,
    question: "Choose the single best legal answer: which pairing is correct under the Act?",
    options: [
      "The Council appoints ports, while the Commissioner appoints customs areas and related operational places",
      "The Directorate appoints ports, while the Tribunal appoints customs areas",
      "The Commissioner appoints ports, while the Council appoints customs areas",
      "The warehouse keeper appoints ports, while the proper officer appoints customs airports",
    ],
    correct: 0
  },
  {
    id: 45,
    question: "From an exam perspective, which statement is most accurate: what does restoration of seizures mean?",
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
    question: "What is the legal effect of section 201?",
    options: [
      "Only warehouse rent remains payable",
      "All duty is automatically waived after conviction",
      "Duty may remain payable in addition to any fine imposed for the offence",
      "Payment of duty replaces every fine",
    ],
    correct: 2
  },
  {
    id: 47,
    question: "In a problem question, what must a permanently appointed customs officer do upon appointment?",
    options: [
      "Sign an export bond in the Sixth Schedule",
      "Take an oath only before the Directorate",
      "File a valuation declaration under the Fourth Schedule",
      "Make and subscribe the declaration in the First Schedule before a magistrate or commissioner for oaths",
    ],
    correct: 3
  },
  {
    id: 48,
    question: "Which option most directly reflects the Act if asked about this issue: which statement best explains why unlawfully taking warehoused goods is serious?",
    options: [
      "Because warehoused goods remain under customs control and revenue may still be at stake",
      "Because warehoused goods are outside the Act once stored",
      "Because warehoused goods automatically become diplomatic goods",
      "Because warehoused goods are prohibited imports in every case",
    ],
    correct: 0
  },
  {
    id: 49,
    question: "Choose the single best legal answer: where is the exemptions regime set out?",
    options: [
      "The First Schedule",
      "The Fifth Schedule",
      "The Sixth Schedule",
      "The Third Schedule",
    ],
    correct: 1
  },
  {
    id: 50,
    question: "From an exam perspective, which statement is most accurate: which repeated legal threshold appears across many search powers under the Act?",
    options: [
      "Written consent of the owner",
      "Final conviction by a subordinate court",
      "Approval of the Customs Co-operation Council",
      "Reasonable grounds to believe",
    ],
    correct: 3
  },
];
