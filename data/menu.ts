export interface MenuItem {
  id: string;
  name: string;
  calories: string;
  price: string;
  description?: string;
  tableDescription?: string;
  image?: string;
}

export interface MenuCategory {
  title: string;
  slug: string;
  image?: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "New Items",
    slug: "new-items",
    image: "/apple-bees-menu/applebees-new-menu-items-2026-category.webp",
    items: [
      { 
        id: "n1", name: "Whole Lotta Bacon Burger", calories: "1150 Cals", price: "$15.99",
        description: "A bacon-forward handcrafted burger centered around an all-beef patty, melted cheddar cheese, thick-cut Applewood-smoked bacon, and savory bacon jam on a toasted brioche bun.",
        tableDescription: "All-beef burger centered on Applewood-smoked bacon.",
        image: "/apple-bees-menu/applebees-whole-lotta-bacon-burger-menu-item.webp"
      },
      { 
        id: "n2", name: "Sweet & Spicy Chicken Sandwich", calories: "980 Cals", price: "$13.99",
        description: "Crispy battered chicken breast smothered in a signature sweet chili honey glaze, topped with crisp pickles and served on a toasted bun.",
        tableDescription: "Crispy chicken sandwich with sweet-and-spicy sauce.",
        image: "/apple-bees-menu/applebees-sweet-spicy-crispy-chicken-sandwich.webp"
      }
    ]
  },
  {
    title: "Ultimate Trio",
    slug: "ultimate-trio",
    image: "/apple-bees-menu/applebees-ultimate-trio-appetizer-category.webp",
    items: [
      { 
        id: "u1", name: "Classic Combo", calories: "2200 Cals", price: "$18.99",
        description: "The Applebee’s Classic Combo brings several core appetizers into one shareable order, including Boneless Wings, Spinach & Artichoke Dip, Chicken Quesadilla, and Mozzarella Sticks.",
        tableDescription: "Shareable combo with wings, dip, quesadilla, and mozzarella sticks.",
        image: "/apple-bees-menu/applebees-classic-combo-appetizer-trio-platter.webp"
      },
      { 
        id: "u2", name: "Ultimate Trio", calories: "1850 Cals", price: "$16.99",
        description: "The Ultimate Trio lets guests choose three appetizers and pair them with three dipping sauces.",
        tableDescription: "Choose three appetizers and three dipping sauces.",
        image: "/apple-bees-menu/applebees-appetizer-sampler-platter.webp"
      }
    ]
  },
  {
    title: "SKILLETS",
    slug: "skillets",
    image: "/apple-bees-menu/applebees-sizzling-skillets-menu-category.webp",
    items: [
      { 
        id: "sk1", name: "Bourbon Street Chicken & Shrimp", calories: "790 Cals", price: "$17.99",
        description: "Applebee’s Bourbon Street Chicken & Shrimp combines Cajun-seasoned chicken and blackened shrimp with buttery garlic and parsley, sautéed mushrooms and onions, plus garlic mashed potatoes.",
        tableDescription: "Cajun chicken and blackened shrimp with garlic, mushrooms, and mashed potatoes.",
        image: "/apple-bees-menu/applebees-bourbon-street-chicken-and-shrimp-skillet.webp"
      }
    ]
  },
  {
    title: "Signature Cocktails To Go",
    slug: "signature-cocktails",
    image: "/apple-bees-menu/applebees-signature-cocktails-drinks-category.webp",
    items: [
      { 
        id: "c1", name: "Mucho Blue Hawaiian", calories: "350 Cals", price: "$9.99",
        description: "A tropical blue cocktail from Applebee’s bar menu.",
        tableDescription: "Tropical blue cocktail; recipe and availability can rotate.",
        image: "/apple-bees-menu/applebees-mucho-blue-hawaiian-cocktail.webp"
      },
      { 
        id: "c2", name: "Shark Bowl", calories: "420 Cals", price: "$10.99",
        description: "A colorful specialty cocktail known for its playful presentation and fruit-forward profile.",
        tableDescription: "Fruit-forward specialty cocktail with a playful presentation.",
        image: "/apple-bees-menu/applebees-shark-bowl-signature-drink.webp"
      },
      { 
        id: "c3", name: "Dollarita (House Margarita)", calories: "310 Cals", price: "$1.00",
        description: "Applebee’s DOLLARITA is a promotional $1 margarita that returns for limited campaigns rather than a permanent everyday menu price.",
        tableDescription: "Limited-time promotional house margarita; verify active dates.",
        image: "/apple-bees-menu/applebees-dollarita-house-margarita-cocktail.webp"
      },
      { 
        id: "c4", name: "Top Shelf Long Island Iced Tea", calories: "380 Cals", price: "$11.99",
        description: "A Long Island-style cocktail made with a higher-tier spirit blend and citrus-style mixers.",
        tableDescription: "Long Island-style cocktail using a premium spirit blend.",
        image: "/apple-bees-menu/applebees-top-shelf-long-island-iced-tea.webp"
      },
      { 
        id: "c5", name: "Bacardí Blushing Dragon Mucho", calories: "330 Cals", price: "$10.00",
        description: "A Bacardí-based Mucho cocktail with dragon fruit, lemon-sour and lemonade flavors.",
        tableDescription: "Bacardí cocktail with dragon fruit, lemon-sour, and lemonade flavors.",
        image: "/apple-bees-menu/applebees-bacardi-blushing-dragon-mucho-cocktail.webp"
      }
    ]
  },
  {
    title: "APPETIZERS",
    slug: "appetizers",
    image: "/apple-bees-menu/applebees-appetizers-starters-menu-category.webp",
    items: [
      { 
        id: "a4", name: "Chicken Wonton Tacos", calories: "590 Cals", price: "$11.49",
        description: "Sweet Asian chile-marinated grilled chicken in crispy wonton shells, finished with crunchy Asian slaw and fresh cilantro.",
        tableDescription: "Crispy wonton tacos with chile-marinated chicken, slaw, and cilantro.",
        image: "/apple-bees-menu/applebees-chicken-wonton-tacos-appetizer.webp"
      },
      { 
        id: "a2", name: "Mozzarella Sticks", calories: "860 Cals", price: "$9.99",
        description: "Eight thick-cut mozzarella cheese sticks coated in Italian breadcrumbs and fried golden, served with warm marinara dipping sauce.",
        tableDescription: "Crispy mozzarella sticks served with marinara sauce.",
        image: "/apple-bees-menu/applebees-mozzarella-sticks-with-marinara.webp"
      },
      { 
        id: "a1", name: "Spinach & Artichoke Dip", calories: "990 Cals", price: "$10.49",
        description: "Creamy warm spinach and artichoke dip baked with Parmesan and mozzarella, served with fresh tortilla chips and chipotle lime salsa.",
        tableDescription: "Creamy spinach-artichoke dip with Parmesan, chips, and salsa.",
        image: "/apple-bees-menu/applebees-spinach-artichoke-dip-appetizer.webp"
      },
      { 
        id: "a3", name: "Boneless Wings", calories: "1080 Cals", price: "$12.99",
        description: "Crispy breaded all-white-meat chicken breast pieces tossed in your choice of signature sauce: Classic Hot Buffalo, Honey BBQ, Sweet Asian Chile, or Garlic Parmesan.",
        tableDescription: "Breaded boneless chicken tossed in a choice of wing sauce.",
        image: "/apple-bees-menu/applebees-boneless-wings-honey-bbq.webp"
      },
      { 
        id: "a5", name: "Brew Pub Pretzels & Beer Cheese Dip", calories: "1160 Cals", price: "$10.99",
        description: "Warm, soft Bavarian-style pretzel sticks brushed with butter and served with Blue Moon® white Cheddar beer cheese and honey Dijon mustard.",
        tableDescription: "Bavarian-style pretzel sticks with beer cheese and honey Dijon.",
        image: "/apple-bees-menu/applebees-brew-pub-pretzels-beer-cheese-dip.webp"
      },
      { 
        id: "a6", name: "Chicken Quesadilla", calories: "1170 Cals", price: "$11.99",
        description: "Grilled flour tortilla loaded with chipotle-lime chicken, melted Monterey Jack and Cheddar cheeses, bacon, and pico de gallo, served with sour cream and salsa.",
        tableDescription: "Grilled tortillas with chipotle chicken, pico de gallo, and Cheddar.",
        image: "/apple-bees-menu/applebees-chicken-quesadilla-appetizer.webp"
      },
      { 
        id: "a7", name: "The Classic Combo", calories: "2200 Cals", price: "$18.99",
        description: "A shareable four-item platter bringing together Boneless Wings, Spinach & Artichoke Dip with chips, Chicken Quesadilla wedges, and Mozzarella Sticks.",
        tableDescription: "Four-item shareable sampler platter with wings, dip, quesadillas, and mozz sticks.",
        image: "/apple-bees-menu/applebees-classic-combo-appetizer-trio-platter.webp"
      }
    ]
  },
  {
    title: "STEAKS & RIBS",
    slug: "steaks-and-ribs",
    image: "/apple-bees-menu/applebees-steaks-and-ribs-menu-category.webp",
    items: [
      { 
        id: "sr3", name: "Bourbon Street Steak", calories: "790 Cals", price: "$19.99",
        description: "Applebee’s Bourbon Street Steak is a grilled top sirloin seasoned with Cajun spices and garlic butter, served sizzling with sautéed mushrooms and onions.",
        tableDescription: "Cajun-seasoned top sirloin with garlic butter, mushrooms, and onions.",
        image: "/apple-bees-menu/applebees-bourbon-street-steak-dinner.webp"
      },
      { 
        id: "sr4", name: "Ribeye Steak", calories: "930 Cals", price: "$23.99",
        description: "A marbled ribeye steak grilled to order and paired with side choices.",
        tableDescription: "Marbled grilled ribeye served with side selections.",
        image: "/apple-bees-menu/applebees-ribeye-steak-dinner.webp"
      },
      { 
        id: "sr1", name: "8 oz. Top Sirloin", calories: "630 Cals", price: "$18.99",
        description: "Applebee’s 8 oz. Top Sirloin is a lightly seasoned USDA Select steak cooked to order and commonly paired with garlic mashed potatoes and broccoli.",
        tableDescription: "Lightly seasoned 8 oz. USDA Select top sirloin with sides.",
        image: "/apple-bees-menu/applebees-8oz-top-sirloin-steak-dinner.webp"
      },
      { 
        id: "sr2", name: "Double-Glazed Baby Back Ribs", calories: "1400 Cals", price: "$22.99",
        description: "Applebee's Double-Glazed Baby Back Ribs are slow-cooked to fall-off-the-bone tenderness and slathered in tangy BBQ sauce.",
        tableDescription: "Slow-cooked ribs slathered in tangy BBQ sauce.",
        image: "/apple-bees-menu/applebees-applewood-smoked-baby-back-ribs.webp"
      }
    ]
  },
  {
    title: "HANDCRAFTED BURGERS",
    slug: "handcrafted-burgers",
    image: "/apple-bees-menu/applebees-handcrafted-burgers-menu-category.webp",
    items: [
      { 
        id: "b3", name: "Quesadilla Burger", calories: "1620 Cals", price: "$15.99",
        description: "The Applebee’s Quesadilla Burger combines an all-beef burger with Pepper Jack cheese, Mexi-ranch, Applewood-smoked bacon, pico de gallo, and shredded lettuce inside a quesadilla-style tortilla.",
        tableDescription: "Burger with Pepper Jack, bacon, Mexi-ranch, pico, and lettuce in a quesadilla.",
        image: "/apple-bees-menu/applebees-quesadilla-burger-signature.webp"
      },
      { 
        id: "b4", name: "Impossible™ Cheeseburger", calories: "1050 Cals", price: "$15.49",
        description: "The plant-based Impossible burger patty is topped with American cheese and served with lettuce, tomato, onion, and pickles on a brioche bun.",
        tableDescription: "Plant-based Impossible patty with cheese and classic burger toppings.",
        image: "/apple-bees-menu/applebees-impossible-burger-plant-based.webp"
      },
      { 
        id: "b1", name: "Classic Bacon Cheeseburger", calories: "1230 Cals", price: "$14.49",
        description: "Applebee’s Classic Bacon Cheeseburger pairs an all-beef patty with American cheese and Applewood-smoked bacon, finished with lettuce, tomato, onion, and pickles on a brioche bun.",
        tableDescription: "All-beef cheeseburger with Applewood-smoked bacon and classic toppings.",
        image: "/apple-bees-menu/applebees-classic-bacon-cheeseburger-with-fries.webp"
      },
      { 
        id: "b2", name: "Whisky Bacon Burger", calories: "1480 Cals", price: "$15.99",
        description: "The Whisky Bacon Burger combines an all-beef patty with Pepper Jack cheese, crispy onions, Applewood-smoked bacon, and Fireball whisky-infused steak sauce.",
        tableDescription: "Burger with Pepper Jack, bacon, crispy onions, and whisky-infused sauce.",
        image: "/apple-bees-menu/applebees-whiskey-bacon-burger-premium.webp"
      }
    ]
  },
  {
    title: "CHICKEN",
    slug: "chicken",
    image: "/apple-bees-menu/applebees-chicken-entrees-menu-category.webp",
    items: [
      { 
        id: "ch3", name: "Honey Pepper Chicken Tenders", calories: "1610 Cals", price: "$15.49",
        description: "Crispy chicken tenders coated in a sweet-and-savory honey pepper sauce.",
        tableDescription: "Crispy chicken tenders coated in honey pepper sauce.",
        image: "/apple-bees-menu/applebees-honey-pepper-chicken-tenders.webp"
      },
      { 
        id: "ch1", name: "Fiesta Lime Chicken", calories: "1140 Cals", price: "$16.49",
        description: "Applebee’s Fiesta Lime Chicken features grilled chicken glazed with zesty lime sauce, Mexi-ranch, Cheddar cheeses, and tortilla strips, served with Spanish rice and pico de gallo.",
        tableDescription: "Lime-glazed grilled chicken with Mexi-ranch, Cheddar, rice, and pico.",
        image: "/apple-bees-menu/applebees-fiesta-lime-chicken-entree.webp"
      },
      { 
        id: "ch2", name: "Chicken Tenders Platter", calories: "1450 Cals", price: "$14.99",
        description: "Applebee’s Chicken Tenders Platter serves crispy breaded chicken tenders with a choice of dipping sauce and sides, shown on the current menu with coleslaw and classic fries.",
        tableDescription: "Crispy chicken tenders with dipping sauce and side choices.",
        image: "/apple-bees-menu/applebees-crispy-chicken-tenders-platter.webp"
      }
    ]
  },
  {
    title: "PASTA",
    slug: "pasta",
    image: "/apple-bees-menu/applebees-pasta-dishes-menu-category.webp",
    items: [
      { 
        id: "p3", name: "Four Cheese Mac & Cheese with Honey Pepper Chicken", calories: "1540 Cals", price: "$17.49",
        description: "Applebee’s Four-Cheese Mac & Cheese with Honey Pepper Chicken Tenders combines four-cheese penne mac and cheese, Applewood-smoked bacon, and crispy tenders tossed in honey pepper sauce.",
        tableDescription: "Four-cheese penne with bacon and honey-pepper chicken tenders.",
        image: "/apple-bees-menu/applebees-four-cheese-mac-and-cheese-with-honey-pepper-chicken.webp"
      },
      { 
        id: "p1", name: "Three-Cheese Chicken Penne", calories: "1350 Cals", price: "$15.99",
        description: "Applebee’s Three-Cheese Chicken Penne combines Asiago, Parmesan, and white Cheddar with penne in Parmesan cream sauce, then adds grilled chicken and bruschetta tomatoes.",
        tableDescription: "Penne in three-cheese cream sauce with grilled chicken and bruschetta tomatoes.",
        image: "/apple-bees-menu/applebees-three-cheese-chicken-penne-pasta.webp"
      },
      { 
        id: "p2", name: "Classic Broccoli Chicken Alfredo", calories: "1410 Cals", price: "$16.49",
        description: "Applebee’s Classic Broccoli Chicken Alfredo serves grilled chicken over fettuccine tossed with broccoli and rich Alfredo sauce, finished with Parmesan cheese.",
        tableDescription: "Fettuccine Alfredo with grilled chicken, broccoli, and Parmesan.",
        image: "/apple-bees-menu/applebees-broccoli-chicken-alfredo-pasta.webp"
      }
    ]
  },
  {
    title: "SEAFOOD",
    slug: "seafood",
    image: "/apple-bees-menu/applebees-seafood-menu-category.webp",
    items: [
      { 
        id: "sf1", name: "Double Crunch Shrimp", calories: "1210 Cals", price: "$15.99",
        description: "Applebee’s Double Crunch Shrimp features crispy battered shrimp fried golden brown and served with cocktail sauce, with sides depending on the selected menu configuration.",
        tableDescription: "Golden-fried battered shrimp served with cocktail sauce.",
        image: "/apple-bees-menu/applebees-double-crunch-shrimp-platter.webp"
      },
      { 
        id: "sf2", name: "Blackened Cajun Salmon", calories: "640 Cals", price: "$18.99",
        description: "Applebee’s Blackened Cajun Salmon features a blackened grilled salmon fillet served with garlic mashed potatoes and broccoli for a straightforward seafood entrée.",
        tableDescription: "Blackened grilled salmon with garlic mashed potatoes and broccoli.",
        image: "/apple-bees-menu/applebees-blackened-cajun-salmon-fillet.webp"
      }
    ]
  },
  {
    title: "SALADS",
    slug: "salads",
    image: "/apple-bees-menu/applebees-fresh-salads-menu-category.webp",
    items: [
      { 
        id: "s1", name: "Oriental Chicken Salad", calories: "1420 Cals", price: "$14.99",
        description: "Applebee’s Oriental Chicken Salad tops fresh Asian greens with crispy breaded chicken tenders, crunchy noodles, almonds, and Oriental vinaigrette.",
        tableDescription: "Asian greens with crispy chicken, noodles, almonds, and vinaigrette.",
        image: "/apple-bees-menu/applebees-oriental-chicken-salad-bowl.webp"
      },
      { 
        id: "s2", name: "Grilled Chicken Caesar Salad", calories: "820 Cals", price: "$13.49",
        description: "Applebee’s Grilled Chicken Caesar Salad combines crisp romaine, garlic Caesar dressing, grilled chicken, croutons, and shaved Parmesan.",
        tableDescription: "Romaine with grilled chicken, Caesar dressing, croutons, and Parmesan.",
        image: "/apple-bees-menu/applebees-grilled-chicken-caesar-salad.webp"
      }
    ]
  },
  {
    title: "DESSERTS",
    slug: "desserts",
    image: "/apple-bees-menu/applebees-desserts-sweet-treats-menu-category.webp",
    items: [
      { 
        id: "d1", name: "Triple Chocolate Meltdown", calories: "860 Cals", price: "$8.99",
        description: "Applebee’s Triple Chocolate Meltdown is a warm fudge-filled chocolate cake drizzled with hot fudge and served with vanilla ice cream.",
        tableDescription: "Warm fudge-filled chocolate cake with hot fudge and vanilla ice cream.",
        image: "/apple-bees-menu/applebees-triple-chocolate-meltdown-dessert.webp"
      }
    ]
  },
  {
    title: "SAUCES & SIDES",
    slug: "sides",
    image: "/apple-bees-menu/applebees-sauces-and-sides-menu-category.webp",
    items: [
      { 
        id: "sd1", name: "Garlic Mashed Potatoes", calories: "260 Cals", price: "$3.49",
        description: "Creamy garlic mashed potatoes served as a savory side.",
        tableDescription: "Creamy mashed potatoes seasoned with garlic.",
        image: "/apple-bees-menu/applebees-garlic-mashed-potatoes-side.webp"
      },
      { 
        id: "sd2", name: "Loaded Baked Potato", calories: "450 Cals", price: "$4.49",
        description: "A baked potato served with loaded-style toppings such as cheese, bacon, sour cream, and chives.",
        tableDescription: "Baked potato with loaded-style savory toppings.",
        image: "/apple-bees-menu/applebees-loaded-baked-potato-side.webp"
      },
      { 
        id: "sd3", name: "Steamed Broccoli", calories: "100 Cals", price: "$3.49",
        description: "Applebee’s Steamed Broccoli is a simple vegetable side of steamed broccoli florets, useful for diners comparing side options and calories.",
        tableDescription: "Steamed broccoli served as a vegetable side.",
        image: "/apple-bees-menu/applebees-steamed-broccoli-side.webp"
      },
      { 
        id: "sd4", name: "Classic Fries", calories: "430 Cals", price: "$3.99",
        description: "Golden seasoned fries served as a standard side with many Applebee’s burgers, sandwiches, chicken, and rib entrées.",
        tableDescription: "Golden seasoned fries served as a classic side.",
        image: "/apple-bees-menu/applebees-classic-french-fries-side.webp"
      },
      { 
        id: "sd5", name: "Coleslaw", calories: "230 Cals", price: "$3.49",
        description: "A creamy shredded-cabbage side commonly paired with fried seafood, ribs, wings, and other Applebee’s entrées.",
        tableDescription: "Creamy shredded-cabbage side served with select entrées.",
        image: "/apple-bees-menu/applebees-coleslaw-side.webp"
      }
    ]
  },
  {
    title: "NEW Dirty Fountain Sodas",
    slug: "dirty-fountain-sodas",
    image: "/apple-bees-menu/applebees-dirty-fountain-sodas-drinks-category.webp",
    items: [
      { 
        id: "ds1", name: "Passion Blue Dew", calories: "150 Cals", price: "$3.99", 
        description: "Passion Blue Dew combines Mountain Dew Dark Berry Bash with passion fruit, blue raspberry, and blackberry flavors, finished with the Dirty Fountain Soda creamy topping and cherry.",
        tableDescription: "Dark Berry Mountain Dew with passion fruit, blue raspberry, and blackberry.",
        image: "/apple-bees-menu/applebees-passion-blue-dew-soda-drink.webp" 
      },
      { 
        id: "ds2", name: "Cherry Charmed Pepsi", calories: "170 Cals", price: "$3.99", 
        description: "Cherry Charmed Pepsi mixes classic Pepsi with grenadine for a sweet-tart cherry-style flavor, finished with the Dirty Fountain Soda creamy topping.",
        tableDescription: "Pepsi mixed with grenadine and a creamy Dirty Soda finish.",
        image: "/apple-bees-menu/applebees-cherry-charmed-pepsi-drink.webp" 
      },
      { 
        id: "ds3", name: "Mango Dream Dew", calories: "160 Cals", price: "$3.99", 
        description: "Mango Dream Dew pairs Mountain Dew’s citrus profile with a tangy mango flavor and the creamy topping used across Applebee’s Dirty Fountain Sodas.",
        tableDescription: "Mountain Dew with tangy mango and a creamy Dirty Soda finish.",
        image: "/apple-bees-menu/applebees-mango-dream-dew-drink.webp" 
      }
    ]
  },
  {
    title: "Irresist-A-Bowls",
    slug: "irresist-a-bowls",
    image: "/apple-bees-menu/applebees-irresist-a-bowls-menu-category.webp",
    items: [
      { 
        id: "ib1", name: "Southwest Chicken Bowl", calories: "820 Cals", price: "$14.99", 
        description: "Applebee’s Southwest Chicken Bowl layers grilled chipotle lime chicken over greens and cilantro rice with pico de gallo, black bean corn salsa, guacamole, and additional Southwest-style toppings.",
        tableDescription: "Chipotle lime chicken bowl with rice, greens, salsa, pico, and guacamole.",
        image: "/apple-bees-menu/applebees-southwest-chicken-bowl-entree.webp" 
      },
      { 
        id: "ib2", name: "Tex-Mex Shrimp Bowl", calories: "710 Cals", price: "$15.99", 
        description: "Applebee’s Tex-Mex Shrimp Bowl features grilled chipotle lime shrimp over fresh greens and cilantro rice with pico de gallo, black bean corn salsa, and guacamole.",
        tableDescription: "Chipotle lime shrimp with cilantro rice, greens, salsa, and guacamole.",
        image: "/apple-bees-menu/applebees-tex-mex-shrimp-bowl-entree.webp" 
      }
    ]
  },
  {
    title: "SANDWICHES & MORE",
    slug: "sandwiches-and-more",
    image: "/apple-bees-menu/applebees-sandwiches-wraps-menu-category.webp",
    items: [
      { 
        id: "sw1", name: "Clubhouse Grille", calories: "1120 Cals", price: "$13.99", 
        description: "Applebee’s Clubhouse Grille stacks sliced ham and turkey with Cheddar, Swiss, Applewood-smoked bacon, lettuce, tomato, mayo, and honey BBQ sauce on toasted potato bread.",
        tableDescription: "Ham, turkey, two cheeses, bacon, vegetables, mayo, and honey BBQ.",
        image: "/apple-bees-menu/applebees-clubhouse-grille-sandwich.webp" 
      },
      { 
        id: "sw2", name: "Bacon Ranch Chicken Sandwich", calories: "1050 Cals", price: "$14.49", 
        description: "The Bacon Ranch Chicken Sandwich features crispy hand-breaded chicken, Applewood-smoked bacon, ranch, pickles, lettuce, and tomato on a brioche bun.",
        tableDescription: "Crispy chicken with bacon, ranch, pickles, lettuce, and tomato.",
        image: "/apple-bees-menu/applebees-bacon-ranch-crispy-chicken-sandwich.webp" 
      },
      { 
        id: "sw3", name: "Classic Chicken Sandwich", calories: "820 Cals", price: "$12.99", 
        description: "A chicken sandwich served on a brioche-style bun with fresh toppings.",
        tableDescription: "Chicken sandwich with classic fresh toppings.",
        image: "/apple-bees-menu/applebees-classic-chicken-sandwich.webp" 
      }
    ]
  },
  {
    title: "2 FOR $25",
    slug: "2-for-25",
    image: "/apple-bees-menu/applebees-2-for-25-value-meal-deal-category.webp",
    items: [
      { 
        id: "2f1", name: "2 For $25 Value Meal", calories: "Varies", price: "$25.00", 
        description: "Applebee’s 2 for $25 pairs one full-size appetizer with two full-size entrées.",
        tableDescription: "One full-size appetizer plus two full-size entrées.",
        image: "/apple-bees-menu/applebees-2-for-25-value-meal.webp" 
      }
    ]
  },
  {
    title: "The Really BIG Meal Deal",
    slug: "really-big-meal-deal",
    image: "/apple-bees-menu/applebees-really-big-meal-deal-category.webp",
    items: [
      { 
        id: "rb1", name: "The Really BIG Meal Deal", calories: "Varies", price: "$29.99", 
        description: "The current Really Big Meal Deal centers on a qualifying burger or chicken sandwich with fries and a fountain drink, with promotional availability and terms varying by location.",
        tableDescription: "Qualifying burger or chicken sandwich meal with fries and a drink.",
        image: "/apple-bees-menu/applebees-really-big-meal-deal-spread.webp" 
      }
    ]
  },
  {
    title: "KID'S MENU",
    slug: "kids-menu",
    image: "/apple-bees-menu/applebees-kids-menu-meals-category.webp",
    items: [
      { 
        id: "k1", name: "Kids Chicken Tenders", calories: "450 Cals", price: "$6.99", 
        description: "Applebee’s Kids Chicken Tenders include three crispy breaded chicken tenders and come with a choice of side and drink.",
        tableDescription: "Three crispy chicken tenders with a choice of side and drink.",
        image: "/apple-bees-menu/applebees-kids-chicken-tenders-meal.webp" 
      },
      { 
        id: "k2", name: "Kids Macaroni & Cheese", calories: "520 Cals", price: "$6.49", 
        description: "Applebee’s Kids Macaroni & Cheese is a simple mac and cheese entrée served with a choice of side and drink.",
        tableDescription: "Kids mac and cheese with a choice of side and drink.",
        image: "/apple-bees-menu/applebees-kids-macaroni-and-cheese.webp" 
      },
      { 
        id: "k3", name: "Kids Classic Cheeseburger", calories: "680 Cals", price: "$7.49", 
        description: "The Kids Classic Cheeseburger features a ground-beef burger with American cheese and classic toppings, plus a choice of side and drink.",
        tableDescription: "Kids cheeseburger with classic toppings, side, and drink.",
        image: "/apple-bees-menu/applebees-kids-cheeseburger-meal.webp" 
      }
    ]
  },
  {
    title: "NON-ALCOHOLIC BEVERAGES",
    slug: "non-alcoholic-beverages",
    image: "/apple-bees-menu/applebees-non-alcoholic-beverages-category.webp",
    items: [
      { 
        id: "na1", name: "Flavored Lemonade", calories: "150 Cals", price: "$3.49", 
        description: "A fruit-flavored lemonade option for diners looking for a sweet, non-alcoholic drink.",
        tableDescription: "Fruit-flavored lemonade; available flavors may vary.",
        image: "/apple-bees-menu/applebees-flavored-strawberry-lemonade.webp" 
      },
      { 
        id: "na2", name: "Fresh Brewed Iced Tea", calories: "0 Cals", price: "$2.99", 
        description: "Fresh-brewed iced tea served as a straightforward non-alcoholic beverage, with sweetener and flavor additions depending on the selected restaurant’s menu.",
        tableDescription: "Fresh-brewed iced tea with optional sweetener or flavor additions.",
        image: "/apple-bees-menu/applebees-fresh-brewed-iced-tea.webp" 
      },
      { 
        id: "na3", name: "Fountain Drinks", calories: "0-200 Cals", price: "$2.99", 
        description: "A selection of fountain soft drinks from the brands available at the selected Applebee’s restaurant. Exact choices and calorie counts vary by beverage and serving size.",
        tableDescription: "Fountain soft drinks with calories varying by beverage and size.",
        image: "/apple-bees-menu/applebees-fountain-drink-pepsi.webp" 
      }
    ]
  }
];
