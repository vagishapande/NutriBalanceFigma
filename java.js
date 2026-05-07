
// ─── Predefined Data Engine ───────────────────────────────────────────────────
const EXPLORE_DB = {
  'weight loss': [
    {"category":"Green Leafy Vegetables","emoji":"🥬","description":"Palak, methi aur sarson ke saag mein calories kam aur fiber zyada hota hai. Weight loss ke liye ideal hain kyunki pet bhar jaata hai.","protein":3,"carbs":5,"fats":0,"calories":30},
    {"category":"Dal & Lentils","emoji":"🫘","description":"Moong dal aur masoor dal protein se bharpur hain. High fiber content hunger ko control karta hai.","protein":18,"carbs":40,"fats":2,"calories":230},
    {"category":"Chaas (Buttermilk)","emoji":"🥛","description":"Low-fat chaas digestion improve karta hai aur hydrated rakhta hai. Calories bahut kam hain.","protein":3,"carbs":5,"fats":1,"calories":40},
    {"category":"Cucumber & Salad","emoji":"🥒","description":"Kheera 96% paani se bana hota hai. Snack mein kheera khane se calories nahi badhti.","protein":1,"carbs":4,"fats":0,"calories":20},
  ],
  'protein rich': [
    {"category":"Paneer","emoji":"🧀","description":"Paneer mein casein protein hota hai jo slowly absorb hota hai. Gym ke baad khana best rehta hai.","protein":18,"carbs":2,"fats":14,"calories":265},
    {"category":"Rajma (Kidney Beans)","emoji":"🫘","description":"Rajma ek complete protein source hai jo iron aur fiber bhi provide karta hai.","protein":22,"carbs":40,"fats":1,"calories":230},
    {"category":"Greek Yogurt / Dahi",
      "emoji":"🥣",
      "description":"Dahi mein probiotics aur protein dono hote hain. Gut health ke liye bhi bahut achha hai.",
      "protein":10,
      "carbs":8,
      "fats":3,
      "calories":100},
    {
      "category":"Soybean",
      "emoji":"🫘",
      "description":"Soybean plant-based protein ka bahut achha source hai. Yeh muscles build karne aur body ko energy dene mein help karta hai.",
      "protein":36,
      "carbs":30,
      "fats":20,
      "calories":446
    },
  ],

  'iron deficiency': [
    {"category":"Spinach (Palak)","emoji":"🥬","description":"Palak non-heme iron ka sabse achha source hai. Vitamin C ke saath khane se absorption badhti hai.","protein":3,"carbs":4,"fats":0,"calories":25},
    {"category":"Rajma & Chhole","emoji":"🫘","description":"Legumes mein iron aur folate dono hote hain. Iron deficiency anemia mein bahut helpful.","protein":15,"carbs":40,"fats":1,"calories":220},
    {"category":"Kaju & Dried Fruits","emoji":"🥜","description":"Kishmish aur khajoor iron se bharpur hote hain. Raat ko bhigoke subah khaana best rahta hai.","protein":3,"carbs":25,"fats":5,"calories":150},
    {"category":"Fortified Cereals","emoji":"🌾","description":"Iron-fortified daliya ya oats subah ke liye best hain. Vitamin C ke juice ke saath khayein.","protein":4,"carbs":30,"fats":1,"calories":150}
  ],
  'vitamin d': [
    {"category":"Fortified Milk & Dahi","emoji":"🥛","description":"Vitamin D fortified milk daily peeyen. Calcium aur Vitamin D dono ek saath milte hain.","protein":8,"carbs":12,"fats":3,"calories":110},
    {"category":"Mushrooms","emoji":"🍄","description":"Mushrooms ko 2 ghante dhoop mein rakhne par Vitamin D naturally ban jaata hai.","protein":3,"carbs":5,"fats":0,"calories":35},
    {"category":"Paneer","emoji":"🧀","description":"Dairy products mein Vitamin D hota hai. Paneer ko daily diet mein shamil karein.","protein":18,"carbs":2,"fats":14,"calories":265},
    {"category":"Ghee","emoji":"🫙","description":"Pure desi ghee mein fat-soluble Vitamin D hota hai. Dal-chawal mein 1 tsp ghee zaroor daalein.","protein":0,"carbs":0,"fats":12,"calories":112}
  ],
  'low carb': [
    {"category":"Paneer Bhurji","emoji":"🧀","description":"Paneer bhurji mein high protein aur near-zero carbs hote hain. Keto diet ke liye perfect hai.","protein":18,"carbs":3,"fats":14,"calories":220},
    {"category":"Avocado / Nuts","emoji":"🥑","description":"Healthy fats se bhari cheezein low-carb diet mein energy deti hain. Almonds aur walnuts achhe hain.","protein":4,"carbs":4,"fats":22,"calories":230},
    {"category":"Leafy Greens","emoji":"🥬","description":"Palak, gobhi, beans mein carbs bahut kam hote hain. Saute karke ya salad mein khaayein.","protein":3,"carbs":5,"fats":0,"calories":30},
    {"category":"Dahi (Plain)","emoji":"🥣","description":"Plain dahi mein carbs kam hote hain aur protein achha hota hai. Raita ya directly khaayein.","protein":10,"carbs":8,"fats":3,"calories":100}
  ],
  'high fiber': [
    {"category":"Rajma & Chhole","emoji":"🫘","description":"Legumes mein soluble fiber hota hai jo cholesterol kam karta hai aur digestion improve karta hai.","protein":15,"carbs":40,"fats":1,"calories":220},
    {"category":"Isabgol (Psyllium)","emoji":"🌱","description":"Isabgol fiber ka sabse concentrated source hai. Raat ko paani mein mila ke peeyen.","protein":0,"carbs":8,"fats":0,"calories":30},
    {"category":"Fruits with Skin","emoji":"🍎","description":"Seb, nashpati chhilke ke saath khaayein. Chhilke mein fiber ki matra zyada hoti hai.","protein":0,"carbs":20,"fats":0,"calories":80},
    {"category":"Flaxseeds (Alsi)","emoji":"🌰","description":"Alsi mein soluble aur insoluble dono fiber hote hain. Smoothie ya dahi mein mila ke khaayein.","protein":5,"carbs":8,"fats":9,"calories":150},
    {"category":"Green Vegetables","emoji":"🥦","description":"Broccoli, beans, gobhi sabzi fiber se bharpur hain. Daily vegetable intake zyada rakhen.","protein":3,"carbs":10,"fats":0,"calories":55}
  ]
};

