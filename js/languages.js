// 国际化语言配置
const languages = {
    'en': {
        name: 'English',
        flag: '🇺🇸',
        dir: 'ltr'
    },
    'zh': {
        name: '中文',
        flag: '🇨🇳',
        dir: 'ltr'
    }
};

// 翻译内容
const translations = {
    'en': {
        // Navigation
        'nav.home': 'Home',
        'nav.what-is': 'What is Low FODMAP?',
        'nav.food-lists': 'Food Lists',
        'nav.recipes': 'Recipes',
        'nav.guides': 'Guides & Tips',
        'nav.blog': 'Blog',
        'nav.faq': 'FAQ',
        
        // Hero Section
        'hero.title': 'Your Complete Guide to the Low FODMAP Diet',
        'hero.subtitle': 'Discover relief from digestive issues with our comprehensive resource for IBS, gut health, and the Low FODMAP elimination diet.',
        'hero.get-started': 'Get Started',
        'hero.view-food-lists': 'View Food Lists',
        'hero.quick-start': 'Quick Start',
        'hero.understand': '✓ Understand FODMAPs',
        'hero.download': '✓ Download food lists',
        'hero.try-recipes': '✓ Try our recipes',
        'hero.track-progress': '✓ Track your progress',
        
        // Features
        'features.title': 'Everything You Need for Success',
        'features.food-lists.title': 'Comprehensive Food Lists',
        'features.food-lists.desc': 'Detailed high and low FODMAP food lists with serving sizes and downloadable PDFs.',
        'features.recipes.title': 'Delicious Recipes',
        'features.recipes.desc': 'Over 100+ tested recipes for breakfast, lunch, dinner, and snacks that are FODMAP-friendly.',
        'features.guides.title': 'Expert Guides',
        'features.guides.desc': 'Step-by-step guides to help you navigate the elimination, reintroduction, and maintenance phases.',
        'features.tools.title': 'Interactive Tools',
        'features.tools.desc': 'Searchable food database and meal planning tools to make your journey easier.',
        
        // What is Low FODMAP
        'what-is.title': 'What is the Low FODMAP Diet?',
        'what-is.desc': 'The Low FODMAP diet is a scientifically-backed elimination diet designed to help people with Irritable Bowel Syndrome (IBS) and other digestive disorders identify trigger foods.',
        'what-is.fodmaps.title': 'What are FODMAPs?',
        'what-is.fodmaps.desc': 'FODMAPs are short-chain carbohydrates that are poorly absorbed in the small intestine. They include:',
        'what-is.fodmaps.fermentable': 'Fermentable - broken down by gut bacteria',
        'what-is.fodmaps.oligosaccharides': 'Oligosaccharides - found in wheat, onions, garlic',
        'what-is.fodmaps.disaccharides': 'Disaccharides - lactose in dairy products',
        'what-is.fodmaps.monosaccharides': 'Monosaccharides - fructose in fruits',
        'what-is.fodmaps.polyols': 'And Polyols - sugar alcohols in some fruits and artificial sweeteners',
        'what-is.who.title': 'Who Should Try This Diet?',
        'what-is.who.ibs': 'People with IBS (Irritable Bowel Syndrome)',
        'what-is.who.sibo': 'Those with Small Intestinal Bacterial Overgrowth (SIBO)',
        'what-is.who.ibd': 'Individuals with inflammatory bowel disease (IBD) in remission',
        'what-is.who.others': 'Anyone experiencing unexplained digestive symptoms',
        'what-is.phases.title': 'The Three Phases',
        'what-is.phases.elimination': '1. Elimination (2-6 weeks)',
        'what-is.phases.elimination.desc': 'Remove all high FODMAP foods',
        'what-is.phases.reintroduction': '2. Reintroduction (6-8 weeks)',
        'what-is.phases.reintroduction.desc': 'Systematically test each FODMAP group',
        'what-is.phases.maintenance': '3. Maintenance (Long-term)',
        'what-is.phases.maintenance.desc': 'Eat only foods you tolerate well',
        
        // Food Lists
        'food-lists.title': 'Food Lists & Database',
        'food-lists.subtitle': 'Search our comprehensive database of high and low FODMAP foods',
        'food-lists.search.placeholder': 'Search for foods...',
        'food-lists.search.button': 'Search',
        'food-lists.categories.all': 'All Foods',
        'food-lists.categories.fruits': 'Fruits',
        'food-lists.categories.vegetables': 'Vegetables',
        'food-lists.categories.dairy': 'Dairy',
        'food-lists.categories.grains': 'Grains',
        'food-lists.categories.beverages': 'Beverages',
        'food-lists.download.title': 'Download Our Complete Food Lists',
        'food-lists.download.desc': 'Get our comprehensive PDF guides for easy reference',
        'food-lists.download.high': 'Download High FODMAP List',
        'food-lists.download.low': 'Download Low FODMAP List',
        'food-lists.download.complete': 'Download Complete Guide',
        'food-lists.status.low': 'Low FODMAP',
        'food-lists.status.high': 'High FODMAP',
        'food-lists.serving': 'Serving:',
        
        // Recipes
        'recipes.title': 'Delicious Low FODMAP Recipes',
        'recipes.subtitle': 'Try our collection of tested and approved recipes',
        'recipes.filters.all': 'All Recipes',
        'recipes.filters.breakfast': 'Breakfast',
        'recipes.filters.lunch': 'Lunch',
        'recipes.filters.dinner': 'Dinner',
        'recipes.filters.snacks': 'Snacks',
        'recipes.filters.quick': 'Quick (15min)',
        'recipes.time': '⏱️ {time} min',
        'recipes.servings': '👥 {servings} servings',
        'recipes.view': 'View Recipe',
        'recipes.tips': 'Chef\'s Tips',
        'recipes.ingredients': 'Ingredients',
        'recipes.instructions': 'Instructions',
        'recipes.nutrition': 'Nutrition',
        'recipes.nutrition.calories': 'Calories',
        'recipes.nutrition.carbs': 'Carbs',
        'recipes.nutrition.protein': 'Protein',
        'recipes.nutrition.fat': 'Fat',
        'recipes.nutrition.fiber': 'Fiber',
        'recipes.nutrition.sugar': 'Sugar',
        
        // Ingredients
        'ingredient.gluten-free-flour': 'Gluten-free flour blend',
        'ingredient.sugar': 'Sugar',
        'ingredient.baking-powder': 'Baking powder',
        'ingredient.salt': 'Salt',
        'ingredient.lactose-free-milk': 'Lactose-free milk',
        'ingredient.egg': 'Egg',
        'ingredient.melted-butter': 'Melted butter',
        'ingredient.vanilla-extract': 'Vanilla extract',
        
        // Amount translations
        'amount.1-cup': '1 cup',
        'amount.1-tbsp': '1 tbsp',
        'amount.2-tbsp': '2 tbsp',
        'amount.1-tsp': '1 tsp',
        'amount.2-tsp': '2 tsp',
        'amount.1-2-tsp': '1/2 tsp',
        'amount.1-4-tsp': '1/4 tsp',
        'amount.1-8-tsp': '1/8 tsp',
        'amount.1-large': '1 large',
        'amount.2-large': '2 large',
        'amount.4-pieces': '4 pieces',
        'amount.2-cups': '2 cups',
        'amount.1-2-cup': '1/2 cup',
        'amount.1-4-cup': '1/4 cup',
        'amount.1-3-cup': '1/3 cup',
        'amount.3-4-cup': '3/4 cup',
        
        // Notes translations
        'notes.1-1-blend': 'Use a 1:1 blend',
        'notes.white-coconut': 'White or coconut sugar',
        'notes.aluminum-free': 'Aluminum-free preferred',
        'notes.fine-sea-salt': 'Fine sea salt',
        'notes.room-temperature': 'Room temperature',
        'notes.cooled-slightly': 'Cooled slightly',
        'notes.pure-vanilla': 'Pure vanilla',
        'notes.extra-virgin': 'Extra virgin',
        'notes.freshly-squeezed': 'Freshly squeezed',
        'notes.to-taste': 'To taste',
        'notes.freshly-ground': 'Freshly ground',
        'notes.sea-salt-preferred': 'Sea salt preferred',
        'notes.finely-chopped': 'Finely chopped',
        'notes.zested-juiced': 'Zested and juiced',
        'notes.skin-on-skinless': '6 oz each, skin-on or skinless',
        'notes.6-oz-each': '6 oz each',
        'ingredient.rolled-oats': 'Rolled oats',
        'ingredient.banana': 'Banana',
        'ingredient.maple-syrup': 'Maple syrup',
        'ingredient.cinnamon': 'Cinnamon',
        'ingredient.blueberries': 'Blueberries',
        'ingredient.chia-seeds': 'Chia seeds',
        'ingredient.chicken-breast': 'Chicken breast',
        'ingredient.bell-peppers': 'Bell peppers',
        'ingredient.carrots': 'Carrots',
        'ingredient.zucchini': 'Zucchini',
        'ingredient.soy-sauce': 'Soy sauce',
        'ingredient.sesame-oil': 'Sesame oil',
        'ingredient.ginger': 'Ginger',
        'ingredient.rice-vinegar': 'Rice vinegar',
        'ingredient.brown-rice': 'Brown rice',
        'ingredient.green-onions': 'Green onions',
        'ingredient.frozen-banana': 'Frozen banana',
        'ingredient.spinach': 'Spinach',
        'ingredient.peanut-butter': 'Peanut butter',
        'ingredient.ice-cubes': 'Ice cubes',
        'ingredient.quinoa': 'Quinoa',
        'ingredient.water': 'Water',
        'ingredient.cucumber': 'Cucumber',
        'ingredient.cherry-tomatoes': 'Cherry tomatoes',
        'ingredient.olive-oil': 'Olive oil',
        'ingredient.lemon-juice': 'Lemon juice',
        'ingredient.black-pepper': 'Black pepper',
        'ingredient.salmon-fillets': 'Salmon fillets',
        'ingredient.fresh-dill': 'Fresh dill',
        'ingredient.fresh-parsley': 'Fresh parsley',
        'ingredient.fresh-chives': 'Fresh chives',
        'ingredient.lemon': 'Lemon',
        'ingredient.almond-butter': 'Almond butter',
        'ingredient.shredded-coconut': 'Shredded coconut',
        
        // Guides
        'guides.title': 'Guides & Tips',
        'guides.subtitle': 'Everything you need to succeed on your Low FODMAP journey',
        'guides.getting-started.title': 'Getting Started',
        'guides.getting-started.desc': 'Complete beginner\'s guide to starting the Low FODMAP diet',
        'guides.dining-out.title': 'Dining Out',
        'guides.dining-out.desc': 'Tips for maintaining your diet while eating out',
        'guides.shopping.title': 'Grocery Shopping',
        'guides.shopping.desc': 'Navigate the supermarket with confidence',
        'guides.mistakes.title': 'Common Mistakes',
        'guides.mistakes.desc': 'Avoid these common pitfalls',
        'guides.read': 'Read Guide',
        
        // FAQ
        'faq.title': 'Frequently Asked Questions',
        'faq.elimination-duration.q': 'How long should I stay on the elimination phase?',
        'faq.elimination-duration.a': 'The elimination phase typically lasts 2-6 weeks, depending on your symptoms. Most people see improvement within 2-4 weeks. If you don\'t see any improvement after 6 weeks, the Low FODMAP diet may not be right for you.',
        'faq.bananas.q': 'Can I eat bananas on a Low FODMAP diet?',
        'faq.bananas.a': 'Yes! Ripe bananas are low FODMAP in small portions (1 medium banana). However, unripe bananas are high in FODMAPs. Stick to yellow bananas with brown spots for the best results.',
        'faq.long-term.q': 'Is the Low FODMAP diet safe long-term?',
        'faq.long-term.a': 'The elimination phase should not be long-term. After identifying your triggers, you should reintroduce as many foods as possible to maintain a balanced diet. Work with a dietitian for long-term guidance.',
        'faq.alcohol.q': 'Can I drink alcohol on the Low FODMAP diet?',
        'faq.alcohol.a': 'Some alcoholic beverages are low FODMAP in small amounts, including wine, beer (in moderation), and spirits. However, alcohol can irritate the gut, so it\'s best to limit consumption during the elimination phase.',
        
        // Footer
        'footer.description': 'Your trusted resource for Low FODMAP diet information, recipes, and support.',
        'footer.quick-links': 'Quick Links',
        'footer.resources': 'Resources',
        'footer.connect': 'Connect',
        'footer.download-pdfs': 'Download PDFs',
        'footer.meal-planner': 'Meal Planner',
        'footer.food-diary': 'Food Diary',
        'footer.support-group': 'Support Group',
        'footer.newsletter': 'Newsletter',
        'footer.contact': 'Contact Us',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.copyright': '© 2024 LowFODMAP Guide. All rights reserved. | This website is for informational purposes only and should not replace professional medical advice.',
        
        // Page titles and descriptions
        'page.title': 'Low FODMAP Diet Guide - Your Complete Resource for Digestive Health',
        'page.description': 'Comprehensive Low FODMAP diet guide with recipes, food lists, and expert tips for IBS and digestive health. Start your journey to better gut health today.',
        
        // Guides section
        'guides.title': 'Guides & Tips',
        'guides.subtitle': 'Everything you need to succeed on your Low FODMAP journey',
        'guides.getting-started.title': 'Getting Started',
        'guides.getting-started.desc': 'Complete beginner\'s guide to starting the Low FODMAP diet',
        'guides.getting-started.1': 'How to prepare for elimination phase',
        'guides.getting-started.2': 'Essential kitchen tools',
        'guides.getting-started.3': 'Meal planning basics',
        'guides.dining-out.title': 'Dining Out',
        'guides.dining-out.desc': 'Tips for maintaining your diet while eating out',
        'guides.dining-out.1': 'Restaurant ordering strategies',
        'guides.dining-out.2': 'Safe menu options',
        'guides.dining-out.3': 'Travel dining tips',
        'guides.shopping.title': 'Grocery Shopping',
        'guides.shopping.desc': 'Navigate the supermarket with confidence',
        'guides.shopping.1': 'Reading food labels',
        'guides.shopping.2': 'Hidden FODMAP sources',
        'guides.shopping.3': 'Budget-friendly shopping',
        'guides.mistakes.title': 'Common Mistakes',
        'guides.mistakes.desc': 'Avoid these common pitfalls',
        'guides.mistakes.1': 'Portion size mistakes',
        'guides.mistakes.2': 'Stacking FODMAPs',
        'guides.mistakes.3': 'Rushing reintroduction',
        'guides.read': 'Read Guide',
        
        // FAQ section
        'faq.title': 'Frequently Asked Questions',
        'faq.elimination-duration.q': 'How long should I stay on the elimination phase?',
        'faq.elimination-duration.a': 'The elimination phase typically lasts 2-6 weeks, depending on your symptoms. Most people see improvement within 2-4 weeks. If you don\'t see any improvement after 6 weeks, the Low FODMAP diet may not be right for you.',
        'faq.bananas.q': 'Can I eat bananas on a Low FODMAP diet?',
        'faq.bananas.a': 'Yes! Ripe bananas are low FODMAP in small portions (1 medium banana). However, unripe bananas are high in FODMAPs. Stick to yellow bananas with brown spots for the best results.',
        'faq.long-term.q': 'Is the Low FODMAP diet safe long-term?',
        'faq.long-term.a': 'The elimination phase should not be long-term. After identifying your triggers, you should reintroduce as many foods as possible to maintain a balanced diet. Work with a dietitian for long-term guidance.',
        'faq.alcohol.q': 'Can I drink alcohol on the Low FODMAP diet?',
        'faq.alcohol.a': 'Some alcoholic beverages are low FODMAP in small amounts, including wine, beer (in moderation), and spirits. However, alcohol can irritate the gut, so it\'s best to limit consumption during the elimination phase.',
        
        // Footer
        'footer.description': 'Your trusted resource for Low FODMAP diet information, recipes, and support.',
        'footer.quick-links': 'Quick Links',
        'footer.resources': 'Resources',
        'footer.connect': 'Connect',
        'footer.download-pdfs': 'Download PDFs',
        'footer.meal-planner': 'Meal Planner',
        'footer.food-diary': 'Food Diary',
        'footer.support-group': 'Support Group',
        'footer.newsletter': 'Newsletter',
        'footer.contact': 'Contact Us',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.copyright': '© 2024 LowFODMAP Guide. All rights reserved. | This website is for informational purposes only and should not replace professional medical advice.',
        
        // Food Database
        'food.banana': 'Banana (ripe)',
        'food.strawberries': 'Strawberries',
        'food.blueberries': 'Blueberries',
        'food.grapes': 'Grapes',
        'food.orange': 'Orange',
        'food.apple': 'Apple',
        'food.mango': 'Mango',
        'food.watermelon': 'Watermelon',
        'food.cherries': 'Cherries',
        'food.carrots': 'Carrots',
        'food.cucumber': 'Cucumber',
        'food.lettuce': 'Lettuce',
        'food.tomato': 'Tomato',
        'food.zucchini': 'Zucchini',
        'food.onion': 'Onion',
        'food.garlic': 'Garlic',
        'food.cauliflower': 'Cauliflower',
        'food.broccoli': 'Broccoli',
        'food.lactose-free-milk': 'Lactose-free milk',
        'food.hard-cheese': 'Hard cheese (cheddar)',
        'food.butter': 'Butter',
        'food.regular-milk': 'Regular milk',
        'food.yogurt': 'Yogurt',
        'food.ice-cream': 'Ice cream',
        'food.soft-cheese': 'Soft cheese',
        'food.rice': 'Rice (white)',
        'food.oats': 'Oats',
        'food.quinoa': 'Quinoa',
        'food.gluten-free-bread': 'Gluten-free bread',
        'food.wheat-bread': 'Wheat bread',
        'food.pasta': 'Pasta (wheat)',
        'food.rye-bread': 'Rye bread',
        'food.water': 'Water',
        'food.coffee': 'Coffee (black)',
        'food.green-tea': 'Green tea',
        'food.coconut-water': 'Coconut water',
        'food.apple-juice': 'Apple juice',
        'food.orange-juice': 'Orange juice',
        'food.soda': 'Soda',
        
        // Recipe Database
        'recipe.pancakes.title': 'Low FODMAP Pancakes',
        'recipe.pancakes.desc': 'Fluffy, gluten-free pancakes perfect for breakfast',
        'recipe.pancakes.ingredients': 'Ingredients',
        'recipe.pancakes.ingredients.list': '• 1 cup gluten-free flour blend\n• 1 tbsp sugar\n• 1 tsp baking powder\n• 1/4 tsp salt\n• 1 cup lactose-free milk\n• 1 egg\n• 2 tbsp melted butter\n• 1 tsp vanilla extract',
        'recipe.pancakes.instructions': 'Instructions',
        'recipe.pancakes.instructions.steps': '1. Mix dry ingredients in a bowl\n2. Whisk wet ingredients in another bowl\n3. Combine wet and dry ingredients\n4. Cook on griddle until golden\n5. Serve with maple syrup',
        'recipe.pancakes.nutrition': 'Nutrition (per serving)',
        'recipe.pancakes.nutrition.info': 'Calories: 180 | Carbs: 25g | Protein: 6g | Fat: 7g',
        
        'recipe.buddha-bowl.title': 'Quinoa Buddha Bowl',
        'recipe.buddha-bowl.desc': 'Nutritious and colorful bowl with safe vegetables',
        'recipe.buddha-bowl.ingredients': 'Ingredients',
        'recipe.buddha-bowl.ingredients.list': '• 1 cup quinoa\n• 2 cups water\n• 1 cup spinach\n• 1/2 cup carrots (grated)\n• 1/2 cup cucumber (sliced)\n• 1/4 cup cherry tomatoes\n• 2 tbsp olive oil\n• 1 tbsp lemon juice\n• Salt and pepper to taste',
        'recipe.buddha-bowl.instructions': 'Instructions',
        'recipe.buddha-bowl.instructions.steps': '1. Cook quinoa according to package directions\n2. Prepare vegetables and arrange in bowl\n3. Mix olive oil and lemon juice for dressing\n4. Top quinoa with vegetables\n5. Drizzle with dressing and serve',
        'recipe.buddha-bowl.nutrition': 'Nutrition (per serving)',
        'recipe.buddha-bowl.nutrition.info': 'Calories: 320 | Carbs: 45g | Protein: 12g | Fat: 10g',
        
        'recipe.salmon.title': 'Herb-Crusted Salmon',
        'recipe.salmon.desc': 'Simple and elegant salmon with fresh herbs',
        'recipe.salmon.ingredients': 'Ingredients',
        'recipe.salmon.ingredients.list': '• 4 salmon fillets (6 oz each)\n• 2 tbsp fresh dill\n• 2 tbsp fresh parsley\n• 1 tbsp fresh chives\n• 2 tbsp olive oil\n• 1 lemon (zested and juiced)\n• Salt and pepper to taste',
        'recipe.salmon.instructions': 'Instructions',
        'recipe.salmon.instructions.steps': '1. Preheat oven to 400°F\n2. Mix herbs, olive oil, and lemon zest\n3. Season salmon with salt and pepper\n4. Coat salmon with herb mixture\n5. Bake for 12-15 minutes until flaky',
        'recipe.salmon.nutrition': 'Nutrition (per serving)',
        'recipe.salmon.nutrition.info': 'Calories: 280 | Carbs: 2g | Protein: 35g | Fat: 15g',
        
        'recipe.energy-balls.title': 'Oatmeal Energy Balls',
        'recipe.energy-balls.desc': 'No-bake energy balls for a quick snack',
        'recipe.energy-balls.ingredients': 'Ingredients',
        'recipe.energy-balls.ingredients.list': '• 1 cup rolled oats\n• 1/2 cup almond butter\n• 1/4 cup maple syrup\n• 1/4 cup shredded coconut\n• 1 tsp vanilla extract\n• 1/4 tsp salt\n• 2 tbsp chia seeds',
        'recipe.energy-balls.instructions': 'Instructions',
        'recipe.energy-balls.instructions.steps': '1. Mix all ingredients in a bowl\n2. Form into 12 small balls\n3. Refrigerate for 30 minutes\n4. Store in airtight container\n5. Enjoy as needed!',
        'recipe.energy-balls.nutrition': 'Nutrition (per ball)',
        'recipe.energy-balls.nutrition.info': 'Calories: 95 | Carbs: 10g | Protein: 3g | Fat: 5g',
        
        'recipe.oatmeal.title': 'Creamy Banana Oatmeal',
        'recipe.oatmeal.desc': 'Warm and comforting oatmeal with natural sweetness',
        'recipe.oatmeal.ingredients': 'Ingredients',
        'recipe.oatmeal.ingredients.list': '• 1/2 cup rolled oats\n• 1 cup lactose-free milk\n• 1/2 medium banana (mashed)\n• 1 tbsp maple syrup\n• 1/4 tsp cinnamon\n• Pinch of salt\n• 1/4 cup blueberries\n• 1 tsp chia seeds',
        'recipe.oatmeal.instructions': 'Instructions',
        'recipe.oatmeal.instructions.steps': '1. Combine oats, milk, banana, maple syrup, cinnamon, and salt in a saucepan\n2. Bring to a gentle boil over medium heat\n3. Reduce heat and simmer for 5-7 minutes\n4. Remove from heat and let stand for 2 minutes\n5. Top with blueberries and chia seeds\n6. Serve immediately while warm',
        'recipe.oatmeal.nutrition': 'Nutrition (per serving)',
        'recipe.oatmeal.nutrition.info': 'Calories: 320 | Carbs: 55g | Protein: 12g | Fat: 8g',
        
        'recipe.chicken-stir-fry.title': 'Low FODMAP Chicken Stir-Fry',
        'recipe.chicken-stir-fry.desc': 'Quick and colorful stir-fry with safe vegetables',
        'recipe.chicken-stir-fry.ingredients': 'Ingredients',
        'recipe.chicken-stir-fry.ingredients.list': '• 1 lb chicken breast (thin strips)\n• 2 medium bell peppers (sliced)\n• 2 medium carrots (julienned)\n• 1 medium zucchini (sliced)\n• 3 tbsp gluten-free soy sauce\n• 1 tbsp sesame oil\n• 1 tbsp fresh ginger\n• 1 tbsp rice vinegar\n• 2 cups cooked brown rice\n• 2 stalks green onions',
        'recipe.chicken-stir-fry.instructions': 'Instructions',
        'recipe.chicken-stir-fry.instructions.steps': '1. Heat oil in a wok or large skillet\n2. Cook chicken strips until golden and cooked through\n3. Add bell peppers and carrots, stir-fry for 3-4 minutes\n4. Add zucchini and continue cooking\n5. Whisk together soy sauce, ginger, and vinegar\n6. Return chicken to pan and add sauce\n7. Toss everything together and heat through\n8. Serve over brown rice with green onions',
        'recipe.chicken-stir-fry.nutrition': 'Nutrition (per serving)',
        'recipe.chicken-stir-fry.nutrition.info': 'Calories: 280 | Carbs: 25g | Protein: 28g | Fat: 8g',
        
        'recipe.smoothie.title': 'Green Power Smoothie',
        'recipe.smoothie.desc': 'Nutritious and energizing smoothie with hidden greens',
        'recipe.smoothie.ingredients': 'Ingredients',
        'recipe.smoothie.ingredients.list': '• 1/2 medium frozen banana\n• 1 cup lactose-free milk\n• 1 cup fresh spinach\n• 1 tbsp natural peanut butter\n• 1 tsp chia seeds\n• 1/2 tsp vanilla extract\n• 4-5 ice cubes',
        'recipe.smoothie.instructions': 'Instructions',
        'recipe.smoothie.instructions.steps': '1. Add all ingredients to a high-powered blender\n2. Start on low speed and gradually increase to high\n3. Blend for 30-45 seconds until smooth\n4. Adjust thickness with more milk or ice\n5. Taste and adjust sweetness if needed\n6. Pour into a glass and serve immediately',
        'recipe.smoothie.nutrition': 'Nutrition (per serving)',
        'recipe.smoothie.nutrition.info': 'Calories: 250 | Carbs: 35g | Protein: 12g | Fat: 8g',
        
        // Recipe Steps
        'recipe.pancakes.step1': 'In a large bowl, whisk together the flour, sugar, baking powder, and salt.',
        'recipe.pancakes.step2': 'In a separate bowl, whisk together the milk, egg, melted butter, and vanilla extract.',
        'recipe.pancakes.step3': 'Pour the wet ingredients into the dry ingredients and stir until just combined. Do not overmix - a few lumps are okay.',
        'recipe.pancakes.step4': 'Heat a griddle or large non-stick pan over medium heat. Lightly grease with butter or oil.',
        'recipe.pancakes.step5': 'Pour 1/4 cup of batter for each pancake onto the griddle.',
        'recipe.pancakes.step6': 'Cook until bubbles form on the surface and the edges look set, about 2-3 minutes.',
        'recipe.pancakes.step7': 'Flip and cook until golden brown on the other side, about 1-2 minutes more.',
        'recipe.pancakes.step8': 'Serve immediately with maple syrup, fresh berries, or your favorite low FODMAP toppings.',
        
        // Buddha Bowl Steps
        'recipe.buddha-bowl.step1': 'Rinse the quinoa thoroughly in a fine-mesh strainer until the water runs clear.',
        'recipe.buddha-bowl.step2': 'In a medium saucepan, combine quinoa and water. Bring to a boil over high heat.',
        'recipe.buddha-bowl.step3': 'Reduce heat to low, cover, and simmer for 15 minutes or until water is absorbed.',
        'recipe.buddha-bowl.step4': 'Remove from heat and let stand covered for 5 minutes. Fluff with a fork.',
        'recipe.buddha-bowl.step5': 'While quinoa cooks, prepare the vegetables: wash and dry spinach, grate carrots, slice cucumber, and halve cherry tomatoes.',
        'recipe.buddha-bowl.step6': 'In a small bowl, whisk together olive oil, lemon juice, salt, and pepper to make the dressing.',
        'recipe.buddha-bowl.step7': 'Divide the cooked quinoa between two bowls.',
        'recipe.buddha-bowl.step8': 'Arrange the vegetables on top of the quinoa in an attractive pattern.',
        'recipe.buddha-bowl.step9': 'Drizzle with the lemon-olive oil dressing.',
        'recipe.buddha-bowl.step10': 'Serve immediately while quinoa is still warm.',
        
        // Salmon Steps
        'recipe.salmon.step1': 'Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.',
        'recipe.salmon.step2': 'In a small bowl, combine the chopped dill, parsley, chives, olive oil, and lemon zest.',
        'recipe.salmon.step3': 'Season the salmon fillets generously with salt and pepper on both sides.',
        'recipe.salmon.step4': 'Place the salmon fillets on the prepared baking sheet, skin-side down if using skin-on fillets.',
        'recipe.salmon.step5': 'Spoon the herb mixture evenly over the top of each fillet, pressing it gently to adhere.',
        'recipe.salmon.step6': 'Drizzle with half of the lemon juice.',
        'recipe.salmon.step7': 'Bake in the preheated oven for 12-15 minutes, depending on the thickness of the fillets.',
        'recipe.salmon.step8': 'The salmon is done when it flakes easily with a fork and reaches an internal temperature of 145°F.',
        'recipe.salmon.step9': 'Remove from oven and drizzle with remaining lemon juice.',
        'recipe.salmon.step10': 'Let rest for 2-3 minutes before serving.',
        
        // Recipe Tips
        'recipe.pancakes.tip1': 'Don\'t overmix the batter - lumps are normal and will create fluffier pancakes',
        'recipe.pancakes.tip2': 'Let the batter rest for 5 minutes before cooking for better texture',
        'recipe.pancakes.tip3': 'Use a 1/4 cup measuring cup for consistent pancake sizes',
        'recipe.pancakes.tip4': 'Keep cooked pancakes warm in a 200°F oven while making the rest',
        
        'recipe.buddha-bowl.tip1': 'Rinse quinoa well to remove the bitter coating called saponin',
        'recipe.buddha-bowl.tip2': 'Let quinoa cool slightly before adding vegetables to prevent wilting',
        'recipe.buddha-bowl.tip3': 'Feel free to add other low FODMAP vegetables like bell peppers or zucchini',
        'recipe.buddha-bowl.tip4': 'The dressing can be made ahead and stored in the refrigerator for up to 3 days',
        
        'recipe.salmon.tip1': 'Choose salmon fillets that are similar in thickness for even cooking',
        'recipe.salmon.tip2': 'Don\'t overcook the salmon - it should still be slightly pink in the center',
        'recipe.salmon.tip3': 'Fresh herbs are essential for the best flavor - dried herbs won\'t work as well',
        'recipe.salmon.tip4': 'This dish pairs well with roasted vegetables or a simple green salad',
        
        // Energy Balls Tips
        'recipe.energy-balls.tip1': 'The mixture should be sticky enough to hold together when pressed',
        'recipe.energy-balls.tip2': 'Wet your hands slightly when rolling to prevent sticking',
        'recipe.energy-balls.tip3': 'You can add other low FODMAP ingredients like cacao powder or chopped nuts',
        'recipe.energy-balls.tip4': 'These make great on-the-go snacks and can be frozen for longer storage',
        
        // Oatmeal Tips
        'recipe.oatmeal.tip1': 'Mash the banana well for a creamier texture',
        'recipe.oatmeal.tip2': 'Stir frequently to prevent sticking to the bottom',
        'recipe.oatmeal.tip3': 'Add more milk if you prefer a thinner consistency',
        'recipe.oatmeal.tip4': 'This recipe can be doubled or tripled for meal prep',
        
        // Chicken Stir-fry Tips
        'recipe.chicken-stir-fry.tip1': 'Cut all vegetables to similar sizes for even cooking',
        'recipe.chicken-stir-fry.tip2': 'Keep the heat high for a proper stir-fry technique',
        'recipe.chicken-stir-fry.tip3': 'Have all ingredients prepped before starting to cook',
        'recipe.chicken-stir-fry.tip4': 'Don\'t overcrowd the pan - cook in batches if needed',
        
        // Smoothie Tips
        'recipe.smoothie.tip1': 'Use frozen banana for a thicker, creamier texture',
        'recipe.smoothie.tip2': 'Add spinach gradually if you\'re new to green smoothies',
        'recipe.smoothie.tip3': 'Blend thoroughly to avoid leafy chunks',
        'recipe.smoothie.tip4': 'Drink immediately for best texture and nutrition',
        
        // Common
        'common.loading': 'Loading...',
        'common.search': 'Search',
        'common.read-more': 'Read More',
        'common.view-all': 'View All',
        'common.download': 'Download',
        'common.close': 'Close',
        'common.menu': 'Menu'
    },
    
    'zh': {
        // Navigation
        'nav.home': '首页',
        'nav.what-is': '什么是低FODMAP？',
        'nav.food-lists': '食物清单',
        'nav.recipes': '食谱',
        'nav.guides': '指南与技巧',
        'nav.blog': '博客',
        'nav.faq': '常见问题',
        
        // Hero Section
        'hero.title': '您的完整低FODMAP饮食指南',
        'hero.subtitle': '通过我们全面的IBS、肠道健康和低FODMAP排除饮食资源，发现消化问题的缓解方法。',
        'hero.get-started': '开始使用',
        'hero.view-food-lists': '查看食物清单',
        'hero.quick-start': '快速开始',
        'hero.understand': '✓ 了解FODMAP',
        'hero.download': '✓ 下载食物清单',
        'hero.try-recipes': '✓ 尝试我们的食谱',
        'hero.track-progress': '✓ 跟踪您的进展',
        
        // Features
        'features.title': '成功所需的一切',
        'features.food-lists.title': '全面的食物清单',
        'features.food-lists.desc': '详细的高FODMAP和低FODMAP食物清单，包含份量和可下载的PDF文件。',
        'features.recipes.title': '美味食谱',
        'features.recipes.desc': '超过100+经过测试的早餐、午餐、晚餐和小吃食谱，都是FODMAP友好的。',
        'features.guides.title': '专家指南',
        'features.guides.desc': '分步指南，帮助您导航排除、重新引入和维护阶段。',
        'features.tools.title': '交互式工具',
        'features.tools.desc': '可搜索的食物数据库和膳食计划工具，让您的旅程更轻松。',
        
        // What is Low FODMAP
        'what-is.title': '什么是低FODMAP饮食？',
        'what-is.desc': '低FODMAP饮食是一种科学支持的排除饮食，旨在帮助肠易激综合征（IBS）和其他消化系统疾病患者识别触发食物。',
        'what-is.fodmaps.title': '什么是FODMAP？',
        'what-is.fodmaps.desc': 'FODMAP是短链碳水化合物，在小肠中吸收不良。它们包括：',
        'what-is.fodmaps.fermentable': '可发酵 - 被肠道细菌分解',
        'what-is.fodmaps.oligosaccharides': '低聚糖 - 存在于小麦、洋葱、大蒜中',
        'what-is.fodmaps.disaccharides': '双糖 - 乳制品中的乳糖',
        'what-is.fodmaps.monosaccharides': '单糖 - 水果中的果糖',
        'what-is.fodmaps.polyols': '和多元醇 - 某些水果和人工甜味剂中的糖醇',
        'what-is.who.title': '谁应该尝试这种饮食？',
        'what-is.who.ibs': '肠易激综合征（IBS）患者',
        'what-is.who.sibo': '小肠细菌过度生长（SIBO）患者',
        'what-is.who.ibd': '炎症性肠病（IBD）缓解期患者',
        'what-is.who.others': '任何经历不明原因消化症状的人',
        'what-is.phases.title': '三个阶段',
        'what-is.phases.elimination': '1. 排除期（2-6周）',
        'what-is.phases.elimination.desc': '移除所有高FODMAP食物',
        'what-is.phases.reintroduction': '2. 重新引入期（6-8周）',
        'what-is.phases.reintroduction.desc': '系统测试每个FODMAP组',
        'what-is.phases.maintenance': '3. 维持期（长期）',
        'what-is.phases.maintenance.desc': '只吃您耐受良好的食物',
        
        // Food Lists
        'food-lists.title': '食物清单与数据库',
        'food-lists.subtitle': '搜索我们全面的高FODMAP和低FODMAP食物数据库',
        'food-lists.search.placeholder': '搜索食物...',
        'food-lists.search.button': '搜索',
        'food-lists.categories.all': '所有食物',
        'food-lists.categories.fruits': '水果',
        'food-lists.categories.vegetables': '蔬菜',
        'food-lists.categories.dairy': '乳制品',
        'food-lists.categories.grains': '谷物',
        'food-lists.categories.beverages': '饮料',
        'food-lists.download.title': '下载我们的完整食物清单',
        'food-lists.download.desc': '获取我们全面的PDF指南，方便参考',
        'food-lists.download.high': '下载高FODMAP清单',
        'food-lists.download.low': '下载低FODMAP清单',
        'food-lists.download.complete': '下载完整指南',
        'food-lists.status.low': '低FODMAP',
        'food-lists.status.high': '高FODMAP',
        'food-lists.serving': '份量：',
        
        // Recipes
        'recipes.title': '美味的低FODMAP食谱',
        'recipes.subtitle': '尝试我们经过测试和批准的食谱集合',
        'recipes.filters.all': '所有食谱',
        'recipes.filters.breakfast': '早餐',
        'recipes.filters.lunch': '午餐',
        'recipes.filters.dinner': '晚餐',
        'recipes.filters.snacks': '小吃',
        'recipes.filters.quick': '快速（15分钟）',
        'recipes.time': '⏱️ {time} 分钟',
        'recipes.servings': '👥 {servings} 人份',
        'recipes.view': '查看食谱',
        'recipes.tips': '厨师小贴士',
        'recipes.ingredients': '食材',
        'recipes.instructions': '制作步骤',
        'recipes.nutrition': '营养成分',
        'recipes.nutrition.calories': '热量',
        'recipes.nutrition.carbs': '碳水',
        'recipes.nutrition.protein': '蛋白质',
        'recipes.nutrition.fat': '脂肪',
        'recipes.nutrition.fiber': '纤维',
        'recipes.nutrition.sugar': '糖分',
        
        // Ingredients
        'ingredient.gluten-free-flour': '无麸质面粉混合物',
        'ingredient.sugar': '糖',
        'ingredient.baking-powder': '泡打粉',
        'ingredient.salt': '盐',
        'ingredient.lactose-free-milk': '无乳糖牛奶',
        'ingredient.egg': '鸡蛋',
        'ingredient.melted-butter': '融化黄油',
        'ingredient.vanilla-extract': '香草精',
        
        // Amount translations
        'amount.1-cup': '1杯',
        'amount.1-tbsp': '1汤匙',
        'amount.2-tbsp': '2汤匙',
        'amount.1-tsp': '1茶匙',
        'amount.2-tsp': '2茶匙',
        'amount.1-2-tsp': '1/2茶匙',
        'amount.1-4-tsp': '1/4茶匙',
        'amount.1-8-tsp': '1/8茶匙',
        'amount.1-large': '1个大的',
        'amount.2-large': '2个大的',
        'amount.4-pieces': '4片',
        'amount.2-cups': '2杯',
        'amount.1-2-cup': '1/2杯',
        'amount.1-4-cup': '1/4杯',
        'amount.1-3-cup': '1/3杯',
        'amount.3-4-cup': '3/4杯',
        
        // Notes translations
        'notes.1-1-blend': '使用1:1混合粉',
        'notes.white-coconut': '白糖或椰子糖',
        'notes.aluminum-free': '优选无铝',
        'notes.fine-sea-salt': '细海盐',
        'notes.room-temperature': '室温',
        'notes.cooled-slightly': '稍微冷却',
        'notes.pure-vanilla': '纯香草',
        'notes.extra-virgin': '特级初榨',
        'notes.freshly-squeezed': '新鲜榨取',
        'notes.to-taste': '适量',
        'notes.freshly-ground': '现磨',
        'notes.sea-salt-preferred': '优选海盐',
        'notes.finely-chopped': '切碎',
        'notes.zested-juiced': '去皮榨汁',
        'notes.skin-on-skinless': '每片6盎司，带皮或无皮',
        'notes.6-oz-each': '每片6盎司',
        'ingredient.rolled-oats': '燕麦片',
        'ingredient.banana': '香蕉',
        'ingredient.maple-syrup': '枫糖浆',
        'ingredient.cinnamon': '肉桂',
        'ingredient.blueberries': '蓝莓',
        'ingredient.chia-seeds': '奇亚籽',
        'ingredient.chicken-breast': '鸡胸肉',
        'ingredient.bell-peppers': '彩椒',
        'ingredient.carrots': '胡萝卜',
        'ingredient.zucchini': '西葫芦',
        'ingredient.soy-sauce': '酱油',
        'ingredient.sesame-oil': '芝麻油',
        'ingredient.ginger': '姜',
        'ingredient.rice-vinegar': '米醋',
        'ingredient.brown-rice': '糙米',
        'ingredient.green-onions': '大葱',
        'ingredient.frozen-banana': '冷冻香蕉',
        'ingredient.spinach': '菠菜',
        'ingredient.peanut-butter': '花生酱',
        'ingredient.ice-cubes': '冰块',
        'ingredient.quinoa': '藜麦',
        'ingredient.water': '水',
        'ingredient.cucumber': '黄瓜',
        'ingredient.cherry-tomatoes': '樱桃番茄',
        'ingredient.olive-oil': '橄榄油',
        'ingredient.lemon-juice': '柠檬汁',
        'ingredient.black-pepper': '黑胡椒',
        'ingredient.salmon-fillets': '三文鱼片',
        'ingredient.fresh-dill': '新鲜莳萝',
        'ingredient.fresh-parsley': '新鲜欧芹',
        'ingredient.fresh-chives': '新鲜细香葱',
        'ingredient.lemon': '柠檬',
        'ingredient.almond-butter': '杏仁酱',
        'ingredient.shredded-coconut': '椰丝',
        
        // Guides
        'guides.title': '指南与技巧',
        'guides.subtitle': '在您的低FODMAP旅程中取得成功所需的一切',
        'guides.getting-started.title': '开始使用',
        'guides.getting-started.desc': '开始低FODMAP饮食的完整初学者指南',
        'guides.dining-out.title': '外出就餐',
        'guides.dining-out.desc': '外出就餐时保持饮食的提示',
        'guides.shopping.title': '杂货购物',
        'guides.shopping.desc': '自信地导航超市',
        'guides.mistakes.title': '常见错误',
        'guides.mistakes.desc': '避免这些常见陷阱',
        'guides.read': '阅读指南',
        
        // FAQ
        'faq.title': '常见问题',
        'faq.elimination-duration.q': '我应该在排除期停留多长时间？',
        'faq.elimination-duration.a': '排除期通常持续2-6周，取决于您的症状。大多数人在2-4周内看到改善。如果您在6周后没有看到任何改善，低FODMAP饮食可能不适合您。',
        'faq.bananas.q': '我可以在低FODMAP饮食中吃香蕉吗？',
        'faq.bananas.a': '可以！成熟的香蕉在小份量（1个中等香蕉）中是低FODMAP的。然而，未成熟的香蕉是高FODMAP的。坚持选择有棕色斑点的黄色香蕉以获得最佳效果。',
        'faq.long-term.q': '低FODMAP饮食长期安全吗？',
        'faq.long-term.a': '排除期不应该是长期的。在识别您的触发因素后，您应该重新引入尽可能多的食物以保持均衡饮食。与营养师合作进行长期指导。',
        'faq.alcohol.q': '我可以在低FODMAP饮食中饮酒吗？',
        'faq.alcohol.a': '一些酒精饮料在小量中是低FODMAP的，包括葡萄酒、啤酒（适量）和烈酒。然而，酒精会刺激肠道，所以在排除期最好限制消费。',
        
        // Footer
        'footer.description': '您值得信赖的低FODMAP饮食信息、食谱和支持资源。',
        'footer.quick-links': '快速链接',
        'footer.resources': '资源',
        'footer.connect': '联系我们',
        'footer.download-pdfs': '下载PDF',
        'footer.meal-planner': '膳食计划器',
        'footer.food-diary': '食物日记',
        'footer.support-group': '支持小组',
        'footer.newsletter': '新闻通讯',
        'footer.contact': '联系我们',
        'footer.privacy': '隐私政策',
        'footer.terms': '服务条款',
        'footer.copyright': '© 2024 低FODMAP指南。保留所有权利。| 本网站仅供参考，不应替代专业医疗建议。',
        
        // Page titles and descriptions
        'page.title': '低FODMAP饮食指南 - 您的完整消化健康资源',
        'page.description': '全面的低FODMAP饮食指南，包含食谱、食物清单和IBS及消化健康的专家建议。今天开始您的肠道健康之旅。',
        
        // Guides section
        'guides.title': '指南与技巧',
        'guides.subtitle': '在您的低FODMAP旅程中取得成功所需的一切',
        'guides.getting-started.title': '开始使用',
        'guides.getting-started.desc': '开始低FODMAP饮食的完整初学者指南',
        'guides.getting-started.1': '如何为排除期做准备',
        'guides.getting-started.2': '必备厨房工具',
        'guides.getting-started.3': '膳食计划基础',
        'guides.dining-out.title': '外出就餐',
        'guides.dining-out.desc': '外出就餐时保持饮食的提示',
        'guides.dining-out.1': '餐厅点餐策略',
        'guides.dining-out.2': '安全菜单选项',
        'guides.dining-out.3': '旅行用餐提示',
        'guides.shopping.title': '杂货购物',
        'guides.shopping.desc': '自信地导航超市',
        'guides.shopping.1': '阅读食品标签',
        'guides.shopping.2': '隐藏的FODMAP来源',
        'guides.shopping.3': '预算友好购物',
        'guides.mistakes.title': '常见错误',
        'guides.mistakes.desc': '避免这些常见陷阱',
        'guides.mistakes.1': '份量大小错误',
        'guides.mistakes.2': 'FODMAP叠加',
        'guides.mistakes.3': '匆忙重新引入',
        'guides.read': '阅读指南',
        
        // FAQ section
        'faq.title': '常见问题',
        'faq.elimination-duration.q': '我应该在排除期停留多长时间？',
        'faq.elimination-duration.a': '排除期通常持续2-6周，取决于您的症状。大多数人在2-4周内看到改善。如果您在6周后没有看到任何改善，低FODMAP饮食可能不适合您。',
        'faq.bananas.q': '我可以在低FODMAP饮食中吃香蕉吗？',
        'faq.bananas.a': '可以！成熟的香蕉在小份量（1个中等香蕉）中是低FODMAP的。然而，未成熟的香蕉是高FODMAP的。坚持选择有棕色斑点的黄色香蕉以获得最佳效果。',
        'faq.long-term.q': '低FODMAP饮食长期安全吗？',
        'faq.long-term.a': '排除期不应该是长期的。在识别您的触发因素后，您应该重新引入尽可能多的食物以保持均衡饮食。与营养师合作进行长期指导。',
        'faq.alcohol.q': '我可以在低FODMAP饮食中饮酒吗？',
        'faq.alcohol.a': '一些酒精饮料在小量中是低FODMAP的，包括葡萄酒、啤酒（适量）和烈酒。然而，酒精会刺激肠道，所以在排除期最好限制消费。',
        
        // Footer
        'footer.description': '您值得信赖的低FODMAP饮食信息、食谱和支持资源。',
        'footer.quick-links': '快速链接',
        'footer.resources': '资源',
        'footer.connect': '联系我们',
        'footer.download-pdfs': '下载PDF',
        'footer.meal-planner': '膳食计划器',
        'footer.food-diary': '食物日记',
        'footer.support-group': '支持小组',
        'footer.newsletter': '新闻通讯',
        'footer.contact': '联系我们',
        'footer.privacy': '隐私政策',
        'footer.terms': '服务条款',
        'footer.copyright': '© 2024 低FODMAP指南。保留所有权利。| 本网站仅供参考，不应替代专业医疗建议。',
        
        // Food Database
        'food.banana': '香蕉（成熟）',
        'food.strawberries': '草莓',
        'food.blueberries': '蓝莓',
        'food.grapes': '葡萄',
        'food.orange': '橙子',
        'food.apple': '苹果',
        'food.mango': '芒果',
        'food.watermelon': '西瓜',
        'food.cherries': '樱桃',
        'food.carrots': '胡萝卜',
        'food.cucumber': '黄瓜',
        'food.lettuce': '生菜',
        'food.tomato': '番茄',
        'food.zucchini': '西葫芦',
        'food.onion': '洋葱',
        'food.garlic': '大蒜',
        'food.cauliflower': '花椰菜',
        'food.broccoli': '西兰花',
        'food.lactose-free-milk': '无乳糖牛奶',
        'food.hard-cheese': '硬奶酪（切达）',
        'food.butter': '黄油',
        'food.regular-milk': '普通牛奶',
        'food.yogurt': '酸奶',
        'food.ice-cream': '冰淇淋',
        'food.soft-cheese': '软奶酪',
        'food.rice': '大米（白米）',
        'food.oats': '燕麦',
        'food.quinoa': '藜麦',
        'food.gluten-free-bread': '无麸质面包',
        'food.wheat-bread': '小麦面包',
        'food.pasta': '意大利面（小麦）',
        'food.rye-bread': '黑麦面包',
        'food.water': '水',
        'food.coffee': '咖啡（黑咖啡）',
        'food.green-tea': '绿茶',
        'food.coconut-water': '椰子水',
        'food.apple-juice': '苹果汁',
        'food.orange-juice': '橙汁',
        'food.soda': '苏打水',
        
        // Recipe Database
        'recipe.pancakes.title': '低FODMAP煎饼',
        'recipe.pancakes.desc': '蓬松的无麸质煎饼，完美的早餐选择',
        'recipe.pancakes.ingredients': '食材',
        'recipe.pancakes.ingredients.list': '• 1杯无麸质面粉混合物\n• 1汤匙糖\n• 1茶匙泡打粉\n• 1/4茶匙盐\n• 1杯无乳糖牛奶\n• 1个鸡蛋\n• 2汤匙融化黄油\n• 1茶匙香草精',
        'recipe.pancakes.instructions': '制作步骤',
        'recipe.pancakes.instructions.steps': '1. 在碗中混合干性食材\n2. 在另一个碗中搅拌湿性食材\n3. 将湿性和干性食材混合\n4. 在平底锅上煎至金黄色\n5. 配枫糖浆享用',
        'recipe.pancakes.nutrition': '营养成分（每份）',
        'recipe.pancakes.nutrition.info': '热量：180卡 | 碳水：25克 | 蛋白质：6克 | 脂肪：7克',
        
        'recipe.buddha-bowl.title': '藜麦佛陀碗',
        'recipe.buddha-bowl.desc': '营养丰富、色彩缤纷的碗，搭配安全蔬菜',
        'recipe.buddha-bowl.ingredients': '食材',
        'recipe.buddha-bowl.ingredients.list': '• 1杯藜麦\n• 2杯水\n• 1杯菠菜\n• 1/2杯胡萝卜（切丝）\n• 1/2杯黄瓜（切片）\n• 1/4杯樱桃番茄\n• 2汤匙橄榄油\n• 1汤匙柠檬汁\n• 盐和胡椒调味',
        'recipe.buddha-bowl.instructions': '制作步骤',
        'recipe.buddha-bowl.instructions.steps': '1. 按照包装说明煮藜麦\n2. 准备蔬菜并摆放在碗中\n3. 混合橄榄油和柠檬汁制作调料\n4. 将蔬菜放在藜麦上\n5. 淋上调料即可享用',
        'recipe.buddha-bowl.nutrition': '营养成分（每份）',
        'recipe.buddha-bowl.nutrition.info': '热量：320卡 | 碳水：45克 | 蛋白质：12克 | 脂肪：10克',
        
        'recipe.salmon.title': '香草烤三文鱼',
        'recipe.salmon.desc': '简单优雅的三文鱼配新鲜香草',
        'recipe.salmon.ingredients': '食材',
        'recipe.salmon.ingredients.list': '• 4块三文鱼片（每块6盎司）\n• 2汤匙新鲜莳萝\n• 2汤匙新鲜欧芹\n• 1汤匙新鲜细香葱\n• 2汤匙橄榄油\n• 1个柠檬（取皮和汁）\n• 盐和胡椒调味',
        'recipe.salmon.instructions': '制作步骤',
        'recipe.salmon.instructions.steps': '1. 烤箱预热至400°F\n2. 混合香草、橄榄油和柠檬皮\n3. 用盐和胡椒调味三文鱼\n4. 将三文鱼裹上香草混合物\n5. 烤12-15分钟至鱼肉松软',
        'recipe.salmon.nutrition': '营养成分（每份）',
        'recipe.salmon.nutrition.info': '热量：280卡 | 碳水：2克 | 蛋白质：35克 | 脂肪：15克',
        
        'recipe.energy-balls.title': '燕麦能量球',
        'recipe.energy-balls.desc': '免烤能量球，快速小食',
        'recipe.energy-balls.ingredients': '食材',
        'recipe.energy-balls.ingredients.list': '• 1杯燕麦片\n• 1/2杯杏仁酱\n• 1/4杯枫糖浆\n• 1/4杯椰丝\n• 1茶匙香草精\n• 1/4茶匙盐\n• 2汤匙奇亚籽',
        'recipe.energy-balls.instructions': '制作步骤',
        'recipe.energy-balls.instructions.steps': '1. 在碗中混合所有食材\n2. 搓成12个小球\n3. 冷藏30分钟\n4. 存放在密封容器中\n5. 随时享用！',
        'recipe.energy-balls.nutrition': '营养成分（每个）',
        'recipe.energy-balls.nutrition.info': '热量：95卡 | 碳水：10克 | 蛋白质：3克 | 脂肪：5克',
        
        'recipe.oatmeal.title': '奶油香蕉燕麦粥',
        'recipe.oatmeal.desc': '温暖舒适的燕麦粥，带有天然甜味',
        'recipe.oatmeal.ingredients': '食材',
        'recipe.oatmeal.ingredients.list': '• 燕麦片 1/2杯\n• 无乳糖牛奶 1杯\n• 香蕉 1/2个（捣碎）\n• 枫糖浆 1汤匙\n• 肉桂粉 1/4茶匙\n• 盐 一小撮\n• 蓝莓 1/4杯\n• 奇亚籽 1茶匙',
        'recipe.oatmeal.instructions': '制作步骤',
        'recipe.oatmeal.instructions.steps': '1. 在平底锅中混合燕麦、牛奶、香蕉、枫糖浆、肉桂和盐\n2. 中火煮至微沸\n3. 转小火煮5-7分钟\n4. 关火静置2分钟\n5. 顶部放蓝莓和奇亚籽\n6. 趁热享用',
        'recipe.oatmeal.nutrition': '营养成分（每份）',
        'recipe.oatmeal.nutrition.info': '热量：320卡 | 碳水：55克 | 蛋白质：12克 | 脂肪：8克',
        
        'recipe.chicken-stir-fry.title': '低FODMAP鸡肉炒菜',
        'recipe.chicken-stir-fry.desc': '快速多彩的炒菜，使用安全蔬菜',
        'recipe.chicken-stir-fry.ingredients': '食材',
        'recipe.chicken-stir-fry.ingredients.list': '• 鸡胸肉 1磅（切丝）\n• 彩椒 2个（切片）\n• 胡萝卜 2个（切丝）\n• 西葫芦 1个（切片）\n• 无麸质酱油 3汤匙\n• 芝麻油 1汤匙\n• 新鲜姜 1汤匙\n• 米醋 1汤匙\n• 糙米 2杯（煮熟）\n• 大葱 2根',
        'recipe.chicken-stir-fry.instructions': '制作步骤',
        'recipe.chicken-stir-fry.instructions.steps': '1. 在炒锅或大平底锅中热油\n2. 炒鸡丝至金黄熟透\n3. 加入彩椒和胡萝卜，炒3-4分钟\n4. 加入西葫芦继续炒\n5. 混合酱油、姜和醋\n6. 将鸡肉放回锅中，加入酱汁\n7. 翻炒均匀并加热\n8. 配糙米和葱花享用',
        'recipe.chicken-stir-fry.nutrition': '营养成分（每份）',
        'recipe.chicken-stir-fry.nutrition.info': '热量：280卡 | 碳水：25克 | 蛋白质：28克 | 脂肪：8克',
        
        'recipe.smoothie.title': '绿色能量奶昔',
        'recipe.smoothie.desc': '营养丰富的能量奶昔，隐藏绿色蔬菜',
        'recipe.smoothie.ingredients': '食材',
        'recipe.smoothie.ingredients.list': '• 冷冻香蕉 1/2个\n• 无乳糖牛奶 1杯\n• 新鲜菠菜 1杯\n• 天然花生酱 1汤匙\n• 奇亚籽 1茶匙\n• 香草精 1/2茶匙\n• 冰块 4-5块',
        'recipe.smoothie.instructions': '制作步骤',
        'recipe.smoothie.instructions.steps': '1. 将所有食材放入强力搅拌机\n2. 从低速开始，逐渐调至高速\n3. 搅拌30-45秒至顺滑\n4. 用更多牛奶或冰块调整浓稠度\n5. 品尝并根据需要调整甜度\n6. 倒入杯中立即享用',
        'recipe.smoothie.nutrition': '营养成分（每份）',
        'recipe.smoothie.nutrition.info': '热量：250卡 | 碳水：35克 | 蛋白质：12克 | 脂肪：8克',
        
        // Recipe Steps
        'recipe.pancakes.step1': '在大碗中搅拌面粉、糖、泡打粉和盐。',
        'recipe.pancakes.step2': '在另一个碗中搅拌牛奶、鸡蛋、融化黄油和香草精。',
        'recipe.pancakes.step3': '将湿性食材倒入干性食材中，搅拌至刚刚混合。不要过度搅拌 - 一些结块是正常的。',
        'recipe.pancakes.step4': '在平底锅或大不粘锅中用中火加热。用黄油或油轻轻涂抹。',
        'recipe.pancakes.step5': '将1/4杯面糊倒入平底锅中制作每个煎饼。',
        'recipe.pancakes.step6': '煮至表面形成气泡，边缘看起来凝固，大约2-3分钟。',
        'recipe.pancakes.step7': '翻面煮至另一面呈金黄色，大约再煮1-2分钟。',
        'recipe.pancakes.step8': '立即配枫糖浆、新鲜浆果或您喜欢的低FODMAP配料享用。',
        
        // Buddha Bowl Steps
        'recipe.buddha-bowl.step1': '用细网筛彻底冲洗藜麦，直到水变清。',
        'recipe.buddha-bowl.step2': '在中号平底锅中，混合藜麦和水。大火煮至沸腾。',
        'recipe.buddha-bowl.step3': '转小火，盖上盖子，煮15分钟或直到水被吸收。',
        'recipe.buddha-bowl.step4': '关火，盖上盖子静置5分钟。用叉子搅拌松软。',
        'recipe.buddha-bowl.step5': '在藜麦煮制的同时，准备蔬菜：洗净并擦干菠菜，将胡萝卜切丝，黄瓜切片，樱桃番茄对半切。',
        'recipe.buddha-bowl.step6': '在小碗中搅拌橄榄油、柠檬汁、盐和胡椒制作调料。',
        'recipe.buddha-bowl.step7': '将煮好的藜麦分到两个碗中。',
        'recipe.buddha-bowl.step8': '将蔬菜以美观的图案摆放在藜麦上。',
        'recipe.buddha-bowl.step9': '淋上柠檬橄榄油调料。',
        'recipe.buddha-bowl.step10': '趁藜麦还热时立即享用。',
        
        // Salmon Steps
        'recipe.salmon.step1': '烤箱预热至400°F（200°C）。在烤盘上铺上烘焙纸。',
        'recipe.salmon.step2': '在小碗中混合切碎的莳萝、欧芹、细香葱、橄榄油和柠檬皮。',
        'recipe.salmon.step3': '用盐和胡椒在两面充分调味三文鱼片。',
        'recipe.salmon.step4': '将三文鱼片放在准备好的烤盘上，如果使用带皮鱼片，皮面朝下。',
        'recipe.salmon.step5': '将香草混合物均匀地舀到每个鱼片的顶部，轻轻按压使其粘附。',
        'recipe.salmon.step6': '淋上一半的柠檬汁。',
        'recipe.salmon.step7': '在预热的烤箱中烤12-15分钟，根据鱼片的厚度调整时间。',
        'recipe.salmon.step8': '当三文鱼用叉子轻轻一戳就能散开，内部温度达到145°F时即可。',
        'recipe.salmon.step9': '从烤箱中取出，淋上剩余的柠檬汁。',
        'recipe.salmon.step10': '上桌前静置2-3分钟。',
        
        // Recipe Tips
        'recipe.pancakes.tip1': '不要过度搅拌面糊 - 一些结块是正常的，会让煎饼更蓬松',
        'recipe.pancakes.tip2': '在烹饪前让面糊静置5分钟，质地会更好',
        'recipe.pancakes.tip3': '使用1/4杯量杯确保煎饼大小一致',
        'recipe.pancakes.tip4': '在制作其余煎饼时，将已做好的煎饼放在200°F烤箱中保温',
        
        'recipe.buddha-bowl.tip1': '彻底冲洗藜麦以去除苦味涂层皂苷',
        'recipe.buddha-bowl.tip2': '在添加蔬菜前让藜麦稍微冷却，防止蔬菜蔫掉',
        'recipe.buddha-bowl.tip3': '可以随意添加其他低FODMAP蔬菜，如甜椒或西葫芦',
        'recipe.buddha-bowl.tip4': '调料可以提前制作，在冰箱中保存最多3天',
        
        'recipe.salmon.tip1': '选择厚度相似的三文鱼片以确保均匀烹饪',
        'recipe.salmon.tip2': '不要过度烹饪三文鱼 - 中心应该仍然略带粉红色',
        'recipe.salmon.tip3': '新鲜香草对最佳风味至关重要 - 干香草效果不佳',
        'recipe.salmon.tip4': '这道菜与烤蔬菜或简单绿色沙拉搭配很好',
        
        // Energy Balls Tips
        'recipe.energy-balls.tip1': '混合物应该足够粘稠，按压时能保持形状',
        'recipe.energy-balls.tip2': '搓球时稍微湿润双手以防止粘手',
        'recipe.energy-balls.tip3': '可以添加其他低FODMAP食材，如可可粉或切碎的坚果',
        'recipe.energy-balls.tip4': '这些是很好的便携零食，可以冷冻保存更长时间',
        
        // Oatmeal Tips
        'recipe.oatmeal.tip1': '将香蕉充分捣碎以获得更奶油般的质地',
        'recipe.oatmeal.tip2': '经常搅拌以防止粘锅底',
        'recipe.oatmeal.tip3': '如果喜欢更稀的质地，可以添加更多牛奶',
        'recipe.oatmeal.tip4': '这个食谱可以加倍或三倍制作，用于备餐',
        
        // Chicken Stir-fry Tips
        'recipe.chicken-stir-fry.tip1': '将所有蔬菜切成相似大小以确保均匀烹饪',
        'recipe.chicken-stir-fry.tip2': '保持高温以获得正确的炒菜技巧',
        'recipe.chicken-stir-fry.tip3': '在开始烹饪前准备好所有食材',
        'recipe.chicken-stir-fry.tip4': '不要过度拥挤平底锅 - 如需要可分批次烹饪',
        
        // Smoothie Tips
        'recipe.smoothie.tip1': '使用冷冻香蕉获得更浓稠、更奶油般的质地',
        'recipe.smoothie.tip2': '如果你是绿色奶昔新手，可以逐渐添加菠菜',
        'recipe.smoothie.tip3': '充分搅拌以避免叶子块状物',
        'recipe.smoothie.tip4': '立即饮用以获得最佳质地和营养',
        
        // Common
        'common.loading': '加载中...',
        'common.search': '搜索',
        'common.read-more': '阅读更多',
        'common.view-all': '查看全部',
        'common.download': '下载',
        'common.close': '关闭',
        'common.menu': '菜单'
    }
};

