const btnSelengkapnya = document.getElementById("selengkapnya");
const sectionStep = document.querySelector(".step ");
const sectionTimeline = document.querySelector(".step .timeline");
const timelineShadow = document.querySelector(".step .accordion .shadow");

btnSelengkapnya.addEventListener("click", function () {
  btnSelengkapnya.classList.toggle("show");
  if (btnSelengkapnya.classList.contains("show")) {
    setTimeout(() => {
      timelineShadow.style.display = "none";
    }, 200);
    btnSelengkapnya.innerHTML = "Lebih Sedikit";
  } else {
    timelineShadow.style.display = "block";
    btnSelengkapnya.innerHTML = "Selengkapnya";
  }
});

const buttonLeft = document.querySelector(".testimony button.left");
const buttonRight = document.querySelector(".testimony button.right");
const contentCard = document.querySelector(".testimony .content-slider");
const contentCardAll = document.querySelectorAll(".testimony .content-slider .card-slider");
const indicatorAll = document.querySelectorAll(".testimony .indicator-slider span");
let width = contentCard.querySelector(".card-slider.center").offsetWidth;

let i = 0;
buttonRight.addEventListener("click", function () {
  if (i + width >= width * 6) {
    i = 0;
  } else {
    i = i + width + 100;
  }
  let nilai = i / (width + 100);
  indicatorActive(nilai);
  contentCard.style.transform = `translateX(-${i}px)`;
});
buttonLeft.addEventListener("click", function () {
  if (i === 0) {
    i = (width + 100) * 5;
  } else {
    i = i - (width + 100);
  }
  let nilai = i / (width + 100);
  indicatorActive(nilai);
  contentCard.style.transform = `translateX(-${i}px)`;
});
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("indicator-span")) {
    let nilai = e.target.getAttribute("indeks");
    i = +nilai * (width + 100);
    indicatorActive(+nilai);
    contentCard.style.transform = `translateX(-${i}px)`;
  }
});

function indicatorActive(params) {
  indicatorAll.forEach((el) => {
    el.classList.remove("active");
  });

  indicatorAll[params].classList.add("active");
}

// Set the date we're counting down to
let countDownDate = new Date("May 15, 2022 23:30:59").getTime();

// Update the count down every 1 second
let updateDaysOne = 0;
let updateDaysTwo = 0;
let updateHourOne = 0;
let updateHourTwo = 0;
let updateMinuteOne = 0;
let updateMinuteTwo = 0;

//let element animate
let elementFlipDayLeft = document.querySelector(".count.days .left");
let elementFlipDayRight = document.querySelector(".count.days .right");
let elementFlipHourLeft = document.querySelector(".count.hours .left");
let elementFlipHourRight = document.querySelector(".count.hours .right");
let elementFlipMinuteLeft = document.querySelector(".count.minute .left");
let elementFlipMinuteRight = document.querySelector(".count.minute .right");

let spanDayOne = document.getElementById("day-one");
let spanDayTwo = document.getElementById("day-two");
let spanHourOne = document.getElementById("hour-one");
let spanHourTwo = document.getElementById("hour-two");
let spanMinuteOne = document.getElementById("minute-one");
let spanMinuteTwo = document.getElementById("minute-two");

let spanDayOneWaktu = document.getElementById("day-one-waktu");
let spanDayTwoWaktu = document.getElementById("day-two-waktu");
let spanHourOneWaktu = document.getElementById("hour-one-waktu");
let spanHourTwoWaktu = document.getElementById("hour-two-waktu");
let spanMinuteOneWaktu = document.getElementById("minute-one-waktu");
let spanMinuteTwoWaktu = document.getElementById("minute-two-waktu");

