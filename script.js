const jokeButton = document.getElementById('jokeBtn');
const displayJoke = document.getElementById('displayJoke');

jokeButton.addEventListener('click', () => {
    displayJoke.innerHTML = `<p>Loading...</p>`;
    
    let joke = fetch("https://official-joke-api.appspot.com/random_joke")
                .then(response => response.json())
                .then(data => {
                    displayJoke.innerHTML = `<p>${data.setup}</p><p><strong>${data.punchline}</string></p>`;
    });
});