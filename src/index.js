document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.querySelector('.cards');
  
    data.forEach(pokemon => {
      const card = document.createElement('li');
      card.classList.add('card');
  
      const img = document.createElement('img');
      if (pokemon.sprites && pokemon.sprites.other && pokemon.sprites.other['official-artwork'] && pokemon.sprites.other['official-artwork'].front_default) {
        img.src = pokemon.sprites.other['official-artwork'].front_default;
      } else {
        img.src = 'default_image_url'; 
      }
      img.alt = pokemon.name;
      img.classList.add('card--img');
      card.appendChild(img);
  
      const name = document.createElement('h2');
      name.textContent = pokemon.name;
      card.appendChild(name);
  
      const games = document.createElement('p');
      games.textContent = 'Games: ' + pokemon.game_indices.map(index => index.version.name).join(', ');
      games.classList.add('card--text');
      card.appendChild(games);
  
      
      const gamesList = document.createElement('ul');
      gamesList.classList.add('games-list');
      pokemon.game_indices.forEach(index => {
        const gameItem = document.createElement('li');
        gameItem.textContent = index.version.name;
        gamesList.appendChild(gameItem);
      });
      card.appendChild(gamesList);
  
      cardsContainer.appendChild(card);
    });
  });
  