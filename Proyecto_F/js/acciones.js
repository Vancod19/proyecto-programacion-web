// JavaScript para manejar la apertura y el cierre de los modales
var loginModal = document.getElementById("myModal");
var registroModal = document.getElementById("registroModal");
var btnAbrir = document.getElementById("myBtn");
var btnCerrar = document.getElementById("close");
var registroOpen = document.getElementById("openRegistroModal");
var registroClose = document.getElementById("registroClose");
var loginOpen = document.getElementById("openLoginModal");

// Abre el modal de inicio de sesión al hacer clic en el botón "Ingresar"
btnAbrir.onclick = function () {
    loginModal.style.display = "block";
}

// Cierra el modal de inicio de sesión al hacer clic en la "X"
btnCerrar.onclick = function () {
    loginModal.style.display = "none";
}

// Abre el modal de registro al hacer clic en el enlace "Crear cuenta"
registroOpen.onclick = function () {
    loginModal.style.display = "none";
    registroModal.style.display = "block";
}

// Cierra el modal de registro al hacer clic en la "X"
registroClose.onclick = function () {
    registroModal.style.display = "none";
}

// Abre el modal de inicio de sesión al hacer clic en el enlace "Inicia sesión" en el modal de registro
loginOpen.onclick = function () {
    registroModal.style.display = "none";
    loginModal.style.display = "block";
}

// Cierra los modales al hacer clic fuera de ellos
window.onclick = function (event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    } else if (event.target === registroModal) {
        registroModal.style.display = "none";
    }
}