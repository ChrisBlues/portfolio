const body = document.body;
const button = document.getElementById("toggleTheme");
const themes = ["theme-vif", "theme-pastel", "theme-nocturne", "theme-galaxie"];
const icons = ["🌈", "🌸", "🌙", "🌌"];
let current = 0;

button.addEventListener("click", () => {
    body.classList.remove(themes[current]);
    current = (current + 1) % themes.length;
    body.classList.add(themes[current]);
    button.textContent = icons[current];

    // Animation subtile
    button.classList.add("animate");
    setTimeout(() => button.classList.remove("animate"), 400);
});
