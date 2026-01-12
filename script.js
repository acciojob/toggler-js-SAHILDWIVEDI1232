//your JS code here. If required.
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

// Style (basic)
document.body.style.fontFamily = "Arial";

document.querySelectorAll(".toggle").forEach(toggle => {
    toggle.addEventListener("change", () => {
        const checked = document.querySelectorAll(".toggle:checked");

        // If more than 2 are checked, uncheck the first one
        if (checked.length > 2) {
            checked[0].checked = false;
            checked[0].parentElement.style.background = "";
        }

        // Update colors
        document.querySelectorAll(".toggle").forEach(t => {
            t.parentElement.style.background = t.checked ? "#4CAF50" : "";
            t.parentElement.style.color = t.checked ? "white" : "black";
            t.parentElement.style.padding = "10px";
            t.parentElement.style.margin = "5px";
            t.parentElement.style.borderRadius = "5px";
        });
    });
});
