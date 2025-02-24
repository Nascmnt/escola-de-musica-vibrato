// Função para carregar os comentários
async function fetchComments() {
    try {
        const response = await fetch('http://localhost:3001/comments');
        if (!response.ok) {
            throw new Error('Erro ao carregar comentários');
        }
        const comments = await response.json();
        const commentList = document.getElementById('comment-list');
        commentList.innerHTML = comments.map(comment => `
            <div class="comment" data-id="${comment.id}">
                <div class="name">${comment.name}</div>
                <div class="email">${comment.email}</div>
                <div class="time">${new Date(comment.time).toLocaleString()}</div>
                <p class="comment-text">${comment.comment}</p>
                <button class="delete-button" onclick="deleteComment('${comment.id}')">Excluir</button>
            </div>
        `).join('');
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para adicionar um comentário
async function addComment() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
    const time = new Date().toISOString();

    try {
        const response = await fetch('http://localhost:3001/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, comment, time }),
        });

        if (!response.ok) {
            throw new Error('Erro ao adicionar comentário');
        }

        fetchComments(); // Recarrega os comentários após adicionar um novo
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('comment').value = '';
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Função para excluir um comentário
async function deleteComment(id) {
    const confirmDelete = confirm('Tem certeza que deseja excluir este comentário?');
    if (confirmDelete) {
        try {
            const response = await fetch(`http://localhost:3001/comments/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Erro ao excluir comentário');
            }

            fetchComments(); // Recarrega os comentários após a exclusão
        } catch (error) {
            console.error('Erro:', error);
        }
    }
}

// Carrega os comentários ao carregar a página
fetchComments();