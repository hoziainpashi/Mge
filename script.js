// Проверка состояния
if (localStorage.getItem("visited")) {
  window.location.herf = "about.html";
} else {
  localStorage.setItem("visited", "true");
}
