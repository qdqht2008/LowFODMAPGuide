// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Food Database with translation keys
const foodDatabase = [
    // Fruits
    { nameKey: 'food.banana', category: 'fruits', status: 'low', serving: '1 medium' },
    { nameKey: 'food.strawberries', category: 'fruits', status: 'low', serving: '10 medium' },
    { nameKey: 'food.blueberries', category: 'fruits', status: 'low', serving: '1/4 cup' },
    { nameKey: 'food.grapes', category: 'fruits', status: 'low', serving: '1 cup' },
    { nameKey: 'food.orange', category: 'fruits', status: 'low', serving: '1 medium' },
    { nameKey: 'food.apple', category: 'fruits', status: 'high', serving: '1 medium' },
    { nameKey: 'food.mango', category: 'fruits', status: 'high', serving: '1/2 cup' },
    { nameKey: 'food.watermelon', category: 'fruits', status: 'high', serving: '1 cup' },
    { nameKey: 'food.cherries', category: 'fruits', status: 'high', serving: '10 medium' },
    
    // Vegetables
    { nameKey: 'food.carrots', category: 'vegetables', status: 'low', serving: '1/2 cup' },
    { nameKey: 'food.cucumber', category: 'vegetables', status: 'low', serving: '1/2 cup' },
    { nameKey: 'food.lettuce', category: 'vegetables', status: 'low', serving: '2 cups' },
    { nameKey: 'food.tomato', category: 'vegetables', status: 'low', serving: '1 medium' },
    { nameKey: 'food.zucchini', category: 'vegetables', status: 'low', serving: '1/2 cup' },
    { nameKey: 'food.onion', category: 'vegetables', status: 'high', serving: '1/2 small' },
    { nameKey: 'food.garlic', category: 'vegetables', status: 'high', serving: '1 clove' },
    { nameKey: 'food.cauliflower', category: 'vegetables', status: 'high', serving: '1/2 cup' },
    { nameKey: 'food.broccoli', category: 'vegetables', status: 'high', serving: '1/2 cup' },
    
    // Dairy
    { nameKey: 'food.lactose-free-milk', category: 'dairy', status: 'low', serving: '1 cup' },
    { nameKey: 'food.hard-cheese', category: 'dairy', status: 'low', serving: '1 oz' },
    { nameKey: 'food.butter', category: 'dairy', status: 'low', serving: '1 tbsp' },
    { nameKey: 'food.regular-milk', category: 'dairy', status: 'high', serving: '1 cup' },
    { nameKey: 'food.yogurt', category: 'dairy', status: 'high', serving: '1 cup' },
    { nameKey: 'food.ice-cream', category: 'dairy', status: 'high', serving: '1/2 cup' },
    { nameKey: 'food.soft-cheese', category: 'dairy', status: 'high', serving: '1 oz' },
    
    // Grains
    { nameKey: 'food.rice', category: 'grains', status: 'low', serving: '1 cup' },
    { nameKey: 'food.oats', category: 'grains', status: 'low', serving: '1/2 cup' },
    { nameKey: 'food.quinoa', category: 'grains', status: 'low', serving: '1/2 cup' },
    { nameKey: 'food.gluten-free-bread', category: 'grains', status: 'low', serving: '2 slices' },
    { nameKey: 'food.wheat-bread', category: 'grains', status: 'high', serving: '2 slices' },
    { nameKey: 'food.pasta', category: 'grains', status: 'high', serving: '1 cup' },
    { nameKey: 'food.rye-bread', category: 'grains', status: 'high', serving: '2 slices' },
    
    // Beverages
    { nameKey: 'food.water', category: 'beverages', status: 'low', serving: 'unlimited' },
    { nameKey: 'food.coffee', category: 'beverages', status: 'low', serving: '1 cup' },
    { nameKey: 'food.green-tea', category: 'beverages', status: 'low', serving: '1 cup' },
    { nameKey: 'food.coconut-water', category: 'beverages', status: 'low', serving: '1 cup' },
    { nameKey: 'food.apple-juice', category: 'beverages', status: 'high', serving: '1 cup' },
    { nameKey: 'food.orange-juice', category: 'beverages', status: 'high', serving: '1 cup' },
    { nameKey: 'food.soda', category: 'beverages', status: 'high', serving: '1 can' }
];

