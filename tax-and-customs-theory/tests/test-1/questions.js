const QUESTIONS = [
  {
    id: 1,
    question: "In revision, which statement is accurate? Who is obliged by law to submit inward and outward reports according to the slides?",
    options: ["The owner or agent of the means of conveyance", "Only the WCO Secretariat", "Only the Customs Co-operation Council", "Only the passenger with personal baggage"],
    correct: 0,
    explanation: "The inward/outward reports slide places the obligation on the owner or agent."
  },
  {
    id: 2,
    question: "How did taxation begin in early communities according to the presentation?",
    options: ["Only priests collected customs tariffs at temples", "Merchants created a customs union before rulers intervened", "Members of communities gave their chiefs or leaders gifts in return for leadership", "Kings imposed VAT on all goods at the seaport"],
    correct: 2,
    explanation: "The slides explain taxation began with gifts to chiefs or leaders."
  },
  {
    id: 3,
    question: "Which option best reflects the presentation? How many customs ports had been established in Canada by 1845?",
    options: ["20", "151", "194", "63"],
    correct: 3,
    explanation: "The presentation states that 63 customs ports in Canada had been established by 1845."
  },
  {
    id: 4,
    question: "Scenario variant: An administration needs guidance on HS classification, valuation, and rules of origin while modernizing customs systems. Which institution from the presentation is most relevant?",
    options: ["Only the 1643 English Board of Customs", "The World Customs Organization", "The Customs Preventive Service of Ghana", "The EAC Mediation Agreement"],
    correct: 1,
    explanation: "The WCO is presented as the key body for HS, valuation, rules of origin, and modernization support."
  },
  {
    id: 5,
    question: "Who must make declaration of goods according to the presentation?",
    options: ["Every importer in the inward report", "Only members of the WCO Council", "Only warehouse keepers", "Only exporters using the red channel"],
    correct: 0,
    explanation: "The customs declaration slide states every importer in the inward report must declare goods."
  },
  {
    id: 6,
    question: "Which option best reflects the presentation? Which issue is specifically included under Customs protection of society and industry?",
    options: ["Only internal municipal licensing", "Only warehouse rent disputes", "Counterfeits and contrabands", "Only school curriculum reform"],
    correct: 2,
    explanation: "Counterfeits and contrabands appear on the protection slide."
  },
  {
    id: 7,
    question: "In revision, which statement is accurate? Which export-related goods are under customs control according to the presentation?",
    options: ["Only exports after final sale", "Only exports that are never restricted", "Only exports already cleared from customs control", "All dutiable exports from when they are brought to a place for exportation until exportation"],
    correct: 3,
    explanation: "The presentation lists dutiable exports in this way."
  },
  {
    id: 8,
    question: "When was the convention establishing the Customs Cooperation Council signed?",
    options: ["On 26 January 1953 in Paris", "On 15 December 1950 in Brussels", "On 4 November 1952 in London", "In 1994 in Brussels"],
    correct: 1,
    explanation: "The slides state the convention was signed on 15 December 1950 in Brussels."
  },
  {
    id: 9,
    question: "Which option best reflects the presentation? What is one of the stated objectives of the Tax and Customs Theory course?",
    options: ["To train only on tariff computation and valuation schedules", "To replace all customs laws with administrative practice", "To focus exclusively on East African ports and airports", "To define Customs, explain the historical evolution of Customs, explain the evolution of modern Customs administrations, and discuss future roles of Customs administrations"],
    correct: 3,
    explanation: "The objectives slide lists these four broad outcomes."
  },
  {
    id: 10,
    question: "In revision, which statement is accurate? Which enforcement-related items are specifically mentioned as being under customs control?",
    options: ["Only goods after import duty has been remitted", "Only goods that are not declared anywhere", "All seized goods and goods under notice of seizure", "Only goods in private shops"],
    correct: 2,
    explanation: "The slides list seized goods and goods under notice of seizure."
  },
  {
    id: 11,
    question: "Which is an example of a non-tariff barrier from the slides?",
    options: ["Gross weight duty calculation", "Quota system", "Common currency in 1949", "WCO Secretariat staffing"],
    correct: 1,
    explanation: "Quota system is listed among non-tariff barriers."
  },
  {
    id: 12,
    question: "Which option best reflects the presentation? When did international cooperation in customs matters begin under the League of Nations according to the slides?",
    options: ["In 1924", "In 1890", "In 1994", "In 1948"],
    correct: 0,
    explanation: "The development slide says cooperation began under the League of Nations in 1924."
  },
  {
    id: 13,
    question: "In revision, which statement is accurate? Which additional factor contributed to the collapse of the EAC?",
    options: ["Excessive use of the green channel", "Continued disproportionate sharing of Community benefits among Partner States", "Too much private sector participation", "Overuse of non-intrusive inspection"],
    correct: 1,
    explanation: "The presentation says disproportionate benefit sharing contributed to collapse."
  },
  {
    id: 14,
    question: "What was the purpose of the Board of Customs established by ordinance on 21 January 1643?",
    options: ["To draft the modern HS nomenclature", "To unify the customs boards of England, Scotland, and Ireland immediately", "To regulate, manage, and centralize the collection of duties on imported and some exported goods", "To replace all English courts with customs courts"],
    correct: 2,
    explanation: "The 1643 Board of Customs was meant to regulate, manage, and centralize duty collection."
  },
  {
    id: 15,
    question: "Which option best reflects the presentation? Which combination correctly reflects features of East African customs in the presentation?",
    options: ["Full prohibition of internal trade; end of currency systems; no common administration", "Only one port allowed per country; no common tariff; no free movement", "Replacement of customs duties with only direct taxes", "Free movement of goods, capital and labor; free trade in East African origin products; common administration of transport and communication"],
    correct: 3,
    explanation: "These features are listed together on the presentation slides."
  },
  {
    id: 16,
    question: "In revision, which statement is accurate? Which is one of the WCO's stated objectives in the presentation?",
    options: ["To facilitate international trade through simplification and harmonization of customs procedures", "To eliminate all document verification", "To replace national customs administrations completely", "To abolish all customs duties everywhere"],
    correct: 0,
    explanation: "Trade facilitation through simplification and harmonization is one of the WCO objectives listed."
  },
  {
    id: 17,
    question: "How does the presentation describe EACCMA 2004?",
    options: ["As a body that replaced all regulations", "As the principal law on Customs used in Kenya and EAC partner states that have joined the Customs Union", "As a historical European customs treaty only", "As a non-binding guideline for private traders"],
    correct: 1,
    explanation: "The EACCMA slide calls it the principal law on Customs."
  },
  {
    id: 18,
    question: "Which option best reflects the presentation? When were English collectors of Customs first appointed?",
    options: ["In 1203", "In 1643", "In 1298", "In 1823"],
    correct: 2,
    explanation: "The presentation gives 1298 as the first appointment of English collectors of Customs."
  },
  {
    id: 19,
    question: "In revision, which statement is accurate? Which is one justification for customs barriers mentioned in the presentation?",
    options: ["Protection of infant industries", "To eliminate all customs administrations", "To end all health controls", "To prevent all trade statistics collection"],
    correct: 0,
    explanation: "The justification slide begins with protection of infant industries."
  },
  {
    id: 20,
    question: "What is a non-tariff barrier according to the presentation?",
    options: ["A customs duty computed on gross weight", "A customs officer declaration", "A court-issued warrant of distress", "A condition or restriction imposed to regulate trade without being a direct tax"],
    correct: 3,
    explanation: "The presentation distinguishes non-tariff barriers from tariff barriers."
  },
  {
    id: 21,
    question: "Which option best reflects the presentation? Which activity is part of customs assessment and collection of taxes on imported goods?",
    options: ["Replacing the HS nomenclature", "Judging all commercial disputes", "Valuation of goods", "Drafting national constitutions"],
    correct: 2,
    explanation: "The assessment and collection slide lists valuation as one of the steps."
  },
  {
    id: 22,
    question: "In revision, which statement is accurate? Who heads the WCO Secretariat?",
    options: ["The Chair of the EAC Council of Ministers", "The Secretary General", "The Commissioner", "The Principal Collector"],
    correct: 1,
    explanation: "The Secretariat is headed by a Secretary General."
  },
  {
    id: 23,
    question: "How did taxation begin in early communities according to the presentation?",
    options: ["Kings imposed VAT on all goods at the seaport", "Only priests collected customs tariffs at temples", "Merchants created a customs union before rulers intervened", "Members of communities gave their chiefs or leaders gifts in return for leadership"],
    correct: 3,
    explanation: "The slides explain taxation began with gifts to chiefs or leaders."
  },
  {
    id: 24,
    question: "Which option best reflects the presentation? Which is one basic control tool used by Customs according to the presentation?",
    options: ["Appointment and gazettement of entry and exit points such as seaports, airports, and border stations", "Removal of all mandatory declarations", "Abolition of customs areas", "Ending control of conveyances"],
    correct: 0,
    explanation: "The basic control tools slide lists appointment and gazettement of entry and exit points."
  },
  {
    id: 25,
    question: "In revision, which statement is accurate? What is the basic rule on loading or unloading cargo before entry?",
    options: ["Cargo may be loaded before entry if trade statistics have been collected", "Only vessel cargo must wait, but aircraft cargo need not", "Loading is always allowed before entry if the goods are valuable", "No unloading or loading of cargo prior to entry"],
    correct: 3,
    explanation: "The customs declaration slide clearly states no unloading or loading prior to entry."
  },
  {
    id: 26,
    question: "When was the convention establishing the Customs Cooperation Council signed?",
    options: ["On 26 January 1953 in Paris", "On 15 December 1950 in Brussels", "On 4 November 1952 in London", "In 1994 in Brussels"],
    correct: 1,
    explanation: "The slides state the convention was signed on 15 December 1950 in Brussels."
  },
  {
    id: 27,
    question: "Which option best reflects the presentation? Which is listed as one of the key legal authorities for customs work?",
    options: ["EAC Customs Management Act, 2004", "Only private stakeholder agreements", "English Board of Customs Ordinance, 1643", "Canadian Customs Act, 1868 as East African principal law"],
    correct: 0,
    explanation: "EACCMA 2004 is listed as a principal legal authority."
  },
  {
    id: 28,
    question: "In revision, which statement is accurate? Which facilitation incentives or arrangements are mentioned in the presentation?",
    options: ["Only anti-dumping duties and countervailing duties", "Only warrant of distress procedures", "SEZ, EPZ, EPAs, AfCFTA, AGOA, EAC, and COMESA", "Only domestic excise rebates"],
    correct: 2,
    explanation: "These are listed on the trade facilitation slide."
  },
  {
    id: 29,
    question: "What are the working languages of the WCO according to the presentation?",
    options: ["English and Portuguese", "French and Swahili", "English and Arabic", "English and French"],
    correct: 3,
    explanation: "The presentation states that the working languages are English and French."
  },
  {
    id: 30,
    question: "Which option best reflects the presentation? When did the centralized English Customs system begin according to the presentation?",
    options: ["In 1203-1204 during the reign of King John II", "In 1825 after legislative consolidation", "In 1643 during the English civil war", "In 1298 when collectors were first appointed"],
    correct: 0,
    explanation: "The Europe slide states the centralized English Customs system started in 1203-4."
  },
  {
    id: 31,
    question: "In revision, which statement is accurate? Which is a key feature of East African customs mentioned in the presentation?",
    options: ["No role for customs statistics", "No movement of goods within East Africa", "Single collection center of import duty at the point of entry", "Mandatory abolition of all border stations"],
    correct: 2,
    explanation: "The features slide lists single collection center at the point of entry."
  },
  {
    id: 32,
    question: "Which is a key feature of East African customs mentioned in the presentation?",
    options: ["No role for customs statistics", "Single collection center of import duty at the point of entry", "Mandatory abolition of all border stations", "No movement of goods within East Africa"],
    correct: 1,
    explanation: "The features slide lists single collection center at the point of entry."
  },
  {
    id: 33,
    question: "Which option best reflects the presentation? Which is one justification for customs barriers mentioned in the presentation?",
    options: ["To prevent all trade statistics collection", "To end all health controls", "Protection of infant industries", "To eliminate all customs administrations"],
    correct: 2,
    explanation: "The justification slide begins with protection of infant industries."
  },
  {
    id: 34,
    question: "In revision, which statement is accurate? By 1900, what scale had the Chinese customs system reached according to the presentation?",
    options: ["151 staff in a single secretariat in Brussels", "About 20,000 people working in 40 main custom houses across China in a unified tax system", "A three-country customs union with common currency", "63 customs ports only on the US-Canada border"],
    correct: 1,
    explanation: "The Asia slide states this scale for the Chinese system."
  },
  {
    id: 35,
    question: "What is the stated rule on unloading before an inward report for imports?",
    options: ["There should be no unloading before the report except with permission of Customs", "Only bonded goods may be unloaded before report without permission", "Only aircraft must wait for reporting, not vessels", "Unloading is always allowed before any report"],
    correct: 0,
    explanation: "The inward/outward reports slide states that imports should not be unloaded before reporting except with permission."
  },
  {
    id: 36,
    question: "Which option best reflects the presentation? What is a non-tariff barrier according to the presentation?",
    options: ["A court-issued warrant of distress", "A customs officer declaration", "A customs duty computed on gross weight", "A condition or restriction imposed to regulate trade without being a direct tax"],
    correct: 3,
    explanation: "The presentation distinguishes non-tariff barriers from tariff barriers."
  },
  {
    id: 37,
    question: "In revision, which statement is accurate? What is the main goal of Smart Customs of the future according to the presentation?",
    options: ["To remove all customs control entirely", "To focus solely on monarchy-era revenue collection", "To minimize customs clearance time and costs while intelligently managing inbound and outbound goods and vehicles", "To return permanently to only manual declarations"],
    correct: 2,
    explanation: "The Smart Customs slide states this overarching goal."
  },
  {
    id: 38,
    question: "What began in East Africa in 1923 according to the presentation?",
    options: ["The WCO working name", "A single customs territory with a Common External Tariff and internal free trade", "The Customs Preventive Service in Ghana", "The collapse of the EAC"],
    correct: 1,
    explanation: "The slides note that internal free trade and a CET began in 1923."
  },
  {
    id: 39,
    question: "Which option best reflects the presentation? Why did customs duties become reliable sources of public revenue in earlier times?",
    options: ["Because they were relatively easy to collect at specified points such as bridges and gates", "Because customs applied only to luxury goods", "Because customs officers worked without rulers", "Because all internal taxes had already been abolished"],
    correct: 0,
    explanation: "The presentation says customs duties were easy to collect and became reliable sources of public revenue."
  },
  {
    id: 40,
    question: "Scenario variant: A customs administration speeds up low-risk trade flows while still checking prohibited goods, collecting taxes, and protecting society. Which idea from the presentation best explains this balance?",
    options: ["Modern Customs should eliminate all restrictions and taxes at once", "Customs exists only to run courts and not borders", "Customs should only collect trade statistics and avoid control functions", "Modern Customs combines trade facilitation, revenue collection, and protection of society rather than focusing on only one role"],
    correct: 3,
    explanation: "The presentation repeatedly presents Customs as a balance of facilitation, revenue, enforcement, and protection."
  },
  {
    id: 41,
    question: "Which EACCMA section is linked to goods under customs control in the presentation?",
    options: ["Section 16", "Section 34", "Section 229", "Section 2"],
    correct: 0,
    explanation: "The goods under customs control slide refers to section 16."
  },
  {
    id: 42,
    question: "Which option best reflects the presentation? What is the World Customs Organization according to the presentation?",
    options: ["A regional customs court for East Africa", "A private trade association for brokers", "A department of the WTO", "An independent intergovernmental body whose mission is to improve the administration of Customs, headquartered in Brussels"],
    correct: 3,
    explanation: "The WCO slide defines it as an independent intergovernmental body."
  },
  {
    id: 43,
    question: "In revision, which statement is accurate? Which customs revenue issue contributed to the collapse of the EAC according to the presentation?",
    options: ["Use of baggage halls and transit sheds", "Allocation of customs revenue among members on the basis of derivation by country of ultimate destination", "Adoption of smart seals and drones", "Failure to create the WTO"],
    correct: 1,
    explanation: "The EAC collapse slide specifically mentions derivation-based allocation."
  },
  {
    id: 44,
    question: "What is the role of the EAC Customs Management Regulations according to the presentation?",
    options: ["They only apply to non-tariff barriers in Europe", "They replace the Act entirely", "They explain the Act further and provide details required for customs procedures and activities", "They abolish schedules"],
    correct: 2,
    explanation: "The EACCMR slide says regulations explain the Act and provide details."
  },
  {
    id: 45,
    question: "Which option best reflects the presentation? Why does Customs collect statistics according to the presentation?",
    options: ["Only to determine judicial appeals", "Only to support private warehouses", "Only to punish traders", "For international and regional trade records, money movements, internal planning, and balance of trade computation"],
    correct: 3,
    explanation: "The statistics slide lists these uses."
  },
  {
    id: 46,
    question: "In revision, which statement is accurate? When was the convention establishing the Customs Cooperation Council signed?",
    options: ["On 4 November 1952 in London", "On 15 December 1950 in Brussels", "On 26 January 1953 in Paris", "In 1994 in Brussels"],
    correct: 1,
    explanation: "The slides state the convention was signed on 15 December 1950 in Brussels."
  },
  {
    id: 47,
    question: "Which additional factor contributed to the collapse of the EAC?",
    options: ["Excessive use of the green channel", "Overuse of non-intrusive inspection", "Continued disproportionate sharing of Community benefits among Partner States", "Too much private sector participation"],
    correct: 2,
    explanation: "The presentation says disproportionate benefit sharing contributed to collapse."
  },
  {
    id: 48,
    question: "Which option best reflects the presentation? Which of the following is listed as a customs area or control point in the presentation?",
    options: ["Baggage halls", "Private residences by default", "Parliamentary chambers", "Company boardrooms"],
    correct: 0,
    explanation: "Baggage halls are expressly listed among customs areas/control points."
  },
  {
    id: 49,
    question: "In revision, which statement is accurate? By 1900, what scale had the Chinese customs system reached according to the presentation?",
    options: ["63 customs ports only on the US-Canada border", "A three-country customs union with common currency", "151 staff in a single secretariat in Brussels", "About 20,000 people working in 40 main custom houses across China in a unified tax system"],
    correct: 3,
    explanation: "The Asia slide states this scale for the Chinese system."
  },
  {
    id: 50,
    question: "Which set correctly reflects customs tax collection activities in the presentation?",
    options: ["Only valuation and warehouse rent collection", "Valuation, verification of trading documents, classification, computation of taxes, checking declarations, and monitoring exemptions", "Auction, mediation, court sentencing, and political negotiation", "Only import licensing and police patrols"],
    correct: 1,
    explanation: "These six items are listed on the tax collection slide."
  },
];
