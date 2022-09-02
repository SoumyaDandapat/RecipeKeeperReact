import Recipe from "../models/Recipe";


export const RECIPES = [
    new Recipe(
        1,
        "Pizza",
        "Pizza is one of the trending fast food. It contains bread, cheese and sauce as a base, and can contain any amount of toppings required.",
        "https://pngimg.com/uploads/pizza/pizza_PNG43991.png",
        "Make the dough\nMake the sauce\nMake a flat dough\nPut sauce on the base\nPut cheese on the top\nSpread toppings and put it in oven for 15 minutes",
        "cheese\nonion\nflour\nsalt\ncorn\ntomato\nchicken\nolives"
    ),
    new Recipe(
        2,
        "Burger",
        "Burger is a fast food eaten world-wide with different vatiations. The common feature is that the ingredients are compacted between two bread buns.",
        "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png",
        "step 1\nstep 2\nstep 3\nstep 4\nstep 5\n step 6\nstep 7\nstep 8\nstep 9\nstep 10",
        "cheese\ntomato\nbread\nbutter\nonion\nmayo\nlettuce\nchicken patty"
    ),
    new Recipe(
        3,
        "Sandwich",
        "Sandwich is one of the easiest food that can be made by everyone as well as can be made as exquisite as possible. The only thing required is two bread pieces and any of the ingredients you want to eat between them.",
        "https://pngimg.com/uploads/sandwich/sandwich_PNG64.png",
        "step 1\nstep 2\nstep 3\nstep 4\nstep 5\n step 6\nstep 7\nstep 8\nstep 9\nstep 10",
        "cheese\ntomato\nbread\nbutter\nonion\nmayo\nlettuce\nchicken slices"
    ),
    new Recipe(
        4,
        "Biriyani",
        "Dum Biryani is one of the favourite dish eaten near the eastern part of India. Its trademark is DUM, which is basically flour dough used to seal the Container. In West bengal, People also like Potatoes in them. ",
        "https://www.nicepng.com/png/full/914-9141005_about-chicken-biryani-ad.png",
        "step 1\nstep 2\nstep 3\nstep 4\nstep 5\n step 6\nstep 7\nstep 8\nstep 9\nstep 10",
        "Rice\nChicken\nMasala\nOnion\nGinger\nGarlic\nPotato\nFlour\nSalt"
    ),
    new Recipe(
        5,
        "Chicken Roll",
        "Chicken roll is basically a thin flour bread which is filled with chicken , onions and sauces in a rolled style. It is widely eaten world-wide and the sauces and the type of roll makes the taste different.",
        "https://www.pngarts.com/files/8/Chicken-Egg-Roll-PNG-Background-Image.png",
        "step 1\nstep 2\nstep 3\nstep 4\nstep 5\n step 6\nstep 7\nstep 8\nstep 9\nstep 10",
        "flour\nchicken\nketchup\nonion\nsalt\npepper\negg"
    ),
    new Recipe(
        6,
        "Noodles",
        "Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried.",
        "https://purepng.com/public/uploads/large/purepng.com-noodlenoodlechinesestaple-foodwheat-doughnudel-1411527967299jqwgx.png",
        "step 1\nstep 2\nstep 3\nstep 4\nstep 5\n step 6\nstep 7\nstep 8\nstep 9\nstep 10",
        "flour\nsalt\nchicken broth\nchicken\negg\nsoy sauce\nonion\ngarlic\nspring onion\ngarlic\npepper"
    ),
    new Recipe(
        7,
        "Fish Curry",
        "Curry is a traditional Indian dish. In fish curry, the main ingredient is Fish and the flavors are profiled by the type of curry and the fish combination.",
        "https://1.bp.blogspot.com/-w-Uo_6l0fqU/T1iSlPxar6I/AAAAAAAABDw/W5AXYAd1Ylg/s1600/KERALA+FISH+CURRY.png",
        "step 1\nstep 2\nstep 3\nstep 4\nstep 5\n step 6\nstep 7\nstep 8\nstep 9\nstep 10",
        "fish\nonion\ntomato\nginger\ngarlic\nmustard\nhaldi\noil\nmasala"
    ),
    new Recipe(
        8,
        "Momos",
        "Momo are bite-size dumplings made with a spoonful of stuffing wrapped in dough. Momo are usually steamed, though they are sometimes fried or steam-fried. Meat or vegetables fillings becomes succulent as it produces an intensively flavored broth sealed inside the wrappers.",
        "https://www.pikpng.com/pngl/b/465-4656115_sunil-momos-png-download-momo-non-veg-clipart.png",
        "step 1\nstep 2\nstep 3\nstep 4\nstep 5\n step 6\nstep 7\nstep 8\nstep 9\nstep 10",
        "flour\n,chicken\nsoy sauce\nonion\nchilly"
    )
]