const MEAL_PLANS = {
  default: {
    days: [
      {day:"Monday",meals:[
        {type:"Breakfast",name:"Moong Dal Chilla with Mint Chutney",calories:280,protein:14,carbs:32,fats:6,time:"8:00 AM"},
        {type:"Lunch",name:"Brown Rice + Dal Tadka + Palak Sabzi",calories:480,protein:18,carbs:72,fats:8,time:"1:00 PM"},
        {type:"Snack",name:"Roasted Chana + Chaas",calories:180,protein:9,carbs:22,fats:3,time:"4:30 PM"},
        {type:"Dinner",name:"Grilled Paneer Tikka + Salad + Roti",calories:420,protein:22,carbs:38,fats:14,time:"8:00 PM"}
      ]},
      {day:"Tuesday",meals:[
        {type:"Breakfast",name:"Oats Poha with Vegetables",calories:260,protein:8,carbs:42,fats:5,time:"8:00 AM"},
        {type:"Lunch",name:"Rajma Chawal + Cucumber Raita",calories:520,protein:20,carbs:80,fats:6,time:"1:00 PM"},
        {type:"Snack",name:"Apple + Handful Almonds",calories:200,protein:5,carbs:28,fats:9,time:"4:30 PM"},
        {type:"Dinner",name:"Chicken/Tofu Curry + 2 Rotis",calories:450,protein:28,carbs:42,fats:12,time:"8:00 PM"}
      ]},
      {day:"Wednesday",meals:[
        {type:"Breakfast",name:"Upma with Sambar",calories:300,protein:9,carbs:48,fats:7,time:"8:00 AM"},
        {type:"Lunch",name:"Chole + Jeera Rice + Onion Salad",calories:500,protein:18,carbs:78,fats:8,time:"1:00 PM"},
        {type:"Snack",name:"Banana Smoothie with Dahi",calories:190,protein:7,carbs:32,fats:3,time:"4:30 PM"},
        {type:"Dinner",name:"Palak Paneer + 2 Phulkas",calories:430,protein:20,carbs:40,fats:16,time:"8:00 PM"}
      ]},
      {day:"Thursday",meals:[
        {type:"Breakfast",name:"Besan Cheela + Green Chutney",calories:270,protein:12,carbs:30,fats:7,time:"8:00 AM"},
        {type:"Lunch",name:"Dal Makhani + Brown Rice + Salad",calories:490,protein:17,carbs:70,fats:12,time:"1:00 PM"},
        {type:"Snack",name:"Roasted Makhana (Fox Nuts)",calories:150,protein:5,carbs:28,fats:2,time:"4:30 PM"},
        {type:"Dinner",name:"Fish Curry / Mix Veg + 2 Rotis",calories:410,protein:25,carbs:38,fats:10,time:"8:00 PM"}
      ]},
      {day:"Friday",meals:[
        {type:"Breakfast",name:"Dosa with Sambar & Coconut Chutney",calories:320,protein:8,carbs:55,fats:7,time:"8:00 AM"},
        {type:"Lunch",name:"Kadhi Chawal + Aloo Gobi Sabzi",calories:470,protein:14,carbs:75,fats:9,time:"1:00 PM"},
        {type:"Snack",name:"Sprouts Chaat with Lemon",calories:160,protein:8,carbs:25,fats:2,time:"4:30 PM"},
        {type:"Dinner",name:"Egg Bhurji / Paneer Bhurji + 2 Rotis",calories:440,protein:24,carbs:38,fats:15,time:"8:00 PM"}
      ]},
      {day:"Saturday",meals:[
        {type:"Breakfast",name:"Poha with Peanuts & Lemon",calories:290,protein:7,carbs:48,fats:7,time:"8:00 AM"},
        {type:"Lunch",name:"Biryani (Chicken/Veg) + Raita",calories:560,protein:22,carbs:82,fats:14,time:"1:00 PM"},
        {type:"Snack",name:"Fresh Fruit Chaat",calories:140,protein:2,carbs:32,fats:0,time:"4:30 PM"},
        {type:"Dinner",name:"Grilled Chicken / Mushroom Masala + Rice",calories:460,protein:28,carbs:45,fats:12,time:"8:00 PM"}
      ]},
      {day:"Sunday",meals:[
        {type:"Breakfast",name:"Aloo Paratha (1) + Dahi",calories:340,protein:9,carbs:52,fats:11,time:"8:30 AM"},
        {type:"Lunch",name:"Dal Fry + Jeera Rice + Papad + Salad",calories:500,protein:18,carbs:76,fats:9,time:"1:30 PM"},
        {type:"Snack",name:"Chai + 2 Whole Wheat Biscuits",calories:130,protein:3,carbs:20,fats:4,time:"5:00 PM"},
        {type:"Dinner",name:"Mutton/Soya Curry + 2 Rotis + Salad",calories:480,protein:30,carbs:40,fats:16,time:"8:00 PM"}
      ]}
    ]
  },
  'weight loss': {
    days: [
      {day:"Monday",meals:[
        {type:"Breakfast",name:"Oats with Chia Seeds & Banana",calories:220,protein:8,carbs:36,fats:4,time:"8:00 AM"},
        {type:"Lunch",name:"Moong Dal + 1 Roti + Green Salad",calories:340,protein:16,carbs:50,fats:5,time:"1:00 PM"},
        {type:"Snack",name:"Cucumber + Lemon Chaas",calories:80,protein:3,carbs:8,fats:1,time:"4:30 PM"},
        {type:"Dinner",name:"Grilled Chicken / Tofu + Steamed Veggies",calories:320,protein:28,carbs:18,fats:8,time:"7:30 PM"}
      ]},
      {day:"Tuesday",meals:[
        {type:"Breakfast",name:"2 Boiled Eggs + 1 Whole Wheat Toast",calories:220,protein:14,carbs:20,fats:9,time:"8:00 AM"},
        {type:"Lunch",name:"Rajma (Small Bowl) + Brown Rice + Salad",calories:380,protein:17,carbs:58,fats:4,time:"1:00 PM"},
        {type:"Snack",name:"Apple + 6 Almonds",calories:130,protein:3,carbs:22,fats:5,time:"4:30 PM"},
        {type:"Dinner",name:"Palak Soup + 1 Roti + Dahi",calories:280,protein:14,carbs:32,fats:6,time:"7:30 PM"}
      ]},
      {day:"Wednesday",meals:[
        {type:"Breakfast",name:"Moong Dal Chilla (2) + Green Chutney",calories:240,protein:13,carbs:28,fats:5,time:"8:00 AM"},
        {type:"Lunch",name:"Grilled Fish / Paneer + Salad + Roti",calories:360,protein:26,carbs:32,fats:10,time:"1:00 PM"},
        {type:"Snack",name:"Roasted Chana (Small Handful)",calories:100,protein:6,carbs:14,fats:2,time:"4:30 PM"},
        {type:"Dinner",name:"Vegetable Soup + 1 Phulka + Dahi",calories:260,protein:10,carbs:38,fats:4,time:"7:30 PM"}
      ]},
      {day:"Thursday",meals:[
        {type:"Breakfast",name:"Greek Dahi + Banana + Flaxseeds",calories:200,protein:12,carbs:28,fats:4,time:"8:00 AM"},
        {type:"Lunch",name:"Chole (Small) + 1 Roti + Onion Salad",calories:350,protein:14,carbs:52,fats:6,time:"1:00 PM"},
        {type:"Snack",name:"Sprouts Chaat",calories:110,protein:7,carbs:18,fats:1,time:"4:30 PM"},
        {type:"Dinner",name:"Dal Soup + Steamed Broccoli + 1 Roti",calories:270,protein:13,carbs:36,fats:5,time:"7:30 PM"}
      ]},
      {day:"Friday",meals:[
        {type:"Breakfast",name:"Poha (Light) with Peas & Lemon",calories:210,protein:5,carbs:38,fats:4,time:"8:00 AM"},
        {type:"Lunch",name:"Masoor Dal + Brown Rice (Small) + Salad",calories:370,protein:16,carbs:54,fats:5,time:"1:00 PM"},
        {type:"Snack",name:"Orange + Herbal Tea",calories:70,protein:1,carbs:16,fats:0,time:"4:30 PM"},
        {type:"Dinner",name:"Egg Bhurji (2 Eggs) + 1 Roti + Salad",calories:300,protein:18,carbs:28,fats:12,time:"7:30 PM"}
      ]},
      {day:"Saturday",meals:[
        {type:"Breakfast",name:"Besan Cheela + Mint Chutney",calories:230,protein:11,carbs:26,fats:6,time:"8:00 AM"},
        {type:"Lunch",name:"Chicken / Soya Curry + 1 Roti + Salad",calories:380,protein:28,carbs:34,fats:10,time:"1:00 PM"},
        {type:"Snack",name:"Coconut Water + 5 Walnuts",calories:120,protein:2,carbs:16,fats:7,time:"4:30 PM"},
        {type:"Dinner",name:"Vegetable Khichdi (Light) + Chaas",calories:290,protein:10,carbs:44,fats:5,time:"7:30 PM"}
      ]},
      {day:"Sunday",meals:[
        {type:"Breakfast",name:"Oats Upma with Vegetables",calories:220,protein:7,carbs:34,fats:5,time:"8:30 AM"},
        {type:"Lunch",name:"Dal Tadka + Brown Rice (Small) + Salad",calories:360,protein:15,carbs:55,fats:6,time:"1:30 PM"},
        {type:"Snack",name:"Fresh Fruit Salad (Mixed)",calories:100,protein:1,carbs:24,fats:0,time:"5:00 PM"},
        {type:"Dinner",name:"Palak Paneer (Light) + 1 Roti + Salad",calories:310,protein:17,carbs:28,fats:13,time:"7:30 PM"}
      ]}
    ]
  },
  'muscle building': {
    days: [
      {day:"Monday",meals:[
        {type:"Breakfast",name:"4 Boiled Eggs + Oats Porridge + Banana",calories:480,protein:30,carbs:55,fats:12,time:"7:30 AM"},
        {type:"Lunch",name:"Chicken Curry + Brown Rice + Dal",calories:620,protein:42,carbs:72,fats:14,time:"1:00 PM"},
        {type:"Snack",name:"Paneer Cubes + Almonds (20g)",calories:280,protein:18,carbs:6,fats:20,time:"4:30 PM"},
        {type:"Dinner",name:"Egg Bhurji (4 Eggs) + 3 Rotis + Dahi",calories:560,protein:34,carbs:56,fats:18,time:"8:00 PM"}
      ]},
      {day:"Tuesday",meals:[
        {type:"Breakfast",name:"Moong Dal Chilla (3) + Eggs + Chaas",calories:420,protein:28,carbs:38,fats:12,time:"7:30 AM"},
        {type:"Lunch",name:"Rajma Chawal (Large) + Paneer Salad",calories:640,protein:36,carbs:82,fats:12,time:"1:00 PM"},
        {type:"Snack",name:"Greek Dahi + Banana + Peanut Butter",calories:300,protein:20,carbs:34,fats:10,time:"4:30 PM"},
        {type:"Dinner",name:"Fish Curry + 3 Rotis + Dal",calories:580,protein:40,carbs:58,fats:14,time:"8:00 PM"}
      ]},
      {day:"Wednesday",meals:[
        {type:"Breakfast",name:"Scrambled Eggs (3) + Poha + Milk",calories:460,protein:26,carbs:52,fats:14,time:"7:30 AM"},
        {type:"Lunch",name:"Mutton/Soya Curry + Rice + Dal + Salad",calories:660,protein:44,carbs:70,fats:18,time:"1:00 PM"},
        {type:"Snack",name:"Roasted Chana + Milk (1 Glass)",calories:260,protein:18,carbs:28,fats:6,time:"4:30 PM"},
        {type:"Dinner",name:"Palak Paneer + 3 Phulkas + Dahi",calories:550,protein:30,carbs:52,fats:20,time:"8:00 PM"}
      ]},
      {day:"Thursday",meals:[
        {type:"Breakfast",name:"Besan Chilla (3) + Dahi + Fruits",calories:440,protein:24,carbs:48,fats:12,time:"7:30 AM"},
        {type:"Lunch",name:"Chicken Biryani + Raita + Salad",calories:680,protein:38,carbs:80,fats:16,time:"1:00 PM"},
        {type:"Snack",name:"Paneer Tikka (Grilled) + Chaas",calories:310,protein:22,carbs:10,fats:18,time:"4:30 PM"},
        {type:"Dinner",name:"Dal Makhani + Rice + Chicken/Tofu",calories:600,protein:38,carbs:68,fats:16,time:"8:00 PM"}
      ]},
      {day:"Friday",meals:[
        {type:"Breakfast",name:"Oats + 4 Eggs (Omelette) + Milk",calories:500,protein:34,carbs:46,fats:16,time:"7:30 AM"},
        {type:"Lunch",name:"Chole + Brown Rice + Salad + Dahi",calories:580,protein:26,carbs:84,fats:10,time:"1:00 PM"},
        {type:"Snack",name:"Nuts Mix (30g) + Banana",calories:290,protein:8,carbs:32,fats:16,time:"4:30 PM"},
        {type:"Dinner",name:"Grilled Fish / Mushroom Masala + 3 Rotis",calories:560,protein:38,carbs:56,fats:14,time:"8:00 PM"}
      ]},
      {day:"Saturday",meals:[
        {type:"Breakfast",name:"Aloo Paratha (2) + Eggs + Dahi",calories:520,protein:22,carbs:64,fats:18,time:"8:00 AM"},
        {type:"Lunch",name:"Mutton Curry + Jeera Rice + Dal + Salad",calories:700,protein:48,carbs:74,fats:20,time:"1:00 PM"},
        {type:"Snack",name:"Sprouts Chaat + Milk",calories:280,protein:18,carbs:32,fats:6,time:"4:30 PM"},
        {type:"Dinner",name:"Paneer Bhurji + 3 Rotis + Salad",calories:540,protein:32,carbs:52,fats:18,time:"8:00 PM"}
      ]},
      {day:"Sunday",meals:[
        {type:"Breakfast",name:"Dosa (2) + Sambar + Eggs",calories:480,protein:22,carbs:64,fats:14,time:"8:30 AM"},
        {type:"Lunch",name:"Chicken Stew + Rice + Dal + Raita",calories:640,protein:42,carbs:72,fats:14,time:"1:30 PM"},
        {type:"Snack",name:"Roasted Makhana + Milk",calories:240,protein:10,carbs:36,fats:6,time:"5:00 PM"},
        {type:"Dinner",name:"Egg Curry + 3 Phulkas + Dahi",calories:560,protein:36,carbs:54,fats:16,time:"8:00 PM"}
      ]}
    ]
  }
};

