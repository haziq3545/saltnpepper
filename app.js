const swiper = document.getElementById("swiper");

    swiper.addEventListener("mousemove", (e) => {
      const containerWidth = swiper.offsetWidth; 
      const contentWidth = swiper.scrollWidth;    
      const mouseX = e.clientX - swiper.getBoundingClientRect().left; 

      
      const scrollPercentage = mouseX / containerWidth; 
      const scrollPosition = scrollPercentage * (contentWidth - containerWidth); 

      swiper.scrollLeft = scrollPosition;
    });