// Recipe Database with detailed information
const recipeDatabase = [
    { 
        titleKey: 'recipe.pancakes.title', 
        descKey: 'recipe.pancakes.desc', 
        category: 'breakfast', 
        time: 15, 
        servings: 4,
        difficulty: 'easy',
        ingredients: [
            { nameKey: 'ingredient.gluten-free-flour', name: 'Gluten-free flour blend', amount: '1 cup', amountKey: 'amount.1-cup', notes: 'Use a 1:1 blend', notesKey: 'notes.1-1-blend' },
            { nameKey: 'ingredient.sugar', name: 'Sugar', amount: '1 tbsp', amountKey: 'amount.1-tbsp', notes: 'White or coconut sugar', notesKey: 'notes.white-coconut' },
            { nameKey: 'ingredient.baking-powder', name: 'Baking powder', amount: '1 tsp', amountKey: 'amount.1-tsp', notes: 'Aluminum-free preferred', notesKey: 'notes.aluminum-free' },
            { nameKey: 'ingredient.salt', name: 'Salt', amount: '1/4 tsp', amountKey: 'amount.1-4-tsp', notes: 'Fine sea salt', notesKey: 'notes.fine-sea-salt' },
            { nameKey: 'ingredient.lactose-free-milk', name: 'Lactose-free milk', amount: '1 cup', amountKey: 'amount.1-cup', notes: 'Room temperature', notesKey: 'notes.room-temperature' },
            { nameKey: 'ingredient.egg', name: 'Egg', amount: '1 large', amountKey: 'amount.1-large', notes: 'Room temperature', notesKey: 'notes.room-temperature' },
            { nameKey: 'ingredient.melted-butter', name: 'Melted butter', amount: '2 tbsp', amountKey: 'amount.2-tbsp', notes: 'Cooled slightly', notesKey: 'notes.cooled-slightly' },
            { nameKey: 'ingredient.vanilla-extract', name: 'Vanilla extract', amount: '1 tsp', amountKey: 'amount.1-tsp', notes: 'Pure vanilla', notesKey: 'notes.pure-vanilla' }
        ],
        instructions: [
            { key: 'recipe.pancakes.step1', text: 'In a large bowl, whisk together the flour, sugar, baking powder, and salt.' },
            { key: 'recipe.pancakes.step2', text: 'In a separate bowl, whisk together the milk, egg, melted butter, and vanilla extract.' },
            { key: 'recipe.pancakes.step3', text: 'Pour the wet ingredients into the dry ingredients and stir until just combined. Do not overmix - a few lumps are okay.' },
            { key: 'recipe.pancakes.step4', text: 'Heat a griddle or large non-stick pan over medium heat. Lightly grease with butter or oil.' },
            { key: 'recipe.pancakes.step5', text: 'Pour 1/4 cup of batter for each pancake onto the griddle.' },
            { key: 'recipe.pancakes.step6', text: 'Cook until bubbles form on the surface and the edges look set, about 2-3 minutes.' },
            { key: 'recipe.pancakes.step7', text: 'Flip and cook until golden brown on the other side, about 1-2 minutes more.' },
            { key: 'recipe.pancakes.step8', text: 'Serve immediately with maple syrup, fresh berries, or your favorite low FODMAP toppings.' }
        ],
        nutrition: {
            calories: 180,
            carbs: 25,
            protein: 6,
            fat: 7,
            fiber: 2,
            sugar: 8
        },
        tips: [
            { key: 'recipe.pancakes.tip1', text: 'Don\'t overmix the batter - lumps are normal and will create fluffier pancakes' },
            { key: 'recipe.pancakes.tip2', text: 'Let the batter rest for 5 minutes before cooking for better texture' },
            { key: 'recipe.pancakes.tip3', text: 'Use a 1/4 cup measuring cup for consistent pancake sizes' },
            { key: 'recipe.pancakes.tip4', text: 'Keep cooked pancakes warm in a 200°F oven while making the rest' }
        ]
    },
    { 
        titleKey: 'recipe.buddha-bowl.title', 
        descKey: 'recipe.buddha-bowl.desc', 
        category: 'lunch', 
        time: 20, 
        servings: 2,
        difficulty: 'easy',
        ingredients: [
            { nameKey: 'ingredient.quinoa', name: 'Quinoa', amount: '1 cup', notes: 'Rinsed and drained' },
            { nameKey: 'ingredient.water', name: 'Water', amount: '2 cups', notes: 'For cooking quinoa' },
            { nameKey: 'ingredient.spinach', name: 'Fresh spinach', amount: '1 cup', notes: 'Baby spinach preferred' },
            { nameKey: 'ingredient.carrots', name: 'Carrots', amount: '1/2 cup', notes: 'Grated or julienned' },
            { nameKey: 'ingredient.cucumber', name: 'Cucumber', amount: '1/2 cup', notes: 'Sliced into rounds' },
            { nameKey: 'ingredient.cherry-tomatoes', name: 'Cherry tomatoes', amount: '1/4 cup', notes: 'Halved' },
            { nameKey: 'ingredient.olive-oil', name: 'Olive oil', amount: '2 tbsp', notes: 'Extra virgin' },
            { nameKey: 'ingredient.lemon-juice', name: 'Lemon juice', amount: '1 tbsp', notes: 'Freshly squeezed' },
            { nameKey: 'ingredient.salt', name: 'Salt', amount: '1/4 tsp', notes: 'To taste' },
            { nameKey: 'ingredient.black-pepper', name: 'Black pepper', amount: '1/8 tsp', notes: 'Freshly ground' }
        ],
        instructions: [
            { key: 'recipe.buddha-bowl.step1', text: 'Rinse the quinoa thoroughly in a fine-mesh strainer until the water runs clear.' },
            { key: 'recipe.buddha-bowl.step2', text: 'In a medium saucepan, combine quinoa and water. Bring to a boil over high heat.' },
            { key: 'recipe.buddha-bowl.step3', text: 'Reduce heat to low, cover, and simmer for 15 minutes or until water is absorbed.' },
            { key: 'recipe.buddha-bowl.step4', text: 'Remove from heat and let stand covered for 5 minutes. Fluff with a fork.' },
            { key: 'recipe.buddha-bowl.step5', text: 'While quinoa cooks, prepare the vegetables: wash and dry spinach, grate carrots, slice cucumber, and halve cherry tomatoes.' },
            { key: 'recipe.buddha-bowl.step6', text: 'In a small bowl, whisk together olive oil, lemon juice, salt, and pepper to make the dressing.' },
            { key: 'recipe.buddha-bowl.step7', text: 'Divide the cooked quinoa between two bowls.' },
            { key: 'recipe.buddha-bowl.step8', text: 'Arrange the vegetables on top of the quinoa in an attractive pattern.' },
            { key: 'recipe.buddha-bowl.step9', text: 'Drizzle with the lemon-olive oil dressing.' },
            { key: 'recipe.buddha-bowl.step10', text: 'Serve immediately while quinoa is still warm.' }
        ],
        nutrition: {
            calories: 320,
            carbs: 45,
            protein: 12,
            fat: 10,
            fiber: 6,
            sugar: 8
        },
        tips: [
            { key: 'recipe.buddha-bowl.tip1', text: 'Rinse quinoa well to remove the bitter coating called saponin' },
            { key: 'recipe.buddha-bowl.tip2', text: 'Let quinoa cool slightly before adding vegetables to prevent wilting' },
            { key: 'recipe.buddha-bowl.tip3', text: 'Feel free to add other low FODMAP vegetables like bell peppers or zucchini' },
            { key: 'recipe.buddha-bowl.tip4', text: 'The dressing can be made ahead and stored in the refrigerator for up to 3 days' }
        ]
    },
    { 
        titleKey: 'recipe.salmon.title', 
        descKey: 'recipe.salmon.desc', 
        category: 'dinner', 
        time: 25, 
        servings: 4,
        difficulty: 'medium',
        ingredients: [
            { nameKey: 'ingredient.salmon-fillets', name: 'Salmon fillets', amount: '4 pieces', notes: '6 oz each, skin-on or skinless' },
            { nameKey: 'ingredient.fresh-dill', name: 'Fresh dill', amount: '2 tbsp', notes: 'Finely chopped' },
            { nameKey: 'ingredient.fresh-parsley', name: 'Fresh parsley', amount: '2 tbsp', notes: 'Finely chopped' },
            { nameKey: 'ingredient.fresh-chives', name: 'Fresh chives', amount: '1 tbsp', notes: 'Finely chopped' },
            { nameKey: 'ingredient.olive-oil', name: 'Olive oil', amount: '2 tbsp', notes: 'Extra virgin' },
            { nameKey: 'ingredient.lemon', name: 'Lemon', amount: '1 large', notes: 'Zested and juiced' },
            { nameKey: 'ingredient.salt', name: 'Salt', amount: '1/2 tsp', notes: 'Sea salt preferred' },
            { nameKey: 'ingredient.black-pepper', name: 'Black pepper', amount: '1/4 tsp', notes: 'Freshly ground' }
        ],
        instructions: [
            { key: 'recipe.salmon.step1', text: 'Preheat oven to 400°F (200°C). Line a baking sheet with parchment paper.' },
            { key: 'recipe.salmon.step2', text: 'In a small bowl, combine the chopped dill, parsley, chives, olive oil, and lemon zest.' },
            { key: 'recipe.salmon.step3', text: 'Season the salmon fillets generously with salt and pepper on both sides.' },
            { key: 'recipe.salmon.step4', text: 'Place the salmon fillets on the prepared baking sheet, skin-side down if using skin-on fillets.' },
            { key: 'recipe.salmon.step5', text: 'Spoon the herb mixture evenly over the top of each fillet, pressing it gently to adhere.' },
            { key: 'recipe.salmon.step6', text: 'Drizzle with half of the lemon juice.' },
            { key: 'recipe.salmon.step7', text: 'Bake in the preheated oven for 12-15 minutes, depending on the thickness of the fillets.' },
            { key: 'recipe.salmon.step8', text: 'The salmon is done when it flakes easily with a fork and reaches an internal temperature of 145°F.' },
            { key: 'recipe.salmon.step9', text: 'Remove from oven and drizzle with remaining lemon juice.' },
            { key: 'recipe.salmon.step10', text: 'Let rest for 2-3 minutes before serving.' }
        ],
        nutrition: {
            calories: 280,
            carbs: 2,
            protein: 35,
            fat: 15,
            fiber: 0,
            sugar: 1
        },
        tips: [
            { key: 'recipe.salmon.tip1', text: 'Choose salmon fillets that are similar in thickness for even cooking' },
            { key: 'recipe.salmon.tip2', text: 'Don\'t overcook the salmon - it should still be slightly pink in the center' },
            { key: 'recipe.salmon.tip3', text: 'Fresh herbs are essential for the best flavor - dried herbs won\'t work as well' },
            { key: 'recipe.salmon.tip4', text: 'This dish pairs well with roasted vegetables or a simple green salad' }
        ]
    },
    { 
        titleKey: 'recipe.energy-balls.title', 
        descKey: 'recipe.energy-balls.desc', 
        category: 'snacks', 
        time: 10, 
        servings: 12,
        difficulty: 'easy',
        ingredients: [
            { name: 'Rolled oats', amount: '1 cup', notes: 'Old-fashioned oats, not instant' },
            { name: 'Almond butter', amount: '1/2 cup', notes: 'Natural, no added sugar' },
            { name: 'Maple syrup', amount: '1/4 cup', notes: 'Pure maple syrup' },
            { name: 'Shredded coconut', amount: '1/4 cup', notes: 'Unsweetened' },
            { name: 'Vanilla extract', amount: '1 tsp', notes: 'Pure vanilla' },
            { name: 'Salt', amount: '1/4 tsp', notes: 'Fine sea salt' },
            { name: 'Chia seeds', amount: '2 tbsp', notes: 'Black or white chia seeds' }
        ],
        instructions: [
            'In a large mixing bowl, combine all ingredients.',
            'Stir well until everything is evenly distributed and the mixture holds together when pressed.',
            'If the mixture is too dry, add 1-2 tablespoons of water. If too wet, add more oats.',
            'Using your hands, roll the mixture into 12 equal-sized balls, about 1 inch in diameter.',
            'Place the balls on a plate or baking sheet lined with parchment paper.',
            'Refrigerate for at least 30 minutes to firm up.',
            'Store in an airtight container in the refrigerator for up to 1 week.',
            'Enjoy as a quick snack or pre-workout energy boost!'
        ],
        nutrition: {
            calories: 95,
            carbs: 10,
            protein: 3,
            fat: 5,
            fiber: 2,
            sugar: 6
        },
        tips: [
            { key: 'recipe.energy-balls.tip1', text: 'The mixture should be sticky enough to hold together when pressed' },
            { key: 'recipe.energy-balls.tip2', text: 'Wet your hands slightly when rolling to prevent sticking' },
            { key: 'recipe.energy-balls.tip3', text: 'You can add other low FODMAP ingredients like cacao powder or chopped nuts' },
            { key: 'recipe.energy-balls.tip4', text: 'These make great on-the-go snacks and can be frozen for longer storage' }
        ]
    },
    { 
        titleKey: 'recipe.oatmeal.title', 
        descKey: 'recipe.oatmeal.desc', 
        category: 'breakfast', 
        time: 10, 
        servings: 1,
        difficulty: 'easy',
        ingredients: [
            { name: 'Rolled oats', amount: '1/2 cup', notes: 'Old-fashioned oats' },
            { name: 'Lactose-free milk', amount: '1 cup', notes: 'Or almond milk' },
            { name: 'Banana', amount: '1/2 medium', notes: 'Ripe, mashed' },
            { name: 'Maple syrup', amount: '1 tbsp', notes: 'Pure maple syrup' },
            { name: 'Cinnamon', amount: '1/4 tsp', notes: 'Ground cinnamon' },
            { name: 'Salt', amount: '1 pinch', notes: 'Fine sea salt' },
            { name: 'Blueberries', amount: '1/4 cup', notes: 'Fresh or frozen' },
            { name: 'Chia seeds', amount: '1 tsp', notes: 'Optional topping' }
        ],
        instructions: [
            'In a small saucepan, combine oats, milk, mashed banana, maple syrup, cinnamon, and salt.',
            'Bring to a gentle boil over medium heat, stirring occasionally.',
            'Reduce heat to low and simmer for 5-7 minutes, stirring frequently, until oats are creamy and tender.',
            'Remove from heat and let stand for 2 minutes to thicken.',
            'Top with blueberries and chia seeds.',
            'Serve immediately while warm.'
        ],
        nutrition: {
            calories: 320,
            carbs: 55,
            protein: 12,
            fat: 8,
            fiber: 8,
            sugar: 20
        },
        tips: [
            { key: 'recipe.oatmeal.tip1', text: 'Mash the banana well for a creamier texture' },
            { key: 'recipe.oatmeal.tip2', text: 'Stir frequently to prevent sticking to the bottom' },
            { key: 'recipe.oatmeal.tip3', text: 'Add more milk if you prefer a thinner consistency' },
            { key: 'recipe.oatmeal.tip4', text: 'This recipe can be doubled or tripled for meal prep' }
        ]
    },
    { 
        titleKey: 'recipe.chicken-stir-fry.title', 
        descKey: 'recipe.chicken-stir-fry.desc', 
        category: 'dinner', 
        time: 20, 
        servings: 4,
        difficulty: 'medium',
        ingredients: [
            { name: 'Chicken breast', amount: '1 lb', notes: 'Cut into thin strips' },
            { name: 'Bell peppers', amount: '2 medium', notes: 'Red and yellow, sliced' },
            { name: 'Carrots', amount: '2 medium', notes: 'Julienned' },
            { name: 'Zucchini', amount: '1 medium', notes: 'Sliced into rounds' },
            { name: 'Soy sauce', amount: '3 tbsp', notes: 'Gluten-free tamari' },
            { name: 'Sesame oil', amount: '1 tbsp', notes: 'Toasted sesame oil' },
            { name: 'Ginger', amount: '1 tbsp', notes: 'Fresh, grated' },
            { name: 'Rice vinegar', amount: '1 tbsp', notes: 'Unseasoned' },
            { name: 'Brown rice', amount: '2 cups', notes: 'Cooked, for serving' },
            { name: 'Green onions', amount: '2 stalks', notes: 'Green parts only, sliced' }
        ],
        instructions: [
            'Heat a large wok or skillet over high heat. Add 1 tablespoon of sesame oil.',
            'Add chicken strips and cook for 4-5 minutes until golden and cooked through. Remove and set aside.',
            'Add remaining oil to the pan and add bell peppers and carrots. Stir-fry for 3-4 minutes.',
            'Add zucchini and continue cooking for 2-3 minutes until vegetables are crisp-tender.',
            'In a small bowl, whisk together soy sauce, ginger, and rice vinegar.',
            'Return chicken to the pan and add the sauce mixture.',
            'Toss everything together and cook for 1-2 minutes until heated through.',
            'Serve over brown rice and garnish with green onions.'
        ],
        nutrition: {
            calories: 280,
            carbs: 25,
            protein: 28,
            fat: 8,
            fiber: 4,
            sugar: 8
        },
        tips: [
            { key: 'recipe.chicken-stir-fry.tip1', text: 'Cut all vegetables to similar sizes for even cooking' },
            { key: 'recipe.chicken-stir-fry.tip2', text: 'Keep the heat high for a proper stir-fry technique' },
            { key: 'recipe.chicken-stir-fry.tip3', text: 'Have all ingredients prepped before starting to cook' },
            { key: 'recipe.chicken-stir-fry.tip4', text: 'Don\'t overcrowd the pan - cook in batches if needed' }
        ]
    },
    { 
        titleKey: 'recipe.smoothie.title', 
        descKey: 'recipe.smoothie.desc', 
        category: 'snacks', 
        time: 5, 
        servings: 1,
        difficulty: 'easy',
        ingredients: [
            { name: 'Frozen banana', amount: '1/2 medium', notes: 'Sliced and frozen' },
            { name: 'Lactose-free milk', amount: '1 cup', notes: 'Or almond milk' },
            { name: 'Spinach', amount: '1 cup', notes: 'Fresh baby spinach' },
            { name: 'Peanut butter', amount: '1 tbsp', notes: 'Natural, no added sugar' },
            { name: 'Chia seeds', amount: '1 tsp', notes: 'For extra nutrition' },
            { name: 'Vanilla extract', amount: '1/2 tsp', notes: 'Pure vanilla' },
            { name: 'Ice cubes', amount: '4-5 cubes', notes: 'Optional for thickness' }
        ],
        instructions: [
            'Add all ingredients to a high-powered blender.',
            'Start on low speed and gradually increase to high.',
            'Blend for 30-45 seconds until smooth and creamy.',
            'If too thick, add more milk. If too thin, add more ice.',
            'Taste and adjust sweetness if needed.',
            'Pour into a glass and serve immediately.'
        ],
        nutrition: {
            calories: 250,
            carbs: 35,
            protein: 12,
            fat: 8,
            fiber: 6,
            sugar: 25
        },
        tips: [
            { key: 'recipe.smoothie.tip1', text: 'Use frozen banana for a thicker, creamier texture' },
            { key: 'recipe.smoothie.tip2', text: 'Add spinach gradually if you\'re new to green smoothies' },
            { key: 'recipe.smoothie.tip3', text: 'Blend thoroughly to avoid leafy chunks' },
            { key: 'recipe.smoothie.tip4', text: 'Drink immediately for best texture and nutrition' }
        ]
    }
];

