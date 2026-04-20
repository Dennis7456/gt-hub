const QUESTIONS = [
  {
    id: 1,
    question: "What is the aim of the Theory of Taxation module?",
    options: ["To focus only on international customs bodies", "To replace all tax statutes with administrative guidelines", "To equip trainees with knowledge on the theory and principles of taxation and the importance of taxes to a country", "To teach only customs valuation and tariff classification"],
    correct: 2,
    explanation: "The instructional goal slide states this aim clearly."
  },
  {
    id: 2,
    question: "Which option best reflects the presentation? What is the usual macroeconomic effect of higher taxation according to the slides?",
    options: ["Less spending and a deflationary effect", "More spending and stronger inflationary effect", "Automatic growth in foreign investment", "No change in disposable income"],
    correct: 0,
    explanation: "The presentation says higher taxation reduces disposable income and spending."
  },
  {
    id: 3,
    question: "In revision, which statement is accurate? What is the most widely encountered consumption tax according to the slides?",
    options: ["Property tax", "Inheritance tax", "Gift tax", "Value Added Tax (VAT)"],
    correct: 3,
    explanation: "VAT is identified as the most widely encountered consumption tax."
  },
  {
    id: 4,
    question: "What is the worldwide or residence-based approach to income taxation?",
    options: ["Taxing all foreigners on worldwide income", "Taxing residents on both domestic and foreign source income, while taxing non-residents only on locally sourced income", "Taxing only income sourced within the territory", "Taxing only companies and never individuals"],
    correct: 1,
    explanation: "The presentation contrasts this with the territorial approach."
  },
  {
    id: 5,
    question: "Which option best reflects the presentation? Which VAT rates are mentioned in the presentation?",
    options: ["15 percent only", "5 percent only", "0 percent, 8 percent, and 16 percent", "10 percent, 20 percent, and 30 percent"],
    correct: 2,
    explanation: "These three VAT rates are listed."
  },
  {
    id: 6,
    question: "In revision, which statement is accurate? How can taxation affect the relative cost of goods at the microeconomic level?",
    options: ["Taxing goods always makes them cheaper", "Taxing particular goods makes them more expensive than similar untaxed goods", "Taxing goods has no effect on consumer choices", "Taxing goods removes all market differences"],
    correct: 1,
    explanation: "The economic function slide explains that taxes can alter prices."
  },
  {
    id: 7,
    question: "What is a marginal tax rate?",
    options: ["The rate of tax applied to the incremental amounts of the tax base", "The taxpayer's total tax divided by taxable base", "The taxpayer's total tax divided by economic income", "The lowest rate in the tax schedule"],
    correct: 0,
    explanation: "Marginal tax rate applies to additional slices of the tax base."
  },
  {
    id: 8,
    question: "Which option best reflects the presentation? Why are DTAs important according to the presentation?",
    options: ["Because they eliminate the need for residence rules", "Because they replace all domestic tax laws", "Because they only regulate customs warehouses", "Because they address double taxation, which is a major impediment to cross-border trade and investment"],
    correct: 3,
    explanation: "The DTA section explains their role in addressing double taxation."
  },
  {
    id: 9,
    question: "Scenario variant: A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Redistribution", "Convenience", "Certainty", "Neutrality"],
    correct: 2,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 10,
    question: "What are excise duties according to the presentation?",
    options: ["Taxes on all judicial filings", "Taxes on all salaries and wages", "Taxes imposed only on land ownership", "Taxes imposed on the production and manufacture of certain goods, and also on importation of those goods; some services may also be charged excise duty"],
    correct: 3,
    explanation: "The slides define excise duties broadly in this way."
  },
  {
    id: 11,
    question: "Which option best reflects the presentation? What is the aim of the Theory of Taxation module?",
    options: ["To focus only on international customs bodies", "To equip trainees with knowledge on the theory and principles of taxation and the importance of taxes to a country", "To replace all tax statutes with administrative guidelines", "To teach only customs valuation and tariff classification"],
    correct: 1,
    explanation: "The instructional goal slide states this aim clearly."
  },
  {
    id: 12,
    question: "In revision, which statement is accurate? How can taxation affect the relative cost of goods at the microeconomic level?",
    options: ["Taxing particular goods makes them more expensive than similar untaxed goods", "Taxing goods removes all market differences", "Taxing goods has no effect on consumer choices", "Taxing goods always makes them cheaper"],
    correct: 0,
    explanation: "The economic function slide explains that taxes can alter prices."
  },
  {
    id: 13,
    question: "What is an indirect tax?",
    options: ["A tax that cannot affect prices", "A tax imposed only on wealth", "A tax paid only by natural persons", "A tax where the incidence and impact of taxation do not fall on the same entity"],
    correct: 3,
    explanation: "The presentation defines indirect tax in these terms."
  },
  {
    id: 14,
    question: "A partnership earns income, but the tax is imposed on the partners rather than the partnership itself. What does this illustrate?",
    options: ["Tax evasion through concealment", "Residence-based jurisdiction", "Treatment of partnerships as flow-through entities", "Treatment of companies as opaque entities"],
    correct: 2,
    explanation: "The presentation says partnerships and trusts are generally flow-through entities."
  },
  {
    id: 15,
    question: "Scenario variant: A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["Indirect tax incidence", "Worldwide or residence-based jurisdiction", "A DTA exchange-of-information rule", "Territorial or source-based jurisdiction"],
    correct: 1,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 16,
    question: "What is tax evasion?",
    options: ["Illegal underpayment of tax, usually by fraudulent concealment or misrepresentation", "Lawful arrangement of affairs to reduce tax", "A method of planning investment income efficiently", "A treaty-based relief against double taxation"],
    correct: 0,
    explanation: "The presentation defines tax evasion in these terms."
  },
  {
    id: 17,
    question: "Which option best reflects the presentation? Which VAT rates are mentioned in the presentation?",
    options: ["5 percent only", "10 percent, 20 percent, and 30 percent", "0 percent, 8 percent, and 16 percent", "15 percent only"],
    correct: 2,
    explanation: "These three VAT rates are listed."
  },
  {
    id: 18,
    question: "In revision, which statement is accurate? What are excise duties according to the presentation?",
    options: ["Taxes on all salaries and wages", "Taxes on all judicial filings", "Taxes imposed only on land ownership", "Taxes imposed on the production and manufacture of certain goods, and also on importation of those goods; some services may also be charged excise duty"],
    correct: 3,
    explanation: "The slides define excise duties broadly in this way."
  },
  {
    id: 19,
    question: "Scenario variant: A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Redistribution of wealth to promote a more egalitarian society", "Only tax certainty", "Only source-based jurisdiction", "Only efficiency in collection"],
    correct: 0,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 20,
    question: "A government raises taxes to build roads, fund hospitals, pay social security benefits, and maintain law enforcement. Which function of taxation is most directly illustrated?",
    options: ["Only the neutrality principle", "Raising revenue to fund government functions", "Only the redistribution function", "Only the convenience canon"],
    correct: 1,
    explanation: "These are classic examples of tax-funded government functions from the presentation."
  },
  {
    id: 21,
    question: "In revision, which statement is accurate? What is tax planning?",
    options: ["Analysis of a financial situation or plan so that all elements work together to allow the lowest lawful tax burden", "A method of replacing tax law with private agreements", "Automatic exemption from all taxes", "Fraudulent concealment of income"],
    correct: 0,
    explanation: "The presentation defines tax planning this way."
  },
  {
    id: 22,
    question: "VAT or GST is directed at taxing what?",
    options: ["Only corporate profits", "Only cash transfers between banks", "Only exports of goods", "The value added to the supply of goods and services"],
    correct: 3,
    explanation: "The slides explain that VAT/GST taxes value added."
  },
  {
    id: 23,
    question: "Scenario variant: A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation only serves the purpose of customs control", "Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals", "Taxation should never affect social behaviour", "Taxation must always remain neutral in every circumstance"],
    correct: 1,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 24,
    question: "In revision, which statement is accurate? Which examples are given of returns from government assets and investments?",
    options: ["Payroll tax and stamp duty", "Withholding tax and VAT", "Rental charges and dividends received", "Tariffs and excise duties"],
    correct: 2,
    explanation: "The presentation lists rental charge and dividends received."
  },
  {
    id: 25,
    question: "When may spouses be considered a tax unit according to the presentation?",
    options: ["Never under Kenyan tax law", "Whenever both spouses have any income at all", "Only where spouses are foreign residents", "In some cases, such as where one spouse is the employee of the other"],
    correct: 3,
    explanation: "The slide gives the employee-spouse example."
  },
  {
    id: 26,
    question: "Which option best reflects the presentation? How serious is tax evasion according to the presentation?",
    options: ["It is the same as ordinary tax planning", "It is encouraged if tax law is complex", "It is a serious offence that can result in significant pecuniary penalties and jail terms", "It is lawful if done once only"],
    correct: 2,
    explanation: "The slides emphasize the seriousness of evasion."
  },
  {
    id: 27,
    question: "In revision, which statement is accurate? What is a tax base?",
    options: ["The list of all tax laws in a country", "The property, transaction, activity, or concept upon which the tax is imposed", "The annual budget of the government", "The legal remedy for underpayment of tax"],
    correct: 1,
    explanation: "The presentation defines tax base in these terms."
  },
  {
    id: 28,
    question: "What does the canon of certainty require?",
    options: ["That the time, manner, and amount of payment be clear and not arbitrary", "That taxpayers negotiate liabilities privately", "That taxes be imposed without any notice", "That taxes be revised every day"],
    correct: 0,
    explanation: "The slides define certainty in these terms."
  },
  {
    id: 29,
    question: "Which option best reflects the presentation? What type of tax period applies in the case of VAT according to the presentation?",
    options: ["Weekly tax periods", "Monthly tax periods", "A once-per-lifetime tax period", "Quarterly tax periods only"],
    correct: 1,
    explanation: "The slides say VAT generally uses monthly tax periods."
  },
  {
    id: 30,
    question: "In revision, which statement is accurate? What does certainty mean as a principle of good tax policy?",
    options: ["Tax should only be paid when convenient for government", "Tax should be calculated secretly", "The rules should clearly specify when tax is to be paid, how it is to be paid, and how the amount is determined", "Tax amounts should be arbitrary"],
    correct: 2,
    explanation: "This modern certainty principle mirrors the classic canon."
  },
  {
    id: 31,
    question: "Which tax is given as an example of a progressive tax in Kenya?",
    options: ["Sales tax", "Stamp duty", "VAT", "Income tax on individuals"],
    correct: 3,
    explanation: "Individual income tax is given as the progressive example."
  },
  {
    id: 32,
    question: "Which option best reflects the presentation? What does it mean to say taxes are unrequited?",
    options: ["They are generally not paid in exchange for some specific thing or direct personal benefit", "They are never used for public welfare", "They are payable only by corporations", "They are refunded at the end of each year"],
    correct: 0,
    explanation: "The presentation explains that taxes are not normally paid for a specific direct benefit."
  },
  {
    id: 33,
    question: "In revision, which statement is accurate? What should a student understand by the end of the session according to the presentation?",
    options: ["Only customs duties and border posts", "What taxes are, the functions of taxes, the principles of taxation, and the features of a good tax system", "Only tax audits and prosecutions", "Only the history of tax treaties"],
    correct: 1,
    explanation: "The learning outcome slide lists these four areas."
  },
  {
    id: 34,
    question: "What is a direct tax?",
    options: ["A tax where the burden is always shifted to consumers", "A tax that is never imposed on income", "A tax where the incidence and impact of taxation fall on the same person", "A tax charged only at the border"],
    correct: 2,
    explanation: "The presentation explains direct tax as one where the same person bears the incidence and impact."
  },
  {
    id: 35,
    question: "Which option best reflects the presentation? Which of the following is an example of tax evasion from the slides?",
    options: ["Not declaring true income or claiming reliefs to which one is not entitled", "Choosing a lawful deduction available under statute", "Using a foreign tax credit under a DTA", "Structuring a transaction to pay only legally required tax"],
    correct: 0,
    explanation: "The presentation gives these examples of evasion."
  },
  {
    id: 36,
    question: "A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Only source-based jurisdiction", "Only efficiency in collection", "Only tax certainty", "Redistribution of wealth to promote a more egalitarian society"],
    correct: 3,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 37,
    question: "How are tax expenditures similar to subsidies or grants?",
    options: ["Both abolish the need for revenue collection", "Both are forms of government spending, though tax expenditures are indirect while subsidies or grants are direct", "Both are criminal penalties", "Both are always imposed through customs law"],
    correct: 1,
    explanation: "The slides explicitly compare these forms of support."
  },
  {
    id: 38,
    question: "Which option best reflects the presentation? What else does taxation law cover besides liability rules?",
    options: ["Administration and enforcement, including collection and recovery of tax", "Only valuation of imported goods", "Only corporate governance", "Only international customs cooperation"],
    correct: 0,
    explanation: "The slides say taxation law extends to administration and enforcement."
  },
  {
    id: 39,
    question: "In revision, which statement is accurate? What is the tax base for Excise Duty in Kenya according to the presentation?",
    options: ["All tax expenditures", "All personal income", "All property transfers", "Excisable goods and services"],
    correct: 3,
    explanation: "The presentation identifies excisable goods and services as the excise tax base."
  },
  {
    id: 40,
    question: "What is tax planning?",
    options: ["A method of replacing tax law with private agreements", "Fraudulent concealment of income", "Analysis of a financial situation or plan so that all elements work together to allow the lowest lawful tax burden", "Automatic exemption from all taxes"],
    correct: 2,
    explanation: "The presentation defines tax planning this way."
  },
  {
    id: 41,
    question: "Which option best reflects the presentation? Can the burden of a direct tax be shifted by the taxpayer to someone else?",
    options: ["Yes, but only through customs duty", "No, the burden cannot be shifted", "Yes, but only through a foreign tax credit", "Yes, always to the consumer"],
    correct: 1,
    explanation: "The presentation says direct tax burden cannot be shifted."
  },
  {
    id: 42,
    question: "In revision, which statement is accurate? What is a tax-efficient plan?",
    options: ["A plan that guarantees zero taxation for everyone", "A plan that ignores tax law completely", "A plan that minimizes how much tax you pay", "A plan that always uses regressive tax rates"],
    correct: 2,
    explanation: "The final slide defines tax efficiency in this way."
  },
  {
    id: 43,
    question: "What is double taxation?",
    options: ["A flat rate tax applied twice to imports only", "A penalty for underpaying tax in two periods", "A situation where the same country taxes income twice in one day", "A situation where more than one country asserts taxing rights over the same income"],
    correct: 3,
    explanation: "The presentation defines double taxation in these terms."
  },
  {
    id: 44,
    question: "Which option best reflects the presentation? What is the tax base for VAT in Kenya according to the presentation?",
    options: ["Taxable supplies and taxable importations", "Only legal documents", "Taxable income and fringe benefits", "Only corporate dividends"],
    correct: 0,
    explanation: "The slides identify the VAT tax base in this way."
  },
  {
    id: 45,
    question: "In revision, which statement is accurate? What is horizontal equity?",
    options: ["People in different economic circumstances should always be treated identically", "People in similar economic circumstances should be treated similarly", "Companies should always pay less than individuals", "People with foreign income should never pay tax"],
    correct: 1,
    explanation: "The presentation defines horizontal equity this way."
  },
  {
    id: 46,
    question: "What does the canon of economy require?",
    options: ["That every tax be proportional", "That governments spend the maximum possible on collection", "That only customs duties be used", "That tax take out of people's pockets as little as possible over and above what reaches the public treasury"],
    correct: 3,
    explanation: "Economy emphasizes minimizing excess cost of collection."
  },
  {
    id: 47,
    question: "Which option best reflects the presentation? How do governments use taxation to protect domestic industries according to the presentation?",
    options: ["By taxing imported goods more heavily than locally produced goods", "By exempting all imported goods from tax", "By abolishing all tariffs permanently", "By taxing domestic goods only"],
    correct: 0,
    explanation: "The presentation links taxation to domestic industry protection."
  },
  {
    id: 48,
    question: "In revision, which statement is accurate? What is a progressive tax?",
    options: ["A tax imposed only on transactions", "A tax imposed at rates that decrease with the tax base", "A tax imposed at rates that increase with the amount of the tax base", "A tax imposed at the same rate on all taxpayers"],
    correct: 2,
    explanation: "The presentation defines progressive taxes in these terms."
  },
  {
    id: 49,
    question: "What is a regressive tax?",
    options: ["A tax imposed at increasing rates", "A tax imposed at rates that decrease with the amount of the tax base", "A tax imposed only on luxury services", "A tax imposed only on imported goods"],
    correct: 1,
    explanation: "The presentation defines regressive taxes this way."
  },
  {
    id: 50,
    question: "Taxpayers in similar economic circumstances are taxed in the same way, while wealthier taxpayers bear a greater share of the burden. Which pair of ideas does this reflect?",
    options: ["Neutrality and flexibility", "Source and residence jurisdiction", "Horizontal equity and vertical equity", "Certainty and convenience"],
    correct: 2,
    explanation: "The presentation defines horizontal and vertical equity this way."
  },
];
