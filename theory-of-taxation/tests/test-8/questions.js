const QUESTIONS = [
  {
    id: 1,
    question: "Scenario variant: A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation must always remain neutral in every circumstance", "Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals", "Taxation only serves the purpose of customs control", "Taxation should never affect social behaviour"],
    correct: 1,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 2,
    question: "Which option best reflects the presentation? What is the tax base for Excise Duty in Kenya according to the presentation?",
    options: ["All personal income", "All tax expenditures", "All property transfers", "Excisable goods and services"],
    correct: 3,
    explanation: "The presentation identifies excisable goods and services as the excise tax base."
  },
  {
    id: 3,
    question: "In revision, which statement is accurate? How does the presentation describe income tax in modern systems?",
    options: ["As a tax replaced entirely by VAT", "As a tax used only for foreign residents", "As the most important and widely imposed modern tax", "As a minor tax that is rarely used"],
    correct: 2,
    explanation: "The slides describe income tax in these terms."
  },
  {
    id: 4,
    question: "What does accountability and integrity mean in tax policy?",
    options: ["Revenue authority actions should be monitored by government and subject to parliamentary scrutiny, while tax laws should be administered free of political interference and under the rule of law", "Tax administration should be secret and unchecked", "Revenue authorities should be above all scrutiny", "Political interference should be encouraged to improve fairness"],
    correct: 0,
    explanation: "These are the accountability and integrity features listed."
  },
  {
    id: 5,
    question: "Which option best reflects the presentation? What are other consumption taxes mentioned in the presentation?",
    options: ["Excise duty and stamp duty", "Property tax and inheritance tax", "Goods and Services Tax (GST) and Sales Tax", "Payroll tax and withholding tax"],
    correct: 2,
    explanation: "GST and Sales Tax are listed alongside VAT."
  },
  {
    id: 6,
    question: "In revision, which statement is accurate? What does simplicity mean in a good tax system?",
    options: ["Tax law should change daily", "Tax law should be simple enough for taxpayers to understand and comply with correctly and cost-efficiently", "Tax law should always be unwritten", "Tax law should be as complex as possible to prevent planning"],
    correct: 1,
    explanation: "The presentation emphasizes simplicity despite the reality of complex laws."
  },
  {
    id: 7,
    question: "Scenario variant: A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Certainty", "Neutrality", "Redistribution", "Convenience"],
    correct: 0,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 8,
    question: "Taxpayers in similar economic circumstances are taxed in the same way, while wealthier taxpayers bear a greater share of the burden. Which pair of ideas does this reflect?",
    options: ["Source and residence jurisdiction", "Certainty and convenience", "Neutrality and flexibility", "Horizontal equity and vertical equity"],
    correct: 3,
    explanation: "The presentation defines horizontal and vertical equity this way."
  },
  {
    id: 9,
    question: "In revision, which statement is accurate? What is the usual macroeconomic effect of higher taxation according to the slides?",
    options: ["Automatic growth in foreign investment", "Less spending and a deflationary effect", "More spending and stronger inflationary effect", "No change in disposable income"],
    correct: 1,
    explanation: "The presentation says higher taxation reduces disposable income and spending."
  },
  {
    id: 10,
    question: "A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Redistribution of wealth to promote a more egalitarian society", "Only tax certainty", "Only efficiency in collection", "Only source-based jurisdiction"],
    correct: 0,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 11,
    question: "Which option best reflects the presentation? How does Kenya generally treat partnerships and trusts for tax purposes?",
    options: ["As opaque entities taxed separately from all members", "As entities taxed only under customs law", "As entities exempt from all taxation", "As flow-through entities whose income is taxed in the hands of members"],
    correct: 3,
    explanation: "The presentation says partnerships and trusts are flow-through entities."
  },
  {
    id: 12,
    question: "In revision, which statement is accurate? What does neutrality mean in tax policy?",
    options: ["Tax law should always distort all markets equally", "Neutrality means only foreign income is taxed", "Tax law should have minimal effect on business decisions and should not unnecessarily distort markets", "Neutrality means no tax may ever be collected"],
    correct: 2,
    explanation: "The slides explain neutrality as minimizing distortion."
  },
  {
    id: 13,
    question: "Who administers the tax laws in Kenya according to the slides?",
    options: ["KRA", "The Judiciary", "The WCO Secretariat", "Parliament"],
    correct: 0,
    explanation: "The presentation states that KRA administers tax laws."
  },
  {
    id: 14,
    question: "A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax planning", "Tax evasion", "Tax expenditure", "Tax avoidance"],
    correct: 1,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 15,
    question: "Scenario variant: A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Only source-based jurisdiction", "Only efficiency in collection", "Only tax certainty", "Redistribution of wealth to promote a more egalitarian society"],
    correct: 3,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 16,
    question: "A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["Indirect tax incidence", "Territorial or source-based jurisdiction", "Worldwide or residence-based jurisdiction", "A DTA exchange-of-information rule"],
    correct: 2,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 17,
    question: "Which option best reflects the presentation? What should a student understand by the end of the session according to the presentation?",
    options: ["Only customs duties and border posts", "What taxes are, the functions of taxes, the principles of taxation, and the features of a good tax system", "Only tax audits and prosecutions", "Only the history of tax treaties"],
    correct: 1,
    explanation: "The learning outcome slide lists these four areas."
  },
  {
    id: 18,
    question: "In revision, which statement is accurate? What is a direct tax?",
    options: ["A tax charged only at the border", "A tax that is never imposed on income", "A tax where the burden is always shifted to consumers", "A tax where the incidence and impact of taxation fall on the same person"],
    correct: 3,
    explanation: "The presentation explains direct tax as one where the same person bears the incidence and impact."
  },
  {
    id: 19,
    question: "Scenario variant: A tax takes the same percentage from every taxpayer regardless of the amount of the base. Which type of tax is this?",
    options: ["A proportional or flat tax", "A marginal tax rate only", "A progressive tax", "A regressive tax"],
    correct: 0,
    explanation: "The presentation defines proportional tax as same rate for all taxpayers."
  },
  {
    id: 20,
    question: "Which option best reflects the presentation? Why may effective tax rate differ from average tax rate?",
    options: ["Because effective rate is used only in customs law", "Because average rate applies only to companies", "Because economic income may include exempt amounts and may therefore differ from taxable income", "Because marginal rates are always zero"],
    correct: 2,
    explanation: "The presentation notes that economic income is not necessarily the same as taxable income."
  },
  {
    id: 21,
    question: "In revision, which statement is accurate? What does accountability and integrity mean in tax policy?",
    options: ["Revenue authority actions should be monitored by government and subject to parliamentary scrutiny, while tax laws should be administered free of political interference and under the rule of law", "Political interference should be encouraged to improve fairness", "Revenue authorities should be above all scrutiny", "Tax administration should be secret and unchecked"],
    correct: 0,
    explanation: "These are the accountability and integrity features listed."
  },
  {
    id: 22,
    question: "A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Neutrality", "Convenience", "Certainty", "Redistribution"],
    correct: 2,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 23,
    question: "Which option best reflects the presentation? What is the aim of the Theory of Taxation module?",
    options: ["To replace all tax statutes with administrative guidelines", "To equip trainees with knowledge on the theory and principles of taxation and the importance of taxes to a country", "To focus only on international customs bodies", "To teach only customs valuation and tariff classification"],
    correct: 1,
    explanation: "The instructional goal slide states this aim clearly."
  },
  {
    id: 24,
    question: "In revision, which statement is accurate? What does accountability and integrity mean in tax policy?",
    options: ["Political interference should be encouraged to improve fairness", "Tax administration should be secret and unchecked", "Revenue authorities should be above all scrutiny", "Revenue authority actions should be monitored by government and subject to parliamentary scrutiny, while tax laws should be administered free of political interference and under the rule of law"],
    correct: 3,
    explanation: "These are the accountability and integrity features listed."
  },
  {
    id: 25,
    question: "What does the canon of economy require?",
    options: ["That tax take out of people's pockets as little as possible over and above what reaches the public treasury", "That governments spend the maximum possible on collection", "That every tax be proportional", "That only customs duties be used"],
    correct: 0,
    explanation: "Economy emphasizes minimizing excess cost of collection."
  },
  {
    id: 26,
    question: "A country raises tax on imported products so that locally produced goods become relatively cheaper. Which economic function of taxation does this illustrate?",
    options: ["The concept of tax expenditures only", "The definition of direct tax", "The principle of transparency and visibility", "Protection of domestic industries by taxing imported goods more heavily than local goods"],
    correct: 3,
    explanation: "The presentation gives this as an example of the economic function of taxation."
  },
  {
    id: 27,
    question: "In revision, which statement is accurate? Why are tax expenditures costly according to the presentation?",
    options: ["Because they always increase tax collections", "Because they eliminate all policy objectives", "Because government collects less revenue from taxpayers as a result of concessions", "Because they only apply to foreign taxpayers"],
    correct: 2,
    explanation: "The cost of tax expenditures is reduced revenue."
  },
  {
    id: 28,
    question: "What is tax evasion?",
    options: ["A treaty-based relief against double taxation", "Illegal underpayment of tax, usually by fraudulent concealment or misrepresentation", "Lawful arrangement of affairs to reduce tax", "A method of planning investment income efficiently"],
    correct: 1,
    explanation: "The presentation defines tax evasion in these terms."
  },
  {
    id: 29,
    question: "Which option best reflects the presentation? What is one effect of indirect tax on the products on which it is imposed?",
    options: ["It raises the price of the products", "It eliminates the tax base entirely", "It makes the products tax exempt", "It reduces the quantity of tax law"],
    correct: 0,
    explanation: "The slides say indirect taxes raise product prices."
  },
  {
    id: 30,
    question: "A government raises taxes to build roads, fund hospitals, pay social security benefits, and maintain law enforcement. Which function of taxation is most directly illustrated?",
    options: ["Only the convenience canon", "Only the neutrality principle", "Only the redistribution function", "Raising revenue to fund government functions"],
    correct: 3,
    explanation: "These are classic examples of tax-funded government functions from the presentation."
  },
  {
    id: 31,
    question: "What is the territorial or source-based approach to income taxation?",
    options: ["Taxing only foreign-source income of residents", "Taxing residents on all worldwide income only", "Taxing income sourced within a country's borders regardless of where the taxpayer resides", "Taxing only consumption and not income"],
    correct: 2,
    explanation: "The presentation defines source-based taxation in these terms."
  },
  {
    id: 32,
    question: "A government raises taxes to build roads, fund hospitals, pay social security benefits, and maintain law enforcement. Which function of taxation is most directly illustrated?",
    options: ["Only the redistribution function", "Raising revenue to fund government functions", "Only the convenience canon", "Only the neutrality principle"],
    correct: 1,
    explanation: "These are classic examples of tax-funded government functions from the presentation."
  },
  {
    id: 33,
    question: "In revision, which statement is accurate? What are tax rates?",
    options: ["Only the years in which tax is paid", "Only the penalties for late payment", "The rates at which tax is imposed, which may be flat or may vary with the level of the tax base", "Only the list of taxpayers under a regime"],
    correct: 2,
    explanation: "The slides define tax rates and explain flat versus variable structures."
  },
  {
    id: 34,
    question: "Into what two broad categories may tax expenditures be divided?",
    options: ["Direct taxes and indirect taxes", "Tax incentives and tax concessions", "Source-based taxes and residence-based taxes", "Marginal taxes and average taxes"],
    correct: 1,
    explanation: "The presentation gives these two broad categories."
  },
  {
    id: 35,
    question: "Which option best reflects the presentation? What does equity and fairness mean in good tax policy?",
    options: ["Similarly situated taxpayers should be taxed similarly and each taxpayer should pay their fair share", "Every taxpayer should always pay exactly the same amount", "Taxes should always be hidden from public view", "Only residents should ever be taxed"],
    correct: 0,
    explanation: "The principle is described in these terms."
  },
  {
    id: 36,
    question: "In revision, which statement is accurate? Who adjudicates tax disputes in Kenya according to the slides?",
    options: ["The WCO Council", "KRA", "Parliament", "The Judiciary"],
    correct: 3,
    explanation: "The slide says adjudication is done by the Judiciary."
  },
  {
    id: 37,
    question: "Scenario variant: Taxpayers in similar economic circumstances are taxed in the same way, while wealthier taxpayers bear a greater share of the burden. Which pair of ideas does this reflect?",
    options: ["Neutrality and flexibility", "Horizontal equity and vertical equity", "Certainty and convenience", "Source and residence jurisdiction"],
    correct: 1,
    explanation: "The presentation defines horizontal and vertical equity this way."
  },
  {
    id: 38,
    question: "Which option best reflects the presentation? What does certainty mean as a principle of good tax policy?",
    options: ["Tax should only be paid when convenient for government", "Tax amounts should be arbitrary", "The rules should clearly specify when tax is to be paid, how it is to be paid, and how the amount is determined", "Tax should be calculated secretly"],
    correct: 2,
    explanation: "This modern certainty principle mirrors the classic canon."
  },
  {
    id: 39,
    question: "In revision, which statement is accurate? Which of the following is listed as a primary source of taxation law in Kenya?",
    options: ["The East African Mediation Agreement", "The Kyoto customs declaration code only", "The Constitution of the WCO", "The Income Tax Act, Cap 470"],
    correct: 3,
    explanation: "Income Tax Act, Cap 470 is expressly listed."
  },
  {
    id: 40,
    question: "A government raises taxes to build roads, fund hospitals, pay social security benefits, and maintain law enforcement. Which function of taxation is most directly illustrated?",
    options: ["Raising revenue to fund government functions", "Only the redistribution function", "Only the neutrality principle", "Only the convenience canon"],
    correct: 0,
    explanation: "These are classic examples of tax-funded government functions from the presentation."
  },
  {
    id: 41,
    question: "Which option best reflects the presentation? What are tax concessions designed to do?",
    options: ["Raise additional revenue from luxury goods", "Reduce exchange rate volatility", "Provide welfare assistance to those in need", "Eliminate the need for tax law"],
    correct: 2,
    explanation: "The slides describe tax concessions as welfare-oriented."
  },
  {
    id: 42,
    question: "A country raises tax on imported products so that locally produced goods become relatively cheaper. Which economic function of taxation does this illustrate?",
    options: ["The definition of direct tax", "The concept of tax expenditures only", "The principle of transparency and visibility", "Protection of domestic industries by taxing imported goods more heavily than local goods"],
    correct: 3,
    explanation: "The presentation gives this as an example of the economic function of taxation."
  },
  {
    id: 43,
    question: "Scenario variant: A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Certainty", "Neutrality", "Convenience", "Redistribution"],
    correct: 0,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 44,
    question: "Which option best reflects the presentation? What is a consumption tax?",
    options: ["A tax imposed only on income from employment", "A tax whose economic incidence falls on the consumer", "A tax paid only through judicial orders", "A tax that always falls on the producer alone"],
    correct: 1,
    explanation: "The presentation defines consumption tax this way."
  },
  {
    id: 45,
    question: "In revision, which statement is accurate? What does simplicity mean in a good tax system?",
    options: ["Tax law should be as complex as possible to prevent planning", "Tax law should always be unwritten", "Tax law should be simple enough for taxpayers to understand and comply with correctly and cost-efficiently", "Tax law should change daily"],
    correct: 2,
    explanation: "The presentation emphasizes simplicity despite the reality of complex laws."
  },
  {
    id: 46,
    question: "What is a consumption tax?",
    options: ["A tax whose economic incidence falls on the consumer", "A tax paid only through judicial orders", "A tax that always falls on the producer alone", "A tax imposed only on income from employment"],
    correct: 0,
    explanation: "The presentation defines consumption tax this way."
  },
  {
    id: 47,
    question: "Which option best reflects the presentation? What is vertical equity?",
    options: ["People with low income should always pay more", "Businesses should never pay tax", "People in similar circumstances should be taxed similarly", "People in different economic circumstances should be treated differently, with those better off bearing a greater burden"],
    correct: 3,
    explanation: "The slides define vertical equity in this way."
  },
  {
    id: 48,
    question: "A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["A DTA exchange-of-information rule", "Worldwide or residence-based jurisdiction", "Indirect tax incidence", "Territorial or source-based jurisdiction"],
    correct: 1,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 49,
    question: "Scenario variant: A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax evasion", "Tax expenditure", "Tax planning", "Tax avoidance"],
    correct: 0,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 50,
    question: "Which option best reflects the presentation? How does the Kenyan income tax system generally treat individuals and families?",
    options: ["It always aggregates spouses' incomes", "It generally treats each individual as a separate tax unit", "It never taxes individuals separately", "It always taxes the family as one unit"],
    correct: 1,
    explanation: "The slides explain that individuals are generally separate tax units."
  },
];
