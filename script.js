// Função de animação do contador
function animarContador(id, valorFinal, duracao) {
    let elemento = document.getElementById(id);
    let inicio = 0;
    let incremento = valorFinal / (duracao / 16);

    function atualizar() {
        inicio += incremento;

        if (inicio >= valorFinal) {
            elemento.textContent = valorFinal;
            return;
        }

        elemento.textContent = Math.floor(inicio);
        requestAnimationFrame(atualizar);
    }

    atualizar();
}

// Função para detectar se o elemento está na tela
function estaNaTela(elemento) {
    const rect = elemento.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Dispara a animação quando o usuário rolar até a seção
function initScrollContadores() {
    let roiAnimado = false;
    let diasAnimado = false;

    window.addEventListener("scroll", () => {
        const roi = document.getElementById("contador-roi");
        const dias = document.getElementById("contador-dias");

        if (!roiAnimado && estaNaTela(roi)) {
            animarContador("contador-roi", 320, 4000); // ROI 4s
            roiAnimado = true;
        }

        if (!diasAnimado && estaNaTela(dias)) {
            animarContador("contador-dias", 30, 4000); // Dias 3s
            diasAnimado = true;
        }
    });
}

// Inicializa
window.addEventListener("load", initScrollContadores);