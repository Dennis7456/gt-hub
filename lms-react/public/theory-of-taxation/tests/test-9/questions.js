const QUESTIONS = [
  {
    id: 1,
    question: "Which option best reflects the presentation? Which tax is given as an example of a progressive tax in Kenya?",
    options: ["Sales tax", "VAT", "Stamp duty", "Income tax on individuals"],
    correct: 3,
    explanation: "Individual income tax is given as the progressive example."
  },
  {
    id: 2,
    question: "Scenario variant: A country raises tax on imported products so that locally produced goods become relatively cheaper. Which economic function of taxation does this illustrate?",
    options: ["The principle of transparency and visibility", "Protection of domestic industries by taxing imported goods more heavily than local goods", "The concept of tax expenditures only", "The definition of direct tax"],
    correct: 1,
    explanation: "The presentation gives this as an example of the economic function of taxation."
  },
  {
    id: 3,
    question: "What is tax planning?",
    options: ["Fraudulent concealment of income", "A method of replacing tax law with private agreements", "Analysis of a financial situation or plan so that all elements work together to allow the lowest lawful tax burden", "Automatic exemption from all taxes"],
    correct: 2,
    explanation: "The presentation defines tax planning this way."
  },
  {
    id: 4,
    question: "Scenario variant: A government decides to support a targeted activity by allowing a special deduction under income tax instead of collecting full tax and later paying a grant. Which concept from the slides best explains this?",
    options: ["Tax expenditure as an indirect form of government spending", "The worldwide approach to jurisdiction", "The canon of certainty", "Indirect tax incidence"],
    correct: 0,
    explanation: "The presentation explains tax expenditures as indirect government spending."
  },
  {
    id: 5,
    question: "In revision, which statement is accurate? What does simplicity mean in a good tax system?",
    options: ["Tax law should change daily", "Tax law should always be unwritten", "Tax law should be simple enough for taxpayers to understand and comply with correctly and cost-efficiently", "Tax law should be as complex as possible to prevent planning"],
    correct: 2,
    explanation: "The presentation emphasizes simplicity despite the reality of complex laws."
  },
  {
    id: 6,
    question: "Scenario variant: A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Redistribution", "Neutrality", "Convenience", "Certainty"],
    correct: 3,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 7,
    question: "Which option best reflects the presentation? What is an average tax rate?",
    options: ["Total tax liability divided by the tax base", "Total tax liability divided by economic income", "The rate applied to the last unit of income", "The highest rate in the schedule"],
    correct: 0,
    explanation: "The presentation gives this formula for average tax rate."
  },
  {
    id: 8,
    question: "In revision, which statement is accurate? What are the four basic structural features shared by most taxes?",
    options: ["Assessment, audit, refund, and appeal", "Taxpayers, tax base, tax periods, and tax rates", "Equity, certainty, convenience, and economy", "Residence, source, treaty, and relief"],
    correct: 1,
    explanation: "The presentation identifies these four structural features."
  },
  {
    id: 9,
    question: "A taxpayer structures a transaction carefully so that only the minimum lawful amount of tax is payable. Which concept best fits this behaviour?",
    options: ["Tax evasion only", "A regressive tax", "Tax avoidance or lawful tax planning depending on the broader structure described", "A direct tax"],
    correct: 2,
    explanation: "The presentation treats lawful reduction of liability as avoidance and broader analysis as planning."
  },
  {
    id: 10,
    question: "Which option best reflects the presentation? What does it mean to say taxes are unrequited?",
    options: ["They are refunded at the end of each year", "They are payable only by corporations", "They are never used for public welfare", "They are generally not paid in exchange for some specific thing or direct personal benefit"],
    correct: 3,
    explanation: "The presentation explains that taxes are not normally paid for a specific direct benefit."
  },
  {
    id: 11,
    question: "In revision, which statement is accurate? How does the presentation describe income tax in modern systems?",
    options: ["As a tax used only for foreign residents", "As the most important and widely imposed modern tax", "As a minor tax that is rarely used", "As a tax replaced entirely by VAT"],
    correct: 1,
    explanation: "The slides describe income tax in these terms."
  },
  {
    id: 12,
    question: "Which tax is given as an example of a progressive tax in Kenya?",
    options: ["Income tax on individuals", "VAT", "Stamp duty", "Sales tax"],
    correct: 0,
    explanation: "Individual income tax is given as the progressive example."
  },
  {
    id: 13,
    question: "Which option best reflects the presentation? Which is an example of a direct tax from the slides?",
    options: ["VAT", "Corporation tax", "Excise duty", "Customs duty"],
    correct: 1,
    explanation: "Corporation tax is listed among examples of direct taxes."
  },
  {
    id: 14,
    question: "Scenario variant: A government decides to support a targeted activity by allowing a special deduction under income tax instead of collecting full tax and later paying a grant. Which concept from the slides best explains this?",
    options: ["The canon of certainty", "The worldwide approach to jurisdiction", "Indirect tax incidence", "Tax expenditure as an indirect form of government spending"],
    correct: 3,
    explanation: "The presentation explains tax expenditures as indirect government spending."
  },
  {
    id: 15,
    question: "What is the usual macroeconomic effect of lower taxation according to the slides?",
    options: ["Automatic elimination of imports", "Complete neutrality in all markets", "Increased spending and potentially an inflationary effect", "Reduced spending and a deflationary effect"],
    correct: 2,
    explanation: "The presentation explains lower tax increases disposable income and spending."
  },
  {
    id: 16,
    question: "Which option best reflects the presentation? What is a direct tax?",
    options: ["A tax where the incidence and impact of taxation fall on the same person", "A tax where the burden is always shifted to consumers", "A tax charged only at the border", "A tax that is never imposed on income"],
    correct: 0,
    explanation: "The presentation explains direct tax as one where the same person bears the incidence and impact."
  },
  {
    id: 17,
    question: "In revision, which statement is accurate? What is the tax base for VAT in Kenya according to the presentation?",
    options: ["Only legal documents", "Only corporate dividends", "Taxable income and fringe benefits", "Taxable supplies and taxable importations"],
    correct: 3,
    explanation: "The slides identify the VAT tax base in this way."
  },
  {
    id: 18,
    question: "What is a tax base?",
    options: ["The list of all tax laws in a country", "The legal remedy for underpayment of tax", "The property, transaction, activity, or concept upon which the tax is imposed", "The annual budget of the government"],
    correct: 2,
    explanation: "The presentation defines tax base in these terms."
  },
  {
    id: 19,
    question: "Which option best reflects the presentation? How does the Kenyan income tax system generally treat individuals and families?",
    options: ["It generally treats each individual as a separate tax unit", "It always taxes the family as one unit", "It always aggregates spouses' incomes", "It never taxes individuals separately"],
    correct: 0,
    explanation: "The slides explain that individuals are generally separate tax units."
  },
  {
    id: 20,
    question: "In revision, which statement is accurate? What is a tax-efficient plan?",
    options: ["A plan that guarantees zero taxation for everyone", "A plan that minimizes how much tax you pay", "A plan that always uses regressive tax rates", "A plan that ignores tax law completely"],
    correct: 1,
    explanation: "The final slide defines tax efficiency in this way."
  },
  {
    id: 21,
    question: "Why might governments intentionally depart from neutrality?",
    options: ["Because governments cannot set policy", "Because neutrality is unlawful", "To achieve specific policy objectives", "Because all taxes must be regressive"],
    correct: 2,
    explanation: "The presentation notes that neutrality is sometimes intentionally sacrificed."
  },
  {
    id: 22,
    question: "Which option best reflects the presentation? How do governments use taxation to protect domestic industries according to the presentation?",
    options: ["By exempting all imported goods from tax", "By taxing imported goods more heavily than locally produced goods", "By taxing domestic goods only", "By abolishing all tariffs permanently"],
    correct: 1,
    explanation: "The presentation links taxation to domestic industry protection."
  },
  {
    id: 23,
    question: "A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals", "Taxation only serves the purpose of customs control", "Taxation should never affect social behaviour", "Taxation must always remain neutral in every circumstance"],
    correct: 0,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 24,
    question: "Who adjudicates tax disputes in Kenya according to the slides?",
    options: ["KRA", "Parliament", "The WCO Council", "The Judiciary"],
    correct: 3,
    explanation: "The slide says adjudication is done by the Judiciary."
  },
  {
    id: 25,
    question: "A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["A DTA exchange-of-information rule", "Worldwide or residence-based jurisdiction", "Indirect tax incidence", "Territorial or source-based jurisdiction"],
    correct: 1,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 26,
    question: "In revision, which statement is accurate? What is taxation law?",
    options: ["Only the moral principles of equity and fairness", "Only judicial decisions on tax crime", "The same thing as public finance theory", "The body of law that governs a person's liability to pay tax to the government"],
    correct: 3,
    explanation: "The presentation defines taxation law in these terms."
  },
  {
    id: 27,
    question: "A tax takes the same percentage from every taxpayer regardless of the amount of the base. Which type of tax is this?",
    options: ["A progressive tax", "A marginal tax rate only", "A proportional or flat tax", "A regressive tax"],
    correct: 2,
    explanation: "The presentation defines proportional tax as same rate for all taxpayers."
  },
  {
    id: 28,
    question: "Scenario variant: A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Redistribution of wealth to promote a more egalitarian society", "Only source-based jurisdiction", "Only tax certainty", "Only efficiency in collection"],
    correct: 0,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 29,
    question: "A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Only source-based jurisdiction", "Redistribution of wealth to promote a more egalitarian society", "Only tax certainty", "Only efficiency in collection"],
    correct: 1,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 30,
    question: "What general principle is stated about countries enforcing each other's tax laws?",
    options: ["Countries never tax non-residents under any circumstances", "Countries must always collect taxes for each other", "Countries may enforce each other's tax laws without agreement", "As a general principle, countries do not enforce each other's tax laws"],
    correct: 3,
    explanation: "The presentation states this general principle explicitly."
  },
  {
    id: 31,
    question: "Which option best reflects the presentation? What kind of society can redistributive taxation promote?",
    options: ["A society without any government role", "A society where no one pays tax", "A more egalitarian society with a more level playing field", "A more polarised society with concentrated wealth"],
    correct: 2,
    explanation: "The slides say redistribution can produce a more level playing field."
  },
  {
    id: 32,
    question: "In revision, which statement is accurate? What does the canon of economy require?",
    options: ["That tax take out of people's pockets as little as possible over and above what reaches the public treasury", "That every tax be proportional", "That governments spend the maximum possible on collection", "That only customs duties be used"],
    correct: 0,
    explanation: "Economy emphasizes minimizing excess cost of collection."
  },
  {
    id: 33,
    question: "A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Redistribution", "Certainty", "Neutrality", "Convenience"],
    correct: 1,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 34,
    question: "Scenario variant: A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured", "The tax base is the rate and the tax period is the taxpayer", "The tax base is the court process and the tax period is the customs value", "The tax base is the legal penalty and the tax period is the exemption"],
    correct: 0,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 35,
    question: "In revision, which statement is accurate? What does the canon of equity require?",
    options: ["That tax be levied at the most expensive possible time", "That tax rates be hidden from taxpayers", "That persons contribute toward government support in proportion to their abilities or revenue enjoyed under the protection of the state", "That every person pay exactly the same tax amount"],
    correct: 2,
    explanation: "The presentation quotes the classic equity principle."
  },
  {
    id: 36,
    question: "How does Kenya generally treat companies for tax purposes?",
    options: ["As entities taxed only if they import goods", "As entities that can never be tax units", "As flow-through entities taxed only in the hands of shareholders", "As opaque entities taxed separately from their members"],
    correct: 3,
    explanation: "The presentation contrasts companies with partnerships and trusts."
  },
  {
    id: 37,
    question: "Which option best reflects the presentation? Where both country of residence and country of source share taxing rights, what relief is usually required?",
    options: ["The source country must always surrender all rights", "The taxpayer pays full tax in both countries without relief", "The country of residence usually provides relief in the form of a credit for foreign tax paid", "The taxpayer is always exempt in both countries"],
    correct: 2,
    explanation: "The presentation explains the foreign tax credit mechanism."
  },
  {
    id: 38,
    question: "In revision, which statement is accurate? Who enacts tax laws in Kenya according to the slides?",
    options: ["Parliament", "Only county governments", "KRA", "The Judiciary"],
    correct: 0,
    explanation: "The slide on sovereign right to tax states that tax laws are enacted by Parliament."
  },
  {
    id: 39,
    question: "Which of the following is an example of tax evasion from the slides?",
    options: ["Using a foreign tax credit under a DTA", "Not declaring true income or claiming reliefs to which one is not entitled", "Structuring a transaction to pay only legally required tax", "Choosing a lawful deduction available under statute"],
    correct: 1,
    explanation: "The presentation gives these examples of evasion."
  },
  {
    id: 40,
    question: "Scenario variant: Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Tax neutrality", "Tax evasion", "Tariff escalation", "Double taxation"],
    correct: 3,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 41,
    question: "In revision, which statement is accurate? What does simplicity mean in a good tax system?",
    options: ["Tax law should change daily", "Tax law should always be unwritten", "Tax law should be simple enough for taxpayers to understand and comply with correctly and cost-efficiently", "Tax law should be as complex as possible to prevent planning"],
    correct: 2,
    explanation: "The presentation emphasizes simplicity despite the reality of complex laws."
  },
  {
    id: 42,
    question: "Scenario variant: A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation should never affect social behaviour", "Taxation only serves the purpose of customs control", "Taxation must always remain neutral in every circumstance", "Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals"],
    correct: 3,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 43,
    question: "Which option best reflects the presentation? What is an average tax rate?",
    options: ["Total tax liability divided by the tax base", "Total tax liability divided by economic income", "The highest rate in the schedule", "The rate applied to the last unit of income"],
    correct: 0,
    explanation: "The presentation gives this formula for average tax rate."
  },
  {
    id: 44,
    question: "In revision, which statement is accurate? What individual income tax rate range is mentioned in the presentation?",
    options: ["16 percent to 30 percent flat rates", "10 percent to 30 percent progressive marginal rates", "0 percent to 8 percent only", "5 percent to 50 percent regressive rates"],
    correct: 1,
    explanation: "The presentation gives 10% to 30% for individuals."
  },
  {
    id: 45,
    question: "What does taxation law cover in relation to incidence and tax base?",
    options: ["It covers only tax treaties between countries", "It covers only customs classifications", "It covers who and what is subject to tax", "It covers only penalties for tax evasion"],
    correct: 2,
    explanation: "The slides explain that taxation law establishes the incidence of tax and tax base."
  },
  {
    id: 46,
    question: "Which option best reflects the presentation? What does flexibility mean in a good tax system?",
    options: ["Tax law should never be changed", "Tax law should be rewritten every week", "Flexibility means no rules are needed", "The system should cope with and, where necessary, respond to changing economic circumstances without major overhauls"],
    correct: 3,
    explanation: "The presentation defines flexibility in these terms."
  },
  {
    id: 47,
    question: "In revision, which statement is accurate? Which tax is given as an example of a proportional tax in Kenya?",
    options: ["Individual income tax", "VAT", "Gift tax", "Inheritance tax"],
    correct: 1,
    explanation: "VAT is presented as an example of a proportional tax."
  },
  {
    id: 48,
    question: "Scenario variant: A country raises tax on imported products so that locally produced goods become relatively cheaper. Which economic function of taxation does this illustrate?",
    options: ["Protection of domestic industries by taxing imported goods more heavily than local goods", "The concept of tax expenditures only", "The definition of direct tax", "The principle of transparency and visibility"],
    correct: 0,
    explanation: "The presentation gives this as an example of the economic function of taxation."
  },
  {
    id: 49,
    question: "Which option best reflects the presentation? VAT or GST is directed at taxing what?",
    options: ["Only cash transfers between banks", "The value added to the supply of goods and services", "Only exports of goods", "Only corporate profits"],
    correct: 1,
    explanation: "The slides explain that VAT/GST taxes value added."
  },
  {
    id: 50,
    question: "In revision, which statement is accurate? What are tax concessions designed to do?",
    options: ["Provide welfare assistance to those in need", "Eliminate the need for tax law", "Reduce exchange rate volatility", "Raise additional revenue from luxury goods"],
    correct: 0,
    explanation: "The slides describe tax concessions as welfare-oriented."
  },
];
