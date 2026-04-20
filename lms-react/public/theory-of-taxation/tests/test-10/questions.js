const QUESTIONS = [
  {
    id: 1,
    question: "In revision, which statement is accurate? What tax concession example is given in the presentation?",
    options: ["All wages are taxed at zero rate", "All cigarette purchases are tax exempt", "All imports receive automatic customs waivers", "Contributions to registered retirement benefits schemes are allowable deductions when determining taxable income"],
    correct: 3,
    explanation: "This is the example given on the social and political function slide."
  },
  {
    id: 2,
    question: "What is tax avoidance?",
    options: ["Refusal to pay any tax ever imposed", "The same thing as tax evasion", "Arranging one's affairs and finances in a way that reduces tax liability within the law", "Illegal concealment of taxable income"],
    correct: 2,
    explanation: "The presentation defines tax avoidance in these terms."
  },
  {
    id: 3,
    question: "Scenario variant: A partnership earns income, but the tax is imposed on the partners rather than the partnership itself. What does this illustrate?",
    options: ["Tax evasion through concealment", "Treatment of partnerships as flow-through entities", "Treatment of companies as opaque entities", "Residence-based jurisdiction"],
    correct: 1,
    explanation: "The presentation says partnerships and trusts are generally flow-through entities."
  },
  {
    id: 4,
    question: "A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax evasion", "Tax planning", "Tax avoidance", "Tax expenditure"],
    correct: 0,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 5,
    question: "What is the tax base for income tax in Kenya according to the slides?",
    options: ["All government assets and investments", "Taxable supplies only", "Taxable income", "Excisable goods and services only"],
    correct: 2,
    explanation: "Income tax is imposed on taxable income."
  },
  {
    id: 6,
    question: "Which option best reflects the presentation? Which tax is given as an example of a proportional tax in Kenya?",
    options: ["VAT", "Gift tax", "Inheritance tax", "Individual income tax"],
    correct: 0,
    explanation: "VAT is presented as an example of a proportional tax."
  },
  {
    id: 7,
    question: "Scenario variant: A partnership earns income, but the tax is imposed on the partners rather than the partnership itself. What does this illustrate?",
    options: ["Residence-based jurisdiction", "Treatment of partnerships as flow-through entities", "Treatment of companies as opaque entities", "Tax evasion through concealment"],
    correct: 1,
    explanation: "The presentation says partnerships and trusts are generally flow-through entities."
  },
  {
    id: 8,
    question: "A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["Indirect tax incidence", "A DTA exchange-of-information rule", "Territorial or source-based jurisdiction", "Worldwide or residence-based jurisdiction"],
    correct: 3,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 9,
    question: "Which option best reflects the presentation? Which public functions are listed as funded by tax revenue?",
    options: ["Only customs statistics and audits", "Public service, defence, law enforcement, roads, airports, hospitals, education, and social security", "Only diplomatic travel and tourism promotion", "Only subsidies to exporters"],
    correct: 1,
    explanation: "These examples are listed on the revenue function slide."
  },
  {
    id: 10,
    question: "In revision, which statement is accurate? Which law listed in the presentation governs VAT in Kenya?",
    options: ["The Miscellaneous Fees and Levies Act", "The Tax Procedures Act, 2015", "The Excise Duty Act, 2015", "The Value Added Tax Act, 2013"],
    correct: 3,
    explanation: "The VAT Act, 2013 is specifically listed."
  },
  {
    id: 11,
    question: "What are customs duties according to the presentation?",
    options: ["Duties imposed on the importation and exportation of goods", "Taxes on pension contributions only", "Taxes imposed only on company profits", "Taxes on the execution of legal documents"],
    correct: 0,
    explanation: "The presentation defines customs duties in these terms."
  },
  {
    id: 12,
    question: "Which option best reflects the presentation? What is the income tax period in Kenya according to the presentation?",
    options: ["A five-year period", "A monthly period", "The year of income from 1 January to 31 December", "A quarterly period"],
    correct: 2,
    explanation: "The presentation identifies the year of income as 1 January to 31 December."
  },
  {
    id: 13,
    question: "In revision, which statement is accurate? What is tax avoidance?",
    options: ["Arranging one's affairs and finances in a way that reduces tax liability within the law", "Illegal concealment of taxable income", "Refusal to pay any tax ever imposed", "The same thing as tax evasion"],
    correct: 0,
    explanation: "The presentation defines tax avoidance in these terms."
  },
  {
    id: 14,
    question: "A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Only efficiency in collection", "Only tax certainty", "Redistribution of wealth to promote a more egalitarian society", "Only source-based jurisdiction"],
    correct: 2,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 15,
    question: "Scenario variant: A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is the court process and the tax period is the customs value", "The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured", "The tax base is the legal penalty and the tax period is the exemption", "The tax base is the rate and the tax period is the taxpayer"],
    correct: 1,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 16,
    question: "In revision, which statement is accurate? How may tax expenditures be delivered under the income tax system?",
    options: ["Only through customs classification", "Only through proportional tax rates", "Only through imprisonment for evasion", "Through exemptions, deductions, tax offsets, or concessional tax rates"],
    correct: 3,
    explanation: "These methods are listed in the presentation."
  },
  {
    id: 17,
    question: "How serious is tax evasion according to the presentation?",
    options: ["It is a serious offence that can result in significant pecuniary penalties and jail terms", "It is the same as ordinary tax planning", "It is lawful if done once only", "It is encouraged if tax law is complex"],
    correct: 0,
    explanation: "The slides emphasize the seriousness of evasion."
  },
  {
    id: 18,
    question: "A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is the legal penalty and the tax period is the exemption", "The tax base is the court process and the tax period is the customs value", "The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured", "The tax base is the rate and the tax period is the taxpayer"],
    correct: 2,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 19,
    question: "Scenario variant: Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Tax evasion", "Double taxation", "Tax neutrality", "Tariff escalation"],
    correct: 1,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 20,
    question: "A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax planning", "Tax avoidance", "Tax expenditure", "Tax evasion"],
    correct: 3,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 21,
    question: "Which option best reflects the presentation? What is taxation law?",
    options: ["Only the moral principles of equity and fairness", "The body of law that governs a person's liability to pay tax to the government", "Only judicial decisions on tax crime", "The same thing as public finance theory"],
    correct: 1,
    explanation: "The presentation defines taxation law in these terms."
  },
  {
    id: 22,
    question: "In revision, which statement is accurate? What are tax periods?",
    options: ["The relevant periods during which taxpayers must pay tax on amounts that fall within the tax base", "The legal entities subject to tax", "The list of tax rates that apply to a taxpayer", "The administrative penalties for late filing"],
    correct: 0,
    explanation: "The slides explain tax periods in these terms."
  },
  {
    id: 23,
    question: "Scenario variant: A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Only source-based jurisdiction", "Only tax certainty", "Redistribution of wealth to promote a more egalitarian society", "Only efficiency in collection"],
    correct: 2,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 24,
    question: "Which option best reflects the presentation? How do governments use taxation to protect domestic industries according to the presentation?",
    options: ["By exempting all imported goods from tax", "By abolishing all tariffs permanently", "By taxing domestic goods only", "By taxing imported goods more heavily than locally produced goods"],
    correct: 3,
    explanation: "The presentation links taxation to domestic industry protection."
  },
  {
    id: 25,
    question: "Scenario variant: A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is the rate and the tax period is the taxpayer", "The tax base is the court process and the tax period is the customs value", "The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured", "The tax base is the legal penalty and the tax period is the exemption"],
    correct: 2,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 26,
    question: "What individual income tax rate range is mentioned in the presentation?",
    options: ["5 percent to 50 percent regressive rates", "10 percent to 30 percent progressive marginal rates", "0 percent to 8 percent only", "16 percent to 30 percent flat rates"],
    correct: 1,
    explanation: "The presentation gives 10% to 30% for individuals."
  },
  {
    id: 27,
    question: "Which option best reflects the presentation? What tax concession example is given in the presentation?",
    options: ["All imports receive automatic customs waivers", "All cigarette purchases are tax exempt", "All wages are taxed at zero rate", "Contributions to registered retirement benefits schemes are allowable deductions when determining taxable income"],
    correct: 3,
    explanation: "This is the example given on the social and political function slide."
  },
  {
    id: 28,
    question: "A country raises tax on imported products so that locally produced goods become relatively cheaper. Which economic function of taxation does this illustrate?",
    options: ["Protection of domestic industries by taxing imported goods more heavily than local goods", "The principle of transparency and visibility", "The definition of direct tax", "The concept of tax expenditures only"],
    correct: 0,
    explanation: "The presentation gives this as an example of the economic function of taxation."
  },
  {
    id: 29,
    question: "What are customs duties according to the presentation?",
    options: ["Taxes imposed only on company profits", "Taxes on pension contributions only", "Taxes on the execution of legal documents", "Duties imposed on the importation and exportation of goods"],
    correct: 3,
    explanation: "The presentation defines customs duties in these terms."
  },
  {
    id: 30,
    question: "Which option best reflects the presentation? What are other consumption taxes mentioned in the presentation?",
    options: ["Payroll tax and withholding tax", "Property tax and inheritance tax", "Goods and Services Tax (GST) and Sales Tax", "Excise duty and stamp duty"],
    correct: 2,
    explanation: "GST and Sales Tax are listed alongside VAT."
  },
  {
    id: 31,
    question: "In revision, which statement is accurate? What are customs duties according to the presentation?",
    options: ["Taxes on the execution of legal documents", "Duties imposed on the importation and exportation of goods", "Taxes on pension contributions only", "Taxes imposed only on company profits"],
    correct: 1,
    explanation: "The presentation defines customs duties in these terms."
  },
  {
    id: 32,
    question: "A government raises taxes to build roads, fund hospitals, pay social security benefits, and maintain law enforcement. Which function of taxation is most directly illustrated?",
    options: ["Raising revenue to fund government functions", "Only the redistribution function", "Only the convenience canon", "Only the neutrality principle"],
    correct: 0,
    explanation: "These are classic examples of tax-funded government functions from the presentation."
  },
  {
    id: 33,
    question: "Scenario variant: A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["Indirect tax incidence", "Worldwide or residence-based jurisdiction", "Territorial or source-based jurisdiction", "A DTA exchange-of-information rule"],
    correct: 1,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 34,
    question: "A tax takes the same percentage from every taxpayer regardless of the amount of the base. Which type of tax is this?",
    options: ["A proportional or flat tax", "A progressive tax", "A marginal tax rate only", "A regressive tax"],
    correct: 0,
    explanation: "The presentation defines proportional tax as same rate for all taxpayers."
  },
  {
    id: 35,
    question: "Scenario variant: A tax takes the same percentage from every taxpayer regardless of the amount of the base. Which type of tax is this?",
    options: ["A progressive tax", "A marginal tax rate only", "A regressive tax", "A proportional or flat tax"],
    correct: 3,
    explanation: "The presentation defines proportional tax as same rate for all taxpayers."
  },
  {
    id: 36,
    question: "A tax takes the same percentage from every taxpayer regardless of the amount of the base. Which type of tax is this?",
    options: ["A regressive tax", "A progressive tax", "A proportional or flat tax", "A marginal tax rate only"],
    correct: 2,
    explanation: "The presentation defines proportional tax as same rate for all taxpayers."
  },
  {
    id: 37,
    question: "Scenario variant: Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Tax neutrality", "Double taxation", "Tax evasion", "Tariff escalation"],
    correct: 1,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 38,
    question: "What are other consumption taxes mentioned in the presentation?",
    options: ["Goods and Services Tax (GST) and Sales Tax", "Payroll tax and withholding tax", "Excise duty and stamp duty", "Property tax and inheritance tax"],
    correct: 0,
    explanation: "GST and Sales Tax are listed alongside VAT."
  },
  {
    id: 39,
    question: "Scenario variant: A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Convenience", "Neutrality", "Redistribution", "Certainty"],
    correct: 3,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 40,
    question: "In revision, which statement is accurate? How does the presentation describe taxation as a political engineering device?",
    options: ["As a purely judicial remedy", "As a system used only to punish fraud", "As a carrot or a stick to promote government objectives", "As a neutral device that never influences behaviour"],
    correct: 2,
    explanation: "The slides explicitly use the carrot-or-stick description."
  },
  {
    id: 41,
    question: "Why are DTAs important according to the presentation?",
    options: ["Because they eliminate the need for residence rules", "Because they address double taxation, which is a major impediment to cross-border trade and investment", "Because they only regulate customs warehouses", "Because they replace all domestic tax laws"],
    correct: 1,
    explanation: "The DTA section explains their role in addressing double taxation."
  },
  {
    id: 42,
    question: "Which option best reflects the presentation? Which of the following best explains why taxes are compulsory levies?",
    options: ["Because they are charged only when a direct service is requested", "Because taxpayers choose whether or not to contribute", "Because they are payable only after a court order", "Because they are imposed by government and are not optional for the taxpayer"],
    correct: 3,
    explanation: "Taxes are compulsory because they are enforced by the state."
  },
  {
    id: 43,
    question: "Scenario variant: A country raises tax on imported products so that locally produced goods become relatively cheaper. Which economic function of taxation does this illustrate?",
    options: ["The concept of tax expenditures only", "The definition of direct tax", "Protection of domestic industries by taxing imported goods more heavily than local goods", "The principle of transparency and visibility"],
    correct: 2,
    explanation: "The presentation gives this as an example of the economic function of taxation."
  },
  {
    id: 44,
    question: "A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Certainty", "Convenience", "Redistribution", "Neutrality"],
    correct: 0,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 45,
    question: "Scenario variant: A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax avoidance", "Tax evasion", "Tax expenditure", "Tax planning"],
    correct: 1,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 46,
    question: "In revision, which statement is accurate? How may tax expenditures be delivered under the income tax system?",
    options: ["Only through customs classification", "Only through imprisonment for evasion", "Only through proportional tax rates", "Through exemptions, deductions, tax offsets, or concessional tax rates"],
    correct: 3,
    explanation: "These methods are listed in the presentation."
  },
  {
    id: 47,
    question: "What kind of society can redistributive taxation promote?",
    options: ["A more egalitarian society with a more level playing field", "A more polarised society with concentrated wealth", "A society without any government role", "A society where no one pays tax"],
    correct: 0,
    explanation: "The slides say redistribution can produce a more level playing field."
  },
  {
    id: 48,
    question: "Which option best reflects the presentation? Where both country of residence and country of source share taxing rights, what relief is usually required?",
    options: ["The taxpayer pays full tax in both countries without relief", "The source country must always surrender all rights", "The country of residence usually provides relief in the form of a credit for foreign tax paid", "The taxpayer is always exempt in both countries"],
    correct: 2,
    explanation: "The presentation explains the foreign tax credit mechanism."
  },
  {
    id: 49,
    question: "Scenario variant: A taxpayer structures a transaction carefully so that only the minimum lawful amount of tax is payable. Which concept best fits this behaviour?",
    options: ["Tax evasion only", "Tax avoidance or lawful tax planning depending on the broader structure described", "A direct tax", "A regressive tax"],
    correct: 1,
    explanation: "The presentation treats lawful reduction of liability as avoidance and broader analysis as planning."
  },
  {
    id: 50,
    question: "How does the Kenyan income tax system generally treat individuals and families?",
    options: ["It generally treats each individual as a separate tax unit", "It never taxes individuals separately", "It always aggregates spouses' incomes", "It always taxes the family as one unit"],
    correct: 0,
    explanation: "The slides explain that individuals are generally separate tax units."
  },
];
