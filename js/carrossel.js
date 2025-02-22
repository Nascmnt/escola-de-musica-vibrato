let currentIndex = 3; // Começa no primeiro card original (ignorando os duplicados no início)
    const carrosselContainer = document.querySelector('.carrossel-container');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;
    const cardsVisiveis = 3;

    function moverCarrossel(direction) {
        currentIndex += direction;

        // Verifica se chegou ao final ou ao início e ajusta o índice
        if (currentIndex < 0) {
            currentIndex = totalCards - cardsVisiveis * 2; // Volta para o final
        } else if (currentIndex >= totalCards - cardsVisiveis) {
            currentIndex = 0; // Volta para o início
        }

        atualizarCarrossel();
    }

    function atualizarCarrossel() {
        const offset = -currentIndex * (100 / cardsVisiveis);
        carrosselContainer.style.transform = `translateX(${offset}%)`;
    }

    function autoPlay() {
        setInterval(() => {
            moverCarrossel(1);
        }, 3000); // Muda a cada 3 segundos
    }

    autoPlay();