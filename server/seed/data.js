const productsSeedData = [
  {
    id: 1,
    title: "Rest living set",
    description:
      "A stylish set for a comfortable stay includes a table, a sofa and two armchairs with cushions. Weave: artificial rattan, Frame: aluminum ,Chairs can withstand loads up to 130 kg, Table top: tempered glass Cushions: 100% polyester",
    categories: ["furniture", "living"],
    size: "",
    colors: ["#6e5646", "#886849", "#756a66"],
    img: "1.png",
    price: 7500,
    rating: 4.2,
  },
  {
    id: 2,
    title: "Rest dyning set",
    description:
      "A stylish A dining set for 8 people. Weave: artificial rattan, Frame: aluminum, Chairs can withstand loads up to 140 kg, Table top: tempered glass, Table top: tempered glass",
    categories: ["furniture", "living"],
    size: "",
    colors: ["#745d40", "#886849", "#80665e"],
    img: "2.png",
    price: 12000,
    rating: 4.1,
  },
  {
    id: 3,
    title: "Hanging Chair",
    description:
      "A stylish hanging chair for resting and comfort. Stylish modern design. Max weight upto 135kg. Material : artificial rattan, aluminum frame, metal stand, free 100% polyester cushion",
    categories: ["furniture", "modern"],
    size: "",
    colors: ["#886849", "#80665e", "#745d40"],
    img: "3.png",
    price: 6500,
    rating: 4.1,
  },
  {
    id: 4,
    title: "Hanging Chair Flat",
    description:
      "A stylish hanging chair for resting and comfort. Stylish modern design. Max weight upto 130kg. Material : artificial rattan, aluminum frame, metal stand, free 100% polyester cushion",
    categories: ["furniture", "modern"],
    size: "",
    colors: ["#886849", "#80665e", "#745d40"],
    img: "4.png",
    price: 6000,
    rating: 4.1,
  },
  {
    id: 5,
    title: "Flogingo plant",
    description:
      "A stylish decoration plant for living room. Showcase. create a unified style solution and decorate your house.",
    categories: ["decoration", "modern", "living"],
    size: "",
    colors: ["#382628"],
    img: "5.jpg",
    price: 3000,
    rating: 4.1,
  },
  {
    id: 6,
    title: "Florry plant",
    description:
      "A stylish decoration plant for living room. Showcase. create a unified style solution and decorate your house. Organic",
    categories: ["decoration", "modern", "living", "trending"],
    size: "",
    colors: ["#a9927d"],
    img: "6.jpg",
    price: 3000,
    rating: 4.1,
  },
  {
    id: 7,
    title: "Wooden Round Bowl",
    description:
      "Product Size – Wooden Bowl 6 ½” Diameter x 2 ½” Height – Pure Sheesham Wood Service Plate. Handmade by skilled craftsmen with premium quality finishing. Clean with Dry Cloth Made with high durable quality Wood that gives you assurance of stability of item. Suitable For Kitchen Use, Restaurant Hotels. Sturdy, durable kitchen essential for daily use by housewives & professionals",
    categories: ["kitchen", "accessories", "trending"],
    size: "",
    colors: ["#c79a80"],
    img: "7.webp",
    price: 350,
    rating: 4.5,
  },
  {
    id: 8,
    title: "Cleaning Tray",
    description:
      "Dustpan and brush set work together for quick, easy cleanups of dust, dirt, crumbs, and other dry messes.Made of durable Plastic. Soft 2-inch bristles; ergonomic brush handle provides a comfortable, secure grip",
    categories: ["accessories"],
    size: "",
    colors: ["#323433", "#e2e2e2"],
    img: "8.webp",
    price: 350,
    rating: 4.5,
  },
  {
    id: 9,
    title: "Magic Reachargable Desk Lamp",
    description:
      "Reachargable lamp with USB type C charger. Fast chanrging. 10Hrs Long Duration backup. Portable, durable. 29D x 10W x 3H Centimeters",
    categories: ["lighting", "modern"],
    size: "",
    colors: ["#323433", "#e2e2e2"],
    img: "9.webp",
    price: 1200,
    rating: 3.9,
  },
  {
    id: 10,
    title: "Night Lamp with Speaker",
    description:
      "Bedside night light illuminates the dark night, hands-free call to let go of your hands. Comfortable button one key adjustment, sensitive operation, non-slip base, the table to prevent slipping off. 360 ° surround sound sound quality is more outstanding, high hard disk technology, three-dimensional original sound, a variety of connection methods. 2 Years Warrandy. Bluetooth Connectivity.",
    categories: ["lighting", "modern", "decoration", "smarthome", "trending"],
    size: "",
    colors: ["#86929b", "#ffdccb", "#514f4d", "#858179", "#ecf2ce"],
    img: "10.webp",
    price: 1500,
    rating: 4.5,
  },
  {
    id: 11,
    title: "Modern Fabric Chair",
    description:
      "Product Dimensions: Height - 30.0 inches, Width - 19.0 inches, Diameter - 19.0 inches, Weight Capacity: 100 Kg. Fabric Padded seat and backrest, ergonomic design, anti-dirty material that is easy to dry clean. Metal tube with black powder-coated legs, fixed seat base with sturdy legs, strong rolling resistance, comfortable backrest design. Lightweight but sturdy, suitable for various room types, including small apartments.",
    categories: ["furniture", "living", "office", "modern", "trending"],
    size: "(30 X 19 X 19) inches",
    colors: ["#677271", "#696969", "#a1a1a1"],
    img: "11.webp",
    price: 2500,
    rating: 3.8,
  },
  {
    id: 12,
    title: "Fabric Marius Stool",
    description:
      "Tested for: 100 kg (220 lb) Seat diameter: 32 cm  Width: 40 cm  Seat height: 45 cm . Low-seating furniture designed for a variety of settings. Typically consists of a flat seat or cushioned pad supported by legs or a central column. Usefull in small space areas.",
    categories: ["modern", "furniture", "kitchen", "living"],
    size: "Medium",
    colors: ["#6a8266", "#454545", "#ddc098"],
    img: "12.webp",
    price: 999,
    rating: 3.8,
  },
  {
    id: 13,
    title: "MadeWood Table with Sideboard",
    description:
      "The sideboard is configured with three drawers on the left side and two doors on the right. The top drawer is slightly slimmer than the ones below, making it ideal for cutlery. All the sideboards handles are made of rectangular solid wood. This is a relatively high sideboard that appears to almost glide on its distinctively angled legs. It is a robust piece, ideal for dining and living areas.",
    categories: ["furniture", "classic", "storage"],
    size: "750mm x 1800mm x 500m (H x W x D )",
    colors: ["#ccae89", "#6b4c42", "#262529"],
    img: "13.webp",
    price: 12000,
    rating: 3.9,
  },
  {
    id: 14,
    title: "Wood small stool",
    description:
      "Wooden  Stool for Office AND Kitchen.  SIDE STOOL, plant stand,solid wood - Flower stand FOR HOME DECOR (12INCH). Having wooden stools in your home showcase your style and personality. This Stool is an ideal height for a lamp or other items you need to keep within easy reach. ",
    categories: ["furniture", "classic", "outdoor"],
    size: "30.5D x 30.5W x 30.5H Centimeters",
    colors: ["#dbaf7e"],
    img: "14.webp",
    price: 2199,
    rating: 3.8,
  },
  {
    id: 15,
    title: "Arch Wall Mirror",
    description:
      "This beautifully designed arch mirror has a classic appeal that will fit in with a variety of styles from modern to traditional tastes. All the fixing will be along with the package. The reflective surface of the mirror stickers makes your room brighter, and these mirror wall stickers can be pasted on any smooth and clean surface.",
    categories: [],
    size: "80L x 50W Cm",
    colors: ["decoration", "classic", "living"],
    img: "15.webp",
    price: 3599,
    rating: 3.8,
  },

  {
    id: 16,
    title: "Classic Oak Dining Table",
    description: "Solid oak dining table with a timeless design.",
    categories: ["furniture", "classic"],
    colors: [],
    price: 5599,
    img: "16.webp",
    size: "8-seater",
    rating: 4.7,
  },
  {
    id: 17,
    title: "Comfortable Leather Dining Chair",
    description: "Luxurious leather chair for a comfortable dining experience.",
    categories: ["furniture", ""],
    colors: ["#ddd"],
    price: 1229,
    img: "17.webp",
    size: "single",
    rating: 4.5,
  },
  {
    id: 18,
    title: "Modern Sectional Sofa",
    description: "Contemporary sectional sofa with adjustable backrests.",
    categories: ["furniture"],
    colors: [],
    price: 3899,
    img: "18.webp",
    size: "3-seater",
    rating: 4.8,
  },
  {
    id: 19,
    title: "Spacious Wardrobe",
    description: "Large wardrobe with ample storage space.",
    categories: ["furniture"],
    colors: [],
    price: 1799,
    img: "19.webp",
    size: "double",
    rating: 4.6,
  },
  {
    id: 20,
    title: "Wooden Study Desk",
    description: "Sturdy study desk with multiple drawers for organization.",
    categories: ["furniture"],
    colors: [],
    price: 2249,
    img: "20.webp",
    size: "medium",
    rating: 4.3,
  },
  {
    id: 21,
    title: "Elegant Bedside Table",
    description: "Chic bedside table with a drawer for essential storage.",
    categories: ["furniture"],
    colors: [],
    price: 1579,
    img: "21.webp",
    size: "compact",
    rating: 4.2,
  },
  {
    id: 22,
    title: "Plush Leather Recliner",
    description: "Comfortable leather recliner with adjustable positions.",
    categories: ["furniture"],
    colors: [],
    price: 2499,
    img: "22.webp",
    size: "single",
    rating: 4.7,
  },
  {
    id: 23,
    title: "Convertible Sleeper Sofa",
    description: "Versatile sofa that transforms into a sleeper for guests.",
    categories: ["furniture", "living"],
    colors: [],
    price: 3749,
    img: "23.webp",
    size: "3-seater",
    rating: 4.5,
  },
  {
    id: 24,
    title: "Antique Wooden Bookshelf",
    description: "Antique-style bookshelf with intricate carvings.",
    categories: ["furniture", "living"],
    colors: [],
    price: 4329,
    img: "24.webp",
    size: "large",
    rating: 4.4,
  },
  {
    id: 25,
    title: "Modern Glass Coffee Table",
    description: "Sleek and stylish coffee table with a tempered glass top.",
    categories: ["furniture", "living"],
    colors: [],
    price: 2179,
    img: "25.webp",
    size: "small",
    rating: 4.6,
  },
  {
    id: 26,
    title: "Contemporary Armchair",
    description: "Stylish armchair for a cozy and modern living space.",
    categories: ["furniture", "living"],
    colors: [],
    price: 2189,
    img: "26.webp",
    size: "single",
    rating: 4.3,
  },
  {
    id: 27,
    title: "Solid Wood Dresser",
    description: "Durable dresser with spacious drawers for storage.",
    categories: ["furniture", "classic"],
    colors: [],
    price: 2429,
    img: "27.webp",
    size: "medium",
    rating: 4.5,
  },
  {
    id: 28,
    title: "Rustic Console Table",
    description: "Console table with a rustic finish for entryway charm.",
    categories: ["furniture", "modern"],
    colors: [],
    price: 1496,
    img: "28.webp",
    size: "compact",
    rating: 4.4,
  },
  {
    id: 29,
    title: "Ziba Swivel modern Chair",
    description: "Comfortable bar stool with stylish upholstery.",
    categories: ["furniture", "modern"],
    colors: [],
    price: 2589,
    img: "29.webp",
    size: "single",
    rating: 4.2,
  },
  {
    id: 30,
    title: "Platform Bed - Blue Velvet",
    description:
      "platform bed with a sturdy wooden frame. 5 years warranty. Extra spacious.",
    categories: ["furniture"],
    colors: ["#152233"],
    img: "30.webp",
    price: 45299,
    size: "king",
    rating: 4.7,
  },
  {
    id: 31,
    title: "Venice Kings Bed - Drawer",
    description:
      "Storage option in the bed space. 5 years warranty. unique and comfort.",
    categories: ["furniture"],
    size: "queen",
    colors: [],
    img: "31.webp",
    price: 35000,
    rating: 4.2,
  },

  {
    id: 32,
    title: "Modern Pendant Light",
    description:
      "Sleek and contemporary pendant light for stylish illumination.",
    categories: ["lighting"],
    colors: [],
    img: "32.webp",
    price: 1289,
    size: "medium",
    rating: 4.5,
  },
  {
    id: 33,
    title: "Adjustable Floor Lamp",
    description:
      "Floor lamp with adjustable height and direction for flexible lighting.",
    categories: ["lighting", "modern"],
    colors: [],
    price: 1292,
    img: "33.webp",
    size: "floor",
    rating: 4.7,
  },
  {
    id: 34,
    title: "Elegant Chandelier",
    description:
      "Charming chandelier with crystal accents for a touch of luxury.",
    categories: ["lighting", "classic"],
    colors: [],
    img: "34.webp",
    price: 2994,
    size: "medium",
    rating: 4.8,
  },
  {
    id: 35,
    title: "LED Wall Sconce",
    description:
      "Energy-efficient LED wall sconce with modern design. This Wall Fixture Comes Fitted With An E-27 Bulb Holder. Easy to Install. All types of kit sued in installation are in the package. ",
    categories: ["lighting"],
    colors: [],
    img: "35.webp",
    price: 899,
    size: "wall",
    rating: 4.4,
  },
  {
    id: 36,
    title: "Industrial Table Lamp",
    description:
      "Industrial-style table lamp with metal accents for a rustic touch.",
    categories: ["lighting", "decoration"],
    colors: [],
    img: "36.webp",
    price: 799,
    size: "table",
    rating: 4.6,
  },
  {
    id: 37,
    title: "Smart LED Bulb Kit",
    description: "Smart LED bulb kit with customizable colors and app control.",
    categories: ["lighting", "decoration", "smarthome"],
    colors: [],
    img: "37.jpg",
    price: 698,
    size: "bulb",
    rating: 4.5,
  },
  {
    id: 38,
    title: "Vintage Desk Lamp",
    description: "Vintage-inspired desk lamp with adjustable arm and shade.",
    categories: ["lighting", "classic"],
    colors: [],
    img: "38.jpg",
    price: 999,
    size: "desk",
    rating: 4.3,
  },
  {
    id: 39,
    title: "Outdoor Solar Lanterns",
    description:
      "Solar-powered lanterns for outdoor lighting with a classic design.",
    categories: ["lighting", "smarthome"],
    colors: [],
    price: 1299,
    img: "39.jpg",
    size: "outdoor",
    rating: 4.2,
  },
  {
    id: 40,
    title: "DIGISMART Ceiling Fan with Light",
    description:
      "Ceiling fan with integrated light for dual functionality. 6 Speed control with booster mode. 380 rpm. 6 blades bldc. Super Efficient.",
    categories: ["lighting", "smarthome"],
    colors: [],
    img: "40.jpg",
    price: 10199,
    size: "ceiling",
    rating: 4.7,
  },
  {
    id: 41,
    title: "Minimalist Track Lighting",
    description:
      "Minimalist track lighting system with adjustable fixtures. 10 watt 360 degree adjustable cob track light. -year warranty.360 degree track light adopt a 10w led chip which provides an ample amount of luminance with a 24-degree beam angle. ",
    categories: ["lighting"],
    colors: [],
    img: "41.jpg",
    price: 1099,
    size: "track",
    rating: 4.6,
  },

  {
    id: 42,
    title: "Smart Door Lock - Hero",
    description:
      "5- WAY UNLOCKING: Unlock using Fingerprint, Passcode, Bluetooth Mobile APP, RFID Access card or Emergency keys.Register upto 50 Fingerprints. Get 2 RFID Access Cards. Keep a tab with Activity logs via BLE Qubo Mobile App. Use Pincode with decoy digits to keep your code spy safe. Aluminium alloy body, Finish: Premium Mirror Finish ",
    categories: ["smarthome"],
    size: "24.5 x 7 x 15 Cm",
    colors: ["#0f0e0c", "#a3705f"],
    img: "42.jpg",
    price: 8720,
    rating: 4.1,
  },
  {
    id: 43,
    title: "Tapo Smart Motion Detect Light",
    description:
      "Create a Smart Action to automate your smart devices and activate them all with motion. Customize your own Smart Actions to group your Tapo products together any way you want. Hands free control. guard home while you away. Long lasting and durable.",
    categories: ["smarthome", "lighting"],
    size: "34D x 42W x 42H mm ",
    colors: ["#ddd", "#1298bb"],
    img: "43.jpg",
    price: 1520,
    rating: 3.5,
  },
  {
    id: 44,
    title: "Wall clock",
    description:
      "The perfect wall clock for an office, classroom, bedroom, bathroom and any room in your home; Silent wall clock: No annoying ticking. Precise quartz sweep movement guarantees accurate time and absolutely silent environment",
    categories: ["accessories", "decoration"],
    size: "12W x 12H Cm",
    colors: ["#747776", "#71726d"],
    img: "44.webp",
    price: 645,
    rating: 3.8,
  },
  {
    id: 45,
    title: "Cotton Basket",
    description:
      "Washable: Best way to clean the rope basket is spot wash with warm water and dry in the sun or near a radiator. Stubborn stains can be washed with a little baking soda paste and warm water. Hot water will shrink the cotton. Stylish storage. Multi uses. Rope material eco friendly.",
    categories: ["accessories", "decoration", "storage"],
    size: "40L x 32W x 40H cm",
    colors: ["#5881bf", "#d9653e", "#28333f"],
    img: "45.webp",
    price: 325,
    rating: 3.8,
  },
  {
    id: 46,
    title: "Artificial plant",
    description:
      "Artificial Monstera Plant brought to you by Blooming Floret, also known as the Swiss Cheese Plant or split-leaf philodendron is native to Central America. The split cut of the leaves resembles Swiss Cheese & adds a uniqueness to the place. You can place it anywhere in your home or office and it will make your room look more vibrant",
    categories: ["accessories", "decoration"],
    size: "40L x 32W x 40H cm",
    colors: ["#5881bf", "#d9653e", "#28333f"],
    img: "46.webp",
    price: 579,
    rating: 3.8,
  },

  {
    id: 47,
    title: "Multi Stackable Storage",
    description:
      "Pack of 6. Good Quality material Polypropylene. Easily stacked one on top of the other, magically creating more space in your wardrobe, Avoid Creases in clothes. Lightweight",
    categories: ["accessories", "storage"],
    size: "45L x 33W x 22H cm",
    colors: ["#a27353", "#958b81"],
    img: "47.webp",
    price: 800,
    rating: 3.7,
  },

  {
    id: 48,
    title: "Multi-Purpose Trolley",
    description:
      "1 Set Drawer Organizer 3 Layer.The trolley rotates freely 360° with 2 lockable universal rollers at the bottom, which help the cart can move freely and turn effortlessly stop the cart in small spaces. Easy to clean, just wipe it with a wet towel. Easy to clean, use and manage. ",
    categories: ["accessories", "kitchen"],
    size: "30D x 30W x 40H cm",
    colors: ["#a27353", "#958b81"],
    img: "48.jpg",
    price: 1879,
    rating: 3.7,
  },

  {
    id: 49,
    title: "Pigeon by Stovekraft Angular Holder Knife",
    description:
      "3 Set. Shears Knife set includes 1 - Boner Knife (25cm), 1- Utility Knife (23cm), 1- Steak Knife(22cm), 1- paring Knife(18cm), 1 - Kitchen Scissor (21cm) & 1 - Wooden Stand. ",
    categories: ["accessories", "kitchen"],
    size: "30D x 30W x 40H cm",
    colors: ["#f7e1c4", "#11181f"],
    img: "49.jpg",
    price: 1035,
    rating: 3.4,
  },

  {
    id: 50,
    title: "Heavy Duty Outdoor Garden Bench",
    description:
      "Garden bench made out of natural wood. Relax and spend some time in your garden.Beautiful design will enhance the aesthetics of your garden. Wood with natural resistance to moisture, decay and insect damage.  ",
    categories: ["outdoor", "furniture"],
    size: "57D x 160W x 77H cm",
    colors: ["#825242", "#c98d59"],
    img: "50.webp",
    price: 8974,
    rating: 2.8,
  },
];


module.exports = {
  productsSeedData
}