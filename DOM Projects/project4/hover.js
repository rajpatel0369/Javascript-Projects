// var elem1 = document.querySelectorAll("#elem1");
// var image = document.querySelector("img");

// elem1.addEventListener("mouseenter", function (details) {
//   image.style.opacity = 1;
// });

// elem1.addEventListener("mouseleave", function (details) {
//   image.style.opacity = 0;
// });

// elem1.addEventListener("mousemove", function (details) {
//   image.style.left = details.x + "px";
// });

var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
  console.log(val);
  var image = val.childNodes[3];
  console.log(image);
  val.addEventListener("mouseenter", function () {
    image.style.opacity = 1;
  });
  val.addEventListener("mouseleave", function () {
    image.style.opacity = 0;
  });
  val.addEventListener("mousemove", function (details) {
    image.style.left = details.x + "px";
  });
});
