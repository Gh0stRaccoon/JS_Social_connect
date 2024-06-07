var userImg = document.querySelector(".user_info img");
var inputRange = document.querySelector(".user_info input");

inputRange.addEventListener("input", function (e) {
  userImg.style.borderRadius = e.target.value + "px"; // 60px
});
