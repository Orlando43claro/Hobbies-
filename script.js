// app.js

const feed = document.getElementById('feed');

// Simulación de publicaciones de usuarios
const publicaciones = [
    {
        id: 1,
        usuario: 'Usuario1',
        tipo: 'imagen',
        contenido: 'https://via.placeholder.com/300',
        descripcion: 'Mi primera foto',
    },
    {
        id: 2,
        usuario: 'Usuario2',
        tipo: 'video',
        contenido: 'https://www.w3schools.com/html/mov_bbb.mp4',
        descripcion: 'Un video increíble',
    },
    {
        id: 3,
        usuario: 'Usuario3',
        tipo: 'imagen',
        contenido: 'https://via.placeholder.com/300',
        descripcion: 'Otra imagen genial',
    }
];

// Función para mostrar las publicaciones en el feed
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
