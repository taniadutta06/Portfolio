/*=========================================
        PORTFOLIO SCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=====================================
            THEME TOGGLE
    =====================================*/

    const themeBtn = document.querySelector(".theme-toggle");

    if (themeBtn) {

        const body = document.body;
        const icon = themeBtn.querySelector("i");

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            body.classList.add("dark");
            if (icon) {
                icon.classList.replace("fa-moon", "fa-sun");
            }
        }

        themeBtn.addEventListener("click", () => {

            body.classList.toggle("dark");

            if (icon) {

                if (body.classList.contains("dark")) {

                    icon.classList.replace("fa-moon", "fa-sun");
                    localStorage.setItem("theme", "dark");

                } else {

                    icon.classList.replace("fa-sun", "fa-moon");
                    localStorage.setItem("theme", "light");

                }
            }

        });

    }

    /*=====================================
            SMOOTH SCROLL
    =====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                e.preventDefault();

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*=====================================
            ACTIVE NAVBAR
    =====================================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;
            const height = section.offsetHeight;

            if (window.scrollY >= top &&
                window.scrollY < top + height) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*=====================================
            SCROLL REVEAL
    =====================================*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: 0.2

    });

    document.querySelectorAll("section").forEach(section => {

        observer.observe(section);

    });

    /*=====================================
            COUNTER
    =====================================*/

    const counters = document.querySelectorAll(".stat-card h2");

    let counterStarted = false;

    function startCounters() {

        if (counterStarted) return;

        const stats = document.querySelector(".stats");

        if (!stats) return;

        if (stats.getBoundingClientRect().top < window.innerHeight - 100) {

            counterStarted = true;

            counters.forEach(counter => {

                const original = counter.innerText;

                const target = parseFloat(original);

                let count = 0;

                const increment = target / 60;

                const plus = original.includes("+");
                const percent = original.includes("%");
                const decimal = original.includes(".");

                const timer = setInterval(() => {

                    count += increment;

                    if (count >= target) {

                        clearInterval(timer);
                        counter.innerText = original;

                    } else {

                        let value;

                        if (decimal) {

                            value = count.toFixed(2);

                        } else {

                            value = Math.floor(count);

                        }

                        if (plus) value += "+";
                        if (percent) value += "%";

                        counter.innerText = value;

                    }

                }, 25);

            });

        }

    }

    window.addEventListener("scroll", startCounters);

    startCounters();

    /*=====================================
            CONTACT FORM
    =====================================*/

    const form = document.getElementById("contactForm");

    if (form) {

        form.addEventListener("submit", (e) => {

            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !subject || !message) {

                alert("Please fill all fields.");
                return;

            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Enter a valid email address.");
                return;

            }

            alert("Message Sent Successfully!");

            form.reset();

        });

    }

    

    /*=====================================
            LOADER
    =====================================*/

    const loader = document.querySelector(".loader");

    if (loader) {

        window.addEventListener("load", () => {

            loader.classList.add("hide");

            setTimeout(() => {

                loader.remove();

            }, 600);

        });

    }

});