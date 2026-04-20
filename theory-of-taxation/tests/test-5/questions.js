const QUESTIONS = [
  {
    id: 1,
    question: "What is tax avoidance?",
    options: ["Refusal to pay any tax ever imposed", "Arranging one's affairs and finances in a way that reduces tax liability within the law", "The same thing as tax evasion", "Illegal concealment of taxable income"],
    correct: 1,
    explanation: "The presentation defines tax avoidance in these terms."
  },
  {
    id: 2,
    question: "Scenario variant: A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Only source-based jurisdiction", "Only efficiency in collection", "Only tax certainty", "Redistribution of wealth to promote a more egalitarian society"],
    correct: 3,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 3,
    question: "In revision, which statement is accurate? What is the tax base for Excise Duty in Kenya according to the presentation?",
    options: ["Excisable goods and services", "All tax expenditures", "All personal income", "All property transfers"],
    correct: 0,
    explanation: "The presentation identifies excisable goods and services as the excise tax base."
  },
  {
    id: 4,
    question: "Scenario variant: A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation only serves the purpose of customs control", "Taxation must always remain neutral in every circumstance", "Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals", "Taxation should never affect social behaviour"],
    correct: 2,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 5,
    question: "Which option best reflects the presentation? What are stamp duties?",
    options: ["Transactional taxes imposed on the execution of certain documents", "Charges imposed on all imports at a flat rate", "Taxes on all employment income", "Taxes on consumption through retail purchases only"],
    correct: 0,
    explanation: "The slides define stamp duties in this way."
  },
  {
    id: 6,
    question: "Scenario variant: A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Only tax certainty", "Redistribution of wealth to promote a more egalitarian society", "Only efficiency in collection", "Only source-based jurisdiction"],
    correct: 1,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 7,
    question: "A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Convenience", "Redistribution", "Neutrality", "Certainty"],
    correct: 3,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 8,
    question: "Which option best reflects the presentation? How can taxation operate as a mechanism for creating economic equality?",
    options: ["By ensuring all taxpayers pay exactly the same amount", "By taxing only those below the poverty line", "By taxing the rich so government can give to the poor and redistribute wealth", "By abolishing all public spending"],
    correct: 2,
    explanation: "The redistribution slide describes this egalitarian role."
  },
  {
    id: 9,
    question: "In revision, which statement is accurate? What is a tax-efficient plan?",
    options: ["A plan that always uses regressive tax rates", "A plan that guarantees zero taxation for everyone", "A plan that ignores tax law completely", "A plan that minimizes how much tax you pay"],
    correct: 3,
    explanation: "The final slide defines tax efficiency in this way."
  },
  {
    id: 10,
    question: "Why is consumption tax said to be the antithesis of income tax?",
    options: ["Because it never affects prices", "Because it is always progressive", "Because it taxes consumption rather than earnings", "Because it applies only to foreign goods"],
    correct: 2,
    explanation: "The presentation contrasts taxing spending with taxing earnings."
  },
  {
    id: 11,
    question: "Which option best reflects the presentation? What are tax rates?",
    options: ["Only the years in which tax is paid", "The rates at which tax is imposed, which may be flat or may vary with the level of the tax base", "Only the list of taxpayers under a regime", "Only the penalties for late payment"],
    correct: 1,
    explanation: "The slides define tax rates and explain flat versus variable structures."
  },
  {
    id: 12,
    question: "In revision, which statement is accurate? How does Kenya generally treat partnerships and trusts for tax purposes?",
    options: ["As flow-through entities whose income is taxed in the hands of members", "As entities exempt from all taxation", "As entities taxed only under customs law", "As opaque entities taxed separately from all members"],
    correct: 0,
    explanation: "The presentation says partnerships and trusts are flow-through entities."
  },
  {
    id: 13,
    question: "What are the four basic structural features shared by most taxes?",
    options: ["Assessment, audit, refund, and appeal", "Equity, certainty, convenience, and economy", "Residence, source, treaty, and relief", "Taxpayers, tax base, tax periods, and tax rates"],
    correct: 3,
    explanation: "The presentation identifies these four structural features."
  },
  {
    id: 14,
    question: "Which option best reflects the presentation? What are customs duties according to the presentation?",
    options: ["Taxes on the execution of legal documents", "Duties imposed on the importation and exportation of goods", "Taxes on pension contributions only", "Taxes imposed only on company profits"],
    correct: 1,
    explanation: "The presentation defines customs duties in these terms."
  },
  {
    id: 15,
    question: "A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation should never affect social behaviour", "Taxation only serves the purpose of customs control", "Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals", "Taxation must always remain neutral in every circumstance"],
    correct: 2,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 16,
    question: "How can taxation operate as a mechanism for creating economic equality?",
    options: ["By taxing the rich so government can give to the poor and redistribute wealth", "By ensuring all taxpayers pay exactly the same amount", "By abolishing all public spending", "By taxing only those below the poverty line"],
    correct: 0,
    explanation: "The redistribution slide describes this egalitarian role."
  },
  {
    id: 17,
    question: "Which option best reflects the presentation? Why is consumption tax said to be the antithesis of income tax?",
    options: ["Because it is always progressive", "Because it never affects prices", "Because it taxes consumption rather than earnings", "Because it applies only to foreign goods"],
    correct: 2,
    explanation: "The presentation contrasts taxing spending with taxing earnings."
  },
  {
    id: 18,
    question: "In revision, which statement is accurate? Which Kenyan law listed in the presentation governs tax procedures?",
    options: ["The Tax Procedures Act, 2015", "The EAC Customs Management Act only", "The Income Tax Act, Cap 470", "The Value Added Tax Act, 2013"],
    correct: 0,
    explanation: "The Tax Procedures Act, 2015 is named directly."
  },
  {
    id: 19,
    question: "What is a regressive tax?",
    options: ["A tax imposed only on luxury services", "A tax imposed at increasing rates", "A tax imposed only on imported goods", "A tax imposed at rates that decrease with the amount of the tax base"],
    correct: 3,
    explanation: "The presentation defines regressive taxes this way."
  },
  {
    id: 20,
    question: "Which option best reflects the presentation? What is a tax-efficient plan?",
    options: ["A plan that always uses regressive tax rates", "A plan that minimizes how much tax you pay", "A plan that guarantees zero taxation for everyone", "A plan that ignores tax law completely"],
    correct: 1,
    explanation: "The final slide defines tax efficiency in this way."
  },
  {
    id: 21,
    question: "In revision, which statement is accurate? Which tax is given as an example of a progressive tax in Kenya?",
    options: ["VAT", "Stamp duty", "Sales tax", "Income tax on individuals"],
    correct: 3,
    explanation: "Individual income tax is given as the progressive example."
  },
  {
    id: 22,
    question: "Scenario variant: A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is the legal penalty and the tax period is the exemption", "The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured", "The tax base is the court process and the tax period is the customs value", "The tax base is the rate and the tax period is the taxpayer"],
    correct: 1,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 23,
    question: "Which option best reflects the presentation? Why is consumption tax said to be the antithesis of income tax?",
    options: ["Because it taxes consumption rather than earnings", "Because it never affects prices", "Because it is always progressive", "Because it applies only to foreign goods"],
    correct: 0,
    explanation: "The presentation contrasts taxing spending with taxing earnings."
  },
  {
    id: 24,
    question: "Scenario variant: A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Only tax certainty", "Only source-based jurisdiction", "Redistribution of wealth to promote a more egalitarian society", "Only efficiency in collection"],
    correct: 2,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 25,
    question: "A taxpayer structures a transaction carefully so that only the minimum lawful amount of tax is payable. Which concept best fits this behaviour?",
    options: ["Tax evasion only", "Tax avoidance or lawful tax planning depending on the broader structure described", "A regressive tax", "A direct tax"],
    correct: 1,
    explanation: "The presentation treats lawful reduction of liability as avoidance and broader analysis as planning."
  },
  {
    id: 26,
    question: "Which option best reflects the presentation? What are the four basic structural features shared by most taxes?",
    options: ["Taxpayers, tax base, tax periods, and tax rates", "Equity, certainty, convenience, and economy", "Residence, source, treaty, and relief", "Assessment, audit, refund, and appeal"],
    correct: 0,
    explanation: "The presentation identifies these four structural features."
  },
  {
    id: 27,
    question: "In revision, which statement is accurate? What is the tax base for VAT in Kenya according to the presentation?",
    options: ["Taxable income and fringe benefits", "Only legal documents", "Only corporate dividends", "Taxable supplies and taxable importations"],
    correct: 3,
    explanation: "The slides identify the VAT tax base in this way."
  },
  {
    id: 28,
    question: "What is tax avoidance?",
    options: ["Refusal to pay any tax ever imposed", "Illegal concealment of taxable income", "Arranging one's affairs and finances in a way that reduces tax liability within the law", "The same thing as tax evasion"],
    correct: 2,
    explanation: "The presentation defines tax avoidance in these terms."
  },
  {
    id: 29,
    question: "Which option best reflects the presentation? Which of the following best explains why taxes are compulsory levies?",
    options: ["Because they are payable only after a court order", "Because they are imposed by government and are not optional for the taxpayer", "Because they are charged only when a direct service is requested", "Because taxpayers choose whether or not to contribute"],
    correct: 1,
    explanation: "Taxes are compulsory because they are enforced by the state."
  },
  {
    id: 30,
    question: "In revision, which statement is accurate? Which tax is given as an example of a progressive tax in Kenya?",
    options: ["Income tax on individuals", "Sales tax", "VAT", "Stamp duty"],
    correct: 0,
    explanation: "Individual income tax is given as the progressive example."
  },
  {
    id: 31,
    question: "What is horizontal equity?",
    options: ["People in different economic circumstances should always be treated identically", "People with foreign income should never pay tax", "Companies should always pay less than individuals", "People in similar economic circumstances should be treated similarly"],
    correct: 3,
    explanation: "The presentation defines horizontal equity this way."
  },
  {
    id: 32,
    question: "Which option best reflects the presentation? What is taxation law?",
    options: ["Only judicial decisions on tax crime", "The same thing as public finance theory", "The body of law that governs a person's liability to pay tax to the government", "Only the moral principles of equity and fairness"],
    correct: 2,
    explanation: "The presentation defines taxation law in these terms."
  },
  {
    id: 33,
    question: "In revision, which statement is accurate? What is the territorial or source-based approach to income taxation?",
    options: ["Taxing income sourced within a country's borders regardless of where the taxpayer resides", "Taxing only foreign-source income of residents", "Taxing residents on all worldwide income only", "Taxing only consumption and not income"],
    correct: 0,
    explanation: "The presentation defines source-based taxation in these terms."
  },
  {
    id: 34,
    question: "Scenario variant: A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["Indirect tax incidence", "Worldwide or residence-based jurisdiction", "Territorial or source-based jurisdiction", "A DTA exchange-of-information rule"],
    correct: 1,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 35,
    question: "Which option best reflects the presentation? Which is listed as another way government can raise revenue besides taxation?",
    options: ["Classifying imported goods under HS", "Collecting customs statistics", "Charging fees for services or licences", "Creating only tax exemptions"],
    correct: 2,
    explanation: "The slides list fees, fines, and returns from assets as non-tax funding sources."
  },
  {
    id: 36,
    question: "Scenario variant: A government decides to support a targeted activity by allowing a special deduction under income tax instead of collecting full tax and later paying a grant. Which concept from the slides best explains this?",
    options: ["Indirect tax incidence", "The canon of certainty", "The worldwide approach to jurisdiction", "Tax expenditure as an indirect form of government spending"],
    correct: 3,
    explanation: "The presentation explains tax expenditures as indirect government spending."
  },
  {
    id: 37,
    question: "What are other consumption taxes mentioned in the presentation?",
    options: ["Payroll tax and withholding tax", "Excise duty and stamp duty", "Goods and Services Tax (GST) and Sales Tax", "Property tax and inheritance tax"],
    correct: 2,
    explanation: "GST and Sales Tax are listed alongside VAT."
  },
  {
    id: 38,
    question: "Scenario variant: A tax takes the same percentage from every taxpayer regardless of the amount of the base. Which type of tax is this?",
    options: ["A regressive tax", "A marginal tax rate only", "A progressive tax", "A proportional or flat tax"],
    correct: 3,
    explanation: "The presentation defines proportional tax as same rate for all taxpayers."
  },
  {
    id: 39,
    question: "In revision, which statement is accurate? Why is consumption tax said to be the antithesis of income tax?",
    options: ["Because it taxes consumption rather than earnings", "Because it never affects prices", "Because it is always progressive", "Because it applies only to foreign goods"],
    correct: 0,
    explanation: "The presentation contrasts taxing spending with taxing earnings."
  },
  {
    id: 40,
    question: "Scenario variant: A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Convenience", "Certainty", "Neutrality", "Redistribution"],
    correct: 1,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 41,
    question: "Which option best reflects the presentation? Why are DTAs important according to the presentation?",
    options: ["Because they address double taxation, which is a major impediment to cross-border trade and investment", "Because they replace all domestic tax laws", "Because they only regulate customs warehouses", "Because they eliminate the need for residence rules"],
    correct: 0,
    explanation: "The DTA section explains their role in addressing double taxation."
  },
  {
    id: 42,
    question: "Scenario variant: Taxpayers in similar economic circumstances are taxed in the same way, while wealthier taxpayers bear a greater share of the burden. Which pair of ideas does this reflect?",
    options: ["Certainty and convenience", "Neutrality and flexibility", "Horizontal equity and vertical equity", "Source and residence jurisdiction"],
    correct: 2,
    explanation: "The presentation defines horizontal and vertical equity this way."
  },
  {
    id: 43,
    question: "What idea is reflected in the statement that nobody is required to pay more tax than they are legally obliged to pay?",
    options: ["The principle of tax evasion", "The idea underlying tax avoidance", "The rule of double taxation", "The canon of economy in collection only"],
    correct: 1,
    explanation: "The presentation uses this statement in explaining avoidance."
  },
  {
    id: 44,
    question: "Which option best reflects the presentation? What does the canon of certainty require?",
    options: ["That taxes be imposed without any notice", "That taxpayers negotiate liabilities privately", "That taxes be revised every day", "That the time, manner, and amount of payment be clear and not arbitrary"],
    correct: 3,
    explanation: "The slides define certainty in these terms."
  },
  {
    id: 45,
    question: "In revision, which statement is accurate? What does efficiency in collection mean in tax policy?",
    options: ["Efficient taxes are those with the highest rates", "Only direct taxes matter for efficiency", "Collection costs should be kept to a minimum for both government and taxpayers", "Tax should be expensive to administer to prove seriousness"],
    correct: 2,
    explanation: "The slides define efficiency in collection this way."
  },
  {
    id: 46,
    question: "What does transparency and visibility mean in tax policy?",
    options: ["Taxpayers should know that a tax exists and how and when it is imposed", "Only tax officers should know tax rules", "Tax should be imposed without any written rules", "Taxes should be hidden to reduce complaints"],
    correct: 0,
    explanation: "Transparency and visibility are defined in these terms."
  },
  {
    id: 47,
    question: "Which option best reflects the presentation? Who enacts tax laws in Kenya according to the slides?",
    options: ["KRA", "Only county governments", "The Judiciary", "Parliament"],
    correct: 3,
    explanation: "The slide on sovereign right to tax states that tax laws are enacted by Parliament."
  },
  {
    id: 48,
    question: "In revision, which statement is accurate? What does the canon of convenience require?",
    options: ["That tax be levied only through foreign treaties", "That tax be levied at the time or in the manner most convenient for the contributor to pay", "That taxes always be imposed on imported goods only", "That tax be collected only once per lifetime"],
    correct: 1,
    explanation: "Convenience relates to ease of payment for the contributor."
  },
  {
    id: 49,
    question: "When may spouses be considered a tax unit according to the presentation?",
    options: ["Only where spouses are foreign residents", "Never under Kenyan tax law", "Whenever both spouses have any income at all", "In some cases, such as where one spouse is the employee of the other"],
    correct: 3,
    explanation: "The slide gives the employee-spouse example."
  },
  {
    id: 50,
    question: "Which option best reflects the presentation? What does certainty mean as a principle of good tax policy?",
    options: ["Tax should only be paid when convenient for government", "The rules should clearly specify when tax is to be paid, how it is to be paid, and how the amount is determined", "Tax should be calculated secretly", "Tax amounts should be arbitrary"],
    correct: 1,
    explanation: "This modern certainty principle mirrors the classic canon."
  },
];