// Food search and filtering
let currentCategory = 'all';
let searchTerm = '';

function filterFoods() {
    const foodGrid = document.getElementById('food-grid');
    let filteredFoods = foodDatabase;

    // Filter by category
    if (currentCategory !== 'all') {
        filteredFoods = filteredFoods.filter(food => food.category === currentCategory);
    }

    // Filter by search term
    if (searchTerm) {
        filteredFoods = filteredFoods.filter(food => 
            t(food.nameKey).toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    // Display foods
    foodGrid.innerHTML = filteredFoods.map(food => `
        <div class="food-item">
            <div class="food-name">${t(food.nameKey)}</div>
            <div class="food-category">${t(`food-lists.categories.${food.category}`)}</div>
            <div class="food-status ${food.status}">${t(`food-lists.status.${food.status}`)}</div>
            <div class="food-serving">${t('food-lists.serving')} ${food.serving}</div>
        </div>
    `).join('');
}

// Category tab functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all tabs
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked tab
        btn.classList.add('active');
        // Update current category
        currentCategory = btn.dataset.category;
        // Filter foods
        filterFoods();
    });
});

// Search functionality
const searchInput = document.getElementById('food-search');
const searchBtn = document.querySelector('.search-btn');

searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value;
    filterFoods();
});

