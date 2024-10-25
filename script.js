document.addEventListener('DOMContentLoaded', function() {
    fetchPosts(); // Chiama la funzione per recuperare e visualizzare i post

    function fetchPosts() { // Funzione per recuperare i post da un'API
        fetch('https://jsonplaceholder.typicode.com/posts')// Effettua una richiesta GET all'API per ottenere i post
            .then(function(response) {
                return response.json(); // Converte la risposta in formato JSON
            })
            .then(function(data) { // Una volta ottenuti i dati
                var postList = document.getElementById('post-list'); // Trova l'elemento con ID 'post-list'

                data.forEach(function(post) {// Itera su ogni post ricevuto
                    var card = document.createElement('div'); // Crea un nuovo elemento div per la card
                    card.classList.add('card'); // Aggiunge la classe 'card' all'elemento div

                    // Imposta il contenuto HTML della card
                    card.innerHTML = `
                        <h2>${post.title}</h2> 
                        <p>${post.body}</p> 
                    `;

                    // Aggiunge un evento di clic sulla card
                    card.onclick = function() { viewPost(post.id); }; // Quando si clicca sulla card, chiama la funzione viewPost con l'ID del post
                    postList.appendChild(card); // Aggiunge la card all'elenco dei post
                });
            });
    }
});

// Funzione per visualizzare i dettagli di un post
function viewPost(id) {
    // Reindirizza alla pagina dei dettagli del post con l'ID specificato
    window.location.href = 'post.html?id=' + id;
}
