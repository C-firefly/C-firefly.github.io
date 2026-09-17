/* =========================================================
   C-FIREFLY
   PREMIUM PORTFOLIO ENGINE
   ========================================================= */

"use strict";


/* =========================================================
   ELEMENTS
========================================================= */

const body = document.body;

const main = document.getElementById("main");

const themeSwitch =
    document.getElementById("themeSwitch");

const sections =
    document.querySelectorAll(".section");

const navItems =
    document.querySelectorAll(".nav-item");

const revealElements =
    document.querySelectorAll(".reveal");

const cursorGlow =
    document.querySelector(".cursor-glow");


/* =========================================================
   CONFIG
========================================================= */

const CONFIG = {

    themeKey: "cfirefly-theme",

    scrollThreshold: 0.55,

    cursorEnabled:
        window.matchMedia(
            "(pointer: fine)"
        ).matches

};


/* =========================================================
   THEME SYSTEM
========================================================= */

function setTheme(theme) {

    const isDay =
        theme === "day";


    body.classList.toggle(
        "day",
        isDay
    );


    localStorage.setItem(
        CONFIG.themeKey,
        isDay ? "day" : "night"
    );

}


/* =========================================================
   INITIAL THEME
========================================================= */

function initTheme() {

    const savedTheme =
        localStorage.getItem(
            CONFIG.themeKey
        );


    if (savedTheme) {

        setTheme(savedTheme);

        return;

    }


    const systemDay =
        window.matchMedia(
            "(prefers-color-scheme: light)"
        ).matches;


    setTheme(
        systemDay
            ? "day"
            : "night"
    );

}


initTheme();


/* =========================================================
   THEME BUTTON
========================================================= */

if (themeSwitch) {

    themeSwitch.addEventListener(
        "click",
        () => {

            const isCurrentlyDay =
                body.classList.contains("day");


            setTheme(
                isCurrentlyDay
                    ? "night"
                    : "day"
            );

        }
    );

}


/* =========================================================
   NAVIGATION
========================================================= */

function updateActiveNavigation(currentId) {

    navItems.forEach(
        (item) => {

            const target =
                item.getAttribute("href");


            item.classList.toggle(
                "active",
                target === `#${currentId}`
            );

        }
    );

}


/* =========================================================
   SECTION OBSERVER
========================================================= */

let sectionObserver = null;

if (main && sections.length) {

    sectionObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            updateActiveNavigation(
                                entry.target.id
                            );

                        }

                    }
                );

            },

            {
                root: main,

                threshold:
                    CONFIG.scrollThreshold

            }

        );


    sections.forEach(
        (section) => {

            sectionObserver.observe(
                section
            );

        }
    );

}


/* =========================================================
   REVEAL ANIMATION
========================================================= */

let revealObserver = null;

if (main && revealElements.length) {

    revealObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                        }

                    }
                );

            },

            {
                root: main,

                threshold: 0.18

            }

        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

}


/* =========================================================
   SIGNATURE ANIMATION
========================================================= */

const signature =
    document.querySelector(".signature");


if (
    signature &&
    main
) {

    const signatureObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            signature.classList.add(
                                "visible"
                            );

                        }

                    }
                );

            },

            {
                root: main,

                threshold: 0.5

            }

        );


    signatureObserver.observe(
        signature
    );

}


/* =========================================================
   SMOOTH SECTION NAVIGATION
========================================================= */

function scrollToSection(selector) {

    const target =
        document.querySelector(selector);


    if (!target) {
        return;
    }


    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* =========================================================
   NAV CLICK
========================================================= */

navItems.forEach(
    (item) => {

        item.addEventListener(
            "click",
            (event) => {

                event.preventDefault();


                const target =
                    item.getAttribute(
                        "href"
                    );


                if (target) {

                    scrollToSection(
                        target
                    );

                }

            }
        );

    }
);


/* =========================================================
   HERO BUTTONS
========================================================= */

const heroButtons =
    document.querySelectorAll(
        "[data-scroll]"
    );


heroButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            (event) => {

                event.preventDefault();


                const target =
                    button.getAttribute(
                        "data-scroll"
                    );


                if (target) {

                    scrollToSection(
                        target
                    );

                }

            }
        );

    }
);


/* =========================================================
   CURSOR GLOW
========================================================= */

if (
    CONFIG.cursorEnabled &&
    cursorGlow
) {

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;


    window.addEventListener(
        "mousemove",
        (event) => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;

        },
        {
            passive: true
        }
    );


    function animateCursor() {

        currentX +=
            (mouseX - currentX) * 0.12;

        currentY +=
            (mouseY - currentY) * 0.12;


        cursorGlow.style.left =
            `${currentX}px`;

        cursorGlow.style.top =
            `${currentY}px`;


        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();

}


/* =========================================================
   MOUSE PARALLAX
========================================================= */

