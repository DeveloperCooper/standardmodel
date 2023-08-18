// Navbar Hamburger

const elements = {
    date: document.querySelector(".date"),

    scrollLinks: document.querySelectorAll(".navbarListLink, .footerListLink"),
    navbarList: document.querySelector(".navbarList"),
    toggle: document.querySelector(".navbarButton"),

    hiddenLeft: document.querySelectorAll('.hiddenLeft'),
    hiddenRight: document.querySelectorAll('.hiddenRight'),
    hiddenTop: document.querySelectorAll('.hiddenTop'),
    hiddenBottom: document.querySelectorAll('.hiddenBottom'),
}

//Show Navbar
elements.toggle.addEventListener("click", e => {
    elements.navbarList.classList.toggle("navbarList--showLinks");
});

// Animation Scroll
elements.scrollLinks.forEach(link => {
    link.addEventListener("click", e => {
        if (!link.classList.contains("dropdownClick")) {
            elements.navbarList.classList.remove("navbarList--showLinks");
        }

        const id = link.getAttribute("href");
        const element = document.querySelector(id);

        const position = element.offsetTop - 100;

        window.scrollTo({
            top: position,
            behavior: "smooth"
        });

        e.preventDefault();
    });
});

const faqs = document.querySelectorAll(".faqItem");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        if (faq.classList.contains("active")) {
            faq.classList.remove("active");
            const answer = faq.querySelector(".faqAnswer");
            answer.style.maxHeight = 0;
        } else {
            faqs.forEach(item => {
                item.classList.remove("active");
                const answer = item.querySelector(".faqAnswer");
                answer.style.maxHeight = 0;
            });
            faq.classList.add("active");
            const answer = faq.querySelector(".faqAnswer");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

  //Date
elements.date.innerHTML = new Date().getFullYear();