// Pre-defined food analysis results for different food logs
const ANALYSIS_PRESETS = [
  {
    totalCalories: 1820,protein: 62,carbs: 240,fats: 48,fiber: 18,
    improvements:[
      "Protein thoda aur badhayein — dahi, dal ya anda add karein taaki muscle mass maintain ho.",
      "Refined carbs (maida) ki jagah whole wheat roti ya brown rice use karein digestive health ke liye.",
      "Healthy fats ke liye ek muthi nuts ya avocado daily include karein omega-3 ke liye.",
      "Dinner mein vegetables ki matra badhayein aur rice thoda kam karein caloric balance ke liye."
    ],
    score: 7,
    summary: "Aapki diet balanced hai lekin protein thodi kam hai. Fiber aur vegetables badhane se diet aur better ho sakti hai."
  },
  {
    totalCalories: 2100,protein: 55,carbs: 290,fats: 62,fiber: 12,
    improvements:[
      "Caloric intake thodi zyada hai — ek meal ka portion size 20% kam karein.",
      "Zyada fat intake hai, especially saturated fats. Frying ki jagah grilling ya steaming use karein.",
      "Fiber intake badhayen — vegetables aur fruits daily 5 servings ka target rakhein.",
      "Protein sources include karein jaise dal, eggs ya dahi jo calorie dense nahi hain."
    ],
    score: 5,
    summary: "Diet mein calories aur fats thode zyada hain. Simple substitutions se ishe significantly improve kar sakte hain."
  },
  {
    totalCalories: 1580,protein: 78,carbs: 185,fats: 42,fiber: 24,
    improvements:[
      "Calorie intake thodi kam hai — ek extra snack (nuts ya fruits) add karein energy ke liye.",
      "Carbs thode aur add karein especially pre-workout — banana ya brown rice achi choice hai.",
      "Overall diet bahut achhi hai! Hydration ke liye 8-10 glasses paani zaroor peeyen.",
      "Vitamin sources ensure karein — ek katori mix vegetables daily include karein."
    ],
    score: 9,
    summary: "Excellent diet! High protein, good fiber, controlled calories. Sirf calorie intake thoda aur badhane ki zaroorat hai."
  }
];