// 当前语言
let currentLanguage = 'en';

// 获取翻译文本
function t(key, params = {}) {
    const translation = translations[currentLanguage]?.[key] || translations['en'][key] || key;
    
    // 替换参数
    return translation.replace(/\{(\w+)\}/g, (match, param) => {
        return params[param] || match;
    });
}

// 设置语言
function setLanguage(lang) {
    if (languages[lang]) {
        currentLanguage = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = languages[lang].dir;
        updateContent();
        updateLanguageSelector(); // 更新语言选择器显示
        saveLanguagePreference(lang);
        
        // 触发语言变化事件
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: lang }
        }));
    }
}

// 更新页面内容
function updateContent() {
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const text = t(key);
        
        if (element.tagName === 'INPUT' && element.type === 'text') {
            element.placeholder = text;
        } else if (element.tagName === 'INPUT' && element.type === 'email') {
            element.placeholder = text;
        } else {
            element.textContent = text;
        }
    });
    
    // 更新带有data-i18n-html属性的元素（保持HTML）
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        const html = t(key);
        element.innerHTML = html;
    });
    
    // 更新页面标题
    document.title = t('page.title') || 'Low FODMAP Diet Guide';
    
    // 更新meta描述
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = t('page.description') || 'Comprehensive Low FODMAP diet guide with recipes, food lists, and expert tips for IBS and digestive health.';
    }
}

