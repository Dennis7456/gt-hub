// Lesson content for Topic 1: Prohibited & Restricted Goods

// Helper function to shuffle answers and avoid consecutive identical correct answers
function shuffleAnswers(questions) {
  const shuffled = JSON.parse(JSON.stringify(questions)); // Deep clone
  
  for (let i = 0; i < shuffled.length; i++) {
    const q = shuffled[i];
    if (!q.options || q.options.length < 2) continue;
    
    const correctAnswer = q.options[q.correct];
    let newCorrectIndex;
    
    // Try to avoid consecutive identical answer positions
    if (i > 0 && shuffled[i-1].correct !== undefined) {
      const prevCorrect = shuffled[i-1].correct;
      // Try to pick a different position than the previous question
      const availablePositions = [...Array(q.options.length).keys()].filter(idx => idx !== prevCorrect);
      newCorrectIndex = availablePositions[Math.floor(Math.random() * availablePositions.length)];
    } else {
      newCorrectIndex = Math.floor(Math.random() * q.options.length);
    }
    
    // Shuffle options
    const newOptions = [...q.options];
    const correctOption = newOptions.splice(q.correct, 1)[0];
    
    // Fisher-Yates shuffle for remaining options
    for (let j = newOptions.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1));
      [newOptions[j], newOptions[k]] = [newOptions[k], newOptions[j]];
    }
    
    // Insert correct answer at new position
    newOptions.splice(newCorrectIndex, 0, correctOption);
    
    q.options = newOptions;
    q.correct = newCorrectIndex;
  }
  
  return shuffled;
}

