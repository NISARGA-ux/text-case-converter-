function toUpperCase() {
  let text = document.getElementById("text-input").value;
  document.getElementById("text-input").value = text.toUpperCase();
}

function toLowerCase() {
  let text = document.getElementById("text-input").value;
  document.getElementById("text-input").value = text.toLowerCase();
}

function toTitleCase() {
  let text = document.getElementById("text-input").value.toLowerCase();
  let words = text.split(" ");
  let titleCase = words.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(" ");
  document.getElementById("text-input").value = titleCase;
}

function clearText() {
  document.getElementById("text-input").value = "";
}
