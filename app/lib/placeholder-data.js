// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

const { type } = require("os");

// https://nextjs.org/learn/dashboard-app/fetching-data
const flavors = [
        {
            type: "bitter",
            cocktails: [
                {
                    title: "Negroni",
                    imageUrl: "https://cocktailclub.com/_next/image?url=https://cocktailclub.fra1.digitaloceanspaces.com/41bb8644be4a2ace189004129d7a5465fdff5e310fd49a0a2361834f4726923d?&w=3840&q=75",
                    description: "A classic Italian cocktail, perfect for any occasion.",
                    ingredients: [
                        "Gin",
                        "Campari",
                        "Sweet vermouth"
                    ]
                },
                {
                    title: "Toronto",
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/The_Toronto_Cocktail_%2813570423424%29.jpg/250px-The_Toronto_Cocktail_%2813570423424%29.jpg",
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
                    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/VTR_-_Trinidad_Sour_%2818045674468%29.jpg/250px-VTR_-_Trinidad_Sour_%2818045674468%29.jpg",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https://cocktailclub.fra1.digitaloceanspaces.com/20334931bba2784af8002b8231de7b925ed846e16dd30852cb28ac3d5bb0911b?&w=3840&q=75",
                    description: "Light and refreshing with a pleasing balance of bitterness and sweet herbal notes.",
                    ingredients: [
                        "Campari",
                        "Sweet vermouth",
                        "Club soda"
                    ]
                },
                {
                    title: "Revolver",
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/revolver.webp",
                    description: "A boozy and bold cocktail, ideal for coffee lovers with a hint of orange.",
                    ingredients: [
                        "Bourbon",
                        "Coffee liqueur",
                        "Orange bitters"
                    ]
                },
                {
                    title: "Boulevardier",
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2F1c40ef0be20f3f37273fe3ded03a31e9d11bd3a0eb42a5580150ef1828744239%3F&w=1200&q=75",
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
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/blue-hawaiian.webp",
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
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/mojito.webp",
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
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/sidecar.webp",
                    description: "An elegant and sophisticated cocktail with a citrus twist.",
                    ingredients: [
                        "Cognac",
                        "Orange liqueur",
                        "Lemon juice"
                    ]
                },
                {
                    title: "Tom Collins",
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2Fbd6f866edb0fb8d8854fe71ec20df8a560cfacd4f4ea0af283e0c659563b7811%3F&w=3840&q=75",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2Fb4b73c0cd21515c947eedb3686c9b161685baf186b20e29ad0c4258fffa42b07%3F&w=3840&q=75",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2F721b5a91b48b2ee08d560b5b77b00eb69f782567d71f953d7efeb5c6f93f6e50%3F&w=3840&q=75",
                    description: "A picturesque cocktail with layers that mimic a sunrise.",
                    ingredients: [
                        "Tequila",
                        "Orange juice",
                        "Grenadine"
                    ]
                },
                {
                    title: "Espresso Martini",
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/espresso-martini.webp",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2Fbb64c0b7be8cfc7ef36da935e3b30787bb483bcd52fb309f4ecee41aac43a349%3F&w=3840&q=75",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2F10c4a4ad32d343c3ae4533f53b2e3ccd99b3d93d9bfb40136ccef3158890606e%3F&w=3840&q=75",
                    description: "A fruity and sweet cocktail that combines vodka, raspberry liqueur, and pineapple juice.",
                    ingredients: [
                        "Vodka",
                        "Raspberry liqueur",
                        "Pineapple juice"
                    ]
                },
                {
                    title: "Grasshopper",
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/grasshopper.webp",
                    description: "A creamy and minty cocktail that is both refreshing and indulgent.",
                    ingredients: [
                        "Crème de menthe",
                        "Crème de cacao",
                        "Heavy Cream"
                    ]
                },
                {
                    title: "Brandy Alexander",
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/brandy-alexander.webp",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2F211380a1734237e82d2e355dea239e7ce508c49a8b87f5c3002da7840927cb1e%3F&w=3840&q=75",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2Fb53d25243a65d85cc44a7386728acbe5a1191cff95af06e8d0ab918cbbd53e94%3F&w=3840&q=75",
                    description: "Similar to a Martini, but garnished with a pickled onion, offering a unique depth and umami flavor.",
                    ingredients: [
                        "Gin",
                        "Dry vermouth",
                        "Pickled onion"
                    ]
                },
                {
                    title: "Salty Dog",
                    imageUrl: "https://mintandtwist.com/wp-content/uploads/2023/06/salty-dog-cocktail-1.jpg",
                    description: "A tart and salty cocktail made with grapefruit juice and gin or vodka, served with a salted rim.",
                    ingredients: [
                        "Gin or Vodka",
                        "Grapefruit juice",
                        "Salt Rim"
                    ]
                },
                {
                    title: "Bloody Mary",
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2F22b39199e1cee35cc3eed6a0f9cb778a318d79d1fc7cafae9d18ea4c2d8c66ad%3F&w=3840&q=75",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2Fe861e44f2b586223646389c6b345f22a24885a612fbe62ac639f4bd935edca73%3F&w=3840&q=75",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2F7460337a09cf18cf698165adba8195d33642d5347f171875e661b4b03d9426ad%3F&w=3840&q=75",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2F5083fd7e0fcd763e9ee3b90bb93e4bc6e2b5d0a02dd9557ff52bc7929e4c85d5%3F&w=3840&q=75",
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
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/margarita.webp",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2F99edc3de819142923653f823f48a3df19a880dab70626966ebf5a4cbddc38660%3F&w=3840&q=75",
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
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/daiquiri.webp",
                    description: "A simple yet sophisticated rum cocktail with lime and sugar.",
                    ingredients: [
                        "White rum",
                        "Lime juice",
                        "Simple syrup"
                    ]
                },
                {
                    title: "Gimlet",
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2F29c8aee5dbf183461501a53a722de9a8371f8618028a69c85971d9b257ae2335%3F&w=3840&q=75",
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
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/mojito.webp",
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
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_L90-ZCWMsTJlnSB2CFi1UnL0a4tWmoTJCQ4xICwix138DGbQQcHepeJAgtXBeaXJXR8&usqp=CAU",
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
                    imageUrl: "https://www.liquor.com/thmb/JUja3wzg12Z8cv0H7aE-9AYChAY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/killer-queen-720x720-primary-6538a0cb9f30476bb138cdddf560499e.jpg",
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
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/mai-tai.webp",
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
                    imageUrl: "https://i0.wp.com/www.jaylynnlittle.com/wp-content/uploads/2022/11/Painkiller-cocktail-6033-scaled.jpg?fit=2560%2C2560&ssl=1",
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
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/pina-colada.webp",
                    description: "A beloved summer drink that blends pineapple, coconut, and rum into a creamy delight.",
                    ingredients: [
                        "Rum",
                        "Pineapple juice",
                        "Coconut cream"
                    ]
                },
                {
                    title: "Sex on the Beach",
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2F689a96a435fe8f3c8a48183a5de5022aa8e97829df4ccc196ce5601814c541e9%3F&w=3840&q=75",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2Fb851a072d2e2d55a6666db846acdd346beceb161116b7ebea6bf1ffc3bb450d9%3F&w=3840&q=75",
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
                    imageUrl: "https://www.acouplecooks.com/wp-content/uploads/2020/10/Garibaldi-Cocktail-002.jpg",
                    description: "A simple yet delightful mix of Campari and fresh orange juice, served over ice.",
                    ingredients: [
                        "Campari",
                        "Orange juice"
                    ]
                },
                {
                    title: "Blue Hawaiian",
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/blue-hawaiian.webp",
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
                    imageUrl: "https://raw.githubusercontent.com/aslansari/spiritvisor/main/composeApp/src/commonMain/composeResources/files/images/hurricane.webp",
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
                    imageUrl: "https://vinepair.com/wp-content/uploads/2022/09/el-diablo-google-1000x1000.jpg",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2Fe861e44f2b586223646389c6b345f22a24885a612fbe62ac639f4bd935edca73%3F&w=3840&q=75",
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
                    imageUrl: "https://i0.wp.com/aflavorjournal.com/wp-content/uploads/2022/05/Pineapple-Jalapeno-Margaritas-25-scaled.jpg?fit=2560%2C2560&ssl=1",
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
                    imageUrl: "https://happyhourhacks.com/wp-content/uploads/tequila-mockingbird-cocktail-3.jpg",
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
                    imageUrl: "https://cocktailclub.com/_next/image?url=https%3A%2F%2Fcocktailclub.fra1.digitaloceanspaces.com%2F33d3abfa161f184d362be864111282c342d25077c78cad249a3ceda88d693240%3F&w=3840&q=75",
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
