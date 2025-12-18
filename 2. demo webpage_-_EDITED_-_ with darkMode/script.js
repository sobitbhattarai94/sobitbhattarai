

const body = document.body;
const btn = document.getElementById("mode");

btn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
    if (body.classList.contains("dark-theme")) {
        btn.innerHTML = "Light Mode";
    } else {
        btn.innerHTML = "Dark Mode";
    }
});








let scrollBtn = document.getElementById("to-home");

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }

});