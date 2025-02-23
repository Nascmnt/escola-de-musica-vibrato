// Função para carregar os comentários
async function fetchComments() {
    const response = await fetch('http://localhost:3001/comments');
    const comments = await response.json();
    const commentList = document.getElementById('comment-list');
    commentList.innerHTML = comments.map(comment => `
        <div class="comment" data-id="${comment.id}">
            <div class="name">${comment.name}</div>
            <div class="email">${comment.email}</div>
            <div class="time">${new Date(comment.time).toLocaleString()}</div>
            <p>${comment.comment}</p>
            <button class="delete-button" onclick="deleteComment(${comment.id})">Excluir</button>
        </div>
    `).join('');
}

// Função para adicionar um comentário
async function addComment() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
    const time = new Date().toISOString();

    const response = await fetch('http://localhost:3001/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, comment, time }),
    });

    if (response.ok) {
        fetchComments(); // Recarrega os comentários após adicionar um novo
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('comment').value = '';
    }
}

// Função para excluir um comentário
async function deleteComment(id) {
    const confirmDelete = confirm('Tem certeza que deseja excluir este comentário?');
    if (confirmDelete) {
        const response = await fetch(`http://localhost:3001/comments/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            fetchComments(); // Recarrega os comentários após a exclusão
        }
    }
}

// Carrega os comentários ao carregar a página
fetchComments();