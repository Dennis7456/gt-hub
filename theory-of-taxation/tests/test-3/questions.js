const QUESTIONS = [
  {
    id: 1,
    question: "Which option best reflects the presentation? What is the tax unit?",
    options: ["The legal penalty for non-payment", "The period over which tax is paid", "The amount of tax due", "The subject of taxation, meaning the person or entity treated as the taxpayer"],
    correct: 3,
    explanation: "The presentation introduces the tax unit as a design question."
  },
  {
    id: 2,
    question: "In revision, which statement is accurate? Which is listed as another way government can raise revenue besides taxation?",
    options: ["Classifying imported goods under HS", "Creating only tax exemptions", "Charging fees for services or licences", "Collecting customs statistics"],
    correct: 2,
    explanation: "The slides list fees, fines, and returns from assets as non-tax funding sources."
  },
  {
    id: 3,
    question: "What is double taxation?",
    options: ["A flat rate tax applied twice to imports only", "A situation where more than one country asserts taxing rights over the same income", "A penalty for underpaying tax in two periods", "A situation where the same country taxes income twice in one day"],
    correct: 1,
    explanation: "The presentation defines double taxation in these terms."
  },
  {
    id: 4,
    question: "Which option best reflects the presentation? Can the burden of a direct tax be shifted by the taxpayer to someone else?",
    options: ["No, the burden cannot be shifted", "Yes, but only through a foreign tax credit", "Yes, but only through customs duty", "Yes, always to the consumer"],
    correct: 0,
    explanation: "The presentation says direct tax burden cannot be shifted."
  },
  {
    id: 5,
    question: "In revision, which statement is accurate? What is one effect of indirect tax on the products on which it is imposed?",
    options: ["It makes the products tax exempt", "It raises the price of the products", "It reduces the quantity of tax law", "It eliminates the tax base entirely"],
    correct: 1,
    explanation: "The slides say indirect taxes raise product prices."
  },
  {
    id: 6,
    question: "How do DTAs mainly address double taxation?",
    options: ["By allowing only source states to tax", "By requiring every tax to be proportional", "By abolishing taxation in both states", "By allocating taxing rights between the contracting states according to agreed principles"],
    correct: 3,
    explanation: "The DTA slides emphasize allocation of taxing rights."
  },
  {
    id: 7,
    question: "Which option best reflects the presentation? Why does the presentation say excise duties may be imposed on cigarettes?",
    options: ["To raise revenue and also discourage smoking and reduce national health costs", "To ensure cigarettes are treated as direct tax", "To make cigarettes cheaper", "To support only foreign tobacco producers"],
    correct: 0,
    explanation: "The presentation uses cigarettes as an example of behavioural taxation."
  },
  {
    id: 8,
    question: "In revision, which statement is accurate? What is double taxation?",
    options: ["A penalty for underpaying tax in two periods", "A flat rate tax applied twice to imports only", "A situation where more than one country asserts taxing rights over the same income", "A situation where the same country taxes income twice in one day"],
    correct: 2,
    explanation: "The presentation defines double taxation in these terms."
  },
  {
    id: 9,
    question: "Which of the following best explains why taxes are compulsory levies?",
    options: ["Because they are imposed by government and are not optional for the taxpayer", "Because they are charged only when a direct service is requested", "Because they are payable only after a court order", "Because taxpayers choose whether or not to contribute"],
    correct: 0,
    explanation: "Taxes are compulsory because they are enforced by the state."
  },
  {
    id: 10,
    question: "Scenario variant: A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Redistribution", "Convenience", "Certainty", "Neutrality"],
    correct: 2,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 11,
    question: "In revision, which statement is accurate? What does neutrality mean in tax policy?",
    options: ["Tax law should always distort all markets equally", "Tax law should have minimal effect on business decisions and should not unnecessarily distort markets", "Neutrality means only foreign income is taxed", "Neutrality means no tax may ever be collected"],
    correct: 1,
    explanation: "The slides explain neutrality as minimizing distortion."
  },
  {
    id: 12,
    question: "Scenario variant: A taxpayer structures a transaction carefully so that only the minimum lawful amount of tax is payable. Which concept best fits this behaviour?",
    options: ["A regressive tax", "A direct tax", "Tax evasion only", "Tax avoidance or lawful tax planning depending on the broader structure described"],
    correct: 3,
    explanation: "The presentation treats lawful reduction of liability as avoidance and broader analysis as planning."
  },
  {
    id: 13,
    question: "Which option best reflects the presentation? What are tax incentives designed to do?",
    options: ["Induce certain activities or behaviour", "Punish all non-compliance", "Replace all direct spending", "Ensure all taxpayers pay the same amount"],
    correct: 0,
    explanation: "Tax incentives are described as inducements."
  },
  {
    id: 14,
    question: "Scenario variant: A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["A DTA exchange-of-information rule", "Indirect tax incidence", "Worldwide or residence-based jurisdiction", "Territorial or source-based jurisdiction"],
    correct: 2,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 15,
    question: "What is double taxation?",
    options: ["A situation where the same country taxes income twice in one day", "A penalty for underpaying tax in two periods", "A flat rate tax applied twice to imports only", "A situation where more than one country asserts taxing rights over the same income"],
    correct: 3,
    explanation: "The presentation defines double taxation in these terms."
  },
  {
    id: 16,
    question: "Which option best reflects the presentation? What is vertical equity?",
    options: ["Businesses should never pay tax", "People in different economic circumstances should be treated differently, with those better off bearing a greater burden", "People with low income should always pay more", "People in similar circumstances should be taxed similarly"],
    correct: 1,
    explanation: "The slides define vertical equity in this way."
  },
  {
    id: 17,
    question: "A taxpayer structures a transaction carefully so that only the minimum lawful amount of tax is payable. Which concept best fits this behaviour?",
    options: ["A regressive tax", "Tax evasion only", "Tax avoidance or lawful tax planning depending on the broader structure described", "A direct tax"],
    correct: 2,
    explanation: "The presentation treats lawful reduction of liability as avoidance and broader analysis as planning."
  },
  {
    id: 18,
    question: "What kind of society can redistributive taxation promote?",
    options: ["A more egalitarian society with a more level playing field", "A society where no one pays tax", "A society without any government role", "A more polarised society with concentrated wealth"],
    correct: 0,
    explanation: "The slides say redistribution can produce a more level playing field."
  },
  {
    id: 19,
    question: "Which option best reflects the presentation? What is a regressive tax?",
    options: ["A tax imposed at increasing rates", "A tax imposed at rates that decrease with the amount of the tax base", "A tax imposed only on imported goods", "A tax imposed only on luxury services"],
    correct: 1,
    explanation: "The presentation defines regressive taxes this way."
  },
  {
    id: 20,
    question: "In revision, which statement is accurate? What are bilateral international tax agreements often called?",
    options: ["Revenue Allocation Codes", "Mutual Excise Protocols", "Global Customs Codes", "Double Taxation Agreements (DTAs)"],
    correct: 3,
    explanation: "The presentation says bilateral tax treaties are often referred to as DTAs."
  },
  {
    id: 21,
    question: "What are stamp duties?",
    options: ["Charges imposed on all imports at a flat rate", "Transactional taxes imposed on the execution of certain documents", "Taxes on all employment income", "Taxes on consumption through retail purchases only"],
    correct: 1,
    explanation: "The slides define stamp duties in this way."
  },
  {
    id: 22,
    question: "Which option best reflects the presentation? What should a student understand by the end of the session according to the presentation?",
    options: ["What taxes are, the functions of taxes, the principles of taxation, and the features of a good tax system", "Only tax audits and prosecutions", "Only the history of tax treaties", "Only customs duties and border posts"],
    correct: 0,
    explanation: "The learning outcome slide lists these four areas."
  },
  {
    id: 23,
    question: "In revision, which statement is accurate? Into what two broad categories may tax expenditures be divided?",
    options: ["Direct taxes and indirect taxes", "Source-based taxes and residence-based taxes", "Marginal taxes and average taxes", "Tax incentives and tax concessions"],
    correct: 3,
    explanation: "The presentation gives these two broad categories."
  },
  {
    id: 24,
    question: "What is a tax-efficient plan?",
    options: ["A plan that guarantees zero taxation for everyone", "A plan that always uses regressive tax rates", "A plan that minimizes how much tax you pay", "A plan that ignores tax law completely"],
    correct: 2,
    explanation: "The final slide defines tax efficiency in this way."
  },
  {
    id: 25,
    question: "Which option best reflects the presentation? Into what two broad categories may tax expenditures be divided?",
    options: ["Marginal taxes and average taxes", "Tax incentives and tax concessions", "Source-based taxes and residence-based taxes", "Direct taxes and indirect taxes"],
    correct: 1,
    explanation: "The presentation gives these two broad categories."
  },
  {
    id: 26,
    question: "In revision, which statement is accurate? Why can enforcing tax laws against foreigners be difficult?",
    options: ["Because foreign-source income is always exempt", "Because only customs duties apply to foreigners", "Because all countries automatically enforce each other's tax laws", "Because foreigners may reside outside the country and have assets abroad, making enforcement hard"],
    correct: 3,
    explanation: "The international tax enforcement slide explains this challenge."
  },
  {
    id: 27,
    question: "A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["Worldwide or residence-based jurisdiction", "A DTA exchange-of-information rule", "Territorial or source-based jurisdiction", "Indirect tax incidence"],
    correct: 0,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 28,
    question: "Which option best reflects the presentation? Why would government be unable to properly function without taxation according to the slides?",
    options: ["Because taxation is the only form of law in the country", "Because no other source of revenue exists at all", "Because taxation provides resources needed to finance operations and public goods and services", "Because taxes automatically replace all other revenue"],
    correct: 2,
    explanation: "The slides explain that taxation funds operations and public goods/services."
  },
  {
    id: 29,
    question: "In revision, which statement is accurate? What is the tax base for Excise Duty in Kenya according to the presentation?",
    options: ["All property transfers", "Excisable goods and services", "All tax expenditures", "All personal income"],
    correct: 1,
    explanation: "The presentation identifies excisable goods and services as the excise tax base."
  },
  {
    id: 30,
    question: "What is a proportional tax?",
    options: ["A tax imposed at the same rate on all taxpayers", "A tax imposed at lower rates as income rises", "A tax imposed only on imported goods", "A tax imposed at higher rates as income rises"],
    correct: 0,
    explanation: "The presentation also calls this a flat tax."
  },
  {
    id: 31,
    question: "Which option best reflects the presentation? What is tax evasion?",
    options: ["A treaty-based relief against double taxation", "A method of planning investment income efficiently", "Lawful arrangement of affairs to reduce tax", "Illegal underpayment of tax, usually by fraudulent concealment or misrepresentation"],
    correct: 3,
    explanation: "The presentation defines tax evasion in these terms."
  },
  {
    id: 32,
    question: "In revision, which statement is accurate? What is a tax-efficient plan?",
    options: ["A plan that guarantees zero taxation for everyone", "A plan that ignores tax law completely", "A plan that minimizes how much tax you pay", "A plan that always uses regressive tax rates"],
    correct: 2,
    explanation: "The final slide defines tax efficiency in this way."
  },
  {
    id: 33,
    question: "A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Only tax certainty", "Only source-based jurisdiction", "Only efficiency in collection", "Redistribution of wealth to promote a more egalitarian society"],
    correct: 3,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 34,
    question: "Which option best reflects the presentation? What are tax rates?",
    options: ["The rates at which tax is imposed, which may be flat or may vary with the level of the tax base", "Only the list of taxpayers under a regime", "Only the years in which tax is paid", "Only the penalties for late payment"],
    correct: 0,
    explanation: "The slides define tax rates and explain flat versus variable structures."
  },
  {
    id: 35,
    question: "In revision, which statement is accurate? Can the burden of a direct tax be shifted by the taxpayer to someone else?",
    options: ["Yes, but only through a foreign tax credit", "Yes, but only through customs duty", "No, the burden cannot be shifted", "Yes, always to the consumer"],
    correct: 2,
    explanation: "The presentation says direct tax burden cannot be shifted."
  },
  {
    id: 36,
    question: "How can taxation affect the relative cost of goods at the microeconomic level?",
    options: ["Taxing goods always makes them cheaper", "Taxing particular goods makes them more expensive than similar untaxed goods", "Taxing goods has no effect on consumer choices", "Taxing goods removes all market differences"],
    correct: 1,
    explanation: "The economic function slide explains that taxes can alter prices."
  },
  {
    id: 37,
    question: "Which option best reflects the presentation? What does transparency and visibility mean in tax policy?",
    options: ["Taxpayers should know that a tax exists and how and when it is imposed", "Taxes should be hidden to reduce complaints", "Tax should be imposed without any written rules", "Only tax officers should know tax rules"],
    correct: 0,
    explanation: "Transparency and visibility are defined in these terms."
  },
  {
    id: 38,
    question: "In revision, which statement is accurate? What is the income tax period in Kenya according to the presentation?",
    options: ["A monthly period", "A quarterly period", "A five-year period", "The year of income from 1 January to 31 December"],
    correct: 3,
    explanation: "The presentation identifies the year of income as 1 January to 31 December."
  },
  {
    id: 39,
    question: "Where both country of residence and country of source share taxing rights, what relief is usually required?",
    options: ["The taxpayer pays full tax in both countries without relief", "The taxpayer is always exempt in both countries", "The country of residence usually provides relief in the form of a credit for foreign tax paid", "The source country must always surrender all rights"],
    correct: 2,
    explanation: "The presentation explains the foreign tax credit mechanism."
  },
  {
    id: 40,
    question: "Which option best reflects the presentation? What kind of society can redistributive taxation promote?",
    options: ["A society where no one pays tax", "A more egalitarian society with a more level playing field", "A society without any government role", "A more polarised society with concentrated wealth"],
    correct: 1,
    explanation: "The slides say redistribution can produce a more level playing field."
  },
  {
    id: 41,
    question: "In revision, which statement is accurate? Who adjudicates tax disputes in Kenya according to the slides?",
    options: ["KRA", "The WCO Council", "Parliament", "The Judiciary"],
    correct: 3,
    explanation: "The slide says adjudication is done by the Judiciary."
  },
  {
    id: 42,
    question: "Scenario variant: A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Redistribution of wealth to promote a more egalitarian society", "Only tax certainty", "Only source-based jurisdiction", "Only efficiency in collection"],
    correct: 0,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 43,
    question: "Which option best reflects the presentation? What does it mean to say taxes are unrequited?",
    options: ["They are payable only by corporations", "They are generally not paid in exchange for some specific thing or direct personal benefit", "They are refunded at the end of each year", "They are never used for public welfare"],
    correct: 1,
    explanation: "The presentation explains that taxes are not normally paid for a specific direct benefit."
  },
  {
    id: 44,
    question: "In revision, which statement is accurate? What tax concession example is given in the presentation?",
    options: ["All wages are taxed at zero rate", "All imports receive automatic customs waivers", "Contributions to registered retirement benefits schemes are allowable deductions when determining taxable income", "All cigarette purchases are tax exempt"],
    correct: 2,
    explanation: "This is the example given on the social and political function slide."
  },
  {
    id: 45,
    question: "What does the canon of convenience require?",
    options: ["That tax be levied only through foreign treaties", "That taxes always be imposed on imported goods only", "That tax be collected only once per lifetime", "That tax be levied at the time or in the manner most convenient for the contributor to pay"],
    correct: 3,
    explanation: "Convenience relates to ease of payment for the contributor."
  },
  {
    id: 46,
    question: "Scenario variant: A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax avoidance", "Tax evasion", "Tax expenditure", "Tax planning"],
    correct: 1,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 47,
    question: "In revision, which statement is accurate? What individual income tax rate range is mentioned in the presentation?",
    options: ["0 percent to 8 percent only", "16 percent to 30 percent flat rates", "10 percent to 30 percent progressive marginal rates", "5 percent to 50 percent regressive rates"],
    correct: 2,
    explanation: "The presentation gives 10% to 30% for individuals."
  },
  {
    id: 48,
    question: "Scenario variant: A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["Worldwide or residence-based jurisdiction", "Territorial or source-based jurisdiction", "A DTA exchange-of-information rule", "Indirect tax incidence"],
    correct: 0,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 49,
    question: "Which option best reflects the presentation? What idea is reflected in the statement that nobody is required to pay more tax than they are legally obliged to pay?",
    options: ["The rule of double taxation", "The principle of tax evasion", "The canon of economy in collection only", "The idea underlying tax avoidance"],
    correct: 3,
    explanation: "The presentation uses this statement in explaining avoidance."
  },
  {
    id: 50,
    question: "In revision, which statement is accurate? What is a regressive tax?",
    options: ["A tax imposed only on luxury services", "A tax imposed at increasing rates", "A tax imposed at rates that decrease with the amount of the tax base", "A tax imposed only on imported goods"],
    correct: 2,
    explanation: "The presentation defines regressive taxes this way."
  },
];