searchBtn.addEventListener('click', () => {
    searchTerm = searchInput.value;
    filterFoods();
});

// Recipe filtering
let currentRecipeFilter = 'all';

function filterRecipes() {
    const recipesGrid = document.getElementById('recipes-grid');
    let filteredRecipes = recipeDatabase;
    
    // Filter by category
    if (currentRecipeFilter !== 'all') {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.category === currentRecipeFilter);
    }
    
    // Display recipes
    recipesGrid.innerHTML = filteredRecipes.map(recipe => `
        <div class="recipe-card" data-category="${recipe.category}">
            <div class="recipe-image">
                <div class="recipe-placeholder">${getRecipeIcon(recipe.titleKey)}</div>
            </div>
            <div class="recipe-content">
                <h3>${t(recipe.titleKey)}</h3>
                <p>${t(recipe.descKey)}</p>
                <div class="recipe-meta">
                    <span class="time">${t('recipes.time', { time: recipe.time })}</span>
                    <span class="servings">${t('recipes.servings', { servings: recipe.servings })}</span>
                </div>
                <a href="#" class="recipe-link" data-recipe="${recipe.titleKey}">${t('recipes.view')}</a>
            </div>
        </div>
    `).join('');
}

function getRecipeIcon(recipeKey) {
    const icons = {
        'recipe.pancakes.title': '🥞✨',
        'recipe.buddha-bowl.title': '🥗🌱',
        'recipe.salmon.title': '🐟🍋',
        'recipe.energy-balls.title': '🍯⚡',
        'recipe.oatmeal.title': '🥣🍌',
        'recipe.chicken-stir-fry.title': '🍗🥕',
        'recipe.smoothie.title': '🥤💚'
    };
    return icons[recipeKey] || '🍽️';
}

