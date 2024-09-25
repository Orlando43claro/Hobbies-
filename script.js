const feed = document.getElementById('feed');

// Simulación de publicaciones (imágenes y videos)
const publicaciones = [
    {
        id: 1,
        usuario: 'Usuario1',
        tipo: 'imagen',
        contenido: 'https://via.placeholder.com/300',
        descripcion: 'Mi primera imagen',
    },
    {
        id: 2,
        usuario: 'Usuario2',
        tipo: 'video',
        contenido: 'https://www.w3schools.com/html/mov_bbb.mp4',
        descripcion: 'Mi primer video',
    },
    {
        id: 3,
        usuario: 'Usuario3',
        tipo: 'imagen',
        contenido: 'https://via.placeholder.com/300',
        descripcion: 'Una segunda imagen',
    }
];

// Función para cargar publicaciones
function cargarPublicaciones() {
    publicaciones.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('feed-item');

        let contenidoHTML = '';
        if (post.tipo === 'imagen') {
            contenidoHTML = `<img src="${post.contenido}" alt="Imagen de ${post.usuario}">`;
        } else if (post.tipo === 'video') {
            contenidoHTML = `<video controls>
                                <source src="${post.contenido}" type="video/mp4">
                             </video>`;
        }

        postElement.innerHTML = `
            <h3>${post.usuario}</h3>
            ${contenidoHTML}
            <p>${post.descripcion}</p>
        `;

        feed.appendChild(postElement);
    });
}

cargarPublicaciones();