// ─── Food Image Mapping ───────────────────────────────────────────────────────
const FOOD_IMGS = {
  default: "images/soybean.webp",
  dairy: "images/dairy.jpeg",
  pulses: "images/pulses.jpeg",
  grains: "images/grains.webp",
  greens: "images/greens.jpeg",
  fats: "images/fats.webp",
  fruits: "images/fruits.jpeg",
  vegetables: "images/vegetables.jpeg",
  nuts: "images/nuts.webp",
}

function getFoodImg(cat) {
  const c = (cat||'').toLowerCase();
  if(c.includes('dairy')||c.includes('milk')||c.includes('paneer')||c.includes('dahi')) return FOOD_IMGS.dairy;
  if(c.includes('pulse')||c.includes('legume')||c.includes('dal')||c.includes('lentil')||c.includes('rajma')||c.includes('chhole')) return FOOD_IMGS.pulses;
  if(c.includes('grain')||c.includes('rice')||c.includes('wheat')||c.includes('roti')||c.includes('oat')||c.includes('daliya')||c.includes('makhana')) return FOOD_IMGS.grains;
  if(c.includes('green')||c.includes('leafy')||c.includes('spinach')||c.includes('palak')) return FOOD_IMGS.greens;
  if(c.includes('fat')||c.includes('oil')||c.includes('avocado')||c.includes('ghee')) return FOOD_IMGS.fats;
  if(c.includes('fruit')||c.includes('apple')||c.includes('banana')) return FOOD_IMGS.fruits;
  if(c.includes('vegetable')||c.includes('veggie')||c.includes('cucumber')||c.includes('broccoli')) return FOOD_IMGS.vegetables;
  if(c.includes('nut')||c.includes('seed')||c.includes('almond')||c.includes('til')||c.includes('alsi')) return FOOD_IMGS.nuts;
  return FOOD_IMGS.default;
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  const navEl = document.getElementById('nav-'+id);
  if(navEl) navEl.classList.add('active');
  if(id==='progress') initProgress();
  window.scrollTo(0,0);
}

