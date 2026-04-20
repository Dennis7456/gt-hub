const QUESTIONS = [
  {
    id: 1,
    question: "An administration needs guidance on HS classification, valuation, and rules of origin while modernizing customs systems. Which institution from the presentation is most relevant?",
    options: ["The EAC Mediation Agreement", "The Customs Preventive Service of Ghana", "Only the 1643 English Board of Customs", "The World Customs Organization"],
    correct: 3,
    explanation: "The WCO is presented as the key body for HS, valuation, rules of origin, and modernization support."
  },
  {
    id: 2,
    question: "In revision, which statement is accurate? Which EACCMA section is linked to goods under customs control in the presentation?",
    options: ["Section 34", "Section 229", "Section 16", "Section 2"],
    correct: 2,
    explanation: "The goods under customs control slide refers to section 16."
  },
  {
    id: 3,
    question: "Imported goods have arrived but duty has not yet been paid, and Customs wants to inspect them again. Which principle from the slides supports this?",
    options: ["Inspection is allowed only after a court appeal", "Goods under customs control may be examined by Customs at any time", "Only exported goods may be examined", "Goods become fully private immediately on arrival"],
    correct: 1,
    explanation: "The slides explicitly state that goods deemed under customs control may be examined at any time."
  },
  {
    id: 4,
    question: "Scenario variant: An officer says customs work can be done mainly through routine practice even without legal backing. Which response best reflects the presentation?",
    options: ["All customs work and activities are governed by law, including agreements, statutes, and administrative instructions", "Only statistics collection requires law", "Only international bodies govern customs work, not national law", "Only physical barriers matter; law is secondary"],
    correct: 0,
    explanation: "The legal authority slide emphasizes that customs work is governed by law."
  },
  {
    id: 5,
    question: "In revision, which statement is accurate? Which export-related goods are under customs control according to the presentation?",
    options: ["Only exports already cleared from customs control", "Only exports that are never restricted", "Only exports after final sale", "All dutiable exports from when they are brought to a place for exportation until exportation"],
    correct: 3,
    explanation: "The presentation lists dutiable exports in this way."
  },
  {
    id: 6,
    question: "Which additional factor contributed to the collapse of the EAC?",
    options: ["Too much private sector participation", "Overuse of non-intrusive inspection", "Continued disproportionate sharing of Community benefits among Partner States", "Excessive use of the green channel"],
    correct: 2,
    explanation: "The presentation says disproportionate benefit sharing contributed to collapse."
  },
  {
    id: 7,
    question: "A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["Modern Customs now focuses only on physical barriers", "There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control", "Modern Customs has abandoned all revenue roles", "Modern Customs operates without documents or systems"],
    correct: 1,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 8,
    question: "In revision, which statement is accurate? Which customs-stakeholder partnership concept is mentioned in the facilitation slide?",
    options: ["Authorized Economic Operator partnership", "Common currency only", "Police court jurisdiction", "Derivation allocation"],
    correct: 0,
    explanation: "The facilitation slide mentions working in partnership with stakeholders (AEO)."
  },
  {
    id: 9,
    question: "By 1900, what scale had the Chinese customs system reached according to the presentation?",
    options: ["151 staff in a single secretariat in Brussels", "63 customs ports only on the US-Canada border", "A three-country customs union with common currency", "About 20,000 people working in 40 main custom houses across China in a unified tax system"],
    correct: 3,
    explanation: "The Asia slide states this scale for the Chinese system."
  },
  {
    id: 10,
    question: "Which option best reflects the presentation? Who must make declaration of goods according to the presentation?",
    options: ["Only warehouse keepers", "Every importer in the inward report", "Only members of the WCO Council", "Only exporters using the red channel"],
    correct: 1,
    explanation: "The customs declaration slide states every importer in the inward report must declare goods."
  },
  {
    id: 11,
    question: "A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["Only aircraft must wait for reporting, not vessels", "Immediate unloading is always allowed at the master's discretion", "No unloading should occur before the report except with permission of Customs", "Unloading is allowed first if valuation will be done later"],
    correct: 2,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 12,
    question: "Scenario variant: A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["No unloading should occur before the report except with permission of Customs", "Unloading is allowed first if valuation will be done later", "Immediate unloading is always allowed at the master's discretion", "Only aircraft must wait for reporting, not vessels"],
    correct: 0,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 13,
    question: "Which option best reflects the presentation? Which statement best reflects the presentation's explanation of goods under customs control?",
    options: ["They are only relevant to statistics and not enforcement", "They may be examined by Customs at any time", "They cease to be regulated after arrival", "They can never be examined once entered"],
    correct: 1,
    explanation: "The presentation says goods under customs control may be examined at any time."
  },
  {
    id: 14,
    question: "In revision, which statement is accurate? What was created in Ghana in 1897 to strengthen customs enforcement?",
    options: ["The World Customs Organization", "The EAC Customs Union", "The Customs Preventive Service, a semi-military outfit", "The Common External Tariff"],
    correct: 2,
    explanation: "The Ghana slide notes the creation of the Customs Preventive Service in 1897."
  },
  {
    id: 15,
    question: "How does section 2 of EACCMA, 2004 define Customs?",
    options: ["As the Customs Departments of the Partner States", "As the World Customs Organization Secretariat", "As only border stations and customs warehouses", "As all tax authorities in Africa"],
    correct: 0,
    explanation: "The presentation quotes section 2 of EACCMA, 2004 defining Customs or the Customs as the Customs Departments of the Partner States."
  },
  {
    id: 16,
    question: "Scenario variant: After war, traders complain that tariffs are high and procedures are too complex across many countries. Which historical development in the presentation most directly answers that problem?",
    options: ["The collapse of the EAC in 1977", "A return to gifts for rulers", "Creation of physical barriers like trenches", "The rise of international customs cooperation aimed at reducing taxes and harmonizing procedures"],
    correct: 3,
    explanation: "The development slides explain that international cooperation grew to reduce taxes and harmonize customs procedures."
  },
  {
    id: 17,
    question: "In revision, which statement is accurate? Which customs revenue issue contributed to the collapse of the EAC according to the presentation?",
    options: ["Use of baggage halls and transit sheds", "Adoption of smart seals and drones", "Allocation of customs revenue among members on the basis of derivation by country of ultimate destination", "Failure to create the WTO"],
    correct: 2,
    explanation: "The EAC collapse slide specifically mentions derivation-based allocation."
  },
  {
    id: 18,
    question: "Which is a key feature of East African customs mentioned in the presentation?",
    options: ["No movement of goods within East Africa", "Single collection center of import duty at the point of entry", "Mandatory abolition of all border stations", "No role for customs statistics"],
    correct: 1,
    explanation: "The features slide lists single collection center at the point of entry."
  },
  {
    id: 19,
    question: "Which option best reflects the presentation? Why is 26 January celebrated as International Customs Day?",
    options: ["Because that is when the Customs Act in Canada came into force", "Because the EAC collapsed on that date", "Because the HS nomenclature was first drafted then", "Because it marks the inaugural session of the CCC held on 26 January 1953"],
    correct: 3,
    explanation: "The presentation links 26 January 1953 to International Customs Day."
  },
  {
    id: 20,
    question: "Scenario variant: Imported goods have arrived but duty has not yet been paid, and Customs wants to inspect them again. Which principle from the slides supports this?",
    options: ["Goods under customs control may be examined by Customs at any time", "Only exported goods may be examined", "Inspection is allowed only after a court appeal", "Goods become fully private immediately on arrival"],
    correct: 0,
    explanation: "The slides explicitly state that goods deemed under customs control may be examined at any time."
  },
  {
    id: 21,
    question: "Imported goods have arrived but duty has not yet been paid, and Customs wants to inspect them again. Which principle from the slides supports this?",
    options: ["Only exported goods may be examined", "Goods become fully private immediately on arrival", "Goods under customs control may be examined by Customs at any time", "Inspection is allowed only after a court appeal"],
    correct: 2,
    explanation: "The slides explicitly state that goods deemed under customs control may be examined at any time."
  },
  {
    id: 22,
    question: "Which option best reflects the presentation? Which is an example of goods deemed to be under customs control according to the slides?",
    options: ["Only goods already sold at auction", "Only goods after final condemnation", "Only diplomatic bags", "All imports from time of importation until delivery for home use or exportation"],
    correct: 3,
    explanation: "This example is explicitly listed on the slides."
  },
  {
    id: 23,
    question: "An administration needs guidance on HS classification, valuation, and rules of origin while modernizing customs systems. Which institution from the presentation is most relevant?",
    options: ["The World Customs Organization", "The Customs Preventive Service of Ghana", "The EAC Mediation Agreement", "Only the 1643 English Board of Customs"],
    correct: 0,
    explanation: "The WCO is presented as the key body for HS, valuation, rules of origin, and modernization support."
  },
  {
    id: 24,
    question: "Which enforcement powers are referenced on the anti-smuggling slide?",
    options: ["Only granting exemptions under the Fifth Schedule", "Questioning persons entering or leaving a partner state and enforcing power to arrest under sections 156 and 7", "Only setting exchange rates", "Only issuing tax refunds and rebates"],
    correct: 1,
    explanation: "The anti-smuggling slide specifically mentions questioning and arrest powers."
  },
  {
    id: 25,
    question: "Which option best reflects the presentation? What is customs control according to the presentation?",
    options: ["Measures put in place to ensure compliance with customs laws and regulate movement of resources from, into, and within a country", "A system used only for customs statistics", "The abolition of all border procedures", "The process of collecting only direct taxes on income"],
    correct: 0,
    explanation: "This is the definition given on the customs control slide."
  },
  {
    id: 26,
    question: "In revision, which statement is accurate? Which instrument is mentioned as guiding the rationalization of trade procedures and documents?",
    options: ["The EAC Mediation Agreement", "The Revised Kyoto Convention", "The Sixth Schedule on distress", "The Customs Preventive Service Act"],
    correct: 1,
    explanation: "The facilitation slide refers to the Revised Kyoto Convention."
  },
  {
    id: 27,
    question: "After war, traders complain that tariffs are high and procedures are too complex across many countries. Which historical development in the presentation most directly answers that problem?",
    options: ["Creation of physical barriers like trenches", "The collapse of the EAC in 1977", "A return to gifts for rulers", "The rise of international customs cooperation aimed at reducing taxes and harmonizing procedures"],
    correct: 3,
    explanation: "The development slides explain that international cooperation grew to reduce taxes and harmonize customs procedures."
  },
  {
    id: 28,
    question: "Which option best reflects the presentation? Which WTO-related technical areas does the WCO administer according to the slides?",
    options: ["Civil aviation and railway scheduling", "Only criminal prosecutions at ports", "Customs Valuation and Rules of Origin", "Income tax and excise budgeting"],
    correct: 2,
    explanation: "The presentation names valuation and rules of origin."
  },
  {
    id: 29,
    question: "In revision, which statement is accurate? What is a non-tariff barrier according to the presentation?",
    options: ["A court-issued warrant of distress", "A customs officer declaration", "A customs duty computed on gross weight", "A condition or restriction imposed to regulate trade without being a direct tax"],
    correct: 3,
    explanation: "The presentation distinguishes non-tariff barriers from tariff barriers."
  },
  {
    id: 30,
    question: "Scenario variant: A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Facilitation of legitimate trade", "Only historical tribute collection", "Only derivation-based revenue sharing", "Only criminal punishment of smugglers"],
    correct: 0,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 31,
    question: "Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Common administration of transport only", "Collection of statistics only", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards", "Only exchange rate control policy"],
    correct: 2,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 32,
    question: "In revision, which statement is accurate? Why does Customs collect statistics according to the presentation?",
    options: ["Only to punish traders", "For international and regional trade records, money movements, internal planning, and balance of trade computation", "Only to support private warehouses", "Only to determine judicial appeals"],
    correct: 1,
    explanation: "The statistics slide lists these uses."
  },
  {
    id: 33,
    question: "Which is listed as one of the key legal authorities for customs work?",
    options: ["EAC Customs Management Act, 2004", "English Board of Customs Ordinance, 1643", "Canadian Customs Act, 1868 as East African principal law", "Only private stakeholder agreements"],
    correct: 0,
    explanation: "EACCMA 2004 is listed as a principal legal authority."
  },
  {
    id: 34,
    question: "Scenario variant: A customs administration speeds up low-risk trade flows while still checking prohibited goods, collecting taxes, and protecting society. Which idea from the presentation best explains this balance?",
    options: ["Modern Customs should eliminate all restrictions and taxes at once", "Customs exists only to run courts and not borders", "Modern Customs combines trade facilitation, revenue collection, and protection of society rather than focusing on only one role", "Customs should only collect trade statistics and avoid control functions"],
    correct: 2,
    explanation: "The presentation repeatedly presents Customs as a balance of facilitation, revenue, enforcement, and protection."
  },
  {
    id: 35,
    question: "In revision, which statement is accurate? Which of the following is listed as a customs area or control point in the presentation?",
    options: ["Company boardrooms", "Baggage halls", "Parliamentary chambers", "Private residences by default"],
    correct: 1,
    explanation: "Baggage halls are expressly listed among customs areas/control points."
  },
  {
    id: 36,
    question: "Which is an example of a non-tariff barrier from the slides?",
    options: ["WCO Secretariat staffing", "Common currency in 1949", "Gross weight duty calculation", "Quota system"],
    correct: 3,
    explanation: "Quota system is listed among non-tariff barriers."
  },
  {
    id: 37,
    question: "Which option best reflects the presentation? What is the World Customs Organization according to the presentation?",
    options: ["An independent intergovernmental body whose mission is to improve the administration of Customs, headquartered in Brussels", "A regional customs court for East Africa", "A department of the WTO", "A private trade association for brokers"],
    correct: 0,
    explanation: "The WCO slide defines it as an independent intergovernmental body."
  },
  {
    id: 38,
    question: "In revision, which statement is accurate? Which enforcement-related items are specifically mentioned as being under customs control?",
    options: ["Only goods that are not declared anywhere", "All seized goods and goods under notice of seizure", "Only goods after import duty has been remitted", "Only goods in private shops"],
    correct: 1,
    explanation: "The slides list seized goods and goods under notice of seizure."
  },
  {
    id: 39,
    question: "Which EACCMA sections are associated with customs areas in the presentation?",
    options: ["Sections 34 and 73", "Sections 156 and 7", "Sections 11 and 12", "Sections 229 and 231"],
    correct: 2,
    explanation: "The customs areas slide references EACCMA sections 11 and 12."
  },
  {
    id: 40,
    question: "Which option best reflects the presentation? Which inspection shift is highlighted in the recap slide?",
    options: ["From non-intrusive inspection to no inspection ever", "From rules of origin to only revenue allocation", "From courts to only customs warehouses", "From physical inspection and verification to non-intrusive inspection"],
    correct: 3,
    explanation: "The recap slide identifies this inspection shift."
  },
  {
    id: 41,
    question: "A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["Immediate unloading is always allowed at the master's discretion", "No unloading should occur before the report except with permission of Customs", "Unloading is allowed first if valuation will be done later", "Only aircraft must wait for reporting, not vessels"],
    correct: 1,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 42,
    question: "Scenario variant: An administration needs guidance on HS classification, valuation, and rules of origin while modernizing customs systems. Which institution from the presentation is most relevant?",
    options: ["Only the 1643 English Board of Customs", "The EAC Mediation Agreement", "The World Customs Organization", "The Customs Preventive Service of Ghana"],
    correct: 2,
    explanation: "The WCO is presented as the key body for HS, valuation, rules of origin, and modernization support."
  },
  {
    id: 43,
    question: "Which option best reflects the presentation? Who must make declaration of goods according to the presentation?",
    options: ["Only exporters using the red channel", "Only members of the WCO Council", "Only warehouse keepers", "Every importer in the inward report"],
    correct: 3,
    explanation: "The customs declaration slide states every importer in the inward report must declare goods."
  },
  {
    id: 44,
    question: "Scenario variant: A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control", "Modern Customs has abandoned all revenue roles", "Modern Customs now focuses only on physical barriers", "Modern Customs operates without documents or systems"],
    correct: 0,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 45,
    question: "Which action is part of Customs prevention of smuggling according to the slides?",
    options: ["Replacing all customs reports with verbal declarations only", "Stopping any conveyance suspected of carrying uncustomed goods", "Allowing all conveyances to pass without question", "Ending patrol of entry and exit points"],
    correct: 1,
    explanation: "The anti-smuggling slide explicitly lists stopping suspected conveyances."
  },
  {
    id: 46,
    question: "Which option best reflects the presentation? Which is one disadvantage of customs barriers listed in the presentation?",
    options: ["Guaranteed equality of trade benefits", "Automatic rise in investment opportunities", "Increase in the cost of transactions", "Permanent elimination of inefficiency"],
    correct: 2,
    explanation: "The cons of barriers slide lists increased transaction costs."
  },
  {
    id: 47,
    question: "Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards", "Collection of statistics only", "Only exchange rate control policy", "Common administration of transport only"],
    correct: 0,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 48,
    question: "Scenario variant: A customs authority deploys drones, smart gates, smart seals, AI, and data analytics to reduce clearance time while improving control. Which slide theme does this illustrate most directly?",
    options: ["Traditional monarchy taxation", "Old customs entry gates only", "Only derivation-based revenue allocation", "Smart Customs of the future"],
    correct: 3,
    explanation: "These technologies are specifically listed under Smart Customs."
  },
  {
    id: 49,
    question: "A customs administration speeds up low-risk trade flows while still checking prohibited goods, collecting taxes, and protecting society. Which idea from the presentation best explains this balance?",
    options: ["Modern Customs should eliminate all restrictions and taxes at once", "Customs exists only to run courts and not borders", "Modern Customs combines trade facilitation, revenue collection, and protection of society rather than focusing on only one role", "Customs should only collect trade statistics and avoid control functions"],
    correct: 2,
    explanation: "The presentation repeatedly presents Customs as a balance of facilitation, revenue, enforcement, and protection."
  },
  {
    id: 50,
    question: "Scenario variant: A trader asks why a regional customs union would prefer a single collection point for import duty. Which answer best reflects the East African customs features in the presentation?",
    options: ["Because it guarantees no disputes over benefit sharing", "Because a single collection point supports a common customs territory and simplifies movement within the union", "Because it replaces the need for any border control", "Because it eliminates all need for customs law"],
    correct: 1,
    explanation: "The East African customs features slide links single collection center to the regional customs arrangement."
  },
];
