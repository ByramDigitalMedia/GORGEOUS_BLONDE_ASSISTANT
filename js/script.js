function userScroll() {
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark")
      navbar.classList.add("navbar-sticky")
    } else {
      navbar.classList.remove("bg-dark")
      navbar.classList.remove("navbar-sticky")
    }
  })
}

document.addEventListener("DOMContentLoaded", userScroll)

// ***************************************************************

/* =======================================================
  * Template Name: BDM  Business Mastery
  * Template URL: https://byramdigitalmedia.com
  * Updated: Sept 20 2025 with Bootstrap v5.3.3???
  * Author: BDM
  * License: MIT
  ======================================================== */

let date = new Date().getFullYear()
document.getElementById("year").innerHTML = date