// ─── Explore Foods ────────────────────────────────────────────────────────────
function setExploreQuery(){document.getElementById('explore-query').value=document.getElementById('home-query').value;}
function quickExplore(goal){document.getElementById('explore-query').value=goal;exploreGoal();}

async function exploreGoal(){
  const q=document.getElementById('explore-query').value.trim();
  if(!q)return;
  document.getElementById('explore-loader').style.display='block';
  document.getElementById('explore-results').innerHTML='';

  // Simulate loading delay
  await new Promise(r=>setTimeout(r,700+Math.random()*400));

  const key = Object.keys(EXPLORE_DB).find(k=>q.toLowerCase().includes(k)||k.split(' ').some(w=>q.toLowerCase().includes(w))) || 'weight loss';
  const foods = EXPLORE_DB[key];

  let html=`<div class="section-title">Results for <span>${q}</span></div><div class="cards-grid">`;
  foods.forEach(f=>{
    html+=`<div class="food-card">
      <img class="food-card-img" src="${getFoodImg(f.category)}" alt="${f.category}" loading="lazy"/>
      <div class="food-card-body">
        <div class="tag">${f.emoji} ${f.category}</div>
        <h3>${f.category}</h3>
        <p>${f.description}</p>
        <div class="macro-row">
          <span class="macro-badge mp">P: ${f.protein}g</span>
          <span class="macro-badge mc">C: ${f.carbs}g</span>
          <span class="macro-badge mf">F: ${f.fats}g</span>
          <span class="macro-badge mk">~${f.calories} kcal</span>
        </div>
      </div>
    </div>`;
  });
  html+='</div>';
  document.getElementById('explore-results').innerHTML=html;
  document.getElementById('explore-loader').style.display='none';
}

