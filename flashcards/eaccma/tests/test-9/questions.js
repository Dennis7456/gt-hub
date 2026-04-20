const QUESTIONS = [
  {
    id: 1,
    question: "Which option best answers the question: what is the key difference between valuation and rate of duty?",
    options: [
      "Valuation determines customs value; the rate determines how duty is applied to that value or other measure",
      "They are the same legal concept",
      "Valuation applies only to exports",
      "Rate of duty replaces valuation",
    ],
    correct: 0
  },
  {
    id: 2,
    question: "Select the best definition of the key difference between valuation and rate of duty.",
    options: [
      "They are the same legal concept",
      "Rate of duty replaces valuation",
      "Valuation applies only to exports",
      "Valuation determines customs value; the rate determines how duty is applied to that value or other measure",
    ],
    correct: 3
  },
  {
    id: 3,
    question: "Select the best definition of condemnation in customs law.",
    options: [
      "A border route appointment",
      "The formal legal process by which seized goods or things are declared forfeited",
      "A type of drawback",
      "An import declaration",
    ],
    correct: 1
  },
  {
    id: 4,
    question: "Which option best answers the question: what is a short levy?",
    options: [
      "A form of remission",
      "A valuation based on gross weight",
      "A case where duty was undercharged and Customs may recover the unpaid amount",
      "A reduction in passenger allowance",
    ],
    correct: 2
  },
  {
    id: 5,
    question: "Select the best definition of the main difference between review and appeal under the act.",
    options: [
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
      "Review is judicial and appeal is administrative",
      "There is no difference",
      "Appeal comes before review",
    ],
    correct: 0
  },
  {
    id: 6,
    question: "Which of the following is the best answer to this EACCMA question: What happens if a person or goods enter or leave a customs area except through an appointed entrance or exit?",
    options: [
      "Only warehouse rent becomes payable",
      "Nothing if duty is later paid",
      "The customs area appointment lapses",
      "An offence is committed and the goods may be forfeited",
    ],
    correct: 3
  },
  {
    id: 7,
    question: "In exam revision, which statement is most accurate? What happens if a person or goods enter or leave a customs area except through an appointed entrance or exit?",
    options: [
      "Only warehouse rent becomes payable",
      "Nothing if duty is later paid",
      "An offence is committed and the goods may be forfeited",
      "The customs area appointment lapses",
    ],
    correct: 2
  },
  {
    id: 8,
    question: "Which of the following is the best answer to this EACCMA question: What legal threshold commonly justifies searches under Part XII?",
    options: [
      "Consent of the owner only",
      "Reasonable grounds to believe",
      "Proof beyond all doubt",
      "Prior Tribunal authorization",
    ],
    correct: 1
  },
  {
    id: 9,
    question: "Which of the following is the best answer to this EACCMA question: What must a wharf owner provide to the satisfaction of the Commissioner?",
    options: [
      "Suitable office accommodation for officers and shed accommodation for goods",
      "Only parking for customs vehicles",
      "Only a customs flag",
      "Only rail access",
    ],
    correct: 0
  },
  {
    id: 10,
    question: "Which option best answers the question: what is an erroneous refund?",
    options: [
      "A temporary import bond",
      "A failure to warehouse goods",
      "A lawful drawback claim",
      "A case where duty was wrongly refunded and Customs may recover it",
    ],
    correct: 3
  },
  {
    id: 11,
    question: "In exam revision, which statement is most accurate? Why are export goods not to be discharged in Partner States after entry for export?",
    options: [
      "To classify them as passenger baggage",
      "To exempt them from export duty",
      "To preserve integrity of the export procedure and prevent diversion",
      "To convert them into transit goods automatically",
    ],
    correct: 2
  },
  {
    id: 12,
    question: "Choose the best answer: Who may require a bond before goods are warehoused?",
    options: [
      "The warehouse keeper",
      "The proper officer",
      "The Tribunal",
      "The Post Office",
    ],
    correct: 1
  },
  {
    id: 13,
    question: "Select the best definition of the main purpose of licensing customs agents.",
    options: [
      "To transfer customs revenue to agents",
      "To appoint ports",
      "To regulate who may act for owners in customs dealings",
      "To create exemptions",
    ],
    correct: 2
  },
  {
    id: 14,
    question: "Select the best definition of an erroneous refund.",
    options: [
      "A failure to warehouse goods",
      "A lawful drawback claim",
      "A temporary import bond",
      "A case where duty was wrongly refunded and Customs may recover it",
    ],
    correct: 3
  },
  {
    id: 15,
    question: "Select the best definition of a key distinction between a government warehouse and a bonded warehouse.",
    options: [
      "Bonded warehouses are only for postal articles",
      "A Government warehouse is government-provided and approved; a bonded warehouse is licensed and operated by a warehouse keeper",
      "Government warehouses are only for exports",
      "There is no distinction",
    ],
    correct: 1
  },
  {
    id: 16,
    question: "Which of the following is the best answer to this EACCMA question: How far back may the proper officer require books and documents under section 159?",
    options: [
      "Up to five years immediately preceding the demand",
      "Ten years only",
      "No time limit is mentioned",
      "One year only",
    ],
    correct: 0
  },
  {
    id: 17,
    question: "Why is section 159 especially important after seizure?",
    options: [
      "It grants exemptions",
      "It automatically restores the goods",
      "It ends all prosecutions",
      "It allows compulsory production of records relevant to seized goods or related dealings",
    ],
    correct: 3
  },
  {
    id: 18,
    question: "In exam revision, which statement is most accurate? What does restoration of seizures mean?",
    options: [
      "Duty is cancelled automatically",
      "The goods become prohibited",
      "Seized goods or things may be returned in accordance with the Act",
      "The seizure converts into warehousing",
    ],
    correct: 2
  },
  {
    id: 19,
    question: "Select the best definition of the main role of entry outwards.",
    options: [
      "It is the outward customs authorization linked to lawful loading and departure of the craft",
      "It is a valuation certificate",
      "It is a warehouse licence",
      "It is an import report",
    ],
    correct: 0
  },
  {
    id: 20,
    question: "Which option best answers the question: can a person board a vessel before the proper officer without permission?",
    options: [
      "Yes, if the vessel is small",
      "No, except for specified public officers such as the port pilot or health officer",
      "Yes, if the person is an importer",
      "Yes, if goods are restricted",
    ],
    correct: 1
  },
  {
    id: 21,
    question: "Which of the following is the best answer to this EACCMA question: What does restoration of seizures mean?",
    options: [
      "Duty is cancelled automatically",
      "The seizure converts into warehousing",
      "The goods become prohibited",
      "Seized goods or things may be returned in accordance with the Act",
    ],
    correct: 3
  },
  {
    id: 22,
    question: "Which of the following is the best answer to this EACCMA question: What does allowance for tare relate to?",
    options: [
      "A search power",
      "A warehouse penalty",
      "Deduction for the weight of packaging or container in appropriate cases",
      "A tariff preference under COMESA",
    ],
    correct: 2
  },
  {
    id: 23,
    question: "In exam revision, which statement is most accurate? Can warehoused goods be delivered as stores?",
    options: [
      "Only if passenger baggage",
      "Yes, as provided by the Act",
      "No, never",
      "Only after condemnation",
    ],
    correct: 1
  },
  {
    id: 24,
    question: "Which of the following is the best answer to this EACCMA question: How are imported or exported goods through a pipeline controlled?",
    options: [
      "Their nature and quantities must be recorded and reported as directed by the Commissioner",
      "They are treated as postal articles",
      "They are exempt from reporting",
      "They are controlled only by the operator's internal policy",
    ],
    correct: 0
  },
  {
    id: 25,
    question: "In exam revision, which statement is most accurate? What is the main difference between review and appeal under the Act?",
    options: [
      "Appeal comes before review",
      "Review is judicial and appeal is administrative",
      "Review is before the Commissioner, while appeal is to the Tax Appeals Tribunal",
      "There is no difference",
    ],
    correct: 2
  },
  {
    id: 26,
    question: "In exam revision, which statement is most accurate? How are imported or exported goods through a pipeline controlled?",
    options: [
      "They are controlled only by the operator's internal policy",
      "Their nature and quantities must be recorded and reported as directed by the Commissioner",
      "They are exempt from reporting",
      "They are treated as postal articles",
    ],
    correct: 1
  },
  {
    id: 27,
    question: "In exam revision, which statement is most accurate? What must a wharf owner provide to the satisfaction of the Commissioner?",
    options: [
      "Only rail access",
      "Only parking for customs vehicles",
      "Only a customs flag",
      "Suitable office accommodation for officers and shed accommodation for goods",
    ],
    correct: 3
  },
  {
    id: 28,
    question: "Which of the following is the best answer to this EACCMA question: May an officer open a compartment in a searched vehicle by force if access is denied?",
    options: [
      "Yes, in such manner including force as deemed necessary",
      "Only if the Council approves",
      "Only after appeal to the Tribunal",
      "No, force is never permitted",
    ],
    correct: 0
  },
  {
    id: 29,
    question: "A candidate is asked: what is the main purpose of recovery of duty by distress? Which answer is correct?",
    options: [
      "Passenger examination",
      "Enforcement and collection of unpaid duty",
      "Port appointment",
      "Origin certification",
    ],
    correct: 1
  },
  {
    id: 30,
    question: "Select the best definition of the purpose of anti-dumping duty.",
    options: [
      "To counter unfairly low-priced imports that injure domestic industry",
      "To reward exporters",
      "To regulate baggage",
      "To recover warehouse rent",
    ],
    correct: 0
  },
  {
    id: 31,
    question: "What is the key idea behind owner liability for acts of a duly authorised agent?",
    options: [
      "Only agents can ever be liable",
      "Only the Commissioner becomes liable",
      "Agency always eliminates owner liability",
      "The owner's customs responsibility may continue even where an authorised agent acts on the owner's behalf",
    ],
    correct: 3
  },
  {
    id: 32,
    question: "Select the best definition of the purpose of examining warehoused goods on delivery.",
    options: [
      "To determine whether a search warrant is needed",
      "To assign passenger channels",
      "To confirm identity, condition, and compliance before they leave warehouse control",
      "To appoint a new warehouse keeper",
    ],
    correct: 2
  },
  {
    id: 33,
    question: "In exam revision, which statement is most accurate? Why are Customs seals protected by criminal sanction?",
    options: [
      "They are decorative only",
      "They preserve integrity of customs control over goods or conveyances",
      "They determine tariff rates",
      "They replace entry documents",
    ],
    correct: 1
  },
  {
    id: 34,
    question: "Which option best answers the question: what is the broad purpose of section 119 on duty-free imports?",
    options: [
      "To grant all importers a rebate",
      "To classify goods as stores",
      "To make goods imported duty free liable to duty if disposed of contrary to exemption conditions",
      "To abolish import duty",
    ],
    correct: 2
  },
  {
    id: 35,
    question: "A candidate is asked: what is the main purpose of licensing customs agents? Which answer is correct?",
    options: [
      "To regulate who may act for owners in customs dealings",
      "To appoint ports",
      "To transfer customs revenue to agents",
      "To create exemptions",
    ],
    correct: 0
  },
  {
    id: 36,
    question: "Select the best definition of the main purpose of recovery of duty by distress.",
    options: [
      "Port appointment",
      "Passenger examination",
      "Origin certification",
      "Enforcement and collection of unpaid duty",
    ],
    correct: 3
  },
  {
    id: 37,
    question: "Select the best definition of the main difference between transit and transhipment.",
    options: [
      "Transit moves through territory to a foreign destination; transhipment transfers from one arriving craft to another departing craft",
      "There is no legal difference",
      "Transit is warehousing and transhipment is export duty",
      "Transit is passenger clearance and transhipment is appeal",
    ],
    correct: 0
  },
  {
    id: 38,
    question: "A candidate is asked: may an officer open a compartment in a searched vehicle by force if access is denied? Which answer is correct?",
    options: [
      "Only after appeal to the Tribunal",
      "No, force is never permitted",
      "Only if the Council approves",
      "Yes, in such manner including force as deemed necessary",
    ],
    correct: 3
  },
  {
    id: 39,
    question: "In exam revision, which statement is most accurate? How far back may the proper officer require books and documents under section 159?",
    options: [
      "No time limit is mentioned",
      "Up to five years immediately preceding the demand",
      "One year only",
      "Ten years only",
    ],
    correct: 1
  },
  {
    id: 40,
    question: "A candidate is asked: why may warehoused goods be moved from one warehouse to another only under customs control? Which answer is correct?",
    options: [
      "Because goods lose owner identity in a warehouse",
      "Because only government warehouses can store dutiable goods",
      "Because revenue and custody of the goods must be protected throughout the movement",
      "Because transfer is the same as transit",
    ],
    correct: 2
  },
  {
    id: 41,
    question: "A candidate is asked: can goods subject to customs control be abandoned to customs? Which answer is correct?",
    options: [
      "Yes, but only after Tribunal approval",
      "Yes, automatically on arrival",
      "No, never",
      "Yes, with permission of the Commissioner",
    ],
    correct: 3
  },
  {
    id: 42,
    question: "Which statement correctly reflects the Act: can imported goods be unloaded before being duly entered?",
    options: [
      "Yes, if the goods are perishable",
      "No, unless the proper officer gives written permission subject to conditions",
      "Yes, at any sufferance wharf",
      "Yes, if the owner is present",
    ],
    correct: 1
  },
  {
    id: 43,
    question: "Which option best answers the question: what happens if goods remain unentered after the allowed period?",
    options: [
      "They may be removed by or at the expense of the agent to a Customs warehouse",
      "They are automatically sold",
      "They become stores",
      "They become duty free",
    ],
    correct: 0
  },
  {
    id: 44,
    question: "A candidate is asked: can imported goods be unloaded before being duly entered? Which answer is correct?",
    options: [
      "Yes, if the owner is present",
      "Yes, at any sufferance wharf",
      "No, unless the proper officer gives written permission subject to conditions",
      "Yes, if the goods are perishable",
    ],
    correct: 2
  },
  {
    id: 45,
    question: "Which option best answers the question: what is the significance of section 61 on unlawfully taking warehoused goods?",
    options: [
      "It penalizes unlawful taking or interference because warehoused goods remain under customs control",
      "It concerns only transit sheds",
      "It creates drawback claims",
      "It abolishes all warehousing",
    ],
    correct: 0
  },
  {
    id: 46,
    question: "Which statement correctly reflects the Act: can duty still be payable even after conviction and a fine?",
    options: [
      "Only in export cases",
      "Only if the owner appeals",
      "Yes, duty may be payable in addition to the fine",
      "No, the fine always replaces duty",
    ],
    correct: 2
  },
  {
    id: 47,
    question: "A candidate is asked: why are transit and transhipment included within part v? Which answer is correct?",
    options: [
      "Because all transit goods are home-consumption goods",
      "Because exportation excludes foreign goods",
      "Because Part V only concerns baggage",
      "Because outward movement under customs control includes more than ordinary local exports",
    ],
    correct: 3
  },
  {
    id: 48,
    question: "Which option best answers the question: what is the key idea behind owner liability for acts of a duly authorised agent?",
    options: [
      "Only agents can ever be liable",
      "The owner's customs responsibility may continue even where an authorised agent acts on the owner's behalf",
      "Agency always eliminates owner liability",
      "Only the Commissioner becomes liable",
    ],
    correct: 1
  },
  {
    id: 49,
    question: "A candidate is asked: why is personal baggage separately treated in export procedure? Which answer is correct?",
    options: [
      "Because only imports involve baggage",
      "Because baggage is never under customs control",
      "Because passenger-carried goods require customs treatment distinct from ordinary cargo",
      "Because baggage is always stores",
    ],
    correct: 2
  },
  {
    id: 50,
    question: "Select the best definition of the key idea behind owner liability for acts of a duly authorised agent.",
    options: [
      "Only agents can ever be liable",
      "Only the Commissioner becomes liable",
      "Agency always eliminates owner liability",
      "The owner's customs responsibility may continue even where an authorised agent acts on the owner's behalf",
    ],
    correct: 3
  },
];
