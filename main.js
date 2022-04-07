const btnSelengkapnya = document.getElementById("selengkapnya");
const sectionTimeline = document.querySelector(".step .timeline");
const timelineShadow = document.querySelector(".step .timeline .shadow");
const timelineLine = document.querySelector(".step .timeline .line-vertical");

btnSelengkapnya.addEventListener("click", function () {
  btnSelengkapnya.classList.toggle("show");
  if (btnSelengkapnya.classList.contains("show")) {
    sectionTimeline.style.height = "980px";
    sectionTimeline.style.overflowY = "visible";
    timelineShadow.style.display = "none";
    btnSelengkapnya.querySelector("span").innerHTML = "Lebih Sedikit";
    btnSelengkapnya.querySelector("i").style.display = "none";
    // timelineLine.style.bottom = "200px";
  } else {
    sectionTimeline.style.height = "550px";
    sectionTimeline.style.overflowY = "hidden";
    timelineShadow.style.display = "block";
    btnSelengkapnya.querySelector("span").innerHTML = "Selengkapnya";
    btnSelengkapnya.querySelector("i").style.display = "block";
    // timelineLine.style.bottom = "0";
  }
});
