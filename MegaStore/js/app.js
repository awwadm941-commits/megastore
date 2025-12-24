(() => {
  'use strict';

  let currentLang = localStorage.getItem('megaStoreLang') || 'ar';

  const translations = {
    ar: {
      returnTitle: 'استرجاع المنتج | Mega Store',
      returnPageHeader: 'طلب استرجاع',
      returnFormTitle: 'نموذج استرجاع منتج',
      returnFormDesc: 'نحن آسفون لأن المنتج لم ينل إعجابك. يرجى ملء النموذج أدناه.',
      returnPolicyTitle: 'سياسة الاسترجاع:',
      returnPolicyText:
        'يمكنك إرجاع المنتج خلال 14 يوماً من تاريخ الاستلام بشرط أن يكون في حالته الأصلية وبالغلف الأصلي. يتم استرداد المبلغ خلال 5-10 أيام عمل بعد فحص المنتج.',
      orderNumber: 'رقم الطلب',
      orderPlaceholder: 'مثال: #90442',
      navHome: 'الرئيسية',
      navContact: 'تواصل معنا',
      navCartPage: 'السلة',
      navCheckout: 'الدفع',
      navReturnsPage: 'الاسترجاع',
      navLoginPage: 'تسجيل الدخول',
      navProfile: 'حسابي',
      email: 'البريد الإلكتروني المسجل',
      returnReason: 'سبب الإرجاع',
      login: 'تسجيل الدخول',
      welcome: 'أهلا بك',
      myProfile: 'ملفي',
      myAccount: 'حسابي',
      logout: 'تسجيل الخروج',
      reasonDamaged: 'المنتج تالف / لا يعمل',
      reasonWrong: 'وصلني منتج خاطئ',
      reasonNotAsDescribed: 'المنتج لا يطابق المواصفات',
      reasonChangedMind: 'غيرت رأيي (المنتج لم يفتح)',
      extraDetails: 'تفاصيل إضافية',
      extraPlaceholder: 'يرجى كتابة أي ملاحظات إضافية هنا...',
      submitReturn: 'إرسال طلب الاسترجاع',
      returnSuccessMsg: 'تم استلام طلب الاسترجاع. سيتواصل معك فريق خدمة العملاء قريباً.',
      searchPlaceholder: 'ما الذي تبحث عنه؟',
      favorites: 'المفضلة',
      cart: 'السلة',
      home: 'الرئيسية',
      mobiles: 'موبايلات',
      laptops: 'لابتوب',
      fridges: 'ثلاجات',
      screens: 'شاشات وتلفزيون',
      electrical: 'أجهزة منزلية',
      fashion: 'ملابس',
      shoes: 'أحذية',
      watches: 'ساعات',
      deals: 'عروض ميجا',
      viewAll: 'عرض الكل',
      newLabel: 'جديد',
      banner: 'شحن مجاني للطلبات فوق 200 جنيه | إرجاع مجاني سهل | ضمان أصلي %100',
      returns: 'طلبات الإرجاع',
      sidebarMobilesTablet: 'موبايلات وتابلت',
      sidebarComputers: 'كمبيوتر ولابتوب',
      sidebarScreens: 'شاشات وتلفزيون',
      sidebarFridges: 'ثلاجات وديب فريزر',
      sidebarAppliances: 'أجهزة منزلية',
      sidebarFashion: 'أزياء وملابس',
      sidebarShoes: 'أحذية رياضية',
      sidebarWatchesGlasses: 'ساعات',
      sidebarTodayDeals: 'عروض اليوم',
      footerHelp: 'نحن هنا لمساعدتك',
      footerHelpCenter: 'مركز المساعدة',
      footerPayments: 'طرق الدفع',
      footerShipping: 'الشحن والتوصيل',
      footerReturnsPolicy: 'شروط الاسترجاع',
      footerElectronicsTitle: 'الإلكترونيات',
      footerNewMobiles: 'موبايلات حديثة',
      footerLaptopsComputers: 'لابتوب وكمبيوتر',
      footerSmartTVs: 'تلفزيونات ذكية',
      footerCameras: 'كاميرات',
      footerShopTitle: 'تسوق معنا',
      footerAllProducts: 'كل المنتجات',
      footerTodayDeals2: 'عروض اليوم',
      footerEndSeason: 'تصفية نهاية الموسم',
      footerBestSellers: 'الأكثر مبيعاً',
      footerFollow: 'تابعنا على',
      footerDownloadApp: 'حمل التطبيق',
      copyright: '© 2025 Mega Store. جميع الحقوق محفوظة.',
      currency: 'جنيه',
      tax: 'شامل الضريبة',
      freeDelivery: 'توصيل مجاني',
      addToCart: 'إضافة إلى عربة التسوق',
      addedToast: 'تمت الإضافة للعربة',
      searchResult: 'نتائج البحث',
      noResults: 'لا توجد منتجات',
      sale: 'خصم',
      productDetails: 'تفاصيل المنتج',
      ratingText: 'التقييم',
      reviewsText: 'تقييم/تعليق',
      addReview: 'إضافة تعليق',
      reviewPlaceholder: 'اكتب تعليقك هنا...',
      priceLabel: 'السعر',
      oldPriceLabel: 'السعر قبل الخصم',
      basketView: 'عرض السلة',
      sections: {
        mobiles: 'أحدث الموبايلات الذكية',
        laptops: 'لابتوب وكمبيوتر',
        fridges: 'ثلاجات وديب فريزر',
        screens: 'شاشات تلفزيون Smart 4K',
        electrical: 'أجهزة منزلية وإلكترونيات',
        fashion: 'أحدث صيحات الموضة',
        shoes: 'أحذية رياضية وكلاسيك',
        watches: 'ساعات فاخرة',
        deals: 'أقوى العروض والخصومات'
      }
    },
    en: {
      returnTitle: 'Product Return | Mega Store',
      returnPageHeader: 'Return Request',
      returnFormTitle: 'Product Return Form',
      returnFormDesc:
        'We are sorry that the product did not meet your expectations. Please fill in the form below.',
      returnPolicyTitle: 'Return Policy:',
      returnPolicyText:
        'You can return the product within 14 days of delivery if it is in its original condition and packaging. Refunds are processed within 5–10 business days after inspection.',
      orderNumber: 'Order Number',
      orderPlaceholder: 'Example: #90442',
      email: 'Registered Email',
      login: 'Login',
      welcome: 'Welcome',
      myProfile: 'My Profile',
      myAccount: 'My Account',
      logout: 'Logout',
      returnReason: 'Reason for Return',
      reasonDamaged: 'Product is damaged / not working',
      reasonWrong: 'Wrong item received',
      reasonNotAsDescribed: 'Product does not match description',
      reasonChangedMind: 'Changed my mind (unopened)',
      extraDetails: 'Additional Details',
      extraPlaceholder: 'Please write any additional notes here...',
      submitReturn: 'Submit Return Request',
      returnSuccessMsg:
        'Your return request has been received. Our support team will contact you shortly.',
      searchPlaceholder: 'What are you looking for?',
      navHome: 'Home',
      navContact: 'Contact Us',
      navCartPage: 'Cart',
      navCheckout: 'Checkout',
      navReturnsPage: 'Returns',
      navLoginPage: 'Login',
      navProfile: 'My Account',
      favorites: 'Favorites',
      cart: 'Cart',
      home: 'Home',
      mobiles: 'Mobiles',
      laptops: 'Laptops',
      fridges: 'Refrigerators',
      screens: 'Screens & TVs',
      electrical: 'Appliances',
      fashion: 'Fashion',
      shoes: 'Shoes',
      watches: 'Watches',
      deals: 'Mega Deals',
      viewAll: 'View All',
      newLabel: 'NEW',
      banner:
        'Free shipping on orders over 200 EGP | Easy free returns | 100% authentic guarantee',
      returns: 'Returns',
      sidebarMobilesTablet: 'Mobiles & Tablets',
      sidebarComputers: 'Computers & Laptops',
      sidebarScreens: 'Screens & TVs',
      sidebarFridges: 'Refrigerators & Freezers',
      sidebarAppliances: 'Home Appliances',
      sidebarFashion: 'Fashion & Clothing',
      sidebarShoes: 'Sport Shoes',
      sidebarWatchesGlasses: 'Watches',
      sidebarTodayDeals: 'Today’s Deals',
      footerHelp: "We're here to help",
      footerHelpCenter: 'Help Center',
      footerPayments: 'Payment methods',
      footerShipping: 'Shipping & delivery',
      footerReturnsPolicy: 'Return policy',
      footerElectronicsTitle: 'Electronics',
      footerNewMobiles: 'New mobiles',
      footerLaptopsComputers: 'Laptops & computers',
      footerSmartTVs: 'Smart TVs',
      footerCameras: 'Cameras',
      footerShopTitle: 'Shop with us',
      footerAllProducts: 'All products',
      footerTodayDeals2: "Today's deals",
      footerEndSeason: 'End-of-season clearance',
      footerBestSellers: 'Best sellers',
      footerFollow: 'Follow us',
      footerDownloadApp: 'Download the app',
      copyright: '© 2025 Mega Store. All rights reserved.',
      currency: 'EGP',
      tax: 'Inclusive of VAT',
      freeDelivery: 'Free Delivery',
      addToCart: 'Add to Cart',
      addedToast: 'Added to Cart',
      searchResult: 'Search Results',
      noResults: 'No products found',
      sale: 'SALE',
      productDetails: 'Product Details',
      ratingText: 'Rating',
      reviewsText: 'reviews',
      addReview: 'Add Review',
      reviewPlaceholder: 'Write your review here...',
      priceLabel: 'Price',
      oldPriceLabel: 'Old Price',
      basketView: 'View Cart',
      sections: {
        mobiles: 'Latest Smartphones',
        laptops: 'Laptops & Computers',
        fridges: 'Refrigerators & Freezers',
        screens: 'Smart TVs & Screens',
        electrical: 'Home Appliances',
        fashion: 'Latest Fashion Trends',
        shoes: 'Sports & Classic Shoes',
        watches: 'Luxury Watches',
        deals: 'Mega Deals & Discounts'
      }
    }
  };

  let cartCount = 0;
  let currentProductId = null;

  function safeText(v) {
    return typeof v === 'string' ? v : '';
  }

  function getCart() {
    return JSON.parse(localStorage.getItem('megaStoreCart')) || [];
  }

  function countQty(cart) {
    return Array.isArray(cart) ? cart.reduce((s, it) => s + (Number(it && it.qty) || 1), 0) : 0;
  }

  function setCart(cart) {
    localStorage.setItem('megaStoreCart', JSON.stringify(cart));
    cartCount = countQty(cart);
    localStorage.setItem('cartCount', String(cartCount));
    updateCartIcon();
  }

  function updateCartIcon() {
    const el = document.getElementById('cart-badge');
    if (el) el.textContent = String(cartCount);
  }

  function showToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.style.display = 'block';
    setTimeout(() => (toast.style.display = 'none'), 2500);
  }

  function renderAllSections() {
    if (typeof generatedData === 'undefined') return;
    const keys = ['deals', 'mobiles', 'laptops', 'fridges', 'screens', 'electrical', 'fashion', 'shoes', 'watches'];
    keys.forEach((key) => {
      if (generatedData[key]) renderGrid(generatedData[key], `${key}-grid`);
    });
  }

  function buildBadge(p, t) {
    const pct = Number(p && p.discountPercent);
    if ((p && p.badge === 'Sale') || (p && p.oldPrice)) {
      const txt = Number.isFinite(pct) && pct > 0 ? `-${pct}%` : t.sale;
      return `<div class="badge badge-sale">${txt}</div>`;
    }
    if (p && p.badge === 'New') return `<div class="badge badge-new">${t.newLabel}</div>`;
    return '';
  }

  function renderGrid(items, elId) {
    const el = document.getElementById(elId);
    if (!el) return;

    const t = translations[currentLang] || translations.ar;
    const lang = currentLang;

    if (!Array.isArray(items) || items.length === 0) {
      el.innerHTML = `<div>${t.noResults}</div>`;
      return;
    }

    el.innerHTML = items
      .map((p) => {
        const title = p?.title?.[currentLang] ?? p?.title?.ar ?? p?.title?.en ?? '';
        const brand = p?.brand ?? '';
        const price = typeof p?.price === 'number' ? p.price : Number(p?.price) || 0;
        const oldPrice = typeof p?.oldPrice === 'number' ? p.oldPrice : Number(p?.oldPrice) || 0;
        const img = p?.image || '';

        return `
          <div class="card" onclick="goToProduct(${p.id})">
            ${buildBadge(p, t)}
            <div class="card-img-wrap">
              <img src="${img}" alt="${safeText(title)}" loading="lazy" onerror="this.closest('.card').style.display='none';" />
            </div>
            <div class="card-title">${safeText(title)}</div>
            ${brand ? `<div class="card-brand">${safeText(brand)}</div>` : ''}
            <div class="card-price-row">
              <div class="card-price">
                <span class="currency">${t.currency}</span>
                <span class="now">${price.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US')}</span>
              </div>
              ${oldPrice && oldPrice > price ? `<div class="card-old">${oldPrice.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US')}</div>` : ''}
            </div>
            <button class="add-btn" onclick="event.stopPropagation(); addToCartById(${p.id});">${t.addToCart}</button>
          </div>
        `;
      })
      .join('');
  }

  function initSearch() {
    const sInput = document.getElementById('search-input');
    if (!sInput) return;

    const sectionIds = ['deals', 'mobiles', 'laptops', 'fridges', 'screens', 'electrical', 'fashion', 'shoes', 'watches'];

    const mobilesSection = document.getElementById('mobiles');
    const mobilesTitleEl = mobilesSection ? mobilesSection.querySelector('.section-title') : null;
    const originalMobilesTitle = mobilesTitleEl ? mobilesTitleEl.textContent : '';

    const normalize = (txt) => String(txt || '').toLowerCase().trim();

    sInput.addEventListener('input', (e) => {
      const term = normalize(e.target.value);
      const t = translations[currentLang] || translations.ar;

      if (term.length < 2) {
        sectionIds.forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.style.display = 'block';
        });
        if (mobilesTitleEl) mobilesTitleEl.textContent = originalMobilesTitle;
        renderAllSections();
        return;
      }

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.style.display = id === 'mobiles' ? 'block' : 'none';
      });

      let source = [];
      if (typeof allProductsData !== 'undefined' && Array.isArray(allProductsData)) {
        source = allProductsData;
      } else if (typeof generatedData !== 'undefined' && generatedData) {
        const keys = ['deals', 'mobiles', 'laptops', 'fridges', 'screens', 'electrical', 'fashion', 'shoes', 'watches'];
        keys.forEach((k) => {
          if (Array.isArray(generatedData[k])) source.push(...generatedData[k]);
        });
      }

      const filtered = source.filter((p) => {
        const ar = normalize(p?.title?.ar);
        const en = normalize(p?.title?.en);
        const br = normalize(p?.brand);
        return ar.includes(term) || en.includes(term) || br.includes(term);
      });

      if (mobilesTitleEl) mobilesTitleEl.textContent = `${t.searchResult} (${filtered.length})`;
      renderGrid(filtered, 'mobiles-grid');
    });
  }

  function getStablePriceForProduct(productId, fallbackPrice) {
    const key = `megaProductPrice:${productId}`;
    const stored = Number(localStorage.getItem(key));
    if (!Number.isNaN(stored) && stored > 0) return stored;
    const n = Number(fallbackPrice) || 0;
    localStorage.setItem(key, String(n));
    return n;
  }

  function addToCartById(id) {
    const source = typeof allProductsData !== 'undefined' ? allProductsData : [];
    let product = Array.isArray(source) ? source.find((p) => p.id === id) : null;
    if (!product && typeof generatedData !== 'undefined' && Array.isArray(generatedData.deals)) {
      product = generatedData.deals.find((p) => p.id === id) || null;
    }
    if (!product) return;

    const title = product?.title?.[currentLang] ?? product?.title?.ar ?? product?.title?.en ?? '';
    const rawPrice = typeof product.price === 'number' ? product.price : Number(product.price) || 0;
    const finalPrice = getStablePriceForProduct(product.id, rawPrice);

    const item = {
      id: product.id,
      title: safeText(title),
      brand: safeText(product.brand || ''),
      price: finalPrice,
      image: safeText(product.image || '')
    };

    const cart = getCart();
    const existing = cart.find((x) => x && x.id === item.id);
    if (existing) {
      existing.qty = (Number(existing.qty) || 1) + 1;
    } else {
      item.qty = 1;
      cart.push(item);
    }
    setCart(cart);
    showToast();
  }

  function applyLanguage(lang) {
    const t = translations[lang] || translations.ar;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const setTxt = (id, txt) => {
      const el = document.getElementById(id);
      if (el) el.textContent = txt;
    };

    setTxt('nav-login-txt', t.login);
    setTxt('nav-welcome-txt', t.welcome);
    setTxt('nav-fav-txt', t.favorites);
    setTxt('nav-cart-txt', t.cart);
    setTxt('nav-contact-txt', t.navContact);

    const searchInp = document.getElementById('search-input');
    if (searchInp) searchInp.placeholder = t.searchPlaceholder;

    const catKeys = ['deals', 'mobiles', 'laptops', 'fridges', 'screens', 'electrical', 'fashion', 'shoes', 'watches'];
    catKeys.forEach((key) => {
      const heading = document.getElementById(`h-${key}`);
      if (heading && t.sections && t.sections[key]) heading.textContent = t.sections[key];
    });

    const menuItems = {
      'm-home': t.home,
      'm-mobiles': t.mobiles,
      'm-laptops': t.laptops,
      'm-fridges': t.fridges,
      'm-screens': t.screens,
      'm-electrical': t.electrical,
      'm-fashion': t.fashion,
      'm-shoes': t.shoes,
      'm-watches': t.watches,
      'm-deals': t.deals
    };
    for (const [id, txt] of Object.entries(menuItems)) setTxt(id, txt);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      const value = key.split('.').reduce((acc, part) => (acc && acc[part] != null ? acc[part] : null), t);
      if (typeof value === 'string') el.textContent = value;
    });

    const loginBtn = document.getElementById('login-btn');
    const welcomeTxt = document.getElementById('nav-welcome-txt');
    const loginTxt = document.getElementById('nav-login-txt');
    const rawUser = localStorage.getItem('megaUser');
    let user = null;
    try {
      user = rawUser ? JSON.parse(rawUser) : null;
    } catch (e) {
      user = null;
    }

    if (user) {
      const name = user.name || (lang === 'ar' ? 'حسابي' : 'My Account');

      if (welcomeTxt) welcomeTxt.textContent = name;
      if (loginTxt) loginTxt.textContent = lang === 'ar' ? 'ملفي' : 'My Profile';

      if (loginBtn) {
        loginBtn.onclick = () => {
          window.location.href = 'profile.html';
        };
      }
    } else {
      if (welcomeTxt) welcomeTxt.textContent = lang === 'ar' ? 'أهلاً بك' : 'Welcome';
      if (loginTxt) loginTxt.textContent = lang === 'ar' ? 'تسجيل الدخول' : 'Login';
      if (loginBtn) {
        loginBtn.onclick = () => {
          window.location.href = 'login.html';
        };
      }
    }

    renderAllSections();
  }

  function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('megaStoreLang', currentLang);
    applyLanguage(currentLang);
  }

  window.toggleLanguage = toggleLanguage;
  window.addToCartById = addToCartById;
  window.addToCart = function () {
    if (!currentProductId) return;
    addToCartById(currentProductId);
  };
  window.openModal = function (id) {
    currentProductId = id;
  };
  window.goToProduct = function (id) {
    window.location.href = `product.html?id=${id}`;
  };
  window.closeModal = function () {
    currentProductId = null;
  };

  document.addEventListener('DOMContentLoaded', () => {
    const cart = getCart();
    cartCount = countQty(cart);
    localStorage.setItem('cartCount', String(cartCount));
    updateCartIcon();
    applyLanguage(currentLang);
    if (typeof generatedData !== 'undefined') {
      renderAllSections();
    }
    initSearch();
  });

  function toggleTopMenu(forceClose) {
    const open = document.body.classList.contains('topmenu-open');
    const shouldClose = forceClose === true ? true : open;
    document.body.classList.toggle('topmenu-open', !shouldClose);
  }
  window.toggleTopMenu = toggleTopMenu;

  document.addEventListener('click', (e) => {
    if (!document.body.classList.contains('topmenu-open')) return;
    const links = document.getElementById('site-nav-links');
    if (links && links.contains(e.target) && e.target.tagName === 'A') {
      document.body.classList.remove('topmenu-open');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.body.classList.remove('topmenu-open');
  });
})();