let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((distance % (1000 * 60)) / 1000);

  //Varibel
  let dayOne = days.toString().length === 1 ? "0" : days.toString().split("")[0];
  let dayTwo = days.toString().length === 1 ? days.toString().split("")[0] : days.toString().split("")[1];
  let hourOne = hours.toString().length === 1 ? "0" : hours.toString().split("")[0];
  let hourTwo = hours.toString().length === 1 ? hours.toString().split("")[0] : hours.toString().split("")[1];
  let minutesOne = minutes.toString().length === 1 ? "0" : minutes.toString().split("")[0];
  let minutesTwo = minutes.toString().length === 1 ? minutes.toString().split("")[0] : minutes.toString().split("")[1];
  let secondOne = second.toString().length === 1 ? "0" : second.toString().split("")[0];
  let secondTwo = second.toString().length === 1 ? second.toString().split("")[0] : second.toString().split("")[1];

  // Display the result in the element with id="demo"
  document.getElementById("day-one").innerHTML = dayOne;
  document.getElementById("day-two").innerHTML = dayTwo;
  document.getElementById("hour-one").innerHTML = hourOne;
  document.getElementById("hour-two").innerHTML = hourTwo;
  document.getElementById("minute-one").innerHTML = minutesOne;
  document.getElementById("minute-two").innerHTML = minutesTwo;

  animateFlip(dayOne, updateDaysOne, elementFlipDayRight, spanDayOne);
  animateFlip(dayTwo, updateDaysTwo, elementFlipDayLeft, spanDayTwo);
  animateFlip(hourOne, updateHourOne, elementFlipHourRight, spanHourOne);
  animateFlip(hourTwo, updateHourTwo, elementFlipHourLeft, spanHourTwo);
  animateFlip(minutesOne, updateMinuteOne, elementFlipMinuteRight, spanMinuteOne);
  animateFlip(minutesTwo, updateMinuteTwo, elementFlipMinuteLeft, spanMinuteTwo);
  // animateFlip(secondOne, updateMinuteOne, elementFlipMinuteRight, spanMinuteOne);
  // animateFlip(secondTwo, updateMinuteTwo, elementFlipMinuteLeft, spanMinuteTwo);

  document.getElementById("day-one-waktu").innerHTML = days.toString().length === 1 ? "0" : days.toString().split("")[0];
  document.getElementById("day-two-waktu").innerHTML = days.toString().length === 1 ? days.toString().split("")[0] : days.toString().split("")[1];
  document.getElementById("hour-one-waktu").innerHTML = hours.toString().length === 1 ? "0" : hours.toString().split("")[0];
  document.getElementById("hour-two-waktu").innerHTML = hours.toString().length === 1 ? hours.toString().split("")[0] : hours.toString().split("")[1];
  document.getElementById("minute-one-waktu").innerHTML = minutes.toString().length === 1 ? "0" : minutes.toString().split("")[0];
  document.getElementById("minute-two-waktu").innerHTML = minutes.toString().length === 1 ? minutes.toString().split("")[0] : minutes.toString().split("")[1];

  animateFlip(dayOne, updateDaysOne, elementFlipDayRight, spanDayOneWaktu);
  animateFlip(dayTwo, updateDaysTwo, elementFlipDayLeft, spanDayTwoWaktu);
  animateFlip(hourOne, updateHourOne, elementFlipHourRight, spanHourOneWaktu);
  animateFlip(hourTwo, updateHourTwo, elementFlipHourLeft, spanHourTwoWaktu);
  animateFlip(minutesOne, updateMinuteOne, elementFlipMinuteRight, spanMinuteOneWaktu);
  animateFlip(minutesTwo, updateMinuteTwo, elementFlipMinuteLeft, spanMinuteTwoWaktu);
  //atur 5 nya duls
  updateDaysOne = dayOne;
  updateDaysTwo = dayTwo;
  updateHourOne = hourOne;
  updateHourTwo = hourTwo;
  updateMinuteOne = minutesOne;
  updateMinuteTwo = minutesTwo;

  // If the count down is finished, write some text

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function animateFlip(params1, params2, element, span) {
  if (+params1 !== +params2) {
    element.classList.add("animation-flip");
    span.classList.add("animation-span");
    setTimeout(() => {
      element.classList.remove("animation-flip");
      span.classList.remove("animation-span");
    }, 800);
  }
}

function animateWaktu() {}
