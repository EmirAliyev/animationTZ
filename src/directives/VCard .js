export default {
   mounted(el, binding) {
      const options = {
        rootMargin: '0px',
        threshold: 0.4,
      }
      const callback = (entries, observer) => {
         if(entries[0].isIntersecting){
          el.classList.add('cardShow')
          el.classList.remove('cardBefore')
         }
         if(!entries[0].isIntersecting){
          el.classList.add('cardBefore')
          el.classList.remove('cardShow')
         }
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(el);
  },
}