document.addEventListener('DOMContentLoaded', () => {
    //Crea un oggetto URLSearchParams per permettere di ottenere l'id del post selezionato
    const params = new URLSearchParams(window.location.search);
    const postId = params.get('id');    //Estrae l'id del post dai parametri della URL
    fetchPost(postId);  //Richiama la funzione per recuperare il singolo post
    updateFooter();     //Richiama la funzione per aggiornare il footer
});

//Funzione per recuperare i dettagli di un post specifico in base al suo id
function fetchPost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)   //Richiede tramite richiesta GET il post all'API
        .then(response => response.json())  //Converte la risposta in JSON
        .then(post => {
            const postDetail = document.getElementById('post-detail');
            //Crea un h2 e un paragrafo per mostrare il titolo e il contenuto del post
            postDetail.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            `;
        });
}

//Funzione per tornare alla pagina principale
function goBack() {
    window.location.href = 'index.html';
}

//Funzione per aggiornare il footer con l'anno corrente
function updateFooter() {
    const currentYear = new Date().getFullYear(); 
    const footerText = document.getElementById('footer-text');
    footerText.innerHTML = ` (C) ${currentYear} Posts`;
}