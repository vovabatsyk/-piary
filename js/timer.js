let countDownDate = new Date("Mar 1, 2018 12:00:00").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("expired").innerHTML = "До початку сезону залишилось : " + days + "дн. " + hours + "год. "
  + minutes + "хв. " + seconds + "с. ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("expired").innerHTML = "Сезон позпочато!!!";
  }
}, 1000);