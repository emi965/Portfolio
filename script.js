const icon = document.getElementById("themeIcon");

icon.onclick = () => {//changes from light to dark mode and vice versa
  document.body.classList.toggle("dark");
  icon.src = document.body.classList.contains("dark")
    ? "dark.png"
    : "light.png";
};
