
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const notification = document.getElementById("notification");
const navLinkItems = document.querySelectorAll(".nav-link");


hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


navLinkItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

       
        notification.textContent = "You clicked " + link.textContent;
        notification.style.display = "block";


        setTimeout(() => {
            notification.style.display = "none";
        }, 2000);
    });
});