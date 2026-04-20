const QUESTIONS = [
  {
    id: 1,
    question: "In revision, which statement is accurate? Why might governments intentionally depart from neutrality?",
    options: ["Because all taxes must be regressive", "To achieve specific policy objectives", "Because governments cannot set policy", "Because neutrality is unlawful"],
    correct: 1,
    explanation: "The presentation notes that neutrality is sometimes intentionally sacrificed."
  },
  {
    id: 2,
    question: "Scenario variant: A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Redistribution of wealth to promote a more egalitarian society", "Only tax certainty", "Only source-based jurisdiction", "Only efficiency in collection"],
    correct: 0,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 3,
    question: "Which option best reflects the presentation? What is meant by the sovereign right to tax?",
    options: ["Each country must use exactly the same tax laws as all others", "Only international bodies may design national tax systems", "Each nation has the sovereign right to design its own tax system subject to constitutional restrictions", "Tax law may only be made by the judiciary"],
    correct: 2,
    explanation: "The presentation explains sovereign tax design in this way."
  },
  {
    id: 4,
    question: "Scenario variant: A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax expenditure", "Tax planning", "Tax avoidance", "Tax evasion"],
    correct: 3,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 5,
    question: "What does the canon of equity require?",
    options: ["That tax be levied at the most expensive possible time", "That persons contribute toward government support in proportion to their abilities or revenue enjoyed under the protection of the state", "That every person pay exactly the same tax amount", "That tax rates be hidden from taxpayers"],
    correct: 1,
    explanation: "The presentation quotes the classic equity principle."
  },
  {
    id: 6,
    question: "Which option best reflects the presentation? Which VAT rates are mentioned in the presentation?",
    options: ["15 percent only", "5 percent only", "10 percent, 20 percent, and 30 percent", "0 percent, 8 percent, and 16 percent"],
    correct: 3,
    explanation: "These three VAT rates are listed."
  },
  {
    id: 7,
    question: "In revision, which statement is accurate? What is taxation law?",
    options: ["Only the moral principles of equity and fairness", "The same thing as public finance theory", "The body of law that governs a person's liability to pay tax to the government", "Only judicial decisions on tax crime"],
    correct: 2,
    explanation: "The presentation defines taxation law in these terms."
  },
  {
    id: 8,
    question: "Scenario variant: Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Double taxation", "Tax evasion", "Tax neutrality", "Tariff escalation"],
    correct: 0,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 9,
    question: "Which option best reflects the presentation? Which is listed as another way government can raise revenue besides taxation?",
    options: ["Creating only tax exemptions", "Collecting customs statistics", "Charging fees for services or licences", "Classifying imported goods under HS"],
    correct: 2,
    explanation: "The slides list fees, fines, and returns from assets as non-tax funding sources."
  },
  {
    id: 10,
    question: "In revision, which statement is accurate? What is one effect of indirect tax on the products on which it is imposed?",
    options: ["It reduces the quantity of tax law", "It raises the price of the products", "It makes the products tax exempt", "It eliminates the tax base entirely"],
    correct: 1,
    explanation: "The slides say indirect taxes raise product prices."
  },
  {
    id: 11,
    question: "What is the tax unit?",
    options: ["The subject of taxation, meaning the person or entity treated as the taxpayer", "The legal penalty for non-payment", "The amount of tax due", "The period over which tax is paid"],
    correct: 0,
    explanation: "The presentation introduces the tax unit as a design question."
  },
  {
    id: 12,
    question: "Which option best reflects the presentation? What are stamp duties?",
    options: ["Taxes on all employment income", "Taxes on consumption through retail purchases only", "Charges imposed on all imports at a flat rate", "Transactional taxes imposed on the execution of certain documents"],
    correct: 3,
    explanation: "The slides define stamp duties in this way."
  },
  {
    id: 13,
    question: "In revision, which statement is accurate? Which is listed as another way government can raise revenue besides taxation?",
    options: ["Collecting customs statistics", "Charging fees for services or licences", "Creating only tax exemptions", "Classifying imported goods under HS"],
    correct: 1,
    explanation: "The slides list fees, fines, and returns from assets as non-tax funding sources."
  },
  {
    id: 14,
    question: "What are other consumption taxes mentioned in the presentation?",
    options: ["Excise duty and stamp duty", "Payroll tax and withholding tax", "Property tax and inheritance tax", "Goods and Services Tax (GST) and Sales Tax"],
    correct: 3,
    explanation: "GST and Sales Tax are listed alongside VAT."
  },
  {
    id: 15,
    question: "Which option best reflects the presentation? What does neutrality mean in tax policy?",
    options: ["Neutrality means no tax may ever be collected", "Neutrality means only foreign income is taxed", "Tax law should have minimal effect on business decisions and should not unnecessarily distort markets", "Tax law should always distort all markets equally"],
    correct: 2,
    explanation: "The slides explain neutrality as minimizing distortion."
  },
  {
    id: 16,
    question: "Scenario variant: A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax evasion", "Tax avoidance", "Tax expenditure", "Tax planning"],
    correct: 0,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 17,
    question: "A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is the legal penalty and the tax period is the exemption", "The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured", "The tax base is the court process and the tax period is the customs value", "The tax base is the rate and the tax period is the taxpayer"],
    correct: 1,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 18,
    question: "Which option best reflects the presentation? What is income tax?",
    options: ["A tax on income or earnings", "A tax whose incidence always falls on consumers", "A tax imposed only on imports and exports", "A tax on documents only"],
    correct: 0,
    explanation: "The presentation defines income tax as a tax on income or earnings."
  },
  {
    id: 19,
    question: "A government raises taxes to build roads, fund hospitals, pay social security benefits, and maintain law enforcement. Which function of taxation is most directly illustrated?",
    options: ["Only the redistribution function", "Only the convenience canon", "Raising revenue to fund government functions", "Only the neutrality principle"],
    correct: 2,
    explanation: "These are classic examples of tax-funded government functions from the presentation."
  },
  {
    id: 20,
    question: "Scenario variant: A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Only efficiency in collection", "Only source-based jurisdiction", "Only tax certainty", "Redistribution of wealth to promote a more egalitarian society"],
    correct: 3,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 21,
    question: "Which option best reflects the presentation? What is the usual macroeconomic effect of higher taxation according to the slides?",
    options: ["No change in disposable income", "Less spending and a deflationary effect", "Automatic growth in foreign investment", "More spending and stronger inflationary effect"],
    correct: 1,
    explanation: "The presentation says higher taxation reduces disposable income and spending."
  },
  {
    id: 22,
    question: "Scenario variant: A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Redistribution", "Neutrality", "Certainty", "Convenience"],
    correct: 2,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 23,
    question: "How can taxation affect the relative cost of goods at the microeconomic level?",
    options: ["Taxing goods has no effect on consumer choices", "Taxing goods removes all market differences", "Taxing goods always makes them cheaper", "Taxing particular goods makes them more expensive than similar untaxed goods"],
    correct: 3,
    explanation: "The economic function slide explains that taxes can alter prices."
  },
  {
    id: 24,
    question: "Which option best reflects the presentation? What are the four main canons of taxation listed in the presentation?",
    options: ["Equity, certainty, convenience, and economy", "Neutrality, transparency, growth, and accountability", "Income, consumption, customs, and excise", "Residence, source, relief, and enforcement"],
    correct: 0,
    explanation: "These are the four classic canons listed."
  },
  {
    id: 25,
    question: "A tax takes the same percentage from every taxpayer regardless of the amount of the base. Which type of tax is this?",
    options: ["A marginal tax rate only", "A proportional or flat tax", "A progressive tax", "A regressive tax"],
    correct: 1,
    explanation: "The presentation defines proportional tax as same rate for all taxpayers."
  },
  {
    id: 26,
    question: "Scenario variant: Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Double taxation", "Tariff escalation", "Tax evasion", "Tax neutrality"],
    correct: 0,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 27,
    question: "Which option best reflects the presentation? What is horizontal equity?",
    options: ["Companies should always pay less than individuals", "People in different economic circumstances should always be treated identically", "People with foreign income should never pay tax", "People in similar economic circumstances should be treated similarly"],
    correct: 3,
    explanation: "The presentation defines horizontal equity this way."
  },
  {
    id: 28,
    question: "In revision, which statement is accurate? How serious is tax evasion according to the presentation?",
    options: ["It is the same as ordinary tax planning", "It is lawful if done once only", "It is a serious offence that can result in significant pecuniary penalties and jail terms", "It is encouraged if tax law is complex"],
    correct: 2,
    explanation: "The slides emphasize the seriousness of evasion."
  },
  {
    id: 29,
    question: "A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is the rate and the tax period is the taxpayer", "The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured", "The tax base is the legal penalty and the tax period is the exemption", "The tax base is the court process and the tax period is the customs value"],
    correct: 1,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 30,
    question: "Scenario variant: A taxpayer structures a transaction carefully so that only the minimum lawful amount of tax is payable. Which concept best fits this behaviour?",
    options: ["Tax avoidance or lawful tax planning depending on the broader structure described", "A direct tax", "A regressive tax", "Tax evasion only"],
    correct: 0,
    explanation: "The presentation treats lawful reduction of liability as avoidance and broader analysis as planning."
  },
  {
    id: 31,
    question: "A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is the legal penalty and the tax period is the exemption", "The tax base is the court process and the tax period is the customs value", "The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured", "The tax base is the rate and the tax period is the taxpayer"],
    correct: 2,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 32,
    question: "Why would government be unable to properly function without taxation according to the slides?",
    options: ["Because no other source of revenue exists at all", "Because taxes automatically replace all other revenue", "Because taxation is the only form of law in the country", "Because taxation provides resources needed to finance operations and public goods and services"],
    correct: 3,
    explanation: "The slides explain that taxation funds operations and public goods/services."
  },
  {
    id: 33,
    question: "Which option best reflects the presentation? What are bilateral international tax agreements often called?",
    options: ["Double Taxation Agreements (DTAs)", "Global Customs Codes", "Revenue Allocation Codes", "Mutual Excise Protocols"],
    correct: 0,
    explanation: "The presentation says bilateral tax treaties are often referred to as DTAs."
  },
  {
    id: 34,
    question: "In revision, which statement is accurate? What is one advantage of tax expenditure programs according to the presentation?",
    options: ["They always simplify tax law", "They are always perfectly targeted", "They are always more visible than direct spending", "They avoid double handling because government does not need to collect tax and then redistribute it separately"],
    correct: 3,
    explanation: "The advantage identified is efficiency through avoiding double handling."
  },
  {
    id: 35,
    question: "What is an effective tax rate?",
    options: ["Total tax liability divided by taxable income only", "The same thing as the marginal rate", "Total tax liability divided by the taxpayer's total economic income", "A tax rate applied only to imports"],
    correct: 2,
    explanation: "Effective rate uses economic income, which may differ from taxable income."
  },
  {
    id: 36,
    question: "Scenario variant: A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Neutrality", "Certainty", "Redistribution", "Convenience"],
    correct: 1,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 37,
    question: "In revision, which statement is accurate? What is tax avoidance?",
    options: ["Refusal to pay any tax ever imposed", "Illegal concealment of taxable income", "The same thing as tax evasion", "Arranging one's affairs and finances in a way that reduces tax liability within the law"],
    correct: 3,
    explanation: "The presentation defines tax avoidance in these terms."
  },
  {
    id: 38,
    question: "Why are tax expenditures costly according to the presentation?",
    options: ["Because they eliminate all policy objectives", "Because government collects less revenue from taxpayers as a result of concessions", "Because they only apply to foreign taxpayers", "Because they always increase tax collections"],
    correct: 1,
    explanation: "The cost of tax expenditures is reduced revenue."
  },
  {
    id: 39,
    question: "Which option best reflects the presentation? What is a tax base?",
    options: ["The property, transaction, activity, or concept upon which the tax is imposed", "The list of all tax laws in a country", "The legal remedy for underpayment of tax", "The annual budget of the government"],
    correct: 0,
    explanation: "The presentation defines tax base in these terms."
  },
  {
    id: 40,
    question: "In revision, which statement is accurate? What is meant by the sovereign right to tax?",
    options: ["Only international bodies may design national tax systems", "Tax law may only be made by the judiciary", "Each nation has the sovereign right to design its own tax system subject to constitutional restrictions", "Each country must use exactly the same tax laws as all others"],
    correct: 2,
    explanation: "The presentation explains sovereign tax design in this way."
  },
  {
    id: 41,
    question: "What does it mean to say taxes are unrequited?",
    options: ["They are never used for public welfare", "They are refunded at the end of each year", "They are payable only by corporations", "They are generally not paid in exchange for some specific thing or direct personal benefit"],
    correct: 3,
    explanation: "The presentation explains that taxes are not normally paid for a specific direct benefit."
  },
  {
    id: 42,
    question: "Scenario variant: A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Only efficiency in collection", "Only source-based jurisdiction", "Redistribution of wealth to promote a more egalitarian society", "Only tax certainty"],
    correct: 2,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 43,
    question: "In revision, which statement is accurate? Why would government be unable to properly function without taxation according to the slides?",
    options: ["Because no other source of revenue exists at all", "Because taxation provides resources needed to finance operations and public goods and services", "Because taxes automatically replace all other revenue", "Because taxation is the only form of law in the country"],
    correct: 1,
    explanation: "The slides explain that taxation funds operations and public goods/services."
  },
  {
    id: 44,
    question: "Scenario variant: A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax evasion", "Tax avoidance", "Tax expenditure", "Tax planning"],
    correct: 0,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 45,
    question: "Which option best reflects the presentation? Which of the following is an example of tax evasion from the slides?",
    options: ["Choosing a lawful deduction available under statute", "Using a foreign tax credit under a DTA", "Not declaring true income or claiming reliefs to which one is not entitled", "Structuring a transaction to pay only legally required tax"],
    correct: 2,
    explanation: "The presentation gives these examples of evasion."
  },
  {
    id: 46,
    question: "In revision, which statement is accurate? What is a tax-efficient plan?",
    options: ["A plan that guarantees zero taxation for everyone", "A plan that minimizes how much tax you pay", "A plan that ignores tax law completely", "A plan that always uses regressive tax rates"],
    correct: 1,
    explanation: "The final slide defines tax efficiency in this way."
  },
  {
    id: 47,
    question: "What tax concession example is given in the presentation?",
    options: ["All cigarette purchases are tax exempt", "All wages are taxed at zero rate", "All imports receive automatic customs waivers", "Contributions to registered retirement benefits schemes are allowable deductions when determining taxable income"],
    correct: 3,
    explanation: "This is the example given on the social and political function slide."
  },
  {
    id: 48,
    question: "Which option best reflects the presentation? Which of the following best explains why taxes are compulsory levies?",
    options: ["Because they are imposed by government and are not optional for the taxpayer", "Because they are payable only after a court order", "Because they are charged only when a direct service is requested", "Because taxpayers choose whether or not to contribute"],
    correct: 0,
    explanation: "Taxes are compulsory because they are enforced by the state."
  },
  {
    id: 49,
    question: "In revision, which statement is accurate? What does the canon of convenience require?",
    options: ["That tax be levied only through foreign treaties", "That tax be levied at the time or in the manner most convenient for the contributor to pay", "That taxes always be imposed on imported goods only", "That tax be collected only once per lifetime"],
    correct: 1,
    explanation: "Convenience relates to ease of payment for the contributor."
  },
  {
    id: 50,
    question: "Scenario variant: A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax evasion", "Tax planning", "Tax avoidance", "Tax expenditure"],
    correct: 0,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
];
