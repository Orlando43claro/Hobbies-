const publishButton = document.getElementById('publish-button');

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

            // Guardar la publicación en el almacenamiento local
            const posts = JSON.parse(localStorage.getItem('posts')) || [];
            posts.push(postCard.outerHTML);
            localStorage.setItem('posts', JSON.stringify(posts));

            // Redirigir a la página principal
            window.location.href = 'index.html';
        };
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecciona un archivo y escribe una descripción.');
    }
});
