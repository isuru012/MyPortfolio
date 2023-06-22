
function anchorClick(anchorId) {

    if (anchorId === 'dashboard') {
        document.getElementById('dash').style.setProperty("background-color", "#BFF5DC", "important");
        document.getElementById('cus').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('itm').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('ordrs').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('newOrdrs').style.setProperty("background-color", "#ffffff", "important");

        document.getElementById('dash').style.setProperty("color", "#03a293");
        document.getElementById('cus').style.setProperty("color", "#000000");
        document.getElementById('itm').style.setProperty("color", "#000000");
        document.getElementById('ordrs').style.setProperty("color", "#000000");
        document.getElementById('newOrdrs').style.setProperty("color", "#000000");

        const mq = window.matchMedia("(max-width:900px)");

        if (mq.matches) {

            document.getElementById("wrapper").classList.toggle("toggled");

        }


    } else if (anchorId === 'customers') {
        document.getElementById('dash').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('cus').style.setProperty("background-color", "#BFF5DC", "important");
        document.getElementById('itm').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('ordrs').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('newOrdrs').style.setProperty("background-color", "#ffffff", "important");

        document.getElementById('dash').style.setProperty("color", "#000000");
        document.getElementById('cus').style.setProperty("color", "#03a293");
        document.getElementById('itm').style.setProperty("color", "#000000");
        document.getElementById('ordrs').style.setProperty("color", "#000000");
        document.getElementById('newOrdrs').style.setProperty("color", "#000000");
        const mq = window.matchMedia("(max-width:900px)");

        if (mq.matches) {
            document.getElementById("wrapper").classList.toggle("toggled");

        }

    } else if (anchorId === 'items') {
        document.getElementById('dash').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('cus').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('itm').style.setProperty("background-color", "#BFF5DC", "important");
        document.getElementById('ordrs').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('newOrdrs').style.setProperty("background-color", "#ffffff", "important");

        document.getElementById('dash').style.setProperty("color", "#000000");
        document.getElementById('cus').style.setProperty("color", "#000000");
        document.getElementById('itm').style.setProperty("color", "#03a293");
        document.getElementById('ordrs').style.setProperty("color", "#000000");
        document.getElementById('newOrdrs').style.setProperty("color", "#000000");

        const mq = window.matchMedia("(max-width:900px)");

        if (mq.matches) {
            document.getElementById("wrapper").classList.toggle("toggled");

        }

    } else if (anchorId === 'orders') {
        document.getElementById('dash').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('cus').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('itm').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('ordrs').style.setProperty("background-color", "#BFF5DC", "important");
        document.getElementById('newOrdrs').style.setProperty("background-color", "#ffffff", "important");

        document.getElementById('dash').style.setProperty("color", "#000000");
        document.getElementById('cus').style.setProperty("color", "#000000");
        document.getElementById('itm').style.setProperty("color", "#000000");
        document.getElementById('ordrs').style.setProperty("color", "#03a293");
        document.getElementById('newOrdrs').style.setProperty("color", "#000000");
        const mq = window.matchMedia("(max-width:900px)");

        if (mq.matches) {
            document.getElementById("wrapper").classList.toggle("toggled");


        }
    } else if (anchorId === 'newOrder') {
        document.getElementById('dash').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('cus').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('itm').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('ordrs').style.setProperty("background-color", "#ffffff", "important");
        document.getElementById('newOrdrs').style.setProperty("background-color", "#BFF5DC", "important");

        document.getElementById('dash').style.setProperty("color", "#000000");
        document.getElementById('cus').style.setProperty("color", "#000000");
        document.getElementById('itm').style.setProperty("color", "#000000");
        document.getElementById('ordrs').style.setProperty("color", "#000000");
        document.getElementById('newOrdrs').style.setProperty("color", "#03a293");

        const mq = window.matchMedia("(max-width:900px)");

        if (mq.matches) {
            document.getElementById("wrapper").classList.toggle("toggled");

        }

    }
}


function loadSection(sectionId) {
    const sections = ['dashboard', 'customers', 'items', 'orders', 'newOrder'];

    sections.forEach(function (section) {
        const display = section === sectionId ? 'block' : 'none';
        document.getElementById(section).style.display = display;
    });

    const sectionTitles = {
        dashboard: 'Dashboard',
        customers: 'Customers',
        items: 'Items',
        orders: 'Orders',
        newOrder: 'NewOrder',
    };

    document.getElementById('h2Ele').textContent = sectionTitles[sectionId];

    localStorage.setItem('activeSection', sectionId);


}

document.addEventListener('DOMContentLoaded', function () {
    const lastActiveSection = localStorage.getItem('activeSection');
    if (lastActiveSection) {
        loadSection(lastActiveSection);
    } else {
        // Set a default section if no active section is found
        loadSection('dashboard');
    }
});

var el = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function () {
    el.classList.toggle("toggled");
};

var el2 = document.getElementById("wrapper");
var toggleButton2 = document.getElementById("menu-togle");

toggleButton2.onclick = function () {
    el2.classList.toggle("toggled");
};

var myObject = {};

myObject.display = "none";

$(document).ready(function () {
    $('#example').DataTable({
        pageLength: 5,
        lengthMenu: [
            [5, 10, 25, 50, -1],
            ['5', '10', '25', '50', 'All']
        ]
    });

});