const LESSON_CONTENT = {
  1: { // Topic 1
    1: { // Step 1: Learn (8 interactions: 5 cards + 3 micro-checks)
      type: 'learn',
      title: 'Understanding Prohibited & Restricted Goods',
      cards: [
        {
          front: 'What are Prohibited Goods?',
          back: 'Goods that are NOT allowed to be imported, exported, or transferred into or outside Partner States under any circumstances.',
          example: '🚫 Examples: Counterfeit currency, pornographic materials, narcotic drugs under international control'
        },
        {
          front: 'What are Restricted Goods?',
          back: 'Goods whose importation or exportation is allowed ONLY after specific conditions are met (permits, certificates, or approvals).',
          example: '🟡 Examples: Arms and ammunition, worked ivory, genetically modified products'
        },
        {
          front: 'Key Difference',
          back: 'Prohibited = NOT allowed at all (red light 🔴)\nRestricted = Allowed WITH proper authorization (yellow light 🟡)',
          example: 'Think: Prohibited goods can never be cleared. Restricted goods can be cleared with the right documents.'
        },
        {
          front: 'Examples of Prohibited Goods',
          back: '• Counterfeit currency notes and coins\n• Pornographic and obscene materials\n• Matches made with white phosphorus\n• Narcotic drugs under international control\n• Hazardous wastes',
          example: '💡 These are banned for health, safety, moral, and environmental reasons'
        },
        {
          front: 'Examples of Restricted Goods',
          back: '• Arms and ammunition (Chapter 93)\n• Worked ivory and ivory articles\n• Genetically modified products\n• Endangered species products (CITES)\n• Second-hand tyres\n• Postal franking machines',
          example: '💡 These require permits from relevant government agencies'
        }
      ],
      microChecks: [
        {
          question: 'Tap the correct definition of prohibited goods:',
          options: [
            'Goods that are not allowed by law',
            'Goods that are taxed heavily',
            'Goods that must be warehoused'
          ],
          correct: 0
        },
        {
          question: 'Tap the correct definition of restricted goods:',
          options: [
            'Goods that are completely banned',
            'Goods allowed only after conditions are met',
            'Goods that are duty-free'
          ],
          correct: 1
        },
        {
          question: 'Choose the correct difference:',
          options: [
            'Prohibited goods are not allowed at all; restricted goods may be allowed with permits',
            'Prohibited goods are cheaper than restricted goods',
            'Restricted goods are always seized'
          ],
          correct: 0
        }
      ]
    },
    2: { // Step 2: Recall (10 questions)
      type: 'recall',
      title: 'Test Your Memory',
      passThreshold: 60,
      questions: [
        {
          question: 'Prohibited goods are goods that are:',
          options: [
            'Always warehoused',
            'Not allowed by law',
            'Taxed heavily',
            'Always restricted'
          ],
          correct: 1
        },
        {
          question: 'Restricted goods are cleared only when:',
          options: [
            'The importer chooses',
            'Duty is zero',
            'They are ignored',
            'Conditions are met'
          ],
          correct: 3
        },
        {
          question: 'Counterfeit currency is:',
          options: [
            'Prohibited',
            'Warehoused',
            'Restricted',
            'Exempt'
          ],
          correct: 0
        },
        {
          question: 'Which of the following is an example of a prohibited good?',
          options: [
            'Genetically modified products',
            'Pornographic materials',
            'Worked ivory',
            'Arms and ammunition'
          ],
          correct: 1
        },
        {
          question: 'Which of the following is a restricted good?',
          options: [
            'Narcotic drugs',
            'White phosphorus matches',
            'Counterfeit coins',
            'Postal franking machines'
          ],
          correct: 3
        },
        {
          question: 'Matches made using which substance are prohibited?',
          options: [
            'White phosphorus',
            'Potassium nitrate',
            'Sulphur',
            'Charcoal'
          ],
          correct: 0
        },
        {
          question: 'Hazardous wastes are prohibited mainly for:',
          options: [
            'Documentation reasons',
            'Environmental and health reasons',
            'Tourism reasons',
            'Revenue reasons only'
          ],
          correct: 1
        },
        {
          question: 'Arms and ammunition are classified as:',
          options: [
            'Transit-only cargo',
            'Exempt goods',
            'Restricted goods',
            'Prohibited imports'
          ],
          correct: 2
        },
        {
          question: 'Endangered species products are restricted in accordance with:',
          options: [
            'CITES',
            'WTO TFA',
            'Revised Kyoto Convention',
            'EAC Treaty only'
          ],
          correct: 0
        },
        {
          question: 'The main difference between prohibited and restricted goods is:',
          options: [
            'Restricted goods are always seized',
            'Prohibited goods are not allowed at all; restricted may be allowed with permits',
            'Prohibited goods are taxed more',
            'There is no difference'
          ],
          correct: 1
        }
      ]
    },
    3: { // Step 3: Match/Identify (12 interactions: 8 matching + 4 classification)
      type: 'match',
      title: 'Match Goods to Categories',
      passThreshold: 70,
      matchPairs: [
        { term: 'Counterfeit currency', definition: 'Prohibited', category: 'item' },
        { term: 'Worked ivory', definition: 'Restricted', category: 'item' },
        { term: 'Postal franking machines', definition: 'Restricted', category: 'item' },
        { term: 'Pornographic materials', definition: 'Prohibited', category: 'item' },
        { term: 'Narcotic drugs', definition: 'Prohibited', category: 'item' },
        { term: 'GM products', definition: 'Restricted', category: 'item' },
        { term: 'White phosphorus matches', definition: 'Prohibited', category: 'item' },
        { term: 'Second-hand tyres', definition: 'Restricted', category: 'item' }
      ],
      reasonPairs: [
        { term: 'Hazardous waste', definition: 'Environmental/Health' },
        { term: 'Arms and ammunition', definition: 'Security' },
        { term: 'GM products', definition: 'Biosafety' },
        { term: 'Endangered species', definition: 'Conservation' }
      ],
      classificationItems: [
        { item: 'Scrap copper conductors (export)', correct: 'Prohibited' },
        { item: 'Fresh unprocessed Nile perch', correct: 'Restricted' },
        { item: 'Unwrought precious metals', correct: 'Restricted' },
        { item: 'Counterfeit coins', correct: 'Prohibited' }
      ]
    },
    4: { // Step 4: Scenario (6 scenarios)
      type: 'scenario',
      title: 'Apply Your Knowledge',
      passThreshold: 70,
      scenarios: [
        {
          situation: 'A shipment of worked ivory arrives without the relevant permit. What is the best classification?',
          options: [
            'Restricted goods lacking required clearance conditions',
            'Duty-free goods',
            'Prohibited goods',
            'Postal cargo'
          ],
          correct: 0,
          explanation: 'Worked ivory is a restricted good. Without the required permit, it cannot be cleared, but it is not prohibited - it can be cleared with proper authorization.'
        },
        {
          situation: 'An exporter wants to send used scrap copper conductors out of the country. How should Customs treat them?',
          options: [
            'Transit cargo',
            'Prohibited export',
            'Free export',
            'Restricted export'
          ],
          correct: 1,
          explanation: 'Used or scrap cables and conductors of copper are listed as prohibited exports in Part A of the Third Schedule.'
        },
        {
          situation: 'An importer declares genetically modified products and presents the proper approvals. What is the correct treatment?',
          options: [
            'Allow clearance subject to compliance',
            'Seize immediately',
            'Reject automatically',
            'Convert to warehousing'
          ],
          correct: 0,
          explanation: 'GM products are restricted goods. With proper approvals from relevant agencies, they can be cleared for import.'
        },
        {
          situation: 'A shipment contains pornographic printed materials. What is the best treatment?',
          options: [
            'Temporary import',
            'Home use',
            'Prohibited import - not allowed and subject to seizure',
            'Restricted import'
          ],
          correct: 2,
          explanation: 'Pornographic materials are prohibited goods and cannot be imported under any circumstances. They are subject to seizure.'
        },
        {
          situation: 'A trader attempts to import narcotic drugs under international control. What should happen?',
          options: [
            'Not allowed - prohibited goods',
            'Warehouse for 21 days',
            'Clear with extra duty',
            'Clear with permit'
          ],
          correct: 0,
          explanation: 'Narcotic drugs under international control are prohibited goods and cannot be imported.'
        },
        {
          situation: 'An importer wants to bring in arms and ammunition with all required permits from security agencies. What is the correct action?',
          options: [
            'Seize immediately',
            'Clear subject to verification of permits',
            'No documentation needed',
            'Reject - always prohibited'
          ],
          correct: 1,
          explanation: 'Arms and ammunition are restricted goods. With proper permits from relevant security agencies, they can be cleared.'
        }
      ]
    },
    5: { // Step 5: Timed Sprint (15 rapid questions, 120 seconds)
      type: 'timed',
      title: 'Quick Fire Challenge',
      timeLimit: 120,
      passThreshold: 10,
      questions: [
        { question: 'White phosphorus matches =', options: ['Prohibited', 'Restricted', 'Unrestricted'], correct: 0 },
        { question: 'Worked ivory =', options: ['Unrestricted', 'Restricted', 'Prohibited'], correct: 1 },
        { question: 'Scrap copper conductors (export) =', options: ['Free', 'Restricted', 'Prohibited'], correct: 2 },
        { question: 'Restricted goods require:', options: ['Permits', 'Extra duty only', 'Nothing'], correct: 0 },
        { question: 'Counterfeit currency =', options: ['Taxed', 'Prohibited', 'Restricted'], correct: 1 },
        { question: 'GM products =', options: ['Free', 'Prohibited', 'Restricted'], correct: 2 },
        { question: 'Hazardous waste =', options: ['Prohibited', 'Free', 'Restricted'], correct: 0 },
        { question: 'Second-hand tyres =', options: ['Prohibited', 'Restricted', 'Free'], correct: 1 },
        { question: 'Pornographic materials =', options: ['Free', 'Restricted', 'Prohibited'], correct: 2 },
        { question: 'Arms and ammunition =', options: ['Restricted', 'Free', 'Prohibited'], correct: 0 },
        { question: 'Endangered species follow:', options: ['RKC', 'CITES', 'WTO'], correct: 1 },
        { question: 'Fresh Nile perch (export) =', options: ['Prohibited', 'Free', 'Restricted'], correct: 2 },
        { question: 'Narcotic drugs =', options: ['Prohibited', 'Free', 'Restricted'], correct: 0 },
        { question: 'Postal franking machines =', options: ['Prohibited', 'Free', 'Restricted'], correct: 2 },
        { question: 'Prohibited goods can be cleared:', options: ['With permit', 'Never', 'With duty'], correct: 1 }
      ]
    },
    6: { // Step 6: Boss Challenge (12 mixed questions, 75% pass)
      type: 'boss',
      title: 'Master Challenge',
      passThreshold: 75,
      questions: [
        {
          question: 'Which statement best distinguishes prohibited from restricted goods?',
          options: [
            'Prohibited goods are not allowed at all, while restricted goods may be allowed subject to conditions',
            'Restricted goods are always seized',
            'Prohibited goods are taxed more heavily',
            'Restricted goods are not documented'
          ],
          correct: 0
        },
        {
          question: 'Which of the following is a restricted export?',
          options: [
            'Pornographic books',
            'Counterfeit notes',
            'Fresh unprocessed Nile perch',
            'Used scrap copper cables'
          ],
          correct: 2
        },
        {
          question: 'Which schedule part deals with prohibited exports?',
          options: [
            'Part C of the Fourth Schedule',
            'Part A of the Third Schedule',
            'Part B of the Second Schedule',
            'Part A of the First Schedule'
          ],
          correct: 1
        },
        {
          question: 'A shipment of endangered species products arrives without authority. What is the correct treatment?',
          options: [
            'Restricted goods lacking necessary clearance conditions',
            'Perishable exempt cargo',
            'Freely importable',
            'Home-use goods'
          ],
          correct: 0
        },
        {
          question: 'Which item below is prohibited, not restricted?',
          options: [
            'GM products',
            'Counterfeit currency',
            'Arms and ammunition',
            'Worked ivory'
          ],
          correct: 1
        },
        {
          question: 'Which reason best explains control of hazardous wastes?',
          options: [
            'Political reasons',
            'Documentation purposes',
            'Environmental and health protection',
            'Revenue collection'
          ],
          correct: 2
        },
        {
          question: 'According to the notes, clearance for restricted goods shall only be granted against:',
          options: [
            'Permits, certificates, or other authority from a relevant agency',
            'A warehouse receipt',
            'A verbal undertaking',
            'The importer\'s ID only'
          ],
          correct: 0
        },
        {
          question: 'Which of the following is NOT a reason for prohibiting or restricting goods?',
          options: [
            'Political reasons',
            'Entertainment reasons',
            'Safety and security reasons',
            'Health reasons'
          ],
          correct: 1
        },
        {
          question: 'TRAP: All restricted goods are prohibited.',
          options: [
            'False',
            'True'
          ],
          correct: 0,
          explanation: 'False! Restricted goods are NOT prohibited. They can be cleared with proper authorization.'
        },
        {
          question: 'TRAP: Restricted goods can never be cleared.',
          options: [
            'True',
            'False'
          ],
          correct: 1,
          explanation: 'False! Restricted goods CAN be cleared once required conditions and permits are obtained.'
        },
        {
          question: 'Which pair is correctly matched?',
          options: [
            'Pornographic media — restricted good',
            'Counterfeit currency — restricted good',
            'Worked ivory — restricted good',
            'Scrap copper conductors — unrestricted export'
          ],
          correct: 2
        },
        {
          question: 'Which statement best reflects the purpose of controlling prohibited and restricted goods?',
          options: [
            'To ensure goods move without any checks',
            'To make all trade impossible',
            'To protect society, revenue, security, health, and the environment through legal control of trade',
            'To replace all partner government agencies'
          ],
          correct: 2
        }
      ]
    }
  }
};
