const QUESTIONS = [
  {
    id: 1,
    question: "Which option best reflects the presentation? What was the purpose of the Board of Customs established by ordinance on 21 January 1643?",
    options: ["To regulate, manage, and centralize the collection of duties on imported and some exported goods", "To draft the modern HS nomenclature", "To replace all English courts with customs courts", "To unify the customs boards of England, Scotland, and Ireland immediately"],
    correct: 0,
    explanation: "The 1643 Board of Customs was meant to regulate, manage, and centralize duty collection."
  },
  {
    id: 2,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only derivation-based revenue sharing", "Facilitation of legitimate trade", "Only criminal punishment of smugglers", "Only historical tribute collection"],
    correct: 1,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 3,
    question: "Which customs-stakeholder partnership concept is mentioned in the facilitation slide?",
    options: ["Police court jurisdiction", "Common currency only", "Derivation allocation", "Authorized Economic Operator partnership"],
    correct: 3,
    explanation: "The facilitation slide mentions working in partnership with stakeholders (AEO)."
  },
  {
    id: 4,
    question: "A customs authority deploys drones, smart gates, smart seals, AI, and data analytics to reduce clearance time while improving control. Which slide theme does this illustrate most directly?",
    options: ["Old customs entry gates only", "Traditional monarchy taxation", "Smart Customs of the future", "Only derivation-based revenue allocation"],
    correct: 2,
    explanation: "These technologies are specifically listed under Smart Customs."
  },
  {
    id: 5,
    question: "In revision, which statement is accurate? Which EACCMA section is linked to goods under customs control in the presentation?",
    options: ["Section 229", "Section 34", "Section 2", "Section 16"],
    correct: 3,
    explanation: "The goods under customs control slide refers to section 16."
  },
  {
    id: 6,
    question: "Which EACCMA sections are associated with customs areas in the presentation?",
    options: ["Sections 34 and 73", "Sections 156 and 7", "Sections 11 and 12", "Sections 229 and 231"],
    correct: 2,
    explanation: "The customs areas slide references EACCMA sections 11 and 12."
  },
  {
    id: 7,
    question: "Which option best reflects the presentation? What is customs control according to the presentation?",
    options: ["The process of collecting only direct taxes on income", "Measures put in place to ensure compliance with customs laws and regulate movement of resources from, into, and within a country", "The abolition of all border procedures", "A system used only for customs statistics"],
    correct: 1,
    explanation: "This is the definition given on the customs control slide."
  },
  {
    id: 8,
    question: "In revision, which statement is accurate? Where was the first interior Customs office regulating trade along the US-Canada border established according to the presentation?",
    options: ["At St. Jean, Quebec, in 1788", "At Massachusetts in 1767", "At Ottawa in 1868", "At Cape Coast in 1839"],
    correct: 0,
    explanation: "The North America slide identifies St. Jean, Quebec in 1788."
  },
  {
    id: 9,
    question: "When was the convention establishing the Customs Cooperation Council signed?",
    options: ["In 1994 in Brussels", "On 26 January 1953 in Paris", "On 4 November 1952 in London", "On 15 December 1950 in Brussels"],
    correct: 3,
    explanation: "The slides state the convention was signed on 15 December 1950 in Brussels."
  },
  {
    id: 10,
    question: "Which option best reflects the presentation? Which is one justification for customs barriers mentioned in the presentation?",
    options: ["To eliminate all customs administrations", "Protection of infant industries", "To end all health controls", "To prevent all trade statistics collection"],
    correct: 1,
    explanation: "The justification slide begins with protection of infant industries."
  },
  {
    id: 11,
    question: "Scenario variant: A customs administration speeds up low-risk trade flows while still checking prohibited goods, collecting taxes, and protecting society. Which idea from the presentation best explains this balance?",
    options: ["Modern Customs combines trade facilitation, revenue collection, and protection of society rather than focusing on only one role", "Customs should only collect trade statistics and avoid control functions", "Modern Customs should eliminate all restrictions and taxes at once", "Customs exists only to run courts and not borders"],
    correct: 0,
    explanation: "The presentation repeatedly presents Customs as a balance of facilitation, revenue, enforcement, and protection."
  },
  {
    id: 12,
    question: "Which is an example of goods deemed to be under customs control according to the slides?",
    options: ["Only goods already sold at auction", "Only diplomatic bags", "All imports from time of importation until delivery for home use or exportation", "Only goods after final condemnation"],
    correct: 2,
    explanation: "This example is explicitly listed on the slides."
  },
  {
    id: 13,
    question: "Which option best reflects the presentation? What governs all customs work and activities according to the presentation?",
    options: ["Only court decisions from foreign countries", "Only oral instructions from officers", "Only private trade customs", "Law, including international agreements, statutes, and administrative instructions"],
    correct: 3,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 14,
    question: "An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["All customs work and activities are governed by law, including agreements, statutes, and administrative instructions", "Only international bodies govern customs work, not national law", "Only physical barriers matter; law is secondary", "Only statistics collection requires law"],
    correct: 0,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 15,
    question: "What problem in the period after the First World War pushed countries and traders toward customs cooperation?",
    options: ["Trade was regulated only by private contracts", "All tariffs disappeared and customs lost relevance", "Countries became highly protective, imposed high tariffs, and introduced complex customs procedures", "Border controls were fully removed worldwide"],
    correct: 2,
    explanation: "The slides describe post-war protectionism and procedural complexity."
  },
  {
    id: 16,
    question: "An administration needs guidance on HS classification, valuation, and rules of origin while modernizing customs systems. Which institution from the presentation is most relevant?",
    options: ["Only the 1643 English Board of Customs", "The World Customs Organization", "The EAC Mediation Agreement", "The Customs Preventive Service of Ghana"],
    correct: 1,
    explanation: "The WCO is presented as the key body for HS, valuation, rules of origin, and modernization support."
  },
  {
    id: 17,
    question: "In revision, which statement is accurate? Which EACCMA schedule covers the exemption regime?",
    options: ["The 6th Schedule", "The 3rd Schedule", "The 1st Schedule", "The 5th Schedule"],
    correct: 3,
    explanation: "The schedules list identifies the Fifth Schedule as the exemption regime."
  },
  {
    id: 18,
    question: "When was the Department of Customs established in Ghana according to the presentation?",
    options: ["In 1967", "In 1839", "In 1947", "In 1897"],
    correct: 1,
    explanation: "The Africa slide gives 1839."
  },
  {
    id: 19,
    question: "Which option best reflects the presentation? Which combination correctly reflects features of East African customs in the presentation?",
    options: ["Free movement of goods, capital and labor; free trade in East African origin products; common administration of transport and communication", "Only one port allowed per country; no common tariff; no free movement", "Replacement of customs duties with only direct taxes", "Full prohibition of internal trade; end of currency systems; no common administration"],
    correct: 0,
    explanation: "These features are listed together on the presentation slides."
  },
  {
    id: 20,
    question: "A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["Modern Customs operates without documents or systems", "Modern Customs now focuses only on physical barriers", "There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control", "Modern Customs has abandoned all revenue roles"],
    correct: 2,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 21,
    question: "What is one of the stated objectives of the Tax and Customs Theory course?",
    options: ["To focus exclusively on East African ports and airports", "To define Customs, explain the historical evolution of Customs, explain the evolution of modern Customs administrations, and discuss future roles of Customs administrations", "To train only on tariff computation and valuation schedules", "To replace all customs laws with administrative practice"],
    correct: 1,
    explanation: "The objectives slide lists these four broad outcomes."
  },
  {
    id: 22,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only criminal punishment of smugglers", "Only historical tribute collection", "Facilitation of legitimate trade", "Only derivation-based revenue sharing"],
    correct: 2,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 23,
    question: "In revision, which statement is accurate? When was the Customs Act drafted and operationalized in Canada according to the slides?",
    options: ["In 1788", "In 1845", "In 1767", "In 1868"],
    correct: 3,
    explanation: "The presentation gives 1868 for the drafting and operationalization of the Customs Act in Canada."
  },
  {
    id: 24,
    question: "How does Customs protect society according to the presentation?",
    options: ["By enforcing prohibitions and restrictions on goods across borders", "By collecting income tax on salaries", "By drafting only company law", "By replacing immigration services"],
    correct: 0,
    explanation: "The slide on roles of Customs identifies this protective role."
  },
  {
    id: 25,
    question: "Which option best reflects the presentation? What are customs barriers according to the slides?",
    options: ["Only tunnels and trenches without legal rules", "Only judicial orders from tribunals", "Physical or non-physical structures employed to regulate movement of resources", "Only import licences issued by private traders"],
    correct: 2,
    explanation: "The slides say customs authorities employ physical or non-physical structures called customs barriers."
  },
  {
    id: 26,
    question: "A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A physical barrier only", "A non-tariff barrier", "A tariff barrier", "A customs union feature"],
    correct: 1,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 27,
    question: "Scenario variant: Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Common administration of transport only", "Collection of statistics only", "Only exchange rate control policy", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards"],
    correct: 3,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 28,
    question: "Which option best reflects the presentation? What major paradigm shift in customs purpose is highlighted in the recap slide?",
    options: ["From revenue collection to supply chain security and protection of the environment", "From Customs to private shipping only", "From trade facilitation to abolition of trade", "From laws to purely informal practice"],
    correct: 0,
    explanation: "The recap slide notes this broader modern customs paradigm shift."
  },
  {
    id: 29,
    question: "In revision, which statement is accurate? Which instrument is mentioned as guiding the rationalization of trade procedures and documents?",
    options: ["The Sixth Schedule on distress", "The Customs Preventive Service Act", "The EAC Mediation Agreement", "The Revised Kyoto Convention"],
    correct: 3,
    explanation: "The facilitation slide refers to the Revised Kyoto Convention."
  },
  {
    id: 30,
    question: "Which of the following is listed as a customs area or control point in the presentation?",
    options: ["Private residences by default", "Parliamentary chambers", "Baggage halls", "Company boardrooms"],
    correct: 2,
    explanation: "Baggage halls are expressly listed among customs areas/control points."
  },
  {
    id: 31,
    question: "Which option best reflects the presentation? Which facilitation incentives or arrangements are mentioned in the presentation?",
    options: ["Only domestic excise rebates", "SEZ, EPZ, EPAs, AfCFTA, AGOA, EAC, and COMESA", "Only warrant of distress procedures", "Only anti-dumping duties and countervailing duties"],
    correct: 1,
    explanation: "These are listed on the trade facilitation slide."
  },
  {
    id: 32,
    question: "A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["No unloading should occur before the report except with permission of Customs", "Immediate unloading is always allowed at the master's discretion", "Only aircraft must wait for reporting, not vessels", "Unloading is allowed first if valuation will be done later"],
    correct: 0,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 33,
    question: "Which issue is specifically included under Customs protection of society and industry?",
    options: ["Only warehouse rent disputes", "Only school curriculum reform", "Counterfeits and contrabands", "Only internal municipal licensing"],
    correct: 2,
    explanation: "Counterfeits and contrabands appear on the protection slide."
  },
  {
    id: 34,
    question: "A trader asks why a regional customs union would prefer a single collection point for import duty. Which answer best reflects the East African customs features in the presentation?",
    options: ["Because it guarantees no disputes over benefit sharing", "Because a single collection point supports a common customs territory and simplifies movement within the union", "Because it replaces the need for any border control", "Because it eliminates all need for customs law"],
    correct: 1,
    explanation: "The East African customs features slide links single collection center to the regional customs arrangement."
  },
  {
    id: 35,
    question: "In revision, which statement is accurate? Which is a key feature of East African customs mentioned in the presentation?",
    options: ["Single collection center of import duty at the point of entry", "Mandatory abolition of all border stations", "No movement of goods within East Africa", "No role for customs statistics"],
    correct: 0,
    explanation: "The features slide lists single collection center at the point of entry."
  },
  {
    id: 36,
    question: "Which is one basic control tool used by Customs according to the presentation?",
    options: ["Abolition of customs areas", "Ending control of conveyances", "Removal of all mandatory declarations", "Appointment and gazettement of entry and exit points such as seaports, airports, and border stations"],
    correct: 3,
    explanation: "The basic control tools slide lists appointment and gazettement of entry and exit points."
  },
  {
    id: 37,
    question: "Which option best reflects the presentation? When was the convention establishing the Customs Cooperation Council signed?",
    options: ["On 4 November 1952 in London", "On 15 December 1950 in Brussels", "In 1994 in Brussels", "On 26 January 1953 in Paris"],
    correct: 1,
    explanation: "The slides state the convention was signed on 15 December 1950 in Brussels."
  },
  {
    id: 38,
    question: "In revision, which statement is accurate? Which enforcement-related items are specifically mentioned as being under customs control?",
    options: ["All seized goods and goods under notice of seizure", "Only goods after import duty has been remitted", "Only goods in private shops", "Only goods that are not declared anywhere"],
    correct: 0,
    explanation: "The slides list seized goods and goods under notice of seizure."
  },
  {
    id: 39,
    question: "Scenario variant: A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only derivation-based revenue sharing", "Only criminal punishment of smugglers", "Only historical tribute collection", "Facilitation of legitimate trade"],
    correct: 3,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 40,
    question: "Which option best reflects the presentation? Why is 26 January celebrated as International Customs Day?",
    options: ["Because the EAC collapsed on that date", "Because the HS nomenclature was first drafted then", "Because it marks the inaugural session of the CCC held on 26 January 1953", "Because that is when the Customs Act in Canada came into force"],
    correct: 2,
    explanation: "The presentation links 26 January 1953 to International Customs Day."
  },
  {
    id: 41,
    question: "In revision, which statement is accurate? When did the convention establishing the Customs Cooperation Council enter into force?",
    options: ["On 15 December 1950", "On 26 January 1953", "In 1994", "On 4 November 1952"],
    correct: 3,
    explanation: "The development slide provides 4 November 1952."
  },
  {
    id: 42,
    question: "A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control", "Modern Customs operates without documents or systems", "Modern Customs has abandoned all revenue roles", "Modern Customs now focuses only on physical barriers"],
    correct: 0,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 43,
    question: "Which option best reflects the presentation? What is the basic rule on loading or unloading cargo before entry?",
    options: ["Loading is always allowed before entry if the goods are valuable", "Only vessel cargo must wait, but aircraft cargo need not", "No unloading or loading of cargo prior to entry", "Cargo may be loaded before entry if trade statistics have been collected"],
    correct: 2,
    explanation: "The customs declaration slide clearly states no unloading or loading prior to entry."
  },
  {
    id: 44,
    question: "In revision, which statement is accurate? Which revenue-related role of Customs is highlighted?",
    options: ["Only licensing private ports", "Collection of taxes", "Only negotiating foreign treaties", "Only running civil courts"],
    correct: 1,
    explanation: "Collection of taxes is one of the listed roles of Customs."
  },
  {
    id: 45,
    question: "When were English collectors of Customs first appointed?",
    options: ["In 1203", "In 1643", "In 1298", "In 1823"],
    correct: 2,
    explanation: "The presentation gives 1298 as the first appointment of English collectors of Customs."
  },
  {
    id: 46,
    question: "Which option best reflects the presentation? Which revenue-related role of Customs is highlighted?",
    options: ["Collection of taxes", "Only negotiating foreign treaties", "Only running civil courts", "Only licensing private ports"],
    correct: 0,
    explanation: "Collection of taxes is one of the listed roles of Customs."
  },
  {
    id: 47,
    question: "In revision, which statement is accurate? Which EACCMA schedule covers the exemption regime?",
    options: ["The 1st Schedule", "The 6th Schedule", "The 3rd Schedule", "The 5th Schedule"],
    correct: 3,
    explanation: "The schedules list identifies the Fifth Schedule as the exemption regime."
  },
  {
    id: 48,
    question: "A customs administration speeds up low-risk trade flows while still checking prohibited goods, collecting taxes, and protecting society. Which idea from the presentation best explains this balance?",
    options: ["Customs should only collect trade statistics and avoid control functions", "Modern Customs combines trade facilitation, revenue collection, and protection of society rather than focusing on only one role", "Customs exists only to run courts and not borders", "Modern Customs should eliminate all restrictions and taxes at once"],
    correct: 1,
    explanation: "The presentation repeatedly presents Customs as a balance of facilitation, revenue, enforcement, and protection."
  },
  {
    id: 49,
    question: "Which option best reflects the presentation? What major paradigm shift in customs purpose is highlighted in the recap slide?",
    options: ["From laws to purely informal practice", "From Customs to private shipping only", "From trade facilitation to abolition of trade", "From revenue collection to supply chain security and protection of the environment"],
    correct: 3,
    explanation: "The recap slide notes this broader modern customs paradigm shift."
  },
  {
    id: 50,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Facilitation of legitimate trade", "Only criminal punishment of smugglers", "Only historical tribute collection", "Only derivation-based revenue sharing"],
    correct: 0,
    explanation: "These are facilitation tools listed in the presentation."
  },
];
