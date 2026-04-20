// Flashcards for Theory of Taxation - Tax and Customs Theory
// Source: Theory of Taxation(1).pptx

const flashcards = [
  {
    "id": 1,
    "category": "Instructional Goal",
    "front": "What is the aim of the Theory of Taxation module?",
    "back": "To equip trainees with knowledge on the theory and principles of taxation and the importance of taxes to a country."
  },
  {
    "id": 2,
    "category": "Learning Outcome",
    "front": "What should the student understand by the end of the session?",
    "back": "What taxes are, functions of taxes, the principles of taxation, and features of a good tax system."
  },
  {
    "id": 3,
    "category": "Definition of Tax",
    "front": "What are taxes?",
    "back": "Taxes are involuntary fees levied on individuals or corporations and enforced by a government entity to finance government activities."
  },
  {
    "id": 4,
    "category": "Definition of Tax",
    "front": "Why are taxes said to be compulsory levies?",
    "back": "Because they are imposed by government and are not optional for the taxpayer."
  },
  {
    "id": 5,
    "category": "Definition of Tax",
    "front": "What does it mean to say taxes are unrequited?",
    "back": "It means taxes are generally not paid in exchange for a specific thing or direct personal benefit."
  },
  {
    "id": 6,
    "category": "Definition of Tax",
    "front": "Is a taxpayer's liability dependent on a specific personal benefit received?",
    "back": "No. The individual taxpayer's liability is independent of any specific benefit received."
  },
  {
    "id": 7,
    "category": "Definition of Tax",
    "front": "What other names may taxes take according to the slides?",
    "back": "Duties, levies, tariffs, and charges."
  },
  {
    "id": 8,
    "category": "Definition of Tax",
    "front": "Why is taxation considered the principal means by which governments raise revenue?",
    "back": "Because without taxation, governments would be unable to finance their operations or deliver public goods and services."
  },
  {
    "id": 9,
    "category": "Other Sources of Funding",
    "front": "What are other ways governments can raise revenue besides taxes?",
    "back": "Charging fees for services or licences, imposing fines for breaches of law, and generating returns from assets and investments."
  },
  {
    "id": 10,
    "category": "Other Sources of Funding",
    "front": "Give an example of a fee that governments may charge as a source of funding.",
    "back": "A driving licence fee."
  },
  {
    "id": 11,
    "category": "Other Sources of Funding",
    "front": "Give examples of returns from government assets and investments.",
    "back": "Rental charges and dividends received."
  },
  {
    "id": 12,
    "category": "Taxation Law",
    "front": "What is taxation law?",
    "back": "It is the body of law that governs a person's liability to pay tax to the government."
  },
  {
    "id": 13,
    "category": "Taxation Law",
    "front": "What does taxation law cover in relation to tax liability?",
    "back": "It covers the rules that establish the incidence of tax and the tax base, meaning who and what is subject to tax."
  },
  {
    "id": 14,
    "category": "Taxation Law",
    "front": "What administrative matters does taxation law also cover?",
    "back": "Administration and enforcement of the tax system, including collection and recovery of tax."
  },
  {
    "id": 15,
    "category": "Taxation Law",
    "front": "Name one primary source of taxation law in Kenya listed in the presentation.",
    "back": "Income Tax Act, Cap 470."
  },
  {
    "id": 16,
    "category": "Taxation Law",
    "front": "Name another primary source of taxation law in Kenya listed in the presentation.",
    "back": "The Value Added Tax Act, 2013."
  },
  {
    "id": 17,
    "category": "Taxation Law",
    "front": "Which Kenyan law listed governs excise duty?",
    "back": "The Excise Duty Act, 2015."
  },
  {
    "id": 18,
    "category": "Taxation Law",
    "front": "Which Kenyan law listed governs tax procedures?",
    "back": "The Tax Procedures Act, 2015."
  },
  {
    "id": 19,
    "category": "Taxation Law",
    "front": "Which regional customs law is listed as a primary source of taxation law?",
    "back": "The East African Community Customs Management Act."
  },
  {
    "id": 20,
    "category": "Taxation Law",
    "front": "Which Kenyan law listed deals with miscellaneous fees and levies?",
    "back": "The Miscellaneous Fees and Levies Act."
  },
  {
    "id": 21,
    "category": "Types of Taxes",
    "front": "What is income tax?",
    "back": "Income tax is a tax on income or earnings."
  },
  {
    "id": 22,
    "category": "Types of Taxes",
    "front": "How does the presentation describe income tax in modern tax systems?",
    "back": "As the most important and widely imposed modern tax."
  },
  {
    "id": 23,
    "category": "Types of Taxes",
    "front": "What is a consumption tax?",
    "back": "A tax whose economic incidence falls on the consumer, usually through the increased cost of goods or services."
  },
  {
    "id": 24,
    "category": "Types of Taxes",
    "front": "Why is consumption tax described as the antithesis of income tax?",
    "back": "Because it taxes consumption rather than earnings."
  },
  {
    "id": 25,
    "category": "Types of Taxes",
    "front": "What is the most widely encountered consumption tax according to the slides?",
    "back": "Value Added Tax (VAT)."
  },
  {
    "id": 26,
    "category": "Types of Taxes",
    "front": "What other consumption taxes are listed besides VAT?",
    "back": "Goods and Services Tax (GST) and Sales Tax."
  },
  {
    "id": 27,
    "category": "Types of Taxes",
    "front": "What is VAT or GST directed at taxing?",
    "back": "The value that has been added to the supply of goods and services."
  },
  {
    "id": 28,
    "category": "Other Taxes",
    "front": "What are excise duties?",
    "back": "Taxes imposed on the production and manufacture of certain goods, and also on importation of those goods; some services may also attract excise duty."
  },
  {
    "id": 29,
    "category": "Other Taxes",
    "front": "What are customs duties?",
    "back": "Duties imposed on the importation and exportation of goods."
  },
  {
    "id": 30,
    "category": "Other Taxes",
    "front": "What are stamp duties?",
    "back": "Transactional taxes imposed on the execution of certain documents."
  },
  {
    "id": 31,
    "category": "Classification of Taxes",
    "front": "What is a direct tax?",
    "back": "A tax where the incidence and impact of taxation fall on the same person."
  },
  {
    "id": 32,
    "category": "Classification of Taxes",
    "front": "Can the burden of a direct tax be shifted to someone else?",
    "back": "No. In the case of direct tax, the burden cannot be shifted by the taxpayer to someone else."
  },
  {
    "id": 33,
    "category": "Classification of Taxes",
    "front": "Give examples of direct taxes listed in the presentation.",
    "back": "Income tax, corporation tax, property tax, inheritance tax, and gift tax."
  },
  {
    "id": 34,
    "category": "Classification of Taxes",
    "front": "What is an indirect tax?",
    "back": "A tax where the incidence and impact of taxation do not fall on the same entity."
  },
  {
    "id": 35,
    "category": "Classification of Taxes",
    "front": "Can the burden of indirect tax be shifted?",
    "back": "Yes. The burden can be shifted by the taxpayer to someone else, either forward or backward."
  },
  {
    "id": 36,
    "category": "Classification of Taxes",
    "front": "What is the practical effect of indirect tax on products?",
    "back": "It raises the price of the products on which it is imposed."
  },
  {
    "id": 37,
    "category": "Classification of Taxes",
    "front": "Give examples of indirect taxes listed in the presentation.",
    "back": "Customs duty, excise duty, and value added tax."
  },
  {
    "id": 38,
    "category": "Classification of Taxes",
    "front": "How may indirect taxes be applied according to the slides?",
    "back": "By unit, by percentage of value, at a flat rate, or a combination of lump sum methods."
  },
  {
    "id": 39,
    "category": "Functions of Taxation",
    "front": "What is the most important and immediately recognizable role of taxation?",
    "back": "Raising revenue to fund government functions."
  },
  {
    "id": 40,
    "category": "Functions of Taxation",
    "front": "Why would government not function properly without taxation?",
    "back": "Because taxation redirects economic resources from citizens to government for public spending programs."
  },
  {
    "id": 41,
    "category": "Functions of Taxation",
    "front": "What does it mean to say taxation diverts wealth from the private sector to the public sector?",
    "back": "It means the government collects resources from private citizens and uses them for public purposes."
  },
  {
    "id": 42,
    "category": "Functions of Taxation",
    "front": "Name some public functions funded by tax revenue according to the presentation.",
    "back": "Public service, defence, legal system and law enforcement, roads, airports, hospitals, education institutions, and social security benefits."
  },
  {
    "id": 43,
    "category": "Social and Political Functions",
    "front": "How can taxation be used as a political engineering device?",
    "back": "As either a carrot or a stick to promote government objectives."
  },
  {
    "id": 44,
    "category": "Social and Political Functions",
    "front": "What Kenyan example of a tax concession is given in the slides?",
    "back": "Contributions to registered retirement benefits schemes are allowable deductions when determining taxable income."
  },
  {
    "id": 45,
    "category": "Social and Political Functions",
    "front": "Why does the government impose excise duties on cigarettes according to the slides?",
    "back": "To raise revenue and also discourage smoking so as to reduce national health costs."
  },
  {
    "id": 46,
    "category": "Social and Political Functions",
    "front": "How does taxation help sculpt social behaviour?",
    "back": "By granting concessions or imposing burdens to encourage or discourage certain activities."
  },
  {
    "id": 47,
    "category": "Economic Functions",
    "front": "What micro-economic effect can taxation have on goods?",
    "back": "Taxing particular goods adds to their cost, making them more expensive than similar untaxed goods."
  },
  {
    "id": 48,
    "category": "Economic Functions",
    "front": "How do governments use taxation to protect domestic industries?",
    "back": "By taxing imported goods more heavily than locally produced goods."
  },
  {
    "id": 49,
    "category": "Economic Functions",
    "front": "How can taxation be used as a macroeconomic device?",
    "back": "Governments can use higher taxation to reduce spending or lower taxation to increase spending."
  },
  {
    "id": 50,
    "category": "Economic Functions",
    "front": "What is the typical effect of higher taxation on the economy according to the slides?",
    "back": "It usually leads to less spending and has a deflationary effect."
  },
  {
    "id": 51,
    "category": "Economic Functions",
    "front": "What is the typical effect of lower taxation on the economy according to the slides?",
    "back": "It usually results in increased spending and can have an inflationary effect."
  },
  {
    "id": 52,
    "category": "Redistribution Function",
    "front": "How can taxation create economic equality between citizens?",
    "back": "By taxing the rich so government can support the poor, thereby redistributing wealth."
  },
  {
    "id": 53,
    "category": "Redistribution Function",
    "front": "What kind of society does redistributive taxation aim to promote?",
    "back": "A more egalitarian society with a more level playing field."
  },
  {
    "id": 54,
    "category": "Redistribution Function",
    "front": "According to the slides, what might happen without taxation?",
    "back": "Society would be more polarized, wealth would be more concentrated, and those less able to support themselves would suffer more."
  },
  {
    "id": 55,
    "category": "Structural Features of Taxes",
    "front": "What are the four basic structural features shared by most taxes?",
    "back": "Taxpayers, tax base, tax periods, and tax rates."
  },
  {
    "id": 56,
    "category": "Structural Features of Taxes",
    "front": "Who are taxpayers in a tax regime?",
    "back": "The legal entities, such as individuals or companies, who are liable to pay the tax and are penalized if it is not paid."
  },
  {
    "id": 57,
    "category": "Structural Features of Taxes",
    "front": "What is a tax base?",
    "back": "The property, transaction, activity, or concept upon which the tax is imposed."
  },
  {
    "id": 58,
    "category": "Structural Features of Taxes",
    "front": "What is the tax base for income tax in Kenya according to the presentation?",
    "back": "Taxable income."
  },
  {
    "id": 59,
    "category": "Structural Features of Taxes",
    "front": "What is the tax base for VAT in Kenya according to the presentation?",
    "back": "Taxable supplies and taxable importations."
  },
  {
    "id": 60,
    "category": "Structural Features of Taxes",
    "front": "What is the tax base for Excise Duty in Kenya according to the presentation?",
    "back": "Excisable goods and services."
  },
  {
    "id": 61,
    "category": "Structural Features of Taxes",
    "front": "What are tax periods?",
    "back": "The relevant periods within which taxpayers are required to pay tax on amounts falling within the tax base."
  },
  {
    "id": 62,
    "category": "Structural Features of Taxes",
    "front": "What is the income tax period in Kenya according to the slides?",
    "back": "The year of income, meaning the financial year from 1 January to 31 December."
  },
  {
    "id": 63,
    "category": "Structural Features of Taxes",
    "front": "What tax period applies to VAT in Kenya according to the presentation?",
    "back": "Monthly tax periods."
  },
  {
    "id": 64,
    "category": "Structural Features of Taxes",
    "front": "What are tax rates?",
    "back": "The rates at which tax is imposed under a tax regime."
  },
  {
    "id": 65,
    "category": "Structural Features of Taxes",
    "front": "How may tax rates be structured according to the slides?",
    "back": "They may be single flat rates or differing rates depending on the nature of the tax and taxpayer."
  },
  {
    "id": 66,
    "category": "Structural Features of Taxes",
    "front": "What company income tax rate is mentioned in the presentation for Kenya?",
    "back": "A flat rate of 30 percent."
  },
  {
    "id": 67,
    "category": "Structural Features of Taxes",
    "front": "What individual income tax rate range is mentioned in the presentation for Kenya?",
    "back": "Progressive marginal rates of 10 percent to 30 percent."
  },
  {
    "id": 68,
    "category": "Structural Features of Taxes",
    "front": "What VAT rates are mentioned in the slides for Kenya?",
    "back": "0 percent, 8 percent, and 16 percent."
  },
  {
    "id": 69,
    "category": "Tax Rate Structures",
    "front": "What is a proportional tax?",
    "back": "A tax imposed at the same rate on all taxpayers."
  },
  {
    "id": 70,
    "category": "Tax Rate Structures",
    "front": "What is another name for a proportional tax?",
    "back": "A flat tax."
  },
  {
    "id": 71,
    "category": "Tax Rate Structures",
    "front": "Which tax is given as an example of a proportional tax in Kenya?",
    "back": "VAT."
  },
  {
    "id": 72,
    "category": "Tax Rate Structures",
    "front": "What is a progressive tax?",
    "back": "A tax imposed at rates that increase with the amount of the tax base."
  },
  {
    "id": 73,
    "category": "Tax Rate Structures",
    "front": "Which tax is given as an example of a progressive tax in Kenya?",
    "back": "Income tax on individuals."
  },
  {
    "id": 74,
    "category": "Tax Rate Structures",
    "front": "What is a regressive tax?",
    "back": "A tax imposed at rates that decrease with the amount of the tax base."
  },
  {
    "id": 75,
    "category": "Tax Rates",
    "front": "What is a marginal tax rate?",
    "back": "The rate of tax applied to the incremental amounts of the tax base."
  },
  {
    "id": 76,
    "category": "Tax Rates",
    "front": "What is an average tax rate?",
    "back": "Total tax liability divided by the tax base."
  },
  {
    "id": 77,
    "category": "Tax Rates",
    "front": "What is an effective tax rate?",
    "back": "Total tax liability divided by the taxpayer's total economic income."
  },
  {
    "id": 78,
    "category": "Tax Rates",
    "front": "Why may effective tax rate differ from average tax rate?",
    "back": "Because economic income may include amounts that are exempt from tax and therefore differ from taxable income."
  },
  {
    "id": 79,
    "category": "Tax Expenditures",
    "front": "What are tax expenditures?",
    "back": "Uses of the tax system to provide incentives and financial assistance through deviations from the benchmark tax system."
  },
  {
    "id": 80,
    "category": "Tax Expenditures",
    "front": "What are the two broad categories of tax expenditures?",
    "back": "Tax incentives and tax concessions."
  },
  {
    "id": 81,
    "category": "Tax Expenditures",
    "front": "What are tax incentives designed to do?",
    "back": "Induce certain activities or behaviour."
  },
  {
    "id": 82,
    "category": "Tax Expenditures",
    "front": "What are tax concessions designed to do?",
    "back": "Provide welfare assistance to those in need."
  },
  {
    "id": 83,
    "category": "Tax Expenditures",
    "front": "How may tax expenditures be delivered under the income tax system?",
    "back": "Through special tax exemptions, tax deductions, tax offsets, or concessional tax rates."
  },
  {
    "id": 84,
    "category": "Tax Expenditures",
    "front": "Why are tax expenditures costly to government?",
    "back": "Because government collects less revenue due to concessions."
  },
  {
    "id": 85,
    "category": "Tax Expenditures",
    "front": "How are tax expenditures similar to subsidies or grants?",
    "back": "Both are forms of government spending; tax expenditures are indirect spending while subsidies or grants are direct spending."
  },
  {
    "id": 86,
    "category": "Tax Expenditures",
    "front": "What is one advantage of tax expenditure programs?",
    "back": "They are efficient because they avoid double handling, meaning government does not need to collect tax and then redistribute it separately."
  },
  {
    "id": 87,
    "category": "Tax Expenditures",
    "front": "What is one disadvantage of tax expenditure programs?",
    "back": "They are often poorly targeted and may provide benefits to unintended recipients."
  },
  {
    "id": 88,
    "category": "Tax Expenditures",
    "front": "How do tax expenditure programs affect the complexity of tax law?",
    "back": "They add to the volume and complexity of tax law by creating exceptions to general rules."
  },
  {
    "id": 89,
    "category": "Tax Expenditures",
    "front": "Why may tax expenditure programs remain inefficient and costly?",
    "back": "Because they are embedded in tax law, less visible, and may not be closely monitored for effectiveness."
  },
  {
    "id": 90,
    "category": "Canons of Taxation",
    "front": "What are the four main canons of taxation listed in the presentation?",
    "back": "Equity, certainty, convenience, and economy."
  },
  {
    "id": 91,
    "category": "Canons of Taxation",
    "front": "What does the canon of equity require?",
    "back": "That people contribute toward government support in proportion to their abilities, meaning in proportion to the revenue they enjoy under the protection of the state."
  },
  {
    "id": 92,
    "category": "Canons of Taxation",
    "front": "What does the canon of certainty require?",
    "back": "That the tax to be paid, the time of payment, the manner of payment, and the quantity to be paid should all be clear and not arbitrary."
  },
  {
    "id": 93,
    "category": "Canons of Taxation",
    "front": "What does the canon of convenience require?",
    "back": "That every tax should be levied at the time or in the manner most convenient for the contributor to pay."
  },
  {
    "id": 94,
    "category": "Canons of Taxation",
    "front": "What does the canon of economy require?",
    "back": "That a tax should take out of the pockets of the people as little as possible over and above what it brings into the public treasury."
  },
  {
    "id": 95,
    "category": "Good Tax Policy",
    "front": "What does equity and fairness mean in good tax policy?",
    "back": "Similarly situated taxpayers should be taxed similarly and each taxpayer should pay their fair share of tax."
  },
  {
    "id": 96,
    "category": "Good Tax Policy",
    "front": "Why is equity considered very important in a tax system?",
    "back": "Because taxpayers are more likely to respect and support a tax system if it is perceived to be fair."
  },
  {
    "id": 97,
    "category": "Good Tax Policy",
    "front": "What is horizontal equity?",
    "back": "People in similar economic circumstances should be treated similarly."
  },
  {
    "id": 98,
    "category": "Good Tax Policy",
    "front": "What is vertical equity?",
    "back": "People in different economic circumstances should be treated differently, with those better off bearing a greater share of the burden."
  },
  {
    "id": 99,
    "category": "Good Tax Policy",
    "front": "What does certainty mean as a principle of good tax policy?",
    "back": "Tax rules should clearly specify when tax is to be paid, how it is to be paid, and how the amount is determined."
  },
  {
    "id": 100,
    "category": "Good Tax Policy",
    "front": "What does simplicity mean in a good tax system?",
    "back": "The tax law should be simple enough for taxpayers to understand and comply with correctly and cost-efficiently."
  },
  {
    "id": 101,
    "category": "Good Tax Policy",
    "front": "What does accountability and integrity mean in tax policy?",
    "back": "Revenue authority actions should be monitored by government and subject to parliamentary scrutiny, while tax laws should be administered free from political interference and according to the rule of law."
  },
  {
    "id": 102,
    "category": "Good Tax Policy",
    "front": "What does transparency and visibility mean in tax policy?",
    "back": "Taxpayers should know that a tax exists and how and when it is imposed upon them and others."
  },
  {
    "id": 103,
    "category": "Good Tax Policy",
    "front": "What does efficiency in collection mean in tax policy?",
    "back": "The costs of collecting tax should be kept to a minimum for both government and taxpayers."
  },
  {
    "id": 104,
    "category": "Good Tax Policy",
    "front": "Why are expensive or cumbersome taxes considered inefficient?",
    "back": "Because they divert resources from productive activities."
  },
  {
    "id": 105,
    "category": "Good Tax Policy",
    "front": "What does flexibility mean in a good tax system?",
    "back": "A good tax system should cope with and respond to changes in economic circumstances without major overhauls."
  },
  {
    "id": 106,
    "category": "Good Tax Policy",
    "front": "What does neutrality mean in tax policy?",
    "back": "The tax law should have minimal effect on commercial decisions and should not distort market choices unnecessarily."
  },
  {
    "id": 107,
    "category": "Good Tax Policy",
    "front": "Why might governments intentionally depart from neutrality?",
    "back": "To achieve specific policy objectives."
  },
  {
    "id": 108,
    "category": "Good Tax Policy",
    "front": "What does economic growth and efficiency mean as a tax policy principle?",
    "back": "The tax system should not impede or reduce the productive capacity of the economy."
  },
  {
    "id": 109,
    "category": "Good Tax Policy",
    "front": "What does the principle of fiscal and policy objectives require?",
    "back": "A good tax system should collect the revenue government intends to collect and operate in harmony with the broader socio-economic policy agenda."
  },
  {
    "id": 110,
    "category": "Tax Unit",
    "front": "What is the tax unit?",
    "back": "The subject of taxation, meaning the person or entity that is treated as the taxpayer."
  },
  {
    "id": 111,
    "category": "Tax Unit",
    "front": "How does the Kenyan income tax system generally treat individuals and families?",
    "back": "It generally treats each individual as a separate tax unit."
  },
  {
    "id": 112,
    "category": "Tax Unit",
    "front": "Why is taxing individuals rather than families significant?",
    "back": "Because spouses' incomes are not normally aggregated and taxed as if they were a single taxpayer."
  },
  {
    "id": 113,
    "category": "Tax Unit",
    "front": "When may spouses be considered a tax unit according to the slides?",
    "back": "In some cases, such as where one spouse is the employee of the other spouse."
  },
  {
    "id": 114,
    "category": "Tax Unit",
    "front": "What basic question arises for legal entities and their members in tax design?",
    "back": "Whether the entity should be treated as a separate taxpayer or whether the ultimate owners should be taxed instead."
  },
  {
    "id": 115,
    "category": "Tax Unit",
    "front": "How does Kenya generally treat partnerships and trusts for tax purposes?",
    "back": "As flow-through entities."
  },
  {
    "id": 116,
    "category": "Tax Unit",
    "front": "What does it mean to say partnerships and trusts are flow-through entities?",
    "back": "Their income is not taxed at the entity level but in the hands of their members, such as partners or beneficiaries."
  },
  {
    "id": 117,
    "category": "Tax Unit",
    "front": "How does Kenya generally treat companies for tax purposes?",
    "back": "As opaque entities taxed as separate taxpayers from their members."
  },
  {
    "id": 118,
    "category": "Sovereign Right to Tax",
    "front": "What is meant by the sovereign right to tax?",
    "back": "Each nation has the right to design its own tax system, subject to constitutional restrictions."
  },
  {
    "id": 119,
    "category": "Sovereign Right to Tax",
    "front": "Who enacts tax laws in Kenya according to the slides?",
    "back": "Parliament."
  },
  {
    "id": 120,
    "category": "Sovereign Right to Tax",
    "front": "Who administers tax laws in Kenya according to the slides?",
    "back": "KRA."
  },
  {
    "id": 121,
    "category": "Sovereign Right to Tax",
    "front": "Who adjudicates tax disputes in Kenya according to the slides?",
    "back": "The Judiciary."
  },
  {
    "id": 122,
    "category": "Jurisdiction to Tax",
    "front": "What are general jurisdictional rules in taxation?",
    "back": "They are the rules that define the jurisdictional limits of a country's tax laws."
  },
  {
    "id": 123,
    "category": "Jurisdiction to Tax",
    "front": "What is the territorial or source-based approach to income taxation?",
    "back": "It taxes income sourced within a country's geographic borders, regardless of where the taxpayer resides."
  },
  {
    "id": 124,
    "category": "Jurisdiction to Tax",
    "front": "What is the worldwide or residence-based approach to income taxation?",
    "back": "It taxes residents on both domestic and foreign source income, while taxing foreign residents only on locally sourced income."
  },
  {
    "id": 125,
    "category": "International Tax Enforcement",
    "front": "Why can enforcement of tax laws against foreigners be difficult?",
    "back": "Because foreigners may live outside the country and have their assets abroad, making enforcement difficult."
  },
  {
    "id": 126,
    "category": "International Tax Enforcement",
    "front": "What general principle applies between countries in enforcing each other's tax laws?",
    "back": "As a general principle, countries do not enforce each other's tax laws."
  },
  {
    "id": 127,
    "category": "International Tax Agreements",
    "front": "What are international tax agreements usually called when they are bilateral?",
    "back": "Double Taxation Agreements or DTAs."
  },
  {
    "id": 128,
    "category": "International Tax Agreements",
    "front": "Why are DTAs important?",
    "back": "They address double taxation, which is a major impediment to cross-border trade and investment."
  },
  {
    "id": 129,
    "category": "International Tax Agreements",
    "front": "What is double taxation?",
    "back": "A situation where more than one country asserts taxing rights over the same income."
  },
  {
    "id": 130,
    "category": "International Tax Agreements",
    "front": "How do DTAs mainly deal with the problem of double taxation?",
    "back": "By allocating taxing rights between the contracting states according to agreed principles."
  },
  {
    "id": 131,
    "category": "International Tax Agreements",
    "front": "What relief is usually required where both the country of residence and the country of source share taxing rights?",
    "back": "The country of residence usually provides relief in the form of a credit for foreign tax paid."
  },
  {
    "id": 132,
    "category": "International Tax Agreements",
    "front": "What additional administrative function do DTAs serve?",
    "back": "They contain exchange of information clauses to help tax authorities administer tax laws and prevent avoidance and evasion."
  },
  {
    "id": 133,
    "category": "Tax Evasion, Avoidance, and Planning",
    "front": "What is tax evasion?",
    "back": "Illegal underpayment of tax, usually by fraudulent concealment or misrepresentation."
  },
  {
    "id": 134,
    "category": "Tax Evasion, Avoidance, and Planning",
    "front": "Give examples of conduct that amounts to tax evasion.",
    "back": "Not declaring true income, claiming higher expenses to offset income, or claiming allowances or reliefs to which one is not entitled."
  },
  {
    "id": 135,
    "category": "Tax Evasion, Avoidance, and Planning",
    "front": "How serious is tax evasion according to the slides?",
    "back": "It is a serious offence that can result in significant pecuniary penalties and jail terms."
  },
  {
    "id": 136,
    "category": "Tax Evasion, Avoidance, and Planning",
    "front": "What is tax avoidance?",
    "back": "Arranging one's affairs and finances in a way that reduces tax liability within the law."
  },
  {
    "id": 137,
    "category": "Tax Evasion, Avoidance, and Planning",
    "front": "What idea is expressed by the statement that nobody is required to pay any more tax than they are legally obliged to pay?",
    "back": "The idea underlying tax avoidance."
  },
  {
    "id": 138,
    "category": "Tax Evasion, Avoidance, and Planning",
    "front": "What is tax planning?",
    "back": "The analysis of a financial situation or plan to ensure that all elements work together to allow payment of the lowest taxes possible."
  },
  {
    "id": 139,
    "category": "Tax Evasion, Avoidance, and Planning",
    "front": "What is meant by a tax-efficient plan?",
    "back": "A plan that minimizes how much tax a person pays."
  },
  {
    "id": 140,
    "category": "Comparison",
    "front": "What is the key difference between direct tax and indirect tax?",
    "back": "In direct tax, the incidence and impact fall on the same person; in indirect tax, the burden can be shifted to someone else."
  },
  {
    "id": 141,
    "category": "Comparison",
    "front": "What is the key difference between income tax and consumption tax?",
    "back": "Income tax taxes earnings, while consumption tax taxes spending or consumption."
  },
  {
    "id": 142,
    "category": "Comparison",
    "front": "What is the key difference between proportional and progressive taxes?",
    "back": "A proportional tax applies the same rate to all taxpayers, while a progressive tax applies higher rates as the tax base increases."
  },
  {
    "id": 143,
    "category": "Comparison",
    "front": "What is the key difference between marginal and average tax rates?",
    "back": "Marginal rate applies to incremental amounts of the tax base, while average rate is total tax liability divided by the tax base."
  },
  {
    "id": 144,
    "category": "Comparison",
    "front": "What is the key difference between average tax rate and effective tax rate?",
    "back": "Average tax rate uses the tax base, while effective tax rate uses total economic income, which may include exempt amounts."
  },
  {
    "id": 145,
    "category": "Comparison",
    "front": "What is the key difference between tax incentives and tax concessions?",
    "back": "Tax incentives are designed to induce certain activities or behaviour, while tax concessions are designed to provide welfare assistance."
  },
  {
    "id": 146,
    "category": "Comparison",
    "front": "What is the key difference between tax evasion and tax avoidance?",
    "back": "Tax evasion is illegal underpayment of tax through fraud or concealment, while tax avoidance involves lawful arrangement of affairs to reduce tax liability."
  },
  {
    "id": 147,
    "category": "Comparison",
    "front": "What is the key difference between tax avoidance and tax planning?",
    "back": "Tax avoidance focuses on arranging affairs to reduce tax liability, while tax planning is the broader analysis of finances to achieve lawful tax efficiency."
  },
  {
    "id": 148,
    "category": "Comparison",
    "front": "What is the difference between source-based and residence-based jurisdiction?",
    "back": "Source-based jurisdiction taxes income earned within the territory, while residence-based jurisdiction taxes residents on both domestic and foreign income."
  },
  {
    "id": 149,
    "category": "Memory Aid",
    "front": "What are the four structural features of taxes you should memorize?",
    "back": "Taxpayers, tax base, tax periods, and tax rates."
  },
  {
    "id": 150,
    "category": "Memory Aid",
    "front": "What are the four main canons of taxation you should memorize?",
    "back": "Equity, certainty, convenience, and economy."
  },
  {
    "id": 151,
    "category": "Memory Aid",
    "front": "What are the three key tax rate ideas often tested together?",
    "back": "Marginal tax rate, average tax rate, and effective tax rate."
  },
  {
    "id": 152,
    "category": "Memory Aid",
    "front": "What are the three tax behaviour concepts often tested together?",
    "back": "Tax evasion, tax avoidance, and tax planning."
  }
];

const categories = [
  "Canons of Taxation",
  "Classification of Taxes",
  "Comparison",
  "Definition of Tax",
  "Economic Functions",
  "Functions of Taxation",
  "Good Tax Policy",
  "Instructional Goal",
  "International Tax Agreements",
  "International Tax Enforcement",
  "Jurisdiction to Tax",
  "Learning Outcome",
  "Memory Aid",
  "Other Sources of Funding",
  "Other Taxes",
  "Redistribution Function",
  "Social and Political Functions",
  "Sovereign Right to Tax",
  "Structural Features of Taxes",
  "Tax Evasion, Avoidance, and Planning",
  "Tax Expenditures",
  "Tax Rate Structures",
  "Tax Rates",
  "Tax Unit",
  "Taxation Law",
  "Types of Taxes"
];
