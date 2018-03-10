const countdown = document.querySelector('.countdown');

//set launch date (ms)
const launchDate = new Date('Jul 1, 2018 0:00:00').getTime();

//update every second
const intvl = setInterval(() => {
  //today's date
  const now = new Date().getTime();

  //time between now and launchdate
  const distance = launchDate - now;

  console.log(distance);
  // console.log("hi");

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  //display result
  countdown.innerHTML = `
    <div>${days}<span> Days </span></div>
    <div>${hours}<span> Hours </span></div>
    <div>${mins}<span> Minutes </span></div>
    <div>${secs}<span> Seconds  </span></div>
  `;

  if(distance < 0) {
    //stop countdown
    clearInterval(intvl);
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched';
  }
}, 1000);