// 保存语言偏好
function saveLanguagePreference(lang) {
    localStorage.setItem('preferred-language', lang);
}

// 加载语言偏好
function loadLanguagePreference() {
    const saved = localStorage.getItem('preferred-language');
    if (saved && languages[saved]) {
        setLanguage(saved);
    } else {
        // 检测浏览器语言
        const browserLang = navigator.language.split('-')[0];
        if (languages[browserLang]) {
            setLanguage(browserLang);
        }
    }
}

// 创建语言选择器
function createLanguageSelector() {
    const selector = document.createElement('div');
    selector.className = 'language-selector';
    selector.innerHTML = `
        <button class="language-toggle" id="language-toggle">
            <span class="current-flag">${languages[currentLanguage].flag}</span>
            <span class="current-lang">${languages[currentLanguage].name}</span>
            <span class="dropdown-arrow">▼</span>
        </button>
        <div class="language-dropdown" id="language-dropdown">
            ${Object.entries(languages).map(([code, lang]) => `
                <button class="language-option ${code === currentLanguage ? 'active' : ''}" 
                        data-lang="${code}">
                    <span class="flag">${lang.flag}</span>
                    <span class="name">${lang.name}</span>
                </button>
            `).join('')}
        </div>
    `;
    
    return selector;
}

