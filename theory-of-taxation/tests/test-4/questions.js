const QUESTIONS = [
  {
    id: 1,
    question: "Scenario variant: A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Redistribution of wealth to promote a more egalitarian society", "Only source-based jurisdiction", "Only efficiency in collection", "Only tax certainty"],
    correct: 0,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 2,
    question: "How are tax expenditures similar to subsidies or grants?",
    options: ["Both are criminal penalties", "Both are always imposed through customs law", "Both are forms of government spending, though tax expenditures are indirect while subsidies or grants are direct", "Both abolish the need for revenue collection"],
    correct: 2,
    explanation: "The slides explicitly compare these forms of support."
  },
  {
    id: 3,
    question: "Scenario variant: A government decides to support a targeted activity by allowing a special deduction under income tax instead of collecting full tax and later paying a grant. Which concept from the slides best explains this?",
    options: ["The canon of certainty", "Tax expenditure as an indirect form of government spending", "Indirect tax incidence", "The worldwide approach to jurisdiction"],
    correct: 1,
    explanation: "The presentation explains tax expenditures as indirect government spending."
  },
  {
    id: 4,
    question: "In revision, which statement is accurate? What are tax expenditures?",
    options: ["All taxes imposed at the border", "All government expenditures funded by borrowing only", "Only penalties for tax evasion", "Deviations from the benchmark tax system designed to provide benefits to targeted taxpayers"],
    correct: 3,
    explanation: "The slides define tax expenditures in this way."
  },
  {
    id: 5,
    question: "Which of the following is an example of an indirect tax according to the presentation?",
    options: ["Gift tax", "Inheritance tax", "VAT", "Property tax"],
    correct: 2,
    explanation: "VAT is listed as an indirect tax."
  },
  {
    id: 6,
    question: "Which option best reflects the presentation? What are excise duties according to the presentation?",
    options: ["Taxes on all judicial filings", "Taxes imposed on the production and manufacture of certain goods, and also on importation of those goods; some services may also be charged excise duty", "Taxes imposed only on land ownership", "Taxes on all salaries and wages"],
    correct: 1,
    explanation: "The slides define excise duties broadly in this way."
  },
  {
    id: 7,
    question: "In revision, which statement is accurate? How do governments use taxation to protect domestic industries according to the presentation?",
    options: ["By taxing imported goods more heavily than locally produced goods", "By exempting all imported goods from tax", "By taxing domestic goods only", "By abolishing all tariffs permanently"],
    correct: 0,
    explanation: "The presentation links taxation to domestic industry protection."
  },
  {
    id: 8,
    question: "How does the Kenyan income tax system generally treat individuals and families?",
    options: ["It always aggregates spouses' incomes", "It never taxes individuals separately", "It always taxes the family as one unit", "It generally treats each individual as a separate tax unit"],
    correct: 3,
    explanation: "The slides explain that individuals are generally separate tax units."
  },
  {
    id: 9,
    question: "Which option best reflects the presentation? Which is listed as another way government can raise revenue besides taxation?",
    options: ["Classifying imported goods under HS", "Charging fees for services or licences", "Creating only tax exemptions", "Collecting customs statistics"],
    correct: 1,
    explanation: "The slides list fees, fines, and returns from assets as non-tax funding sources."
  },
  {
    id: 10,
    question: "In revision, which statement is accurate? What is a proportional tax?",
    options: ["A tax imposed at lower rates as income rises", "A tax imposed at higher rates as income rises", "A tax imposed only on imported goods", "A tax imposed at the same rate on all taxpayers"],
    correct: 3,
    explanation: "The presentation also calls this a flat tax."
  },
  {
    id: 11,
    question: "What does certainty mean as a principle of good tax policy?",
    options: ["Tax should be calculated secretly", "Tax should only be paid when convenient for government", "The rules should clearly specify when tax is to be paid, how it is to be paid, and how the amount is determined", "Tax amounts should be arbitrary"],
    correct: 2,
    explanation: "This modern certainty principle mirrors the classic canon."
  },
  {
    id: 12,
    question: "Which option best reflects the presentation? What should a student understand by the end of the session according to the presentation?",
    options: ["What taxes are, the functions of taxes, the principles of taxation, and the features of a good tax system", "Only the history of tax treaties", "Only tax audits and prosecutions", "Only customs duties and border posts"],
    correct: 0,
    explanation: "The learning outcome slide lists these four areas."
  },
  {
    id: 13,
    question: "In revision, which statement is accurate? Who adjudicates tax disputes in Kenya according to the slides?",
    options: ["Parliament", "The Judiciary", "The WCO Council", "KRA"],
    correct: 1,
    explanation: "The slide says adjudication is done by the Judiciary."
  },
  {
    id: 14,
    question: "What are other consumption taxes mentioned in the presentation?",
    options: ["Property tax and inheritance tax", "Excise duty and stamp duty", "Payroll tax and withholding tax", "Goods and Services Tax (GST) and Sales Tax"],
    correct: 3,
    explanation: "GST and Sales Tax are listed alongside VAT."
  },
  {
    id: 15,
    question: "Which option best reflects the presentation? Why is consumption tax said to be the antithesis of income tax?",
    options: ["Because it applies only to foreign goods", "Because it never affects prices", "Because it taxes consumption rather than earnings", "Because it is always progressive"],
    correct: 2,
    explanation: "The presentation contrasts taxing spending with taxing earnings."
  },
  {
    id: 16,
    question: "In revision, which statement is accurate? What else does taxation law cover besides liability rules?",
    options: ["Administration and enforcement, including collection and recovery of tax", "Only international customs cooperation", "Only corporate governance", "Only valuation of imported goods"],
    correct: 0,
    explanation: "The slides say taxation law extends to administration and enforcement."
  },
  {
    id: 17,
    question: "What is the worldwide or residence-based approach to income taxation?",
    options: ["Taxing all foreigners on worldwide income", "Taxing only companies and never individuals", "Taxing residents on both domestic and foreign source income, while taxing non-residents only on locally sourced income", "Taxing only income sourced within the territory"],
    correct: 2,
    explanation: "The presentation contrasts this with the territorial approach."
  },
  {
    id: 18,
    question: "A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation only serves the purpose of customs control", "Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals", "Taxation must always remain neutral in every circumstance", "Taxation should never affect social behaviour"],
    correct: 1,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 19,
    question: "In revision, which statement is accurate? What are tax periods?",
    options: ["The relevant periods during which taxpayers must pay tax on amounts that fall within the tax base", "The administrative penalties for late filing", "The legal entities subject to tax", "The list of tax rates that apply to a taxpayer"],
    correct: 0,
    explanation: "The slides explain tax periods in these terms."
  },
  {
    id: 20,
    question: "A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is the court process and the tax period is the customs value", "The tax base is the rate and the tax period is the taxpayer", "The tax base is the legal penalty and the tax period is the exemption", "The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured"],
    correct: 3,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 21,
    question: "Scenario variant: A partnership earns income, but the tax is imposed on the partners rather than the partnership itself. What does this illustrate?",
    options: ["Treatment of partnerships as flow-through entities", "Residence-based jurisdiction", "Treatment of companies as opaque entities", "Tax evasion through concealment"],
    correct: 0,
    explanation: "The presentation says partnerships and trusts are generally flow-through entities."
  },
  {
    id: 22,
    question: "A partnership earns income, but the tax is imposed on the partners rather than the partnership itself. What does this illustrate?",
    options: ["Treatment of companies as opaque entities", "Tax evasion through concealment", "Residence-based jurisdiction", "Treatment of partnerships as flow-through entities"],
    correct: 3,
    explanation: "The presentation says partnerships and trusts are generally flow-through entities."
  },
  {
    id: 23,
    question: "Which law listed in the presentation governs VAT in Kenya?",
    options: ["The Miscellaneous Fees and Levies Act", "The Excise Duty Act, 2015", "The Value Added Tax Act, 2013", "The Tax Procedures Act, 2015"],
    correct: 2,
    explanation: "The VAT Act, 2013 is specifically listed."
  },
  {
    id: 24,
    question: "Which option best reflects the presentation? What is the tax base for income tax in Kenya according to the slides?",
    options: ["All government assets and investments", "Taxable income", "Taxable supplies only", "Excisable goods and services only"],
    correct: 1,
    explanation: "Income tax is imposed on taxable income."
  },
  {
    id: 25,
    question: "Scenario variant: A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Certainty", "Neutrality", "Convenience", "Redistribution"],
    correct: 0,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 26,
    question: "Which law listed in the presentation governs VAT in Kenya?",
    options: ["The Miscellaneous Fees and Levies Act", "The Tax Procedures Act, 2015", "The Value Added Tax Act, 2013", "The Excise Duty Act, 2015"],
    correct: 2,
    explanation: "The VAT Act, 2013 is specifically listed."
  },
  {
    id: 27,
    question: "Which option best reflects the presentation? What are the four main canons of taxation listed in the presentation?",
    options: ["Neutrality, transparency, growth, and accountability", "Income, consumption, customs, and excise", "Residence, source, relief, and enforcement", "Equity, certainty, convenience, and economy"],
    correct: 3,
    explanation: "These are the four classic canons listed."
  },
  {
    id: 28,
    question: "In revision, which statement is accurate? What is a progressive tax?",
    options: ["A tax imposed at rates that decrease with the tax base", "A tax imposed at rates that increase with the amount of the tax base", "A tax imposed only on transactions", "A tax imposed at the same rate on all taxpayers"],
    correct: 1,
    explanation: "The presentation defines progressive taxes in these terms."
  },
  {
    id: 29,
    question: "How are tax expenditures similar to subsidies or grants?",
    options: ["Both are forms of government spending, though tax expenditures are indirect while subsidies or grants are direct", "Both are criminal penalties", "Both abolish the need for revenue collection", "Both are always imposed through customs law"],
    correct: 0,
    explanation: "The slides explicitly compare these forms of support."
  },
  {
    id: 30,
    question: "Which option best reflects the presentation? Which of the following best explains why taxes are compulsory levies?",
    options: ["Because they are charged only when a direct service is requested", "Because they are payable only after a court order", "Because taxpayers choose whether or not to contribute", "Because they are imposed by government and are not optional for the taxpayer"],
    correct: 3,
    explanation: "Taxes are compulsory because they are enforced by the state."
  },
  {
    id: 31,
    question: "In revision, which statement is accurate? What is the usual macroeconomic effect of higher taxation according to the slides?",
    options: ["No change in disposable income", "Automatic growth in foreign investment", "Less spending and a deflationary effect", "More spending and stronger inflationary effect"],
    correct: 2,
    explanation: "The presentation says higher taxation reduces disposable income and spending."
  },
  {
    id: 32,
    question: "A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is the rate and the tax period is the taxpayer", "The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured", "The tax base is the legal penalty and the tax period is the exemption", "The tax base is the court process and the tax period is the customs value"],
    correct: 1,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 33,
    question: "Which option best reflects the presentation? What is a direct tax?",
    options: ["A tax where the incidence and impact of taxation fall on the same person", "A tax that is never imposed on income", "A tax charged only at the border", "A tax where the burden is always shifted to consumers"],
    correct: 0,
    explanation: "The presentation explains direct tax as one where the same person bears the incidence and impact."
  },
  {
    id: 34,
    question: "In revision, which statement is accurate? How are tax expenditures similar to subsidies or grants?",
    options: ["Both are always imposed through customs law", "Both abolish the need for revenue collection", "Both are criminal penalties", "Both are forms of government spending, though tax expenditures are indirect while subsidies or grants are direct"],
    correct: 3,
    explanation: "The slides explicitly compare these forms of support."
  },
  {
    id: 35,
    question: "What does efficiency in collection mean in tax policy?",
    options: ["Efficient taxes are those with the highest rates", "Tax should be expensive to administer to prove seriousness", "Collection costs should be kept to a minimum for both government and taxpayers", "Only direct taxes matter for efficiency"],
    correct: 2,
    explanation: "The slides define efficiency in collection this way."
  },
  {
    id: 36,
    question: "Which option best reflects the presentation? How does Kenya generally treat partnerships and trusts for tax purposes?",
    options: ["As entities taxed only under customs law", "As flow-through entities whose income is taxed in the hands of members", "As opaque entities taxed separately from all members", "As entities exempt from all taxation"],
    correct: 1,
    explanation: "The presentation says partnerships and trusts are flow-through entities."
  },
  {
    id: 37,
    question: "In revision, which statement is accurate? How do governments use taxation to protect domestic industries according to the presentation?",
    options: ["By taxing domestic goods only", "By exempting all imported goods from tax", "By taxing imported goods more heavily than locally produced goods", "By abolishing all tariffs permanently"],
    correct: 2,
    explanation: "The presentation links taxation to domestic industry protection."
  },
  {
    id: 38,
    question: "A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["Territorial or source-based jurisdiction", "Worldwide or residence-based jurisdiction", "Indirect tax incidence", "A DTA exchange-of-information rule"],
    correct: 1,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 39,
    question: "Which option best reflects the presentation? What is the worldwide or residence-based approach to income taxation?",
    options: ["Taxing all foreigners on worldwide income", "Taxing only companies and never individuals", "Taxing only income sourced within the territory", "Taxing residents on both domestic and foreign source income, while taxing non-residents only on locally sourced income"],
    correct: 3,
    explanation: "The presentation contrasts this with the territorial approach."
  },
  {
    id: 40,
    question: "In revision, which statement is accurate? What is one advantage of tax expenditure programs according to the presentation?",
    options: ["They avoid double handling because government does not need to collect tax and then redistribute it separately", "They always simplify tax law", "They are always perfectly targeted", "They are always more visible than direct spending"],
    correct: 0,
    explanation: "The advantage identified is efficiency through avoiding double handling."
  },
  {
    id: 41,
    question: "What does the canon of equity require?",
    options: ["That tax be levied at the most expensive possible time", "That every person pay exactly the same tax amount", "That tax rates be hidden from taxpayers", "That persons contribute toward government support in proportion to their abilities or revenue enjoyed under the protection of the state"],
    correct: 3,
    explanation: "The presentation quotes the classic equity principle."
  },
  {
    id: 42,
    question: "Which option best reflects the presentation? What kind of society can redistributive taxation promote?",
    options: ["A more egalitarian society with a more level playing field", "A more polarised society with concentrated wealth", "A society without any government role", "A society where no one pays tax"],
    correct: 0,
    explanation: "The slides say redistribution can produce a more level playing field."
  },
  {
    id: 43,
    question: "In revision, which statement is accurate? What is a marginal tax rate?",
    options: ["The taxpayer's total tax divided by economic income", "The taxpayer's total tax divided by taxable base", "The rate of tax applied to the incremental amounts of the tax base", "The lowest rate in the tax schedule"],
    correct: 2,
    explanation: "Marginal tax rate applies to additional slices of the tax base."
  },
  {
    id: 44,
    question: "What does the canon of equity require?",
    options: ["That every person pay exactly the same tax amount", "That persons contribute toward government support in proportion to their abilities or revenue enjoyed under the protection of the state", "That tax rates be hidden from taxpayers", "That tax be levied at the most expensive possible time"],
    correct: 1,
    explanation: "The presentation quotes the classic equity principle."
  },
  {
    id: 45,
    question: "Which option best reflects the presentation? What are taxes according to the presentation?",
    options: ["Only charges paid for direct services received", "Private fees collected by companies on behalf of the state", "Voluntary donations collected by Parliament", "Involuntary fees levied on individuals or corporations and enforced by a government entity to finance government activities"],
    correct: 3,
    explanation: "The presentation defines taxes as involuntary fees enforced by government."
  },
  {
    id: 46,
    question: "In revision, which statement is accurate? What is a direct tax?",
    options: ["A tax charged only at the border", "A tax where the burden is always shifted to consumers", "A tax where the incidence and impact of taxation fall on the same person", "A tax that is never imposed on income"],
    correct: 2,
    explanation: "The presentation explains direct tax as one where the same person bears the incidence and impact."
  },
  {
    id: 47,
    question: "How may tax expenditures be delivered under the income tax system?",
    options: ["Only through imprisonment for evasion", "Through exemptions, deductions, tax offsets, or concessional tax rates", "Only through customs classification", "Only through proportional tax rates"],
    correct: 1,
    explanation: "These methods are listed in the presentation."
  },
  {
    id: 48,
    question: "Which option best reflects the presentation? What is a tax base?",
    options: ["The property, transaction, activity, or concept upon which the tax is imposed", "The annual budget of the government", "The list of all tax laws in a country", "The legal remedy for underpayment of tax"],
    correct: 0,
    explanation: "The presentation defines tax base in these terms."
  },
  {
    id: 49,
    question: "Scenario variant: A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Neutrality", "Certainty", "Convenience", "Redistribution"],
    correct: 1,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 50,
    question: "A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax avoidance", "Tax expenditure", "Tax planning", "Tax evasion"],
    correct: 3,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
];
