const QUESTIONS = [
  {
    id: 1,
    question: "Which option best reflects the presentation? Which broader themes are associated with Smart Customs of the future?",
    options: ["Replacement of customs with only private stakeholders", "Green customs, strategic trade control, integrity, international cooperation, information sharing, and capacity building", "End of all border laws, abolition of technology, and no training", "Exclusive focus on monarchy tribute systems"],
    correct: 1,
    explanation: "These themes are listed under Smart Customs."
  },
  {
    id: 2,
    question: "In revision, which statement is accurate? When did the convention establishing the Customs Cooperation Council enter into force?",
    options: ["On 4 November 1952", "On 15 December 1950", "On 26 January 1953", "In 1994"],
    correct: 0,
    explanation: "The development slide provides 4 November 1952."
  },
  {
    id: 3,
    question: "Where was the first interior Customs office regulating trade along the US-Canada border established according to the presentation?",
    options: ["At Massachusetts in 1767", "At Cape Coast in 1839", "At St. Jean, Quebec, in 1788", "At Ottawa in 1868"],
    correct: 2,
    explanation: "The North America slide identifies St. Jean, Quebec in 1788."
  },
  {
    id: 4,
    question: "Which option best reflects the presentation? What is the governing body of the WCO?",
    options: ["The Secretary General alone", "The East African Legislative Assembly", "The Secretariat", "The Council"],
    correct: 3,
    explanation: "The WCO Council is the governing body."
  },
  {
    id: 5,
    question: "In revision, which statement is accurate? Which additional factor contributed to the collapse of the EAC?",
    options: ["Too much private sector participation", "Continued disproportionate sharing of Community benefits among Partner States", "Excessive use of the green channel", "Overuse of non-intrusive inspection"],
    correct: 1,
    explanation: "The presentation says disproportionate benefit sharing contributed to collapse."
  },
  {
    id: 6,
    question: "Which WCO objective focuses on revenue?",
    options: ["To promote fair, efficient, and effective revenue collection", "To end all import and export restrictions", "To abolish all tariff barriers permanently", "To replace customs officers with private auditors"],
    correct: 0,
    explanation: "The presentation calls this the revenue package."
  },
  {
    id: 7,
    question: "Which option best reflects the presentation? Which revenue-related role of Customs is highlighted?",
    options: ["Only negotiating foreign treaties", "Only running civil courts", "Collection of taxes", "Only licensing private ports"],
    correct: 2,
    explanation: "Collection of taxes is one of the listed roles of Customs."
  },
  {
    id: 8,
    question: "In revision, which statement is accurate? Which WCO objective focuses on organizational development?",
    options: ["To prohibit all international trade", "To centralize all customs under one country", "To remove the need for customs laws", "To strengthen capacity building for effective and efficient customs administrations"],
    correct: 3,
    explanation: "The slides describe capacity building as the organizational development package."
  },
  {
    id: 9,
    question: "When did Tanganyika join the Common Customs Administration?",
    options: ["In 1917", "In 1927", "In 1984", "In 1967"],
    correct: 1,
    explanation: "The East Africa timeline gives 1927."
  },
  {
    id: 10,
    question: "Scenario variant: A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["Modern Customs has abandoned all revenue roles", "Modern Customs now focuses only on physical barriers", "Modern Customs operates without documents or systems", "There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control"],
    correct: 3,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 11,
    question: "In revision, which statement is accurate? When was the Department of Customs established in Ghana according to the presentation?",
    options: ["In 1897", "In 1947", "In 1839", "In 1967"],
    correct: 2,
    explanation: "The Africa slide gives 1839."
  },
  {
    id: 12,
    question: "Which activity is part of customs assessment and collection of taxes on imported goods?",
    options: ["Valuation of goods", "Replacing the HS nomenclature", "Drafting national constitutions", "Judging all commercial disputes"],
    correct: 0,
    explanation: "The assessment and collection slide lists valuation as one of the steps."
  },
  {
    id: 13,
    question: "Which option best reflects the presentation? Which set correctly reflects customs tax collection activities in the presentation?",
    options: ["Auction, mediation, court sentencing, and political negotiation", "Only valuation and warehouse rent collection", "Only import licensing and police patrols", "Valuation, verification of trading documents, classification, computation of taxes, checking declarations, and monitoring exemptions"],
    correct: 3,
    explanation: "These six items are listed on the tax collection slide."
  },
  {
    id: 14,
    question: "In revision, which statement is accurate? Which EACCMA sections are linked to customs entry in the presentation?",
    options: ["Sections 156 and 159", "Sections 34, 73, and 94", "Sections 120 and 130", "Sections 11 and 12"],
    correct: 1,
    explanation: "The customs declaration slide identifies sections 34, 73, and 94."
  },
  {
    id: 15,
    question: "A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["Modern Customs has abandoned all revenue roles", "Modern Customs operates without documents or systems", "There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control", "Modern Customs now focuses only on physical barriers"],
    correct: 2,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 16,
    question: "Which option best reflects the presentation? What is a non-tariff barrier according to the presentation?",
    options: ["A condition or restriction imposed to regulate trade without being a direct tax", "A customs officer declaration", "A customs duty computed on gross weight", "A court-issued warrant of distress"],
    correct: 0,
    explanation: "The presentation distinguishes non-tariff barriers from tariff barriers."
  },
  {
    id: 17,
    question: "Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Collection of statistics only", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards", "Common administration of transport only", "Only exchange rate control policy"],
    correct: 1,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 18,
    question: "What is a non-tariff barrier according to the presentation?",
    options: ["A condition or restriction imposed to regulate trade without being a direct tax", "A court-issued warrant of distress", "A customs officer declaration", "A customs duty computed on gross weight"],
    correct: 0,
    explanation: "The presentation distinguishes non-tariff barriers from tariff barriers."
  },
  {
    id: 19,
    question: "Which option best reflects the presentation? What is customs control according to the presentation?",
    options: ["The process of collecting only direct taxes on income", "A system used only for customs statistics", "Measures put in place to ensure compliance with customs laws and regulate movement of resources from, into, and within a country", "The abolition of all border procedures"],
    correct: 2,
    explanation: "This is the definition given on the customs control slide."
  },
  {
    id: 20,
    question: "Scenario variant: A customs authority deploys drones, smart gates, smart seals, AI, and data analytics to reduce clearance time while improving control. Which slide theme does this illustrate most directly?",
    options: ["Old customs entry gates only", "Traditional monarchy taxation", "Only derivation-based revenue allocation", "Smart Customs of the future"],
    correct: 3,
    explanation: "These technologies are specifically listed under Smart Customs."
  },
  {
    id: 21,
    question: "What are customs barriers according to the slides?",
    options: ["Only tunnels and trenches without legal rules", "Only import licences issued by private traders", "Physical or non-physical structures employed to regulate movement of resources", "Only judicial orders from tribunals"],
    correct: 2,
    explanation: "The slides say customs authorities employ physical or non-physical structures called customs barriers."
  },
  {
    id: 22,
    question: "Which option best reflects the presentation? When did the convention establishing the Customs Cooperation Council enter into force?",
    options: ["In 1994", "On 15 December 1950", "On 26 January 1953", "On 4 November 1952"],
    correct: 3,
    explanation: "The development slide provides 4 November 1952."
  },
  {
    id: 23,
    question: "In revision, which statement is accurate? When did the convention establishing the Customs Cooperation Council enter into force?",
    options: ["In 1994", "On 4 November 1952", "On 26 January 1953", "On 15 December 1950"],
    correct: 1,
    explanation: "The development slide provides 4 November 1952."
  },
  {
    id: 24,
    question: "Which EACCMA schedule covers prohibited and restricted imports?",
    options: ["The 2nd Schedule", "The 6th Schedule", "The 1st Schedule", "The 4th Schedule"],
    correct: 0,
    explanation: "The schedules list identifies the 2nd Schedule as prohibited and restricted imports."
  },
  {
    id: 25,
    question: "Which option best reflects the presentation? What intellectual property role of Customs is specifically mentioned?",
    options: ["Licensing trademarks directly", "Enforcing intellectual property rights", "Granting patents to inventors", "Writing copyright legislation"],
    correct: 1,
    explanation: "The roles slide explicitly mentions enforcing IPR."
  },
  {
    id: 26,
    question: "In revision, which statement is accurate? Which WTO-related technical areas does the WCO administer according to the slides?",
    options: ["Civil aviation and railway scheduling", "Only criminal prosecutions at ports", "Customs Valuation and Rules of Origin", "Income tax and excise budgeting"],
    correct: 2,
    explanation: "The presentation names valuation and rules of origin."
  },
  {
    id: 27,
    question: "Which customs revenue issue contributed to the collapse of the EAC according to the presentation?",
    options: ["Failure to create the WTO", "Adoption of smart seals and drones", "Use of baggage halls and transit sheds", "Allocation of customs revenue among members on the basis of derivation by country of ultimate destination"],
    correct: 3,
    explanation: "The EAC collapse slide specifically mentions derivation-based allocation."
  },
  {
    id: 28,
    question: "Which option best reflects the presentation? When was a Customs Union between Kenya and Uganda formed under colonial rule?",
    options: ["In 1917", "In 1967", "In 1927", "In 1923"],
    correct: 0,
    explanation: "The East Africa historical foundation slide states 1917."
  },
  {
    id: 29,
    question: "In revision, which statement is accurate? Which EACCMA section is linked to goods under customs control in the presentation?",
    options: ["Section 229", "Section 2", "Section 34", "Section 16"],
    correct: 3,
    explanation: "The goods under customs control slide refers to section 16."
  },
  {
    id: 30,
    question: "Which enforcement powers are referenced on the anti-smuggling slide?",
    options: ["Only issuing tax refunds and rebates", "Only setting exchange rates", "Questioning persons entering or leaving a partner state and enforcing power to arrest under sections 156 and 7", "Only granting exemptions under the Fifth Schedule"],
    correct: 2,
    explanation: "The anti-smuggling slide specifically mentions questioning and arrest powers."
  },
  {
    id: 31,
    question: "Which option best reflects the presentation? Where was the first interior Customs office regulating trade along the US-Canada border established according to the presentation?",
    options: ["At Cape Coast in 1839", "At St. Jean, Quebec, in 1788", "At Ottawa in 1868", "At Massachusetts in 1767"],
    correct: 1,
    explanation: "The North America slide identifies St. Jean, Quebec in 1788."
  },
  {
    id: 32,
    question: "In revision, which statement is accurate? Which WCO objective focuses on revenue?",
    options: ["To promote fair, efficient, and effective revenue collection", "To end all import and export restrictions", "To replace customs officers with private auditors", "To abolish all tariff barriers permanently"],
    correct: 0,
    explanation: "The presentation calls this the revenue package."
  },
  {
    id: 33,
    question: "A trader asks why a regional customs union would prefer a single collection point for import duty. Which answer best reflects the East African customs features in the presentation?",
    options: ["Because it eliminates all need for customs law", "Because it replaces the need for any border control", "Because a single collection point supports a common customs territory and simplifies movement within the union", "Because it guarantees no disputes over benefit sharing"],
    correct: 2,
    explanation: "The East African customs features slide links single collection center to the regional customs arrangement."
  },
  {
    id: 34,
    question: "Which option best reflects the presentation? Which is one basic control tool used by Customs according to the presentation?",
    options: ["Appointment and gazettement of entry and exit points such as seaports, airports, and border stations", "Removal of all mandatory declarations", "Abolition of customs areas", "Ending control of conveyances"],
    correct: 0,
    explanation: "The basic control tools slide lists appointment and gazettement of entry and exit points."
  },
  {
    id: 35,
    question: "Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Collection of statistics only", "Only exchange rate control policy", "Common administration of transport only", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards"],
    correct: 3,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 36,
    question: "What is the stated rule on unloading before an inward report for imports?",
    options: ["Only bonded goods may be unloaded before report without permission", "There should be no unloading before the report except with permission of Customs", "Unloading is always allowed before any report", "Only aircraft must wait for reporting, not vessels"],
    correct: 1,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 37,
    question: "Which option best reflects the presentation? Which EACCMA schedule covers valuation of imported goods?",
    options: ["The 2nd Schedule", "The 5th Schedule", "The 4th Schedule", "The 6th Schedule"],
    correct: 2,
    explanation: "The schedules list identifies the Fourth Schedule as valuation of imported goods."
  },
  {
    id: 38,
    question: "In revision, which statement is accurate? When was a Customs Union between Kenya and Uganda formed under colonial rule?",
    options: ["In 1927", "In 1917", "In 1967", "In 1923"],
    correct: 1,
    explanation: "The East Africa historical foundation slide states 1917."
  },
  {
    id: 39,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Facilitation of legitimate trade", "Only historical tribute collection", "Only derivation-based revenue sharing", "Only criminal punishment of smugglers"],
    correct: 0,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 40,
    question: "Which option best reflects the presentation? Which of the following is listed as a customs area or control point in the presentation?",
    options: ["Private residences by default", "Company boardrooms", "Parliamentary chambers", "Baggage halls"],
    correct: 3,
    explanation: "Baggage halls are expressly listed among customs areas/control points."
  },
  {
    id: 41,
    question: "In revision, which statement is accurate? Which issue is specifically included under Customs protection of society and industry?",
    options: ["Only warehouse rent disputes", "Counterfeits and contrabands", "Only school curriculum reform", "Only internal municipal licensing"],
    correct: 1,
    explanation: "Counterfeits and contrabands appear on the protection slide."
  },
  {
    id: 42,
    question: "When did international cooperation in customs matters begin under the League of Nations according to the slides?",
    options: ["In 1924", "In 1948", "In 1994", "In 1890"],
    correct: 0,
    explanation: "The development slide says cooperation began under the League of Nations in 1924."
  },
  {
    id: 43,
    question: "Which option best reflects the presentation? What is the stated rule on unloading before an inward report for imports?",
    options: ["Only bonded goods may be unloaded before report without permission", "Only aircraft must wait for reporting, not vessels", "Unloading is always allowed before any report", "There should be no unloading before the report except with permission of Customs"],
    correct: 3,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 44,
    question: "In revision, which statement is accurate? Which is one disadvantage of customs barriers listed in the presentation?",
    options: ["Permanent elimination of inefficiency", "Guaranteed equality of trade benefits", "Increase in the cost of transactions", "Automatic rise in investment opportunities"],
    correct: 2,
    explanation: "The cons of barriers slide lists increased transaction costs."
  },
  {
    id: 45,
    question: "Which issue is specifically included under Customs protection of society and industry?",
    options: ["Only internal municipal licensing", "Counterfeits and contrabands", "Only school curriculum reform", "Only warehouse rent disputes"],
    correct: 1,
    explanation: "Counterfeits and contrabands appear on the protection slide."
  },
  {
    id: 46,
    question: "Which option best reflects the presentation? Where was the first interior Customs office regulating trade along the US-Canada border established according to the presentation?",
    options: ["At Cape Coast in 1839", "At Massachusetts in 1767", "At Ottawa in 1868", "At St. Jean, Quebec, in 1788"],
    correct: 3,
    explanation: "The North America slide identifies St. Jean, Quebec in 1788."
  },
  {
    id: 47,
    question: "In revision, which statement is accurate? By 1900, what scale had the Chinese customs system reached according to the presentation?",
    options: ["151 staff in a single secretariat in Brussels", "63 customs ports only on the US-Canada border", "About 20,000 people working in 40 main custom houses across China in a unified tax system", "A three-country customs union with common currency"],
    correct: 2,
    explanation: "The Asia slide states this scale for the Chinese system."
  },
  {
    id: 48,
    question: "How did taxation begin in early communities according to the presentation?",
    options: ["Members of communities gave their chiefs or leaders gifts in return for leadership", "Only priests collected customs tariffs at temples", "Kings imposed VAT on all goods at the seaport", "Merchants created a customs union before rulers intervened"],
    correct: 0,
    explanation: "The slides explain taxation began with gifts to chiefs or leaders."
  },
  {
    id: 49,
    question: "Which option best reflects the presentation? Which issue is specifically included under Customs protection of society and industry?",
    options: ["Only school curriculum reform", "Only warehouse rent disputes", "Counterfeits and contrabands", "Only internal municipal licensing"],
    correct: 2,
    explanation: "Counterfeits and contrabands appear on the protection slide."
  },
  {
    id: 50,
    question: "In revision, which statement is accurate? Which is a key feature of East African customs mentioned in the presentation?",
    options: ["No role for customs statistics", "Single collection center of import duty at the point of entry", "Mandatory abolition of all border stations", "No movement of goods within East Africa"],
    correct: 1,
    explanation: "The features slide lists single collection center at the point of entry."
  },
];
