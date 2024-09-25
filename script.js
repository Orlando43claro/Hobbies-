// Configuración de Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Agregar un nuevo hobby
function saveHobbyFromInput() {
    const name = document.getElementById('hobbyName').value;
    const description = document.getElementById('hobbyDescription').value;
  
    if (name && description) {
        const hobbyRef = database.ref('hobbies').push();
        hobbyRef.set({
            name: name,
            description: description,
            timestamp: Date.now()
        }).then(() => {
            console.log("Hobby agregado.");
            getHobbies(); // Refresca la lista de hobbies
            document.getElementById('hobbyName').value = '';
            document.getElementById('hobbyDescription').value = '';
        }).catch((error) => {
            console.error("Error al agregar el hobby: ", error);
        });
    } else {
        alert('Por favor, llena ambos campos.');
    }
}

// Obtener hobbies
function getHobbies() {
    const hobbiesRef = database.ref('hobbies');
    hobbiesRef.on('value', (snapshot) => {
        const hobbies = snapshot.val();
        const hobbiesList = document.getElementById('hobbiesList');
        hobbiesList.innerHTML = ''; // Limpiar la lista antes de mostrar los nuevos hobbies
        for (const hobbyId in hobbies) {
            const hobby = hobbies[hobbyId];
            const li = document.createElement('li');
            li.textContent = `${hobby.name}: ${hobby.description}`;
            // Botón para eliminar el hobby
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.onclick = () => deleteHobby(hobbyId);
            li.appendChild(deleteButton);
            hobbiesList.appendChild(li);
        }
    }, (error) => {
        console.error("Error al leer los hobbies: ", error);
    });
}

// Eliminar un hobby
function deleteHobby(hobbyId) {
    const hobbyRef = database.ref('hobbies/' + hobbyId);
    hobbyRef.remove().then(() => {
        console.log("Hobby eliminado.");
        getHobbies(); // Refresca la lista de hobbies
    }).catch((error) => {
        console.error("Error al eliminar el hobby: ", error);
    });
}

// Llamar a getHobbies al cargar la página
window.onload = getHobbies;