const QUESTIONS = [
  {
    id: 1,
    question: "Scenario variant: A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only derivation-based revenue sharing", "Facilitation of legitimate trade", "Only criminal punishment of smugglers", "Only historical tribute collection"],
    correct: 1,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 2,
    question: "Which option best reflects the presentation? How did taxation begin in early communities according to the presentation?",
    options: ["Members of communities gave their chiefs or leaders gifts in return for leadership", "Only priests collected customs tariffs at temples", "Merchants created a customs union before rulers intervened", "Kings imposed VAT on all goods at the seaport"],
    correct: 0,
    explanation: "The slides explain taxation began with gifts to chiefs or leaders."
  },
  {
    id: 3,
    question: "Scenario variant: A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A tariff barrier", "A customs union feature", "A non-tariff barrier", "A physical barrier only"],
    correct: 2,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 4,
    question: "How does Customs protect society according to the presentation?",
    options: ["By replacing immigration services", "By collecting income tax on salaries", "By drafting only company law", "By enforcing prohibitions and restrictions on goods across borders"],
    correct: 3,
    explanation: "The slide on roles of Customs identifies this protective role."
  },
  {
    id: 5,
    question: "Which option best reflects the presentation? Which is one of the additional legal references listed at the end of the presentation?",
    options: ["The 1643 English ordinance only", "The Revised Kyoto Convention", "The private sector civil society charter", "Only the Ghana Customs Preventive Service order"],
    correct: 1,
    explanation: "The final slide lists the Revised Kyoto Convention among other legal references."
  },
  {
    id: 6,
    question: "An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["Only physical barriers matter; law is secondary", "Only international bodies govern customs work, not national law", "All customs work and activities are governed by law, including agreements, statutes, and administrative instructions", "Only statistics collection requires law"],
    correct: 2,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 7,
    question: "Scenario variant: A trader asks why a regional customs union would prefer a single collection point for import duty. Which answer best reflects the East African customs features in the presentation?",
    options: ["Because it guarantees no disputes over benefit sharing", "Because it replaces the need for any border control", "Because it eliminates all need for customs law", "Because a single collection point supports a common customs territory and simplifies movement within the union"],
    correct: 3,
    explanation: "The East African customs features slide links single collection center to the regional customs arrangement."
  },
  {
    id: 8,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Facilitation of legitimate trade", "Only criminal punishment of smugglers", "Only derivation-based revenue sharing", "Only historical tribute collection"],
    correct: 0,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 9,
    question: "In revision, which statement is accurate? What governs all customs work and activities according to the presentation?",
    options: ["Only private trade customs", "Only oral instructions from officers", "Only court decisions from foreign countries", "Law, including international agreements, statutes, and administrative instructions"],
    correct: 3,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 10,
    question: "Which inspection shift is highlighted in the recap slide?",
    options: ["From courts to only customs warehouses", "From rules of origin to only revenue allocation", "From physical inspection and verification to non-intrusive inspection", "From non-intrusive inspection to no inspection ever"],
    correct: 2,
    explanation: "The recap slide identifies this inspection shift."
  },
  {
    id: 11,
    question: "Which option best reflects the presentation? Which EACCMA schedule covers warrant of distress?",
    options: ["The 6th Schedule", "The 4th Schedule", "The 3rd Schedule", "The 1st Schedule"],
    correct: 0,
    explanation: "The schedules list identifies the Sixth Schedule as warrant of distress."
  },
  {
    id: 12,
    question: "A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A tariff barrier", "A non-tariff barrier", "A customs union feature", "A physical barrier only"],
    correct: 1,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 13,
    question: "When was the Customs Act drafted and operationalized in Canada according to the slides?",
    options: ["In 1868", "In 1845", "In 1767", "In 1788"],
    correct: 0,
    explanation: "The presentation gives 1868 for the drafting and operationalization of the Customs Act in Canada."
  },
  {
    id: 14,
    question: "Which option best reflects the presentation? Which is an example of goods deemed to be under customs control according to the slides?",
    options: ["Only goods already sold at auction", "Only diplomatic bags", "Only goods after final condemnation", "All imports from time of importation until delivery for home use or exportation"],
    correct: 3,
    explanation: "This example is explicitly listed on the slides."
  },
  {
    id: 15,
    question: "Scenario variant: Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Common administration of transport only", "Only exchange rate control policy", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards", "Collection of statistics only"],
    correct: 2,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 16,
    question: "Which broader themes are associated with Smart Customs of the future?",
    options: ["Exclusive focus on monarchy tribute systems", "Green customs, strategic trade control, integrity, international cooperation, information sharing, and capacity building", "End of all border laws, abolition of technology, and no training", "Replacement of customs with only private stakeholders"],
    correct: 1,
    explanation: "These themes are listed under Smart Customs."
  },
  {
    id: 17,
    question: "Which option best reflects the presentation? Which action is part of Customs prevention of smuggling according to the slides?",
    options: ["Allowing all conveyances to pass without question", "Replacing all customs reports with verbal declarations only", "Ending patrol of entry and exit points", "Stopping any conveyance suspected of carrying uncustomed goods"],
    correct: 3,
    explanation: "The anti-smuggling slide explicitly lists stopping suspected conveyances."
  },
  {
    id: 18,
    question: "In revision, which statement is accurate? Which additional factor contributed to the collapse of the EAC?",
    options: ["Overuse of non-intrusive inspection", "Continued disproportionate sharing of Community benefits among Partner States", "Too much private sector participation", "Excessive use of the green channel"],
    correct: 1,
    explanation: "The presentation says disproportionate benefit sharing contributed to collapse."
  },
  {
    id: 19,
    question: "Which of the following is listed as a customs area or control point in the presentation?",
    options: ["Private residences by default", "Parliamentary chambers", "Baggage halls", "Company boardrooms"],
    correct: 2,
    explanation: "Baggage halls are expressly listed among customs areas/control points."
  },
  {
    id: 20,
    question: "Which option best reflects the presentation? Which EACCMA schedule covers warrant of distress?",
    options: ["The 6th Schedule", "The 4th Schedule", "The 3rd Schedule", "The 1st Schedule"],
    correct: 0,
    explanation: "The schedules list identifies the Sixth Schedule as warrant of distress."
  },
  {
    id: 21,
    question: "In revision, which statement is accurate? Which is one core role of Customs highlighted in the presentation?",
    options: ["Replacement of all ministries of finance", "Management of only domestic direct taxes", "Abolition of all prohibitions and restrictions", "Facilitation of legitimate trade"],
    correct: 3,
    explanation: "The roles slide begins with facilitation of legitimate trade."
  },
  {
    id: 22,
    question: "Which is one basic control tool used by Customs according to the presentation?",
    options: ["Abolition of customs areas", "Ending control of conveyances", "Appointment and gazettement of entry and exit points such as seaports, airports, and border stations", "Removal of all mandatory declarations"],
    correct: 2,
    explanation: "The basic control tools slide lists appointment and gazettement of entry and exit points."
  },
  {
    id: 23,
    question: "Which option best reflects the presentation? What is the governing body of the WCO?",
    options: ["The Secretariat", "The Council", "The East African Legislative Assembly", "The Secretary General alone"],
    correct: 1,
    explanation: "The WCO Council is the governing body."
  },
  {
    id: 24,
    question: "In revision, which statement is accurate? Why did customs duties become reliable sources of public revenue in earlier times?",
    options: ["Because they were relatively easy to collect at specified points such as bridges and gates", "Because customs applied only to luxury goods", "Because customs officers worked without rulers", "Because all internal taxes had already been abolished"],
    correct: 0,
    explanation: "The presentation says customs duties were easy to collect and became reliable sources of public revenue."
  },
  {
    id: 25,
    question: "Scenario variant: Imported goods have arrived but duty has not yet been paid, and Customs wants to inspect them again. Which principle from the slides supports this?",
    options: ["Only exported goods may be examined", "Goods under customs control may be examined by Customs at any time", "Inspection is allowed only after a court appeal", "Goods become fully private immediately on arrival"],
    correct: 1,
    explanation: "The slides explicitly state that goods deemed under customs control may be examined at any time."
  },
  {
    id: 26,
    question: "Which option best reflects the presentation? Which is one of the WCO's stated objectives in the presentation?",
    options: ["To replace national customs administrations completely", "To eliminate all document verification", "To abolish all customs duties everywhere", "To facilitate international trade through simplification and harmonization of customs procedures"],
    correct: 3,
    explanation: "Trade facilitation through simplification and harmonization is one of the WCO objectives listed."
  },
  {
    id: 27,
    question: "Scenario variant: A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["Modern Customs has abandoned all revenue roles", "Modern Customs operates without documents or systems", "There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control", "Modern Customs now focuses only on physical barriers"],
    correct: 2,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 28,
    question: "When did Tanganyika join the Common Customs Administration?",
    options: ["In 1927", "In 1984", "In 1967", "In 1917"],
    correct: 0,
    explanation: "The East Africa timeline gives 1927."
  },
  {
    id: 29,
    question: "Which option best reflects the presentation? Which WCO objective focuses on revenue?",
    options: ["To abolish all tariff barriers permanently", "To promote fair, efficient, and effective revenue collection", "To replace customs officers with private auditors", "To end all import and export restrictions"],
    correct: 1,
    explanation: "The presentation calls this the revenue package."
  },
  {
    id: 30,
    question: "In revision, which statement is accurate? Which of the following is listed as a customs area or control point in the presentation?",
    options: ["Parliamentary chambers", "Private residences by default", "Company boardrooms", "Baggage halls"],
    correct: 3,
    explanation: "Baggage halls are expressly listed among customs areas/control points."
  },
  {
    id: 31,
    question: "Who heads the WCO Secretariat?",
    options: ["The Secretary General", "The Principal Collector", "The Commissioner", "The Chair of the EAC Council of Ministers"],
    correct: 0,
    explanation: "The Secretariat is headed by a Secretary General."
  },
  {
    id: 32,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Only criminal punishment of smugglers", "Only historical tribute collection", "Facilitation of legitimate trade", "Only derivation-based revenue sharing"],
    correct: 2,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 33,
    question: "Scenario variant: Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Only exchange rate control policy", "Common administration of transport only", "Collection of statistics only", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards"],
    correct: 3,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 34,
    question: "When was the Customs Act drafted and operationalized in Canada according to the slides?",
    options: ["In 1788", "In 1845", "In 1868", "In 1767"],
    correct: 2,
    explanation: "The presentation gives 1868 for the drafting and operationalization of the Customs Act in Canada."
  },
  {
    id: 35,
    question: "Which option best reflects the presentation? Which instrument is mentioned as guiding the rationalization of trade procedures and documents?",
    options: ["The Customs Preventive Service Act", "The Revised Kyoto Convention", "The Sixth Schedule on distress", "The EAC Mediation Agreement"],
    correct: 1,
    explanation: "The facilitation slide refers to the Revised Kyoto Convention."
  },
  {
    id: 36,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Facilitation of legitimate trade", "Only derivation-based revenue sharing", "Only criminal punishment of smugglers", "Only historical tribute collection"],
    correct: 0,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 37,
    question: "Scenario variant: Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Only exchange rate control policy", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards", "Collection of statistics only", "Common administration of transport only"],
    correct: 1,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 38,
    question: "Which option best reflects the presentation? Which EACCMA sections are associated with customs areas in the presentation?",
    options: ["Sections 11 and 12", "Sections 156 and 7", "Sections 34 and 73", "Sections 229 and 231"],
    correct: 0,
    explanation: "The customs areas slide references EACCMA sections 11 and 12."
  },
  {
    id: 39,
    question: "In revision, which statement is accurate? What is a non-tariff barrier according to the presentation?",
    options: ["A customs officer declaration", "A court-issued warrant of distress", "A customs duty computed on gross weight", "A condition or restriction imposed to regulate trade without being a direct tax"],
    correct: 3,
    explanation: "The presentation distinguishes non-tariff barriers from tariff barriers."
  },
  {
    id: 40,
    question: "What was the purpose of the Board of Customs established by ordinance on 21 January 1643?",
    options: ["To draft the modern HS nomenclature", "To replace all English courts with customs courts", "To regulate, manage, and centralize the collection of duties on imported and some exported goods", "To unify the customs boards of England, Scotland, and Ireland immediately"],
    correct: 2,
    explanation: "The 1643 Board of Customs was meant to regulate, manage, and centralize duty collection."
  },
  {
    id: 41,
    question: "Scenario variant: After war, traders complain that tariffs are high and procedures are too complex across many countries. Which historical development in the presentation most directly answers that problem?",
    options: ["A return to gifts for rulers", "The rise of international customs cooperation aimed at reducing taxes and harmonizing procedures", "Creation of physical barriers like trenches", "The collapse of the EAC in 1977"],
    correct: 1,
    explanation: "The development slides explain that international cooperation grew to reduce taxes and harmonize customs procedures."
  },
  {
    id: 42,
    question: "In revision, which statement is accurate? Which important classification system does the WCO maintain?",
    options: ["The customs preventive register of Ghana", "The EAC Mediation Schedule", "The derivation benefit formula", "The International Harmonized System goods nomenclature"],
    correct: 3,
    explanation: "The WCO maintains the HS nomenclature."
  },
  {
    id: 43,
    question: "Which WCO objective focuses on organizational development?",
    options: ["To strengthen capacity building for effective and efficient customs administrations", "To centralize all customs under one country", "To prohibit all international trade", "To remove the need for customs laws"],
    correct: 0,
    explanation: "The slides describe capacity building as the organizational development package."
  },
  {
    id: 44,
    question: "Which option best reflects the presentation? Which is one justification for customs barriers mentioned in the presentation?",
    options: ["To prevent all trade statistics collection", "To end all health controls", "Protection of infant industries", "To eliminate all customs administrations"],
    correct: 2,
    explanation: "The justification slide begins with protection of infant industries."
  },
  {
    id: 45,
    question: "Scenario variant: A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["Immediate unloading is always allowed at the master's discretion", "Unloading is allowed first if valuation will be done later", "Only aircraft must wait for reporting, not vessels", "No unloading should occur before the report except with permission of Customs"],
    correct: 3,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 46,
    question: "Which instrument is mentioned as guiding the rationalization of trade procedures and documents?",
    options: ["The Revised Kyoto Convention", "The Customs Preventive Service Act", "The EAC Mediation Agreement", "The Sixth Schedule on distress"],
    correct: 0,
    explanation: "The facilitation slide refers to the Revised Kyoto Convention."
  },
  {
    id: 47,
    question: "Which option best reflects the presentation? Which is one justification for customs barriers mentioned in the presentation?",
    options: ["To prevent all trade statistics collection", "Protection of infant industries", "To eliminate all customs administrations", "To end all health controls"],
    correct: 1,
    explanation: "The justification slide begins with protection of infant industries."
  },
  {
    id: 48,
    question: "In revision, which statement is accurate? What are the working languages of the WCO according to the presentation?",
    options: ["English and Portuguese", "English and Arabic", "English and French", "French and Swahili"],
    correct: 2,
    explanation: "The presentation states that the working languages are English and French."
  },
  {
    id: 49,
    question: "Scenario variant: A customs administration speeds up low-risk trade flows while still checking prohibited goods, collecting taxes, and protecting society. Which idea from the presentation best explains this balance?",
    options: ["Modern Customs combines trade facilitation, revenue collection, and protection of society rather than focusing on only one role", "Customs should only collect trade statistics and avoid control functions", "Modern Customs should eliminate all restrictions and taxes at once", "Customs exists only to run courts and not borders"],
    correct: 0,
    explanation: "The presentation repeatedly presents Customs as a balance of facilitation, revenue, enforcement, and protection."
  },
  {
    id: 50,
    question: "Which option best reflects the presentation? Which shift is highlighted in the recap slide as part of the evolution of customs administrations?",
    options: ["From statistics collection to no records", "From international trade to no trade at all", "From manual declarations to automated customs systems", "From automation back to purely manual systems"],
    correct: 2,
    explanation: "The recap slide specifically contrasts manual declarations with automated systems."
  },
];
