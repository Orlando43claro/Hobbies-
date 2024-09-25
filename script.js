// scripts.js
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
    });
});

document.querySelectorAll('.comment-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Función de comentarios próximamente!');
    });
});
