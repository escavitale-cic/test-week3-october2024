document.addEventListener('DOMContentLoaded', function() { // ascoltatore di eventi che esegue il codice all'interno una volta che il DOM è caricato
    var params = new URLSearchParams(window.location.search);
    var postId = params.get('id'); 
    fetchPost(postId); 
});

// Funzione per recuperare i dettagli di un post specifico
function fetchPost(postId) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + postId)// Effettua una richiesta GET per ottenere i dettagli del post specificato
        .then(function(response) {
            return response.json(); // Converte la risposta in formato JSON
        })
        .then(function(post) { // Una volta ottenuti i dettagli del post
            var postDetail = document.getElementById('post-detail'); // Trova l'elemento per i dettagli del post

            if (post) {
                // Imposta il contenuto HTML per visualizzare il titolo e il corpo del post
                postDetail.innerHTML = `
                    <h2>${post.title}</h2> 
                    <p>${post.body}</p>
                `;
            }
        })
        .catch(function(error) { // Gestisce eventuali errori durante il fetch
            console.error('Error fetching post:', error); // Stampa l'errore nella console
        });
}

// Funzione per tornare alla lista dei post
function goBack() {
    // Reindirizza alla pagina principale
    window.location.href = 'index.html';
}
