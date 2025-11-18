import type { MenuItem, Category, User, StockItem, Table } from './types';

export const LOW_STOCK_THRESHOLD = 10;

export const USERS: User[] = [
  { id: 'u1', email: 'waiter@neon.pos', password: 'password', role: 'waiter' },
  { id: 'u2', email: 'cashier@neon.pos', password: 'password', role: 'cashier' },
  { id: 'u3', email: 'procurement@neon.pos', password: 'password', role: 'procurement' },
  { id: 'u4', email: 'accountant@neon.pos', password: 'password', role: 'accountant' },
  { id: 'u5', email: 'manager@neon.pos', password: 'password', role: 'manager' },
  { id: 'u6', email: 'director@neon.pos', password: 'password', role: 'director' },
  { id: 'u7', email: 'admin@gmail.com', password: '2025', role: 'director' },
  { id: 'u8', email: 'service@gmail.com', password: '2020', role: 'waiter' },
  { id: 'u9', email: 'cashier@gmail.com', password: '2021', role: 'cashier' },
];

export const TABLES: Table[] = [
  { id: 't1', name: 'Table 1', status: 'available' },
  { id: 't2', name: 'Table 2', status: 'available' },
  { id: 't3', name: 'Table 3', status: 'available' },
  { id: 't4', name: 'Table 4', status: 'available' },
  { id: 't5', name: 'Table 5', status: 'available' },
  { id: 't6', name: 'Table 6', status: 'available' },
  { id: 't7', name: 'Patio 1', status: 'available' },
  { id: 't8', name: 'Patio 2', status: 'available' },
  { id: 't9', name: 'Booth 1', status: 'available' },
  { id: 't10', name: 'Booth 2', status: 'available' },
  { id: 't11', name: 'Bar 1', status: 'available' },
  { id: 't12', name: 'Bar 2', status: 'available' },
];

