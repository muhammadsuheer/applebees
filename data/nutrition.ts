export interface NutritionItem {
  id: string;
  name: string;
  serving: string;
  calories: number;
  fat: number;
  satFat: number;
  transFat: number;
  cholesterol: number;
  sodium: number;
  carbs: number;
  fiber: number;
  sugars: number;
  protein: number;
  dietaryTags?: string[];
  allergens?: string[];
}

export interface NutritionCategory {
  title: string;
  items: NutritionItem[];
}

// Full Category Nutrition Data (Exact figures verified from master data)
export const nutritionData: NutritionCategory[] = [
  {
    title: "Appetizers",
    items: [
      { id: "a1", name: "Boneless Wings – Classic Hot Buffalo", serving: "1 Serving", calories: 1080, fat: 76, satFat: 18, transFat: 0.5, cholesterol: 105, sodium: 4720, carbs: 58, fiber: 4, sugars: 2, protein: 40, allergens: ["Milk", "Wheat", "Soy"] },
      { id: "a2", name: "Boneless Wings – Garlic Parmesan / Bleu Cheese", serving: "1 Serving", calories: 1260, fat: 94, satFat: 19, transFat: 1, cholesterol: 115, sodium: 2710, carbs: 60, fiber: 5, sugars: 2, protein: 42, allergens: ["Milk", "Eggs", "Wheat", "Soy"] },
      { id: "a3", name: "Brew Pub Pretzels & Beer Cheese Dip", serving: "1 Serving", calories: 1160, fat: 49, satFat: 15, transFat: 0, cholesterol: 55, sodium: 3540, carbs: 146, fiber: 6, sugars: 17, protein: 34, dietaryTags: ["Vegetarian"], allergens: ["Milk", "Wheat", "Soy"] },
      { id: "a4", name: "Spinach & Artichoke Dip", serving: "1 Serving", calories: 990, fat: 61, satFat: 14, transFat: 0.5, cholesterol: 25, sodium: 2340, carbs: 89, fiber: 9, sugars: 7, protein: 21, dietaryTags: ["Vegetarian"], allergens: ["Milk", "Wheat", "Soy"] },
      { id: "a5", name: "Mozzarella Sticks", serving: "1 Serving", calories: 860, fat: 44, satFat: 18, transFat: 1, cholesterol: 60, sodium: 2440, carbs: 76, fiber: 7, sugars: 12, protein: 41, dietaryTags: ["Vegetarian"], allergens: ["Milk", "Wheat", "Soy"] },
      { id: "a6", name: "Chicken Quesadilla", serving: "1 Serving", calories: 1170, fat: 74, satFat: 34, transFat: 0.5, cholesterol: 175, sodium: 2590, carbs: 77, fiber: 4, sugars: 9, protein: 49, allergens: ["Milk", "Wheat", "Soy"] }
    ]
  },
  {
    title: "Salads & Soups",
    items: [
      { id: "ss1", name: "House Salad (Fat Free Italian)", serving: "1 Serving", calories: 160, fat: 7, satFat: 3, transFat: 0, cholesterol: 15, sodium: 610, carbs: 19, fiber: 3, sugars: 7, protein: 6, dietaryTags: ["Vegan", "Low Calorie"], allergens: [] },
      { id: "ss2", name: "Tomato Basil Soup", serving: "1 Serving", calories: 210, fat: 12, satFat: 6, transFat: 0, cholesterol: 25, sodium: 1260, carbs: 22, fiber: 2, sugars: 8, protein: 5, dietaryTags: ["Vegetarian"], allergens: ["Milk"] },
      { id: "ss3", name: "French Onion Soup", serving: "1 Serving", calories: 370, fat: 21, satFat: 12, transFat: 0, cholesterol: 55, sodium: 1250, carbs: 26, fiber: 2, sugars: 9, protein: 16, allergens: ["Milk", "Wheat", "Soy"] },
      { id: "ss4", name: "Grilled Chicken Caesar Salad", serving: "1 Serving", calories: 950, fat: 57, satFat: 12, transFat: 1, cholesterol: 175, sodium: 2200, carbs: 56, fiber: 8, sugars: 10, protein: 57, dietaryTags: ["High Protein"], allergens: ["Milk", "Eggs", "Wheat", "Fish"] },
      { id: "ss5", name: "Oriental Chicken Salad (Crispy)", serving: "1 Serving", calories: 1560, fat: 105, satFat: 17, transFat: 1, cholesterol: 70, sodium: 1650, carbs: 118, fiber: 12, sugars: 45, protein: 40, allergens: ["Wheat", "Soy", "Tree Nuts"] }
    ]
  },
  {
    title: "Steaks, Ribs & Chicken",
    items: [
      { id: "src1", name: "6 oz. Top Sirloin", serving: "1 Serving", calories: 760, fat: 47, satFat: 14, transFat: 1, cholesterol: 145, sodium: 2180, carbs: 45, fiber: 7, sugars: 6, protein: 43, dietaryTags: ["High Protein", "GF Options"], allergens: ["Milk", "Soy"] },
      { id: "src2", name: "Double-Glazed Baby Back Ribs (Half Rack)", serving: "1 Serving", calories: 760, fat: 42, satFat: 12, transFat: 0, cholesterol: 140, sodium: 1300, carbs: 53, fiber: 6, sugars: 0, protein: 44, allergens: ["Soy"] },
      { id: "src3", name: "8 oz. Top Sirloin", serving: "1 Serving", calories: 830, fat: 49, satFat: 15, transFat: 1, cholesterol: 190, sodium: 2310, carbs: 45, fiber: 7, sugars: 7, protein: 55, dietaryTags: ["High Protein", "GF Options"], allergens: ["Milk", "Soy"] },
      { id: "src4", name: "Bourbon Street Chicken & Shrimp", serving: "1 Serving", calories: 1010, fat: 66, satFat: 14, transFat: 1, cholesterol: 235, sodium: 2910, carbs: 49, fiber: 7, sugars: 8, protein: 57, allergens: ["Milk", "Soy", "Shellfish"] },
      { id: "src5", name: "Fiesta Lime Chicken", serving: "1 Serving", calories: 1190, fat: 62, satFat: 15, transFat: 1, cholesterol: 180, sodium: 3630, carbs: 98, fiber: 6, sugars: 9, protein: 61, allergens: ["Milk", "Wheat", "Soy"] },
      { id: "src6", name: "Bourbon Street Steak", serving: "1 Serving", calories: 1430, fat: 88, satFat: 25, transFat: 1.5, cholesterol: 220, sodium: 3430, carbs: 88, fiber: 8, sugars: 12, protein: 71, allergens: ["Milk", "Soy"] }
    ]
  },
  {
    title: "Seafood & Pasta",
    items: [
      { id: "sp1", name: "Blackened Cajun Salmon", serving: "1 Serving", calories: 850, fat: 55, satFat: 14, transFat: 1, cholesterol: 105, sodium: 2050, carbs: 49, fiber: 8, sugars: 7, protein: 44, dietaryTags: ["Pescatarian"], allergens: ["Fish", "Milk", "Soy"] },
      { id: "sp2", name: "Three-Cheese Chicken Penne", serving: "1 Serving", calories: 1350, fat: 71, satFat: 40, transFat: 2, cholesterol: 315, sodium: 2720, carbs: 102, fiber: 7, sugars: 12, protein: 77, allergens: ["Milk", "Wheat", "Soy"] },
      { id: "sp3", name: "Four-Cheese Mac & Cheese with Honey Pepper Tenders", serving: "1 Serving", calories: 1360, fat: 55, satFat: 19, transFat: 1, cholesterol: 135, sodium: 3300, carbs: 160, fiber: 7, sugars: 44, protein: 55, allergens: ["Milk", "Wheat", "Soy"] },
      { id: "sp4", name: "Hand-Battered Fish & Chips", serving: "1 Serving", calories: 1680, fat: 117, satFat: 25, transFat: 0.5, cholesterol: 165, sodium: 3500, carbs: 117, fiber: 11, sugars: 22, protein: 43, allergens: ["Fish", "Wheat", "Soy", "Milk"] }
    ]
  },
  {
    title: "Burgers & Sandwiches",
    items: [
      { id: "bs1", name: "Impossible Cheeseburger", serving: "1 Serving", calories: 1090, fat: 59, satFat: 20, transFat: 0, cholesterol: 35, sodium: 2910, carbs: 102, fiber: 12, sugars: 9, protein: 39, dietaryTags: ["Vegetarian"], allergens: ["Milk", "Wheat", "Soy"] },
      { id: "bs2", name: "Classic Cheeseburger", serving: "1 Serving", calories: 1220, fat: 72, satFat: 25, transFat: 1.5, cholesterol: 120, sodium: 2640, carbs: 95, fiber: 7, sugars: 9, protein: 50, allergens: ["Milk", "Wheat", "Soy"] },
      { id: "bs3", name: "Bacon Ranch Chicken Sandwich (Grilled)", serving: "1 Serving", calories: 1400, fat: 86, satFat: 18, transFat: 1, cholesterol: 180, sodium: 3490, carbs: 94, fiber: 7, sugars: 10, protein: 64, allergens: ["Milk", "Eggs", "Wheat", "Soy"] },
      { id: "bs4", name: "Whisky Bacon Burger", serving: "1 Serving", calories: 1590, fat: 97, satFat: 32, transFat: 1.5, cholesterol: 150, sodium: 3050, carbs: 119, fiber: 9, sugars: 20, protein: 63, allergens: ["Milk", "Wheat", "Soy"] }
    ]
  },
  {
    title: "Sides & Desserts",
    items: [
      { id: "sd1", name: "Steamed Broccoli", serving: "1 Serving", calories: 100, fat: 8, satFat: 1, transFat: 0, cholesterol: 0, sodium: 200, carbs: 7, fiber: 3, sugars: 2, protein: 3, dietaryTags: ["Gluten-Free"], allergens: [] },
      { id: "sd2", name: "Garlicky Green Beans", serving: "1 Serving", calories: 150, fat: 12, satFat: 2, transFat: 0, cholesterol: 0, sodium: 550, carbs: 10, fiber: 4, sugars: 2, protein: 2, dietaryTags: ["Gluten-Free"], allergens: [] },
      { id: "sd3", name: "Brownie Bite", serving: "1 Serving", calories: 330, fat: 15, satFat: 8, transFat: 0, cholesterol: 35, sodium: 190, carbs: 48, fiber: 2, sugars: 34, protein: 4, allergens: ["Milk", "Eggs", "Wheat", "Soy"] },
      { id: "sd4", name: "Classic Fries (Side)", serving: "1 Serving", calories: 400, fat: 20, satFat: 3, transFat: 0, cholesterol: 0, sodium: 800, carbs: 50, fiber: 4, sugars: 0, protein: 4, allergens: ["Soy"] },
      { id: "sd5", name: "Triple Chocolate Meltdown", serving: "1 Serving", calories: 910, fat: 48, satFat: 25, transFat: 1, cholesterol: 130, sodium: 640, carbs: 116, fiber: 5, sugars: 87, protein: 12, allergens: ["Milk", "Eggs", "Wheat", "Soy"] }
    ]
  }
];

export const kidsMenuData = [
  { name: "Kids Applesauce", calories: 90, protein: "0g", sodium: "10mg" },
  { name: "Kids Grilled Chicken", calories: 180, protein: "32g", sodium: "650mg" },
  { name: "Kids Chicken Tenders", calories: 420, protein: "24g", sodium: "1,150mg" },
  { name: "Kids Macaroni & Cheese", calories: 510, protein: "18g", sodium: "1,350mg" }
];

export const drinkCaloriesData = [
  { name: "Miller Lite (16 oz draft)", calories: 130, sugars: "0g", abv: "4.2%" },
  { name: "Blue Moon (16 oz draft)", calories: 220, sugars: "0g", abv: "5.4%" },
  { name: "Mucho Margarita (frozen)", calories: 650, sugars: "75g", abv: "Varies" },
  { name: "Oreo Cookie Shake", calories: 840, sugars: "72g", abv: "0%" }
];
