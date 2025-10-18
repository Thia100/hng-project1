const time = document.querySelector("#time");
function updateTime() {
  time.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);
