document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for internal section links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', event => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith("#")) { // Only apply smooth scrolling to section links
                event.preventDefault();
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Dynamic Greeting Based on Time
    const greetingElement = document.createElement("p");
    greetingElement.id = "dynamic-greeting";
    document.querySelector("header").appendChild(greetingElement);
    updateGreeting(); // Set initial greeting
    setInterval(updateGreeting, 60000); // Update every minute

    function updateGreeting() {
        const hours = new Date().getHours();
        let greetingText = "";

        if (hours < 12) {
            greetingText = "Good morning!";
        } else if (hours < 18) {
            greetingText = "Good afternoon!";
        } else {
            greetingText = "Good evening!";
        }

        document.getElementById("dynamic-greeting").textContent = greetingText;
    }

    // Highlight the Active Page in Navigation
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll('nav ul li a').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.style.color = "#ffcc00"; // Highlights the active page link
        }
    });

    // Show/Hide Contact Info (Only for Contact Page)
    const contactList = document.getElementById("contact-list");
    if (contactList) {
        const hideBtn = document.getElementById("hideBtn");
        const showBtn = document.getElementById("showBtn");

        if (hideBtn && showBtn) { // Ensure buttons exist before adding event listeners
            hideBtn.addEventListener("click", () => contactList.style.display = "none");
            showBtn.addEventListener("click", () => contactList.style.display = "block");
        }
    }
});