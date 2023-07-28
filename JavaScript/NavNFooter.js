// refernce of header and footer element
const Header = document.getElementById("header")
const Footer = document.getElementById("footer")

//initiation header and footer
Header.innerHTML = header()
Footer.innerHTML = footer()

//reference of toggle an link elements
const toggle = document.getElementById("themeToggle")
const links = document.querySelectorAll(".nav-link")

//initation of theme
SetTheme()

//theme toggler
toggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme') || "dark";
    
    if (currentTheme === "dark") 
    localStorage.setItem('theme', SetTheme("light"))
    else if (currentTheme === "light") 
    localStorage.setItem('theme', SetTheme("dark"))
    
})

//setting active nav link based on current page
for (let link of links) {
    if (window.location.href.indexOf(link.href)>-1) {
        link.classList.add("active")
        if (link.classList.contains("dropdown-item"))
        link.parentElement.parentElement.parentElement.firstElementChild.classList.add("active")
    }
    
}

// function to set the theme base on local storage value and url
function SetTheme(theme) {
    if (theme) {
        if (theme === "dark") {
            document.getElementById("theme").setAttribute("href", "./CSS/Dark.css")
            toggle.innerHTML = toggleOn()
            return "dark"
        }
        else if (theme === "light") {
            document.getElementById("theme").setAttribute("href", "./CSS/Light.css")
            toggle.innerHTML = toggleOff()
            return "light"

        }
    }
    const currentTheme = localStorage.getItem('theme') || "dark";
    SetTheme(currentTheme)
}

//function returning Html template of toggle on button
function toggleOn(){
    const on=`<i class="fa-solid fa-toggle-on fs-5"></i>`
    return on
}

//function returning Html template of toggle off button
function toggleOff(){
    const off=`<i class="fa-solid fa-toggle-off fs-5"></i>`
    return off
}

//function returning header Html template
function header(){
    const headerHtml=`<nav class="navbar navbar-expand-md ">
    <div class="container-fluid px-3">
    <a class="navbar-brand me-auto mt-2" href="./Home.html"><span class="me-1"><i class="fa-solid fa-snowflake"></i></span>Nure</a>
    <button class="btn navbar-toggler" type="button" data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
    aria-expanded="false" aria-label="Toggle navigation">
    <i class="fa-solid fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="nav-item ms-auto mt-2 mb-lg-0">
    <form class="d-flex" role="search">
    <input class="form-control rounded-0 me-2" style="width: 100%;" type="search" placeholder="Search"
    aria-label="Search">
    <button class="btn navBtn" type="submit">Search</button>
    </form>
    </div>
    <ul class="navbar-nav ms-auto mt-2 mb-lg-0">
    <li class="nav-item mb-2 mb-md-0"><a class="btn navBtn me-2" role="button"
    aria-current="page" href="./Login.html">Login</a></li>
    <li class="nav-item mb-2 mb-md-0"><a class="btn navBtn me-2" role="button"
    aria-current="page" href="./Cart.html"><i class="fa-solid fa-cart-shopping"></i></a></li>
    </ul>
    </div>
    </div>
    </nav>
    <ul class="nav justify-content-center primary-bg secondary-border-Top secondary-border-Bottom">
    <li class="nav-item ">
    <a class="nav-link" aria-current="page" href="./Home.html">Home</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="./Allproducts.html">All Products</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="./Kid.html">Kids</a>
    </li>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
    aria-expanded="false">
    Women
    </a>
    <ul class="dropdown-menu primary-bg">
    <li ><a class="dropdown-item nav-link" href="./AllProductsWomen.html">All Products</a></li>
    <li ><a class="dropdown-item nav-link" href="./Dresses.html">Dresses</a></li>
    <li ><a class="dropdown-item nav-link" href="./PantsWomen.html">Pants</a></li>
    <li ><a class="dropdown-item nav-link" href="./Skirts.html">Skirts</a></li>
    </ul>
    </li>
    <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
    aria-expanded="false">
    Men
    </a>
    <ul class="dropdown-menu primary-bg">
    <li><a class="dropdown-item nav-link" href="./AllProductsMen.html">All Products</a></li>
    <li><a class="dropdown-item nav-link" href="./Shirts.html">Shirts</a></li>
    <li><a class="dropdown-item nav-link" href="./PantsMen.html">Pants</a></li>
    <li><a class="dropdown-item nav-link" href="./Hoodies.html">Hoodies</a></li>
    </ul>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="./ContactUs.html">Contacts</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" id="themeToggle" href="#"><i class="fa-solid fa-toggle-on fs-5"></i></a>
    </li>
    </ul>`

    return headerHtml

}

//function returning footer Html template
function footer(){

    const footerHtml=`<div class="footer secondary-border-Top container-fluid pt-2 ">
    <div class="container-fluid pb-1">
    <div class="row g-0 w-100">
    <div class="col-12 col-sm-3 d-flex flex-column align-items-center">
    <p class="h5">Men</p>
    <a class="link" href="./Shirts.html">Shirts</a>
    <a class="link" href="./PantsMen.html">Pants</a>
    <a class="link" href="./Hoodies.html">Hoodies</a>
    </div>
    <div class="col-12 col-sm-3 d-flex flex-column align-items-center">
    <p class="h5">Women</p>
    <a class="link" href="./Dresses.html">Dresses</a>
    <a class="link" href="./PantsWomen.html">Pants</a>
    <a class="link" href="./Skirts.html">Skirts</a>
    </div>
    <div class="col-12 col-sm-3 d-flex flex-column align-items-center">
    <p class="h5">Kid</p>
    <a class="link" href="./Kid.html">Kids</a>
    </div>
    <div class="col-12 col-sm-3 d-flex flex-column align-items-center">
    <p class="h5">Links</p>
    <a class="link" href="./Home.html">Home</a>
    <a class="link" href="./Login.html">Login</a>
    <a class="link" href="./ContactUs.html">Contacts</a>
    </div>
    </div>
    </div>
    <div class="container secondary-border-Top ">
    <p class="text-center py-2">Copyright@Ecommerce 2022-23</p>
    </div>
    </div>`
    
    return footerHtml;

}