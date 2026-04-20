const QUESTIONS = [
  {
    id: 1,
    question: "Scenario variant: A tax takes the same percentage from every taxpayer regardless of the amount of the base. Which type of tax is this?",
    options: ["A marginal tax rate only", "A regressive tax", "A progressive tax", "A proportional or flat tax"],
    correct: 3,
    explanation: "The presentation defines proportional tax as same rate for all taxpayers."
  },
  {
    id: 2,
    question: "In revision, which statement is accurate? What is a regressive tax?",
    options: ["A tax imposed only on luxury services", "A tax imposed at increasing rates", "A tax imposed at rates that decrease with the amount of the tax base", "A tax imposed only on imported goods"],
    correct: 2,
    explanation: "The presentation defines regressive taxes this way."
  },
  {
    id: 3,
    question: "Who administers the tax laws in Kenya according to the slides?",
    options: ["KRA", "The WCO Secretariat", "The Judiciary", "Parliament"],
    correct: 0,
    explanation: "The presentation states that KRA administers tax laws."
  },
  {
    id: 4,
    question: "A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is the court process and the tax period is the customs value", "The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured", "The tax base is the legal penalty and the tax period is the exemption", "The tax base is the rate and the tax period is the taxpayer"],
    correct: 1,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 5,
    question: "In revision, which statement is accurate? What is one disadvantage of tax expenditure programs according to the presentation?",
    options: ["They always reduce complexity", "They automatically improve monitoring", "They cannot affect public revenue", "They can be poorly targeted and may benefit unintended recipients"],
    correct: 3,
    explanation: "Poor targeting is one of the disadvantages listed."
  },
  {
    id: 6,
    question: "Which of the following is listed as a primary source of taxation law in Kenya?",
    options: ["The Income Tax Act, Cap 470", "The East African Mediation Agreement", "The Kyoto customs declaration code only", "The Constitution of the WCO"],
    correct: 0,
    explanation: "Income Tax Act, Cap 470 is expressly listed."
  },
  {
    id: 7,
    question: "Which option best reflects the presentation? Who administers the tax laws in Kenya according to the slides?",
    options: ["The Judiciary", "Parliament", "KRA", "The WCO Secretariat"],
    correct: 2,
    explanation: "The presentation states that KRA administers tax laws."
  },
  {
    id: 8,
    question: "A government decides to support a targeted activity by allowing a special deduction under income tax instead of collecting full tax and later paying a grant. Which concept from the slides best explains this?",
    options: ["The worldwide approach to jurisdiction", "Tax expenditure as an indirect form of government spending", "Indirect tax incidence", "The canon of certainty"],
    correct: 1,
    explanation: "The presentation explains tax expenditures as indirect government spending."
  },
  {
    id: 9,
    question: "Scenario variant: Taxpayers in similar economic circumstances are taxed in the same way, while wealthier taxpayers bear a greater share of the burden. Which pair of ideas does this reflect?",
    options: ["Source and residence jurisdiction", "Certainty and convenience", "Horizontal equity and vertical equity", "Neutrality and flexibility"],
    correct: 2,
    explanation: "The presentation defines horizontal and vertical equity this way."
  },
  {
    id: 10,
    question: "Which option best reflects the presentation? How do DTAs mainly address double taxation?",
    options: ["By requiring every tax to be proportional", "By allowing only source states to tax", "By abolishing taxation in both states", "By allocating taxing rights between the contracting states according to agreed principles"],
    correct: 3,
    explanation: "The DTA slides emphasize allocation of taxing rights."
  },
  {
    id: 11,
    question: "Scenario variant: Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Double taxation", "Tax evasion", "Tax neutrality", "Tariff escalation"],
    correct: 0,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 12,
    question: "A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["A DTA exchange-of-information rule", "Worldwide or residence-based jurisdiction", "Indirect tax incidence", "Territorial or source-based jurisdiction"],
    correct: 1,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 13,
    question: "Scenario variant: A government raises taxes to build roads, fund hospitals, pay social security benefits, and maintain law enforcement. Which function of taxation is most directly illustrated?",
    options: ["Only the convenience canon", "Only the redistribution function", "Raising revenue to fund government functions", "Only the neutrality principle"],
    correct: 2,
    explanation: "These are classic examples of tax-funded government functions from the presentation."
  },
  {
    id: 14,
    question: "In revision, which statement is accurate? What is one effect of indirect tax on the products on which it is imposed?",
    options: ["It reduces the quantity of tax law", "It makes the products tax exempt", "It eliminates the tax base entirely", "It raises the price of the products"],
    correct: 3,
    explanation: "The slides say indirect taxes raise product prices."
  },
  {
    id: 15,
    question: "What is the aim of the Theory of Taxation module?",
    options: ["To teach only customs valuation and tariff classification", "To equip trainees with knowledge on the theory and principles of taxation and the importance of taxes to a country", "To focus only on international customs bodies", "To replace all tax statutes with administrative guidelines"],
    correct: 1,
    explanation: "The instructional goal slide states this aim clearly."
  },
  {
    id: 16,
    question: "Which option best reflects the presentation? Why can enforcing tax laws against foreigners be difficult?",
    options: ["Because foreigners may reside outside the country and have assets abroad, making enforcement hard", "Because only customs duties apply to foreigners", "Because foreign-source income is always exempt", "Because all countries automatically enforce each other's tax laws"],
    correct: 0,
    explanation: "The international tax enforcement slide explains this challenge."
  },
  {
    id: 17,
    question: "In revision, which statement is accurate? What are excise duties according to the presentation?",
    options: ["Taxes on all salaries and wages", "Taxes imposed on the production and manufacture of certain goods, and also on importation of those goods; some services may also be charged excise duty", "Taxes imposed only on land ownership", "Taxes on all judicial filings"],
    correct: 1,
    explanation: "The slides define excise duties broadly in this way."
  },
  {
    id: 18,
    question: "A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is the court process and the tax period is the customs value", "The tax base is the rate and the tax period is the taxpayer", "The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured", "The tax base is the legal penalty and the tax period is the exemption"],
    correct: 2,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 19,
    question: "Which option best reflects the presentation? What is double taxation?",
    options: ["A situation where more than one country asserts taxing rights over the same income", "A penalty for underpaying tax in two periods", "A situation where the same country taxes income twice in one day", "A flat rate tax applied twice to imports only"],
    correct: 0,
    explanation: "The presentation defines double taxation in these terms."
  },
  {
    id: 20,
    question: "Taxpayers in similar economic circumstances are taxed in the same way, while wealthier taxpayers bear a greater share of the burden. Which pair of ideas does this reflect?",
    options: ["Neutrality and flexibility", "Source and residence jurisdiction", "Certainty and convenience", "Horizontal equity and vertical equity"],
    correct: 3,
    explanation: "The presentation defines horizontal and vertical equity this way."
  },
  {
    id: 21,
    question: "Scenario variant: A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is the legal penalty and the tax period is the exemption", "The tax base is the rate and the tax period is the taxpayer", "The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured", "The tax base is the court process and the tax period is the customs value"],
    correct: 2,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 22,
    question: "Which option best reflects the presentation? Why is consumption tax said to be the antithesis of income tax?",
    options: ["Because it applies only to foreign goods", "Because it taxes consumption rather than earnings", "Because it is always progressive", "Because it never affects prices"],
    correct: 1,
    explanation: "The presentation contrasts taxing spending with taxing earnings."
  },
  {
    id: 23,
    question: "Scenario variant: A taxpayer structures a transaction carefully so that only the minimum lawful amount of tax is payable. Which concept best fits this behaviour?",
    options: ["A regressive tax", "Tax evasion only", "A direct tax", "Tax avoidance or lawful tax planning depending on the broader structure described"],
    correct: 3,
    explanation: "The presentation treats lawful reduction of liability as avoidance and broader analysis as planning."
  },
  {
    id: 24,
    question: "What additional clauses do DTAs contain to help administration and enforcement?",
    options: ["Exchange of information clauses", "Political campaign financing clauses", "Public procurement clauses", "Mandatory customs warehousing clauses"],
    correct: 0,
    explanation: "The slides say DTAs include exchange of information to help prevent avoidance and evasion."
  },
  {
    id: 25,
    question: "Which option best reflects the presentation? How may tax expenditures be delivered under the income tax system?",
    options: ["Only through customs classification", "Only through proportional tax rates", "Through exemptions, deductions, tax offsets, or concessional tax rates", "Only through imprisonment for evasion"],
    correct: 2,
    explanation: "These methods are listed in the presentation."
  },
  {
    id: 26,
    question: "Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Double taxation", "Tax evasion", "Tariff escalation", "Tax neutrality"],
    correct: 0,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 27,
    question: "Scenario variant: Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Tax evasion", "Double taxation", "Tariff escalation", "Tax neutrality"],
    correct: 1,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 28,
    question: "A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax avoidance", "Tax planning", "Tax expenditure", "Tax evasion"],
    correct: 3,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 29,
    question: "In revision, which statement is accurate? What does the canon of convenience require?",
    options: ["That tax be collected only once per lifetime", "That tax be levied at the time or in the manner most convenient for the contributor to pay", "That taxes always be imposed on imported goods only", "That tax be levied only through foreign treaties"],
    correct: 1,
    explanation: "Convenience relates to ease of payment for the contributor."
  },
  {
    id: 30,
    question: "What is a consumption tax?",
    options: ["A tax imposed only on income from employment", "A tax paid only through judicial orders", "A tax whose economic incidence falls on the consumer", "A tax that always falls on the producer alone"],
    correct: 2,
    explanation: "The presentation defines consumption tax this way."
  },
  {
    id: 31,
    question: "Scenario variant: A partnership earns income, but the tax is imposed on the partners rather than the partnership itself. What does this illustrate?",
    options: ["Treatment of partnerships as flow-through entities", "Treatment of companies as opaque entities", "Residence-based jurisdiction", "Tax evasion through concealment"],
    correct: 0,
    explanation: "The presentation says partnerships and trusts are generally flow-through entities."
  },
  {
    id: 32,
    question: "In revision, which statement is accurate? What else does taxation law cover besides liability rules?",
    options: ["Only corporate governance", "Only valuation of imported goods", "Only international customs cooperation", "Administration and enforcement, including collection and recovery of tax"],
    correct: 3,
    explanation: "The slides say taxation law extends to administration and enforcement."
  },
  {
    id: 33,
    question: "What is the territorial or source-based approach to income taxation?",
    options: ["Taxing income sourced within a country's borders regardless of where the taxpayer resides", "Taxing only consumption and not income", "Taxing residents on all worldwide income only", "Taxing only foreign-source income of residents"],
    correct: 0,
    explanation: "The presentation defines source-based taxation in these terms."
  },
  {
    id: 34,
    question: "Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Tax neutrality", "Tariff escalation", "Double taxation", "Tax evasion"],
    correct: 2,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 35,
    question: "Scenario variant: Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Tax neutrality", "Tax evasion", "Tariff escalation", "Double taxation"],
    correct: 3,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 36,
    question: "What is the most widely encountered consumption tax according to the slides?",
    options: ["Property tax", "Value Added Tax (VAT)", "Inheritance tax", "Gift tax"],
    correct: 1,
    explanation: "VAT is identified as the most widely encountered consumption tax."
  },
  {
    id: 37,
    question: "Which option best reflects the presentation? What is a consumption tax?",
    options: ["A tax paid only through judicial orders", "A tax that always falls on the producer alone", "A tax whose economic incidence falls on the consumer", "A tax imposed only on income from employment"],
    correct: 2,
    explanation: "The presentation defines consumption tax this way."
  },
  {
    id: 38,
    question: "Taxpayers in similar economic circumstances are taxed in the same way, while wealthier taxpayers bear a greater share of the burden. Which pair of ideas does this reflect?",
    options: ["Horizontal equity and vertical equity", "Source and residence jurisdiction", "Neutrality and flexibility", "Certainty and convenience"],
    correct: 0,
    explanation: "The presentation defines horizontal and vertical equity this way."
  },
  {
    id: 39,
    question: "Why might governments intentionally depart from neutrality?",
    options: ["Because all taxes must be regressive", "To achieve specific policy objectives", "Because governments cannot set policy", "Because neutrality is unlawful"],
    correct: 1,
    explanation: "The presentation notes that neutrality is sometimes intentionally sacrificed."
  },
  {
    id: 40,
    question: "A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation must always remain neutral in every circumstance", "Taxation only serves the purpose of customs control", "Taxation should never affect social behaviour", "Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals"],
    correct: 3,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 41,
    question: "In revision, which statement is accurate? Who administers the tax laws in Kenya according to the slides?",
    options: ["KRA", "The WCO Secretariat", "Parliament", "The Judiciary"],
    correct: 0,
    explanation: "The presentation states that KRA administers tax laws."
  },
  {
    id: 42,
    question: "A government decides to support a targeted activity by allowing a special deduction under income tax instead of collecting full tax and later paying a grant. Which concept from the slides best explains this?",
    options: ["The canon of certainty", "The worldwide approach to jurisdiction", "Indirect tax incidence", "Tax expenditure as an indirect form of government spending"],
    correct: 3,
    explanation: "The presentation explains tax expenditures as indirect government spending."
  },
  {
    id: 43,
    question: "Scenario variant: A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax planning", "Tax avoidance", "Tax evasion", "Tax expenditure"],
    correct: 2,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 44,
    question: "In revision, which statement is accurate? What are bilateral international tax agreements often called?",
    options: ["Revenue Allocation Codes", "Double Taxation Agreements (DTAs)", "Global Customs Codes", "Mutual Excise Protocols"],
    correct: 1,
    explanation: "The presentation says bilateral tax treaties are often referred to as DTAs."
  },
  {
    id: 45,
    question: "Which public functions are listed as funded by tax revenue?",
    options: ["Only subsidies to exporters", "Only customs statistics and audits", "Public service, defence, law enforcement, roads, airports, hospitals, education, and social security", "Only diplomatic travel and tourism promotion"],
    correct: 2,
    explanation: "These examples are listed on the revenue function slide."
  },
  {
    id: 46,
    question: "A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Convenience", "Certainty", "Neutrality", "Redistribution"],
    correct: 1,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 47,
    question: "Scenario variant: A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["A DTA exchange-of-information rule", "Territorial or source-based jurisdiction", "Indirect tax incidence", "Worldwide or residence-based jurisdiction"],
    correct: 3,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 48,
    question: "Why would government be unable to properly function without taxation according to the slides?",
    options: ["Because taxation provides resources needed to finance operations and public goods and services", "Because taxes automatically replace all other revenue", "Because taxation is the only form of law in the country", "Because no other source of revenue exists at all"],
    correct: 0,
    explanation: "The slides explain that taxation funds operations and public goods/services."
  },
  {
    id: 49,
    question: "Scenario variant: A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation should never affect social behaviour", "Taxation only serves the purpose of customs control", "Taxation must always remain neutral in every circumstance", "Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals"],
    correct: 3,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 50,
    question: "A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["Worldwide or residence-based jurisdiction", "A DTA exchange-of-information rule", "Territorial or source-based jurisdiction", "Indirect tax incidence"],
    correct: 0,
    explanation: "This is the broader residence-based approach described in the slides."
  },
];
