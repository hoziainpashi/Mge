// Проверка состояния
if (localStorage.getItem("visited")) {
  document.write("Эта страница больше не доступна.");
} else {
  localStorage.setItem("visited", "true");
}
