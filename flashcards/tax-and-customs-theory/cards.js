const flashcards = [
  {
    topic: "Course Objectives",
    front: "What should participants be able to do at the end of the Tax and Customs Theory course?",
    back: "Define Customs; explain the historical evolution of Customs; explain the evolution of modern Customs administrations; and discuss the future roles of Customs administrations."
  },
  {
    topic: "Definition",
    front: "How does section 2 of EACCMA, 2004 define Customs?",
    back: "Customs or the Customs means the Customs Departments of the Partner States."
  },
  {
    topic: "Origins of Customs",
    front: "Why is Customs considered one of the oldest professions?",
    back: "Because customs duties and taxation began very early in organized societies, after institutions like the ruling class, clergy, and military."
  },
  {
    topic: "Origins of Customs",
    front: "How did taxation begin in early communities?",
    back: "Members of communities gave their chiefs or leaders gifts in return for leadership."
  },
  {
    topic: "Origins of Customs",
    front: "How did the expansion of trade influence the origin of customs duties?",
    back: "Rulers made it mandatory for traders passing through their land to pay a small portion of their goods as gifts or tribute."
  },
  {
    topic: "Origins of Customs",
    front: "What did traders returning to their communities pay in early customs practice?",
    back: "They paid a portion of their merchandise into the ruler's treasury."
  },
  {
    topic: "Entry and Exit Points",
    front: "How did early customs entry and exit points arise?",
    back: "Specified points such as bridges and gates were arranged where duty collectors were stationed to collect customs duties from passing traders."
  },
  {
    topic: "Entry and Exit Points",
    front: "Why did customs duties become a common source of public revenue in earlier times?",
    back: "Because they were relatively easy to collect and became reliable sources of public revenue for many centuries."
  },
  {
    topic: "Historical Thinking",
    front: "What two historical questions were posed in the group activity on old customs systems?",
    back: "How smuggling took place in the olden days and how Customs countered smuggling activities."
  },
  {
    topic: "Europe",
    front: "When did the centralized English Customs system begin?",
    back: "In 1203-1204 during the reign of King John II."
  },
  {
    topic: "Europe",
    front: "When were English collectors of Customs first appointed?",
    back: "In 1298."
  },
  {
    topic: "Europe",
    front: "When was a Board of Customs established in England, and for what purpose?",
    back: "On 21 January 1643, to regulate, manage, and centralize collection of duties on imported and some exported goods."
  },
  {
    topic: "Europe",
    front: "What major customs reform took place in the UK in 1823?",
    back: "The separate Boards of England, Scotland, and Ireland were merged into one unified Board of Customs."
  },
  {
    topic: "Europe",
    front: "What followed the UK customs board merger in 1823?",
    back: "Major legislative consolidation in 1825."
  },
  {
    topic: "North America",
    front: "To what period is Canada's customs evolution traced back in the slides?",
    back: "To the customs tariff imposed by Edward I between 1272 and 1307."
  },
  {
    topic: "North America",
    front: "When was the American Board of Customs established according to the slides?",
    back: "In 1767."
  },
  {
    topic: "North America",
    front: "Where was the first interior Customs office regulating trade along the US-Canada border established?",
    back: "At St. Jean, Quebec, in 1788."
  },
  {
    topic: "North America",
    front: "How many customs ports had been established in Canada by 1845?",
    back: "Sixty-three."
  },
  {
    topic: "North America",
    front: "When was the Customs Act drafted and operationalized in Canada?",
    back: "In 1868."
  },
  {
    topic: "Asia",
    front: "When and where was the Chinese Maritime Customs Service founded?",
    back: "In 1854 in Shanghai."
  },
  {
    topic: "Asia",
    front: "Why was the Chinese Maritime Customs Service founded in Shanghai?",
    back: "Foreign consuls founded it to collect taxes from maritime traders during the Taiping Rebellion after Chinese Customs collectors had been driven out by a local uprising."
  },
  {
    topic: "Asia",
    front: "What did Chinese customs administration look like by 1900 according to the slides?",
    back: "There were 20,000 people working in 40 main custom houses across China in a unified tax system."
  },
  {
    topic: "Africa",
    front: "When was the Department of Customs established in Ghana?",
    back: "In 1839."
  },
  {
    topic: "Africa",
    front: "Who headed the Department of Customs in early Ghana?",
    back: "A Principal Collector, who also acted as a colonial Treasurer stationed at Cape Coast."
  },
  {
    topic: "Africa",
    front: "What additional roles did Ghana's Department of Customs perform in the colonial period?",
    back: "It enforced payment of local duty at sub-ports and handled matters related to commercial and police courts."
  },
  {
    topic: "Africa",
    front: "What was created in Ghana in 1897 to enhance customs enforcement?",
    back: "The Customs Preventive Service, a semi-military outfit."
  },
  {
    topic: "Africa",
    front: "When was the Department of Customs and Excise formed in Ghana?",
    back: "In 1947."
  },
  {
    topic: "East Africa",
    front: "When was a Customs Union between Kenya and Uganda formed?",
    back: "In 1917 under colonial rule."
  },
  {
    topic: "East Africa",
    front: "What was one main feature of the Kenya-Uganda Customs Union formed in 1917?",
    back: "It created a single customs territory."
  },
  {
    topic: "East Africa",
    front: "What began in 1923 in the East African customs arrangement?",
    back: "A single customs territory with a Common External Tariff and internal free trade."
  },
  {
    topic: "East Africa",
    front: "When did Tanganyika join the Common Customs Administration?",
    back: "In 1927."
  },
  {
    topic: "East Africa",
    front: "What happened in 1967 in East African customs history?",
    back: "The Treaty for the establishment of the EAC Cooperation was created to control and administer matters of common interest to the EAC."
  },
  {
    topic: "East Africa",
    front: "What was the purpose of the original East African Community from 1967 to 1977?",
    back: "To strengthen ties through a common market and common customs tariffs."
  },
  {
    topic: "East Africa",
    front: "Why did the original EAC collapse in 1977 according to the slides?",
    back: "Because of political tensions, ideological differences, and conflicts of national interest."
  },
  {
    topic: "East Africa",
    front: "What important East African event occurred in 1984?",
    back: "The EAC Mediation Agreement."
  },
  {
    topic: "East Africa Features",
    front: "What does a single collection center of import duty at the point of entry mean in East African customs?",
    back: "It means import duty is collected once at the entry point into the customs territory."
  },
  {
    topic: "East Africa Features",
    front: "Name three features of East African customs mentioned in the slides.",
    back: "Single collection center of import duty at entry, free movement of goods/capital/labor, and free trade in products of East African origin."
  },
  {
    topic: "East Africa Features",
    front: "What additional common systems existed in East Africa by 1949 according to the slides?",
    back: "A common Customs Administration, a common currency, and common administration of transport and communication."
  },
  {
    topic: "EAC Collapse",
    front: "What two broad causes of EAC collapse are highlighted on the slide titled EAC collapse?",
    back: "Lack of strong political will and lack of strong participation of the private sector and civil society."
  },
  {
    topic: "EAC Collapse",
    front: "What customs revenue allocation issue contributed to EAC collapse?",
    back: "Allocation of customs revenue among members on the basis of derivation, meaning country of ultimate destination."
  },
  {
    topic: "EAC Collapse",
    front: "What benefit-sharing issue contributed to EAC collapse?",
    back: "The continued disproportionate sharing of Community benefits among Partner States."
  },
  {
    topic: "EAC Collapse",
    front: "What policy problem is identified as contributing to the collapse of the EAC?",
    back: "Lack of adequate policies to address grievances."
  },
  {
    topic: "Global Development",
    front: "What happened after the First World War that affected customs development globally?",
    back: "Countries became protective of their territories, imposed high tariffs, and introduced complex customs procedures."
  },
  {
    topic: "Global Development",
    front: "Why did international traders demand change in customs administration after the First World War?",
    back: "Because tariffs were high and customs procedures had become complex."
  },
  {
    topic: "Global Development",
    front: "What international customs-related body existed before broader customs cooperation developed?",
    back: "The Union Internationale pour la Publication des Tariffs Douaniers."
  },
  {
    topic: "Global Development",
    front: "What was the function of the Union Internationale pour la Publication des Tariffs Douaniers?",
    back: "To publish customs tariffs."
  },
  {
    topic: "Global Development",
    front: "When did international cooperation in customs matters begin under the League of Nations?",
    back: "In 1924."
  },
  {
    topic: "Global Development",
    front: "What broad goal drove the creation of an international customs body in the post-war climate?",
    back: "Promotion of international trade through reduction of taxes and harmonization of customs procedures."
  },
  {
    topic: "Global Development",
    front: "What happened in 1948 in relation to European customs integration?",
    back: "Creation of the European Customs Union Study Group."
  },
  {
    topic: "WCO History",
    front: "When was the convention establishing the Customs Cooperation Council signed?",
    back: "On 15 December 1950 in Brussels."
  },
  {
    topic: "WCO History",
    front: "When did the convention establishing the Customs Cooperation Council enter into force?",
    back: "On 4 November 1952."
  },
  {
    topic: "WCO History",
    front: "What happened in 1994 regarding the Customs Cooperation Council?",
    back: "It adopted the working name World Customs Organization (WCO) to reflect its global role."
  },
  {
    topic: "WCO History",
    front: "Why is 26 January celebrated as International Customs Day?",
    back: "Because it marks the date of the inaugural session of the Customs Cooperation Council in 1953."
  },
  {
    topic: "WCO",
    front: "What is the World Customs Organization?",
    back: "An independent intergovernmental body whose mission is to improve the administration of Customs, headquartered in Brussels, Belgium."
  },
  {
    topic: "WCO",
    front: "Where is the WCO headquartered?",
    back: "Brussels, Belgium."
  },
  {
    topic: "WCO",
    front: "What important goods classification system does the WCO maintain?",
    back: "The International Harmonized System (HS) goods nomenclature."
  },
  {
    topic: "WCO",
    front: "Which WTO-related technical areas does the WCO administer?",
    back: "The technical aspects of WTO Agreements on Customs Valuation and Rules of Origin."
  },
  {
    topic: "WCO",
    front: "What broad type of support does the WCO provide to Customs administrations?",
    back: "It develops international conventions, instruments, and tools to assist with customs reforms and modernization."
  },
  {
    topic: "WCO Administration",
    front: "What is the governing body of the WCO?",
    back: "The Council."
  },
  {
    topic: "WCO Administration",
    front: "What body does the WCO Council rely on for competence and skills?",
    back: "The Secretariat."
  },
  {
    topic: "WCO Administration",
    front: "Where is the WCO Secretariat located?",
    back: "In Brussels."
  },
  {
    topic: "WCO Administration",
    front: "How many staff members does the WCO Secretariat have according to the slides?",
    back: "151 staff members."
  },
  {
    topic: "WCO Administration",
    front: "Who heads the WCO Secretariat?",
    back: "The Secretary General."
  },
  {
    topic: "WCO Administration",
    front: "What types of people make up the WCO Secretariat staff?",
    back: "Professional Customs officers, technical experts, and personnel in support services such as IT, finance, human resources, and language services."
  },
  {
    topic: "WCO Administration",
    front: "What are the working languages of the WCO?",
    back: "English and French."
  },
  {
    topic: "WCO Objectives",
    front: "What is one key WCO objective related to international trade?",
    back: "To facilitate international trade, including simplification and harmonization of customs procedures."
  },
  {
    topic: "WCO Objectives",
    front: "What is one key WCO objective related to security?",
    back: "To promote security."
  },
  {
    topic: "WCO Objectives",
    front: "What is one key WCO objective related to revenue?",
    back: "To promote fair, efficient, and effective revenue collection."
  },
  {
    topic: "WCO Objectives",
    front: "What is one key WCO objective related to society and safety?",
    back: "To protect society, public health, and safety."
  },
  {
    topic: "WCO Objectives",
    front: "What does the organizational development package of the WCO focus on?",
    back: "Strengthening capacity building for effective and efficient Customs administrations."
  },
  {
    topic: "WCO Objectives",
    front: "What kinds of exchanges does the WCO promote among stakeholders?",
    back: "Exchange of information and experience between member administrations, government agencies, international organizations, the private sector, and other stakeholders."
  },
  {
    topic: "WCO Objectives",
    front: "How does the WCO seek to raise the profile of Customs?",
    back: "Through cooperation, communication, and partnership with governments, international and regional organizations, donors, and the private sector."
  },
  {
    topic: "WCO Objectives",
    front: "Why does the WCO conduct research and analysis on Customs and international trade?",
    back: "To promote a professional, knowledge-based service culture and benefit members and external stakeholders."
  },
  {
    topic: "Roles of Customs",
    front: "What is the trade-related role of Customs?",
    back: "Facilitation of legitimate trade."
  },
  {
    topic: "Roles of Customs",
    front: "What is the tax-related role of Customs?",
    back: "Collection of taxes."
  },
  {
    topic: "Roles of Customs",
    front: "How does Customs protect society according to the slides?",
    back: "By enforcing prohibitions and restrictions on goods across borders."
  },
  {
    topic: "Roles of Customs",
    front: "How does Customs support environmental protection and treaty enforcement?",
    back: "By enforcing international treaties and conventions that protect fauna, flora, and the environment."
  },
  {
    topic: "Roles of Customs",
    front: "What statistical role does Customs perform?",
    back: "Collection of trade statistics."
  },
  {
    topic: "Roles of Customs",
    front: "What compliance role does Customs perform in international trade?",
    back: "Enforcing compliance and best international trade practices."
  },
  {
    topic: "Roles of Customs",
    front: "What intellectual property role does Customs perform?",
    back: "Enforcing intellectual property rights (IPR)."
  },
  {
    topic: "Tax Collection",
    front: "What four steps are involved in the assessment and collection of taxes on imported goods?",
    back: "Valuation of goods, verification of trading documents, classification of goods, and computation of taxes."
  },
  {
    topic: "Tax Collection",
    front: "What additional controls support tax collection besides valuation and classification?",
    back: "Checking declarations and monitoring exemptions."
  },
  {
    topic: "Statistics",
    front: "What kinds of statistics does Customs collect according to the slides?",
    back: "Statistics on international trade, regional trade, money movements, internal planning, and balance of trade."
  },
  {
    topic: "Trade Facilitation",
    front: "How does Customs facilitate trade through procedures and documents?",
    back: "By systematically rationalizing procedures and documents used in international trade in line with the Revised Kyoto Convention."
  },
  {
    topic: "Trade Facilitation",
    front: "Which trade terms and systems are mentioned as part of customs trade facilitation?",
    back: "Acceptance of Incoterms such as CIF/LC and adoption of technology such as ICMS."
  },
  {
    topic: "Trade Facilitation",
    front: "How does partnership contribute to customs trade facilitation?",
    back: "Through working in partnership with stakeholders, including Authorized Economic Operators (AEO)."
  },
  {
    topic: "Trade Facilitation",
    front: "What incentives or frameworks are listed as trade facilitation tools?",
    back: "SEZ, EPZ, EPAs, AfCFTA, AGOA, EAC, and COMESA."
  },
  {
    topic: "Protection of Society",
    front: "Name four legal areas through which Customs protects society and industry.",
    back: "Import and export prohibitions, import and export restrictions, environmental conservation, and counterfeits and contrabands."
  },
  {
    topic: "Protection of Society",
    front: "What other harmful activities are listed as part of Customs protection work?",
    back: "Import and export quotas, money laundering, and human trafficking."
  },
  {
    topic: "Anti-Smuggling",
    front: "How does Customs prevent smuggling through control of conveyances?",
    back: "By requiring conveyances to dock or depart, patrolling entry and exit points, stopping suspected conveyances, and boarding and searching conveyances."
  },
  {
    topic: "Anti-Smuggling",
    front: "How does Customs use questioning and arrest powers to prevent smuggling?",
    back: "By questioning any person coming into or leaving a partner state and enforcing the power to arrest under sections 156 and 7."
  },
  {
    topic: "Customs Control",
    front: "What is customs control?",
    back: "Measures put in place to ensure compliance with customs laws and regulate movement of resources from, into, and within a country."
  },
  {
    topic: "Customs Control",
    front: "What two broad things do customs laws apply to according to the slides?",
    back: "Fiscal obligations and prohibitions and restrictions."
  },
  {
    topic: "Customs Control",
    front: "What are customs barriers?",
    back: "Physical or non-physical structures employed by customs authorities to regulate movement of resources."
  },
  {
    topic: "Physical Barriers",
    front: "What are physical barriers in customs control?",
    back: "Physical structures put in place to hinder movement of people and goods, such as walls or trenches."
  },
  {
    topic: "Legislative Barriers",
    front: "What are legislative barriers in customs control?",
    back: "Non-physical barriers that regulate movement of resources."
  },
  {
    topic: "Legislative Barriers",
    front: "What is a tariff barrier?",
    back: "A tax on imports or exports."
  },
  {
    topic: "Legislative Barriers",
    front: "What is a non-tariff barrier?",
    back: "A condition or restriction imposed to regulate trade without directly being a tax."
  },
  {
    topic: "Non-Tariff Barriers",
    front: "Give examples of non-tariff barriers mentioned in the slides.",
    back: "Restriction or total ban, quota system, pre-shipment inspection, strict quality control, exchange rate control policies, and import and export licences."
  },
  {
    topic: "Justification of Barriers",
    front: "What are some justifications for customs barriers?",
    back: "Protection of infant industries, control of arms and ammunition, food security, protection of religion and culture, protection of national heritage, and protection of human, animal, and plant health."
  },
  {
    topic: "Cons of Barriers",
    front: "What are some disadvantages of customs barriers?",
    back: "Decrease in trade, protection of inefficient industries, increased cost of transactions, imbalance in trade and growth, and restriction of investment opportunities."
  },
  {
    topic: "Basic Control Tools",
    front: "What is one basic control tool used by Customs relating to points of entry and exit?",
    back: "Appointment and gazettement of entry and exit points such as seaports, airports, and border stations."
  },
  {
    topic: "Basic Control Tools",
    front: "What is one basic control tool used by Customs relating to territory management?",
    back: "Appointment of customs areas within the territory."
  },
  {
    topic: "Basic Control Tools",
    front: "What is one basic control tool used by Customs relating to conveyances?",
    back: "Control of entry and exit of vessels, aircraft, and vehicles into or out of the country."
  },
  {
    topic: "Basic Control Tools",
    front: "What is one basic control tool used by Customs relating to declarations?",
    back: "Mandatory declaration of goods upon importation or exportation."
  },
  {
    topic: "Basic Control Tools",
    front: "What does designation of the scope of customs control mean?",
    back: "Defining the extent and reach of customs control over goods, persons, conveyances, and areas."
  },
  {
    topic: "Customs Areas",
    front: "Which EACCMA sections are linked to Customs areas in the slides?",
    back: "Sections 11 and 12."
  },
  {
    topic: "Customs Areas",
    front: "Name some examples of customs areas listed in the slides.",
    back: "Customs air and sea ports, border stations, places of loading and unloading, boarding stations, bonded and customs warehouses, sufferance wharves, baggage halls, transit sheds, verification places, and routes for conveyance of goods under customs control."
  },
  {
    topic: "Reports",
    front: "Who is obliged by law to submit inward and outward reports?",
    back: "The owner or agent of any means of conveyance."
  },
  {
    topic: "Reports",
    front: "Which conveyances must be reported on departure or arrival?",
    back: "Every vessel, aircraft, or vehicle."
  },
  {
    topic: "Reports",
    front: "What timing rule for vessel reports is mentioned in the slides?",
    back: "Generally, reports are made 24 hours in advance for vessels."
  },
  {
    topic: "Reports",
    front: "What is the general rule on unloading before an inward report?",
    back: "For imports, there should be no unloading before the report except with permission of Customs."
  },
  {
    topic: "Customs Declaration",
    front: "Which EACCMA sections are linked to customs entry in the slides?",
    back: "Sections 34, 73, and 94."
  },
  {
    topic: "Customs Declaration",
    front: "Who must make a customs declaration of goods according to the slide on customs declaration?",
    back: "Every importer in the inward report."
  },
  {
    topic: "Customs Declaration",
    front: "Within what general framework must declarations be made?",
    back: "Within a specified period set by law."
  },
  {
    topic: "Customs Declaration",
    front: "What is the basic rule on loading or unloading before entry?",
    back: "No unloading or loading of cargo prior to entry."
  },
  {
    topic: "Goods under Customs Control",
    front: "Which EACCMA section is mentioned as giving authority over goods under customs control?",
    back: "Section 16."
  },
  {
    topic: "Goods under Customs Control",
    front: "What broad authority does section 16 give according to the slides?",
    back: "Authority to regulate movement of all imports and exports into and out of the Customs Union and develop procedures for handling goods under customs control."
  },
  {
    topic: "Goods under Customs Control",
    front: "Why are certain goods designated to be automatically under customs control at all times?",
    back: "To increase the customs dragnet and maintain stronger oversight."
  },
  {
    topic: "Goods under Customs Control",
    front: "What examination power applies to goods deemed under customs control?",
    back: "They may be examined by Customs at any time."
  },
  {
    topic: "Goods under Customs Control",
    front: "When are imports under customs control according to the examples in the slides?",
    back: "From time of importation until delivery for home use or exportation."
  },
  {
    topic: "Goods under Customs Control",
    front: "When are goods under drawback under customs control?",
    back: "From the time of claim for drawback until exportation."
  },
  {
    topic: "Goods under Customs Control",
    front: "When are dutiable exports under customs control?",
    back: "From the time they are brought to a place for exportation until exportation."
  },
  {
    topic: "Goods under Customs Control",
    front: "When are restricted exports under customs control?",
    back: "From the time they are brought to a place for exportation until exportation."
  },
  {
    topic: "Goods under Customs Control",
    front: "Which stored export goods are under customs control according to the slides?",
    back: "All goods stored in the customs area pending exportation."
  },
  {
    topic: "Goods under Customs Control",
    front: "How are goods in aircraft or vessels treated while within Kenya according to the slides?",
    back: "They are deemed to be under customs control."
  },
  {
    topic: "Goods under Customs Control",
    front: "What imported dutiable goods are under customs control according to the examples?",
    back: "All imported dutiable goods on which duty has not been paid."
  },
  {
    topic: "Goods under Customs Control",
    front: "What enforcement-related goods are automatically under customs control?",
    back: "All seized goods and goods under notice of seizure."
  },
  {
    topic: "Legal Authority",
    front: "What governs all customs work and activities according to the slides?",
    back: "Law, including international agreements, statutes, and administrative instructions."
  },
  {
    topic: "Legal Authority",
    front: "Name four legal authorities listed in the slides.",
    back: "EAC Customs Management Act, 2004; EAC Customs Management Regulation, 2006/2010; other legal authorities; and East African Community Rules of Origin."
  },
  {
    topic: "EACCMA",
    front: "What is the role of the East African Customs Management Act, 2004?",
    back: "It is the principal law used in carrying out customs work in Kenya and EAC partner states that have joined the Customs Union."
  },
  {
    topic: "EACCMA",
    front: "Who makes and amends EACCMA according to the slides?",
    back: "The Council of Ministers at the East African Legislative Assembly, according to the slide wording."
  },
  {
    topic: "EACCMA Schedules",
    front: "What does the 1st Schedule of EACCMA cover?",
    back: "Declaration by Officers."
  },
  {
    topic: "EACCMA Schedules",
    front: "What does the 2nd Schedule of EACCMA cover?",
    back: "Prohibited and Restricted Imports."
  },
  {
    topic: "EACCMA Schedules",
    front: "What does the 3rd Schedule of EACCMA cover?",
    back: "Prohibited and Restricted Exports."
  },
  {
    topic: "EACCMA Schedules",
    front: "What does the 4th Schedule of EACCMA cover?",
    back: "Valuation of Imported Goods."
  },
  {
    topic: "EACCMA Schedules",
    front: "What does the 5th Schedule of EACCMA cover?",
    back: "Exemption Regime."
  },
  {
    topic: "EACCMA Schedules",
    front: "What does the 6th Schedule of EACCMA cover?",
    back: "Warrant of Distress."
  },
  {
    topic: "EACCMR",
    front: "What is the purpose of the EAC Customs Management Regulations according to the slides?",
    back: "They explain the Act further and provide the required details for customs procedures or activities."
  },
  {
    topic: "EACCMR",
    front: "Why are the regulations important in customs practice?",
    back: "Because they give details and explain the Customs Act further."
  },
  {
    topic: "Smart Customs",
    front: "What is the main goal of Smart Customs of the future according to the slides?",
    back: "To minimize customs clearance time and costs while intelligently managing inbound and outbound goods and vehicles."
  },
  {
    topic: "Smart Customs",
    front: "Which IoT tools are mentioned as part of Smart Customs?",
    back: "Drones, smart gates, and smart seals."
  },
  {
    topic: "Smart Customs",
    front: "Which advanced digital technologies are mentioned as part of Smart Customs?",
    back: "Artificial intelligence, machine learning, and data analytics."
  },
  {
    topic: "Smart Customs",
    front: "What sustainability and control themes are listed under Smart Customs?",
    back: "Green customs and strategic trade control."
  },
  {
    topic: "Smart Customs",
    front: "What institutional values are emphasized for future customs administrations?",
    back: "Integrity, international cooperation, information sharing, and capacity building."
  },
  {
    topic: "Recap",
    front: "How do traditional and modern customs administrations differ according to the recap slide?",
    back: "They differ in priorities, systems, methods, and orientation, moving from traditional gatekeeping and manual processes toward risk management, automation, and broader societal protection."
  },
  {
    topic: "Recap",
    front: "What shift occurred from monarchy-focused customs systems to modern customs systems?",
    back: "A shift from individualistic interest of monarchs to the interests of the country."
  },
  {
    topic: "Recap",
    front: "What operational shift occurred from traditional to modern customs control?",
    back: "A shift from traditional gatekeeping to adoption of risk management."
  },
  {
    topic: "Recap",
    front: "What systems shift occurred in declarations according to the recap slide?",
    back: "A shift from manual declarations to automated customs systems."
  },
  {
    topic: "Recap",
    front: "What inspection shift occurred in modern customs administrations?",
    back: "A shift from physical inspection and verification to non-intrusive inspection."
  },
  {
    topic: "Recap",
    front: "What major policy shift occurred in the role of Customs according to the recap slide?",
    back: "A shift from enforcement alone to trade facilitation."
  },
  {
    topic: "Recap",
    front: "What paradigm shift in customs purpose is highlighted at the end of the recap slide?",
    back: "A shift from revenue collection to supply chain security and environmental protection."
  },
  {
    topic: "Other Legal References",
    front: "Name three additional legal references listed at the end of the presentation.",
    back: "COMESA Rules of Origin, East African Community Protocol, and EAC Common External Tariff (CET)."
  },
  {
    topic: "Other Legal References",
    front: "Which international facilitation and trade legal references are listed at the end of the slides?",
    back: "The Revised Kyoto Convention and WTO Trade Facilitation Agreements."
  },
];
