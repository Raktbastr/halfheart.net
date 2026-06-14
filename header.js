class SiteHeader extends HTMLElement {
    connectedCallback() {
        fetch("site-header.html")
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
                detectPage(); 
            });
    }
}
customElements.define('site-header', SiteHeader);

function detectPage() {
    var pageId = document.title.toLowerCase().replace(/ /g, "-"); 
    var element = document.getElementById(pageId);
    if (element) {
        element.className = "active";
    } else {
        console.warn("Could not find a navigation link matching the ID: " + pageId);
    }
}

function toggleMobileMenu() {
    var nav = document.getElementById("myTopnav");
    
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}