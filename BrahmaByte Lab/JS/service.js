
  function animateCount(element, start, end, duration) {
    let range = end - start;
    let stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    let increment = end > start ? 1 : -1;

    let timer = setInterval(() => {
      current += increment;
      element.textContent = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const counters = [
      { id: 'counter', start: 3000, end: 4000, duration: 1000 },
      { id: 'counter2', start: 0, end: 60, duration: 3500 },
      { id: 'counter3', start: 0, end: 30, duration: 3500 },
      { id: 'counter4', start: 0, end: 10, duration: 2000 },
    ];

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    function startAnimation(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counterElement = entry.target;
          const counterData = counters.find(counter => counter.id === counterElement.id);
          if (counterData) {
            animateCount(counterElement, counterData.start, counterData.end, counterData.duration);
          }
          observer.unobserve(counterElement);
        }
      });
    }

    const observer = new IntersectionObserver(startAnimation, observerOptions);

    counters.forEach(counter => {
      const element = document.getElementById(counter.id);
      if (element) {
        observer.observe(element);
      }
    });
  });
   