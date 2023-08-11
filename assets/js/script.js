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

//Gallery
const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);

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