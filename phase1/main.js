import AccountsRepo from "./repo/accountRepo.js";
import ItemRepo from "./repo/itemRepo.js";



const acctRepo = new AccountsRepo()
const accounts = [
    {
        name: "Shouq",
        companyName: "Sefora",
        username: "shouq123",
        password: "pass123",
        acctType: "admin",
        balance: 10000
    },
    {
        name: "Nada",
        companyName: "Fenty Beauty",
        username: "nada123",
        password: "pass123",
        acctType: "seller",
        balance: 15000
    },
    {
        name: "Khadeja",
        username: "Khadeja123",
        password: "pass123",
        acctType: "customer",
        balance: 5000
    },
    {
        name: "Fatima",
        username: "Fatima123",
        password: "pass123",
        acctType: "customer",
        balance: 20000
    },
    {
        name: "Sara",
        username: "sara123",
        password: "pass123",
        acctType: "seller",
        balance: 20000
    }
];
const addAccounts = async () => {
    for (const acc of accounts) {
        await acctRepo.addAccount(acc);
    }
};

addAccounts().then(() => {
    console.log("All accounts added successfully!");
}).catch(error => {
    console.error("Error adding accounts:", error);
});

const itemRepo = new ItemRepo()
const items = [
    {
        name: "Blotted Lip",
        description: "Blotted Lip Sheer matte lipstick that creates the perfect popsicle pout! Formula is lightweight, matte and buildable for light to medium coverage.",
        price: 33.25,
        quantity: 4,
        imageUrl: "https://cdn.shopify.com/s/files/1/1338/0845/products/brain-freeze_a_800x1200.jpg?v=1502255076",
    },
    {
        name: "Lippie Stix",
        description: "Lippie Stix Formula contains Vitamin E, Mango, Avocado, and Shea butter for added comfort and moisture. None of our Lippie formulas contain any nasty ingredients like Parabens or Sulfates.",
        price: 45.99,
        quantity: 1,
        imageUrl: "https://cdn.shopify.com/s/files/1/1338/0845/collections/blottedlip-lippie-stix_grande.jpg?v=1512588803"
    },
    {
        name: "No Filter Foundation",
        description: "Developed for the Selfie Age, our buildable full coverage, natural matte foundation delivers flawless looking skin from day-to-night. The oil-free, lightweight formula blends smoothly and is easily customizable to create the coverage you want.",
        price: 100,
        quantity: 1,
        imageUrl: "https://cdn.shopify.com/s/files/1/1338/0845/products/foundations-lineup_800x1200.jpg?v=1528927785"
    },
    {
        name: "Lipstick",
        description: "All of our products are free from lead and heavy metals, parabens, phthalates, artificial colourants, and synthetic fragrances.  Boosh lipstick glides on smoothly for clean & protective SPF coverage.",
        price: 50,
        quantity: 1,
        imageUrl: "https://cdn.shopify.com/s/files/1/1016/3243/products/LIPBALM_LID_grande.jpg?v=1496848378"
    },
    {
        name: "Serum Foundation",
        description: "Serum Foundations are lightweight medium-coverage formulations available in a comprehensive shade range across 21 shades. These foundations offer moderate coverage that looks natural with a very lightweight serum feel.",
        price: 80,
        quantity: 1,
        imageUrl: "https://3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com/products/market-img/rdn-serum-foundation-30-r-30ml.png?v=6ab9fcb8ca2abb9828afcf9dcdad9f94"
    },
    {
        name: "Coverage Foundation",
        description: "Coverage Foundations are full-coverage formulations available in a comprehensive shade range across 21 shades. These foundations contain higher pigment levels than our Serum Foundations but still offer a smooth finish that avoids the heavy makeup look that can make skin appear more aged.",
        price: 70,
        quantity: 1,
        imageUrl: "https://3bc01d2807fb1bc0d25c-a86d2521f1af8989841b9619f5314be5.ssl.cf1.rackcdn.com/products/market-img/rdn-coverage-foundation-33-n-30ml.png?v=daa322f179d80e450613c75826602292"
    },
    {
        name: "Liquid Liner",
        description: "12 hours of long-lasting intense color, transfer-free (leaves no trace on crease above the eyelid), Pure Light Capture, and minerals deliver color and radiance. ",
        price: 30,
        quantity: 1,
        imageUrl: "https://www.purpicks.com/wp-content/uploads/2018/06/Zorah-Biocosmetiques-Liquid-Liner.png"
    },
    {
        name: "Eyeshadow",
        description: "Product Description Anti-aging formula made with organic Pure Argan oil and Pure Light Capture pigments. 24 Hour crease-free intensity (no build-up increase of eyelid).",
        price: 60,
        quantity: 1,
        imageUrl: "https://www.purpicks.com/wp-content/uploads/2018/02/Ombre-Amazonie-CC.png"
    },
    {
        name: "Realist Invisible Setting Powder",
        description: "Keep it real with a polished, soft-focus look using this superfine, loose mineral powder. The healing properties of organic aloe help soothe and calm stressed out skin. Instantly minimize pores, soften imperfections, and creates a matte finish with superfine powder.",
        price: 60,
        quantity: 1,
        imageUrl: "https://www.purpicks.com/wp-content/uploads/2018/06/w3llpeople-Realist-Invisible-Setting-Powder.jpg"
    },
    {
        name: "B Smudged",
        description: "Let your eyes naturally pop with our B Smudged, a subtle eye color that adds a tint of color to the base of your lashes. ",
        price: 50,
        quantity: 1,
        imageUrl: "https://www.purpicks.com/wp-content/uploads/2018/06/Sally-B_s-Skin-Yummies-B-Smudged-1.jpg"
    },
    {
        name: "B Glossy Lip Gloss",
        description: "Intensify your natural lip color with Sally B's B Glossy Lip Gloss, an organic lip gloss that adds a silky smooth hint of color and shimmer to lips. ",
        price: 25,
        quantity: 1,
        imageUrl: "https://www.purpicks.com/wp-content/uploads/2018/06/Sally-B_s-Skin-Yummies-B-Glossy-Lip-Gloss.jpg"
    }
]
const additems = async () => {
    for (const item of items) {
        await itemRepo.addItem(item);
    }
};

additems().then(() => {
    console.log("All accounts added successfully!");
}).catch(error => {
    console.error("Error adding accounts:", error);
});