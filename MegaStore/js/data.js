const imagePool = {
  mobiles: [
    'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg',
    'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
    'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg',
    'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg',
    'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg',
    'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg',
    'https://images.pexels.com/photos/3532644/pexels-photo-3532644.jpeg',
    'https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg',
    'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg',
    'https://images.pexels.com/photos/248528/pexels-photo-248528.jpeg',
    'https://images.pexels.com/photos/35278699/pexels-photo-35278699.jpeg'
  ],
  laptops: [
    'https://images.pexels.com/photos/18105/pexels-photo.jpg',
    'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
    'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg',
    'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
    'https://images.pexels.com/photos/7974/pexels-photo.jpg',
    'https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg',
    'https://images.pexels.com/photos/6359/pexels-photo.jpg',
    'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg',
    'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg',
    'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg'
  ],
  fashion: [
    'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg',
    'https://images.pexels.com/photos/631139/pexels-photo-631139.jpeg',
    'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    'https://images.pexels.com/photos/769733/pexels-photo-769733.jpeg',
    'https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg',
    'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:39eb5fd9-ec34-4b6a-b586-a8eb25d9f99d/as/week-51-ms13e4-4x5-men-prio.jpg?preferwebp=true&width=2000&format=jpg',
    'https://media.alshaya.com/adobe/assets/urn:aaid:aem:5071e628-1776-461d-b78f-4ecafa70b0e9/as/wk51-ds42o-4x5.jpg?preferwebp=true&width=2000&format=jpg',
    'https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg',
    'https://assets.adidas.com/images/w_450,f_auto,q_auto/6d32c6d276f542dea66c1a747bc102a7_9366/IE9155_00_plp_standard.jpg',
    'https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg',
    'https://images.pexels.com/photos/1449667/pexels-photo-1449667.jpeg'
  ],
  shoes: [
    'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg',
    'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg',
    'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    'https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg',
    'https://images.pexels.com/photos/19090/pexels-photo.jpg',
    'https://www.adidas.com.eg/dw/image/v2/BFNL_PRD/on/demandware.static/-/Library-Sites-AdidasSharedLibrary/default/dwa124c535/MENA_Local_Activations/MENA-JUL-AUG-SEP/em-emc-terrex-hp-tc-d.jpg',
    'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg',
    'https://images.pexels.com/photos/1698359/pexels-photo-1698359.jpeg',
    'https://images.pexels.com/photos/2385477/pexels-photo-2385477.jpeg'
  ],
  fridges: [
    'https://images.pexels.com/photos/582489/pexels-photo-582489.jpeg',
    'https://images.pexels.com/photos/3637728/pexels-photo-3637728.jpeg',
    'https://m.media-amazon.com/images/I/61YaqZYD52L._AC_UL320_.jpg',
    'https://images.pexels.com/photos/582488/pexels-photo-582488.jpeg',
    'https://images.pexels.com/photos/875864/pexels-photo-875864.jpeg',
    'https://m.media-amazon.com/images/I/71i8PYsxEnL._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/41kfWMSJklL._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/41XL3TUPT1L._AC_UL320_.jpg'
  ],
  screens: [
    'https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg',
    'https://m.media-amazon.com/images/I/61GBGk+EpxL._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/41mxhc4WdpL._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/61H15SkH8yL._AC_UL320_.jpg',
    'https://images.pexels.com/photos/6336/pexels-photo.jpg',
    'https://m.media-amazon.com/images/I/61tR6x77FOL._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/615n+-jqr0L._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/71ht+i2ItEL._AC_UL320_.jpg'
  ],
  electrical: [
    'https://m.media-amazon.com/images/I/61uW6za+ckL._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/51UYj0hUtgL._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/41Wv0IXtypL._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/61Zyh8HAm3S._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/71en7-xtJqL._AC_UL320_.jpg',
    'https://images.pexels.com/photos/611171/pexels-photo-611171.jpeg',
    'https://images.pexels.com/photos/4107257/pexels-photo-4107257.jpeg',
    'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg',
    'https://images.pexels.com/photos/4393426/pexels-photo-4393426.jpeg',
    'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg'
  ],
  watches: [
    'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
    'https://images.pexels.com/photos/277319/pexels-photo-277319.jpeg',
    'https://images.pexels.com/photos/364822/pexels-photo-364822.jpeg',
    'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg',
    'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQQZN27szRl6n_FXfauHMmPPLV6cRiHtB_-8IwPmPK2NGVu7m5fmtm3vQQ4DirF2T5ABXnCoFmg6oVA580hpv-SysIiet4Vr4IU3F3HbbPxygzThYoxPDPSlM1IrAQddLDf-x__LA&usqp=CAc',
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJ3ULsjrIDOrKbfcdH7OMPXGPUrfczvZh_nuIlXxZUU1nafRNixF8XG-edRF4u4lXGcaISSqR0ibj2OIwRlmaowIj7ytqghthQovjWv9kDnh1zZ-kYS6lBrDQOJOilDAns9hlST6I&usqp=CAc',
    'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg',
    'https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg',
    'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRGd_GrdQXqFDPjsa8g4DVoeG39Zcskb6BsPBN2ArE5HwRXA-Jnu-E6_XcgG3nAEetzmKTnmBCxAHGyD9Jyglbwpv9FiDibXdmUliuaUx0iLchsOU2wAtWoQUsEAfcvwMzWURKk1wQ&usqp=CAc',
    'https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg'
  ]
};

