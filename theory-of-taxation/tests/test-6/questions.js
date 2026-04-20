const QUESTIONS = [
  {
    id: 1,
    question: "Which option best reflects the presentation? What is an effective tax rate?",
    options: ["The same thing as the marginal rate", "A tax rate applied only to imports", "Total tax liability divided by the taxpayer's total economic income", "Total tax liability divided by taxable income only"],
    correct: 2,
    explanation: "Effective rate uses economic income, which may differ from taxable income."
  },
  {
    id: 2,
    question: "In revision, which statement is accurate? Can the burden of a direct tax be shifted by the taxpayer to someone else?",
    options: ["No, the burden cannot be shifted", "Yes, but only through customs duty", "Yes, but only through a foreign tax credit", "Yes, always to the consumer"],
    correct: 0,
    explanation: "The presentation says direct tax burden cannot be shifted."
  },
  {
    id: 3,
    question: "How serious is tax evasion according to the presentation?",
    options: ["It is the same as ordinary tax planning", "It is lawful if done once only", "It is encouraged if tax law is complex", "It is a serious offence that can result in significant pecuniary penalties and jail terms"],
    correct: 3,
    explanation: "The slides emphasize the seriousness of evasion."
  },
  {
    id: 4,
    question: "Which option best reflects the presentation? What is the usual macroeconomic effect of lower taxation according to the slides?",
    options: ["Reduced spending and a deflationary effect", "Increased spending and potentially an inflationary effect", "Automatic elimination of imports", "Complete neutrality in all markets"],
    correct: 1,
    explanation: "The presentation explains lower tax increases disposable income and spending."
  },
  {
    id: 5,
    question: "In revision, which statement is accurate? What are the four basic structural features shared by most taxes?",
    options: ["Taxpayers, tax base, tax periods, and tax rates", "Assessment, audit, refund, and appeal", "Residence, source, treaty, and relief", "Equity, certainty, convenience, and economy"],
    correct: 0,
    explanation: "The presentation identifies these four structural features."
  },
  {
    id: 6,
    question: "What does the principle of fiscal and policy objectives require?",
    options: ["A good tax system should only protect customs borders", "A good tax system should ignore revenue targets", "A good tax system should avoid all policy goals", "A good tax system should collect the intended revenue and work in harmony with broader socio-economic policy"],
    correct: 3,
    explanation: "The final policy principle is presented this way."
  },
  {
    id: 7,
    question: "Which option best reflects the presentation? How does the presentation describe taxation as a political engineering device?",
    options: ["As a purely judicial remedy", "As a neutral device that never influences behaviour", "As a carrot or a stick to promote government objectives", "As a system used only to punish fraud"],
    correct: 2,
    explanation: "The slides explicitly use the carrot-or-stick description."
  },
  {
    id: 8,
    question: "In revision, which statement is accurate? What are tax expenditures?",
    options: ["All government expenditures funded by borrowing only", "Deviations from the benchmark tax system designed to provide benefits to targeted taxpayers", "All taxes imposed at the border", "Only penalties for tax evasion"],
    correct: 1,
    explanation: "The slides define tax expenditures in this way."
  },
  {
    id: 9,
    question: "Why is consumption tax said to be the antithesis of income tax?",
    options: ["Because it never affects prices", "Because it applies only to foreign goods", "Because it taxes consumption rather than earnings", "Because it is always progressive"],
    correct: 2,
    explanation: "The presentation contrasts taxing spending with taxing earnings."
  },
  {
    id: 10,
    question: "Which option best reflects the presentation? What is the territorial or source-based approach to income taxation?",
    options: ["Taxing residents on all worldwide income only", "Taxing income sourced within a country's borders regardless of where the taxpayer resides", "Taxing only consumption and not income", "Taxing only foreign-source income of residents"],
    correct: 1,
    explanation: "The presentation defines source-based taxation in these terms."
  },
  {
    id: 11,
    question: "In revision, which statement is accurate? What are tax incentives designed to do?",
    options: ["Punish all non-compliance", "Replace all direct spending", "Ensure all taxpayers pay the same amount", "Induce certain activities or behaviour"],
    correct: 3,
    explanation: "Tax incentives are described as inducements."
  },
  {
    id: 12,
    question: "What tax concession example is given in the presentation?",
    options: ["Contributions to registered retirement benefits schemes are allowable deductions when determining taxable income", "All cigarette purchases are tax exempt", "All imports receive automatic customs waivers", "All wages are taxed at zero rate"],
    correct: 0,
    explanation: "This is the example given on the social and political function slide."
  },
  {
    id: 13,
    question: "Which option best reflects the presentation? What company income tax rate is mentioned in the presentation for Kenya?",
    options: ["0 percent", "30 percent flat rate", "8 percent", "16 percent"],
    correct: 1,
    explanation: "The slides state that companies generally pay income tax at a flat rate of 30%."
  },
  {
    id: 14,
    question: "A government decides to support a targeted activity by allowing a special deduction under income tax instead of collecting full tax and later paying a grant. Which concept from the slides best explains this?",
    options: ["Tax expenditure as an indirect form of government spending", "The worldwide approach to jurisdiction", "Indirect tax incidence", "The canon of certainty"],
    correct: 0,
    explanation: "The presentation explains tax expenditures as indirect government spending."
  },
  {
    id: 15,
    question: "Which of the following best explains why taxes are compulsory levies?",
    options: ["Because taxpayers choose whether or not to contribute", "Because they are payable only after a court order", "Because they are charged only when a direct service is requested", "Because they are imposed by government and are not optional for the taxpayer"],
    correct: 3,
    explanation: "Taxes are compulsory because they are enforced by the state."
  },
  {
    id: 16,
    question: "Which option best reflects the presentation? What are taxes according to the presentation?",
    options: ["Private fees collected by companies on behalf of the state", "Only charges paid for direct services received", "Involuntary fees levied on individuals or corporations and enforced by a government entity to finance government activities", "Voluntary donations collected by Parliament"],
    correct: 2,
    explanation: "The presentation defines taxes as involuntary fees enforced by government."
  },
  {
    id: 17,
    question: "Scenario variant: A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation only serves the purpose of customs control", "Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals", "Taxation must always remain neutral in every circumstance", "Taxation should never affect social behaviour"],
    correct: 1,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 18,
    question: "What tax concession example is given in the presentation?",
    options: ["Contributions to registered retirement benefits schemes are allowable deductions when determining taxable income", "All cigarette purchases are tax exempt", "All wages are taxed at zero rate", "All imports receive automatic customs waivers"],
    correct: 0,
    explanation: "This is the example given on the social and political function slide."
  },
  {
    id: 19,
    question: "Scenario variant: A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation only serves the purpose of customs control", "Taxation should never affect social behaviour", "Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals", "Taxation must always remain neutral in every circumstance"],
    correct: 2,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 20,
    question: "In revision, which statement is accurate? What is income tax?",
    options: ["A tax on documents only", "A tax imposed only on imports and exports", "A tax whose incidence always falls on consumers", "A tax on income or earnings"],
    correct: 3,
    explanation: "The presentation defines income tax as a tax on income or earnings."
  },
  {
    id: 21,
    question: "Which Kenyan law listed in the presentation governs tax procedures?",
    options: ["The Tax Procedures Act, 2015", "The Value Added Tax Act, 2013", "The Income Tax Act, Cap 470", "The EAC Customs Management Act only"],
    correct: 0,
    explanation: "The Tax Procedures Act, 2015 is named directly."
  },
  {
    id: 22,
    question: "A government decides to support a targeted activity by allowing a special deduction under income tax instead of collecting full tax and later paying a grant. Which concept from the slides best explains this?",
    options: ["The canon of certainty", "The worldwide approach to jurisdiction", "Tax expenditure as an indirect form of government spending", "Indirect tax incidence"],
    correct: 2,
    explanation: "The presentation explains tax expenditures as indirect government spending."
  },
  {
    id: 23,
    question: "Scenario variant: A government decides to support a targeted activity by allowing a special deduction under income tax instead of collecting full tax and later paying a grant. Which concept from the slides best explains this?",
    options: ["The canon of certainty", "Tax expenditure as an indirect form of government spending", "The worldwide approach to jurisdiction", "Indirect tax incidence"],
    correct: 1,
    explanation: "The presentation explains tax expenditures as indirect government spending."
  },
  {
    id: 24,
    question: "A country taxes residents on both domestic and foreign source income, but taxes non-residents only on locally sourced income. What approach is this?",
    options: ["Indirect tax incidence", "Territorial or source-based jurisdiction", "A DTA exchange-of-information rule", "Worldwide or residence-based jurisdiction"],
    correct: 3,
    explanation: "This is the broader residence-based approach described in the slides."
  },
  {
    id: 25,
    question: "Which option best reflects the presentation? Which example of a government fee is given in the presentation?",
    options: ["Import declaration fee as a tax base", "Driving licence fee", "Foreign tax credit", "Income tax instalment"],
    correct: 1,
    explanation: "Driving licence fee is the example given."
  },
  {
    id: 26,
    question: "In revision, which statement is accurate? What is an indirect tax?",
    options: ["A tax where the incidence and impact of taxation do not fall on the same entity", "A tax paid only by natural persons", "A tax imposed only on wealth", "A tax that cannot affect prices"],
    correct: 0,
    explanation: "The presentation defines indirect tax in these terms."
  },
  {
    id: 27,
    question: "Scenario variant: Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Tax evasion", "Tariff escalation", "Double taxation", "Tax neutrality"],
    correct: 2,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 28,
    question: "A tax takes the same percentage from every taxpayer regardless of the amount of the base. Which type of tax is this?",
    options: ["A progressive tax", "A regressive tax", "A marginal tax rate only", "A proportional or flat tax"],
    correct: 3,
    explanation: "The presentation defines proportional tax as same rate for all taxpayers."
  },
  {
    id: 29,
    question: "Scenario variant: A government offers tax deductions for retirement savings but imposes excise duties on cigarettes to reduce smoking. Which idea from the presentation best explains both measures together?",
    options: ["Taxation can be used as a carrot or a stick to influence behaviour and promote policy goals", "Taxation should never affect social behaviour", "Taxation must always remain neutral in every circumstance", "Taxation only serves the purpose of customs control"],
    correct: 0,
    explanation: "The presentation describes social and political use of taxation as carrot-or-stick policy engineering."
  },
  {
    id: 30,
    question: "What does accountability and integrity mean in tax policy?",
    options: ["Revenue authorities should be above all scrutiny", "Tax administration should be secret and unchecked", "Revenue authority actions should be monitored by government and subject to parliamentary scrutiny, while tax laws should be administered free of political interference and under the rule of law", "Political interference should be encouraged to improve fairness"],
    correct: 2,
    explanation: "These are the accountability and integrity features listed."
  },
  {
    id: 31,
    question: "Which option best reflects the presentation? What is meant by the sovereign right to tax?",
    options: ["Each country must use exactly the same tax laws as all others", "Each nation has the sovereign right to design its own tax system subject to constitutional restrictions", "Tax law may only be made by the judiciary", "Only international bodies may design national tax systems"],
    correct: 1,
    explanation: "The presentation explains sovereign tax design in this way."
  },
  {
    id: 32,
    question: "In revision, which statement is accurate? What is the tax base for Excise Duty in Kenya according to the presentation?",
    options: ["All tax expenditures", "All personal income", "All property transfers", "Excisable goods and services"],
    correct: 3,
    explanation: "The presentation identifies excisable goods and services as the excise tax base."
  },
  {
    id: 33,
    question: "Scenario variant: A tax takes the same percentage from every taxpayer regardless of the amount of the base. Which type of tax is this?",
    options: ["A proportional or flat tax", "A progressive tax", "A regressive tax", "A marginal tax rate only"],
    correct: 0,
    explanation: "The presentation defines proportional tax as same rate for all taxpayers."
  },
  {
    id: 34,
    question: "Which option best reflects the presentation? What should a student understand by the end of the session according to the presentation?",
    options: ["Only tax audits and prosecutions", "Only the history of tax treaties", "Only customs duties and border posts", "What taxes are, the functions of taxes, the principles of taxation, and the features of a good tax system"],
    correct: 3,
    explanation: "The learning outcome slide lists these four areas."
  },
  {
    id: 35,
    question: "Scenario variant: A tax takes the same percentage from every taxpayer regardless of the amount of the base. Which type of tax is this?",
    options: ["A progressive tax", "A regressive tax", "A proportional or flat tax", "A marginal tax rate only"],
    correct: 2,
    explanation: "The presentation defines proportional tax as same rate for all taxpayers."
  },
  {
    id: 36,
    question: "A taxpayer hides some income and falsely claims deductions to reduce tax. Which concept from the presentation does this illustrate?",
    options: ["Tax avoidance", "Tax evasion", "Tax expenditure", "Tax planning"],
    correct: 1,
    explanation: "Fraudulent concealment and false claims are examples of evasion in the slides."
  },
  {
    id: 37,
    question: "Which option best reflects the presentation? Which examples are given of returns from government assets and investments?",
    options: ["Rental charges and dividends received", "Tariffs and excise duties", "Payroll tax and stamp duty", "Withholding tax and VAT"],
    correct: 0,
    explanation: "The presentation lists rental charge and dividends received."
  },
  {
    id: 38,
    question: "In revision, which statement is accurate? What are stamp duties?",
    options: ["Charges imposed on all imports at a flat rate", "Taxes on consumption through retail purchases only", "Taxes on all employment income", "Transactional taxes imposed on the execution of certain documents"],
    correct: 3,
    explanation: "The slides define stamp duties in this way."
  },
  {
    id: 39,
    question: "What does transparency and visibility mean in tax policy?",
    options: ["Taxes should be hidden to reduce complaints", "Taxpayers should know that a tax exists and how and when it is imposed", "Tax should be imposed without any written rules", "Only tax officers should know tax rules"],
    correct: 1,
    explanation: "Transparency and visibility are defined in these terms."
  },
  {
    id: 40,
    question: "A partnership earns income, but the tax is imposed on the partners rather than the partnership itself. What does this illustrate?",
    options: ["Tax evasion through concealment", "Residence-based jurisdiction", "Treatment of partnerships as flow-through entities", "Treatment of companies as opaque entities"],
    correct: 2,
    explanation: "The presentation says partnerships and trusts are generally flow-through entities."
  },
  {
    id: 41,
    question: "In revision, which statement is accurate? What are taxes according to the presentation?",
    options: ["Voluntary donations collected by Parliament", "Involuntary fees levied on individuals or corporations and enforced by a government entity to finance government activities", "Only charges paid for direct services received", "Private fees collected by companies on behalf of the state"],
    correct: 1,
    explanation: "The presentation defines taxes as involuntary fees enforced by government."
  },
  {
    id: 42,
    question: "A tax is set out clearly in law so taxpayers know when to pay, how to pay, and how much to pay. Which classic canon and modern principle does this most directly reflect?",
    options: ["Certainty", "Redistribution", "Neutrality", "Convenience"],
    correct: 0,
    explanation: "Both the canon and policy principle of certainty are described in these terms."
  },
  {
    id: 43,
    question: "Which option best reflects the presentation? How does the presentation describe taxation as a political engineering device?",
    options: ["As a system used only to punish fraud", "As a purely judicial remedy", "As a neutral device that never influences behaviour", "As a carrot or a stick to promote government objectives"],
    correct: 3,
    explanation: "The slides explicitly use the carrot-or-stick description."
  },
  {
    id: 44,
    question: "A policy taxes high-income groups more heavily and uses the revenue to improve support for lower-income groups. Which tax function is most directly illustrated?",
    options: ["Only source-based jurisdiction", "Only tax certainty", "Redistribution of wealth to promote a more egalitarian society", "Only efficiency in collection"],
    correct: 2,
    explanation: "The redistribution function slide describes this logic."
  },
  {
    id: 45,
    question: "Scenario variant: Two countries both claim the right to tax the same income. They negotiate an agreement to allocate taxing rights and provide credits for foreign tax paid. What problem are they primarily trying to solve?",
    options: ["Tax neutrality", "Tax evasion", "Tariff escalation", "Double taxation"],
    correct: 3,
    explanation: "The presentation says DTAs are mainly designed to solve double taxation."
  },
  {
    id: 46,
    question: "A government decides to support a targeted activity by allowing a special deduction under income tax instead of collecting full tax and later paying a grant. Which concept from the slides best explains this?",
    options: ["Tax expenditure as an indirect form of government spending", "Indirect tax incidence", "The canon of certainty", "The worldwide approach to jurisdiction"],
    correct: 0,
    explanation: "The presentation explains tax expenditures as indirect government spending."
  },
  {
    id: 47,
    question: "In revision, which statement is accurate? How do governments use taxation to protect domestic industries according to the presentation?",
    options: ["By abolishing all tariffs permanently", "By taxing imported goods more heavily than locally produced goods", "By exempting all imported goods from tax", "By taxing domestic goods only"],
    correct: 1,
    explanation: "The presentation links taxation to domestic industry protection."
  },
  {
    id: 48,
    question: "A government decides to support a targeted activity by allowing a special deduction under income tax instead of collecting full tax and later paying a grant. Which concept from the slides best explains this?",
    options: ["Indirect tax incidence", "The worldwide approach to jurisdiction", "Tax expenditure as an indirect form of government spending", "The canon of certainty"],
    correct: 2,
    explanation: "The presentation explains tax expenditures as indirect government spending."
  },
  {
    id: 49,
    question: "Which option best reflects the presentation? What are tax incentives designed to do?",
    options: ["Punish all non-compliance", "Ensure all taxpayers pay the same amount", "Replace all direct spending", "Induce certain activities or behaviour"],
    correct: 3,
    explanation: "Tax incentives are described as inducements."
  },
  {
    id: 50,
    question: "In revision, which statement is accurate? When may spouses be considered a tax unit according to the presentation?",
    options: ["Whenever both spouses have any income at all", "In some cases, such as where one spouse is the employee of the other", "Never under Kenyan tax law", "Only where spouses are foreign residents"],
    correct: 1,
    explanation: "The slide gives the employee-spouse example."
  },
];
