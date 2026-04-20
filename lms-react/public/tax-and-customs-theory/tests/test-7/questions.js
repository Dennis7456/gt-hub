const QUESTIONS = [
  {
    id: 1,
    question: "In revision, which statement is accurate? What is one of the stated objectives of the Tax and Customs Theory course?",
    options: ["To focus exclusively on East African ports and airports", "To train only on tariff computation and valuation schedules", "To define Customs, explain the historical evolution of Customs, explain the evolution of modern Customs administrations, and discuss future roles of Customs administrations", "To replace all customs laws with administrative practice"],
    correct: 2,
    explanation: "The objectives slide lists these four broad outcomes."
  },
  {
    id: 2,
    question: "What is the World Customs Organization according to the presentation?",
    options: ["An independent intergovernmental body whose mission is to improve the administration of Customs, headquartered in Brussels", "A private trade association for brokers", "A regional customs court for East Africa", "A department of the WTO"],
    correct: 0,
    explanation: "The WCO slide defines it as an independent intergovernmental body."
  },
  {
    id: 3,
    question: "Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Collection of statistics only", "Only exchange rate control policy", "Common administration of transport only", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards"],
    correct: 3,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 4,
    question: "In revision, which statement is accurate? What was created in Ghana in 1897 to strengthen customs enforcement?",
    options: ["The World Customs Organization", "The Customs Preventive Service, a semi-military outfit", "The EAC Customs Union", "The Common External Tariff"],
    correct: 1,
    explanation: "The Ghana slide notes the creation of the Customs Preventive Service in 1897."
  },
  {
    id: 5,
    question: "When did international cooperation in customs matters begin under the League of Nations according to the slides?",
    options: ["In 1890", "In 1994", "In 1948", "In 1924"],
    correct: 3,
    explanation: "The development slide says cooperation began under the League of Nations in 1924."
  },
  {
    id: 6,
    question: "Which option best reflects the presentation? Which is a key feature of East African customs mentioned in the presentation?",
    options: ["No role for customs statistics", "No movement of goods within East Africa", "Single collection center of import duty at the point of entry", "Mandatory abolition of all border stations"],
    correct: 2,
    explanation: "The features slide lists single collection center at the point of entry."
  },
  {
    id: 7,
    question: "In revision, which statement is accurate? Which broader themes are associated with Smart Customs of the future?",
    options: ["End of all border laws, abolition of technology, and no training", "Green customs, strategic trade control, integrity, international cooperation, information sharing, and capacity building", "Replacement of customs with only private stakeholders", "Exclusive focus on monarchy tribute systems"],
    correct: 1,
    explanation: "These themes are listed under Smart Customs."
  },
  {
    id: 8,
    question: "What are customs barriers according to the slides?",
    options: ["Physical or non-physical structures employed to regulate movement of resources", "Only tunnels and trenches without legal rules", "Only import licences issued by private traders", "Only judicial orders from tribunals"],
    correct: 0,
    explanation: "The slides say customs authorities employ physical or non-physical structures called customs barriers."
  },
  {
    id: 9,
    question: "Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Common administration of transport only", "Collection of statistics only", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards", "Only exchange rate control policy"],
    correct: 2,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 10,
    question: "In revision, which statement is accurate? Which is one basic control tool used by Customs according to the presentation?",
    options: ["Appointment and gazettement of entry and exit points such as seaports, airports, and border stations", "Ending control of conveyances", "Removal of all mandatory declarations", "Abolition of customs areas"],
    correct: 0,
    explanation: "The basic control tools slide lists appointment and gazettement of entry and exit points."
  },
  {
    id: 11,
    question: "A customs administration speeds up low-risk trade flows while still checking prohibited goods, collecting taxes, and protecting society. Which idea from the presentation best explains this balance?",
    options: ["Customs exists only to run courts and not borders", "Modern Customs should eliminate all restrictions and taxes at once", "Customs should only collect trade statistics and avoid control functions", "Modern Customs combines trade facilitation, revenue collection, and protection of society rather than focusing on only one role"],
    correct: 3,
    explanation: "The presentation repeatedly presents Customs as a balance of facilitation, revenue, enforcement, and protection."
  },
  {
    id: 12,
    question: "Which option best reflects the presentation? What was the purpose of the Board of Customs established by ordinance on 21 January 1643?",
    options: ["To draft the modern HS nomenclature", "To regulate, manage, and centralize the collection of duties on imported and some exported goods", "To replace all English courts with customs courts", "To unify the customs boards of England, Scotland, and Ireland immediately"],
    correct: 1,
    explanation: "The 1643 Board of Customs was meant to regulate, manage, and centralize duty collection."
  },
  {
    id: 13,
    question: "An administration needs guidance on HS classification, valuation, and rules of origin while modernizing customs systems. Which institution from the presentation is most relevant?",
    options: ["Only the 1643 English Board of Customs", "The EAC Mediation Agreement", "The World Customs Organization", "The Customs Preventive Service of Ghana"],
    correct: 2,
    explanation: "The WCO is presented as the key body for HS, valuation, rules of origin, and modernization support."
  },
  {
    id: 14,
    question: "Which is one disadvantage of customs barriers listed in the presentation?",
    options: ["Permanent elimination of inefficiency", "Increase in the cost of transactions", "Automatic rise in investment opportunities", "Guaranteed equality of trade benefits"],
    correct: 1,
    explanation: "The cons of barriers slide lists increased transaction costs."
  },
  {
    id: 15,
    question: "A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A non-tariff barrier", "A customs union feature", "A tariff barrier", "A physical barrier only"],
    correct: 0,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 16,
    question: "In revision, which statement is accurate? Which WCO objective focuses on revenue?",
    options: ["To replace customs officers with private auditors", "To abolish all tariff barriers permanently", "To end all import and export restrictions", "To promote fair, efficient, and effective revenue collection"],
    correct: 3,
    explanation: "The presentation calls this the revenue package."
  },
  {
    id: 17,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only derivation-based revenue sharing", "Facilitation of legitimate trade", "Only historical tribute collection", "Only criminal punishment of smugglers"],
    correct: 1,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 18,
    question: "Scenario variant: A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Facilitation of legitimate trade", "Only historical tribute collection", "Only derivation-based revenue sharing", "Only criminal punishment of smugglers"],
    correct: 0,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 19,
    question: "In revision, which statement is accurate? Which is a key feature of East African customs mentioned in the presentation?",
    options: ["No role for customs statistics", "Mandatory abolition of all border stations", "No movement of goods within East Africa", "Single collection center of import duty at the point of entry"],
    correct: 3,
    explanation: "The features slide lists single collection center at the point of entry."
  },
  {
    id: 20,
    question: "Which EACCMA schedule covers prohibited and restricted imports?",
    options: ["The 6th Schedule", "The 1st Schedule", "The 2nd Schedule", "The 4th Schedule"],
    correct: 2,
    explanation: "The schedules list identifies the 2nd Schedule as prohibited and restricted imports."
  },
  {
    id: 21,
    question: "Which option best reflects the presentation? Which enforcement powers are referenced on the anti-smuggling slide?",
    options: ["Questioning persons entering or leaving a partner state and enforcing power to arrest under sections 156 and 7", "Only granting exemptions under the Fifth Schedule", "Only issuing tax refunds and rebates", "Only setting exchange rates"],
    correct: 0,
    explanation: "The anti-smuggling slide specifically mentions questioning and arrest powers."
  },
  {
    id: 22,
    question: "Scenario variant: A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only criminal punishment of smugglers", "Facilitation of legitimate trade", "Only historical tribute collection", "Only derivation-based revenue sharing"],
    correct: 1,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 23,
    question: "Which of the following is listed as a customs area or control point in the presentation?",
    options: ["Parliamentary chambers", "Private residences by default", "Baggage halls", "Company boardrooms"],
    correct: 2,
    explanation: "Baggage halls are expressly listed among customs areas/control points."
  },
  {
    id: 24,
    question: "Which option best reflects the presentation? Which customs revenue issue contributed to the collapse of the EAC according to the presentation?",
    options: ["Use of baggage halls and transit sheds", "Adoption of smart seals and drones", "Failure to create the WTO", "Allocation of customs revenue among members on the basis of derivation by country of ultimate destination"],
    correct: 3,
    explanation: "The EAC collapse slide specifically mentions derivation-based allocation."
  },
  {
    id: 25,
    question: "In revision, which statement is accurate? Which additional factor contributed to the collapse of the EAC?",
    options: ["Too much private sector participation", "Continued disproportionate sharing of Community benefits among Partner States", "Overuse of non-intrusive inspection", "Excessive use of the green channel"],
    correct: 1,
    explanation: "The presentation says disproportionate benefit sharing contributed to collapse."
  },
  {
    id: 26,
    question: "Which additional harmful activity does the presentation say Customs helps combat?",
    options: ["Human trafficking", "Only civil divorce disputes", "Only crop insurance defaults", "Only company mergers"],
    correct: 0,
    explanation: "Human trafficking is one of the listed issues."
  },
  {
    id: 27,
    question: "Which option best reflects the presentation? How does section 2 of EACCMA, 2004 define Customs?",
    options: ["As only border stations and customs warehouses", "As the World Customs Organization Secretariat", "As the Customs Departments of the Partner States", "As all tax authorities in Africa"],
    correct: 2,
    explanation: "The presentation quotes section 2 of EACCMA, 2004 defining Customs or the Customs as the Customs Departments of the Partner States."
  },
  {
    id: 28,
    question: "In revision, which statement is accurate? Which WCO objective focuses on organizational development?",
    options: ["To prohibit all international trade", "To centralize all customs under one country", "To remove the need for customs laws", "To strengthen capacity building for effective and efficient customs administrations"],
    correct: 3,
    explanation: "The slides describe capacity building as the organizational development package."
  },
  {
    id: 29,
    question: "What was the purpose of the Board of Customs established by ordinance on 21 January 1643?",
    options: ["To replace all English courts with customs courts", "To draft the modern HS nomenclature", "To regulate, manage, and centralize the collection of duties on imported and some exported goods", "To unify the customs boards of England, Scotland, and Ireland immediately"],
    correct: 2,
    explanation: "The 1643 Board of Customs was meant to regulate, manage, and centralize duty collection."
  },
  {
    id: 30,
    question: "Scenario variant: An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["All customs work and activities are governed by law, including agreements, statutes, and administrative instructions", "Only physical barriers matter; law is secondary", "Only statistics collection requires law", "Only international bodies govern customs work, not national law"],
    correct: 0,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 31,
    question: "An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["Only physical barriers matter; law is secondary", "Only international bodies govern customs work, not national law", "Only statistics collection requires law", "All customs work and activities are governed by law, including agreements, statutes, and administrative instructions"],
    correct: 3,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 32,
    question: "Scenario variant: A customs administration speeds up low-risk trade flows while still checking prohibited goods, collecting taxes, and protecting society. Which idea from the presentation best explains this balance?",
    options: ["Customs exists only to run courts and not borders", "Modern Customs combines trade facilitation, revenue collection, and protection of society rather than focusing on only one role", "Modern Customs should eliminate all restrictions and taxes at once", "Customs should only collect trade statistics and avoid control functions"],
    correct: 1,
    explanation: "The presentation repeatedly presents Customs as a balance of facilitation, revenue, enforcement, and protection."
  },
  {
    id: 33,
    question: "Which option best reflects the presentation? By 1900, what scale had the Chinese customs system reached according to the presentation?",
    options: ["151 staff in a single secretariat in Brussels", "63 customs ports only on the US-Canada border", "About 20,000 people working in 40 main custom houses across China in a unified tax system", "A three-country customs union with common currency"],
    correct: 2,
    explanation: "The Asia slide states this scale for the Chinese system."
  },
  {
    id: 34,
    question: "In revision, which statement is accurate? Which instrument is mentioned as guiding the rationalization of trade procedures and documents?",
    options: ["The EAC Mediation Agreement", "The Revised Kyoto Convention", "The Customs Preventive Service Act", "The Sixth Schedule on distress"],
    correct: 1,
    explanation: "The facilitation slide refers to the Revised Kyoto Convention."
  },
  {
    id: 35,
    question: "When did Tanganyika join the Common Customs Administration?",
    options: ["In 1917", "In 1984", "In 1967", "In 1927"],
    correct: 3,
    explanation: "The East Africa timeline gives 1927."
  },
  {
    id: 36,
    question: "Scenario variant: A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A non-tariff barrier", "A customs union feature", "A tariff barrier", "A physical barrier only"],
    correct: 0,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 37,
    question: "In revision, which statement is accurate? Which is one of the WCO's stated objectives in the presentation?",
    options: ["To eliminate all document verification", "To abolish all customs duties everywhere", "To facilitate international trade through simplification and harmonization of customs procedures", "To replace national customs administrations completely"],
    correct: 2,
    explanation: "Trade facilitation through simplification and harmonization is one of the WCO objectives listed."
  },
  {
    id: 38,
    question: "Which is one basic control tool used by Customs according to the presentation?",
    options: ["Ending control of conveyances", "Abolition of customs areas", "Removal of all mandatory declarations", "Appointment and gazettement of entry and exit points such as seaports, airports, and border stations"],
    correct: 3,
    explanation: "The basic control tools slide lists appointment and gazettement of entry and exit points."
  },
  {
    id: 39,
    question: "Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Only exchange rate control policy", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards", "Collection of statistics only", "Common administration of transport only"],
    correct: 1,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 40,
    question: "In revision, which statement is accurate? What happened in East Africa in 1967 according to the presentation?",
    options: ["The Treaty for the establishment of the EAC Cooperation was created to control and administer matters of common interest", "The original EAC collapsed", "The Customs Act in Canada was operationalized", "The Chinese Maritime Customs Service was founded"],
    correct: 0,
    explanation: "The slides connect 1967 to the Treaty for EAC cooperation."
  },
  {
    id: 41,
    question: "Which EACCMA sections are linked to customs entry in the presentation?",
    options: ["Sections 11 and 12", "Sections 156 and 159", "Sections 34, 73, and 94", "Sections 120 and 130"],
    correct: 2,
    explanation: "The customs declaration slide identifies sections 34, 73, and 94."
  },
  {
    id: 42,
    question: "Scenario variant: A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Facilitation of legitimate trade", "Only criminal punishment of smugglers", "Only derivation-based revenue sharing", "Only historical tribute collection"],
    correct: 0,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 43,
    question: "In revision, which statement is accurate? Which additional harmful activity does the presentation say Customs helps combat?",
    options: ["Only company mergers", "Human trafficking", "Only crop insurance defaults", "Only civil divorce disputes"],
    correct: 1,
    explanation: "Human trafficking is one of the listed issues."
  },
  {
    id: 44,
    question: "What general vessel reporting rule is stated in the presentation?",
    options: ["Reports are made only after valuation", "Reports are made only after discharge", "Reports are required only for exports", "Reports are generally made 24 hours in advance for vessels"],
    correct: 3,
    explanation: "The slide says generally 24 hours for vessels."
  },
  {
    id: 45,
    question: "A trader asks why a regional customs union would prefer a single collection point for import duty. Which answer best reflects the East African customs features in the presentation?",
    options: ["Because it eliminates all need for customs law", "Because a single collection point supports a common customs territory and simplifies movement within the union", "Because it replaces the need for any border control", "Because it guarantees no disputes over benefit sharing"],
    correct: 1,
    explanation: "The East African customs features slide links single collection center to the regional customs arrangement."
  },
  {
    id: 46,
    question: "In revision, which statement is accurate? Which is listed as one of the key legal authorities for customs work?",
    options: ["English Board of Customs Ordinance, 1643", "Only private stakeholder agreements", "EAC Customs Management Act, 2004", "Canadian Customs Act, 1868 as East African principal law"],
    correct: 2,
    explanation: "EACCMA 2004 is listed as a principal legal authority."
  },
  {
    id: 47,
    question: "A trader asks why a regional customs union would prefer a single collection point for import duty. Which answer best reflects the East African customs features in the presentation?",
    options: ["Because a single collection point supports a common customs territory and simplifies movement within the union", "Because it guarantees no disputes over benefit sharing", "Because it replaces the need for any border control", "Because it eliminates all need for customs law"],
    correct: 0,
    explanation: "The East African customs features slide links single collection center to the regional customs arrangement."
  },
  {
    id: 48,
    question: "Which option best reflects the presentation? What problem in the period after the First World War pushed countries and traders toward customs cooperation?",
    options: ["Trade was regulated only by private contracts", "Border controls were fully removed worldwide", "All tariffs disappeared and customs lost relevance", "Countries became highly protective, imposed high tariffs, and introduced complex customs procedures"],
    correct: 3,
    explanation: "The slides describe post-war protectionism and procedural complexity."
  },
  {
    id: 49,
    question: "A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["Only aircraft must wait for reporting, not vessels", "Unloading is allowed first if valuation will be done later", "No unloading should occur before the report except with permission of Customs", "Immediate unloading is always allowed at the master's discretion"],
    correct: 2,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 50,
    question: "Which additional harmful activity does the presentation say Customs helps combat?",
    options: ["Only civil divorce disputes", "Human trafficking", "Only crop insurance defaults", "Only company mergers"],
    correct: 1,
    explanation: "Human trafficking is one of the listed issues."
  },
];
