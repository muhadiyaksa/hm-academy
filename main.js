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
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("day-one").innerHTML = days.toString().split("")[0];
  document.getElementById("day-two").innerHTML = days.toString().split("")[1];
  document.getElementById("hour-one").innerHTML = hours.toString().split("")[0];
  document.getElementById("hour-two").innerHTML = hours.toString().split("")[1];
  document.getElementById("minute-one").innerHTML = minutes.toString().split("")[0];
  document.getElementById("minute-two").innerHTML = minutes.toString().split("")[1];

  document.getElementById("day-one-waktu").innerHTML = days.toString().split("")[0];
  document.getElementById("day-two-waktu").innerHTML = days.toString().split("")[1];
  document.getElementById("hour-one-waktu").innerHTML = hours.toString().split("")[0];
  document.getElementById("hour-two-waktu").innerHTML = hours.toString().split("")[1];
  document.getElementById("minute-one-waktu").innerHTML = minutes.toString().split("")[0];
  document.getElementById("minute-two-waktu").innerHTML = minutes.toString().split("")[1];
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
