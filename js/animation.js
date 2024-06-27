document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // The lower the slower
  
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
  
        // Lower inc to slow and higher to slow
        const inc = target / speed;
  
        // Check if target is reached
        if (count < target) {
          // Add inc to count and output in counter
          counter.innerText = Math.ceil(count + inc);
          // Call function every 10ms
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  });
  