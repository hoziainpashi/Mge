// Проверка состояния
if (localStorage.getItem("visited")) {
  window.location.href = "about.html";
} else {
  localStorage.setItem("visited", "true");
}