// ─── Generate Meal Plan ───────────────────────────────────────────────────────
function quickMeal(goal){document.getElementById('meal-query').value=goal;generateMealPlan();}

async function generateMealPlan(){
  const q=document.getElementById('meal-query').value.trim();
  if(!q)return;
  document.getElementById('meal-loader').style.display='block';
  document.getElementById('meal-results').innerHTML='';
  document.getElementById('meal-static-info').style.display='none';

  await new Promise(r=>setTimeout(r,800+Math.random()*500));

  const key = Object.keys(MEAL_PLANS).find(k=>k!=='default'&&q.toLowerCase().includes(k.split(' ')[0])) || 'default';
  const plan = MEAL_PLANS[key];

  let html='';
  plan.days.forEach(day=>{
    const dayTotal=day.meals.reduce((s,m)=>s+m.calories,0);
    html+=`<div class="day-card"><div class="day-header">📅 ${day.day} <span style="font-size:12px;font-weight:400;opacity:.8;float:right;">~${dayTotal} kcal total</span></div>`;
    day.meals.forEach(meal=>{
      html+=`<div class="meal-row">
        <div><div class="meal-type">${meal.type} · ${meal.time}</div><div class="meal-name">${meal.name}</div></div>
        <div class="meal-meta"><span>${meal.calories} kcal</span>P:${meal.protein}g C:${meal.carbs}g F:${meal.fats}g</div>
      </div>`;
    });
    html+='</div>';
  });
  document.getElementById('meal-results').innerHTML=html;
  document.getElementById('meal-loader').style.display='none';
}

