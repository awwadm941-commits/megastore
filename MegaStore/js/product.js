(() => {
  'use strict';

  const $ = (id) => document.getElementById(id);

  function getLang() {
    return localStorage.getItem('megaStoreLang') || 'ar';
  }

  function getT(lang) {
    if (typeof translations !== 'undefined' && translations[lang]) return translations[lang];
    if (typeof translations !== 'undefined' && translations.ar) return translations.ar;
    return {
      currency: lang === 'ar' ? 'جنيه' : 'EGP',
      productDetails: lang === 'ar' ? 'تفاصيل المنتج' : 'Product Details',
      ratingText: lang === 'ar' ? 'التقييم' : 'Rating',
      reviewsText: lang === 'ar' ? 'تقييم/تعليق' : 'reviews',
      addReview: lang === 'ar' ? 'إضافة تعليق' : 'Add Review',
      reviewPlaceholder: lang === 'ar' ? 'اكتب تعليقك هنا...' : 'Write your review here...',
      addToCart: lang === 'ar' ? 'إضافة إلى السلة' : 'Add to Cart',
      basketView: lang === 'ar' ? 'عرض السلة' : 'View Basket'
    };
  }

  function money(n, lang) {
    const x = Number(n) || 0;
    return x.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US');
  }

  function getParam(name) {
    const u = new URL(window.location.href);
    return u.searchParams.get(name);
  }

  function reviewsKey(id) {
    return `megaProductReviews:${id}`;
  }

  function loadReviews(id) {
    const raw = localStorage.getItem(reviewsKey(id));
    if (!raw) return null;
    try {
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : null;
    } catch (e) {
      return null;
    }
  }

  function saveReviews(id, arr) {
    localStorage.setItem(reviewsKey(id), JSON.stringify(arr));
  }

  function getUserName(lang) {
    const raw = localStorage.getItem('megaUser');
    if (!raw) return lang === 'ar' ? 'زائر' : 'Guest';
    try {
      const u = JSON.parse(raw);
      const nm = u && u.name ? String(u.name) : '';
      return nm || (lang === 'ar' ? 'زائر' : 'Guest');
    } catch (e) {
      return lang === 'ar' ? 'زائر' : 'Guest';
    }
  }

  function clampRating(v) {
    const n = Math.round(Number(v) || 0);
    if (n < 1) return 1;
    if (n > 5) return 5;
    return n;
  }

  function starRow(rating) {
    const n = clampRating(rating);
    let s = '';
    for (let i = 1; i <= 5; i++) {
      s += i <= n ? '<i class="fa-solid fa-star"></i>' : '<i class="fa-regular fa-star"></i>';
    }
    return s;
  }

  function avgRating(list) {
    if (!Array.isArray(list) || list.length === 0) return 0;
    const sum = list.reduce((acc, x) => acc + (Number(x && x.rating) || 0), 0);
    return sum / list.length;
  }

  function formatDate(ts, lang) {
    const d = new Date(Number(ts) || Date.now());
    return d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  function seededDefaultsBilingual(id) {
    const seed = Number(id) || 1;
    const pool = [
      { ar: 'منتج ممتاز جدًا وجودته عالية.', en: 'Excellent product and great quality.', r: 5 },
      { ar: 'كويس جدًا مقابل السعر.', en: 'Very good value for the price.', r: 4 },
      { ar: 'التسليم كان سريع والتغليف محترم.', en: 'Fast delivery and solid packaging.', r: 4 },
      { ar: 'أداءه كويس لكن كنت متوقع أفضل.', en: 'Good performance, but expected a bit more.', r: 3 },
      { ar: 'أنصح به جدًا.', en: 'Highly recommended.', r: 5 }
    ];
    const a = pool[seed % pool.length];
    const b = pool[(seed + 2) % pool.length];
    const c = pool[(seed + 4) % pool.length];
    const now = Date.now();
    return [
      { name: 'Customer', rating: a.r, text: { ar: a.ar, en: a.en }, date: now - 86400000 * 7, isSeed: true },
      { name: 'Buyer', rating: b.r, text: { ar: b.ar, en: b.en }, date: now - 86400000 * 3, isSeed: true },
      { name: 'Guest', rating: c.r, text: { ar: c.ar, en: c.en }, date: now - 86400000, isSeed: true }
    ];
  }

  function ensureSeeded(id) {
    const existing = loadReviews(id);
    if (Array.isArray(existing) && existing.length > 0) return existing;
    const seeded = seededDefaultsBilingual(id);
    saveReviews(id, seeded);
    return seeded;
  }

  function findProduct(id) {
    const n = Number(id);
    if (!Number.isFinite(n)) return null;

    if (typeof allProductsData !== 'undefined' && Array.isArray(allProductsData)) {
      const p = allProductsData.find((x) => x && x.id === n);
      if (p) return p;
    }

    if (typeof generatedData !== 'undefined') {
      const keys = ['mobiles', 'laptops', 'fashion', 'shoes', 'fridges', 'screens', 'electrical', 'watches', 'deals'];
      for (const k of keys) {
        const arr = generatedData[k];
        if (Array.isArray(arr)) {
          const p = arr.find((x) => x && x.id === n);
          if (p) return p;
        }
      }
    }

    return null;
  }

  function showError(msg) {
    const box = $('product-error');
    const layout = $('product-layout');
    if (layout) layout.style.display = 'none';
    if (box) {
      box.style.display = 'block';
      box.textContent = msg;
    }
  }

  function getTextByLang(textObjOrString, lang) {
    if (typeof textObjOrString === 'string') return textObjOrString;
    if (textObjOrString && typeof textObjOrString === 'object') {
      const v = textObjOrString[lang] || textObjOrString.ar || textObjOrString.en || '';
      return String(v);
    }
    return '';
  }
  function priceKey(id){ return `megaProductPrice:${id}`; }
function oldPriceKey(id){ return `megaProductOldPrice:${id}`; }

function getStableNumber(key, fallback){
  const raw = localStorage.getItem(key);
  if (raw !== null && raw !== '' && !Number.isNaN(Number(raw))) return Number(raw);
  const n = Number(fallback) || 0;
  localStorage.setItem(key, String(n));
  return n;
}
  function render(product) {
    const lang = getLang();
    const t = getT(lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const title = product?.title?.[lang] ?? product?.title?.ar ?? product?.title?.en ?? '';
    const brand = product?.brand ?? '';
   const rawPrice = typeof product?.price === 'number' ? product.price : Number(product?.price) || 0;
    const rawOld = typeof product?.oldPrice === 'number' ? product.oldPrice : Number(product?.oldPrice) || 0;
    const price = getStableNumber(priceKey(product.id), rawPrice);
    const oldPrice = getStableNumber(oldPriceKey(product.id), rawOld);
    const img = product?.image || '';
    const desc = product?.desc?.[lang] ?? product?.desc?.ar ?? product?.desc?.en ?? '';

    document.title = `${t.productDetails} | ${title}`;

    const layout = $('product-layout');
    if (layout) layout.style.display = 'grid';

    const imgEl = $('p-img');
    if (imgEl) {
      imgEl.src = img;
      imgEl.alt = String(title);
    }

    const titleEl = $('p-title');
    if (titleEl) titleEl.textContent = String(title);

    const metaEl = $('p-meta');
    if (metaEl) metaEl.textContent = brand ? String(brand) : '';

    const priceEl = $('p-price');
    if (priceEl) priceEl.textContent = `${t.currency} ${money(price, lang)}`;

    const oldEl = $('p-old');
    if (oldEl) {
      if (oldPrice && oldPrice > price) {
        oldEl.style.display = 'inline-block';
        oldEl.textContent = money(oldPrice, lang);
      } else {
        oldEl.style.display = 'none';
      }
    }

    const descEl = $('p-desc');
    if (descEl) descEl.textContent = String(desc);

    const addBtn = $('btn-add');
    if (addBtn) {
      addBtn.textContent = t.addToCart;
      addBtn.onclick = () => {
        if (typeof window.addToCartById === 'function') window.addToCartById(product.id);
      };
    }

    const list = ensureSeeded(product.id);

    const avg = avgRating(list);
    const avgRounded = Math.round(avg * 10) / 10;

    const avgTxt = $('avg-txt');
    const countTxt = $('count-txt');
    const avgStars = $('avg-stars');

    if (avgTxt) avgTxt.textContent = `${t.ratingText}: ${avgRounded} / 5`;
    if (countTxt) countTxt.textContent = `${list.length} ${t.reviewsText}`;
    if (avgStars) avgStars.innerHTML = starRow(Math.round(avg));

    const wrap = $('reviews-list');
    if (wrap) {
      wrap.innerHTML = list
        .map((x) => {
          const nmRaw = x?.name ? String(x.name) : 'Customer';
          const nm =
            x?.isSeed
              ? (lang === 'ar'
                  ? (nmRaw === 'Customer' ? 'عميل' : nmRaw === 'Buyer' ? 'مشتري' : 'زائر')
                  : nmRaw)
              : nmRaw;

          const rt = clampRating(x?.rating);
          const tx = getTextByLang(x?.text, lang);
          const dt = formatDate(x?.date, lang);

          return `
            <div class="review-item">
              <div class="review-top">
                <div>
                  <div class="review-name">${nm}</div>
                  <div class="stars">${starRow(rt)}</div>
                </div>
                <div class="review-date">${dt}</div>
              </div>
              <div class="review-text">${tx}</div>
            </div>
          `;
        })
        .join('');
    }

    const ta = $('review-text');
    if (ta) ta.placeholder = t.reviewPlaceholder;

    const btnReview = $('btn-review');
    if (btnReview) {
      btnReview.textContent = t.addReview;
      btnReview.onclick = () => {
        const ratingSel = $('review-rating');
        const textTa = $('review-text');
        const rating = clampRating(ratingSel ? ratingSel.value : 5);
        const text = textTa ? String(textTa.value || '').trim() : '';
        if (!text) return;

        const current = ensureSeeded(product.id).slice();

        current.unshift({
          name: getUserName(lang),
          rating,
          text,
          date: Date.now(),
          isSeed: false,
          lang
        });

        saveReviews(product.id, current);

        if (textTa) textTa.value = '';
        render(product);
      };
    }
  }

  function init() {
    const id = getParam('id');
    const lang = getLang();
    const t = getT(lang);

    if (!id) {
      showError(lang === 'ar' ? 'رقم المنتج غير موجود.' : 'Missing product id.');
      return;
    }

    const p = findProduct(id);
    if (!p) {
      showError(lang === 'ar' ? 'المنتج غير موجود.' : 'Product not found.');
      return;
    }

    render(p);
  }

  document.addEventListener('DOMContentLoaded', init);

  window.addEventListener('storage', (e) => {
    if (e.key === 'megaStoreLang') location.reload();
  });
})();