export const STOCK_ITEMS: StockItem[] = [
  // Beverages & Drinks
  { id: 'si_coffee_beans', name: 'Coffee Beans', quantity: 5000, unit: 'g' },
  { id: 'si_tea_leaves', name: 'Tea Leaves', quantity: 2000, unit: 'g' },
  { id: 'si_milk', name: 'Milk', quantity: 20000, unit: 'ml' },
  { id: 'si_chocolate_powder', name: 'Chocolate Powder', quantity: 3000, unit: 'g' },
  { id: 'si_juice_base', name: 'Juice Base', quantity: 100, unit: 'pcs' },
  { id: 'si_smoothie_base', name: 'Smoothie Base', quantity: 100, unit: 'pcs' },
  { id: 'si_milkshake_base', name: 'Milkshake Base', quantity: 100, unit: 'pcs' },
  { id: 'si_mojito_base', name: 'Mojito Base', quantity: 100, unit: 'pcs' },
  { id: 'si_lemonade_base', name: 'Lemonade Base', quantity: 100, unit: 'pcs' },
  { id: 'si_soda_300', name: 'Soda 300ml', quantity: 200, unit: 'pcs' },
  { id: 'si_soda_500', name: 'Soda 500ml', quantity: 200, unit: 'pcs' },
  { id: 'si_water_still_300', name: 'Water Still 300ml', quantity: 100, unit: 'pcs' },
  { id: 'si_water_still_500', name: 'Water Still 500ml', quantity: 100, unit: 'pcs' },
  { id: 'si_water_sparkling_300', name: 'Water Sparkling 300ml', quantity: 100, unit: 'pcs' },
  { id: 'si_water_sparkling_500', name: 'Water Sparkling 500ml', quantity: 100, unit: 'pcs' },
  
  // Core Ingredients
  { id: 'si_egg', name: 'Egg', quantity: 500, unit: 'pcs' },
  { id: 'si_bread_slice', name: 'Bread Slice', quantity: 800, unit: 'pcs' },
  { id: 'si_bacon_slice', name: 'Bacon Slice', quantity: 1000, unit: 'pcs' },
  { id: 'si_sausage_beef', name: 'Sausage (Beef)', quantity: 400, unit: 'pcs' },
  { id: 'si_potato', name: 'Potato', quantity: 50000, unit: 'g' },
  { id: 'si_rice', name: 'Rice Portion', quantity: 500, unit: 'pcs' },
  { id: 'si_ugali_flour', name: 'Ugali Flour Portion', quantity: 300, unit: 'pcs' },
  { id: 'si_salad_base', name: 'Salad Base', quantity: 200, unit: 'pcs' },
  { id: 'si_tomato', name: 'Tomato', quantity: 10000, unit: 'g' },
  { id: 'si_onion', name: 'Onion', quantity: 10000, unit: 'g' },
  { id: 'si_avocado', name: 'Avocado', quantity: 100, unit: 'pcs' },
  { id: 'si_cheese', name: 'Cheese Slice/Portion', quantity: 500, unit: 'pcs' },
  
  // Meats & Proteins
  { id: 'si_burger_patty_beef', name: 'Burger Patty (Beef)', quantity: 200, unit: 'pcs' },
  { id: 'si_chicken_breast', name: 'Chicken Breast Portion', quantity: 150, unit: 'pcs' },
  { id: 'si_chicken_thighs', name: 'Chicken Thighs Portion', quantity: 150, unit: 'pcs' },
  { id: 'si_chicken_wings', name: 'Chicken Wing', quantity: 500, unit: 'pcs' },
  { id: 'si_beef_cubes', name: 'Beef Cubes Portion', quantity: 100, unit: 'pcs' },
  { id: 'si_goat_meat', name: 'Goat Meat Portion', quantity: 80, unit: 'pcs' },
  { id: 'si_lamb_chops', name: 'Lamb Chop', quantity: 100, unit: 'pcs' },
  { id: 'si_salmon_fillet', name: 'Salmon Fillet', quantity: 50, unit: 'pcs' },
  { id: 'si_red_snapper', name: 'Red Snapper Fillet', quantity: 50, unit: 'pcs' },
  { id: 'si_tilapia_whole', name: 'Tilapia (Whole)', quantity: 50, unit: 'pcs' },
  { id: 'si_prawns', name: 'Prawn Portion', quantity: 100, unit: 'pcs' },
  
  // Prepared & Bakery
  { id: 'si_pizza_base', name: 'Pizza Base', quantity: 100, unit: 'pcs' },
  { id: 'si_burger_bun', name: 'Burger Bun', quantity: 200, unit: 'pcs' },
  { id: 'si_shawarma_bread', name: 'Shawarma Bread', quantity: 100, unit: 'pcs' },
  { id: 'si_pasta_portion', name: 'Pasta Portion', quantity: 200, unit: 'pcs' },
  { id: 'si_pancake_mix', name: 'Pancake Mix Portion', quantity: 100, unit: 'pcs' },
  { id: 'si_waffle_mix', name: 'Waffle Mix Portion', quantity: 100, unit: 'pcs' },
  { id: 'si_samosa_beef', name: 'Samosa (Beef, frozen)', quantity: 200, unit: 'pcs' },
  { id: 'si_samosa_veg', name: 'Samosa (Spinach & Feta, frozen)', quantity: 150, unit: 'pcs' },
  { id: 'si_platter_base', name: 'Platter Base (serves 1)', quantity: 100, unit: 'pcs' },
  
  // Desserts & Pastries
  { id: 'si_dessert_slice', name: 'Dessert Slice (Cake/Tiramisu)', quantity: 150, unit: 'pcs' },
  { id: 'si_croissant', name: 'Croissant', quantity: 150, unit: 'pcs' },
  { id: 'si_ice_cream_scoop', name: 'Ice Cream Scoop', quantity: 500, unit: 'pcs' },
  
  // Kids Menu Specific
  { id: 'si_fish_finger', name: 'Fish Finger', quantity: 200, unit: 'pcs' },
  { id: 'si_chicken_tender', name: 'Chicken Tender', quantity: 200, unit: 'pcs' },
];


export const CATEGORIES: Category[] = [
  'Breakfast',
  'Hot Drinks',
  'Barista Corner',
  'Snacks',
  'Soups',
  'Chips Corner',
  'Main Dishes',
  'Signature Meals',
  'Chicken Corner',
  'Fish Dishes',
  'Pizza Corner',
  'Platters',
  'Accompaniments',
  'Smoothies',
  'Milk Shakes',
  'Fresh Grafted Juices',
  'Cold Drinks',
  'Kids Corner',
  'Extras',
];


