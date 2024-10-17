document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeStyle = document.getElementById("theme-style");

    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        themeStyle.setAttribute("href", `${currentTheme}.css`);
    }

    themeToggle.addEventListener("click", () => {
        const newTheme = themeStyle.getAttribute("href") === "light.css" ? "dark" : "light";
        themeStyle.setAttribute("href", `${newTheme}.css`);
        localStorage.setItem("theme", `${newTheme}`);
    });
}); //look imma be completely honest here i am not learning javascript just for this and then to never use it again. i completely stole this code from chatgpt