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
