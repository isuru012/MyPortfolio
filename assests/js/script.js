let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
hamMenuIcon.addEventListener("click", () => {
    navBar.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click", () => {
        navBar.classList.remove("active");
        hamMenuIcon.classList.toggle("fa-times");
    });
});

function scrollToAbout() {
    var aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({behavior: 'smooth'});
}

const navigationHeight = document.querySelector('header').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px");


// ScrollReveal().reveal(document.getElementsByClassName("aboutme"),{delay: 500, origin:'right' });
ScrollReveal({reset: true});

ScrollReveal().reveal(document.getElementById("welcomeImage"), {
    delay: 100, origin: "right",
    distance: '60px', duration: 1000, reset: false
});

ScrollReveal().reveal(document.getElementsByClassName("left1"), {
    delay: 100, origin: "left",
    distance: '60px', duration: 1000, reset: false
});

ScrollReveal().reveal(document.getElementsByClassName("aboutmeImage"), {
    delay: 100, origin: "bottom",
    distance: '60px', duration: 1000
});

ScrollReveal().reveal(document.getElementsByClassName("aboutme"), {
    delay: 100, origin: "right",
    distance: '60px', duration: 1000
});

ScrollReveal().reveal(document.getElementsByClassName("aboutmepara"), {
    delay: 100, origin: "bottom",
    distance: '60px', duration: 1000
});

ScrollReveal().reveal(document.getElementsByClassName("educationh1"), {
    delay: 100, origin: "left",
    distance: '60px', duration: 1000
});

ScrollReveal().reveal(document.getElementsByClassName("leftImageEdu"), {
    delay: 100, origin: "left",
    distance: '60px', duration: 1000, interval: 200
});

ScrollReveal().reveal(document.getElementsByClassName("rightEdu"), {
    delay: 100, origin: "right",
    distance: '60px', duration: 1000, interval: 200
});

ScrollReveal().reveal(document.getElementsByClassName("workh1"), {
    delay: 100, origin: "left",
    distance: '60px', duration: 1000
});

ScrollReveal().reveal(document.getElementsByClassName("workpara"), {
    delay: 100, origin: "bottom",
    distance: '60px', duration: 1000
});

ScrollReveal().reveal(document.getElementsByClassName("workammount"), {
    delay: 100, origin: "bottom",
    distance: '60px', duration: 1000, interval: 200
});

ScrollReveal().reveal(document.getElementsByClassName("projectsh1"), {
    delay: 100, origin: "left",
    distance: '60px', duration: 1000
});
ScrollReveal().reveal(document.getElementsByClassName("projectdivg1"), {
    delay: 100, origin: "left",
    distance: '30px', duration: 1000
});
ScrollReveal().reveal(document.getElementsByClassName("projectdivg3"), {
    delay: 100, origin: "right",
    distance: '30px', duration: 1000
});

ScrollReveal().reveal(document.getElementsByClassName("projectdivg2"), {
    delay: 100, origin: "bottom",
    distance: '30px', duration: 1000
});

ScrollReveal().reveal(document.getElementsByClassName("certificatesh1"), {
    delay: 100, origin: "left",
    distance: '60px', duration: 1000
});

ScrollReveal().reveal(document.getElementsByClassName("galleryh1"), {
    delay: 100, origin: "left",
    distance: '60px', duration: 1000
});

ScrollReveal().reveal(document.getElementsByClassName("gall1"), {
    delay: 100, origin: "top",
    distance: '60px', duration: 1000, interval: 200
});
ScrollReveal().reveal(document.getElementsByClassName("gall4"), {
    delay: 100, origin: "bottom",
    distance: '60px', duration: 1000, interval: 200
});

ScrollReveal().reveal(document.getElementsByClassName("contacth1"), {
    delay: 100, origin: "left",
    distance: '60px', duration: 1000
});

ScrollReveal().reveal(document.getElementsByClassName("form-group"), {
    delay: 100, origin: "bottom",
    distance: '60px', duration: 1000, interval: 200
});

ScrollReveal().reveal(document.getElementsByClassName("contact-info"), {
    delay: 100, origin: "right",
    distance: '60px', duration: 1000, interval: 200
});

function startCount() {
    var counters = document.querySelectorAll('.count');
    var speed = 1000;

    counters.forEach(function (counter) {
        var updateCount = function () {
            var target = +counter.getAttribute('data-count');
            var count = +counter.innerText;
            var inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 100);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

var animationTriggered = false;
window.addEventListener('scroll', function () {
    if (!animationTriggered && isInViewport(document.querySelector('.rowWork'))) {
        startCount();
        animationTriggered = true;
    }
    if (animationTriggered && !isInViewport(document.querySelector('.rowWork'))) {
        resetCountValues();
        animationTriggered = false;

    }

});

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
}

function resetCountValues() {
    var counters = document.querySelectorAll('.count');
    counters.forEach(function (counter) {
        counter.innerText = 1;
    });
}

window.addEventListener('load', function () {
    // Hide the loading animation after 2 seconds
    setTimeout(function () {
        var loadingScreen = document.querySelector('.loading-screen');

        loadingScreen.style.display = 'none';

    }, 1000);
});

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "isurudulakshana012@gmail.com",
        Password: "1DC9ACBB54B656DBD7F7FA40D1282D66868E",
        To: 'isurudulakshana012@gmail.com',
        From: 'recapsmovie02@gmail.com',
        Subject: "New Message Confirmation",
        Body: "Name : "+document.getElementById('name').value
        + "<br> Email : "+document.getElementById('email').value
        +"<br> Message : "+document.getElementById('message').value
    }).then(
        message => alert("Message Sent Successfully")
    );
}

function sendConfirmation() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "isurudulakshana012@gmail.com",
        Password: "1DC9ACBB54B656DBD7F7FA40D1282D66868E",
        To: document.getElementById("email").value,
        From: "isurudulakshana012@gmail.com",
        Subject: "New Message Confirmation",
        Body: "Thank You For contacting Us"
    }).then(
        message => alert("Done")
    );
}