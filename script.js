// MOBILE MENU

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}


// CONTACT FORM

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    this.reset();
});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navLinks").classList.remove("active");

    });

});
