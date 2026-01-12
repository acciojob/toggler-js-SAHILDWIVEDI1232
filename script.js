// Create heading
const heading = document.createElement("h2");
heading.innerText = "How do you want your project to be";
document.body.appendChild(heading);

// Create toggle container
const container = document.createElement("div");
container.className = "toggle-container";
document.body.appendChild(container);

// Toggle data
const toggles = [
  { id: "good", class: "g1", text: "good" },
  { id: "cheap", class: "g2", text: "cheap" },
  { id: "fast", class: "g3", text: "fast" }
];

// Create toggles
toggles.forEach(item => {
  const div = document.createElement("div");
  div.className = item.class;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = item.id;
  checkbox.className = "toggle";

  const span = document.createElement("span");
  span.innerText = item.text;

  div.appendChild(checkbox);
  div.appendChild(span);
  container.appendChild(div);
});

// Toggle logic
document.querySelectorAll(".toggle").forEach(toggle => {
  toggle.addEventListener("change", () => {
    const checked = document.querySelectorAll(".toggle:checked");

    // Allow max 2 toggles
    if (checked.length > 2) {
      checked[0].checked = false;
    }

    // Change checkbox color
    document.querySelectorAll(".toggle").forEach(t => {
      t.style.accentColor = t.checked ? "green" : "gray";
    });
  });
});
