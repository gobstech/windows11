const background = document.querySelector("body");

background.addEventListener("dblclick", () => { 
    background.classList.toggle("ativo");
    const quadrado = document.querySelectorAll(".quadrado");
    quadrado.forEach((parte) => {
        parte.classList.toggle("quadradoAtivo");
    });
});