const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");
const overlayMenu = document.querySelector(".overlay");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active");
    navbarMenu.classList.toggle("is-active");
  });
}

// Close Navbar Menu on Click Links
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active");
    navbarMenu.classList.remove("is-active");
  });
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    if (navbarMenu.classList.contains("is-active")) {
      navbarMenu.classList.remove("is-active");
      overlayMenu.classList.remove("is-active");
    }
  }
});

// Controlar scroll del body al abrir modal
function openModal() {
  document.body.classList.add("modal-open");
  document.getElementById("myModal").style.display = "block";
  document.getElementById("modalOverlay").style.display = "block";
}

function closeModal() {
  document.body.classList.remove("modal-open");
  document.getElementById("myModal").style.display = "none";
  document.getElementById("modalOverlay").style.display = "none";
}

// Ejemplo de cómo podrías llamar estas funciones:
// document.getElementById("openModalButton").addEventListener("click", openModal);
// document
//   .getElementById("closeModalButton")
//   .addEventListener("click", closeModal);

//SPINNER

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Evitar el envío inmediato del formulario
    event.preventDefault();

    // Referencias al botón y al spinner
    const submitBtn = document.getElementById("submitBtn");
    const spinner = submitBtn.querySelector(".spinner");
    const buttonText = submitBtn.querySelector(".button-text");

    // Cambiar el texto por el spinner
    buttonText.style.display = "none"; // Ocultar el texto 'ENVIAR'
    spinner.classList.remove("hidden"); // Mostrar el spinner

    // Enviar el formulario después de 1 segundo para mostrar el spinner
    setTimeout(() => {
      this.submit();
    }, 1000); // Puedes ajustar o eliminar el retraso si lo prefieres
  });
