const showUsersBtn = document.getElementById("showUsers");
const showBooksBtn = document.getElementById("showBooks");
const resultList = document.getElementById("result");
const loader = document.getElementById("loader");

const BASE_URL = "http://localhost:3000";

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

function displayResults(items, type) {
  resultList.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    if (type === "users") {
      li.textContent = `${item.name} (${item.email})`;
    } else if (type === "books") {
      li.textContent = `${item.title} by ${item.author}`;
    }
    resultList.appendChild(li);
  });
}

showUsersBtn.addEventListener("click", async () => {
  showLoader();
  try {
    const res = await fetch(`${BASE_URL}/users`);
    const data = await res.json();
    displayResults(data, "users");
  } catch (error) {
    alert("Error al obtener usuarios");
  } finally {
    hideLoader();
  }
});

showBooksBtn.addEventListener("click", async () => {
  showLoader();
  try {
    const res = await fetch(`${BASE_URL}/books`);
    const data = await res.json();
    displayResults(data, "books");
  } catch (error) {
    alert("Error al obtener libros");
  } finally {
    hideLoader();
  }
});
