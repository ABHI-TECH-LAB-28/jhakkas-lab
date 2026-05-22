import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  EN: {
    // Navbar
    home: "Home",
    services: "Services",
    shop: "Shop",
    portfolio: "Portfolio",
    customOrder: "Custom Order",
    about: "About Us",
    contact: "Contact",
    searchPlaceholder: "Search products...",
    profile: "Profile",
    login: "Login",
    
    // Buttons & Cart
    addToCart: "Add to Cart",
    added: "Added ✓",
    checkout: "Checkout",
    loginToCheckout: "Login to Checkout",
    subtotal: "Subtotal",
    yourCart: "Your Cart",
    emptyCart: "Your cart is empty.",
    startProject: "Start Project",
    viewAllServices: "View All Services",
    
    // Home Page
    heroTitleLine1: "WE BUILD",
    heroTitleLine2: "CULTURE",
    heroDescription: "We merge street-art aesthetics with premium digital design. Elevating brands through bold identities, immersive websites, and custom merchandise.",
    ourArsenal: "OUR ARSENAL",
    startAProject: "START A PROJECT",
    bestSelling: "Best Selling",
    bestSellingSub: "Explore our top merch & art categories.",
    featuredProducts: "Featured Products",
    featuredProductsSub: "Exclusive drops and limited edition prints.",
    howItWorks: "How It Works",
    howItWorksSub: "From idea to reality in three simple steps.",
    step1Title: "Drop the Idea",
    step1Desc: "Tell us your vision. We take custom orders for digital design or physical merch.",
    step2Title: "We Cook",
    step2Desc: "Our creative team gets to work, crafting premium, street-art inspired designs.",
    step3Title: "Jhakkas Delivery",
    step3Desc: "We launch your site or ship your custom gear straight to your door.",
    stayInLoop: "Stay in the Loop",
    newsletterSub: "Subscribe for exclusive drops, secret discounts, and creative inspiration.",
    subscribe: "Subscribe",
    emailPlaceholder: "Enter your email address",
    whatWeDo: "What We Do",
    creativeServices: "Creative services made to look Jhakkas 🔥",
    topServices: "Top Services",
    mostRequested: "Our most requested creative deployments.",
    wordOnStreet: "Word on the Street",
    dontTakeOurWord: "Don't just take our word for it.",
    gotQuestions: "Got Questions?",
    weGotAnswers: "We've got answers.",
    
    // Footer & Auth
    support: "Support",
    visitUs: "Visit Us",
    ourStory: "Our Story",
    getInTouch: "Get in Touch",
    customInquiry: "Custom Inquiry",
    faq: "FAQ",
    websiteDesign: "Website Design",
    logoBranding: "Logo Branding",
    guitarPainting: "Guitar Painting",
    muralsArt: "Murals & Art",
    newDrops: "New Drops",
    digitalAssets: "Digital Assets",
    customGear: "Custom Gear",
    accessories: "Accessories",
    fullName: "Full Name",
    emailAddress: "Email Address",
    password: "Password",
    enterName: "Enter your name",
    signUp: "Sign Up",
    createAccount: "Create Account",
    welcomeBack: "Welcome Back",
    joinCrew: "Join the Crew",
    loginToAccount: "Login to your account",
    startCreativeJourney: "Start your creative journey",
    alreadyHaveAccount: "Already have an account?",
    dontHaveAccount: "Don't have an account?",
    processing: "Processing...",
    saveChanges: "Save Changes",
    quickLinks: "Quick Links",
    company: "Company",
    help: "Help",
    newsletter: "Newsletter",
    newsletterDesc: "Subscribe to our newsletter for latest updates and custom offers.",
    newsletterPlaceholder: "Your email address",
    ourProcess: "Our Process",
    blog: "Blog",
    careers: "Careers",
    trackOrder: "Track Order",
    shippingInfo: "Shipping Info",
    returnsRefunds: "Returns & Refunds",
    termsConditions: "Terms & Conditions",
    pricing: "Pricing",
    aboutUs: "About Us",
    contactUs: "Contact Us",
  },
  OR: {
    // Navbar
    home: "ମୂଳ ପୃଷ୍ଠା",
    services: "ସେବାଗୁଡ଼ିକ",
    shop: "ଦୋକାନ",
    portfolio: "ପୋର୍ଟଫୋଲିଓ",
    customOrder: "କଷ୍ଟମ୍ ଅର୍ଡର୍",
    about: "ଆମ ବିଷୟରେ",
    contact: "ଯୋଗାଯୋଗ",
    searchPlaceholder: "ସାମଗ୍ରୀ ଖୋଜନ୍ତୁ...",
    profile: "ପ୍ରୋଫାଇଲ୍",
    login: "ଲଗଇନ୍",
    
    // Buttons & Cart
    addToCart: "କାର୍ଟରେ ଯୋଡନ୍ତୁ",
    added: "ଯୋଡାଗଲା ✓",
    checkout: "ଚେକଆଉଟ୍",
    loginToCheckout: "ଲଗଇନ୍ କରି ଚେକଆଉଟ୍ କରନ୍ତୁ",
    subtotal: "ମୋଟ୍ ମୂଲ୍ୟ",
    yourCart: "ଆପଣଙ୍କ କାର୍ଟ",
    emptyCart: "ଆପଣଙ୍କ କାର୍ଟ ଖାଲି ଅଛି।",
    startProject: "ପ୍ରୋଜେକ୍ଟ ଆରମ୍ଭ କରନ୍ତୁ",
    viewAllServices: "ସମସ୍ତ ସେବା ଦେଖନ୍ତୁ",
    
    // Home Page
    heroTitleLine1: "ଆମେ ଗଢୁ",
    heroTitleLine2: "ସଂସ୍କୃତି",
    heroDescription: "ଆମେ ଓଡ଼ିଶାର କଳା ସହ ଆଧୁନିକ ଡିଜିଟାଲ୍ ଅନୁଭୂତିକୁ ଯୋଡିଥାଉ। ଆକର୍ଷଣୀୟ ୱେବସାଇଟ୍, ଲୋଗୋ ଏବଂ କଷ୍ଟମ୍ ମର୍ଚ୍ଚାଣ୍ଡାଇଜ୍ ମାଧ୍ୟମରେ ଆପଣଙ୍କ ବ୍ରାଣ୍ଡକୁ ଆଗକୁ ବଢାନ୍ତୁ।",
    ourArsenal: "ଆମର ସେବାଗୁଡ଼ିକ",
    startAProject: "ପ୍ରୋଜେକ୍ଟ ଆରମ୍ଭ କରନ୍ତୁ",
    bestSelling: "ସର୍ବାଧିକ ବିକ୍ରିତ",
    bestSellingSub: "ଆମର ଲୋକପ୍ରିୟ ପୋଷାକ ଏବଂ କଳାକୃତି ସମୂହ ଦେଖନ୍ତୁ।",
    featuredProducts: "ସ୍ୱତନ୍ତ୍ର ସାମଗ୍ରୀ",
    featuredProductsSub: "ସୀମିତ ସଂସ୍କରଣର ସ୍ୱତନ୍ତ୍ର କଳାକୃତି ଓ ପ୍ରିଣ୍ଟସ୍।",
    howItWorks: "ଏହା କିପରି କାମ କରେ",
    howItWorksSub: "ତିନୋଟି ସହଜ ପଦକ୍ଷେପରେ ଆପଣଙ୍କ ସ୍ୱପ୍ନକୁ ସାକାର କରନ୍ତୁ।",
    step1Title: "ବିଚାର କରନ୍ତୁ",
    step1Desc: "ଆପଣଙ୍କର ବିଚାର ବା କଳ୍ପନା ଆମକୁ ଜଣାନ୍ତୁ। ଆମେ କଷ୍ଟମ୍ ଅର୍ଡର୍ ଗ୍ରହଣ କରୁ।",
    step2Title: "ଆମେ ତିଆରି କରୁ",
    step2Desc: "ଆମର କ୍ରିଏଟିଭ୍ ଟିମ୍ ଆପଣଙ୍କ ପାଇଁ ସର୍ବୋତ୍ତମ ଡିଜାଇନ୍ ପ୍ରସ୍ତୁତ କରେ।",
    step3Title: "ସୁରକ୍ଷିତ ଡେଲିଭରି",
    step3Desc: "ଆମେ ଆପଣଙ୍କ ସାମଗ୍ରୀ ସିଧାସଳଖ ଆପଣଙ୍କ ଘରେ ପହଞ୍ଚାଇଥାଉ।",
    stayInLoop: "ଆମ ସହ ଯୋଡି ରୁହନ୍ତୁ",
    newsletterSub: "ନୂଆ ଉତ୍ପାଦର ଅପଡେଟ୍, ସ୍ୱତନ୍ତ୍ର ଅଫର୍ ଏବଂ କ୍ରିଏଟିଭ୍ ଟିପ୍ସ ପାଇଁ ସବସ୍କ୍ରାଇବ୍ କରନ୍ତୁ।",
    subscribe: "ସବସ୍କ୍ରାଇବ୍",
    emailPlaceholder: "ଆପଣଙ୍କ ଇମେଲ୍ ଆଡ୍ରେସ୍ ଦିଅନ୍ତୁ",
    whatWeDo: "ଆମେ କଣ କରୁ",
    creativeServices: "କ୍ରିଏଟିଭ୍ ସେବାଗୁଡ଼ିକ ଯାହାକୁ ଆମେ ଅତି ସୁନ୍ଦର ଭାବରେ ପ୍ରସ୍ତୁତ କରୁ 🔥",
    topServices: "ଲୋକପ୍ରିୟ ସେବା",
    mostRequested: "ଆମର ସବୁଠାରୁ ଅଧିକ ଅନୁରୋଧିତ କ୍ରିଏଟିଭ୍ କାର୍ଯ୍ୟଗୁଡ଼ିକ।",
    wordOnStreet: "ଲୋକମାନଙ୍କ ମତାମତ",
    dontTakeOurWord: "ଆମର ଗ୍ରାହକମାନେ କଣ କହୁଛନ୍ତି ପଢ଼ନ୍ତୁ।",
    gotQuestions: "ପ୍ରଶ୍ନ ଅଛି କି?",
    weGotAnswers: "ଆମ ପାଖରେ ଉତ୍ତର ଅଛି।",
    
    // Footer & Auth
    support: "ସହାୟତା",
    visitUs: "ଆମ ଠିକଣା",
    ourStory: "ଆମ କାହାଣୀ",
    getInTouch: "ସମ୍ପର୍କ କରନ୍ତୁ",
    customInquiry: "କଷ୍ଟମ୍ ଅନୁସନ୍ଧାନ",
    faq: "ପ୍ରଶ୍ନୋତ୍ତର",
    websiteDesign: "ୱେବସାଇଟ୍ ଡିଜାଇନ୍",
    logoBranding: "ଲୋଗୋ ବ୍ରାଣ୍ଡିଂ",
    guitarPainting: "ଗିଟାର୍ ପେଣ୍ଟିଂ",
    muralsArt: "ମ୍ୟୁରାଲ୍ସ ଓ ଆର୍ଟ",
    newDrops: "ନୂଆ କଲେକ୍ସନ୍",
    digitalAssets: "ଡିଜିଟାଲ୍ ସମ୍ପତ୍ତି",
    customGear: "କଷ୍ଟମ୍ ଗିଅର୍",
    accessories: "ଆସେସୋରିଜ୍",
    fullName: "ପୁରା ନାମ",
    emailAddress: "ଇମେଲ୍ ଆଡ୍ରେସ୍",
    password: "ପାସୱାର୍ଡ",
    enterName: "ଆପଣଙ୍କ ନାମ ଲେଖନ୍ତୁ",
    signUp: "ସାଇନ୍ ଅପ୍",
    createAccount: "ଖାତା ଖୋଲନ୍ତୁ",
    welcomeBack: "ସ୍ୱାଗତମ୍",
    joinCrew: "ଆମ ସହ ଯୋଡି ହୁଅନ୍ତୁ",
    loginToAccount: "ଆପଣଙ୍କ ଆକାଉଣ୍ଟରେ ଲଗଇନ୍ କରନ୍ତୁ",
    startCreativeJourney: "ଆପଣଙ୍କର ସୃଜନଶୀଳ ଯାତ୍ରା ଆରମ୍ଭ କରନ୍ତୁ",
    alreadyHaveAccount: "ପୂର୍ବରୁ ଆକାଉଣ୍ଟ ଅଛି କି?",
    dontHaveAccount: "ଆକାଉଣ୍ଟ ନାହିଁ କି?",
    processing: "ପ୍ରକ୍ରିୟା ଚାଲିଛି...",
    saveChanges: "ପରିବର୍ତ୍ତନ ସଂରକ୍ଷଣ କରନ୍ତୁ",
    quickLinks: "କ୍ଲିକ୍ ଲିଙ୍କ୍ସ",
    company: "କମ୍ପାନୀ",
    help: "ସାହାଯ୍ୟ",
    newsletter: "ନ୍ୟୁଜଲେଟର",
    newsletterDesc: "ନୂତନ ଅପଡେଟ୍ ଏବଂ କଷ୍ଟମ୍ ଅଫର ପାଇଁ ଆମ ନ୍ୟୁଜଲେଟର ସବସ୍କ୍ରାଇବ୍ କରନ୍ତୁ।",
    newsletterPlaceholder: "ଆପଣଙ୍କ ଇମେଲ୍ ଆଡ୍ରେସ୍",
    ourProcess: "ଆମ ପ୍ରକ୍ରିୟା",
    blog: "ବ୍ଲଗ୍",
    careers: "କ୍ୟାରିୟର୍",
    trackOrder: "ଅର୍ଡର୍ ଟ୍ରାକ୍ କରନ୍ତୁ",
    shippingInfo: "ସିପିଂ ସୂଚନା",
    returnsRefunds: "ରିଟର୍ନ ଏବଂ ରିଫଣ୍ଡ",
    termsConditions: "ନିୟମ ଓ ସର୍ତ୍ତାବଳୀ",
    pricing: "ମୂଲ୍ୟ ନିର୍ଦ୍ଧାରଣ",
    aboutUs: "ଆମ ବିଷୟରେ",
    contactUs: "ଯୋଗାଯୋଗ କରନ୍ତୁ",
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('jhakkas_lang') || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('jhakkas_lang', language);
  }, [language]);

  const t = (key) => {
    if (!translations[language] || !translations[language][key]) {
      return translations['EN'][key] || key;
    }
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
