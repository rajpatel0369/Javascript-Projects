// Card 1
var isStatus = document.querySelector(".status1");
var btn = document.getElementById("add");

var flag = 0;

btn.addEventListener("click", function () {
  if (flag == 0) {
    isStatus.innerHTML = "Friends";
    isStatus.style.color = "green";
    btn.innerHTML = "Remove Friend";
    flag = 1;
  } else {
    isStatus.innerHTML = "Stranger";
    isStatus.style.color = "red";
    btn.innerHTML = "Add Friend";
    flag = 0;
  }
});

//Card 2
var isStatus1 = document.querySelector(".status2");
var addFriend = document.getElementById("addFriend");
var removeFriend = document.getElementById("removeFriend");

addFriend.addEventListener("click", function () {
  isStatus1.innerHTML = "Friends";
  isStatus1.style.color = "green";
});

removeFriend.addEventListener("click", function () {
  isStatus1.innerHTML = "Stranger";
  isStatus1.style.color = "red";
});
