const QUESTIONS = [
  {
    id: 1,
    question: "Which additional factor contributed to the collapse of the EAC?",
    options: ["Overuse of non-intrusive inspection", "Too much private sector participation", "Excessive use of the green channel", "Continued disproportionate sharing of Community benefits among Partner States"],
    correct: 3,
    explanation: "The presentation says disproportionate benefit sharing contributed to collapse."
  },
  {
    id: 2,
    question: "Which option best reflects the presentation? Which inspection shift is highlighted in the recap slide?",
    options: ["From physical inspection and verification to non-intrusive inspection", "From courts to only customs warehouses", "From rules of origin to only revenue allocation", "From non-intrusive inspection to no inspection ever"],
    correct: 0,
    explanation: "The recap slide identifies this inspection shift."
  },
  {
    id: 3,
    question: "After war, traders complain that tariffs are high and procedures are too complex across many countries. Which historical development in the presentation most directly answers that problem?",
    options: ["The collapse of the EAC in 1977", "The rise of international customs cooperation aimed at reducing taxes and harmonizing procedures", "Creation of physical barriers like trenches", "A return to gifts for rulers"],
    correct: 1,
    explanation: "The development slides explain that international cooperation grew to reduce taxes and harmonize customs procedures."
  },
  {
    id: 4,
    question: "Which EACCMA sections are associated with customs areas in the presentation?",
    options: ["Sections 229 and 231", "Sections 156 and 7", "Sections 11 and 12", "Sections 34 and 73"],
    correct: 2,
    explanation: "The customs areas slide references EACCMA sections 11 and 12."
  },
  {
    id: 5,
    question: "A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A non-tariff barrier", "A physical barrier only", "A customs union feature", "A tariff barrier"],
    correct: 0,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 6,
    question: "In revision, which statement is accurate? When was the Department of Customs established in Ghana according to the presentation?",
    options: ["In 1947", "In 1967", "In 1839", "In 1897"],
    correct: 2,
    explanation: "The Africa slide gives 1839."
  },
  {
    id: 7,
    question: "A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["Unloading is allowed first if valuation will be done later", "Immediate unloading is always allowed at the master's discretion", "Only aircraft must wait for reporting, not vessels", "No unloading should occur before the report except with permission of Customs"],
    correct: 3,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 8,
    question: "Which option best reflects the presentation? Why did the original EAC collapse in 1977 according to the slides?",
    options: ["Because the WCO had dissolved", "Because of political tensions, ideological differences, and conflicts of national interest", "Because the HS system was abolished", "Because customs duties were too easy to collect"],
    correct: 1,
    explanation: "The East Africa slide and collapse slide identify these reasons."
  },
  {
    id: 9,
    question: "A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["Immediate unloading is always allowed at the master's discretion", "Unloading is allowed first if valuation will be done later", "Only aircraft must wait for reporting, not vessels", "No unloading should occur before the report except with permission of Customs"],
    correct: 3,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 10,
    question: "How many customs ports had been established in Canada by 1845?",
    options: ["20", "63", "151", "194"],
    correct: 1,
    explanation: "The presentation states that 63 customs ports in Canada had been established by 1845."
  },
  {
    id: 11,
    question: "Which option best reflects the presentation? Which instrument is mentioned as guiding the rationalization of trade procedures and documents?",
    options: ["The Sixth Schedule on distress", "The Customs Preventive Service Act", "The Revised Kyoto Convention", "The EAC Mediation Agreement"],
    correct: 2,
    explanation: "The facilitation slide refers to the Revised Kyoto Convention."
  },
  {
    id: 12,
    question: "In revision, which statement is accurate? When did Tanganyika join the Common Customs Administration?",
    options: ["In 1927", "In 1967", "In 1917", "In 1984"],
    correct: 0,
    explanation: "The East Africa timeline gives 1927."
  },
  {
    id: 13,
    question: "Which is one disadvantage of customs barriers listed in the presentation?",
    options: ["Guaranteed equality of trade benefits", "Automatic rise in investment opportunities", "Permanent elimination of inefficiency", "Increase in the cost of transactions"],
    correct: 3,
    explanation: "The cons of barriers slide lists increased transaction costs."
  },
  {
    id: 14,
    question: "Which option best reflects the presentation? Which WTO-related technical areas does the WCO administer according to the slides?",
    options: ["Civil aviation and railway scheduling", "Income tax and excise budgeting", "Customs Valuation and Rules of Origin", "Only criminal prosecutions at ports"],
    correct: 2,
    explanation: "The presentation names valuation and rules of origin."
  },
  {
    id: 15,
    question: "In revision, which statement is accurate? Where was the first interior Customs office regulating trade along the US-Canada border established according to the presentation?",
    options: ["At St. Jean, Quebec, in 1788", "At Cape Coast in 1839", "At Ottawa in 1868", "At Massachusetts in 1767"],
    correct: 0,
    explanation: "The North America slide identifies St. Jean, Quebec in 1788."
  },
  {
    id: 16,
    question: "Which EACCMA schedule covers warrant of distress?",
    options: ["The 3rd Schedule", "The 6th Schedule", "The 4th Schedule", "The 1st Schedule"],
    correct: 1,
    explanation: "The schedules list identifies the Sixth Schedule as warrant of distress."
  },
  {
    id: 17,
    question: "A country adopts technology, works with stakeholders, uses AEO principles, and aligns procedures with the Revised Kyoto Convention. Which customs role is being emphasized most directly?",
    options: ["Facilitation of legitimate trade", "Only derivation-based revenue sharing", "Only criminal punishment of smugglers", "Only historical tribute collection"],
    correct: 0,
    explanation: "These are facilitation tools listed in the presentation."
  },
  {
    id: 18,
    question: "In revision, which statement is accurate? Why did the original EAC collapse in 1977 according to the slides?",
    options: ["Because the WCO had dissolved", "Because of political tensions, ideological differences, and conflicts of national interest", "Because customs duties were too easy to collect", "Because the HS system was abolished"],
    correct: 1,
    explanation: "The East Africa slide and collapse slide identify these reasons."
  },
  {
    id: 19,
    question: "A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["Modern Customs now focuses only on physical barriers", "Modern Customs operates without documents or systems", "Modern Customs has abandoned all revenue roles", "There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control"],
    correct: 3,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 20,
    question: "Scenario variant: Imported goods have arrived but duty has not yet been paid, and Customs wants to inspect them again. Which principle from the slides supports this?",
    options: ["Only exported goods may be examined", "Inspection is allowed only after a court appeal", "Goods under customs control may be examined by Customs at any time", "Goods become fully private immediately on arrival"],
    correct: 2,
    explanation: "The slides explicitly state that goods deemed under customs control may be examined at any time."
  },
  {
    id: 21,
    question: "A government introduces strict quality control and import licensing but no new import tax. Which type of customs barrier best describes this approach?",
    options: ["A non-tariff barrier", "A physical barrier only", "A customs union feature", "A tariff barrier"],
    correct: 0,
    explanation: "Strict quality control and import/export licences are listed as non-tariff barriers."
  },
  {
    id: 22,
    question: "Who is obliged by law to submit inward and outward reports according to the slides?",
    options: ["Only the WCO Secretariat", "Only the Customs Co-operation Council", "Only the passenger with personal baggage", "The owner or agent of the means of conveyance"],
    correct: 3,
    explanation: "The inward/outward reports slide places the obligation on the owner or agent."
  },
  {
    id: 23,
    question: "After war, traders complain that tariffs are high and procedures are too complex across many countries. Which historical development in the presentation most directly answers that problem?",
    options: ["Creation of physical barriers like trenches", "The rise of international customs cooperation aimed at reducing taxes and harmonizing procedures", "A return to gifts for rulers", "The collapse of the EAC in 1977"],
    correct: 1,
    explanation: "The development slides explain that international cooperation grew to reduce taxes and harmonize customs procedures."
  },
  {
    id: 24,
    question: "In revision, which statement is accurate? What happened in East Africa in 1967 according to the presentation?",
    options: ["The Customs Act in Canada was operationalized", "The Chinese Maritime Customs Service was founded", "The Treaty for the establishment of the EAC Cooperation was created to control and administer matters of common interest", "The original EAC collapsed"],
    correct: 2,
    explanation: "The slides connect 1967 to the Treaty for EAC cooperation."
  },
  {
    id: 25,
    question: "What is the role of the EAC Customs Management Regulations according to the presentation?",
    options: ["They explain the Act further and provide details required for customs procedures and activities", "They replace the Act entirely", "They only apply to non-tariff barriers in Europe", "They abolish schedules"],
    correct: 0,
    explanation: "The EACCMR slide says regulations explain the Act and provide details."
  },
  {
    id: 26,
    question: "Which option best reflects the presentation? What are the working languages of the WCO according to the presentation?",
    options: ["English and Portuguese", "English and French", "French and Swahili", "English and Arabic"],
    correct: 1,
    explanation: "The presentation states that the working languages are English and French."
  },
  {
    id: 27,
    question: "In revision, which statement is accurate? What intellectual property role of Customs is specifically mentioned?",
    options: ["Writing copyright legislation", "Licensing trademarks directly", "Granting patents to inventors", "Enforcing intellectual property rights"],
    correct: 3,
    explanation: "The roles slide explicitly mentions enforcing IPR."
  },
  {
    id: 28,
    question: "Which instrument is mentioned as guiding the rationalization of trade procedures and documents?",
    options: ["The Customs Preventive Service Act", "The Sixth Schedule on distress", "The Revised Kyoto Convention", "The EAC Mediation Agreement"],
    correct: 2,
    explanation: "The facilitation slide refers to the Revised Kyoto Convention."
  },
  {
    id: 29,
    question: "Which option best reflects the presentation? When was the convention establishing the Customs Cooperation Council signed?",
    options: ["On 26 January 1953 in Paris", "On 4 November 1952 in London", "In 1994 in Brussels", "On 15 December 1950 in Brussels"],
    correct: 3,
    explanation: "The slides state the convention was signed on 15 December 1950 in Brussels."
  },
  {
    id: 30,
    question: "In revision, which statement is accurate? What began in East Africa in 1923 according to the presentation?",
    options: ["The Customs Preventive Service in Ghana", "The collapse of the EAC", "A single customs territory with a Common External Tariff and internal free trade", "The WCO working name"],
    correct: 2,
    explanation: "The slides note that internal free trade and a CET began in 1923."
  },
  {
    id: 31,
    question: "A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control", "Modern Customs has abandoned all revenue roles", "Modern Customs operates without documents or systems", "Modern Customs now focuses only on physical barriers"],
    correct: 0,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
  {
    id: 32,
    question: "Scenario variant: Imported goods have arrived but duty has not yet been paid, and Customs wants to inspect them again. Which principle from the slides supports this?",
    options: ["Inspection is allowed only after a court appeal", "Goods under customs control may be examined by Customs at any time", "Only exported goods may be examined", "Goods become fully private immediately on arrival"],
    correct: 1,
    explanation: "The slides explicitly state that goods deemed under customs control may be examined at any time."
  },
  {
    id: 33,
    question: "A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["Unloading is allowed first if valuation will be done later", "Only aircraft must wait for reporting, not vessels", "No unloading should occur before the report except with permission of Customs", "Immediate unloading is always allowed at the master's discretion"],
    correct: 2,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 34,
    question: "When was a Customs Union between Kenya and Uganda formed under colonial rule?",
    options: ["In 1923", "In 1927", "In 1967", "In 1917"],
    correct: 3,
    explanation: "The East Africa historical foundation slide states 1917."
  },
  {
    id: 35,
    question: "Which option best reflects the presentation? What happened in East Africa in 1967 according to the presentation?",
    options: ["The Treaty for the establishment of the EAC Cooperation was created to control and administer matters of common interest", "The original EAC collapsed", "The Chinese Maritime Customs Service was founded", "The Customs Act in Canada was operationalized"],
    correct: 0,
    explanation: "The slides connect 1967 to the Treaty for EAC cooperation."
  },
  {
    id: 36,
    question: "In revision, which statement is accurate? Which EACCMA schedule covers the exemption regime?",
    options: ["The 3rd Schedule", "The 5th Schedule", "The 6th Schedule", "The 1st Schedule"],
    correct: 1,
    explanation: "The schedules list identifies the Fifth Schedule as the exemption regime."
  },
  {
    id: 37,
    question: "Which combination of technologies is linked to Smart Customs in the presentation?",
    options: ["Only trenches and walls", "Only paper ledgers and manual declaration books", "IoT tools such as drones, smart gates, and smart seals together with AI, machine learning, and data analytics", "Only common currency systems"],
    correct: 2,
    explanation: "The Smart Customs slide mentions these tools and technologies."
  },
  {
    id: 38,
    question: "Scenario variant: Imported goods have arrived but duty has not yet been paid, and Customs wants to inspect them again. Which principle from the slides supports this?",
    options: ["Only exported goods may be examined", "Inspection is allowed only after a court appeal", "Goods become fully private immediately on arrival", "Goods under customs control may be examined by Customs at any time"],
    correct: 3,
    explanation: "The slides explicitly state that goods deemed under customs control may be examined at any time."
  },
  {
    id: 39,
    question: "Officers intercept counterfeit medicines and wildlife products at the border. Which customs theme from the presentation does this most directly illustrate?",
    options: ["Common administration of transport only", "Protection of society by enforcing prohibitions, restrictions, treaties, and environmental safeguards", "Only exchange rate control policy", "Collection of statistics only"],
    correct: 1,
    explanation: "The presentation ties Customs protection to prohibitions, restrictions, environment, and societal safety."
  },
  {
    id: 40,
    question: "Who heads the WCO Secretariat?",
    options: ["The Secretary General", "The Principal Collector", "The Commissioner", "The Chair of the EAC Council of Ministers"],
    correct: 0,
    explanation: "The Secretariat is headed by a Secretary General."
  },
  {
    id: 41,
    question: "Which option best reflects the presentation? Who must make declaration of goods according to the presentation?",
    options: ["Only exporters using the red channel", "Only members of the WCO Council", "Every importer in the inward report", "Only warehouse keepers"],
    correct: 2,
    explanation: "The customs declaration slide states every importer in the inward report must declare goods."
  },
  {
    id: 42,
    question: "In revision, which statement is accurate? Which is one of the additional legal references listed at the end of the presentation?",
    options: ["Only the Ghana Customs Preventive Service order", "The Revised Kyoto Convention", "The private sector civil society charter", "The 1643 English ordinance only"],
    correct: 1,
    explanation: "The final slide lists the Revised Kyoto Convention among other legal references."
  },
  {
    id: 43,
    question: "Which is one disadvantage of customs barriers listed in the presentation?",
    options: ["Automatic rise in investment opportunities", "Permanent elimination of inefficiency", "Guaranteed equality of trade benefits", "Increase in the cost of transactions"],
    correct: 3,
    explanation: "The cons of barriers slide lists increased transaction costs."
  },
  {
    id: 44,
    question: "Which option best reflects the presentation? Which is one core role of Customs highlighted in the presentation?",
    options: ["Facilitation of legitimate trade", "Abolition of all prohibitions and restrictions", "Replacement of all ministries of finance", "Management of only domestic direct taxes"],
    correct: 0,
    explanation: "The roles slide begins with facilitation of legitimate trade."
  },
  {
    id: 45,
    question: "A customs authority deploys drones, smart gates, smart seals, AI, and data analytics to reduce clearance time while improving control. Which slide theme does this illustrate most directly?",
    options: ["Traditional monarchy taxation", "Old customs entry gates only", "Only derivation-based revenue allocation", "Smart Customs of the future"],
    correct: 3,
    explanation: "These technologies are specifically listed under Smart Customs."
  },
  {
    id: 46,
    question: "Scenario variant: A vessel arrives and the owner wants to begin unloading immediately, even though the inward report has not yet been made. Which response best fits the presentation?",
    options: ["No unloading should occur before the report except with permission of Customs", "Only aircraft must wait for reporting, not vessels", "Unloading is allowed first if valuation will be done later", "Immediate unloading is always allowed at the master's discretion"],
    correct: 0,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 47,
    question: "Which option best reflects the presentation? What is the World Customs Organization according to the presentation?",
    options: ["A private trade association for brokers", "A regional customs court for East Africa", "An independent intergovernmental body whose mission is to improve the administration of Customs, headquartered in Brussels", "A department of the WTO"],
    correct: 2,
    explanation: "The WCO slide defines it as an independent intergovernmental body."
  },
  {
    id: 48,
    question: "In revision, which statement is accurate? Which EACCMA sections are associated with customs areas in the presentation?",
    options: ["Sections 229 and 231", "Sections 11 and 12", "Sections 34 and 73", "Sections 156 and 7"],
    correct: 1,
    explanation: "The customs areas slide references EACCMA sections 11 and 12."
  },
  {
    id: 49,
    question: "What are the working languages of the WCO according to the presentation?",
    options: ["English and French", "English and Arabic", "English and Portuguese", "French and Swahili"],
    correct: 0,
    explanation: "The presentation states that the working languages are English and French."
  },
  {
    id: 50,
    question: "Scenario variant: A lecturer says modern Customs is no longer just about collecting money at the border. Which broad recap point best supports that statement?",
    options: ["Modern Customs has abandoned all revenue roles", "Modern Customs operates without documents or systems", "Modern Customs now focuses only on physical barriers", "There has been a paradigm shift from revenue collection toward supply chain security and protection of the environment, alongside facilitation and control"],
    correct: 3,
    explanation: "The recap slide explicitly highlights this paradigm shift."
  },
];
