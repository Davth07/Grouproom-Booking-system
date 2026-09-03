document.addEventListener("DOMContentLoaded", () => {
    const nuvarandeSida = window.location.pathname.split("/").pop() || "index.html";

    const navbtn = document.querySelectorAll("header nav a");
    navbtn.forEach(lank => {
        if (lank.getAttribute("href") === nuvarandeSida) {
            lank.style.backgroundColor = "var(--button-hover)";
            lank.style.border = "1px solid var(--secondary-color)";
        }
    });

    if (nuvarandeSida === "rooms.html") {
        const rumslankar = document.querySelectorAll(".room a");
        rumslankar.forEach(lank => {
            lank.addEventListener("click", (event) => {
                event.preventDefault();
                const rumsId = lank.id;
                window.location.href = `book.html?rum=${rumsId}`;
            });
        });
    }

    if (nuvarandeSida === "book.html") {
        const form = document.querySelector("form");
        const rumsValjare = document.getElementById("rum");

        const urlParametrar = new URLSearchParams(window.location.search);
        const valtRum = urlParametrar.get("rum");
        if (valtRum) {
            rumsValjare.value = valtRum;
        }

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const namn = document.getElementById("namn").value;
            
            alert(`Tack ${namn}! Din bokningsförfrågan har skickats.`);
            form.reset();
        });
    }
    const faq = document.querySelectorAll("main section:nth-of-type(2) details");

    faq.forEach((targetDetails) => {
        targetDetails.addEventListener("toggle", (event) => {
            if (targetDetails.open) {
                faq.forEach((detail) => {
                    if (detail !== targetDetails) {
                        detail.removeAttribute("open");
                    }
                });
            }
        });
    });
    
    const anledning = document.querySelector('#anledning')
    const counter = document.querySelector('.counter')

    anledning.addEventListener('input', () => {
        const length = anledning.value.length;
        counter.textContent = `${length} / 200`;
        if (length >= 200){
            counter.style.color = "red"
            counter.textContent = `${length} / 200. Max antal tecken uppnått!`
        }
        
        else if (length >= 150){
            counter.style.color = "#d6610d"
            counter.textContent = `${length} / 200. Nästan max antal tecken!`
        }
        
        else if (length < 150)
            counter.style.color = "green"
    }) 
});

