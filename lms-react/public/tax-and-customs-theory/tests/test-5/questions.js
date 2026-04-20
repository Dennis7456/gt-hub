const QUESTIONS = [
  {
    id: 1,
    question: "Why did the original EAC collapse in 1977 according to the slides?",
    options: ["Because the WCO had dissolved", "Because the HS system was abolished", "Because of political tensions, ideological differences, and conflicts of national interest", "Because customs duties were too easy to collect"],
    correct: 2,
    explanation: "The East Africa slide and collapse slide identify these reasons."
  },
  {
    id: 2,
    question: "Which option best reflects the presentation? Who must make declaration of goods according to the presentation?",
    options: ["Only warehouse keepers", "Every importer in the inward report", "Only exporters using the red channel", "Only members of the WCO Council"],
    correct: 1,
    explanation: "The customs declaration slide states every importer in the inward report must declare goods."
  },
  {
    id: 3,
    question: "In revision, which statement is accurate? Which customs-stakeholder partnership concept is mentioned in the facilitation slide?",
    options: ["Common currency only", "Derivation allocation", "Police court jurisdiction", "Authorized Economic Operator partnership"],
    correct: 3,
    explanation: "The facilitation slide mentions working in partnership with stakeholders (AEO)."
  },
  {
    id: 4,
    question: "What began in East Africa in 1923 according to the presentation?",
    options: ["A single customs territory with a Common External Tariff and internal free trade", "The Customs Preventive Service in Ghana", "The collapse of the EAC", "The WCO working name"],
    correct: 0,
    explanation: "The slides note that internal free trade and a CET began in 1923."
  },
  {
    id: 5,
    question: "Which option best reflects the presentation? What was created in Ghana in 1897 to strengthen customs enforcement?",
    options: ["The Common External Tariff", "The World Customs Organization", "The Customs Preventive Service, a semi-military outfit", "The EAC Customs Union"],
    correct: 2,
    explanation: "The Ghana slide notes the creation of the Customs Preventive Service in 1897."
  },
  {
    id: 6,
    question: "In revision, which statement is accurate? Who must make declaration of goods according to the presentation?",
    options: ["Only warehouse keepers", "Only members of the WCO Council", "Only exporters using the red channel", "Every importer in the inward report"],
    correct: 3,
    explanation: "The customs declaration slide states every importer in the inward report must declare goods."
  },
  {
    id: 7,
    question: "Which EACCMA schedule covers prohibited and restricted imports?",
    options: ["The 6th Schedule", "The 2nd Schedule", "The 4th Schedule", "The 1st Schedule"],
    correct: 1,
    explanation: "The schedules list identifies the 2nd Schedule as prohibited and restricted imports."
  },
  {
    id: 8,
    question: "Scenario variant: A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control", "Modern Customs has abandoned all revenue roles", "Modern Customs operates without documents or systems", "Modern Customs now focuses only on physical barriers"],
    correct: 0,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 9,
    question: "In revision, which statement is accurate? When were English collectors of Customs first appointed?",
    options: ["In 1643", "In 1298", "In 1823", "In 1203"],
    correct: 1,
    explanation: "The presentation gives 1298 as the first appointment of English collectors of Customs."
  },
  {
    id: 10,
    question: "How did taxation begin in early communities according to the presentation?",
    options: ["Members of communities gave their chiefs or leaders gifts in return for leadership", "Only priests collected customs tariffs at temples", "Kings imposed VAT on all goods at the seaport", "Merchants created a customs union before rulers intervened"],
    correct: 0,
    explanation: "The slides explain taxation began with gifts to chiefs or leaders."
  },
  {
    id: 11,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only historical tribute collection", "Only criminal punishment of smugglers", "Only derivation-based revenue sharing", "Facilitation of legitimate trade"],
    correct: 3,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 12,
    question: "In revision, which statement is accurate? What is the basic rule on loading or unloading cargo before entry?",
    options: ["Loading is always allowed before entry if the goods are valuable", "Cargo may be loaded before entry if trade statistics have been collected", "No unloading or loading of cargo prior to entry", "Only vessel cargo must wait, but aircraft cargo need not"],
    correct: 2,
    explanation: "The customs declaration slide clearly states no unloading or loading prior to entry."
  },
  {
    id: 13,
    question: "When was the Customs Act drafted and operationalized in Canada according to the slides?",
    options: ["In 1845", "In 1868", "In 1788", "In 1767"],
    correct: 1,
    explanation: "The presentation gives 1868 for the drafting and operationalization of the Customs Act in Canada."
  },
  {
    id: 14,
    question: "Which option best reflects the presentation? Why is 26 January celebrated as International Customs Day?",
    options: ["Because it marks the inaugural session of the CCC held on 26 January 1953", "Because the HS nomenclature was first drafted then", "Because the EAC collapsed on that date", "Because that is when the Customs Act in Canada came into force"],
    correct: 0,
    explanation: "The presentation links 26 January 1953 to International Customs Day."
  },
  {
    id: 15,
    question: "In revision, which statement is accurate? What problem in the period after the First World War pushed countries and traders toward customs cooperation?",
    options: ["All tariffs disappeared and customs lost relevance", "Border controls were fully removed worldwide", "Trade was regulated only by private contracts", "Countries became highly protective, imposed high tariffs, and introduced complex customs procedures"],
    correct: 3,
    explanation: "The slides describe post-war protectionism and procedural complexity."
  },
  {
    id: 16,
    question: "Which set correctly reflects customs tax collection activities in the presentation?",
    options: ["Only valuation and warehouse rent collection", "Only import licensing and police patrols", "Valuation, verification of trading documents, classification, computation of taxes, checking declarations, and monitoring exemptions", "Auction, mediation, court sentencing, and political negotiation"],
    correct: 2,
    explanation: "These six items are listed on the tax collection slide."
  },
  {
    id: 17,
    question: "Which option best reflects the presentation? Which customs-stakeholder partnership concept is mentioned in the facilitation slide?",
    options: ["Authorized Economic Operator partnership", "Police court jurisdiction", "Derivation allocation", "Common currency only"],
    correct: 0,
    explanation: "The facilitation slide mentions working in partnership with stakeholders (AEO)."
  },
  {
    id: 18,
    question: "In revision, which statement is accurate? What is the governing body of the WCO?",
    options: ["The Secretariat", "The Secretary General alone", "The East African Legislative Assembly", "The Council"],
    correct: 3,
    explanation: "The WCO Council is the governing body."
  },
  {
    id: 19,
    question: "Which EACCMA sections are associated with customs areas in the presentation?",
    options: ["Sections 156 and 7", "Sections 11 and 12", "Sections 34 and 73", "Sections 229 and 231"],
    correct: 1,
    explanation: "The customs areas slide references EACCMA sections 11 and 12."
  },
  {
    id: 20,
    question: "Which option best reflects the presentation? How did expanding trade contribute to the development of customs duties?",
    options: ["Customs duties were abolished to encourage movement", "Only returning traders paid nothing at all", "Rulers made traders passing through their land pay a portion of goods as gifts or tribute", "Traders voluntarily created a common customs currency"],
    correct: 2,
    explanation: "As trade expanded, rulers required traders passing through their territories to pay part of their goods."
  },
  {
    id: 21,
    question: "In revision, which statement is accurate? Which customs-stakeholder partnership concept is mentioned in the facilitation slide?",
    options: ["Authorized Economic Operator partnership", "Derivation allocation", "Police court jurisdiction", "Common currency only"],
    correct: 0,
    explanation: "The facilitation slide mentions working in partnership with stakeholders (AEO)."
  },
  {
    id: 22,
    question: "Which WCO objective focuses on organizational development?",
    options: ["To remove the need for customs laws", "To strengthen capacity building for effective and efficient customs administrations", "To prohibit all international trade", "To centralize all customs under one country"],
    correct: 1,
    explanation: "The slides describe capacity building as the organizational development package."
  },
  {
    id: 23,
    question: "Which option best reflects the presentation? Which export-related goods are under customs control according to the presentation?",
    options: ["Only exports after final sale", "Only exports that are never restricted", "All dutiable exports from when they are brought to a place for exportation until exportation", "Only exports already cleared from customs control"],
    correct: 2,
    explanation: "The presentation lists dutiable exports in this way."
  },
  {
    id: 24,
    question: "In revision, which statement is accurate? How many customs ports had been established in Canada by 1845?",
    options: ["20", "194", "151", "63"],
    correct: 3,
    explanation: "The presentation states that 63 customs ports in Canada had been established by 1845."
  },
  {
    id: 25,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only historical tribute collection", "Facilitation of legitimate trade", "Only derivation-based revenue sharing", "Only criminal punishment of smugglers"],
    correct: 1,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 26,
    question: "Which option best reflects the presentation? Which is one of the additional legal references listed at the end of the presentation?",
    options: ["The private sector civil society charter", "The 1643 English ordinance only", "Only the Ghana Customs Preventive Service order", "The Revised Kyoto Convention"],
    correct: 3,
    explanation: "The final slide lists the Revised Kyoto Convention among other legal references."
  },
  {
    id: 27,
    question: "In revision, which statement is accurate? Which customs revenue issue contributed to the collapse of the EAC according to the presentation?",
    options: ["Adoption of smart seals and drones", "Use of baggage halls and transit sheds", "Allocation of customs revenue among members on the basis of derivation by country of ultimate destination", "Failure to create the WTO"],
    correct: 2,
    explanation: "The EAC collapse slide specifically mentions derivation-based allocation."
  },
  {
    id: 28,
    question: "Scenario variant: After war, traders complain that tariffs are high and procedures are too complex across many countries. Which historical development in the presentation most directly answers that problem?",
    options: ["The rise of international customs cooperation aimed at reducing taxes and harmonizing procedures", "A return to gifts for rulers", "Creation of physical barriers like trenches", "The collapse of the EAC in 1977"],
    correct: 0,
    explanation: "The development slides explain that international cooperation grew to reduce taxes and harmonize customs procedures."
  },
  {
    id: 29,
    question: "An administration needs guidance on HS classification, valuation, and rules of origin while modernizing customs systems. Which institution from the presentation is most relevant?",
    options: ["The EAC Mediation Agreement", "Only the 1643 English Board of Customs", "The Customs Preventive Service of Ghana", "The World Customs Organization"],
    correct: 3,
    explanation: "The WCO is presented as the key body for HS, valuation, rules of origin, and modernization support."
  },
  {
    id: 30,
    question: "Scenario variant: Imported goods have arrived but duty has not yet been paid, and Customs wants to inspect them again. Which principle from the slides supports this?",
    options: ["Inspection is allowed only after a court appeal", "Goods under customs control may be examined by Customs at any time", "Goods become fully private immediately on arrival", "Only exported goods may be examined"],
    correct: 1,
    explanation: "The slides explicitly state that goods deemed under customs control may be examined at any time."
  },
  {
    id: 31,
    question: "By 1900, what scale had the Chinese customs system reached according to the presentation?",
    options: ["About 20,000 people working in 40 main custom houses across China in a unified tax system", "63 customs ports only on the US-Canada border", "151 staff in a single secretariat in Brussels", "A three-country customs union with common currency"],
    correct: 0,
    explanation: "The Asia slide states this scale for the Chinese system."
  },
  {
    id: 32,
    question: "Which option best reflects the presentation? Where was the first interior Customs office regulating trade along the US-Canada border established according to the presentation?",
    options: ["At Massachusetts in 1767", "At Cape Coast in 1839", "At St. Jean, Quebec, in 1788", "At Ottawa in 1868"],
    correct: 2,
    explanation: "The North America slide identifies St. Jean, Quebec in 1788."
  },
  {
    id: 33,
    question: "In revision, which statement is accurate? Which additional factor contributed to the collapse of the EAC?",
    options: ["Continued disproportionate sharing of Community benefits among Partner States", "Overuse of non-intrusive inspection", "Too much private sector participation", "Excessive use of the green channel"],
    correct: 0,
    explanation: "The presentation says disproportionate benefit sharing contributed to collapse."
  },
  {
    id: 34,
    question: "Which of the following is listed as a customs area or control point in the presentation?",
    options: ["Private residences by default", "Company boardrooms", "Baggage halls", "Parliamentary chambers"],
    correct: 2,
    explanation: "Baggage halls are expressly listed among customs areas/control points."
  },
  {
    id: 35,
    question: "Which option best reflects the presentation? Which is one of the WCO's stated objectives in the presentation?",
    options: ["To eliminate all document verification", "To facilitate international trade through simplification and harmonization of customs procedures", "To abolish all customs duties everywhere", "To replace national customs administrations completely"],
    correct: 1,
    explanation: "Trade facilitation through simplification and harmonization is one of the WCO objectives listed."
  },
  {
    id: 36,
    question: "In revision, which statement is accurate? Which customs-stakeholder partnership concept is mentioned in the facilitation slide?",
    options: ["Common currency only", "Derivation allocation", "Police court jurisdiction", "Authorized Economic Operator partnership"],
    correct: 3,
    explanation: "The facilitation slide mentions working in partnership with stakeholders (AEO)."
  },
  {
    id: 37,
    question: "A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A tariff barrier", "A non-tariff barrier", "A physical barrier only", "A customs union feature"],
    correct: 1,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 38,
    question: "Which option best reflects the presentation? When were English collectors of Customs first appointed?",
    options: ["In 1643", "In 1823", "In 1203", "In 1298"],
    correct: 3,
    explanation: "The presentation gives 1298 as the first appointment of English collectors of Customs."
  },
  {
    id: 39,
    question: "In revision, which statement is accurate? What is the main goal of Smart Customs of the future according to the presentation?",
    options: ["To minimize customs clearance time and costs while intelligently managing inbound and outbound goods and vehicles", "To return permanently to only manual declarations", "To remove all customs control entirely", "To focus solely on monarchy-era revenue collection"],
    correct: 0,
    explanation: "The Smart Customs slide states this overarching goal."
  },
  {
    id: 40,
    question: "Which is one core role of Customs highlighted in the presentation?",
    options: ["Management of only domestic direct taxes", "Abolition of all prohibitions and restrictions", "Facilitation of legitimate trade", "Replacement of all ministries of finance"],
    correct: 2,
    explanation: "The roles slide begins with facilitation of legitimate trade."
  },
  {
    id: 41,
    question: "Which option best reflects the presentation? How does section 2 of EACCMA, 2004 define Customs?",
    options: ["As only border stations and customs warehouses", "As all tax authorities in Africa", "As the World Customs Organization Secretariat", "As the Customs Departments of the Partner States"],
    correct: 3,
    explanation: "The presentation quotes section 2 of EACCMA, 2004 defining Customs or the Customs as the Customs Departments of the Partner States."
  },
  {
    id: 42,
    question: "Scenario variant: An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["Only physical barriers matter; law is secondary", "Only international bodies govern customs work, not national law", "All customs work and activities are governed by law, including agreements, statutes, and administrative instructions", "Only statistics collection requires law"],
    correct: 2,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 43,
    question: "Which set correctly reflects customs tax collection activities in the presentation?",
    options: ["Valuation, verification of trading documents, classification, computation of taxes, checking declarations, and monitoring exemptions", "Auction, mediation, court sentencing, and political negotiation", "Only valuation and warehouse rent collection", "Only import licensing and police patrols"],
    correct: 0,
    explanation: "These six items are listed on the tax collection slide."
  },
  {
    id: 44,
    question: "Which option best reflects the presentation? Which is one justification for customs barriers mentioned in the presentation?",
    options: ["To prevent all trade statistics collection", "Protection of infant industries", "To eliminate all customs administrations", "To end all health controls"],
    correct: 1,
    explanation: "The justification slide begins with protection of infant industries."
  },
  {
    id: 45,
    question: "A trader asks why a regional customs union would prefer a single collection point for import duty. Which answer best reflects the East African customs features in the presentation?",
    options: ["Because a single collection point supports a common customs territory and simplifies movement within the union", "Because it replaces the need for any border control", "Because it eliminates all need for customs law", "Because it guarantees no disputes over benefit sharing"],
    correct: 0,
    explanation: "The East African customs features slide links single collection center to the regional customs arrangement."
  },
  {
    id: 46,
    question: "Scenario variant: Imported goods have arrived but duty has not yet been paid, and Customs wants to inspect them again. Which principle from the slides supports this?",
    options: ["Only exported goods may be examined", "Goods under customs control may be examined by Customs at any time", "Goods become fully private immediately on arrival", "Inspection is allowed only after a court appeal"],
    correct: 1,
    explanation: "The slides explicitly state that goods deemed under customs control may be examined at any time."
  },
  {
    id: 47,
    question: "Which option best reflects the presentation? Which customs-stakeholder partnership concept is mentioned in the facilitation slide?",
    options: ["Police court jurisdiction", "Common currency only", "Authorized Economic Operator partnership", "Derivation allocation"],
    correct: 2,
    explanation: "The facilitation slide mentions working in partnership with stakeholders (AEO)."
  },
  {
    id: 48,
    question: "Scenario variant: A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["Unloading is allowed first if valuation will be done later", "Immediate unloading is always allowed at the master's discretion", "Only aircraft must wait for reporting, not vessels", "No unloading should occur before the report except with permission of Customs"],
    correct: 3,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 49,
    question: "Which action is part of Customs prevention of smuggling according to the slides?",
    options: ["Stopping any conveyance suspected of carrying uncustomed goods", "Allowing all conveyances to pass without question", "Ending patrol of entry and exit points", "Replacing all customs reports with verbal declarations only"],
    correct: 0,
    explanation: "The anti-smuggling slide explicitly lists stopping suspected conveyances."
  },
  {
    id: 50,
    question: "Which option best reflects the presentation? Which statement best reflects the presentation's explanation of goods under customs control?",
    options: ["They can never be examined once entered", "They cease to be regulated after arrival", "They are only relevant to statistics and not enforcement", "They may be examined by Customs at any time"],
    correct: 3,
    explanation: "The presentation says goods under customs control may be examined at any time."
  },
];