// 更新语言选择器显示
function updateLanguageSelector() {
    const currentFlag = document.querySelector('.current-flag');
    const currentLang = document.querySelector('.current-lang');
    const dropdownArrow = document.querySelector('.dropdown-arrow');
    
    if (currentFlag) currentFlag.textContent = languages[currentLanguage].flag;
    if (currentLang) currentLang.textContent = languages[currentLanguage].name;
    
    // 更新所有语言选项的active状态
    document.querySelectorAll('.language-option').forEach(option => {
        const langCode = option.dataset.lang;
        if (langCode === currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// 初始化国际化
function initI18n() {
    // 加载语言偏好
    loadLanguagePreference();
    
    // 创建语言选择器
    const languageSelector = createLanguageSelector();
    const nav = document.querySelector('.nav-container');
    if (nav) {
        nav.appendChild(languageSelector);
    }
    
    // 添加语言选择器事件监听器
    document.getElementById('language-toggle')?.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = document.getElementById('language-dropdown');
        dropdown.classList.toggle('show');
    });
    
    // 语言选项点击事件
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = e.currentTarget.dataset.lang;
            setLanguage(lang);
            document.getElementById('language-dropdown').classList.remove('show');
        });
    });
    
    // 点击外部关闭下拉菜单
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            document.getElementById('language-dropdown')?.classList.remove('show');
        }
    });
    
    // 更新内容
    updateContent();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initI18n);
