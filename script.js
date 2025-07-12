const output = document.getElementById("output");
const loadBtn = document.getElementById("loadBtn");

function loadCats() {
  output.textContent = "⏳ Загрузка котов...";

  fetch("https://api.thecatapi.com/v1/images/search?limit=5")
    .then(response => response.json())
    .then(data => {
      output.innerHTML = "";

      data.forEach(cat => {
        const div = document.createElement("div");
        div.className = "cat";
        div.innerHTML = `<img src="${cat.url}" alt="Котик">`;
        output.appendChild(div);
      });
    })
    .catch(error => {
      output.textContent = "❌ Ошибка загрузки: " + error;
    });
}

loadBtn.addEventListener("click", loadCats);