// Recipe filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all filter buttons
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Update current filter
        currentRecipeFilter = btn.dataset.filter;
        // Filter recipes
        filterRecipes();
    });
});

// FAQ functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate feature cards
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Animate recipe cards
    document.querySelectorAll('.recipe-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Animate guide cards
    document.querySelectorAll('.guide-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Initialize food grid and recipes
    filterFoods();
    filterRecipes();
    
    // Initialize recipe modal functionality
    initRecipeModal();
});

// Recipe Modal Functions
function initRecipeModal() {
    const modal = document.getElementById('recipe-modal');
    const closeBtn = document.getElementById('close-recipe-modal');
    
    // Close modal when clicking close button
    closeBtn.addEventListener('click', closeRecipeModal);
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeRecipeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeRecipeModal();
        }
    });
    
    // Add click listeners to recipe links
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('recipe-link')) {
            e.preventDefault();
            const recipeKey = e.target.getAttribute('data-recipe');
            showRecipeModal(recipeKey);
        }
    });
}

function showRecipeModal(recipeKey) {
    const modal = document.getElementById('recipe-modal');
    const recipe = recipeDatabase.find(r => r.titleKey === recipeKey);
    
    if (!recipe) {
        console.error('Recipe not found:', recipeKey);
        return;
    }
    
    console.log('Showing recipe modal for:', recipeKey, recipe);
    
    // Update modal content
    document.getElementById('modal-recipe-title').textContent = t(recipe.titleKey);
    document.getElementById('modal-recipe-desc').textContent = t(recipe.descKey);
    document.getElementById('modal-recipe-icon').textContent = getRecipeIcon(recipe.titleKey);
    document.getElementById('modal-recipe-time-label').textContent = t('recipes.time', { time: recipe.time });
    document.getElementById('modal-recipe-servings-label').textContent = t('recipes.servings', { servings: recipe.servings });
    
    // Update section titles
    document.getElementById('modal-recipe-ingredients-title').textContent = t('recipes.ingredients');
    document.getElementById('modal-recipe-instructions-title').textContent = t('recipes.instructions');
    document.getElementById('modal-recipe-nutrition-title').textContent = t('recipes.nutrition');
    
    // Update ingredients with detailed information
    const ingredientsContainer = document.getElementById('modal-recipe-ingredients');
    ingredientsContainer.innerHTML = recipe.ingredients.map(ingredient => `
        <div class="ingredient-item">
            <div class="ingredient-name">${ingredient.nameKey ? t(ingredient.nameKey) : ingredient.name}</div>
            <div class="ingredient-amount">${ingredient.amountKey ? t(ingredient.amountKey) : ingredient.amount}</div>
            <div class="ingredient-notes">${ingredient.notesKey ? t(ingredient.notesKey) : ingredient.notes}</div>
        </div>
    `).join('');
    
    // Update instructions with step-by-step format
    const instructionsContainer = document.getElementById('modal-recipe-instructions');
    instructionsContainer.innerHTML = recipe.instructions.map((step, index) => `
        <div class="instruction-step">
            <div class="step-number">${index + 1}</div>
            <div class="step-text">${step.key ? t(step.key) : step.text || step}</div>
        </div>
    `).join('');
    
    // Update nutrition with detailed breakdown
    const nutritionContainer = document.getElementById('modal-recipe-nutrition');
    nutritionContainer.innerHTML = `
        <div class="nutrition-grid">
            <div class="nutrition-item">
                <span class="nutrition-label">${t('recipes.nutrition.calories')}:</span>
                <span class="nutrition-value">${recipe.nutrition.calories}</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-label">${t('recipes.nutrition.carbs')}:</span>
                <span class="nutrition-value">${recipe.nutrition.carbs}g</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-label">${t('recipes.nutrition.protein')}:</span>
                <span class="nutrition-value">${recipe.nutrition.protein}g</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-label">${t('recipes.nutrition.fat')}:</span>
                <span class="nutrition-value">${recipe.nutrition.fat}g</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-label">${t('recipes.nutrition.fiber')}:</span>
                <span class="nutrition-value">${recipe.nutrition.fiber}g</span>
            </div>
            <div class="nutrition-item">
                <span class="nutrition-label">${t('recipes.nutrition.sugar')}:</span>
                <span class="nutrition-value">${recipe.nutrition.sugar}g</span>
            </div>
        </div>
    `;
    
    // Update tips section
    document.getElementById('modal-recipe-tips-title').textContent = t('recipes.tips');
    const tipsContainer = document.getElementById('modal-recipe-tips');
    tipsContainer.innerHTML = recipe.tips.map(tip => `
        <div class="tip-item">
            <span class="tip-icon">💡</span>
            <span class="tip-text">${t(tip.key)}</span>
        </div>
    `).join('');
    
    // Update meta labels (they have data-i18n attributes)
    updateContent();
    
    // Store current recipe for language updates
    modal.dataset.currentRecipe = recipeKey;
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeRecipeModal() {
    const modal = document.getElementById('recipe-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function updateRecipeModal() {
    const modal = document.getElementById('recipe-modal');
    if (modal.style.display === 'block' && modal.dataset.currentRecipe) {
        const recipeKey = modal.dataset.currentRecipe;
        showRecipeModal(recipeKey);
    }
}

// 更新食谱弹窗中的翻译内容
function updateRecipeModalContent() {
    const modal = document.getElementById('recipe-modal');
    if (modal.style.display === 'block' && modal.dataset.currentRecipe) {
        const recipeKey = modal.dataset.currentRecipe;
        const recipe = recipeDatabase.find(r => r.titleKey === recipeKey);
        
        if (recipe) {
            // 更新标题和描述
            document.getElementById('modal-recipe-title').textContent = t(recipe.titleKey);
            document.getElementById('modal-recipe-desc').textContent = t(recipe.descKey);
            
            // 更新元信息
            document.getElementById('modal-recipe-time-label').textContent = t('recipes.time', { time: recipe.time });
            document.getElementById('modal-recipe-servings-label').textContent = t('recipes.servings', { servings: recipe.servings });
            
            // 更新章节标题
            document.getElementById('modal-recipe-ingredients-title').textContent = t('recipes.ingredients');
            document.getElementById('modal-recipe-instructions-title').textContent = t('recipes.instructions');
            document.getElementById('modal-recipe-nutrition-title').textContent = t('recipes.nutrition');
            
            // 更新营养成分标签
            const nutritionLabels = modal.querySelectorAll('.nutrition-label');
            nutritionLabels.forEach(label => {
                const text = label.textContent.replace(':', '');
                if (text === 'Calories' || text === '热量') {
                    label.textContent = t('recipes.nutrition.calories') + ':';
                } else if (text === 'Carbs' || text === '碳水') {
                    label.textContent = t('recipes.nutrition.carbs') + ':';
                } else if (text === 'Protein' || text === '蛋白质') {
                    label.textContent = t('recipes.nutrition.protein') + ':';
                } else if (text === 'Fat' || text === '脂肪') {
                    label.textContent = t('recipes.nutrition.fat') + ':';
                } else if (text === 'Fiber' || text === '纤维') {
                    label.textContent = t('recipes.nutrition.fiber') + ':';
                } else if (text === 'Sugar' || text === '糖分') {
                    label.textContent = t('recipes.nutrition.sugar') + ':';
                }
            });
            
            // 更新食材名称
            const ingredientNames = modal.querySelectorAll('.ingredient-name');
            ingredientNames.forEach((nameEl, index) => {
                if (recipe.ingredients[index] && recipe.ingredients[index].nameKey) {
                    nameEl.textContent = t(recipe.ingredients[index].nameKey);
                }
            });
            
            // 更新制作步骤
            const stepTexts = modal.querySelectorAll('.step-text');
            stepTexts.forEach((stepEl, index) => {
                if (recipe.instructions[index] && recipe.instructions[index].key) {
                    stepEl.textContent = t(recipe.instructions[index].key);
                }
            });
            
            // 更新提示标题
            const tipsTitle = document.getElementById('modal-recipe-tips-title');
            if (tipsTitle) {
                tipsTitle.textContent = t('recipes.tips');
            }
            
            // 重新生成营养成分标签以确保翻译正确
            const nutritionContainer = document.getElementById('modal-recipe-nutrition');
            if (nutritionContainer && recipe.nutrition) {
                nutritionContainer.innerHTML = `
                    <div class="nutrition-grid">
                        <div class="nutrition-item">
                            <span class="nutrition-label">${t('recipes.nutrition.calories')}:</span>
                            <span class="nutrition-value">${recipe.nutrition.calories}</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">${t('recipes.nutrition.carbs')}:</span>
                            <span class="nutrition-value">${recipe.nutrition.carbs}g</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">${t('recipes.nutrition.protein')}:</span>
                            <span class="nutrition-value">${recipe.nutrition.protein}g</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">${t('recipes.nutrition.fat')}:</span>
                            <span class="nutrition-value">${recipe.nutrition.fat}g</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">${t('recipes.nutrition.fiber')}:</span>
                            <span class="nutrition-value">${recipe.nutrition.fiber}g</span>
                        </div>
                        <div class="nutrition-item">
                            <span class="nutrition-label">${t('recipes.nutrition.sugar')}:</span>
                            <span class="nutrition-value">${recipe.nutrition.sugar}g</span>
                        </div>
                    </div>
                `;
            }
            
            // 更新提示内容
            const tipsContainer = document.getElementById('modal-recipe-tips');
            if (tipsContainer && recipe.tips) {
                tipsContainer.innerHTML = recipe.tips.map(tip => `
                    <div class="tip-item">
                        <span class="tip-icon">💡</span>
                        <span class="tip-text">${t(tip.key)}</span>
                    </div>
                `).join('');
            }
        }
    }
}

// AdSense placeholder function (for when ads are implemented)
function createAdPlaceholder(containerId, adSize = 'medium') {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `
            <div class="ad-container">
                <p>Advertisement Space</p>
                <p style="font-size: 12px; color: #999;">AdSense will be implemented here</p>
            </div>
        `;
    }
}

// Add ad placeholders in strategic locations
document.addEventListener('DOMContentLoaded', () => {
    // Add ad placeholder after first recipe card
    const recipesSection = document.querySelector('.recipes-grid');
    if (recipesSection) {
        const adDiv = document.createElement('div');
        adDiv.id = 'recipe-ad-1';
        adDiv.style.gridColumn = '1 / -1';
        adDiv.style.margin = '20px 0';
        recipesSection.appendChild(adDiv);
        createAdPlaceholder('recipe-ad-1');
    }

    // Add ad placeholder in food lists section
    const foodGrid = document.getElementById('food-grid');
    if (foodGrid) {
        const adDiv = document.createElement('div');
        adDiv.id = 'food-ad-1';
        adDiv.style.gridColumn = '1 / -1';
        adDiv.style.margin = '20px 0';
        foodGrid.appendChild(adDiv);
        createAdPlaceholder('food-ad-1');
    }
});

// Download functionality (placeholder)
document.querySelectorAll('.download-buttons a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('PDF download functionality will be implemented with actual file generation.');
    });
});

