// Seleciona o ícone do menu e os links do menu
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

// Adiciona um evento de clique ao ícone do menu
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Alterna a classe 'active'
})
// Dados dos posts (pode ser carregado de uma API ou arquivo JSON)
const posts = [
    {
        image: "post(1).png",
        title: "Coisas para fazer antes de aprender qualquer instrumento musical.",
        summary: "Se você está pensando em aprender um instrumento, saber dessas dicas antes de começar a tocar pode ser importante para facilitar o seu processo de aprendizado e torná-lo mais leve e prazeroso. [...]",
        link: "#"
    },
    {
        image: "caminho/para/imagem-do-post-2.png",
        title: "Lorem ipsum odor amet, consectetuer adipiscing elit?",
        summary: "Lorem ipsum odor amet, consectetuer adipiscing elit. Curabitur lucrus dolor netus malesuada feet dui faucibus litora scelerisque. Vestibulum efficitur habitant enim tellus lucrus porttitor magna odio. [...]",
        link: "#"
    }
];

// Função para criar os posts dinamicamente
function renderPosts() {
    const postsSection = document.querySelector('.posts-section');

    posts.forEach(post => {
        const postHTML = `
            <div class="post">
                <img src="${post.image}" alt="${post.title}" class="post-image">
                <div class="post-content">
                    <h2>${post.title}</h2>
                    <p>${post.summary}</p>
                    <a href="${post.link}" class="read-more">Leia Mais</a>
                </div>
            </div>
        `;
        postsSection.innerHTML += postHTML;
    });
}

// Executa a função ao carregar a página
document.addEventListener('DOMContentLoaded', renderPosts);