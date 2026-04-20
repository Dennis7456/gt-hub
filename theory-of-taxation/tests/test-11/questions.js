const QUESTIONS = [
  {
    id: 1,
    question: "What does it mean to say taxes are unrequited?",
    options: ["They are payable only by corporations", "They are never used for public welfare", "They are generally not paid in exchange for some specific thing or direct personal benefit", "They are refunded at the end of each year"],
    correct: 2,
    explanation: "The presentation explains that taxes are not normally paid for a specific direct benefit."
  },
  {
    id: 2,
    question: "Which option best reflects the presentation? What is a tax base?",
    options: ["The property, transaction, activity, or concept upon which the tax is imposed", "The list of all tax laws in a country", "The annual budget of the government", "The legal remedy for underpayment of tax"],
    correct: 0,
    explanation: "The presentation defines tax base in these terms."
  },
  {
    id: 3,
    question: "A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax avoidance", "Tax evasion", "Tax expenditure", "Tax planning"],
    correct: 1,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 4,
    question: "What is the most important and immediately recognisable role of taxation?",
    options: ["Replacing the judiciary in tax disputes", "Creating all commercial transactions", "Reducing the need for legislation", "Raising revenue to fund government functions"],
    correct: 3,
    explanation: "The presentation identifies revenue raising as the most important role."
  },
  {
    id: 5,
    question: "A government raises taxes to build roads, fund hospitals, pay social security benefits, and maintain law enforcement. Which function of taxation is most directly illustrated?",
    options: ["Only the convenience canon", "Raising revenue to fund government functions", "Only the redistribution function", "Only the neutrality principle"],
    correct: 1,
    explanation: "These are classic examples of tax-funded government functions from the presentation."
  },
  {
    id: 6,
    question: "Scenario variant: A partnership earns income, but the tax is imposed on the partners rather than the partnership itself. What does this illustrate?",
    options: ["Tax evasion through concealment", "Residence-based jurisdiction", "Treatment of companies as opaque entities", "Treatment of partnerships as flow-through entities"],
    correct: 3,
    explanation: "The presentation says partnerships and trusts are generally flow-through entities."
  },
  {
    id: 7,
    question: "A partnership earns income, but the tax is imposed on the partners rather than the partnership itself. What does this illustrate?",
    options: ["Residence-based jurisdiction", "Treatment of companies as opaque entities", "Treatment of partnerships as flow-through entities", "Tax evasion through concealment"],
    correct: 2,
    explanation: "The presentation says partnerships and trusts are generally flow-through entities."
  },
  {
    id: 8,
    question: "Scenario variant: A partnership earns income, but the tax is imposed on the partners rather than the partnership itself. What does this illustrate?",
    options: ["Treatment of partnerships as flow-through entities", "Tax evasion through concealment", "Treatment of companies as opaque entities", "Residence-based jurisdiction"],
    correct: 0,
    explanation: "The presentation says partnerships and trusts are generally flow-through entities."
  },
  {
    id: 9,
    question: "In revision, which statement is accurate? What is the most widely encountered consumption tax according to the slides?",
    options: ["Inheritance tax", "Value Added Tax (VAT)", "Gift tax", "Property tax"],
    correct: 1,
    explanation: "VAT is identified as the most widely encountered consumption tax."
  },
  {
    id: 10,
    question: "What are other consumption taxes mentioned in the presentation?",
    options: ["Property tax and inheritance tax", "Excise duty and stamp duty", "Goods and Services Tax (GST) and Sales Tax", "Payroll tax and withholding tax"],
    correct: 2,
    explanation: "GST and Sales Tax are listed alongside VAT."
  },
  {
    id: 11,
    question: "A country raises tax on imported products so that locally produced goods become relatively cheaper. Which economic function of taxation does this illustrate?",
    options: ["The definition of direct tax", "The concept of tax expenditures only", "The principle of transparency and visibility", "Protection of domestic industries by taxing imported goods more heavily than local goods"],
    correct: 3,
    explanation: "The presentation gives this as an example of the economic function of taxation."
  },
  {
    id: 12,
    question: "In revision, which statement is accurate? What is vertical equity?",
    options: ["People in different economic circumstances should be treated differently, with those better off bearing a greater burden", "People in similar circumstances should be taxed similarly", "Businesses should never pay tax", "People with low income should always pay more"],
    correct: 0,
    explanation: "The slides define vertical equity in this way."
  },
  {
    id: 13,
    question: "What is tax planning?",
    options: ["Fraudulent concealment of income", "Automatic exemption from all taxes", "Analysis of a financial situation or plan so that all elements work together to allow the lowest lawful tax burden", "A method of replacing tax law with private agreements"],
    correct: 2,
    explanation: "The presentation defines tax planning this way."
  },
  {
    id: 14,
    question: "Scenario variant: Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Tariff escalation", "Double taxation", "Tax neutrality", "Tax evasion"],
    correct: 1,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 15,
    question: "A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax evasion", "Tax expenditure", "Tax planning", "Tax avoidance"],
    correct: 0,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 16,
    question: "Which of the following is listed as a primary source of taxation law in Kenya?",
    options: ["The Kyoto customs declaration code only", "The East African Mediation Agreement", "The Constitution of the WCO", "The Income Tax Act, Cap 470"],
    correct: 3,
    explanation: "Income Tax Act, Cap 470 is expressly listed."
  },
  {
    id: 17,
    question: "Which option best reflects the presentation? What does it mean to say taxes are unrequited?",
    options: ["They are payable only by corporations", "They are generally not paid in exchange for some specific thing or direct personal benefit", "They are never used for public welfare", "They are refunded at the end of each year"],
    correct: 1,
    explanation: "The presentation explains that taxes are not normally paid for a specific direct benefit."
  },
  {
    id: 18,
    question: "In revision, which statement is accurate? How serious is tax evasion according to the presentation?",
    options: ["It is the same as ordinary tax planning", "It is lawful if done once only", "It is encouraged if tax law is complex", "It is a serious offence that can result in significant pecuniary penalties and jail terms"],
    correct: 3,
    explanation: "The slides emphasize the seriousness of evasion."
  },
  {
    id: 19,
    question: "Which is an example of a direct tax from the slides?",
    options: ["Corporation tax", "VAT", "Excise duty", "Customs duty"],
    correct: 0,
    explanation: "Corporation tax is listed among examples of direct taxes."
  },
  {
    id: 20,
    question: "Which option best reflects the presentation? What type of tax period applies in the case of VAT according to the presentation?",
    options: ["A once-per-lifetime tax period", "Quarterly tax periods only", "Monthly tax periods", "Weekly tax periods"],
    correct: 2,
    explanation: "The slides say VAT generally uses monthly tax periods."
  },
  {
    id: 21,
    question: "In revision, which statement is accurate? Why is consumption tax said to be the antithesis of income tax?",
    options: ["Because it applies only to foreign goods", "Because it taxes consumption rather than earnings", "Because it never affects prices", "Because it is always progressive"],
    correct: 1,
    explanation: "The presentation contrasts taxing spending with taxing earnings."
  },
  {
    id: 22,
    question: "What is a progressive tax?",
    options: ["A tax imposed at rates that increase with the amount of the tax base", "A tax imposed at rates that decrease with the tax base", "A tax imposed only on transactions", "A tax imposed at the same rate on all taxpayers"],
    correct: 0,
    explanation: "The presentation defines progressive taxes in these terms."
  },
  {
    id: 23,
    question: "A country raises tax on imported products so that locally produced goods become relatively cheaper. Which economic function of taxation does this illustrate?",
    options: ["The definition of direct tax", "The principle of transparency and visibility", "The concept of tax expenditures only", "Protection of domestic industries by taxing imported goods more heavily than local goods"],
    correct: 3,
    explanation: "The presentation gives this as an example of the economic function of taxation."
  },
  {
    id: 24,
    question: "In revision, which statement is accurate? What is horizontal equity?",
    options: ["People in different economic circumstances should always be treated identically", "Companies should always pay less than individuals", "People in similar economic circumstances should be treated similarly", "People with foreign income should never pay tax"],
    correct: 2,
    explanation: "The presentation defines horizontal equity this way."
  },
  {
    id: 25,
    question: "What does equity and fairness mean in good tax policy?",
    options: ["Only residents should ever be taxed", "Every taxpayer should always pay exactly the same amount", "Taxes should always be hidden from public view", "Similarly situated taxpayers should be taxed similarly and each taxpayer should pay their fair share"],
    correct: 3,
    explanation: "The principle is described in these terms."
  },
  {
    id: 26,
    question: "Which option best reflects the presentation? Who are taxpayers in a tax regime?",
    options: ["Only the tax authority itself", "The legal entities such as individuals or companies who are liable to pay the tax", "Only corporations, never individuals", "Only foreign persons with assets abroad"],
    correct: 1,
    explanation: "The slides define taxpayers in this way."
  },
  {
    id: 27,
    question: "In revision, which statement is accurate? What does accountability and integrity mean in tax policy?",
    options: ["Revenue authority actions should be monitored by government and subject to parliamentary scrutiny, while tax laws should be administered free of political interference and under the rule of law", "Tax administration should be secret and unchecked", "Revenue authorities should be above all scrutiny", "Political interference should be encouraged to improve fairness"],
    correct: 0,
    explanation: "These are the accountability and integrity features listed."
  },
  {
    id: 28,
    question: "Scenario variant: A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation only serves the purpose of customs control", "Taxation should never affect social behaviour", "Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals", "Taxation must always remain neutral in every circumstance"],
    correct: 2,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 29,
    question: "A partnership earns income, but the tax is imposed on the partners rather than the partnership itself. What does this illustrate?",
    options: ["Tax evasion through concealment", "Treatment of partnerships as flow-through entities", "Treatment of companies as opaque entities", "Residence-based jurisdiction"],
    correct: 1,
    explanation: "The presentation says partnerships and trusts are generally flow-through entities."
  },
  {
    id: 30,
    question: "In revision, which statement is accurate? What is horizontal equity?",
    options: ["People in similar economic circumstances should be treated similarly", "Companies should always pay less than individuals", "People with foreign income should never pay tax", "People in different economic circumstances should always be treated identically"],
    correct: 0,
    explanation: "The presentation defines horizontal equity this way."
  },
  {
    id: 31,
    question: "A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Only source-based jurisdiction", "Only tax certainty", "Redistribution of wealth to promote a more egalitarian society", "Only efficiency in collection"],
    correct: 2,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 32,
    question: "Which option best reflects the presentation? VAT or GST is directed at taxing what?",
    options: ["Only cash transfers between banks", "Only exports of goods", "Only corporate profits", "The value added to the supply of goods and services"],
    correct: 3,
    explanation: "The slides explain that VAT/GST taxes value added."
  },
  {
    id: 33,
    question: "In revision, which statement is accurate? What are tax periods?",
    options: ["The list of tax rates that apply to a taxpayer", "The legal entities subject to tax", "The relevant periods during which taxpayers must pay tax on amounts that fall within the tax base", "The administrative penalties for late filing"],
    correct: 2,
    explanation: "The slides explain tax periods in these terms."
  },
  {
    id: 34,
    question: "Scenario variant: Taxpayers in similar economic circumstances are taxed in the same way, while wealthier taxpayers bear a greater share of the burden. Which pair of ideas does this reflect?",
    options: ["Certainty and convenience", "Horizontal equity and vertical equity", "Neutrality and flexibility", "Source and residence jurisdiction"],
    correct: 1,
    explanation: "The presentation defines horizontal and vertical equity this way."
  },
  {
    id: 35,
    question: "A student confuses the tax base with the tax period. Which correction best matches the presentation?",
    options: ["The tax base is what is being taxed, while the tax period is the time span over which the tax liability is measured", "The tax base is the court process and the tax period is the customs value", "The tax base is the rate and the tax period is the taxpayer", "The tax base is the legal penalty and the tax period is the exemption"],
    correct: 0,
    explanation: "The presentation defines tax base and tax period separately."
  },
  {
    id: 36,
    question: "Scenario variant: A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax avoidance", "Tax planning", "Tax expenditure", "Tax evasion"],
    correct: 3,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 37,
    question: "What does the canon of economy require?",
    options: ["That every tax be proportional", "That governments spend the maximum possible on collection", "That tax take out of people's pockets as little as possible over and above what reaches the public treasury", "That only customs duties be used"],
    correct: 2,
    explanation: "Economy emphasizes minimizing excess cost of collection."
  },
  {
    id: 38,
    question: "Which option best reflects the presentation? Which examples are given of returns from government assets and investments?",
    options: ["Payroll tax and stamp duty", "Rental charges and dividends received", "Tariffs and excise duties", "Withholding tax and VAT"],
    correct: 1,
    explanation: "The presentation lists rental charge and dividends received."
  },
  {
    id: 39,
    question: "A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["A DTA exchange-of-information rule", "Indirect tax incidence", "Territorial or source-based jurisdiction", "Worldwide or residence-based jurisdiction"],
    correct: 3,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 40,
    question: "What is the tax base for income tax in Kenya according to the slides?",
    options: ["Taxable income", "All government assets and investments", "Taxable supplies only", "Excisable goods and services only"],
    correct: 0,
    explanation: "Income tax is imposed on taxable income."
  },
  {
    id: 41,
    question: "Which option best reflects the presentation? What is the aim of the Theory of Taxation module?",
    options: ["To teach only customs valuation and tariff classification", "To focus only on international customs bodies", "To equip trainees with knowledge on the theory and principles of taxation and the importance of taxes to a country", "To replace all tax statutes with administrative guidelines"],
    correct: 2,
    explanation: "The instructional goal slide states this aim clearly."
  },
  {
    id: 42,
    question: "Scenario variant: Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Tariff escalation", "Tax evasion", "Tax neutrality", "Double taxation"],
    correct: 3,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 43,
    question: "What does simplicity mean in a good tax system?",
    options: ["Tax law should be simple enough for taxpayers to understand and comply with correctly and cost-efficiently", "Tax law should change daily", "Tax law should be as complex as possible to prevent planning", "Tax law should always be unwritten"],
    correct: 0,
    explanation: "The presentation emphasizes simplicity despite the reality of complex laws."
  },
  {
    id: 44,
    question: "Which option best reflects the presentation? What type of tax period applies in the case of VAT according to the presentation?",
    options: ["Quarterly tax periods only", "Monthly tax periods", "A once-per-lifetime tax period", "Weekly tax periods"],
    correct: 1,
    explanation: "The slides say VAT generally uses monthly tax periods."
  },
  {
    id: 45,
    question: "In revision, which statement is accurate? Which law listed in the presentation governs VAT in Kenya?",
    options: ["The Miscellaneous Fees and Levies Act", "The Excise Duty Act, 2015", "The Value Added Tax Act, 2013", "The Tax Procedures Act, 2015"],
    correct: 2,
    explanation: "The VAT Act, 2013 is specifically listed."
  },
  {
    id: 46,
    question: "What is a regressive tax?",
    options: ["A tax imposed at increasing rates", "A tax imposed at rates that decrease with the amount of the tax base", "A tax imposed only on luxury services", "A tax imposed only on imported goods"],
    correct: 1,
    explanation: "The presentation defines regressive taxes this way."
  },
  {
    id: 47,
    question: "Which option best reflects the presentation? How does Kenya generally treat companies for tax purposes?",
    options: ["As entities taxed only if they import goods", "As flow-through entities taxed only in the hands of shareholders", "As entities that can never be tax units", "As opaque entities taxed separately from their members"],
    correct: 3,
    explanation: "The presentation contrasts companies with partnerships and trusts."
  },
  {
    id: 48,
    question: "In revision, which statement is accurate? What does it mean to say taxes are unrequited?",
    options: ["They are generally not paid in exchange for some specific thing or direct personal benefit", "They are payable only by corporations", "They are never used for public welfare", "They are refunded at the end of each year"],
    correct: 0,
    explanation: "The presentation explains that taxes are not normally paid for a specific direct benefit."
  },
  {
    id: 49,
    question: "What are other consumption taxes mentioned in the presentation?",
    options: ["Property tax and inheritance tax", "Excise duty and stamp duty", "Goods and Services Tax (GST) and Sales Tax", "Payroll tax and withholding tax"],
    correct: 2,
    explanation: "GST and Sales Tax are listed alongside VAT."
  },
  {
    id: 50,
    question: "Which option best reflects the presentation? VAT or GST is directed at taxing what?",
    options: ["Only exports of goods", "Only cash transfers between banks", "Only corporate profits", "The value added to the supply of goods and services"],
    correct: 3,
    explanation: "The slides explain that VAT/GST taxes value added."
  },
];