if (CONFIG.cursorEnabled) {

    window.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (
                    event.clientX /
                    window.innerWidth
                ) - 0.5;


            const y =
                (
                    event.clientY /
                    window.innerHeight
                ) - 0.5;


            const farForest =
                document.querySelector(
                    ".forest.far"
                );


            const middleForest =
                document.querySelector(
                    ".forest.middle"
                );


            if (farForest) {

                farForest.style.transform =
                    `translate(
                        ${x * 8}px,
                        ${y * 4}px
                    )`;

            }


            if (middleForest) {

                middleForest.style.transform =
                    `translate(
                        ${x * 14}px,
                        ${y * 7}px
                    )`;

            }

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   RANDOM FIREFLY MICRO VARIATION
========================================================= */

function randomizeFireflies() {

    const fireflies =
        document.querySelectorAll(
            ".fireflies i"
        );


    fireflies.forEach(
        (fly, index) => {

            const duration =
                7 +
                Math.random() * 8;


            const delay =
                Math.random() * -10;


            const size =
                2 +
                Math.random() * 3;


            fly.style.width =
                `${size}px`;

            fly.style.height =
                `${size}px`;


            fly.style.animationDuration =
                `${duration}s, ${2 + Math.random() * 2}s`;


            fly.style.animationDelay =
                `${delay}s, ${delay / 2}s`;

        }
    );

}


randomizeFireflies();


/* =========================================================
   SECTION NAVIGATION
========================================================= */

let currentSection = 0;

const sectionArray =
    Array.from(sections);


/* =========================================================
   FIND CURRENT SECTION
========================================================= */

function findCurrentSection() {

    if (
        !main ||
        sectionArray.length === 0
    ) {

        return;

    }


    const scrollTop =
        main.scrollTop;


    let closest = 0;

    let smallestDistance =
        Infinity;


    sectionArray.forEach(
        (section, index) => {

            const distance =
                Math.abs(
                    section.offsetTop -
                    scrollTop
                );


            if (
                distance <
                smallestDistance
            ) {

                smallestDistance =
                    distance;

                closest =
                    index;

            }

        }
    );


    currentSection =
        closest;

}


/* =========================================================
   SCROLL TRACKING
========================================================= */

if (main) {

    main.addEventListener(
        "scroll",
        () => {

            findCurrentSection();

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   KEYBOARD SECTION NAVIGATION
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key !== "ArrowDown" &&
            event.key !== "ArrowUp" &&
            event.key !== "PageDown" &&
            event.key !== "PageUp"
        ) {

            return;

        }


        if (
            event.target.tagName === "INPUT" ||
            event.target.tagName === "TEXTAREA" ||
            event.target.isContentEditable
        ) {

            return;

        }


        if (
            sectionArray.length === 0
        ) {

            return;

        }


        event.preventDefault();


        if (
            event.key === "ArrowDown" ||
            event.key === "PageDown"
        ) {

            currentSection =
                Math.min(
                    currentSection + 1,
                    sectionArray.length - 1
                );

        } else {

            currentSection =
                Math.max(
                    currentSection - 1,
                    0
                );

        }


        sectionArray[
            currentSection
        ].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
);


/* =========================================================
   TOUCH / MOBILE SWIPE
========================================================= */

let touchStartY = 0;

let touchEndY = 0;


if (main) {

    main.addEventListener(
        "touchstart",
        (event) => {

            if (
                event.touches.length
            ) {

                touchStartY =
                    event.touches[0].clientY;

            }

        },
        {
            passive: true
        }
    );


    main.addEventListener(
        "touchend",
        (event) => {

            if (
                !event.changedTouches.length
            ) {

                return;

            }


            touchEndY =
                event.changedTouches[0].clientY;


            const difference =
                touchStartY -
                touchEndY;


            /*
             * Small movement = normal scroll/tap
             */
            if (
                Math.abs(difference) < 60
            ) {

                return;

            }


            findCurrentSection();


            if (difference > 0) {

                /*
                 * Swipe UP
                 */
                currentSection =
                    Math.min(
                        currentSection + 1,
                        sectionArray.length - 1
                    );

            } else {

                /*
                 * Swipe DOWN
                 */
                currentSection =
                    Math.max(
                        currentSection - 1,
                        0
                    );

            }


            sectionArray[
                currentSection
            ].scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );


        findCurrentSection();

    }
);


/* =========================================================
   RESIZE
========================================================= */

let resizeTimer;


window.addEventListener(
    "resize",
    () => {

        clearTimeout(
            resizeTimer
        );


        resizeTimer =
            setTimeout(
                () => {

                    findCurrentSection();

                },
                200
            );

    }
);


/* =========================================================
   VISIBILITY / TAB TITLE
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            document.hidden
        ) {

            document.title =
                "C-Firefly • Come Back Soon";

        } else {

            document.title =
                "C-Firefly • Towhid";

        }

    }
);


/* =========================================================
   REDUCE MOTION SUPPORT
========================================================= */

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (reducedMotion.matches) {

    document.documentElement.classList.add(
        "reduce-motion"
    );

}


/* =========================================================
   CONSOLE BRANDING
========================================================= */

console.log(
    "%c C-Firefly ",
    "font-size:20px;font-weight:bold;"
);

console.log(
    "%c Be Practical, Be Ethical • Stay aware, stay secure ",
    "font-size:12px;"
);


/* =========================================================
   END
========================================================= */