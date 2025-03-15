document.addEventListener("DOMContentLoaded", function () {
      const greetingElement = document.getElementById("greeting");
      if (!greetingElement) return;

      const hour = new Date().getHours();
      let greetingText = "Hello";

      if (hour >= 5 && hour < 12) {
          greetingText = "Good morning";
      } else if (hour >= 12 && hour < 18) {
          greetingText = "Good afternoon";
      } else {
          greetingText = "Good evening";
      }

      greetingElement.textContent = greetingText;
  });
