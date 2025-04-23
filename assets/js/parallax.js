document.addEventListener("DOMContentLoaded", function () {
    const introCols = document.querySelectorAll('.intro-column');

    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;

      introCols.forEach(el => {
        el.style.transform = `translateY(${scrollY * 0.3}px)`;
      });
    });
  });
