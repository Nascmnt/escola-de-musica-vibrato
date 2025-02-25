// Função para carregar os comentários
async function fetchComments() {
    try {
        // Faz uma requisição para buscar os comentários
        const response = await fetch('http://localhost:3001/comments');
        
        // Verifica se a requisição deu certo
        if (!response.ok) {
            alert('Erro ao carregar comentários');
            return;
        }

        // Converte a resposta para JSON
        const comments = await response.json();

        // Pega a div onde os comentários serão exibidos
        const commentList = document.getElementById('comment-list');

        // Limpa a lista de comentários antes de adicionar os novos
        commentList.innerHTML = '';

        // Para cada comentário, cria um bloco HTML e adiciona à lista
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.setAttribute('data-id', comment.id);

            commentDiv.innerHTML = `
                <div class="comment-content">
                    <div class="name">${comment.name}</div>
                    <div class="email">${comment.email}</div>
                    <div class="time">${new Date(comment.time).toLocaleString()}</div>
                    <p class="comment-text">${comment.comment}</p>
                    <button class="edit-button" onclick="openEditForm('${comment.id}')">Editar</button>
                    <button class="delete-button" onclick="deleteComment('${comment.id}')">Excluir</button>
                </div>
                <div id="edit-form-${comment.id}" class="edit-form" style="display: none;">
                    <input type="text" id="edit-name-${comment.id}" placeholder="Nome" value="${comment.name}" class="edit-form--box">
                    <input type="email" id="edit-email-${comment.id}" placeholder="E-mail" value="${comment.email}" class="edit-form--box">
                    <textarea id="edit-comment-${comment.id}" placeholder="Comentário" class="edit-form--box">${comment.comment}</textarea>
                    <button onclick="saveEdit('${comment.id}')">Salvar</button>
                    <button onclick="closeEditForm('${comment.id}')">Cancelar</button>
                </div>
            `;

            // Adiciona o comentário à lista
            commentList.appendChild(commentDiv);
        });
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao carregar os comentários.');
    }
}

// Função para adicionar um comentário
async function addComment() {
    // Pega os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
    const time = new Date().toISOString();

    try {
        // Faz uma requisição para adicionar o comentário
        const response = await fetch('http://localhost:3001/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, comment, time }),
        });

        // Verifica se a requisição deu certo
        if (!response.ok) {
            alert('Erro ao adicionar comentário');
            return;
        }

        // Recarrega os comentários após adicionar um novo
        fetchComments();

        // Limpa os campos do formulário
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('comment').value = '';
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao adicionar o comentário.');
    }
}

// Função para excluir um comentário
async function deleteComment(id) {
    // Pergunta ao usuário se ele tem certeza que quer excluir
    const confirmDelete = confirm('Tem certeza que deseja excluir este comentário?');
    if (confirmDelete) {
        try {
            // Faz uma requisição para excluir o comentário
            const response = await fetch(`http://localhost:3001/comments/${id}`, {
                method: 'DELETE',
            });

            // Verifica se a requisição deu certo
            if (!response.ok) {
                alert('Erro ao excluir comentário');
                return;
            }

            // Recarrega os comentários após a exclusão
            fetchComments();
        } catch (error) {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao excluir o comentário.');
        }
    }
}

// Função para abrir o formulário de edição
function openEditForm(id) {
    // Esconde o conteúdo do comentário
    const commentContent = document.querySelector(`.comment[data-id="${id}"] .comment-content`);
    commentContent.style.display = 'none';

    // Mostra o formulário de edição
    const editForm = document.getElementById(`edit-form-${id}`);
    editForm.style.display = 'block';
}

// Função para fechar o formulário de edição
function closeEditForm(id) {
    // Mostra o conteúdo do comentário
    const commentContent = document.querySelector(`.comment[data-id="${id}"] .comment-content`);
    commentContent.style.display = 'block';

    // Esconde o formulário de edição
    const editForm = document.getElementById(`edit-form-${id}`);
    editForm.style.display = 'none';
}

// Função para salvar a edição de um comentário
async function saveEdit(id) {
    // Pega os valores dos campos do formulário de edição
    const name = document.getElementById(`edit-name-${id}`).value;
    const email = document.getElementById(`edit-email-${id}`).value;
    const comment = document.getElementById(`edit-comment-${id}`).value;

    try {
        // Faz uma requisição para atualizar o comentário
        const response = await fetch(`http://localhost:3001/comments/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, comment }),
        });

        // Verifica se a requisição deu certo
        if (!response.ok) {
            alert('Erro ao editar comentário');
            return;
        }

        // Recarrega os comentários após a edição
        fetchComments();
    } catch (error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao editar o comentário.');
    }
}

// Carrega os comentários quando a página é carregada
fetchComments();