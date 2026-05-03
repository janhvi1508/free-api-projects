async function fetchRandomCat() {
  UI.showLoading();

  try {
    const url = "https://api.freeapi.app/api/v1/public/cats/cat/random";
    const options = { method: "GET", headers: { accept: "application/json" } };

    const res = await fetch(url, options);
    const data = await res.json();

    UI.showCat(data.data.image);
  } catch (error) {
    console.error("Failed to fetch cat image:", error);

    UI.showError();
  }
}

document.addEventListener("DOMContentLoaded", fetchRandomCat);

UI.onNextClick(fetchRandomCat);
