document.addEventListener('DOMContentLoaded', () => {
    fetchPosts(); //Richiama la funzione per recuperare tutti i post
    updateFooter(); //Richiama la funzione per aggiornare il footer

    function fetchPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')   //Richiede tramite richiesta GET i post all'API  
            .then(response => response.json())                //Converte la risposta in formato JSON
            .then(data => {
                const postList = document.getElementById('post-list');
                data.forEach(post => {      //Itera su ogni post ricevuto
                    const card = document.createElement('div'); //Crea la carta (div) per il singolo post
                    card.classList.add('card');     //Aggiunge la classe card per modificarne lo sitle con CSS
                    //Crea un h2 per il titolo del post e un paragrafo per il contenuto del post
                    card.innerHTML = `
                        <h2>${post.title}</h2> 
                        <p>${post.body}</p>
                    `;
                    card.onclick = () => viewPost(post.id); //Rende la card cliccabile e richiama la funzione per visualizzare il post
                    postList.appendChild(card); //Aggiunge la card alla lista dei post
                });
            });
    }
});

//Funzione per aprire la pagina con i dettagli del post
function viewPost(id) {
    window.location.href = `post.html?id=${id}`; //Reindirizza alla pagina con i dettagli, passando l'id del post
}

//Funzione per aggiornare il footer con l'anno corrente e il copyright
function updateFooter() {
    const currentYear = new Date().getFullYear();   //Salva l'anno corrente
    const footerText = document.getElementById('footer-text'); 
    footerText.innerHTML = `(C) ${currentYear} Posts`;  //Imposta il testo con il copyright e l'anno corrente
}
