const names = JSON.parse(localStorage.getItem("data")) || [];
const div = document.querySelector("div");

const addName = e => {
  e.preventDefault();
  const input = document.querySelector("input");
  const newName = input.value;
  if (newName) {
    for (name of names) {
      if (name === newName) {
        alert(`Cześć ${name}, Twoje imię już znajduje się w naszej bazie!`);
        return;
      }
    }
    names.push(input.value);
    div.textContent = names;
    input.value = "";
    localStorage.setItem("data", JSON.stringify(names));
    const retrievedObject = localStorage.getItem("data");
  }
};

document.querySelector("button").addEventListener("click", addName);
