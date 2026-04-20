const QUESTIONS = [
  {
    id: 1,
    question: "In revision, which statement is accurate? Which WCO objective focuses on organizational development?",
    options: ["To strengthen capacity building for effective and efficient customs administrations", "To remove the need for customs laws", "To prohibit all international trade", "To centralize all customs under one country"],
    correct: 0,
    explanation: "The slides describe capacity building as the organizational development package."
  },
  {
    id: 2,
    question: "An administration needs guidance on HS classification, valuation, and rules of origin while modernizing customs systems. Which institution from the presentation is most relevant?",
    options: ["Only the 1643 English Board of Customs", "The EAC Mediation Agreement", "The World Customs Organization", "The Customs Preventive Service of Ghana"],
    correct: 2,
    explanation: "The WCO is presented as the key body for HS, valuation, rules of origin, and modernization support."
  },
  {
    id: 3,
    question: "Scenario variant: A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["Modern Customs has abandoned all revenue roles", "Modern Customs now focuses only on physical barriers", "Modern Customs operates without documents or systems", "There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control"],
    correct: 3,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 4,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only criminal punishment of smugglers", "Facilitation of legitimate trade", "Only derivation-based revenue sharing", "Only historical tribute collection"],
    correct: 1,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 5,
    question: "What intellectual property role of Customs is specifically mentioned?",
    options: ["Enforcing intellectual property rights", "Writing copyright legislation", "Granting patents to inventors", "Licensing trademarks directly"],
    correct: 0,
    explanation: "The roles slide explicitly mentions enforcing IPR."
  },
  {
    id: 6,
    question: "Which option best reflects the presentation? When did international cooperation in customs matters begin under the League of Nations according to the slides?",
    options: ["In 1948", "In 1994", "In 1924", "In 1890"],
    correct: 2,
    explanation: "The development slide says cooperation began under the League of Nations in 1924."
  },
  {
    id: 7,
    question: "Scenario variant: A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only derivation-based revenue sharing", "Facilitation of legitimate trade", "Only historical tribute collection", "Only criminal punishment of smugglers"],
    correct: 1,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 8,
    question: "A customs authority deploys drones, smart gates, smart seals, AI, and data analytics to reduce clearance time while improving control. Which slide theme does this illustrate most directly?",
    options: ["Old customs entry gates only", "Only derivation-based revenue allocation", "Traditional monarchy taxation", "Smart Customs of the future"],
    correct: 3,
    explanation: "These technologies are specifically listed under Smart Customs."
  },
  {
    id: 9,
    question: "Scenario variant: An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["All customs work and activities are governed by law, including agreements, statutes, and administrative instructions", "Only physical barriers matter; law is secondary", "Only statistics collection requires law", "Only international bodies govern customs work, not national law"],
    correct: 0,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 10,
    question: "In revision, which statement is accurate? What is the main goal of Smart Customs of the future according to the presentation?",
    options: ["To return permanently to only manual declarations", "To remove all customs control entirely", "To minimize customs clearance time and costs while intelligently managing inbound and outbound goods and vehicles", "To focus solely on monarchy-era revenue collection"],
    correct: 2,
    explanation: "The Smart Customs slide states this overarching goal."
  },
  {
    id: 11,
    question: "Scenario variant: A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A customs union feature", "A non-tariff barrier", "A physical barrier only", "A tariff barrier"],
    correct: 1,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 12,
    question: "After war, traders complain that tariffs are high and procedures are too complex across many countries. Which historical development in the presentation most directly answers that problem?",
    options: ["The collapse of the EAC in 1977", "A return to gifts for rulers", "Creation of physical barriers like trenches", "The rise of international customs cooperation aimed at reducing taxes and harmonizing procedures"],
    correct: 3,
    explanation: "The development slides explain that international cooperation grew to reduce taxes and harmonize customs procedures."
  },
  {
    id: 13,
    question: "In revision, which statement is accurate? Which is one disadvantage of customs barriers listed in the presentation?",
    options: ["Increase in the cost of transactions", "Guaranteed equality of trade benefits", "Permanent elimination of inefficiency", "Automatic rise in investment opportunities"],
    correct: 0,
    explanation: "The cons of barriers slide lists increased transaction costs."
  },
  {
    id: 14,
    question: "Which EACCMA schedule covers the exemption regime?",
    options: ["The 1st Schedule", "The 5th Schedule", "The 6th Schedule", "The 3rd Schedule"],
    correct: 1,
    explanation: "The schedules list identifies the Fifth Schedule as the exemption regime."
  },
  {
    id: 15,
    question: "Which option best reflects the presentation? Which EACCMA sections are linked to customs entry in the presentation?",
    options: ["Sections 11 and 12", "Sections 120 and 130", "Sections 156 and 159", "Sections 34, 73, and 94"],
    correct: 3,
    explanation: "The customs declaration slide identifies sections 34, 73, and 94."
  },
  {
    id: 16,
    question: "A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A customs union feature", "A tariff barrier", "A non-tariff barrier", "A physical barrier only"],
    correct: 2,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 17,
    question: "What began in East Africa in 1923 according to the presentation?",
    options: ["The Customs Preventive Service in Ghana", "The WCO working name", "The collapse of the EAC", "A single customs territory with a Common External Tariff and internal free trade"],
    correct: 3,
    explanation: "The slides note that internal free trade and a CET began in 1923."
  },
  {
    id: 18,
    question: "Which option best reflects the presentation? What is the basic rule on loading or unloading cargo before entry?",
    options: ["Loading is always allowed before entry if the goods are valuable", "No unloading or loading of cargo prior to entry", "Only vessel cargo must wait, but aircraft cargo need not", "Cargo may be loaded before entry if trade statistics have been collected"],
    correct: 1,
    explanation: "The customs declaration slide clearly states no unloading or loading prior to entry."
  },
  {
    id: 19,
    question: "In revision, which statement is accurate? Which important classification system does the WCO maintain?",
    options: ["The derivation benefit formula", "The customs preventive register of Ghana", "The International Harmonized System goods nomenclature", "The EAC Mediation Schedule"],
    correct: 2,
    explanation: "The WCO maintains the HS nomenclature."
  },
  {
    id: 20,
    question: "Why was the Chinese Maritime Customs Service founded in Shanghai in 1854?",
    options: ["Foreign consuls founded it to collect taxes from maritime traders during the Taiping Rebellion after local customs collectors had been driven out", "To manage only inland railway tariffs", "To replace the WCO in Asia", "To unify East African customs administration"],
    correct: 0,
    explanation: "The presentation explains the context of the Taiping Rebellion and displaced customs collectors."
  },
  {
    id: 21,
    question: "Scenario variant: An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["Only physical barriers matter; law is secondary", "Only international bodies govern customs work, not national law", "Only statistics collection requires law", "All customs work and activities are governed by law, including agreements, statutes, and administrative instructions"],
    correct: 3,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 22,
    question: "A trader asks why a regional customs union would prefer a single collection point for import duty. Which answer best reflects the East African customs features in the presentation?",
    options: ["Because it replaces the need for any border control", "Because a single collection point supports a common customs territory and simplifies movement within the union", "Because it guarantees no disputes over benefit sharing", "Because it eliminates all need for customs law"],
    correct: 1,
    explanation: "The East African customs features slide links single collection center to the regional customs arrangement."
  },
  {
    id: 23,
    question: "What body existed before a broader international customs body emerged, and what was its function?",
    options: ["The Union Internationale pour la Publication des Tariffs Douaniers, which published customs tariffs", "The League of Nations customs police, which patrolled all ports", "The EAC Council, which unified all world tariffs", "The WCO, which issued all national customs licences"],
    correct: 0,
    explanation: "The presentation states that this Brussels body published customs tariffs."
  },
  {
    id: 24,
    question: "Which option best reflects the presentation? Which additional factor contributed to the collapse of the EAC?",
    options: ["Overuse of non-intrusive inspection", "Too much private sector participation", "Continued disproportionate sharing of Community benefits among Partner States", "Excessive use of the green channel"],
    correct: 2,
    explanation: "The presentation says disproportionate benefit sharing contributed to collapse."
  },
  {
    id: 25,
    question: "Scenario variant: A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["Unloading is allowed first if valuation will be done later", "No unloading should occur before the report except with permission of Customs", "Immediate unloading is always allowed at the master's discretion", "Only aircraft must wait for reporting, not vessels"],
    correct: 1,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 26,
    question: "What was created in Ghana in 1897 to strengthen customs enforcement?",
    options: ["The Customs Preventive Service, a semi-military outfit", "The EAC Customs Union", "The Common External Tariff", "The World Customs Organization"],
    correct: 0,
    explanation: "The Ghana slide notes the creation of the Customs Preventive Service in 1897."
  },
  {
    id: 27,
    question: "Which option best reflects the presentation? Which export-related goods are under customs control according to the presentation?",
    options: ["Only exports already cleared from customs control", "Only exports that are never restricted", "All dutiable exports from when they are brought to a place for exportation until exportation", "Only exports after final sale"],
    correct: 2,
    explanation: "The presentation lists dutiable exports in this way."
  },
  {
    id: 28,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only criminal punishment of smugglers", "Only historical tribute collection", "Only derivation-based revenue sharing", "Facilitation of legitimate trade"],
    correct: 3,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 29,
    question: "Scenario variant: A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control", "Modern Customs now focuses only on physical barriers", "Modern Customs operates without documents or systems", "Modern Customs has abandoned all revenue roles"],
    correct: 0,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 30,
    question: "Which option best reflects the presentation? What began in East Africa in 1923 according to the presentation?",
    options: ["The Customs Preventive Service in Ghana", "A single customs territory with a Common External Tariff and internal free trade", "The collapse of the EAC", "The WCO working name"],
    correct: 1,
    explanation: "The slides note that internal free trade and a CET began in 1923."
  },
  {
    id: 31,
    question: "Scenario variant: A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only derivation-based revenue sharing", "Only historical tribute collection", "Only criminal punishment of smugglers", "Facilitation of legitimate trade"],
    correct: 3,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 32,
    question: "After war, traders complain that tariffs are high and procedures are too complex across many countries. Which historical development in the presentation most directly answers that problem?",
    options: ["The collapse of the EAC in 1977", "A return to gifts for rulers", "The rise of international customs cooperation aimed at reducing taxes and harmonizing procedures", "Creation of physical barriers like trenches"],
    correct: 2,
    explanation: "The development slides explain that international cooperation grew to reduce taxes and harmonize customs procedures."
  },
  {
    id: 33,
    question: "Which option best reflects the presentation? Which is an example of goods deemed to be under customs control according to the slides?",
    options: ["Only goods already sold at auction", "All imports from time of importation until delivery for home use or exportation", "Only diplomatic bags", "Only goods after final condemnation"],
    correct: 1,
    explanation: "This example is explicitly listed on the slides."
  },
  {
    id: 34,
    question: "A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["Immediate unloading is always allowed at the master's discretion", "Unloading is allowed first if valuation will be done later", "No unloading should occur before the report except with permission of Customs", "Only aircraft must wait for reporting, not vessels"],
    correct: 2,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 35,
    question: "Which is a key feature of East African customs mentioned in the presentation?",
    options: ["Mandatory abolition of all border stations", "No movement of goods within East Africa", "No role for customs statistics", "Single collection center of import duty at the point of entry"],
    correct: 3,
    explanation: "The features slide lists single collection center at the point of entry."
  },
  {
    id: 36,
    question: "Which option best reflects the presentation? Which EACCMA schedule covers the exemption regime?",
    options: ["The 5th Schedule", "The 3rd Schedule", "The 1st Schedule", "The 6th Schedule"],
    correct: 0,
    explanation: "The schedules list identifies the Fifth Schedule as the exemption regime."
  },
  {
    id: 37,
    question: "In revision, which statement is accurate? How did expanding trade contribute to the development of customs duties?",
    options: ["Traders voluntarily created a common customs currency", "Only returning traders paid nothing at all", "Customs duties were abolished to encourage movement", "Rulers made traders passing through their land pay a portion of goods as gifts or tribute"],
    correct: 3,
    explanation: "As trade expanded, rulers required traders passing through their territories to pay part of their goods."
  },
  {
    id: 38,
    question: "Which WCO objective focuses on organizational development?",
    options: ["To strengthen capacity building for effective and efficient customs administrations", "To prohibit all international trade", "To remove the need for customs laws", "To centralize all customs under one country"],
    correct: 0,
    explanation: "The slides describe capacity building as the organizational development package."
  },
  {
    id: 39,
    question: "Scenario variant: An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["Only statistics collection requires law", "All customs work and activities are governed by law, including agreements, statutes, and administrative instructions", "Only international bodies govern customs work, not national law", "Only physical barriers matter; law is secondary"],
    correct: 1,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 40,
    question: "A trader asks why a regional customs union would prefer a single collection point for import duty. Which answer best reflects the East African customs features in the presentation?",
    options: ["Because it replaces the need for any border control", "Because it guarantees no disputes over benefit sharing", "Because a single collection point supports a common customs territory and simplifies movement within the union", "Because it eliminates all need for customs law"],
    correct: 2,
    explanation: "The East African customs features slide links single collection center to the regional customs arrangement."
  },
  {
    id: 41,
    question: "Scenario variant: A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A customs union feature", "A physical barrier only", "A tariff barrier", "A non-tariff barrier"],
    correct: 3,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 42,
    question: "Which option best reflects the presentation? Which combination correctly reflects features of East African customs in the presentation?",
    options: ["Free movement of goods, capital and labor; free trade in East African origin products; common administration of transport and communication", "Full prohibition of internal trade; end of currency systems; no common administration", "Only one port allowed per country; no common tariff; no free movement", "Replacement of customs duties with only direct taxes"],
    correct: 0,
    explanation: "These features are listed together on the presentation slides."
  },
  {
    id: 43,
    question: "Scenario variant: A trader asks why a regional customs union would prefer a single collection point for import duty. Which answer best reflects the East African customs features in the presentation?",
    options: ["Because it eliminates all need for customs law", "Because a single collection point supports a common customs territory and simplifies movement within the union", "Because it guarantees no disputes over benefit sharing", "Because it replaces the need for any border control"],
    correct: 1,
    explanation: "The East African customs features slide links single collection center to the regional customs arrangement."
  },
  {
    id: 44,
    question: "What are the working languages of the WCO according to the presentation?",
    options: ["English and Arabic", "French and Swahili", "English and French", "English and Portuguese"],
    correct: 2,
    explanation: "The presentation states that the working languages are English and French."
  },
  {
    id: 45,
    question: "Which option best reflects the presentation? What is a non-tariff barrier according to the presentation?",
    options: ["A court-issued warrant of distress", "A customs duty computed on gross weight", "A customs officer declaration", "A condition or restriction imposed to regulate trade without being a direct tax"],
    correct: 3,
    explanation: "The presentation distinguishes non-tariff barriers from tariff barriers."
  },
  {
    id: 46,
    question: "In revision, which statement is accurate? Which export-related goods are under customs control according to the presentation?",
    options: ["Only exports that are never restricted", "All dutiable exports from when they are brought to a place for exportation until exportation", "Only exports after final sale", "Only exports already cleared from customs control"],
    correct: 1,
    explanation: "The presentation lists dutiable exports in this way."
  },
  {
    id: 47,
    question: "Scenario variant: An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["Only international bodies govern customs work, not national law", "Only physical barriers matter; law is secondary", "All customs work and activities are governed by law, including agreements, statutes, and administrative instructions", "Only statistics collection requires law"],
    correct: 2,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 48,
    question: "Which option best reflects the presentation? When was the convention establishing the Customs Cooperation Council signed?",
    options: ["On 15 December 1950 in Brussels", "On 4 November 1952 in London", "On 26 January 1953 in Paris", "In 1994 in Brussels"],
    correct: 0,
    explanation: "The slides state the convention was signed on 15 December 1950 in Brussels."
  },
  {
    id: 49,
    question: "In revision, which statement is accurate? Which important classification system does the WCO maintain?",
    options: ["The derivation benefit formula", "The International Harmonized System goods nomenclature", "The EAC Mediation Schedule", "The customs preventive register of Ghana"],
    correct: 1,
    explanation: "The WCO maintains the HS nomenclature."
  },
  {
    id: 50,
    question: "A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A tariff barrier", "A customs union feature", "A physical barrier only", "A non-tariff barrier"],
    correct: 3,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
];
