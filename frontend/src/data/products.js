const WA = '919827850842';
const waMsg = (item) => encodeURIComponent(`Hi Jhakkas Lab! 👋 I'm interested in "${item}". Please share pricing and details!`);
export const waLink = (item) => `https://wa.me/${WA}?text=${waMsg(item)}`;

export const products = [

  // ── 🧿 BRANDING & GRAPHIC DESIGN ──────────────────────────────
  {
    id: 1, title: 'Logo Design', category: 'branding', subcat: 'Branding & Graphic Design',
    price: 499, originalPrice: 4999, rating: 4.9, reviews: 234,
    badge: 'BEST SELLER',
    img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&w=600&q=80',
    desc: 'Clean, bold & memorable logo. Basic ₹499 | Standard ₹1,499 | Premium ₹4,999. Includes all source files.',
    tag: 'service', sizes: ['Basic ₹499', 'Standard ₹1,499', 'Premium ₹4,999'], colors: ['Any']
  },
  {
    id: 2, title: 'Brand Identity Package', category: 'branding', subcat: 'Branding & Graphic Design',
    price: 2999, originalPrice: 14999, rating: 4.9, reviews: 98,
    badge: 'POPULAR',
    img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80',
    desc: 'Complete brand system: logo, typography, color palette, brand guidelines & social kit. Basic ₹2,999 | Premium ₹14,999.',
    tag: 'service', sizes: ['Basic ₹2,999', 'Standard ₹6,999', 'Premium ₹14,999'], colors: ['Custom']
  },
  {
    id: 3, title: 'Social Media Post Design', category: 'branding', subcat: 'Branding & Graphic Design',
    price: 149, originalPrice: 599, rating: 4.8, reviews: 312,
    badge: 'HOT',
    img: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=600&q=80',
    desc: 'Scroll-stopping social media post designs. Basic ₹149 | Standard ₹299 | Premium ₹599 per post.',
    tag: 'service', sizes: ['Basic ₹149', 'Standard ₹299', 'Premium ₹599'], colors: ['Custom']
  },
  {
    id: 4, title: 'Poster Design', category: 'branding', subcat: 'Branding & Graphic Design',
    price: 299, originalPrice: 1999, rating: 4.8, reviews: 176,
    img: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=600&q=80',
    desc: 'Eye-catching poster design. Basic ₹299 | Standard ₹799 | Premium ₹1,999.',
    tag: 'service', sizes: ['Basic ₹299', 'Standard ₹799', 'Premium ₹1,999'], colors: ['Custom']
  },
  {
    id: 5, title: 'Banner / Flex Design', category: 'branding', subcat: 'Branding & Graphic Design',
    price: 399, originalPrice: 2499, rating: 4.7, reviews: 143,
    img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=600&q=80',
    desc: 'Professional banner and flex design. Basic ₹399 | Standard ₹999 | Premium ₹2,499.',
    tag: 'service', sizes: ['Basic ₹399', 'Standard ₹999', 'Premium ₹2,499'], colors: ['Custom']
  },
  {
    id: 6, title: 'Business Card Design', category: 'branding', subcat: 'Branding & Graphic Design',
    price: 149, originalPrice: 599, rating: 4.8, reviews: 267,
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=80',
    desc: 'Premium business card design. Basic ₹149 | Standard ₹399 | Premium ₹599. Print-ready files.',
    tag: 'service', sizes: ['Basic ₹149', 'Standard ₹399', 'Premium ₹599'], colors: ['Custom']
  },
  {
    id: 7, title: 'Packaging Design', category: 'branding', subcat: 'Branding & Graphic Design',
    price: 999, originalPrice: 7999, rating: 4.8, reviews: 54,
    img: 'https://images.unsplash.com/photo-1586495777744-4e6232bf2b7b?auto=format&fit=crop&w=600&q=80',
    desc: 'Eye-catching packaging design for products. Basic ₹999 | Standard ₹2,999 | Premium ₹7,999.',
    tag: 'service', sizes: ['Basic ₹999', 'Standard ₹2,999', 'Premium ₹7,999'], colors: ['Custom']
  },
  {
    id: 8, title: 'UI/UX Design', category: 'branding', subcat: 'Branding & Graphic Design',
    price: 1999, originalPrice: 14999, rating: 4.9, reviews: 67,
    img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80',
    desc: 'Modern UI/UX design for apps & websites. Basic ₹1,999 | Standard ₹4,999 | Premium ₹14,999.',
    tag: 'service', sizes: ['Basic ₹1,999', 'Standard ₹4,999', 'Premium ₹14,999'], colors: ['Custom']
  },

  // ── 🌐 WEBSITE & DIGITAL SERVICES ─────────────────────────────
  {
    id: 20, title: 'Business Website', category: 'website', subcat: 'Website & Digital Services',
    price: 12999, originalPrice: 18000, rating: 5.0, reviews: 67,
    badge: 'TOP PICK',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    desc: 'Professional business website — mobile-first, SEO optimized. Starting ₹12,999.',
    tag: 'service', sizes: ['₹12,999'], colors: ['Custom']
  },
  {
    id: 21, title: 'E-Commerce Website', category: 'website', subcat: 'Website & Digital Services',
    price: 18000, originalPrice: 35000, rating: 4.9, reviews: 42,
    img: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80',
    desc: 'Full e-commerce with payment gateway, product management & dashboard. Starting ₹18,000+.',
    tag: 'service', sizes: ['₹18,000+'], colors: ['Custom']
  },
  {
    id: 22, title: 'Portfolio Website', category: 'website', subcat: 'Website & Digital Services',
    price: 6999, originalPrice: 12999, rating: 5.0, reviews: 54,
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
    desc: 'Stunning personal portfolio for creatives & freelancers. Starting ₹6,999.',
    tag: 'service', sizes: ['₹6,999'], colors: ['Custom']
  },
  {
    id: 23, title: 'Landing Page Website', category: 'website', subcat: 'Website & Digital Services',
    price: 3999, originalPrice: 7999, rating: 4.9, reviews: 78,
    badge: 'FAST DELIVERY',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    desc: 'High-converting landing page. Starting ₹3,999. Delivered in 48 hours.',
    tag: 'service', sizes: ['₹3,999'], colors: ['Custom']
  },
  {
    id: 24, title: 'SEO Setup & Strategy', category: 'website', subcat: 'Website & Digital Services',
    price: 2999, originalPrice: 5999, rating: 4.8, reviews: 33,
    img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=600&q=80',
    desc: 'Complete SEO audit, on-page optimization & keyword research. Starting ₹2,999.',
    tag: 'service', sizes: ['₹2,999'], colors: ['N/A']
  },
  {
    id: 25, title: 'Social Media Management', category: 'website', subcat: 'Website & Digital Services',
    price: 3999, originalPrice: 7999, rating: 4.8, reviews: 29,
    img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80',
    desc: 'Full social media management — content, posting, engagement & analytics. ₹3,999/month.',
    tag: 'service', sizes: ['₹3,999/month'], colors: ['N/A']
  },
  {
    id: 26, title: 'Reel / Video Editing', category: 'website', subcat: 'Website & Digital Services',
    price: 299, originalPrice: 999, rating: 4.9, reviews: 112,
    badge: 'HOT',
    img: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80',
    desc: 'Professional reel & video editing. Starting ₹299 per video.',
    tag: 'service', sizes: ['₹299 - ₹999'], colors: ['N/A']
  },
  {
    id: 27, title: 'Digital Marketing', category: 'website', subcat: 'Website & Digital Services',
    price: 4999, originalPrice: 9999, rating: 4.8, reviews: 24,
    img: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80',
    desc: 'Full digital marketing — ads, campaigns, growth strategy. ₹4,999/month.',
    tag: 'service', sizes: ['₹4,999/month'], colors: ['N/A']
  },

  // ── 🖨️ PRINTING SERVICES ──────────────────────────────────────
  {
    id: 30, title: 'T-Shirt Printing', category: 'printing', subcat: 'Printing Services',
    price: 399, originalPrice: 699, rating: 4.9, reviews: 389,
    badge: 'BEST SELLER',
    img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80',
    desc: 'Premium custom T-shirt printing. 240 GSM cotton, vibrant colors. ₹399 - ₹699 per piece.',
    tag: 'product', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['White', 'Black', 'Navy', 'Red']
  },
  {
    id: 31, title: 'Oversized Tee Printing', category: 'printing', subcat: 'Printing Services',
    price: 699, originalPrice: 1299, rating: 4.9, reviews: 234,
    badge: 'POPULAR',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    desc: 'Premium oversized tee printing. Drop-shoulder fit. ₹699 - ₹1,299 per piece.',
    tag: 'product', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Off-White', 'Beige']
  },
  {
    id: 32, title: 'Hoodie Printing', category: 'printing', subcat: 'Printing Services',
    price: 1199, originalPrice: 2499, rating: 4.8, reviews: 143,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    desc: 'Custom hoodie printing with premium fleece. ₹1,199 - ₹2,499 per piece.',
    tag: 'product', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Grey', 'Navy']
  },
  {
    id: 33, title: 'Sticker Printing', category: 'printing', subcat: 'Printing Services',
    price: 99, originalPrice: 299, rating: 4.9, reviews: 567,
    badge: 'HOT',
    img: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=600&q=80',
    desc: 'Waterproof vinyl sticker printing. Custom shapes, die-cut. ₹99 - ₹299 per pack.',
    tag: 'product', sizes: ['25 pcs', '50 pcs', '100 pcs'], colors: ['Full Color']
  },
  {
    id: 34, title: 'Poster Printing', category: 'printing', subcat: 'Printing Services',
    price: 149, originalPrice: 699, rating: 4.8, reviews: 189,
    img: 'https://images.unsplash.com/photo-1583734551194-279326b014c2?auto=format&fit=crop&w=600&q=80',
    desc: 'Premium quality poster printing on 300 GSM. ₹149 - ₹699 per poster.',
    tag: 'product', sizes: ['A4', 'A3', 'A2', 'A1'], colors: ['Full Color', 'Matte', 'Glossy']
  },
  {
    id: 35, title: 'Flex / Banner Printing', category: 'printing', subcat: 'Printing Services',
    price: 25, originalPrice: 40, rating: 4.7, reviews: 88,
    img: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=600&q=80',
    desc: 'High-quality flex banner printing. ₹25 - ₹40 per sq.ft.',
    tag: 'product', sizes: ['Per sq.ft', 'Custom Size'], colors: ['Full Color']
  },
  {
    id: 36, title: 'Business Card Printing', category: 'printing', subcat: 'Printing Services',
    price: 299, originalPrice: 999, rating: 4.8, reviews: 234,
    img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    desc: 'Premium business card printing — matte, glossy or UV finish. ₹299 - ₹999 per 250 cards.',
    tag: 'product', sizes: ['250 cards', '500 cards', '1000 cards'], colors: ['Custom']
  },
  {
    id: 37, title: 'ID Card Printing', category: 'printing', subcat: 'Printing Services',
    price: 99, originalPrice: 299, rating: 4.7, reviews: 134,
    img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    desc: 'Durable PVC or paper ID card printing. ₹99 - ₹299 per card.',
    tag: 'product', sizes: ['PVC Card', 'Paper Card'], colors: ['Custom']
  },

  // ── 🎨 CUSTOM ART SERVICES ────────────────────────────────────
  {
    id: 40, title: 'Pencil Portrait', category: 'art', subcat: 'Custom Art Services',
    price: 799, originalPrice: 1999, rating: 5.0, reviews: 189,
    badge: 'LIMITED SLOTS',
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=600&q=80',
    desc: 'Hyper-realistic hand-drawn pencil portrait. ₹799 - ₹1,999 based on size & complexity.',
    tag: 'service', sizes: ['A4 ₹799', 'A3 ₹1,299', 'A2 ₹1,999'], colors: ['B&W', 'Colored']
  },
  {
    id: 41, title: 'Couple Portrait', category: 'art', subcat: 'Custom Art Services',
    price: 1499, originalPrice: 4999, rating: 5.0, reviews: 112,
    badge: 'POPULAR',
    img: 'https://images.unsplash.com/photo-1544273677-c433136021d4?auto=format&fit=crop&w=600&q=80',
    desc: 'Beautiful couple portrait drawing. Perfect anniversary or wedding gift. ₹1,499 - ₹4,999.',
    tag: 'service', sizes: ['Basic ₹1,499', 'Premium ₹4,999'], colors: ['B&W', 'Watercolor']
  },
  {
    id: 42, title: 'Digital Portrait / Anime Art', category: 'art', subcat: 'Custom Art Services',
    price: 499, originalPrice: 2999, rating: 4.9, reviews: 234,
    badge: 'TRENDING',
    img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
    desc: 'Digital portrait or anime-style illustration. ₹499 - ₹2,999 based on style.',
    tag: 'service', sizes: ['Basic ₹499', 'Standard ₹1,299', 'Premium ₹2,999'], colors: ['Full Color', 'Anime']
  },
  {
    id: 43, title: 'Canvas Painting', category: 'art', subcat: 'Custom Art Services',
    price: 1499, originalPrice: 9999, rating: 4.9, reviews: 45,
    img: 'https://images.unsplash.com/photo-1541462608141-ad614a77585a?auto=format&fit=crop&w=600&q=80',
    desc: 'Original canvas painting — abstract, landscape or portrait. ₹1,499 - ₹9,999.',
    tag: 'service', sizes: ['12x12 ₹1,499', '16x20 ₹4,999', '24x24 ₹9,999'], colors: ['Custom Palette']
  },
  {
    id: 44, title: 'Guitar Painting', category: 'art', subcat: 'Custom Art Services',
    price: 2999, originalPrice: 12000, rating: 5.0, reviews: 28,
    badge: 'UNIQUE',
    img: 'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=600&q=80',
    desc: 'Transform your guitar into a masterpiece. ₹2,999 - ₹12,000 based on design.',
    tag: 'service', sizes: ['Motif ₹2,999', 'Half ₹6,999', 'Full ₹12,000'], colors: ['Custom']
  },
  {
    id: 45, title: 'Hand-Painted Clothing', category: 'art', subcat: 'Custom Art Services',
    price: 999, originalPrice: 4999, rating: 4.8, reviews: 36,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    desc: 'Custom hand-painted jacket, tee or hoodie art. ₹999 - ₹4,999.',
    tag: 'service', sizes: ['Basic ₹999', 'Standard ₹2,499', 'Premium ₹4,999'], colors: ['Custom']
  },

  // ── ♻️ HANDICRAFT & SCRAP ART ─────────────────────────────────
  {
    id: 50, title: 'Scrap Decor', category: 'handicraft', subcat: 'Handicraft & Scrap Art',
    price: 599, originalPrice: 2999, rating: 4.7, reviews: 52,
    img: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=600&q=80',
    desc: 'Eco-friendly desk art made from recycled materials. ₹599 - ₹2,999.',
    tag: 'product', sizes: ['Small ₹599', 'Medium ₹1,499', 'Large ₹2,999'], colors: ['Natural', 'Metallic']
  },
  {
    id: 51, title: 'Handmade Gifts', category: 'handicraft', subcat: 'Handicraft & Scrap Art',
    price: 499, originalPrice: 4999, rating: 4.8, reviews: 39,
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    desc: 'Unique handmade gifts for every occasion. ₹499 - ₹4,999.',
    tag: 'product', sizes: ['Small ₹499', 'Medium ₹1,999', 'Premium ₹4,999'], colors: ['Custom']
  },
  {
    id: 52, title: 'Wall Art (Handmade)', category: 'handicraft', subcat: 'Handicraft & Scrap Art',
    price: 999, originalPrice: 6999, rating: 4.7, reviews: 27,
    img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=600&q=80',
    desc: 'Unique handmade wall art using recycled materials. ₹999 - ₹6,999.',
    tag: 'product', sizes: ['Small ₹999', 'Medium ₹3,499', 'Large ₹6,999'], colors: ['Natural', 'Boho']
  },

  // ── 👕 PRODUCTS & MERCH ────────────────────────────────────────
  {
    id: 60, title: 'Graphic T-Shirt', category: 'apparel', subcat: 'Products & Merch',
    price: 499, originalPrice: 999, rating: 4.9, reviews: 312,
    badge: 'BEST SELLER',
    img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80',
    desc: '240 GSM premium cotton graphic tee. Unique street art prints. ₹499 - ₹999.',
    tag: 'product', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Off-White', 'Beige']
  },
  {
    id: 61, title: 'Premium Hoodie', category: 'apparel', subcat: 'Products & Merch',
    price: 1499, originalPrice: 2999, rating: 4.8, reviews: 178,
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    desc: 'Premium fleece hoodie with custom design. ₹1,499 - ₹2,999.',
    tag: 'product', sizes: ['S', 'M', 'L', 'XL', 'XXL'], colors: ['Black', 'Grey', 'Navy']
  },
  {
    id: 62, title: 'Custom Cap', category: 'apparel', subcat: 'Products & Merch',
    price: 399, originalPrice: 699, rating: 4.8, reviews: 93,
    img: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80',
    desc: 'Embroidered or printed custom caps. ₹399 - ₹699.',
    tag: 'product', sizes: ['One Size'], colors: ['Black', 'White', 'Beige', 'Navy']
  },
  {
    id: 63, title: 'Tote Bag', category: 'apparel', subcat: 'Products & Merch',
    price: 399, originalPrice: 899, rating: 4.7, reviews: 67,
    img: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=600&q=80',
    desc: 'Eco-friendly canvas tote bag with custom print. ₹399 - ₹899.',
    tag: 'product', sizes: ['Standard'], colors: ['Natural', 'Black', 'White']
  },
  {
    id: 64, title: 'Water Bottle', category: 'apparel', subcat: 'Products & Merch',
    price: 499, originalPrice: 999, rating: 4.7, reviews: 54,
    img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
    desc: 'Custom printed water bottle. ₹499 - ₹999.',
    tag: 'product', sizes: ['500ml', '750ml', '1L'], colors: ['Silver', 'Black', 'White']
  },

  // ── 🎁 PERSONALIZED GIFTS ─────────────────────────────────────
  {
    id: 70, title: 'Custom Mug', category: 'gifts', subcat: 'Personalized Gifts',
    price: 299, originalPrice: 499, rating: 4.8, reviews: 345,
    badge: 'GIFT IDEA',
    img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=600&q=80',
    desc: 'Personalized ceramic mug with your photo or design. ₹299 - ₹499.',
    tag: 'product', sizes: ['11 oz ₹299', '15 oz ₹399', 'Magic ₹499'], colors: ['White', 'Black']
  },
  {
    id: 71, title: 'Custom Keychain', category: 'gifts', subcat: 'Personalized Gifts',
    price: 149, originalPrice: 399, rating: 4.7, reviews: 267,
    img: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=600&q=80',
    desc: 'Acrylic or metal custom keychain. ₹149 - ₹399.',
    tag: 'product', sizes: ['Acrylic ₹149', 'Metal ₹299', 'LED ₹399'], colors: ['Acrylic', 'Metal']
  },
  {
    id: 72, title: 'Personalized Gift Box', category: 'gifts', subcat: 'Personalized Gifts',
    price: 999, originalPrice: 4999, rating: 4.9, reviews: 98,
    badge: 'POPULAR',
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80',
    desc: 'Curated gift box with custom items. Starting ₹999.',
    tag: 'product', sizes: ['Basic ₹999', 'Standard ₹2,499', 'Premium ₹4,999'], colors: ['Custom']
  },
  {
    id: 73, title: 'Custom Photo Frame', category: 'gifts', subcat: 'Personalized Gifts',
    price: 299, originalPrice: 2499, rating: 4.9, reviews: 189,
    badge: 'TRENDING',
    img: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80',
    desc: 'Custom personalized photo frame. ₹299 - ₹2,499 based on size & material.',
    tag: 'product', sizes: ['4x6 ₹299', '5x7 ₹499', 'Canvas ₹2,499'], colors: ['Wood', 'Black', 'White']
  },
  {
    id: 74, title: 'Custom Merchandise', category: 'gifts', subcat: 'Personalized Gifts',
    price: 499, originalPrice: 4999, rating: 4.8, reviews: 78,
    img: 'https://images.unsplash.com/photo-1608755728617-aefab37d2edd?auto=format&fit=crop&w=600&q=80',
    desc: 'Custom branded merchandise for businesses & events. Starting ₹499.',
    tag: 'product', sizes: ['Starting ₹499'], colors: ['Custom']
  },

  // ── 📦 STICKER PRODUCTS ────────────────────────────────────────
  {
    id: 80, title: 'Anime Sticker Pack', category: 'stickers', subcat: 'Sticker Products',
    price: 49, originalPrice: 299, rating: 4.8, reviews: 567,
    badge: 'HOT',
    img: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?auto=format&fit=crop&w=600&q=80',
    desc: 'Premium UV-resistant vinyl anime stickers. ₹49 - ₹299 per pack.',
    tag: 'product', sizes: ['5 Pack ₹49', '10 Pack ₹99', '25 Pack ₹199', '50 Pack ₹299'], colors: ['Full Color']
  },
  {
    id: 81, title: 'Meme Sticker Pack', category: 'stickers', subcat: 'Sticker Products',
    price: 49, originalPrice: 249, rating: 4.9, reviews: 389,
    badge: 'VIRAL',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=80',
    desc: 'Hilarious desi & trending meme stickers. ₹49 - ₹249 per pack.',
    tag: 'product', sizes: ['5 Pack ₹49', '10 Pack ₹99', '20 Pack ₹199'], colors: ['Full Color']
  },
  {
    id: 82, title: 'Custom Vinyl Stickers', category: 'stickers', subcat: 'Sticker Products',
    price: 99, originalPrice: 299, rating: 4.8, reviews: 234,
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
    desc: 'Custom die-cut vinyl stickers from your design. ₹99 - ₹299.',
    tag: 'product', sizes: ['10 pcs ₹99', '25 pcs ₹199', '50 pcs ₹299'], colors: ['Full Color']
  },

  // ── 🖼️ DECOR & POSTERS ────────────────────────────────────────
  {
    id: 90, title: 'Posters & Frames', category: 'decor', subcat: 'Decor Products',
    price: 299, originalPrice: 2499, rating: 4.8, reviews: 189,
    badge: 'POPULAR',
    img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
    desc: 'Premium matte finish posters & frames. ₹299 - ₹2,499.',
    tag: 'product', sizes: ['A3 Poster ₹299', 'A2 Poster ₹499', 'Canvas Frame ₹2,499'], colors: ['Standard', 'Custom']
  },
  {
    id: 91, title: 'Anime Wall Poster', category: 'decor', subcat: 'Decor Products',
    price: 149, originalPrice: 499, rating: 4.8, reviews: 234,
    img: 'https://images.unsplash.com/photo-1583734551194-279326b014c2?auto=format&fit=crop&w=600&q=80',
    desc: '300 GSM archival anime wall poster. ₹149 - ₹499.',
    tag: 'product', sizes: ['A4 ₹149', 'A3 ₹249', 'A2 ₹399', 'A1 ₹499'], colors: ['Matte', 'Glossy']
  },

  // ── 🎉 EVENT & INVITATION ─────────────────────────────────────
  {
    id: 100, title: 'Wedding Card Design', category: 'events', subcat: 'Event & Invitation Design',
    price: 4999, originalPrice: 9999, rating: 5.0, reviews: 76,
    badge: 'PREMIUM',
    img: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=600&q=80',
    desc: 'Elegant wedding invitation design. Starting ₹4,999+.',
    tag: 'service', sizes: ['Digital ₹4,999', 'Print Ready ₹6,999', 'Full Package ₹9,999'], colors: ['Custom']
  },
  {
    id: 101, title: 'Event Customization', category: 'events', subcat: 'Event & Invitation Design',
    price: 2999, originalPrice: 9999, rating: 4.9, reviews: 54,
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80',
    desc: 'Full event design package — invites, banners, decor. Starting ₹2,999.',
    tag: 'service', sizes: ['Basic ₹2,999', 'Standard ₹5,999', 'Premium ₹9,999'], colors: ['Custom']
  },
];

export const categories = [
  { id: 'all', label: 'All', emoji: '🛍️' },
  { id: 'branding', label: 'Branding', emoji: '🧿' },
  { id: 'website', label: 'Digital & Web', emoji: '🌐' },
  { id: 'printing', label: 'Printing', emoji: '🖨️' },
  { id: 'art', label: 'Custom Art', emoji: '🎨' },
  { id: 'handicraft', label: 'Handicraft', emoji: '♻️' },
  { id: 'apparel', label: 'Merch', emoji: '👕' },
  { id: 'gifts', label: 'Gifts', emoji: '🎁' },
  { id: 'stickers', label: 'Stickers', emoji: '📦' },
  { id: 'decor', label: 'Decor', emoji: '🖼️' },
  { id: 'events', label: 'Events', emoji: '🎉' },
];
