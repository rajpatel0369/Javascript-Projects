var container = document.getElementById("container");
var likeButton = document.querySelector("i");

container.addEventListener("dblclick", function () {
  likeButton.style.transform = "translate(-50%, -50%) scale(1)";
  likeButton.style.color = "red";
  likeButton.style.opacity = 1;
  setTimeout(function () {
    likeButton.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    likeButton.style.transform = "translate(-50%, -50%) scale(0)";
  }, 2000);
});
