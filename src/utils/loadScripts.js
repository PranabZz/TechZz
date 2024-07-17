// utils/loadScripts.js

const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
    });
  };
  
  const loadAllScripts = async () => {
    try {
      await Promise.all([
        loadScript('/assets/js/jquery-3.7.1.js'),
        loadScript('/assets/js/bootstrap.bundle.min.js'),
        loadScript('/assets/js/aos.js'),
        loadScript('/assets/js/menu/menu.js'),
        loadScript('/assets/js/isotope.pkgd.min.js'),
        loadScript('/assets/js/jquery.magnific-popup.min.js'),
        loadScript('/assets/js/swiper-bundle.min.js'),
        loadScript('/assets/js/countdown.js'),
        loadScript('/assets/js/slick.js'),
        loadScript('/assets/js/wow.min.js'),
        loadScript('/assets/js/modernizr.min.js'),
        loadScript('/assets/js/countdown.js'),
        loadScript('/assets/js/skill-bar.js'),
        loadScript('/assets/js/pricing-switcher.js'),
        loadScript('/assets/js/top-to-bottom.js'),
        loadScript('/assets/js/gsap.js'),
        loadScript('/assets/js/ScrollTrigger.js'),
        loadScript('/assets/js/SplitText.js'),
        loadScript('/assets/js/gsap-animation.js'),
        loadScript('/assets/js/accordion.js'),
        loadScript('https://maps.googleapis.com/maps/api/js?v=3&key=YOUR_API_KEY'),
        loadScript('/assets/js/app.js'),
      ]);
      console.log('All scripts loaded successfully');
    } catch (error) {
      console.error('Error loading scripts:', error);
    }
  };
  
  export default loadAllScripts;
  