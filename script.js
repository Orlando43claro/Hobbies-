// scripts.js
document.getElementById('createPostButton').addEventListener('click', function() {
    document.getElementById('uploadModal').style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('uploadModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('uploadModal')) {
        document.getElementById('uploadModal').style.display = 'none';
    }
});

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const mediaUpload = document.getElementById('mediaUpload').files[0];
    const description = document.getElementById('description').value;

    if (mediaUpload && description) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newPost = document.createElement('div');
            newPost.classList.add('post-card');

            let mediaElement;
            if (mediaUpload.type.startsWith('image/')) {
                mediaElement = `<img src="${e.target.result}" alt="Imagen subida">`;
            } else if (mediaUpload.type.startsWith('video/')) {
                mediaElement = `<video controls><source src="${e.target.result}" type="${mediaUpload.type}">Tu navegador no soporta la etiqueta de video.</video>`;
            }

            newPost.innerHTML = `
                ${mediaElement}
                <div class="post-info">
                    <h3>Nuevo Post</h3>
                    <p>${description}</p>
                    <div class="post-actions">
                        <button class="like-button"><i class="fas fa-heart"></i> Me gusta</button>
                        <button class="comment-button"><i class="fas fa-comment"></i> Comentar</button>
                    </div>
                </div>
            `;

            document.querySelector('.content').appendChild(newPost);

            // Limpiar el formulario y cerrar el modal
            document.getElementById('uploadForm').reset();
            document.getElementById('uploadModal').style.display = 'none';
        };

        reader.readAsDataURL(mediaUpload);
    }
});