export const RECIPES_JSON = [
    {
        "id": 1,
        "name": "Pizza",
        "description": "Pizza is one of the trending fast food. It contains bread, cheese and sauce as a base, and can contain any amount of toppings required.",
        "imageUrl": "https://pngimg.com/uploads/pizza/pizza_PNG43991.png",
        "steps": "Make the dough\nMake the sauce\nMake a flat dough\nPut sauce on the base\nPut cheese on the top\nSpread toppings and put it in oven for 15 minutes",
        "ingredients": "cheese\nonion\nflour\nsalt\ncorn\ntomato\nchicken\nolives"
    },
    {
        "id": 2,
        "name": "Burger",
        "description": "description",
        "imageUrl": "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png",
        "steps": "steps..",
        "ingredients": "ingredients.."
    },
    {
        "id": 3,
        "name": "Sandwich",
        "description": "description",
        "imageUrl": "https://pngimg.com/uploads/sandwich/sandwich_PNG64.png",
        "steps": "step 1\n step 2\nstep 3\nstep 4",
        "ingredients": "cheese,tomato,bread,butter"
    },
    {
        "id": 4,
        "name": "Biriyani",
        "description": "Dum Biryani is one of the favourite dish eaten near the eastern part of India. Its trademark is DUM, which is basically flour dough used to seal the Container. In West bengal, People also like Potatoes in them. ",
        "imageUrl": "https://www.nicepng.com/png/full/914-9141005_about-chicken-biryani-ad.png",
        "steps": "step 1\nstep 2\nstep 3\nstep 4\nstep 5\n step 6\nstep 7\nstep 8\nstep 9\nstep 10",
        "ingredients": "Rice\nChicken\nMasala\nOnion\nGinger\nGarlic\nPotato\nFlour\nSalt"
    },
    {
        "id": 5,
        "name": "Chicken Roll",
        "description": "description",
        "imageUrl": "https://www.pngarts.com/files/8/Chicken-Egg-Roll-PNG-Background-Image.png",
        "steps": "step 1, step 2,step 3",
        "ingredients": "cheese,tomato,bread,chicken,onion"
    },
    {
        "id": 6,
        "name": "Noodles",
        "description": "description",
        "imageUrl": "https://purepng.com/public/uploads/large/purepng.com-noodlenoodlechinesestaple-foodwheat-doughnudel-1411527967299jqwgx.png",
        "steps": "steps..",
        "ingredients": "ingredients.."
    },
    {
        "id": 7,
        "name": "Fish Curry",
        "description": "description",
        "imageUrl": "https://1.bp.blogspot.com/-w-Uo_6l0fqU/T1iSlPxar6I/AAAAAAAABDw/W5AXYAd1Ylg/s1600/KERALA+FISH+CURRY.png",
        "steps": "step 1, step 2,step 3",
        "ingredients": "fish,tomato,onion,masala"
    },
    {
        "id": 8,
        "name": "Momos",
        "description": "description",
        "imageUrl": "https://www.pikpng.com/pngl/b/465-4656115_sunil-momos-png-download-momo-non-veg-clipart.png",
        "steps": "steps..",
        "ingredients": "ingredients.."
    }
]
