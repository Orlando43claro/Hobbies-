document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
    });
});

document.querySelectorAll('.comment-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Función de comentar aún no implementada.');
    });
});

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

const modal = document.getElementById('upload-modal');
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const publishButton = document.getElementById('publish-button');
const feed = document.getElementById('feed');

openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

publishButton.addEventListener('click', () => {
    const fileInput = document.getElementById('file-input');
    const descriptionInput = document.getElementById('description-input');
    const file = fileInput.files[0];
    const description = descriptionInput.value;

    if (file && description) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const postCard = document.createElement('div');
            postCard.classList.add('post-card');

            const mediaElement = file.type.startsWith('video/') ? document.createElement('video') : document.createElement('img');
            mediaElement.src = e.target.result;
            if (file.type.startsWith('video/')) {
                mediaElement.controls = true;
            }

            const postInfo = document.createElement('div');
            postInfo.classList.add('post-info');

            const postTitle = document.createElement('h3');
            postTitle.textContent = 'Nueva Publicación';

            const postDescription = document.createElement('p');
            postDescription.textContent = description;

            const postActions = document.createElement('div');
            postActions.classList.add('post-actions');

            const likeButton = document.createElement('button');
            likeButton.classList.add('like-button');
            likeButton.innerHTML = '<i class="fas fa-heart"></i> Me gusta';
            likeButton.addEventListener('click', () => {
                likeButton.classList.toggle('liked');
            });

            const commentButton = document.createElement('button');
            commentButton.classList.add('comment-button');
            commentButton.innerHTML = '<i class="fas fa-comment"></i> Comentar';
            commentButton.addEventListener('click', () => {
                alert('Función de comentar aún no implementada.');
            });

            postActions.appendChild(likeButton);
            postActions.appendChild(commentButton);

            postInfo.appendChild(postTitle);
            postInfo.appendChild(postDescription);
            postInfo.appendChild(postActions);

            postCard.appendChild(mediaElement);
            postCard.appendChild(postInfo);

            feed.appendChild(postCard);

            modal.style.display = 'none';
            fileInput.value = '';
            descriptionInput.value = '';
        };
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecciona un archivo y escribe una descripción.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const feed = document.getElementById('feed');
    posts.forEach(postHTML => {
        const postElement = document.createElement('div');
        postElement.innerHTML = postHTML;
        feed.appendChild(postElement.firstChild);
    });
});

