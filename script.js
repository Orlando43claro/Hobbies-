document.addEventListener('DOMContentLoaded', () => {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const feed = document.getElementById('feed');
    posts.forEach(postHTML => {
        const postElement = document.createElement('div');
        postElement.innerHTML = postHTML;
        feed.appendChild(postElement.firstChild);
    });
});
