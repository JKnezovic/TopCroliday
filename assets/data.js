export const prestay = [
  (fridge = {
    color: "#007d8c",
    iconName: "fast-food",
    name: "Food and drink",
    key: 1,
  }),
  (activities = {
    color: "#00ac8d",
    iconName: "bicycle",
    name: "Activities",
    key: 2,
  }),
  (transfer = {
    color: "#004e70",
    iconName: "car",
    name: "Transfer",
    key: 3,
  }),
  (cleaning = {
    color: "#007d8c",
    iconName: "home",
    name: "Cleaning Services",
    key: 4,
  }),
];

export const mainscreen = [
  (pre = {
    uri: require("../assets/prestay.jpeg"),
    title: "PreStay",
    desc: "Here you can explore and pick all the top activities you would like to try and other services you may need.",
    key: 5,
  }),
  (during = {
    uri: require("../assets/duringstay.jpg"),
    title: "DuringStay",
    desc: "Take a look at some sights worth exploiting, restaurants, beaches, museums and galleries worth visiting.",
    key: 6,
  }),
  (post = {
    uri: require("../assets/post2.jpg"),
    title: "PostStay",
    desc: "Tell us how did you like your accommodation as well as was this app any helpful to you?",
    key: 7,
  }),
];

export const foodAndDrink = [
  {
    id: 1,
    name: "Basic breakfast",
    description: `Oats (500g) / Chocolate spread (400g) / Marmelade (450g) / Butter (250g) / Eggs (12pcs) / Milk (2L) / Joghurt (1L) + Greek joghurt (450g) / Instant Coffee (8pcs) / Bread (2kg) / Salami + Cheese`,
    price: "50EUR",
    iconName: "free-breakfast",
    iconBank: "MaterialIcons",
  },
  {
    id: 2,
    name: "Kids breakfast",
    description: `Chocolate cereal (500g) / Pudding (8pcs) / Fruit joghurt (1L)`,
    price: "20EUR",
    iconName: "child",
    iconBank: "FontAwesome",
  },
  {
    id: 6,
    name: "Juice packages",
    description: `Coca-Cola cans (24x150ml) / Cappy limonade (2x1.25L) / 'Pipi' juice (8x0.5L) / Cedevita juice -powder (200g) / Ice tea – lemon and peach (4x1.5L)`,
    price: "60EUR",
    iconName: "bottle-soda-classic",
    iconBank: "MaterialCommunityIcons",
  },
  {
    id: 3,
    name: "Beer package",
    description: `40pcs of various croatian craft beer`,
    price: "120EUR",
    iconName: "beer",
    iconBank: "Ionicons",
  },
  {
    id: 4,
    name: "Wine package",
    description: `'Life is too short to drink bad wine'- that is why we leave this decision only up to you. Tell us what are your favourite wine and leave the rest on us.`,
    price: "The price depends on the type and the quantity of wine.",
    iconName: "wine-glass-alt",
    iconBank: "FontAwesome5",
  },
];
export const cleaningServices = [
  {
    id: 1,
    option: "Yes, I would like cleaning services.",
    iconName: "cleaning-services",
  },
];
export const transferServices = [
  {
    id: 1,
    option: "Airport to accommodation",
    iconName: "plane-arrival",
  },
  {
    id: 2,
    option: "Accommodation to airport",
    iconName: "plane-departure",
  },
];

export const FAQdata = [
  {
    question: "Public transport?",
    answer: `
Here is a link to Promet Split app which containtes all bus lines, and you can buy bus tickets for half the price when using the app:

Google Play: https://play.google.com/store/apps/details?id=hr.prometsplit.mobile&hl=hr&gl=US
App Store: https://apps.apple.com/hr/app/promet-split/id1609058919


      •	Stobreč → Split bus nu. 25
      •	Strožanac → Split bus nu. 60 and 30
      •	Omiš → Split bus nu. 60
      `,
  },
  {
    question: "Ferry lines to different islands from Split?",
    answer: `
Here is the link with schedule and tickets:
      https://www.jadrolinija.hr/en/home
    `,
  },
  {
    question: "Famous sand beaches in Split and surroundings?",
    answer: `
 •	Beach ‘Bačvice’ in Split
 •	Beach ‘Duće’ in Omiš

Other beautiful beaches are mostly pebble beaches.
      `,
  },
  {
    question: "A few traditional dalmatian meals worth trying:",
    answer: `
 •	Pašticada → braised beef dish cooked in a fragrant sweet and sour sauce

 •	Brudet → traditional dish made from several types of fish and vegetables

 •	Peka → traditional baking bell (made of clay or metal) used when cooking in the open fire and covered with hot coals. It is very versatile: bread, lamb, kid, veal, octopus, chicken, vegetables, big fish like sea
      `,
  },
  {
    question: "Tipping in Croatia",
    answer: `
Tipping is appreciated, but not always expected. If you’re ordering just coffee or a drink, leave the change. For a quick, casual dinner at a konoba, as taverns are called, leave about 3 to 5 % of the bill. For dinner in a nice restaurant, where tips usually are not included, leave about 10%. `,
  },
  {
    question: "Some basic Croatian words",
    answer: `
    •	Hvala → Thank you
    •	Dobar dan → Good day
    •	Dobra večer → Good evening
    •	Doviđenja → Good bye
    •	Bok → Hi / Bye
    •	Molim → Please
    `,
  },
];

export const infoCleaningServices = `Should you need cleaning services during your stay, we stay at your disposal. The prices for cleaning vary depending on the type of the service.

Please give us a week up front notice.`;

export const infoTransfer = {
  description: `You need transfer/ taxi services during your stay? We give you the phone number of our trusted taxi partner
Josip Gale:   `,
  phoneNumber: "+385 1234 567",
};

export const modalText = {
  title: `Notice !`,
  description: `By clicking and submitting your desired activity you are not booking it, but helping us make an offer to you based on your interest.
  Remember the prices are informative and can vary!`,
};
