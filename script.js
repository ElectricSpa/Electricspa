//==============================
// MENÚ AL HACER SCROLL
//==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.padding = "0px";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
        header.style.background = "#ffffff";

    } else {

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
        header.style.background = "#ffffff";

    }

});


//==============================
// ANIMACIÓN AL HACER SCROLL
//==============================

const elementos = document.querySelectorAll(
    ".card, .beneficio, .galeria-grid img"
);

function mostrarElementos() {

    elementos.forEach((elemento) => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 100) {

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0px)";

        }

    });

}

elementos.forEach((elemento) => {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(50px)";
    elemento.style.transition = "all .8s ease";

});

window.addEventListener("scroll", mostrarElementos);

mostrarElementos();


//==============================
// EFECTO EN BOTONES
//==============================

const botones = document.querySelectorAll("a, button");

botones.forEach((boton) => {

    boton.addEventListener("mouseenter", () => {

        boton.style.transition = ".3s";

    });

});


//==============================
// BOTÓN SUBIR
//==============================

const botonSubir = document.createElement("div");

botonSubir.innerHTML = "↑";

botonSubir.style.position = "fixed";
botonSubir.style.bottom = "30px";
botonSubir.style.right = "30px";
botonSubir.style.width = "50px";
botonSubir.style.height = "50px";
botonSubir.style.background = "#153d8a";
botonSubir.style.color = "white";
botonSubir.style.display = "flex";
botonSubir.style.alignItems = "center";
botonSubir.style.justifyContent = "center";
botonSubir.style.borderRadius = "50%";
botonSubir.style.cursor = "pointer";
botonSubir.style.fontSize = "24px";
botonSubir.style.boxShadow = "0 10px 25px rgba(0,0,0,.2)";
botonSubir.style.display = "none";

document.body.appendChild(botonSubir);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        botonSubir.style.display = "flex";

    } else {

        botonSubir.style.display = "none";

    }

});

botonSubir.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


//==============================
// AÑO AUTOMÁTICO EN FOOTER
//==============================

const copyright = document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${new Date().getFullYear()} CEFHI Instalaciones Eléctricas | Todos los derechos reservados.`;

}