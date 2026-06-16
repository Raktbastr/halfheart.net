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

class SiteFooter extends HTMLElement {
    connectedCallback() {
        fetch("site-footer.html")
            .then(response => response.text())
            .then(html => {
                this.innerHTML = html;
            })
    }
}
customElements.define('site-footer', SiteFooter)

function detectPage() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    
    if (page === "" || page === "index.html" || page === "index" || path === "/") {
        var pageId = "home";
    } else {
        var pageId = page.replace(".html", "");
    }
    
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