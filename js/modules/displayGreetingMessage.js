export function createGreetingMessage() {
  const greetingsSpan = document.querySelector('[data-greetings]');
  if (greetingsSpan) {
    const now = new Date();
    const userHour = now.toLocaleTimeString().slice(0, 1);
    
    const isMorning = userHour >= 6 && userHour < 12;
    const isAfternoon = userHour >= 12 && userHour < 18;
  
    if (isMorning) {
      greetingsSpan.innerText = 'Good Morning ☕'
    } else if (isAfternoon) {
      greetingsSpan.innerText = 'Good Afternoon 🌤️'
    } else {
      greetingsSpan.innerText = 'Good Evening 🌙'
    }
  }
};
