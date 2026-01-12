// Create heading
const heading = document.createElement("h2");
heading.innerText = "How do you want your project to be?";
document.body.appendChild(heading);

// Create toggle container
const container = document.createElement("div");
container.className = "toggle-container";
document.body.appendChild(container);

// Toggle data
const toggles = [
  { divId: "g1", checkboxId: "good", text: "Good" },
  { divId: "g2", checkboxId: "cheap", text: "Cheap" },
  { divId: "g3", checkboxId: "fast", text: "Fast" }
];

// Create toggles
toggles.forEach(item => {
  const div = document.createElement("div");
  div.id = item.divId;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = item.checkboxId;
  checkbox.className = "toggle";

  const span = document.createElement("span");
  span.innerText = item.text;

  div.appendChild(checkbox);
  div.appendChild(span);
  container.appendChild(div);

  // Clicking div toggles checkbox
  div.addEventListener("click", () => {
    checkbox.checked = !checkbox.checked;

    const checked = document.querySelectorAll(".toggle:checked");

    // Max 2 toggles
    if (checked.length > 2) {
      checked[0].checked = false;
    }
  });
});
