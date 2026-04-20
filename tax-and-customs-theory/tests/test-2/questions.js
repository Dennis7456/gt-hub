const QUESTIONS = [
  {
    id: 1,
    question: "What problem in the period after the First World War pushed countries and traders toward customs cooperation?",
    options: ["Border controls were fully removed worldwide", "Countries became highly protective, imposed high tariffs, and introduced complex customs procedures", "All tariffs disappeared and customs lost relevance", "Trade was regulated only by private contracts"],
    correct: 1,
    explanation: "The slides describe post-war protectionism and procedural complexity."
  },
  {
    id: 2,
    question: "Which option best reflects the presentation? What is customs control according to the presentation?",
    options: ["Measures put in place to ensure compliance with customs laws and regulate movement of resources from, into, and within a country", "The abolition of all border procedures", "A system used only for customs statistics", "The process of collecting only direct taxes on income"],
    correct: 0,
    explanation: "This is the definition given on the customs control slide."
  },
  {
    id: 3,
    question: "In revision, which statement is accurate? When were English collectors of Customs first appointed?",
    options: ["In 1643", "In 1203", "In 1298", "In 1823"],
    correct: 2,
    explanation: "The presentation gives 1298 as the first appointment of English collectors of Customs."
  },
  {
    id: 4,
    question: "What important UK customs reform took place in 1823?",
    options: ["The Customs Act was drafted and operationalized in Canada", "All customs duties were repealed", "The WCO Secretariat moved to London", "The separate boards of England, Scotland, and Ireland were merged into one unified Board of Customs"],
    correct: 3,
    explanation: "The UK revolutionized customs management in 1823 by merging separate customs boards."
  },
  {
    id: 5,
    question: "Which option best reflects the presentation? What are customs barriers according to the slides?",
    options: ["Only import licences issued by private traders", "Only tunnels and trenches without legal rules", "Physical or non-physical structures employed to regulate movement of resources", "Only judicial orders from tribunals"],
    correct: 2,
    explanation: "The slides say customs authorities employ physical or non-physical structures called customs barriers."
  },
  {
    id: 6,
    question: "A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A customs union feature", "A non-tariff barrier", "A physical barrier only", "A tariff barrier"],
    correct: 1,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 7,
    question: "Scenario variant: An administration needs guidance on HS classification, valuation, and rules of origin while modernizing customs systems. Which institution from the presentation is most relevant?",
    options: ["The EAC Mediation Agreement", "The Customs Preventive Service of Ghana", "Only the 1643 English Board of Customs", "The World Customs Organization"],
    correct: 3,
    explanation: "The WCO is presented as the key body for HS, valuation, rules of origin, and modernization support."
  },
  {
    id: 8,
    question: "Which option best reflects the presentation? Why did customs duties become reliable sources of public revenue in earlier times?",
    options: ["Because they were relatively easy to collect at specified points such as bridges and gates", "Because customs applied only to luxury goods", "Because customs officers worked without rulers", "Because all internal taxes had already been abolished"],
    correct: 0,
    explanation: "The presentation says customs duties were easy to collect and became reliable sources of public revenue."
  },
  {
    id: 9,
    question: "In revision, which statement is accurate? When were English collectors of Customs first appointed?",
    options: ["In 1203", "In 1298", "In 1823", "In 1643"],
    correct: 1,
    explanation: "The presentation gives 1298 as the first appointment of English collectors of Customs."
  },
  {
    id: 10,
    question: "How does Customs protect society according to the presentation?",
    options: ["By drafting only company law", "By collecting income tax on salaries", "By enforcing prohibitions and restrictions on goods across borders", "By replacing immigration services"],
    correct: 2,
    explanation: "The slide on roles of Customs identifies this protective role."
  },
  {
    id: 11,
    question: "Which option best reflects the presentation? Which additional harmful activity does the presentation say Customs helps combat?",
    options: ["Only crop insurance defaults", "Only civil divorce disputes", "Only company mergers", "Human trafficking"],
    correct: 3,
    explanation: "Human trafficking is one of the listed issues."
  },
  {
    id: 12,
    question: "A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A non-tariff barrier", "A physical barrier only", "A customs union feature", "A tariff barrier"],
    correct: 0,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 13,
    question: "Which combination of technologies is linked to Smart Customs in the presentation?",
    options: ["Only trenches and walls", "Only paper ledgers and manual declaration books", "IoT tools such as drones, smart gates, and smart seals together with AI, machine learning, and data analytics", "Only common currency systems"],
    correct: 2,
    explanation: "The Smart Customs slide mentions these tools and technologies."
  },
  {
    id: 14,
    question: "Which option best reflects the presentation? Which enforcement powers are referenced on the anti-smuggling slide?",
    options: ["Only issuing tax refunds and rebates", "Only granting exemptions under the Fifth Schedule", "Only setting exchange rates", "Questioning persons entering or leaving a partner state and enforcing power to arrest under sections 156 and 7"],
    correct: 3,
    explanation: "The anti-smuggling slide specifically mentions questioning and arrest powers."
  },
  {
    id: 15,
    question: "In revision, which statement is accurate? Which customs revenue issue contributed to the collapse of the EAC according to the presentation?",
    options: ["Failure to create the WTO", "Allocation of customs revenue among members on the basis of derivation by country of ultimate destination", "Adoption of smart seals and drones", "Use of baggage halls and transit sheds"],
    correct: 1,
    explanation: "The EAC collapse slide specifically mentions derivation-based allocation."
  },
  {
    id: 16,
    question: "What is one of the stated objectives of the Tax and Customs Theory course?",
    options: ["To define Customs, explain the historical evolution of Customs, explain the evolution of modern Customs administrations, and discuss future roles of Customs administrations", "To replace all customs laws with administrative practice", "To train only on tariff computation and valuation schedules", "To focus exclusively on East African ports and airports"],
    correct: 0,
    explanation: "The objectives slide lists these four broad outcomes."
  },
  {
    id: 17,
    question: "Which option best reflects the presentation? Which is listed as one of the key legal authorities for customs work?",
    options: ["Canadian Customs Act, 1868 as East African principal law", "English Board of Customs Ordinance, 1643", "Only private stakeholder agreements", "EAC Customs Management Act, 2004"],
    correct: 3,
    explanation: "EACCMA 2004 is listed as a principal legal authority."
  },
  {
    id: 18,
    question: "In revision, which statement is accurate? What is the main goal of Smart Customs of the future according to the presentation?",
    options: ["To focus solely on monarchy-era revenue collection", "To minimize customs clearance time and costs while intelligently managing inbound and outbound goods and vehicles", "To return permanently to only manual declarations", "To remove all customs control entirely"],
    correct: 1,
    explanation: "The Smart Customs slide states this overarching goal."
  },
  {
    id: 19,
    question: "Scenario variant: Imported goods have arrived but duty has not yet been paid, and Customs wants to inspect them again. Which principle from the slides supports this?",
    options: ["Goods become fully private immediately on arrival", "Only exported goods may be examined", "Goods under customs control may be examined by Customs at any time", "Inspection is allowed only after a court appeal"],
    correct: 2,
    explanation: "The slides explicitly state that goods deemed under customs control may be examined at any time."
  },
  {
    id: 20,
    question: "Which option best reflects the presentation? What are the working languages of the WCO according to the presentation?",
    options: ["English and French", "English and Arabic", "French and Swahili", "English and Portuguese"],
    correct: 0,
    explanation: "The presentation states that the working languages are English and French."
  },
  {
    id: 21,
    question: "In revision, which statement is accurate? When did the centralized English Customs system begin according to the presentation?",
    options: ["In 1298 when collectors were first appointed", "In 1203-1204 during the reign of King John II", "In 1643 during the English civil war", "In 1825 after legislative consolidation"],
    correct: 1,
    explanation: "The Europe slide states the centralized English Customs system started in 1203-4."
  },
  {
    id: 22,
    question: "Which EACCMA sections are associated with customs areas in the presentation?",
    options: ["Sections 34 and 73", "Sections 229 and 231", "Sections 156 and 7", "Sections 11 and 12"],
    correct: 3,
    explanation: "The customs areas slide references EACCMA sections 11 and 12."
  },
  {
    id: 23,
    question: "Which option best reflects the presentation? By 1900, what scale had the Chinese customs system reached according to the presentation?",
    options: ["63 customs ports only on the US-Canada border", "151 staff in a single secretariat in Brussels", "About 20,000 people working in 40 main custom houses across China in a unified tax system", "A three-country customs union with common currency"],
    correct: 2,
    explanation: "The Asia slide states this scale for the Chinese system."
  },
  {
    id: 24,
    question: "In revision, which statement is accurate? Which facilitation incentives or arrangements are mentioned in the presentation?",
    options: ["SEZ, EPZ, EPAs, AfCFTA, AGOA, EAC, and COMESA", "Only anti-dumping duties and countervailing duties", "Only warrant of distress procedures", "Only domestic excise rebates"],
    correct: 0,
    explanation: "These are listed on the trade facilitation slide."
  },
  {
    id: 25,
    question: "Which EACCMA sections are associated with customs areas in the presentation?",
    options: ["Sections 156 and 7", "Sections 34 and 73", "Sections 229 and 231", "Sections 11 and 12"],
    correct: 3,
    explanation: "The customs areas slide references EACCMA sections 11 and 12."
  },
  {
    id: 26,
    question: "Which option best reflects the presentation? Which EACCMA sections are linked to customs entry in the presentation?",
    options: ["Sections 11 and 12", "Sections 34, 73, and 94", "Sections 120 and 130", "Sections 156 and 159"],
    correct: 1,
    explanation: "The customs declaration slide identifies sections 34, 73, and 94."
  },
  {
    id: 27,
    question: "In revision, which statement is accurate? How does the presentation describe EACCMA 2004?",
    options: ["As the principal law on Customs used in Kenya and EAC partner states that have joined the Customs Union", "As a historical European customs treaty only", "As a non-binding guideline for private traders", "As a body that replaced all regulations"],
    correct: 0,
    explanation: "The EACCMA slide calls it the principal law on Customs."
  },
  {
    id: 28,
    question: "What is the main goal of Smart Customs of the future according to the presentation?",
    options: ["To remove all customs control entirely", "To focus solely on monarchy-era revenue collection", "To minimize customs clearance time and costs while intelligently managing inbound and outbound goods and vehicles", "To return permanently to only manual declarations"],
    correct: 2,
    explanation: "The Smart Customs slide states this overarching goal."
  },
  {
    id: 29,
    question: "Which option best reflects the presentation? Which combination correctly reflects features of East African customs in the presentation?",
    options: ["Only one port allowed per country; no common tariff; no free movement", "Free movement of goods, capital and labor; free trade in East African origin products; common administration of transport and communication", "Replacement of customs duties with only direct taxes", "Full prohibition of internal trade; end of currency systems; no common administration"],
    correct: 1,
    explanation: "These features are listed together on the presentation slides."
  },
  {
    id: 30,
    question: "In revision, which statement is accurate? When were English collectors of Customs first appointed?",
    options: ["In 1643", "In 1203", "In 1298", "In 1823"],
    correct: 2,
    explanation: "The presentation gives 1298 as the first appointment of English collectors of Customs."
  },
  {
    id: 31,
    question: "When did the centralized English Customs system begin according to the presentation?",
    options: ["In 1203-1204 during the reign of King John II", "In 1825 after legislative consolidation", "In 1298 when collectors were first appointed", "In 1643 during the English civil war"],
    correct: 0,
    explanation: "The Europe slide states the centralized English Customs system started in 1203-4."
  },
  {
    id: 32,
    question: "Which option best reflects the presentation? Which is a key feature of East African customs mentioned in the presentation?",
    options: ["Mandatory abolition of all border stations", "No role for customs statistics", "No movement of goods within East Africa", "Single collection center of import duty at the point of entry"],
    correct: 3,
    explanation: "The features slide lists single collection center at the point of entry."
  },
  {
    id: 33,
    question: "In revision, which statement is accurate? Which combination correctly reflects features of East African customs in the presentation?",
    options: ["Free movement of goods, capital and labor; free trade in East African origin products; common administration of transport and communication", "Only one port allowed per country; no common tariff; no free movement", "Full prohibition of internal trade; end of currency systems; no common administration", "Replacement of customs duties with only direct taxes"],
    correct: 0,
    explanation: "These features are listed together on the presentation slides."
  },
  {
    id: 34,
    question: "What is the main goal of Smart Customs of the future according to the presentation?",
    options: ["To focus solely on monarchy-era revenue collection", "To return permanently to only manual declarations", "To minimize customs clearance time and costs while intelligently managing inbound and outbound goods and vehicles", "To remove all customs control entirely"],
    correct: 2,
    explanation: "The Smart Customs slide states this overarching goal."
  },
  {
    id: 35,
    question: "Which option best reflects the presentation? What is one of the stated objectives of the Tax and Customs Theory course?",
    options: ["To focus exclusively on East African ports and airports", "To train only on tariff computation and valuation schedules", "To replace all customs laws with administrative practice", "To define Customs, explain the historical evolution of Customs, explain the evolution of modern Customs administrations, and discuss future roles of Customs administrations"],
    correct: 3,
    explanation: "The objectives slide lists these four broad outcomes."
  },
  {
    id: 36,
    question: "In revision, which statement is accurate? Which shift is highlighted in the recap slide as part of the evolution of customs administrations?",
    options: ["From automation back to purely manual systems", "From manual declarations to automated customs systems", "From international trade to no trade at all", "From statistics collection to no records"],
    correct: 1,
    explanation: "The recap slide specifically contrasts manual declarations with automated systems."
  },
  {
    id: 37,
    question: "What is customs control according to the presentation?",
    options: ["Measures put in place to ensure compliance with customs laws and regulate movement of resources from, into, and within a country", "The process of collecting only direct taxes on income", "The abolition of all border procedures", "A system used only for customs statistics"],
    correct: 0,
    explanation: "This is the definition given on the customs control slide."
  },
  {
    id: 38,
    question: "Which option best reflects the presentation? When were English collectors of Customs first appointed?",
    options: ["In 1203", "In 1643", "In 1823", "In 1298"],
    correct: 3,
    explanation: "The presentation gives 1298 as the first appointment of English collectors of Customs."
  },
  {
    id: 39,
    question: "In revision, which statement is accurate? Which is one of the additional legal references listed at the end of the presentation?",
    options: ["The private sector civil society charter", "The Revised Kyoto Convention", "Only the Ghana Customs Preventive Service order", "The 1643 English ordinance only"],
    correct: 1,
    explanation: "The final slide lists the Revised Kyoto Convention among other legal references."
  },
  {
    id: 40,
    question: "How does section 2 of EACCMA, 2004 define Customs?",
    options: ["As only border stations and customs warehouses", "As the World Customs Organization Secretariat", "As the Customs Departments of the Partner States", "As all tax authorities in Africa"],
    correct: 2,
    explanation: "The presentation quotes section 2 of EACCMA, 2004 defining Customs or the Customs as the Customs Departments of the Partner States."
  },
  {
    id: 41,
    question: "Which option best reflects the presentation? Which set correctly reflects customs tax collection activities in the presentation?",
    options: ["Auction, mediation, court sentencing, and political negotiation", "Only import licensing and police patrols", "Only valuation and warehouse rent collection", "Valuation, verification of trading documents, classification, computation of taxes, checking declarations, and monitoring exemptions"],
    correct: 3,
    explanation: "These six items are listed on the tax collection slide."
  },
  {
    id: 42,
    question: "In revision, which statement is accurate? Which is one of the additional legal references listed at the end of the presentation?",
    options: ["The 1643 English ordinance only", "The Revised Kyoto Convention", "Only the Ghana Customs Preventive Service order", "The private sector civil society charter"],
    correct: 1,
    explanation: "The final slide lists the Revised Kyoto Convention among other legal references."
  },
  {
    id: 43,
    question: "What governs all customs work and activities according to the presentation?",
    options: ["Only oral instructions from officers", "Only private trade customs", "Law, including international agreements, statutes, and administrative instructions", "Only court decisions from foreign countries"],
    correct: 2,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 44,
    question: "Which option best reflects the presentation? Why did customs duties become reliable sources of public revenue in earlier times?",
    options: ["Because they were relatively easy to collect at specified points such as bridges and gates", "Because customs applied only to luxury goods", "Because customs officers worked without rulers", "Because all internal taxes had already been abolished"],
    correct: 0,
    explanation: "The presentation says customs duties were easy to collect and became reliable sources of public revenue."
  },
  {
    id: 45,
    question: "In revision, which statement is accurate? What problem in the period after the First World War pushed countries and traders toward customs cooperation?",
    options: ["All tariffs disappeared and customs lost relevance", "Trade was regulated only by private contracts", "Border controls were fully removed worldwide", "Countries became highly protective, imposed high tariffs, and introduced complex customs procedures"],
    correct: 3,
    explanation: "The slides describe post-war protectionism and procedural complexity."
  },
  {
    id: 46,
    question: "How does section 2 of EACCMA, 2004 define Customs?",
    options: ["As the World Customs Organization Secretariat", "As all tax authorities in Africa", "As the Customs Departments of the Partner States", "As only border stations and customs warehouses"],
    correct: 2,
    explanation: "The presentation quotes section 2 of EACCMA, 2004 defining Customs or the Customs as the Customs Departments of the Partner States."
  },
  {
    id: 47,
    question: "Which option best reflects the presentation? Which set correctly reflects customs tax collection activities in the presentation?",
    options: ["Auction, mediation, court sentencing, and political negotiation", "Valuation, verification of trading documents, classification, computation of taxes, checking declarations, and monitoring exemptions", "Only valuation and warehouse rent collection", "Only import licensing and police patrols"],
    correct: 1,
    explanation: "These six items are listed on the tax collection slide."
  },
  {
    id: 48,
    question: "In revision, which statement is accurate? Which activity is part of customs assessment and collection of taxes on imported goods?",
    options: ["Valuation of goods", "Judging all commercial disputes", "Replacing the HS nomenclature", "Drafting national constitutions"],
    correct: 0,
    explanation: "The assessment and collection slide lists valuation as one of the steps."
  },
  {
    id: 49,
    question: "Scenario variant: Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Common administration of transport only", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards", "Collection of statistics only", "Only exchange rate control policy"],
    correct: 1,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 50,
    question: "Which option best reflects the presentation? What general vessel reporting rule is stated in the presentation?",
    options: ["Reports are made only after discharge", "Reports are required only for exports", "Reports are made only after valuation", "Reports are generally made 24 hours in advance for vessels"],
    correct: 3,
    explanation: "The slide says generally 24 hours for vessels."
  },
];
