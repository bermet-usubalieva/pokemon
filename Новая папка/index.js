const wrap = document.querySelector('.wrap')


fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json())
    .then(data => {

        const pokemonCards = data.results;

        pokemonCards.forEach(pokemon => {

            const card = document.createElement('div');
            card.classList.add('pokemon_card');

            const name = document.createElement('h2');
            name.textContent = pokemon.name;

            const imgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonImg(pokemon.url)}.png`;
            const img = document.createElement('img');
            img.src = imgLink;
            img.alt = pokemon.name;

            card.appendChild(img);
            card.appendChild(name);
            wrap.appendChild(card);
        });

        document.body.appendChild(wrap);
    })
    .catch(error => {
        console.error('Ошибка запроса:', error);
    });

function getPokemonImg(url) {
    const parts = url.split('/');
    return parts[parts.length - 2];
}
