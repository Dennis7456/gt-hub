const QUESTIONS = [
  {
    id: 1,
    question: "Which option best reflects the presentation? When was a Customs Union between Kenya and Uganda formed under colonial rule?",
    options: ["In 1917", "In 1967", "In 1927", "In 1923"],
    correct: 0,
    explanation: "The East Africa historical foundation slide states 1917."
  },
  {
    id: 2,
    question: "In revision, which statement is accurate? Why was the Chinese Maritime Customs Service founded in Shanghai in 1854?",
    options: ["To unify East African customs administration", "To replace the WCO in Asia", "To manage only inland railway tariffs", "Foreign consuls founded it to collect taxes from maritime traders during the Taiping Rebellion after local customs collectors had been driven out"],
    correct: 3,
    explanation: "The presentation explains the context of the Taiping Rebellion and displaced customs collectors."
  },
  {
    id: 3,
    question: "What major paradigm shift in customs purpose is highlighted in the recap slide?",
    options: ["From Customs to private shipping only", "From trade facilitation to abolition of trade", "From revenue collection to supply chain security and protection of the environment", "From laws to purely informal practice"],
    correct: 2,
    explanation: "The recap slide notes this broader modern customs paradigm shift."
  },
  {
    id: 4,
    question: "Which option best reflects the presentation? What is the governing body of the WCO?",
    options: ["The Secretary General alone", "The Council", "The Secretariat", "The East African Legislative Assembly"],
    correct: 1,
    explanation: "The WCO Council is the governing body."
  },
  {
    id: 5,
    question: "In revision, which statement is accurate? What general vessel reporting rule is stated in the presentation?",
    options: ["Reports are generally made 24 hours in advance for vessels", "Reports are made only after valuation", "Reports are required only for exports", "Reports are made only after discharge"],
    correct: 0,
    explanation: "The slide says generally 24 hours for vessels."
  },
  {
    id: 6,
    question: "A customs administration speeds up low-risk trade flows while still checking prohibited goods, collecting taxes, and protecting society. Which idea from the presentation best explains this balance?",
    options: ["Customs exists only to run courts and not borders", "Customs should only collect trade statistics and avoid control functions", "Modern Customs should eliminate all restrictions and taxes at once", "Modern Customs combines trade facilitation, revenue collection, and protection of society rather than focusing on only one role"],
    correct: 3,
    explanation: "The presentation repeatedly presents Customs as a balance of facilitation, revenue, enforcement, and protection."
  },
  {
    id: 7,
    question: "Which option best reflects the presentation? Which is one justification for customs barriers mentioned in the presentation?",
    options: ["To eliminate all customs administrations", "To prevent all trade statistics collection", "Protection of infant industries", "To end all health controls"],
    correct: 2,
    explanation: "The justification slide begins with protection of infant industries."
  },
  {
    id: 8,
    question: "In revision, which statement is accurate? Which enforcement-related items are specifically mentioned as being under customs control?",
    options: ["Only goods in private shops", "All seized goods and goods under notice of seizure", "Only goods after import duty has been remitted", "Only goods that are not declared anywhere"],
    correct: 1,
    explanation: "The slides list seized goods and goods under notice of seizure."
  },
  {
    id: 9,
    question: "Scenario variant: A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control", "Modern Customs operates without documents or systems", "Modern Customs now focuses only on physical barriers", "Modern Customs has abandoned all revenue roles"],
    correct: 0,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 10,
    question: "Which option best reflects the presentation? Which instrument is mentioned as guiding the rationalization of trade procedures and documents?",
    options: ["The EAC Mediation Agreement", "The Customs Preventive Service Act", "The Sixth Schedule on distress", "The Revised Kyoto Convention"],
    correct: 3,
    explanation: "The facilitation slide refers to the Revised Kyoto Convention."
  },
  {
    id: 11,
    question: "In revision, which statement is accurate? When did international cooperation in customs matters begin under the League of Nations according to the slides?",
    options: ["In 1890", "In 1948", "In 1924", "In 1994"],
    correct: 2,
    explanation: "The development slide says cooperation began under the League of Nations in 1924."
  },
  {
    id: 12,
    question: "An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["Only statistics collection requires law", "All customs work and activities are governed by law, including agreements, statutes, and administrative instructions", "Only physical barriers matter; law is secondary", "Only international bodies govern customs work, not national law"],
    correct: 1,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 13,
    question: "Which option best reflects the presentation? Which customs revenue issue contributed to the collapse of the EAC according to the presentation?",
    options: ["Allocation of customs revenue among members on the basis of derivation by country of ultimate destination", "Adoption of smart seals and drones", "Failure to create the WTO", "Use of baggage halls and transit sheds"],
    correct: 0,
    explanation: "The EAC collapse slide specifically mentions derivation-based allocation."
  },
  {
    id: 14,
    question: "In revision, which statement is accurate? What important UK customs reform took place in 1823?",
    options: ["The Customs Act was drafted and operationalized in Canada", "The separate boards of England, Scotland, and Ireland were merged into one unified Board of Customs", "All customs duties were repealed", "The WCO Secretariat moved to London"],
    correct: 1,
    explanation: "The UK revolutionized customs management in 1823 by merging separate customs boards."
  },
  {
    id: 15,
    question: "What is a non-tariff barrier according to the presentation?",
    options: ["A court-issued warrant of distress", "A customs officer declaration", "A condition or restriction imposed to regulate trade without being a direct tax", "A customs duty computed on gross weight"],
    correct: 2,
    explanation: "The presentation distinguishes non-tariff barriers from tariff barriers."
  },
  {
    id: 16,
    question: "Which option best reflects the presentation? Why was the Chinese Maritime Customs Service founded in Shanghai in 1854?",
    options: ["To manage only inland railway tariffs", "To replace the WCO in Asia", "To unify East African customs administration", "Foreign consuls founded it to collect taxes from maritime traders during the Taiping Rebellion after local customs collectors had been driven out"],
    correct: 3,
    explanation: "The presentation explains the context of the Taiping Rebellion and displaced customs collectors."
  },
  {
    id: 17,
    question: "In revision, which statement is accurate? Which is one of the WCO's stated objectives in the presentation?",
    options: ["To abolish all customs duties everywhere", "To eliminate all document verification", "To facilitate international trade through simplification and harmonization of customs procedures", "To replace national customs administrations completely"],
    correct: 2,
    explanation: "Trade facilitation through simplification and harmonization is one of the WCO objectives listed."
  },
  {
    id: 18,
    question: "Which statement best reflects the presentation's explanation of goods under customs control?",
    options: ["They are only relevant to statistics and not enforcement", "They may be examined by Customs at any time", "They cease to be regulated after arrival", "They can never be examined once entered"],
    correct: 1,
    explanation: "The presentation says goods under customs control may be examined at any time."
  },
  {
    id: 19,
    question: "Scenario variant: A customs administration speeds up low-risk trade flows while still checking prohibited goods, collecting taxes, and protecting society. Which idea from the presentation best explains this balance?",
    options: ["Customs should only collect trade statistics and avoid control functions", "Customs exists only to run courts and not borders", "Modern Customs should eliminate all restrictions and taxes at once", "Modern Customs combines trade facilitation, revenue collection, and protection of society rather than focusing on only one role"],
    correct: 3,
    explanation: "The presentation repeatedly presents Customs as a balance of facilitation, revenue, enforcement, and protection."
  },
  {
    id: 20,
    question: "In revision, which statement is accurate? What is the main goal of Smart Customs of the future according to the presentation?",
    options: ["To minimize customs clearance time and costs while intelligently managing inbound and outbound goods and vehicles", "To remove all customs control entirely", "To focus solely on monarchy-era revenue collection", "To return permanently to only manual declarations"],
    correct: 0,
    explanation: "The Smart Customs slide states this overarching goal."
  },
  {
    id: 21,
    question: "What happened in East Africa in 1967 according to the presentation?",
    options: ["The original EAC collapsed", "The Customs Act in Canada was operationalized", "The Chinese Maritime Customs Service was founded", "The Treaty for the establishment of the EAC Cooperation was created to control and administer matters of common interest"],
    correct: 3,
    explanation: "The slides connect 1967 to the Treaty for EAC cooperation."
  },
  {
    id: 22,
    question: "Which option best reflects the presentation? Which is an example of goods deemed to be under customs control according to the slides?",
    options: ["Only goods already sold at auction", "All imports from time of importation until delivery for home use or exportation", "Only goods after final condemnation", "Only diplomatic bags"],
    correct: 1,
    explanation: "This example is explicitly listed on the slides."
  },
  {
    id: 23,
    question: "In revision, which statement is accurate? What major paradigm shift in customs purpose is highlighted in the recap slide?",
    options: ["From trade facilitation to abolition of trade", "From laws to purely informal practice", "From revenue collection to supply chain security and protection of the environment", "From Customs to private shipping only"],
    correct: 2,
    explanation: "The recap slide notes this broader modern customs paradigm shift."
  },
  {
    id: 24,
    question: "What began in East Africa in 1923 according to the presentation?",
    options: ["A single customs territory with a Common External Tariff and internal free trade", "The Customs Preventive Service in Ghana", "The WCO working name", "The collapse of the EAC"],
    correct: 0,
    explanation: "The slides note that internal free trade and a CET began in 1923."
  },
  {
    id: 25,
    question: "Scenario variant: An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["Only physical barriers matter; law is secondary", "All customs work and activities are governed by law, including agreements, statutes, and administrative instructions", "Only international bodies govern customs work, not national law", "Only statistics collection requires law"],
    correct: 1,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 26,
    question: "A customs authority deploys drones, smart gates, smart seals, AI, and data analytics to reduce clearance time while improving control. Which slide theme does this illustrate most directly?",
    options: ["Only derivation-based revenue allocation", "Old customs entry gates only", "Traditional monarchy taxation", "Smart Customs of the future"],
    correct: 3,
    explanation: "These technologies are specifically listed under Smart Customs."
  },
  {
    id: 27,
    question: "Scenario variant: A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A tariff barrier", "A physical barrier only", "A non-tariff barrier", "A customs union feature"],
    correct: 2,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 28,
    question: "A trader asks why a regional customs union would prefer a single collection point for import duty. Which answer best reflects the East African customs features in the presentation?",
    options: ["Because a single collection point supports a common customs territory and simplifies movement within the union", "Because it replaces the need for any border control", "Because it guarantees no disputes over benefit sharing", "Because it eliminates all need for customs law"],
    correct: 0,
    explanation: "The East African customs features slide links single collection center to the regional customs arrangement."
  },
  {
    id: 29,
    question: "Scenario variant: After war, traders complain that tariffs are high and procedures are too complex across many countries. Which historical development in the presentation most directly answers that problem?",
    options: ["The collapse of the EAC in 1977", "The rise of international customs cooperation aimed at reducing taxes and harmonizing procedures", "A return to gifts for rulers", "Creation of physical barriers like trenches"],
    correct: 1,
    explanation: "The development slides explain that international cooperation grew to reduce taxes and harmonize customs procedures."
  },
  {
    id: 30,
    question: "A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["Immediate unloading is always allowed at the master's discretion", "Only aircraft must wait for reporting, not vessels", "Unloading is allowed first if valuation will be done later", "No unloading should occur before the report except with permission of Customs"],
    correct: 3,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 31,
    question: "Scenario variant: A customs authority deploys drones, smart gates, smart seals, AI, and data analytics to reduce clearance time while improving control. Which slide theme does this illustrate most directly?",
    options: ["Smart Customs of the future", "Traditional monarchy taxation", "Old customs entry gates only", "Only derivation-based revenue allocation"],
    correct: 0,
    explanation: "These technologies are specifically listed under Smart Customs."
  },
  {
    id: 32,
    question: "Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Common administration of transport only", "Only exchange rate control policy", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards", "Collection of statistics only"],
    correct: 2,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 33,
    question: "When was a Customs Union between Kenya and Uganda formed under colonial rule?",
    options: ["In 1927", "In 1917", "In 1967", "In 1923"],
    correct: 1,
    explanation: "The East Africa historical foundation slide states 1917."
  },
  {
    id: 34,
    question: "Which option best reflects the presentation? Which customs-stakeholder partnership concept is mentioned in the facilitation slide?",
    options: ["Common currency only", "Police court jurisdiction", "Authorized Economic Operator partnership", "Derivation allocation"],
    correct: 2,
    explanation: "The facilitation slide mentions working in partnership with stakeholders (AEO)."
  },
  {
    id: 35,
    question: "Scenario variant: A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Facilitation of legitimate trade", "Only derivation-based revenue sharing", "Only criminal punishment of smugglers", "Only historical tribute collection"],
    correct: 0,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 36,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only criminal punishment of smugglers", "Only historical tribute collection", "Only derivation-based revenue sharing", "Facilitation of legitimate trade"],
    correct: 3,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 37,
    question: "Scenario variant: Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards", "Collection of statistics only", "Common administration of transport only", "Only exchange rate control policy"],
    correct: 0,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 38,
    question: "In revision, which statement is accurate? Which is one core role of Customs highlighted in the presentation?",
    options: ["Replacement of all ministries of finance", "Abolition of all prohibitions and restrictions", "Facilitation of legitimate trade", "Management of only domestic direct taxes"],
    correct: 2,
    explanation: "The roles slide begins with facilitation of legitimate trade."
  },
  {
    id: 39,
    question: "How does section 2 of EACCMA, 2004 define Customs?",
    options: ["As all tax authorities in Africa", "As the World Customs Organization Secretariat", "As only border stations and customs warehouses", "As the Customs Departments of the Partner States"],
    correct: 3,
    explanation: "The presentation quotes section 2 of EACCMA, 2004 defining Customs or the Customs as the Customs Departments of the Partner States."
  },
  {
    id: 40,
    question: "Which option best reflects the presentation? When was the Department of Customs established in Ghana according to the presentation?",
    options: ["In 1947", "In 1839", "In 1967", "In 1897"],
    correct: 1,
    explanation: "The Africa slide gives 1839."
  },
  {
    id: 41,
    question: "In revision, which statement is accurate? Which is one disadvantage of customs barriers listed in the presentation?",
    options: ["Increase in the cost of transactions", "Guaranteed equality of trade benefits", "Automatic rise in investment opportunities", "Permanent elimination of inefficiency"],
    correct: 0,
    explanation: "The cons of barriers slide lists increased transaction costs."
  },
  {
    id: 42,
    question: "What major paradigm shift in customs purpose is highlighted in the recap slide?",
    options: ["From laws to purely informal practice", "From Customs to private shipping only", "From trade facilitation to abolition of trade", "From revenue collection to supply chain security and protection of the environment"],
    correct: 3,
    explanation: "The recap slide notes this broader modern customs paradigm shift."
  },
  {
    id: 43,
    question: "Scenario variant: A customs administration speeds up low-risk trade flows while still checking prohibited goods, collecting taxes, and protecting society. Which idea from the presentation best explains this balance?",
    options: ["Modern Customs should eliminate all restrictions and taxes at once", "Modern Customs combines trade facilitation, revenue collection, and protection of society rather than focusing on only one role", "Customs should only collect trade statistics and avoid control functions", "Customs exists only to run courts and not borders"],
    correct: 1,
    explanation: "The presentation repeatedly presents Customs as a balance of facilitation, revenue, enforcement, and protection."
  },
  {
    id: 44,
    question: "A customs administration speeds up low-risk trade flows while still checking prohibited goods, collecting taxes, and protecting society. Which idea from the presentation best explains this balance?",
    options: ["Customs exists only to run courts and not borders", "Modern Customs should eliminate all restrictions and taxes at once", "Modern Customs combines trade facilitation, revenue collection, and protection of society rather than focusing on only one role", "Customs should only collect trade statistics and avoid control functions"],
    correct: 2,
    explanation: "The presentation repeatedly presents Customs as a balance of facilitation, revenue, enforcement, and protection."
  },
  {
    id: 45,
    question: "Scenario variant: After war, traders complain that tariffs are high and procedures are too complex across many countries. Which historical development in the presentation most directly answers that problem?",
    options: ["A return to gifts for rulers", "The rise of international customs cooperation aimed at reducing taxes and harmonizing procedures", "Creation of physical barriers like trenches", "The collapse of the EAC in 1977"],
    correct: 1,
    explanation: "The development slides explain that international cooperation grew to reduce taxes and harmonize customs procedures."
  },
  {
    id: 46,
    question: "Which option best reflects the presentation? How did taxation begin in early communities according to the presentation?",
    options: ["Members of communities gave their chiefs or leaders gifts in return for leadership", "Kings imposed VAT on all goods at the seaport", "Merchants created a customs union before rulers intervened", "Only priests collected customs tariffs at temples"],
    correct: 0,
    explanation: "The slides explain taxation began with gifts to chiefs or leaders."
  },
  {
    id: 47,
    question: "Scenario variant: After war, traders complain that tariffs are high and procedures are too complex across many countries. Which historical development in the presentation most directly answers that problem?",
    options: ["A return to gifts for rulers", "The collapse of the EAC in 1977", "Creation of physical barriers like trenches", "The rise of international customs cooperation aimed at reducing taxes and harmonizing procedures"],
    correct: 3,
    explanation: "The development slides explain that international cooperation grew to reduce taxes and harmonize customs procedures."
  },
  {
    id: 48,
    question: "A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["Immediate unloading is always allowed at the master's discretion", "Only aircraft must wait for reporting, not vessels", "No unloading should occur before the report except with permission of Customs", "Unloading is allowed first if valuation will be done later"],
    correct: 2,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 49,
    question: "Scenario variant: A customs administration speeds up low-risk trade flows while still checking prohibited goods, collecting taxes, and protecting society. Which idea from the presentation best explains this balance?",
    options: ["Customs exists only to run courts and not borders", "Modern Customs combines trade facilitation, revenue collection, and protection of society rather than focusing on only one role", "Modern Customs should eliminate all restrictions and taxes at once", "Customs should only collect trade statistics and avoid control functions"],
    correct: 1,
    explanation: "The presentation repeatedly presents Customs as a balance of facilitation, revenue, enforcement, and protection."
  },
  {
    id: 50,
    question: "Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards", "Collection of statistics only", "Common administration of transport only", "Only exchange rate control policy"],
    correct: 0,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
];
