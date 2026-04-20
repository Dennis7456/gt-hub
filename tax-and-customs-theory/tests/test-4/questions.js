const QUESTIONS = [
  {
    id: 1,
    question: "In revision, which statement is accurate? What is a non-tariff barrier according to the presentation?",
    options: ["A court-issued warrant of distress", "A customs officer declaration", "A customs duty computed on gross weight", "A condition or restriction imposed to regulate trade without being a direct tax"],
    correct: 3,
    explanation: "The presentation distinguishes non-tariff barriers from tariff barriers."
  },
  {
    id: 2,
    question: "Who is obliged by law to submit inward and outward reports according to the slides?",
    options: ["The owner or agent of the means of conveyance", "Only the Customs Co-operation Council", "Only the WCO Secretariat", "Only the passenger with personal baggage"],
    correct: 0,
    explanation: "The inward/outward reports slide places the obligation on the owner or agent."
  },
  {
    id: 3,
    question: "Which option best reflects the presentation? Which broader themes are associated with Smart Customs of the future?",
    options: ["End of all border laws, abolition of technology, and no training", "Replacement of customs with only private stakeholders", "Green customs, strategic trade control, integrity, international cooperation, information sharing, and capacity building", "Exclusive focus on monarchy tribute systems"],
    correct: 2,
    explanation: "These themes are listed under Smart Customs."
  },
  {
    id: 4,
    question: "After war, traders complain that tariffs are high and procedures are too complex across many countries. Which historical development in the presentation most directly answers that problem?",
    options: ["Creation of physical barriers like trenches", "The rise of international customs cooperation aimed at reducing taxes and harmonizing procedures", "The collapse of the EAC in 1977", "A return to gifts for rulers"],
    correct: 1,
    explanation: "The development slides explain that international cooperation grew to reduce taxes and harmonize customs procedures."
  },
  {
    id: 5,
    question: "Which EACCMA schedule covers valuation of imported goods?",
    options: ["The 2nd Schedule", "The 5th Schedule", "The 6th Schedule", "The 4th Schedule"],
    correct: 3,
    explanation: "The schedules list identifies the Fourth Schedule as valuation of imported goods."
  },
  {
    id: 6,
    question: "Which option best reflects the presentation? Which statement best reflects the presentation's explanation of goods under customs control?",
    options: ["They may be examined by Customs at any time", "They can never be examined once entered", "They are only relevant to statistics and not enforcement", "They cease to be regulated after arrival"],
    correct: 0,
    explanation: "The presentation says goods under customs control may be examined at any time."
  },
  {
    id: 7,
    question: "In revision, which statement is accurate? Which export-related goods are under customs control according to the presentation?",
    options: ["Only exports that are never restricted", "All dutiable exports from when they are brought to a place for exportation until exportation", "Only exports after final sale", "Only exports already cleared from customs control"],
    correct: 1,
    explanation: "The presentation lists dutiable exports in this way."
  },
  {
    id: 8,
    question: "A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A tariff barrier", "A physical barrier only", "A non-tariff barrier", "A customs union feature"],
    correct: 2,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 9,
    question: "Which option best reflects the presentation? When was the Customs Act drafted and operationalized in Canada according to the slides?",
    options: ["In 1845", "In 1868", "In 1767", "In 1788"],
    correct: 1,
    explanation: "The presentation gives 1868 for the drafting and operationalization of the Customs Act in Canada."
  },
  {
    id: 10,
    question: "In revision, which statement is accurate? Why is 26 January celebrated as International Customs Day?",
    options: ["Because it marks the inaugural session of the CCC held on 26 January 1953", "Because that is when the Customs Act in Canada came into force", "Because the EAC collapsed on that date", "Because the HS nomenclature was first drafted then"],
    correct: 0,
    explanation: "The presentation links 26 January 1953 to International Customs Day."
  },
  {
    id: 11,
    question: "Who must make declaration of goods according to the presentation?",
    options: ["Only exporters using the red channel", "Only warehouse keepers", "Only members of the WCO Council", "Every importer in the inward report"],
    correct: 3,
    explanation: "The customs declaration slide states every importer in the inward report must declare goods."
  },
  {
    id: 12,
    question: "Which option best reflects the presentation? Which EACCMA section is linked to goods under customs control in the presentation?",
    options: ["Section 34", "Section 2", "Section 16", "Section 229"],
    correct: 2,
    explanation: "The goods under customs control slide refers to section 16."
  },
  {
    id: 13,
    question: "In revision, which statement is accurate? By 1900, what scale had the Chinese customs system reached according to the presentation?",
    options: ["A three-country customs union with common currency", "About 20,000 people working in 40 main custom houses across China in a unified tax system", "151 staff in a single secretariat in Brussels", "63 customs ports only on the US-Canada border"],
    correct: 1,
    explanation: "The Asia slide states this scale for the Chinese system."
  },
  {
    id: 14,
    question: "A trader asks why a regional customs union would prefer a single collection point for import duty. Which answer best reflects the East African customs features in the presentation?",
    options: ["Because it replaces the need for any border control", "Because it guarantees no disputes over benefit sharing", "Because a single collection point supports a common customs territory and simplifies movement within the union", "Because it eliminates all need for customs law"],
    correct: 2,
    explanation: "The East African customs features slide links single collection center to the regional customs arrangement."
  },
  {
    id: 15,
    question: "Which option best reflects the presentation? What was created in Ghana in 1897 to strengthen customs enforcement?",
    options: ["The Customs Preventive Service, a semi-military outfit", "The Common External Tariff", "The World Customs Organization", "The EAC Customs Union"],
    correct: 0,
    explanation: "The Ghana slide notes the creation of the Customs Preventive Service in 1897."
  },
  {
    id: 16,
    question: "In revision, which statement is accurate? How many customs ports had been established in Canada by 1845?",
    options: ["194", "151", "20", "63"],
    correct: 3,
    explanation: "The presentation states that 63 customs ports in Canada had been established by 1845."
  },
  {
    id: 17,
    question: "Which is one core role of Customs highlighted in the presentation?",
    options: ["Abolition of all prohibitions and restrictions", "Facilitation of legitimate trade", "Replacement of all ministries of finance", "Management of only domestic direct taxes"],
    correct: 1,
    explanation: "The roles slide begins with facilitation of legitimate trade."
  },
  {
    id: 18,
    question: "Which option best reflects the presentation? What is the World Customs Organization according to the presentation?",
    options: ["A private trade association for brokers", "A regional customs court for East Africa", "An independent intergovernmental body whose mission is to improve the administration of Customs, headquartered in Brussels", "A department of the WTO"],
    correct: 2,
    explanation: "The WCO slide defines it as an independent intergovernmental body."
  },
  {
    id: 19,
    question: "In revision, which statement is accurate? Which issue is specifically included under Customs protection of society and industry?",
    options: ["Only school curriculum reform", "Only internal municipal licensing", "Only warehouse rent disputes", "Counterfeits and contrabands"],
    correct: 3,
    explanation: "Counterfeits and contrabands appear on the protection slide."
  },
  {
    id: 20,
    question: "Which EACCMA schedule covers the exemption regime?",
    options: ["The 5th Schedule", "The 6th Schedule", "The 3rd Schedule", "The 1st Schedule"],
    correct: 0,
    explanation: "The schedules list identifies the Fifth Schedule as the exemption regime."
  },
  {
    id: 21,
    question: "Which option best reflects the presentation? When was the convention establishing the Customs Cooperation Council signed?",
    options: ["On 4 November 1952 in London", "In 1994 in Brussels", "On 15 December 1950 in Brussels", "On 26 January 1953 in Paris"],
    correct: 2,
    explanation: "The slides state the convention was signed on 15 December 1950 in Brussels."
  },
  {
    id: 22,
    question: "In revision, which statement is accurate? When did international cooperation in customs matters begin under the League of Nations according to the slides?",
    options: ["In 1924", "In 1994", "In 1890", "In 1948"],
    correct: 0,
    explanation: "The development slide says cooperation began under the League of Nations in 1924."
  },
  {
    id: 23,
    question: "Scenario variant: An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["Only statistics collection requires law", "All customs work and activities are governed by law, including agreements, statutes, and administrative instructions", "Only international bodies govern customs work, not national law", "Only physical barriers matter; law is secondary"],
    correct: 1,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 24,
    question: "Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Only exchange rate control policy", "Collection of statistics only", "Common administration of transport only", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards"],
    correct: 3,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 25,
    question: "In revision, which statement is accurate? Why is 26 January celebrated as International Customs Day?",
    options: ["Because that is when the Customs Act in Canada came into force", "Because it marks the inaugural session of the CCC held on 26 January 1953", "Because the HS nomenclature was first drafted then", "Because the EAC collapsed on that date"],
    correct: 1,
    explanation: "The presentation links 26 January 1953 to International Customs Day."
  },
  {
    id: 26,
    question: "What is one of the stated objectives of the Tax and Customs Theory course?",
    options: ["To focus exclusively on East African ports and airports", "To train only on tariff computation and valuation schedules", "To define Customs, explain the historical evolution of Customs, explain the evolution of modern Customs administrations, and discuss future roles of Customs administrations", "To replace all customs laws with administrative practice"],
    correct: 2,
    explanation: "The objectives slide lists these four broad outcomes."
  },
  {
    id: 27,
    question: "Which option best reflects the presentation? When was the convention establishing the Customs Cooperation Council signed?",
    options: ["On 15 December 1950 in Brussels", "On 4 November 1952 in London", "In 1994 in Brussels", "On 26 January 1953 in Paris"],
    correct: 0,
    explanation: "The slides state the convention was signed on 15 December 1950 in Brussels."
  },
  {
    id: 28,
    question: "Imported goods have arrived but duty has not yet been paid, and Customs wants to inspect them again. Which principle from the slides supports this?",
    options: ["Goods become fully private immediately on arrival", "Only exported goods may be examined", "Inspection is allowed only after a court appeal", "Goods under customs control may be examined by Customs at any time"],
    correct: 3,
    explanation: "The slides explicitly state that goods deemed under customs control may be examined at any time."
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
    question: "Which option best reflects the presentation? What is a tariff barrier according to the presentation?",
    options: ["A customs warehouse used for seizures", "A rules-of-origin certificate", "A physical trench at a border", "A tax on imports or exports"],
    correct: 3,
    explanation: "The legislative barriers slide defines tariff barriers as taxes on imports or exports."
  },
  {
    id: 31,
    question: "In revision, which statement is accurate? Why does Customs collect statistics according to the presentation?",
    options: ["Only to determine judicial appeals", "For international and regional trade records, money movements, internal planning, and balance of trade computation", "Only to punish traders", "Only to support private warehouses"],
    correct: 1,
    explanation: "The statistics slide lists these uses."
  },
  {
    id: 32,
    question: "What is customs control according to the presentation?",
    options: ["Measures put in place to ensure compliance with customs laws and regulate movement of resources from, into, and within a country", "The abolition of all border procedures", "The process of collecting only direct taxes on income", "A system used only for customs statistics"],
    correct: 0,
    explanation: "This is the definition given on the customs control slide."
  },
  {
    id: 33,
    question: "Scenario variant: After war, traders complain that tariffs are high and procedures are too complex across many countries. Which historical development in the presentation most directly answers that problem?",
    options: ["Creation of physical barriers like trenches", "A return to gifts for rulers", "The collapse of the EAC in 1977", "The rise of international customs cooperation aimed at reducing taxes and harmonizing procedures"],
    correct: 3,
    explanation: "The development slides explain that international cooperation grew to reduce taxes and harmonize customs procedures."
  },
  {
    id: 34,
    question: "In revision, which statement is accurate? When did Tanganyika join the Common Customs Administration?",
    options: ["In 1967", "In 1984", "In 1927", "In 1917"],
    correct: 2,
    explanation: "The East Africa timeline gives 1927."
  },
  {
    id: 35,
    question: "Scenario variant: An administration needs guidance on HS classification, valuation, and rules of origin while modernizing customs systems. Which institution from the presentation is most relevant?",
    options: ["The World Customs Organization", "Only the 1643 English Board of Customs", "The Customs Preventive Service of Ghana", "The EAC Mediation Agreement"],
    correct: 0,
    explanation: "The WCO is presented as the key body for HS, valuation, rules of origin, and modernization support."
  },
  {
    id: 36,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only historical tribute collection", "Facilitation of legitimate trade", "Only derivation-based revenue sharing", "Only criminal punishment of smugglers"],
    correct: 1,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 37,
    question: "In revision, which statement is accurate? Which broader themes are associated with Smart Customs of the future?",
    options: ["Green customs, strategic trade control, integrity, international cooperation, information sharing, and capacity building", "End of all border laws, abolition of technology, and no training", "Exclusive focus on monarchy tribute systems", "Replacement of customs with only private stakeholders"],
    correct: 0,
    explanation: "These themes are listed under Smart Customs."
  },
  {
    id: 38,
    question: "A trader asks why a regional customs union would prefer a single collection point for import duty. Which answer best reflects the East African customs features in the presentation?",
    options: ["Because it replaces the need for any border control", "Because a single collection point supports a common customs territory and simplifies movement within the union", "Because it eliminates all need for customs law", "Because it guarantees no disputes over benefit sharing"],
    correct: 1,
    explanation: "The East African customs features slide links single collection center to the regional customs arrangement."
  },
  {
    id: 39,
    question: "Scenario variant: A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["Modern Customs has abandoned all revenue roles", "Modern Customs now focuses only on physical barriers", "There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control", "Modern Customs operates without documents or systems"],
    correct: 2,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 40,
    question: "An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["Only physical barriers matter; law is secondary", "Only statistics collection requires law", "Only international bodies govern customs work, not national law", "All customs work and activities are governed by law, including agreements, statutes, and administrative instructions"],
    correct: 3,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 41,
    question: "Which export-related goods are under customs control according to the presentation?",
    options: ["Only exports already cleared from customs control", "Only exports that are never restricted", "All dutiable exports from when they are brought to a place for exportation until exportation", "Only exports after final sale"],
    correct: 2,
    explanation: "The presentation lists dutiable exports in this way."
  },
  {
    id: 42,
    question: "Imported goods have arrived but duty has not yet been paid, and Customs wants to inspect them again. Which principle from the slides supports this?",
    options: ["Goods under customs control may be examined by Customs at any time", "Only exported goods may be examined", "Inspection is allowed only after a court appeal", "Goods become fully private immediately on arrival"],
    correct: 0,
    explanation: "The slides explicitly state that goods deemed under customs control may be examined at any time."
  },
  {
    id: 43,
    question: "Scenario variant: Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Collection of statistics only", "Only exchange rate control policy", "Common administration of transport only", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards"],
    correct: 3,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 44,
    question: "Who must make declaration of goods according to the presentation?",
    options: ["Only exporters using the red channel", "Every importer in the inward report", "Only members of the WCO Council", "Only warehouse keepers"],
    correct: 1,
    explanation: "The customs declaration slide states every importer in the inward report must declare goods."
  },
  {
    id: 45,
    question: "Which option best reflects the presentation? When was the Department of Customs established in Ghana according to the presentation?",
    options: ["In 1967", "In 1947", "In 1839", "In 1897"],
    correct: 2,
    explanation: "The Africa slide gives 1839."
  },
  {
    id: 46,
    question: "In revision, which statement is accurate? Where was the first interior Customs office regulating trade along the US-Canada border established according to the presentation?",
    options: ["At St. Jean, Quebec, in 1788", "At Cape Coast in 1839", "At Ottawa in 1868", "At Massachusetts in 1767"],
    correct: 0,
    explanation: "The North America slide identifies St. Jean, Quebec in 1788."
  },
  {
    id: 47,
    question: "How did taxation begin in early communities according to the presentation?",
    options: ["Only priests collected customs tariffs at temples", "Merchants created a customs union before rulers intervened", "Kings imposed VAT on all goods at the seaport", "Members of communities gave their chiefs or leaders gifts in return for leadership"],
    correct: 3,
    explanation: "The slides explain taxation began with gifts to chiefs or leaders."
  },
  {
    id: 48,
    question: "Which option best reflects the presentation? Which combination of technologies is linked to Smart Customs in the presentation?",
    options: ["Only common currency systems", "IoT tools such as drones, smart gates, and smart seals together with AI, machine learning, and data analytics", "Only trenches and walls", "Only paper ledgers and manual declaration books"],
    correct: 1,
    explanation: "The Smart Customs slide mentions these tools and technologies."
  },
  {
    id: 49,
    question: "In revision, which statement is accurate? Which is listed as one of the key legal authorities for customs work?",
    options: ["English Board of Customs Ordinance, 1643", "Only private stakeholder agreements", "EAC Customs Management Act, 2004", "Canadian Customs Act, 1868 as East African principal law"],
    correct: 2,
    explanation: "EACCMA 2004 is listed as a principal legal authority."
  },
  {
    id: 50,
    question: "Which customs-stakeholder partnership concept is mentioned in the facilitation slide?",
    options: ["Common currency only", "Police court jurisdiction", "Derivation allocation", "Authorized Economic Operator partnership"],
    correct: 3,
    explanation: "The facilitation slide mentions working in partnership with stakeholders (AEO)."
  },
];