export const MENU_ITEMS: MenuItem[] = [
  // Breakfast
  { id: 'bf-01', name: 'Gold Ark Breakfast', price: 350, category: 'Breakfast', recipe: [] },
  { id: 'bf-02', name: 'Gold Ark Best Breakfast', price: 500, category: 'Breakfast', recipe: [] },
  { id: 'bf-03', name: 'Kenyan Breakfast', price: 280, category: 'Breakfast', recipe: [] },
  { id: 'bf-04', name: 'Mini Breakfast', price: 350, category: 'Breakfast', recipe: [] },
  { id: 'bf-05', name: 'Special Breakfast', price: 350, category: 'Breakfast', recipe: [] },
  { id: 'bf-06', name: 'Gold Ark Combo', price: 600, category: 'Breakfast', recipe: [] },
  { id: 'bf-07', name: 'Main A (Bacon)', price: 600, category: 'Breakfast', recipe: [] },
  { id: 'bf-08', name: 'Main A (Sausage)', price: 500, category: 'Breakfast', recipe: [] },
  
  // Hot Drinks
  { id: 'hd-01', name: 'Tea Small', price: 70, category: 'Hot Drinks', recipe: [] },
  { id: 'hd-02', name: 'Tea Mug', price: 100, category: 'Hot Drinks', recipe: [] },
  { id: 'hd-03', name: 'Tea Masala', price: 80, category: 'Hot Drinks', recipe: [] },
  { id: 'hd-04', name: 'Special Tea', price: 120, category: 'Hot Drinks', recipe: [] },
  { id: 'hd-05', name: 'Black Coffee', price: 70, category: 'Hot Drinks', recipe: [] },
  { id: 'hd-06', name: 'White Milo', price: 80, category: 'Hot Drinks', recipe: [] },
  { id: 'hd-07', name: 'Black Milo', price: 70, category: 'Hot Drinks', recipe: [] },
  { id: 'hd-08', name: 'Black Tea', price: 50, category: 'Hot Drinks', recipe: [] },
  { id: 'hd-09', name: 'White Chocolate', price: 80, category: 'Hot Drinks', recipe: [] },
  { id: 'hd-10', name: 'Lemon Tea', price: 80, category: 'Hot Drinks', recipe: [] },
  { id: 'hd-11', name: 'Dawa with Honey', price: 150, category: 'Hot Drinks', recipe: [] },
  { id: 'hd-12', name: 'Uji Power', price: 150, category: 'Hot Drinks', recipe: [] },
  { id: 'hd-13', name: 'Milk', price: 100, category: 'Hot Drinks', recipe: [] },

  // Snacks
  { id: 'sn-01', name: 'Andazi', price: 50, category: 'Snacks', recipe: [] },
  { id: 'sn-02', name: 'Chapati', price: 60, category: 'Snacks', recipe: [] },
  { id: 'sn-03', name: 'Chapati Mayai', price: 170, category: 'Snacks', recipe: [] },
  { id: 'sn-04', name: 'Rolex', price: 250, category: 'Snacks', recipe: [] },
  { id: 'sn-05', name: '2 Fried Eggs', price: 100, category: 'Snacks', recipe: [] },
  { id: 'sn-06', name: 'Spanish Omelette', price: 150, category: 'Snacks', recipe: [] },
  { id: 'sn-07', name: '2 Kienyeji Eggs', price: 150, category: 'Snacks', recipe: [] },
  { id: 'sn-08', name: 'Nduma Plain', price: 120, category: 'Snacks', recipe: [] },
  { id: 'sn-09', name: 'Sweet Potatoes', price: 100, category: 'Snacks', recipe: [] },
  { id: 'sn-10', name: 'Samosa', price: 60, category: 'Snacks', recipe: [] },
  { id: 'sn-11', name: 'Samosa / Tea Special', price: 220, category: 'Snacks', recipe: [] },
  { id: 'sn-12', name: 'Sausage', price: 70, category: 'Snacks', recipe: [] },
  { id: 'sn-13', name: 'Sausage / Tea Special', price: 220, category: 'Snacks', recipe: [] },
  { id: 'sn-14', name: 'Nduma Veges', price: 180, category: 'Snacks', recipe: [] },
  { id: 'sn-15', name: 'Butter Toast', price: 80, category: 'Snacks', recipe: [] },
  { id: 'sn-16', name: 'Bacon', price: 250, category: 'Snacks', recipe: [] },
  { id: 'sn-17', name: '2 Pancakes', price: 150, category: 'Snacks', recipe: [] },
  { id: 'sn-18', name: 'Meat Pie', price: 120, category: 'Snacks', recipe: [] },
  { id: 'sn-19', name: 'Chicken Pie', price: 120, category: 'Snacks', recipe: [] },
  { id: 'sn-20', name: 'Kebab', price: 100, category: 'Snacks', recipe: [] },
  { id: 'sn-21', name: '2 Boiled Eggs', price: 120, category: 'Snacks', recipe: [] },
  { id: 'sn-22', name: 'Doughnuts', price: 50, category: 'Snacks', recipe: [] },
  { id: 'sn-23', name: 'French Toast', price: 180, category: 'Snacks', recipe: [] },

  // Soups
  { id: 'so-01', name: 'Chicken Soup', price: 300, category: 'Soups', recipe: [] },
  { id: 'so-02', name: 'Bone Soup', price: 100, category: 'Soups', recipe: [] },

  // Chips Corner
  { id: 'cc-01', name: 'Chips Salad', price: 150, category: 'Chips Corner', recipe: [] },
  { id: 'cc-02', name: 'Chips Spring', price: 180, category: 'Chips Corner', recipe: [] },
  { id: 'cc-03', name: 'Chips Masala', price: 200, category: 'Chips Corner', recipe: [] },
  { id: 'cc-04', name: 'Potato Wedges', price: 250, category: 'Chips Corner', recipe: [] },
  { id: 'cc-05', name: 'Bhajia', price: 250, category: 'Chips Corner', recipe: [] },
  { id: 'cc-06', name: 'Sortee Potato / Mayonese', price: 300, category: 'Chips Corner', recipe: [] },

  // Main Dishes
  { id: 'md-01', name: 'Njahi Plain', price: 200, category: 'Main Dishes', recipe: [] },
  { id: 'md-02', name: 'Njahi Rice', price: 300, category: 'Main Dishes', recipe: [] },
  { id: 'md-03', name: 'Githeri Plain', price: 200, category: 'Main Dishes', recipe: [] },
  { id: 'md-04', name: 'Githeri Special', price: 300, category: 'Main Dishes', recipe: [] },
  { id: 'md-05', name: 'Githeri Veges', price: 250, category: 'Main Dishes', recipe: [] },
  { id: 'md-06', name: 'Matoke Plain', price: 200, category: 'Main Dishes', recipe: [] },
  { id: 'md-07', name: 'Matoke Special', price: 300, category: 'Main Dishes', recipe: [] },
  { id: 'md-08', name: 'Matoke Rice', price: 300, category: 'Main Dishes', recipe: [] },
  { id: 'md-09', name: 'Matoke Njahi', price: 350, category: 'Main Dishes', recipe: [] },
  { id: 'md-10', name: 'Minji Plain', price: 250, category: 'Main Dishes', recipe: [] },
  { id: 'md-11', name: 'Minji Special', price: 300, category: 'Main Dishes', recipe: [] },
  { id: 'md-12', name: 'Minji Chapo', price: 300, category: 'Main Dishes', recipe: [] },
  { id: 'md-13', name: 'Beans', price: 200, category: 'Main Dishes', recipe: [] },
  { id: 'md-14', name: 'Pilau', price: 250, category: 'Main Dishes', recipe: [] },
  { id: 'md-15', name: 'Rice Vegs Plain', price: 200, category: 'Main Dishes', recipe: [] },
  { id: 'md-16', name: 'Beef Fry Chips', price: 450, category: 'Main Dishes', recipe: [] },
  { id: 'md-17', name: 'Beef Fry Pilau', price: 450, category: 'Main Dishes', recipe: [] },
  { id: 'md-18', name: 'Beef Fry Plain', price: 350, category: 'Main Dishes', recipe: [] },
  { id: 'md-19', name: 'Beef Ugali / Rice', price: 450, category: 'Main Dishes', recipe: [] },
  { id: 'md-20', name: 'Beef Chapati', price: 400, category: 'Main Dishes', recipe: [] },
  { id: 'md-21', name: 'Managu Plain', price: 150, category: 'Main Dishes', recipe: [] },
  { id: 'md-22', name: 'Vegetable Ugali', price: 200, category: 'Main Dishes', recipe: [] },
  { id: 'md-23', name: 'Matumbo Plain', price: 250, category: 'Main Dishes', recipe: [] },
  { id: 'md-24', name: 'Liver Plain', price: 350, category: 'Main Dishes', recipe: [] },
  { id: 'md-25', name: 'Liver Ugali / Rice', price: 450, category: 'Main Dishes', recipe: [] },
  { id: 'md-26', name: 'Liver Mukimo', price: 500, category: 'Main Dishes', recipe: [] },
  { id: 'md-27', name: 'Liver Chapati', price: 410, category: 'Main Dishes', recipe: [] },
  { id: 'md-28', name: 'Liver Matoke', price: 500, category: 'Main Dishes', recipe: [] },
  { id: 'md-29', name: 'Liver Pilau', price: 550, category: 'Main Dishes', recipe: [] },
  { id: 'md-30', name: 'Chips Combo', price: 350, category: 'Main Dishes', recipe: [] },

  // Platters
  { id: 'pl-01', name: 'Platter for 2', price: 1250, category: 'Platters', recipe: [] },
  { id: 'pl-02', name: 'Platter for 4', price: 1750, category: 'Platters', recipe: [] },
  { id: 'pl-03', name: 'Platter for 6', price: 2250, category: 'Platters', recipe: [] },

  // Accompaniments
  { id: 'ac-01', name: 'Ugali', price: 100, category: 'Accompaniments', recipe: [] },
  { id: 'ac-02', name: 'Ugali Brown', price: 120, category: 'Accompaniments', recipe: [] },
  { id: 'ac-03', name: 'Rice', price: 100, category: 'Accompaniments', recipe: [] },
  { id: 'ac-04', name: 'Chapati (Side)', price: 60, category: 'Accompaniments', recipe: [] },
  { id: 'ac-05', name: 'Mukimo', price: 150, category: 'Accompaniments', recipe: [] },
  { id: 'ac-06', name: 'Vegetable Plain', price: 100, category: 'Accompaniments', recipe: [] },
  { id: 'ac-07', name: 'Managu', price: 150, category: 'Accompaniments', recipe: [] },
  { id: 'ac-08', name: 'Kachumbari', price: 80, category: 'Accompaniments', recipe: [] },
  { id: 'ac-09', name: 'Coleslaw', price: 80, category: 'Accompaniments', recipe: [] },
  { id: 'ac-10', name: 'Gravy Sauce', price: 50, category: 'Accompaniments', recipe: [] },

  // Extras
  { id: 'ex-01', name: 'Honey Portion', price: 50, category: 'Extras', recipe: [] },
  { id: 'ex-02', name: 'Take Away Dish', price: 30, category: 'Extras', recipe: [] },
  { id: 'ex-03', name: 'Coffee Sachet', price: 20, category: 'Extras', recipe: [] },
  { id: 'ex-04', name: 'Milo Sachet', price: 20, category: 'Extras', recipe: [] },
  { id: 'ex-05', name: 'Chocolate Sachet', price: 20, category: 'Extras', recipe: [] },
  { id: 'ex-06', name: 'Tea Bags', price: 10, category: 'Extras', recipe: [] },
  { id: 'ex-07', name: 'Lemon', price: 20, category: 'Extras', recipe: [] },
  { id: 'ex-08', name: 'Lemon Water', price: 50, category: 'Extras', recipe: [] },
  { id: 'ex-09', name: 'Hot Water', price: 30, category: 'Extras', recipe: [] },

  // Chicken Corner
  { id: 'ck-01', name: '1/4 Chicken Kienyeji', price: 500, category: 'Chicken Corner', recipe: [] },
  { id: 'ck-02', name: '1/4 Chicken Plain Broiler', price: 300, category: 'Chicken Corner', recipe: [] },
  { id: 'ck-03', name: '1/4 Chicken with Chips', price: 450, category: 'Chicken Corner', recipe: [] },
  { id: 'ck-04', name: '1/4 Chicken Capon (Plain)', price: 300, category: 'Chicken Corner', recipe: [] },
  { id: 'ck-05', name: '1/4 Grilled Wet Capon', price: 400, category: 'Chicken Corner', recipe: [] },
  { id: 'ck-06', name: '1/4 Grilled Dry Capon', price: 400, category: 'Chicken Corner', recipe: [] },
  { id: 'ck-07', name: '1/4 Kienyeji Grilled', price: 600, category: 'Chicken Corner', recipe: [] },
  { id: 'ck-08', name: 'Full Kienyeji', price: 1800, category: 'Chicken Corner', recipe: [] },
  { id: 'ck-09', name: 'Marryland Chicken', price: 400, category: 'Chicken Corner', recipe: [] },
  { id: 'ck-10', name: 'Chicken Curry', price: 400, category: 'Chicken Corner', recipe: [] },

  // Fish Dishes
  { id: 'fd-01', name: 'White Fish Dry', price: 500, category: 'Fish Dishes', recipe: [] },
  { id: 'fd-02', name: 'White Fish Wet', price: 500, category: 'Fish Dishes', recipe: [] },
  { id: 'fd-03', name: 'Coconut Fish', price: 600, category: 'Fish Dishes', recipe: [] },
  { id: 'fd-04', name: 'Fish Fillet (Wet / Dry)', price: 550, category: 'Fish Dishes', recipe: [] },

  // Signature Meals
  { id: 'sm-01', name: '1/4 Grilled Pork Chop', price: 600, category: 'Signature Meals', recipe: [] },
  { id: 'sm-02', name: '1/4 Wet Fry Mbuzi', price: 600, category: 'Signature Meals', recipe: [] },
  { id: 'sm-03', name: '1/4 Fry Kienyeji Chicken', price: 500, category: 'Signature Meals', recipe: [] },
  { id: 'sm-04', name: 'Chicken Biriani', price: 500, category: 'Signature Meals', recipe: [] },
  { id: 'sm-05', name: 'Beef Biriani', price: 500, category: 'Signature Meals', recipe: [] },

  // Smoothies
  { id: 'smo-01', name: 'Mango Smoothie', price: 400, category: 'Smoothies', recipe: [] },
  { id: 'smo-02', name: 'Banana Smoothie', price: 400, category: 'Smoothies', recipe: [] },
  { id: 'smo-03', name: 'Tropical Smoothie', price: 400, category: 'Smoothies', recipe: [] },
  { id: 'smo-04', name: 'Passion Smoothie', price: 400, category: 'Smoothies', recipe: [] },
  { id: 'smo-05', name: 'Avocado Smoothie', price: 400, category: 'Smoothies', recipe: [] },

  // Milk Shakes
  { id: 'ms-01', name: 'Vanilla Shake', price: 350, category: 'Milk Shakes', recipe: [] },
  { id: 'ms-02', name: 'Strawberry Shake', price: 350, category: 'Milk Shakes', recipe: [] },
  { id: 'ms-03', name: 'Orion Shake', price: 400, category: 'Milk Shakes', recipe: [] },
  { id: 'ms-04', name: 'Blue Berry Shake', price: 400, category: 'Milk Shakes', recipe: [] },
  { id: 'ms-05', name: 'Chocolate Shake', price: 350, category: 'Milk Shakes', recipe: [] },

  // Cold Drinks
  { id: 'cd-01', name: 'Soda 300ml', price: 100, category: 'Cold Drinks', recipe: [] },
  { id: 'cd-02', name: 'Novida', price: 100, category: 'Cold Drinks', recipe: [] },
  { id: 'cd-03', name: 'Predator', price: 100, category: 'Cold Drinks', recipe: [] },
  { id: 'cd-04', name: 'Afia', price: 100, category: 'Cold Drinks', recipe: [] },
  { id: 'cd-05', name: 'Minute Maid', price: 120, category: 'Cold Drinks', recipe: [] },
  { id: 'cd-06', name: 'Pet Plastic 500ml', price: 120, category: 'Cold Drinks', recipe: [] },
  { id: 'cd-07', name: 'Dasani 500ml', price: 70, category: 'Cold Drinks', recipe: [] },
  { id: 'cd-08', name: 'Dasani 1Ltr', price: 110, category: 'Cold Drinks', recipe: [] },
  { id: 'cd-09', name: 'Keringet 500ml', price: 80, category: 'Cold Drinks', recipe: [] },
  { id: 'cd-10', name: 'Keringet 1 Ltr', price: 150, category: 'Cold Drinks', recipe: [] },
  { id: 'cd-11', name: 'Safari Water 500ml', price: 50, category: 'Cold Drinks', recipe: [] },
  { id: 'cd-12', name: 'Safari Water 1Ltr', price: 80, category: 'Cold Drinks', recipe: [] },

  // Fresh Grafted Juices
  { id: 'fgj-01', name: 'Passion', price: 150, category: 'Fresh Grafted Juices', recipe: [] },
  { id: 'fgj-02', name: 'Mango', price: 150, category: 'Fresh Grafted Juices', recipe: [] },
  { id: 'fgj-03', name: 'Cocktail', price: 150, category: 'Fresh Grafted Juices', recipe: [] },
  { id: 'fgj-04', name: 'Pineapple Mint', price: 150, category: 'Fresh Grafted Juices', recipe: [] },
  { id: 'fgj-05', name: 'Tamarind', price: 150, category: 'Fresh Grafted Juices', recipe: [] },
  { id: 'fgj-06', name: 'Hibiscus Juice', price: 150, category: 'Fresh Grafted Juices', recipe: [] },
  { id: 'fgj-07', name: 'Lemonade', price: 200, category: 'Fresh Grafted Juices', recipe: [] },

  // Barista Corner
  { id: 'bc-01', name: 'Capuccino', price: 150, category: 'Barista Corner', recipe: [] },
  { id: 'bc-02', name: 'Espresso (Single Shot)', price: 50, category: 'Barista Corner', recipe: [] },
  { id: 'bc-03', name: 'Espresso (Double Shot)', price: 100, category: 'Barista Corner', recipe: [] },
  { id: 'bc-04', name: 'Moccaccino (Café Mocha)', price: 150, category: 'Barista Corner', recipe: [] },
  { id: 'bc-05', name: 'Black Coffee (Americano)', price: 100, category: 'Barista Corner', recipe: [] },
  { id: 'bc-06', name: 'Latte Machcato', price: 100, category: 'Barista Corner', recipe: [] },
  { id: 'bc-07', name: 'White Coffee (Café Latte)', price: 100, category: 'Barista Corner', recipe: [] },
  { id: 'bc-08', name: 'Chocolate Milk', price: 100, category: 'Barista Corner', recipe: [] },
  { id: 'bc-09', name: 'Chocolate', price: 100, category: 'Barista Corner', recipe: [] },

  // Pizza Corner
  { id: 'pz-01', name: 'Barbeque Steak (Large)', price: 1100, category: 'Pizza Corner', recipe: [] },
  { id: 'pz-02', name: 'Barbeque Steak (Medium)', price: 900, category: 'Pizza Corner', recipe: [] },
  { id: 'pz-03', name: 'Chicken Barbeque (Large)', price: 1100, category: 'Pizza Corner', recipe: [] },
  { id: 'pz-04', name: 'Chicken Barbeque (Medium)', price: 900, category: 'Pizza Corner', recipe: [] },
  { id: 'pz-05', name: 'Chicken Peri Peri (Large)', price: 1100, category: 'Pizza Corner', recipe: [] },
  { id: 'pz-06', name: 'Chicken Peri Peri (Medium)', price: 900, category: 'Pizza Corner', recipe: [] },
  { id: 'pz-07', name: 'Hawaiian (Large)', price: 1100, category: 'Pizza Corner', recipe: [] },
  { id: 'pz-08', name: 'Hawaiian (Medium)', price: 900, category: 'Pizza Corner', recipe: [] },
  { id: 'pz-09', name: 'Chicken Tikka (Large)', price: 1100, category: 'Pizza Corner', recipe: [] },
  { id: 'pz-10', name: 'Chicken Tikka (Medium)', price: 900, category: 'Pizza Corner', recipe: [] },

  // Kids Corner
  { id: 'kc-01', name: 'Stir Fry Chicken', price: 600, category: 'Kids Corner', recipe: [] },
  { id: 'kc-02', name: 'Chicken Wings', price: 450, category: 'Kids Corner', recipe: [] },
  { id: 'kc-03', name: 'Meat Balls / Chicken Nuggets', price: 450, category: 'Kids Corner', recipe: [] },
];