// Recipe link functionality (placeholder)
document.querySelectorAll('.recipe-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Individual recipe pages will be implemented in the next phase.');
    });
});

// Guide link functionality (placeholder)
document.querySelectorAll('.guide-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Individual guide pages will be implemented in the next phase.');
    });
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Analytics placeholder (for when Google Analytics is implemented)
function trackEvent(category, action, label) {
    console.log('Analytics Event:', { category, action, label });
    // gtag('event', action, {
    //     event_category: category,
    //     event_label: label
    // });
}

// Track user interactions
document.addEventListener('click', (e) => {
    if (e.target.matches('.btn-primary')) {
        trackEvent('Button', 'Click', 'Primary CTA');
    } else if (e.target.matches('.recipe-link')) {
        trackEvent('Recipe', 'View', e.target.closest('.recipe-card').querySelector('h3').textContent);
    } else if (e.target.matches('.tab-btn')) {
        trackEvent('Food List', 'Filter', e.target.dataset.category);
    }
});

// 国际化支持
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
    
    // 更新带有参数的翻译（如时间、份数）
    document.querySelectorAll('[data-time]').forEach(element => {
        const time = element.getAttribute('data-time');
        const text = t('recipes.time', { time: time });
        element.textContent = text;
    });
    
    document.querySelectorAll('[data-servings]').forEach(element => {
        const servings = element.getAttribute('data-servings');
        const text = t('recipes.servings', { servings: servings });
        element.textContent = text;
    });
    
    // 更新页面标题
    document.title = t('page.title') || 'Low FODMAP Diet Guide';
    
    // 更新meta描述
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.content = t('page.description') || 'Comprehensive Low FODMAP diet guide with recipes, food lists, and expert tips for IBS and digestive health.';
    }
}

// 更新食物状态显示
function updateFoodStatus() {
    document.querySelectorAll('.food-status').forEach(element => {
        const status = element.classList.contains('low') ? 'low' : 'high';
        const text = t(`food-lists.status.${status}`);
        element.textContent = text;
    });
}

// 监听语言变化
document.addEventListener('languageChanged', () => {
    updateContent();
    updateFoodStatus();
    filterFoods(); // 重新过滤食物列表
    filterRecipes(); // 重新过滤食谱
    updateRecipeModal(); // 更新食谱弹窗
    updateRecipeModalContent(); // 更新食谱弹窗中的翻译内容
});

console.log('Low FODMAP website loaded successfully!');