// ─── Analyse Food ─────────────────────────────────────────────────────────────
async function analyzeFood(){
  const log=document.getElementById('food-log').value.trim();
  if(!log)return;
  document.getElementById('analysis-loader').style.display='block';
  document.getElementById('analysis-results').innerHTML='';

  await new Promise(r=>setTimeout(r,900+Math.random()*500));

  // Pick a preset based on simple heuristics
  let preset;
  const l=log.toLowerCase();
  if(l.includes('chicken')||l.includes('eggs')||l.includes('paneer')&&l.includes('salad')) preset=ANALYSIS_PRESETS[2];
  else if(l.includes('biryani')||l.includes('fried')||l.includes('paratha')&&l.includes('butter')) preset=ANALYSIS_PRESETS[1];
  else preset=ANALYSIS_PRESETS[0];

  const r=preset;
  const sc=r.score>=7?'#3a7d44':r.score>=5?'#ff9800':'#e53935';
  const tips=r.improvements.map((t,i)=>`<div class="tip-item"><span class="tip-num">${i+1}</span><span style="color:var(--gray)">${t}</span></div>`).join('');

  document.getElementById('analysis-results').innerHTML=`
    <div class="result-card" style="margin-bottom:20px;">
      <h3>Diet Score</h3>
      <div class="score-row">
        <div class="score-circle" style="background:linear-gradient(135deg,${sc},${sc}cc)">${r.score}<small>/10</small></div>
        <div style="flex:1"><p style="font-size:14px;color:var(--gray);line-height:1.6;">${r.summary}</p></div>
        <div class="stat-nums">
          <div class="stat-num-item"><div class="val" style="color:#e91e63">${r.totalCalories}</div><div class="lbl">kcal</div></div>
          <div class="stat-num-item"><div class="val" style="color:#3a7d44">${r.protein}g</div><div class="lbl">Protein</div></div>
          <div class="stat-num-item"><div class="val" style="color:#2196f3">${r.carbs}g</div><div class="lbl">Carbs</div></div>
          <div class="stat-num-item"><div class="val" style="color:#ff9800">${r.fats}g</div><div class="lbl">Fats</div></div>
          <div class="stat-num-item"><div class="val" style="color:#9c27b0">${r.fiber}g</div><div class="lbl">Fiber</div></div>
        </div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;">
      <div class="result-card">
        <h3>📊 Macro Breakdown</h3>
        <canvas id="macroChart" height="220"></canvas>
        <div class="macro-legend">
          <span><i style="background:#3a7d44"></i>Protein ${r.protein}g</span>
          <span><i style="background:#2196f3"></i>Carbs ${r.carbs}g</span>
          <span><i style="background:#ff9800"></i>Fats ${r.fats}g</span>
          <span><i style="background:#e91e63"></i>Fiber ${r.fiber}g</span>
        </div>
      </div>
      <div class="result-card">
        <h3>💡 Improvement Tips</h3>
        ${tips}
      </div>
    </div>`;

  // Draw doughnut chart
  if(window._macroChart) window._macroChart.destroy();
  window._macroChart = new Chart(document.getElementById('macroChart'),{
    type:'doughnut',
    data:{
      labels:['Protein','Carbs','Fats','Fiber'],
      datasets:[{
        data:[r.protein, r.carbs, r.fats, r.fiber],
        backgroundColor:['#3a7d44','#2196f3','#ff9800','#e91e63'],
        borderWidth:4,borderColor:'rgba(255,255,255,0.8)'
      }]
    },
    options:{responsive:true,plugins:{legend:{display:false}},cutout:'62%'}
  });

  document.getElementById('analysis-loader').style.display='none';
}

// ─── Progress Page ────────────────────────────────────────────────────────────
let waterCount = 5;

function initProgress(){
  // Water buttons
  const wb = document.getElementById('water-btns');
  if(wb && !wb.dataset.init){
    wb.dataset.init='true';
    for(let i=1;i<=8;i++){
      const btn=document.createElement('button');
      btn.className='water-btn'+(i<=waterCount?' active':'');
      btn.textContent='💧';
      btn.onclick=()=>{waterCount=i;updateWater();};
      wb.appendChild(btn);
    }
  }
}

