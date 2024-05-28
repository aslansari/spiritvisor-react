// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

const { type } = require("os");

// https://nextjs.org/learn/dashboard-app/fetching-data
const flavors = [
        {
            type: "bitter",
            cocktails: [
                {
                    title: "Negroni",
                    imageUrl: "/cocktail/negroni.webp",
                    description: "A classic Italian cocktail, perfect for any occasion.",
                    ingredients: [
                        "Gin",
                        "Campari",
                        "Sweet vermouth"
                    ]
                },
                {
                    title: "Toronto",
                    imageUrl: "/cocktail/toronto.webp",
                    description: "A Canadian twist on classic bitter flavors, with a dash of Fernet-Branca.",
                    ingredients: [
                        "Canadian whisky",
                        "Fernet-Branca",
                        "Simple syrup",
                        "Angostura bitters"
                    ]
                },
                {
                    title: "Trinidad Sour",
                    imageUrl: "/cocktail/trinidad-sour.webp",
                    description: "A bitter and refreshing cocktail with a notable punch from the rye whiskey.",
                    ingredients: [
                        "Angostura bitters",
                        "Orgeat syrup",
                        "Lemon juice",
                        "Rye whiskey"
                    ]
                },
                {
                    title: "Americano",
                    imageUrl: "/cocktail/americano.webp",
                    description: "Light and refreshing with a pleasing balance of bitterness and sweet herbal notes.",
                    ingredients: [
                        "Campari",
                        "Sweet vermouth",
                        "Club soda"
                    ]
                },
                {
                    title: "Revolver",
                    imageUrl: "/cocktail/revolver.webp",
                    description: "A boozy and bold cocktail, ideal for coffee lovers with a hint of orange.",
                    ingredients: [
                        "Bourbon",
                        "Coffee liqueur",
                        "Orange bitters"
                    ]
                },
                {
                    title: "Boulevardier",
                    imageUrl: "/cocktail/boulevardier.webp",
                    description: "A robust cocktail that is both spicy and sweet, perfect for whiskey lovers.",
                    ingredients: [
                        "Bourbon",
                        "Campari",
                        "Sweet vermouth"
                    ]
                }
            ]
        },
        {
            type: "sweet",
            cocktails: [
                {
                    title: "Blue Hawaiian",
                    imageUrl: "/cocktail/blue-hawaiian.webp",
                    description: "A vibrant tropical cocktail that’s as blue as the ocean.",
                    ingredients: [
                        "Light rum",
                        "Blue Curacao",
                        "Pineapple juice",
                        "Cream of coconut"
                    ]
                },
                {
                    title: "Mojito",
                    imageUrl: "/cocktail/mojito.webp",
                    description: "A refreshing classic with a lively mix of mint and lime.",
                    ingredients: [
                        "White rum",
                        "Sugar",
                        "Lime juice",
                        "Soda water",
                        "Mint"
                    ]
                },
                {
                    title: "Sidecar",
                    imageUrl: "/cocktail/sidecar.webp",
                    description: "An elegant and sophisticated cocktail with a citrus twist.",
                    ingredients: [
                        "Cognac",
                        "Orange liqueur",
                        "Lemon juice"
                    ]
                },
                {
                    title: "Tom Collins",
                    imageUrl: "/cocktail/tom-collins.webp",
                    description: "A classic sparkling gin cocktail that is refreshingly simple.",
                    ingredients: [
                        "Gin",
                        "Lemon juice",
                        "Sugar syrup",
                        "Club soda"
                    ]
                },
                {
                    title: "Blood and Sand",
                    imageUrl: "/cocktail/blood-and-sand.webp",
                    description: "A complex and fruity cocktail with a rich history, featuring Scotch whisky.",
                    ingredients: [
                        "Scotch whisky",
                        "Sweet vermouth",
                        "Cherry Liqueur",
                        "Orange juice"
                    ]
                },
                {
                    title: "Tequila Sunrise",
                    imageUrl: "/cocktail/tequila-sunrise.webp",
                    description: "A picturesque cocktail with layers that mimic a sunrise.",
                    ingredients: [
                        "Tequila",
                        "Orange juice",
                        "Grenadine"
                    ]
                },
                {
                    title: "Espresso Martini",
                    imageUrl: "/cocktail/espresso-martini.webp",
                    description: "A sophisticated cocktail that combines the rich flavors of coffee and vodka.",
                    ingredients: [
                        "Vodka",
                        "Coffee liqueur",
                        "Espresso",
                        "Simple syrup"
                    ]
                },
                {
                    title: "French 75",
                    imageUrl: "/cocktail/french-75.webp",
                    description: "A classic cocktail that combines gin, lemon, and champagne for a bubbly delight.",
                    ingredients: [
                        "Gin",
                        "Lemon juice",
                        "Simple syrup",
                        "Champagne"
                    ]
                },
                {
                    title: "French Martini",
                    imageUrl: "/cocktail/french-martini.webp",
                    description: "A fruity and sweet cocktail that combines vodka, raspberry liqueur, and pineapple juice.",
                    ingredients: [
                        "Vodka",
                        "Raspberry liqueur",
                        "Pineapple juice"
                    ]
                },
                {
                    title: "Grasshopper",
                    imageUrl: "/cocktail/grasshopper.webp",
                    description: "A creamy and minty cocktail that is both refreshing and indulgent.",
                    ingredients: [
                        "Crème de menthe",
                        "Crème de cacao",
                        "Heavy Cream"
                    ]
                },
                {
                    title: "Brandy Alexander",
                    imageUrl: "/cocktail/brandy-alexander.webp",
                    description: "A creamy and indulgent cocktail that blends brandy with crème de cacao and cream.",
                    ingredients: [
                        "Brandy",
                        "Crème de cacao",
                        "Cream",
                        "Nutmeg"
                    ]
                }
            ]
        },
        {
            type: "savory",
            cocktails: [
                {
                    title: "Dirty Martini",
                    imageUrl: "/cocktail/dirty-martini.webp",
                    description: "A classic cocktail that emphasizes the salty and briny flavors of olive juice mixed with vodka or gin.",
                    ingredients: [
                        "Gin or Vodka",
                        "Dry vermouth",
                        "Olive juice",
                        "Olives"
                    ]
                },
                {
                    title: "Gibson",
                    imageUrl: "/cocktail/gibson.webp",
                    description: "Similar to a Martini, but garnished with a pickled onion, offering a unique depth and umami flavor.",
                    ingredients: [
                        "Gin",
                        "Dry vermouth",
                        "Pickled onion"
                    ]
                },
                {
                    title: "Salty Dog",
                    imageUrl: "/cocktail/salty-dog.jpeg",
                    description: "A tart and salty cocktail made with grapefruit juice and gin or vodka, served with a salted rim.",
                    ingredients: [
                        "Gin or Vodka",
                        "Grapefruit juice",
                        "Salt Rim"
                    ]
                },
                {
                    title: "Bloody Mary",
                    imageUrl: "/cocktail/bloody-marry.webp",
                    description: "A popular brunch cocktail known for its complex flavors with tomato juice and various spices and flavorings.",
                    ingredients: [
                        "Vodka",
                        "Tomato juice",
                        "Lemon juice",
                        "Worcestershire sauce",
                        "Tabasco",
                        "Pepper",
                        "Celery salt"
                    ]
                },
                {
                    title: "Red Snapper",
                    imageUrl: "/cocktail/red-snapper.webp",
                    description: "Considered a gin-based Bloody Mary, offering a smooth yet spicy flavor profile.",
                    ingredients: [
                        "Gin",
                        "Tomato juice",
                        "Lemon juice",
                        "Worcestershire sauce",
                        "Tabasco",
                        "Horseradish",
                        "Celery salt",
                        "Pepper"
                    ]
                }
            ]
        },
        {
            type: "sour",
            cocktails: [
                {
                    title: "Whiskey Sour",
                    imageUrl: "/cocktail/whiskey-sour.webp",
                    description: "A beloved classic with a blend of tartness and sweet notes.",
                    ingredients: [
                        "Bourbon",
                        "Lemon juice",
                        "Simple syrup",
                        "Egg white",
                        "Angostura bitters"
                    ]
                },
                {
                    title: "Amaretto Sour",
                    imageUrl: "/cocktail/amaretto-sour.webp",
                    description: "A sweet and sour cocktail, featuring the almond flavor of amaretto.",
                    ingredients: [
                        "Amaretto",
                        "Lemon juice",
                        "Simple syrup",
                        "Egg white",
                        "Lemon slice",
                        "Cherry"
                    ]
                },
                {
                    title: "Margarita",
                    imageUrl: "/cocktail/margarita.webp",
                    description: "A quintessential Mexican cocktail, perfect for any festive occasion.",
                    ingredients: [
                        "Tequila",
                        "Lime juice",
                        "Cointreau",
                        "Salt"
                    ]
                },
                {
                    title: "Lemon Drop",
                    imageUrl: "/cocktail/lemon-drop.webp",
                    description: "A sweetly sour cocktail that is both refreshing and sharp.",
                    ingredients: [
                        "Vodka",
                        "Lemon juice",
                        "Simple syrup",
                        "Sugar rim"
                    ]
                },
                {
                    title: "Daiquiri",
                    imageUrl: "/cocktail/daiquiri.webp",
                    description: "A simple yet sophisticated rum cocktail with lime and sugar.",
                    ingredients: [
                        "White rum",
                        "Lime juice",
                        "Simple syrup"
                    ]
                },
                {
                    title: "Gimlet",
                    imageUrl: "/cocktail/gimlet.webp",
                    description: "A classic cocktail with a refreshing blend of gin and lime.",
                    ingredients: [
                        "Gin",
                        "Lime juice",
                        "Simple syrup"
                    ]
                }
            ]
        },
        {
            type: "herbal",
            cocktails: [
                {
                    title: "Mojito",
                    imageUrl: "/cocktail/mojito.webp",
                    description: "A refreshing classic with a lively mix of mint and lime.",
                    ingredients: [
                        "White rum",
                        "Sugar",
                        "Lime juice",
                        "Soda water",
                        "Mint"
                    ]
                },
                {
                    title: "Love & Murder",
                    imageUrl: "/cocktail/love-and-murder.jpeg",
                    description: "A dramatic blend of gin, St. Germain, and basil, with a touch of lemon.",
                    ingredients: [
                        "Gin",
                        "Green Chartreuse",
                        "Lime juice",
                        "Simple Syrup",
                        "saline solution"
                    ]
                },
                {
                    title: "Killer Queen",
                    imageUrl: "/cocktail/killer-queen.webp",
                    description: "A herbal cocktail with bold flavors of gin and Aperol, accented by lavender and honey.",
                    ingredients: [
                        "Aromatic Gin",
                        "Lillet Blanc",
                        "Benedictine",
                        "Angostura Bitters"
                    ]
                }
            ]
        },
        {
            type: "fruity",
            cocktails: [
                {
                    title: "Mai Tai",
                    imageUrl: "/cocktail/mai-tai.webp",
                    description: "A tropical classic that combines rum, lime, and almond flavors in a refreshing cocktail.",
                    ingredients: [
                        "White rum",
                        "Dark rum",
                        "Lime juice",
                        "Orange curaçao",
                        "Orgeat syrup"
                    ]
                },
                {
                    title: "Painkiller",
                    imageUrl: "/cocktail/painkiller.webp",
                    description: "Rich and fruity, featuring a mix of rum, coconut cream, and pineapple juice.",
                    ingredients: [
                        "Rum",
                        "Pineapple juice",
                        "Orange juice",
                        "Coconut cream",
                        "Nutmeg"
                    ]
                },
                {
                    title: "Piña Colada",
                    imageUrl: "/cocktail/pina-colada.webp",
                    description: "A beloved summer drink that blends pineapple, coconut, and rum into a creamy delight.",
                    ingredients: [
                        "Rum",
                        "Pineapple juice",
                        "Coconut cream"
                    ]
                },
                {
                    title: "Sex on the Beach",
                    imageUrl: "/cocktail/sex-on-the-beach.webp",
                    description: "A fun and fruity cocktail, perfect for any party, featuring vodka, peach schnapps, and juices.",
                    ingredients: [
                        "Vodka",
                        "Peach schnapps",
                        "Orange juice",
                        "Cranberry juice"
                    ]
                },
                {
                    title: "Cosmopolitan",
                    imageUrl: "/cocktail/cosmopolitan.webp",
                    description: "A sophisticated cocktail that combines vodka with citrus and cranberry flavors.",
                    ingredients: [
                        "Vodka",
                        "Cointreau",
                        "Lime juice",
                        "Cranberry juice"
                    ]
                },
                {
                    title: "Garibaldi",
                    imageUrl: "/cocktail/garibaldi.webp",
                    description: "A simple yet delightful mix of Campari and fresh orange juice, served over ice.",
                    ingredients: [
                        "Campari",
                        "Orange juice"
                    ]
                },
                {
                    title: "Blue Hawaiian",
                    imageUrl: "/cocktail/blue-hawaiian.webp",
                    ingredients: [
                        "Vodka",
                        "Light rum",
                        "Blue Curacao",
                        "Pineapple juice",
                        "Cream of coconut"
                    ],
                    description: "A vibrant tropical cocktail that’s as blue as the ocean."
                },
                {
                    title: "Hurricane",
                    imageUrl: "/cocktail/hurricane.webp",
                    description: "A fruity and potent cocktail with a tropical flair, perfect for sipping on a sunny day.",
                    ingredients: [
                        "Light rum",
                        "Dark rum",
                        "Passion fruit juice",
                        "Orange juice",
                        "Lime juice",
                        "Simple syrup",
                        "Grenadine"
                    ]
                }
            ]
        },
        {
            type: "spicy",
            cocktails: [
                {
                    title: "El Diablo",
                    imageUrl: "/cocktail/el-diablo.jpeg",
                    description: "A spicy and fruity cocktail with tequila, crème de cassis, and ginger beer.",
                    ingredients: [
                        "Reposado Tequila",
                        "Crème de cassis",
                        "Lime juice",
                        "Ginger beer"
                    ]
                },
                {
                    title: "Red Snapper",
                    imageUrl: "/cocktail/red-snapper.webp",
                    description: "Considered a gin-based Bloody Mary, offering a smooth yet spicy flavor profile.",
                    ingredients: [
                        "Gin",
                        "Tomato juice",
                        "Lemon juice",
                        "Worcestershire sauce",
                        "Tabasco",
                        "Horseradish",
                        "Celery salt",
                        "Pepper"
                    ]
                },
                {
                    title: "Pineapple Jalapeno Margarita",
                    imageUrl: "/cocktail/pineapple-jalapeno-margaritas.webp",
                    description: "A spicy twist on the classic margarita, featuring pineapple and jalapeno flavors.",
                    ingredients: [
                        "Tequila",
                        "Pineapple juice",
                        "Lime juice",
                        "Jalapeno",
                        "Agave nectar",
                        "Triple sec",
                        "Pineapple wedge",
                        "Jalapeno slice",
                        "Sugar",
                        "Black pepper"
                    ]
                },
                {
                    title: "Tequila Mockingbird",
                    imageUrl: "/cocktail/tequila-mockingbird.jpeg",
                    description: "A spicy and refreshing cocktail with tequila, lime, and jalapeno, perfect for those who enjoy a kick of heat.",
                    ingredients: [
                        "Tequila",
                        "Jalapeno",
                        "Watermelon",
                        "Lime juice",
                        "Agave nectar"
                    ]
                },
                {
                    title: "Mule",
                    imageUrl: "/cocktail/mule.webp",
                    description: "A spicy and refreshing cocktail with vodka, ginger beer, and lime, served in a copper mug.",
                    ingredients: [
                        "Vodka",
                        "Peach schnapps",
                        "Ginger Juice",
                        "Ginger beer",
                        "Lime juice"
                    ]
                }
            ]
        }
    ];

module.exports = {
    flavors,
};
