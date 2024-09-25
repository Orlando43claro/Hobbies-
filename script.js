// script.js

// Simulación de publicaciones (pueden venir desde una base de datos)
const publicaciones = [
    {
        usuario: "Juan",
        tipo: "imagen",
        contenido: "https://via.placeholder.com/300",
        descripcion: "Disfrutando del atardecer!"
    },
    {
        usuario: "María",
        tipo: "video",
        contenido: "https://www.w3schools.com/html/mov_bbb.mp4",
        descripcion: "Mi último vlog de viajes!"
    },
    {
        usuario: "Carlos",
        tipo: "texto",
        contenido: "Hoy fue un día increíble, ¡me siento muy motivado!",
        descripcion: ""
    }
];

// Función para renderizar el feed
function cargarFeed() {
    const feed = document.getElementById('feed');
    publicaciones.forEach(publicacion => {
        const post = document.createElement('div');
        post.classList.add('post');
        
        let contenidoHTML = '';
        
        if (publicacion.tipo === 'imagen') {
            contenidoHTML = `<img src="${publicacion.contenido}" alt="Imagen de ${publicacion.usuario}">`;
        } else if (publicacion.tipo === 'video') {
            contenidoHTML = `<video controls>
                                <source src="${publicacion.contenido}" type="video/mp4">
                             </video>`;
        } else if (publicacion.tipo === 'texto') {
            contenidoHTML = `<p>${publicacion.contenido}</p>`;
        }

        post.innerHTML = `
            <div class="content">
                <h3>${publicacion.usuario}</h3>
                ${contenidoHTML}
                <p>${publicacion.descripcion}</p>
            </div>
        `;

        feed.appendChild(post);
    });
}

// Cargar el feed al iniciar la página
window.onload = cargarFeed;