const brands = {
    mobiles: ['Apple', 'Samsung', 'Xiaomi', 'Oppo', 'Realme'],
    laptops: ['Dell', 'HP', 'Apple', 'Lenovo', 'Asus'],
    fashion: ['Zara', 'H&M', 'Pull&Bear', 'Nike', 'Adidas'],
    shoes: ['Nike', 'Adidas', 'Puma', 'Reebok', 'Vans'],
    fridges: ['LG', 'Samsung', 'Toshiba', 'Sharp', 'Kiriazi'],
    screens: ['Samsung', 'LG', 'Sony', 'Toshiba', 'Tornado'],
    electrical: ['Tornado', 'Fresh', 'LG', 'Panasonic', 'Kenwood'],
    watches: ['Rolex', 'Casio', 'Apple', 'Fossil', 'Seiko']
};

const adjectives = {
    ar: ['مميز', 'أصلي', 'فاخر', 'حديث', 'قوي', 'احترافي', 'مذهل', 'الأكثر مبيعاً', 'اقتصادي'],
    en: ['Premium', 'Original', 'Luxury', 'Modern', 'Powerful', 'Pro', 'Amazing', 'Best Seller', 'Economic']
};

function generateProducts(category, count, startId) {
    let products = [];
    const pool = imagePool[category];
    const catBrands = brands[category];
    
    if(!pool) return [];

    for (let i = 0; i < count; i++) {
        const img = pool[i % pool.length];
        const brand = catBrands[i % catBrands.length];
        const adjAr = adjectives.ar[i % adjectives.ar.length];
        const adjEn = adjectives.en[i % adjectives.en.length];
        
        let titleAr = `${brand} - منتج ${category} ${adjAr} موديل ${2024 + (i%2)}`;
        let titleEn = `${brand} - ${category} Item ${adjEn} Model ${2024 + (i%2)}`;
        
        if(category === 'mobiles') {
            titleAr = `موبايل ${brand} إصدار ${i+10} ${adjAr} - مساحة ${128*( (i%2)+1 )}GB`;
            titleEn = `${brand} Mobile Ver.${i+10} ${adjEn} - Storage ${128*( (i%2)+1 )}GB`;
        } else if (category === 'fridges') {
            titleAr = `ثلاجة ${brand} ${14+(i%10)} قدم ${adjAr} - نوفروست`;
            titleEn = `${brand} Refrigerator ${14+(i%10)} FT ${adjEn} - No Frost`;
        } else if (category === 'screens') {
            titleAr = `شاشة ${brand} ${32 + (i%5)*10} بوصة سمارت 4K`;
            titleEn = `${brand} TV ${32 + (i%5)*10} Inch Smart 4K`;
        }

        products.push({
            id: startId + i,
            category: category,
            title: { ar: titleAr, en: titleEn },
            brand: brand,
            price: Math.floor(Math.random() * 50000) + 1000,
            image: img,
            express: Math.random() > 0.3,
            badge: Math.random() > 0.8 ? (Math.random() > 0.5 ? 'Sale' : 'New') : null,
            discountPercent: null,
            oldPrice: null,
            desc: {
                ar: `هذا المنتج من ${brand} يتميز بأداء ${adjAr} وجودة عالية مع ضمان لمدة سنة.`,
                en: `This product from ${brand} features ${adjEn} performance and high quality with 1 year warranty.`
            }
        });

        const last = products[products.length - 1];
        if (last && last.badge === 'Sale') {
            const pct = Math.floor(Math.random() * 26) + 10;
            last.discountPercent = pct;
            last.oldPrice = Math.floor(last.price * (100 + pct) / 100);
        }

    }
    return products;
}

const generatedData = {
    mobiles: generateProducts('mobiles', 12, 1000),
    laptops: generateProducts('laptops', 10, 2000),
    fashion: generateProducts('fashion', 12, 3000),
    shoes: generateProducts('shoes', 10, 4000),
    fridges: generateProducts('fridges', 8, 5000), 
    screens: generateProducts('screens', 8, 6000), 
    electrical: generateProducts('electrical', 6, 7000),
    watches: generateProducts('watches', 10, 8000),
    deals: generateProducts('mobiles', 6, 9990)
};

generatedData.deals = (generatedData.deals || []).map(p => {
  const pct = Math.floor(Math.random() * 41) + 20;
  const price = typeof p.price === 'number' ? p.price : Number(p.price) || 0;
  return {
    ...p,
    badge: 'Sale',
    discountPercent: pct,
    oldPrice: Math.floor(price * (100 + pct) / 100)
  };
});

const allProductsData = [
    ...generatedData.mobiles,
    ...generatedData.laptops,
    ...generatedData.fashion,
    ...generatedData.shoes,
    ...generatedData.fridges,
    ...generatedData.screens,
    ...generatedData.electrical,
    ...generatedData.watches,
    ...generatedData.deals
];