function updateWater(){
  document.getElementById('water-label').textContent=waterCount+' / 8 glasses';
  document.querySelectorAll('.water-btn').forEach((b,i)=>b.classList.toggle('active',i<waterCount));
}

function calcSleep(){
  const s=document.getElementById('sleep-start').value, e=document.getElementById('sleep-end').value;
  if(!s||!e)return;
  const[sh,sm]=s.split(':').map(Number),[eh,em]=e.split(':').map(Number);
  let sm2=sh*60+sm, em2=eh*60+em;
  if(em2<=sm2) em2+=1440;
  const h=Math.floor((em2-sm2)/60), m=(em2-sm2)%60;
  const q=h>=7?'😊 Good sleep!':h>=5?'😐 Could be better':'😴 Too little!';
  const tip=h>=7?'Great! Keep it up.':h>=5?'Try sleeping 30 min earlier.':'Aim for at least 7 hours.';
  const el=document.getElementById('sleep-result');
  el.style.display='block';
  el.innerHTML=`
    <div class="pr-row"><span>Duration</span><span class="pr-val">${h}h ${m}m</span></div>
    <div class="pr-row"><span>Quality</span><span class="pr-val">${q}</span></div>
    <div class="pr-row"><span>Tip</span><span style="font-size:13px;color:var(--gray)">${tip}</span></div>`;
  document.getElementById('ps-slp').textContent=h+'h';
}

async function calcFoodProgress(){
  const log=document.getElementById('prog-food-log').value.trim();
  if(!log)return;
  document.getElementById('prog-food-loader').style.display='block';
  document.getElementById('prog-food-result').style.display='none';

  await new Promise(r=>setTimeout(r,700+Math.random()*400));

  const l=log.toLowerCase();
  let calories=0,protein=0,carbs=0,fats=0,fiber=0;
  // Simple keyword-based estimation
  if(l.includes('roti')||l.includes('phulka')){const n=parseInt(l.match(/(\d+)\s*roti/)?.[1])||2;calories+=n*100;protein+=n*3;carbs+=n*20;fats+=n*1;}
  if(l.includes('dal')){calories+=180;protein+=9;carbs+=28;fats+=3;fiber+=5;}
  if(l.includes('rice')||l.includes('chawal')){calories+=200;protein+=4;carbs+=44;fats+=0;fiber+=1;}
  if(l.includes('paneer')){calories+=265;protein+=18;carbs+=2;fats+=14;}
  if(l.includes('banana')||l.includes('kela')){calories+=90;protein+=1;carbs+=22;fats+=0;fiber+=3;}
  if(l.includes('milk')||l.includes('doodh')){calories+=120;protein+=6;carbs+=10;fats+=5;}
  if(l.includes('egg')||l.includes('anda')){const n=parseInt(l.match(/(\d+)\s*egg/)?.[1])||2;calories+=n*70;protein+=n*6;carbs+=0;fats+=n*5;}
  if(l.includes('chicken')){calories+=200;protein+=30;carbs+=0;fats+=8;}
  if(l.includes('oats')){calories+=150;protein+=5;carbs+=27;fats+=2;fiber+=4;}
  if(l.includes('salad')){calories+=40;protein+=2;carbs+=6;fats+=0;fiber+=3;}
  if(calories===0){calories=1650;protein=55;carbs=210;fats=42;fiber=14;}
  else{calories=Math.max(800,calories);}

  const summary = calories<1500?'Intake thoda kam hai — ek extra snack ya meal add karein.':calories>2200?'Caloric intake zyada hai — portions thoda control karein.':'Balanced intake! Keep it up.';
  const tip = protein<50?'Dal, eggs ya dahi se protein badhayein.':'Protein intake achha hai!';

  document.getElementById('prog-food-result').style.display='block';
  document.getElementById('prog-food-result').innerHTML=`
    <div class="pr-row"><span>Total Calories</span><span class="pr-val">${calories} kcal</span></div>
    <div class="pr-row"><span>Protein</span><span class="pr-val">${protein}g</span></div>
    <div class="pr-row"><span>Carbohydrates</span><span class="pr-val">${carbs}g</span></div>
    <div class="pr-row"><span>Fats</span><span class="pr-val">${fats}g</span></div>
    <div class="pr-row"><span>Fiber</span><span class="pr-val">${fiber}g</span></div>
    <div class="pr-row"><span>Assessment</span><span style="font-size:13px;color:var(--gray)">${summary}</span></div>
    <div class="pr-row"><span>💡 Tip</span><span style="font-size:13px;color:var(--gray)">${tip}</span></div>`;
  document.getElementById('ps-cal').textContent=calories;
  document.getElementById('ps-pro').textContent=protein+'g';
  document.getElementById('ps-fat').textContent=fats+'g';
  document.getElementById('prog-food-loader').style.display='none';
}
