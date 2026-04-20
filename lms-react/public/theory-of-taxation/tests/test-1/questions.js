const QUESTIONS = [
  {
    id: 1,
    question: "In revision, which statement is accurate? What are stamp duties?",
    options: ["Taxes on consumption through retail purchases only", "Charges imposed on all imports at a flat rate", "Transactional taxes imposed on the execution of certain documents", "Taxes on all employment income"],
    correct: 2,
    explanation: "The slides define stamp duties in this way."
  },
  {
    id: 2,
    question: "Why would government be unable to properly function without taxation according to the slides?",
    options: ["Because taxation is the only form of law in the country", "Because taxation provides resources needed to finance operations and public goods and services", "Because taxes automatically replace all other revenue", "Because no other source of revenue exists at all"],
    correct: 1,
    explanation: "The slides explain that taxation funds operations and public goods/services."
  },
  {
    id: 3,
    question: "Which option best reflects the presentation? Who administers the tax laws in Kenya according to the slides?",
    options: ["The Judiciary", "Parliament", "The WCO Secretariat", "KRA"],
    correct: 3,
    explanation: "The presentation states that KRA administers tax laws."
  },
  {
    id: 4,
    question: "In revision, which statement is accurate? Why are DTAs important according to the presentation?",
    options: ["Because they address double taxation, which is a major impediment to cross-border trade and investment", "Because they only regulate customs warehouses", "Because they eliminate the need for residence rules", "Because they replace all domestic tax laws"],
    correct: 0,
    explanation: "The DTA section explains their role in addressing double taxation."
  },
  {
    id: 5,
    question: "Who administers the tax laws in Kenya according to the slides?",
    options: ["Parliament", "The Judiciary", "The WCO Secretariat", "KRA"],
    correct: 3,
    explanation: "The presentation states that KRA administers tax laws."
  },
  {
    id: 6,
    question: "Which option best reflects the presentation? Why might governments intentionally depart from neutrality?",
    options: ["To achieve specific policy objectives", "Because all taxes must be regressive", "Because governments cannot set policy", "Because neutrality is unlawful"],
    correct: 0,
    explanation: "The presentation notes that neutrality is sometimes intentionally sacrificed."
  },
  {
    id: 7,
    question: "In revision, which statement is accurate? What is the income tax period in Kenya according to the presentation?",
    options: ["A five-year period", "A quarterly period", "The year of income from 1 January to 31 December", "A monthly period"],
    correct: 2,
    explanation: "The presentation identifies the year of income as 1 January to 31 December."
  },
  {
    id: 8,
    question: "What does efficiency in collection mean in tax policy?",
    options: ["Only direct taxes matter for efficiency", "Collection costs should be kept to a minimum for both government and taxpayers", "Efficient taxes are those with the highest rates", "Tax should be expensive to administer to prove seriousness"],
    correct: 1,
    explanation: "The slides define efficiency in collection this way."
  },
  {
    id: 9,
    question: "Which option best reflects the presentation? What are tax expenditures?",
    options: ["All taxes imposed at the border", "All government expenditures funded by borrowing only", "Deviations from the benchmark tax system designed to provide benefits to targeted taxpayers", "Only penalties for tax evasion"],
    correct: 2,
    explanation: "The slides define tax expenditures in this way."
  },
  {
    id: 10,
    question: "In revision, which statement is accurate? Can the burden of a direct tax be shifted by the taxpayer to someone else?",
    options: ["No, the burden cannot be shifted", "Yes, but only through customs duty", "Yes, always to the consumer", "Yes, but only through a foreign tax credit"],
    correct: 0,
    explanation: "The presentation says direct tax burden cannot be shifted."
  },
  {
    id: 11,
    question: "Which tax is given as an example of a proportional tax in Kenya?",
    options: ["Individual income tax", "Gift tax", "Inheritance tax", "VAT"],
    correct: 3,
    explanation: "VAT is presented as an example of a proportional tax."
  },
  {
    id: 12,
    question: "Which option best reflects the presentation? What are tax incentives designed to do?",
    options: ["Ensure all taxpayers pay the same amount", "Induce certain activities or behaviour", "Punish all non-compliance", "Replace all direct spending"],
    correct: 1,
    explanation: "Tax incentives are described as inducements."
  },
  {
    id: 13,
    question: "In revision, which statement is accurate? Which of the following is listed as a primary source of taxation law in Kenya?",
    options: ["The Constitution of the WCO", "The Kyoto customs declaration code only", "The Income Tax Act, Cap 470", "The East African Mediation Agreement"],
    correct: 2,
    explanation: "Income Tax Act, Cap 470 is expressly listed."
  },
  {
    id: 14,
    question: "How may tax expenditures be delivered under the income tax system?",
    options: ["Through exemptions, deductions, tax offsets, or concessional tax rates", "Only through customs classification", "Only through proportional tax rates", "Only through imprisonment for evasion"],
    correct: 0,
    explanation: "These methods are listed in the presentation."
  },
  {
    id: 15,
    question: "Which option best reflects the presentation? Which Kenyan law listed in the presentation governs tax procedures?",
    options: ["The Income Tax Act, Cap 470", "The Tax Procedures Act, 2015", "The EAC Customs Management Act only", "The Value Added Tax Act, 2013"],
    correct: 1,
    explanation: "The Tax Procedures Act, 2015 is named directly."
  },
  {
    id: 16,
    question: "In revision, which statement is accurate? What does accountability and integrity mean in tax policy?",
    options: ["Revenue authorities should be above all scrutiny", "Tax administration should be secret and unchecked", "Political interference should be encouraged to improve fairness", "Revenue authority actions should be monitored by government and subject to parliamentary scrutiny, while tax laws should be administered free of political interference and under the rule of law"],
    correct: 3,
    explanation: "These are the accountability and integrity features listed."
  },
  {
    id: 17,
    question: "How can taxation operate as a mechanism for creating economic equality?",
    options: ["By taxing only those below the poverty line", "By ensuring all taxpayers pay exactly the same amount", "By taxing the rich so government can give to the poor and redistribute wealth", "By abolishing all public spending"],
    correct: 2,
    explanation: "The redistribution slide describes this egalitarian role."
  },
  {
    id: 18,
    question: "Scenario variant: A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Redistribution", "Neutrality", "Convenience", "Certainty"],
    correct: 3,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 19,
    question: "In revision, which statement is accurate? What does certainty mean as a principle of good tax policy?",
    options: ["The rules should clearly specify when tax is to be paid, how it is to be paid, and how the amount is determined", "Tax should be calculated secretly", "Tax should only be paid when convenient for government", "Tax amounts should be arbitrary"],
    correct: 0,
    explanation: "This modern certainty principle mirrors the classic canon."
  },
  {
    id: 20,
    question: "What is the tax base for Excise Duty in Kenya according to the presentation?",
    options: ["All personal income", "Excisable goods and services", "All tax expenditures", "All property transfers"],
    correct: 1,
    explanation: "The presentation identifies excisable goods and services as the excise tax base."
  },
  {
    id: 21,
    question: "Which option best reflects the presentation? What is the usual macroeconomic effect of lower taxation according to the slides?",
    options: ["Automatic elimination of imports", "Reduced spending and a deflationary effect", "Complete neutrality in all markets", "Increased spending and potentially an inflationary effect"],
    correct: 3,
    explanation: "The presentation explains lower tax increases disposable income and spending."
  },
  {
    id: 22,
    question: "Scenario variant: A government decides to support a targeted activity by allowing a special deduction under income tax instead of collecting full tax and later paying a grant. Which concept from the slides best explains this?",
    options: ["Indirect tax incidence", "Tax expenditure as an indirect form of government spending", "The canon of certainty", "The worldwide approach to jurisdiction"],
    correct: 1,
    explanation: "The presentation explains tax expenditures as indirect government spending."
  },
  {
    id: 23,
    question: "What does the principle of fiscal and policy objectives require?",
    options: ["A good tax system should collect the intended revenue and work in harmony with broader socio-economic policy", "A good tax system should avoid all policy goals", "A good tax system should ignore revenue targets", "A good tax system should only protect customs borders"],
    correct: 0,
    explanation: "The final policy principle is presented this way."
  },
  {
    id: 24,
    question: "Which option best reflects the presentation? What is tax avoidance?",
    options: ["Refusal to pay any tax ever imposed", "Illegal concealment of taxable income", "Arranging one's affairs and finances in a way that reduces tax liability within the law", "The same thing as tax evasion"],
    correct: 2,
    explanation: "The presentation defines tax avoidance in these terms."
  },
  {
    id: 25,
    question: "In revision, which statement is accurate? Which VAT rates are mentioned in the presentation?",
    options: ["10 percent, 20 percent, and 30 percent", "0 percent, 8 percent, and 16 percent", "5 percent only", "15 percent only"],
    correct: 1,
    explanation: "These three VAT rates are listed."
  },
  {
    id: 26,
    question: "Who administers the tax laws in Kenya according to the slides?",
    options: ["KRA", "The WCO Secretariat", "The Judiciary", "Parliament"],
    correct: 0,
    explanation: "The presentation states that KRA administers tax laws."
  },
  {
    id: 27,
    question: "Which option best reflects the presentation? What is the most important and immediately recognisable role of taxation?",
    options: ["Creating all commercial transactions", "Reducing the need for legislation", "Raising revenue to fund government functions", "Replacing the judiciary in tax disputes"],
    correct: 2,
    explanation: "The presentation identifies revenue raising as the most important role."
  },
  {
    id: 28,
    question: "In revision, which statement is accurate? What are the four main canons of taxation listed in the presentation?",
    options: ["Neutrality, transparency, growth, and accountability", "Income, consumption, customs, and excise", "Residence, source, relief, and enforcement", "Equity, certainty, convenience, and economy"],
    correct: 3,
    explanation: "These are the four classic canons listed."
  },
  {
    id: 29,
    question: "How do governments use taxation to protect domestic industries according to the presentation?",
    options: ["By taxing imported goods more heavily than locally produced goods", "By exempting all imported goods from tax", "By taxing domestic goods only", "By abolishing all tariffs permanently"],
    correct: 0,
    explanation: "The presentation links taxation to domestic industry protection."
  },
  {
    id: 30,
    question: "Which option best reflects the presentation? What are the four basic structural features shared by most taxes?",
    options: ["Residence, source, treaty, and relief", "Assessment, audit, refund, and appeal", "Equity, certainty, convenience, and economy", "Taxpayers, tax base, tax periods, and tax rates"],
    correct: 3,
    explanation: "The presentation identifies these four structural features."
  },
  {
    id: 31,
    question: "A partnership earns income, but the tax is imposed on the partners rather than the partnership itself. What does this illustrate?",
    options: ["Residence-based jurisdiction", "Treatment of partnerships as flow-through entities", "Treatment of companies as opaque entities", "Tax evasion through concealment"],
    correct: 1,
    explanation: "The presentation says partnerships and trusts are generally flow-through entities."
  },
  {
    id: 32,
    question: "How are tax expenditures similar to subsidies or grants?",
    options: ["Both abolish the need for revenue collection", "Both are criminal penalties", "Both are forms of government spending, though tax expenditures are indirect while subsidies or grants are direct", "Both are always imposed through customs law"],
    correct: 2,
    explanation: "The slides explicitly compare these forms of support."
  },
  {
    id: 33,
    question: "A government decides to support a targeted activity by allowing a special deduction under income tax instead of collecting full tax and later paying a grant. Which concept from the slides best explains this?",
    options: ["The canon of certainty", "Indirect tax incidence", "The worldwide approach to jurisdiction", "Tax expenditure as an indirect form of government spending"],
    correct: 3,
    explanation: "The presentation explains tax expenditures as indirect government spending."
  },
  {
    id: 34,
    question: "Scenario variant: A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax planning", "Tax evasion", "Tax avoidance", "Tax expenditure"],
    correct: 1,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 35,
    question: "Which example of a government fee is given in the presentation?",
    options: ["Import declaration fee as a tax base", "Foreign tax credit", "Driving licence fee", "Income tax instalment"],
    correct: 2,
    explanation: "Driving licence fee is the example given."
  },
  {
    id: 36,
    question: "Which option best reflects the presentation? What does flexibility mean in a good tax system?",
    options: ["The system should cope with and, where necessary, respond to changing economic circumstances without major overhauls", "Flexibility means no rules are needed", "Tax law should be rewritten every week", "Tax law should never be changed"],
    correct: 0,
    explanation: "The presentation defines flexibility in these terms."
  },
  {
    id: 37,
    question: "In revision, which statement is accurate? What does the canon of convenience require?",
    options: ["That tax be levied only through foreign treaties", "That tax be collected only once per lifetime", "That taxes always be imposed on imported goods only", "That tax be levied at the time or in the manner most convenient for the contributor to pay"],
    correct: 3,
    explanation: "Convenience relates to ease of payment for the contributor."
  },
  {
    id: 38,
    question: "Scenario variant: A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Convenience", "Redistribution", "Certainty", "Neutrality"],
    correct: 2,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 39,
    question: "Which option best reflects the presentation? What is double taxation?",
    options: ["A situation where more than one country asserts taxing rights over the same income", "A situation where the same country taxes income twice in one day", "A flat rate tax applied twice to imports only", "A penalty for underpaying tax in two periods"],
    correct: 0,
    explanation: "The presentation defines double taxation in these terms."
  },
  {
    id: 40,
    question: "In revision, which statement is accurate? What else does taxation law cover besides liability rules?",
    options: ["Only international customs cooperation", "Administration and enforcement, including collection and recovery of tax", "Only corporate governance", "Only valuation of imported goods"],
    correct: 1,
    explanation: "The slides say taxation law extends to administration and enforcement."
  },
  {
    id: 41,
    question: "Into what two broad categories may tax expenditures be divided?",
    options: ["Marginal taxes and average taxes", "Source-based taxes and residence-based taxes", "Direct taxes and indirect taxes", "Tax incentives and tax concessions"],
    correct: 3,
    explanation: "The presentation gives these two broad categories."
  },
  {
    id: 42,
    question: "Which option best reflects the presentation? How does Kenya generally treat partnerships and trusts for tax purposes?",
    options: ["As entities exempt from all taxation", "As opaque entities taxed separately from all members", "As flow-through entities whose income is taxed in the hands of members", "As entities taxed only under customs law"],
    correct: 2,
    explanation: "The presentation says partnerships and trusts are flow-through entities."
  },
  {
    id: 43,
    question: "In revision, which statement is accurate? What does taxation law cover in relation to incidence and tax base?",
    options: ["It covers only customs classifications", "It covers who and what is subject to tax", "It covers only tax treaties between countries", "It covers only penalties for tax evasion"],
    correct: 1,
    explanation: "The slides explain that taxation law establishes the incidence of tax and tax base."
  },
  {
    id: 44,
    question: "What are tax periods?",
    options: ["The relevant periods during which taxpayers must pay tax on amounts that fall within the tax base", "The legal entities subject to tax", "The list of tax rates that apply to a taxpayer", "The administrative penalties for late filing"],
    correct: 0,
    explanation: "The slides explain tax periods in these terms."
  },
  {
    id: 45,
    question: "Which option best reflects the presentation? How are tax expenditures similar to subsidies or grants?",
    options: ["Both abolish the need for revenue collection", "Both are forms of government spending, though tax expenditures are indirect while subsidies or grants are direct", "Both are criminal penalties", "Both are always imposed through customs law"],
    correct: 1,
    explanation: "The slides explicitly compare these forms of support."
  },
  {
    id: 46,
    question: "In revision, which statement is accurate? What are bilateral international tax agreements often called?",
    options: ["Double Taxation Agreements (DTAs)", "Global Customs Codes", "Mutual Excise Protocols", "Revenue Allocation Codes"],
    correct: 0,
    explanation: "The presentation says bilateral tax treaties are often referred to as DTAs."
  },
  {
    id: 47,
    question: "What does equity and fairness mean in good tax policy?",
    options: ["Every taxpayer should always pay exactly the same amount", "Taxes should always be hidden from public view", "Only residents should ever be taxed", "Similarly situated taxpayers should be taxed similarly and each taxpayer should pay their fair share"],
    correct: 3,
    explanation: "The principle is described in these terms."
  },
  {
    id: 48,
    question: "Scenario variant: A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation should never affect social behaviour", "Taxation must always remain neutral in every circumstance", "Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals", "Taxation only serves the purpose of customs control"],
    correct: 2,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 49,
    question: "In revision, which statement is accurate? What are excise duties according to the presentation?",
    options: ["Taxes imposed only on land ownership", "Taxes on all salaries and wages", "Taxes on all judicial filings", "Taxes imposed on the production and manufacture of certain goods, and also on importation of those goods; some services may also be charged excise duty"],
    correct: 3,
    explanation: "The slides define excise duties broadly in this way."
  },
  {
    id: 50,
    question: "What is the tax unit?",
    options: ["The legal penalty for non-payment", "The subject of taxation, meaning the person or entity treated as the taxpayer", "The period over which tax is paid", "The amount of tax due"],
    correct: 1,
    explanation: "The presentation introduces the tax unit as a design question."
  },
];
