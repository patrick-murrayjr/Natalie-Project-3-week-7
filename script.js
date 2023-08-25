const test = () => console.log('Hello World');
// Data
const TEST_CATEGORIES = [
   {
      id: 0,
      name: 'Strategy',
   },
   {
      id: 1,
      name: 'Family',
   },
   {
      id: 2,
      name: 'Dice',
   },
   {
      id: 2,
      name: 'Party',
   },
];

const TEST_GAMES = [
   {
      id: 0,
      name: 'Scythe',
      rating: 4.8,
      numPlayers: '2-5',
   },
   {
      id: 1,
      name: 'Marvel United',
      rating: 4.1,
      numPlayers: '2-4',
   },
   {
      id: 1,
      name: 'Agricola',
      rating: 4.2,
      numPlayers: '1-4',
   },
];

// Functions
function onShowCategoriesClick() {
   // calls renderCategoryList with the array of TEST_CATEGORIES
   // and puts the string that's returned in the innerHTML property of an element on the page
   let categoriesList = document.getElementById('categories-list');
   if (categoriesList.innerHTML === '') {
      categoriesList.innerHTML = renderCategoryList(TEST_CATEGORIES);
   } else {
      categoriesList.innerHTML = '';
   }
}

function onShowGamesClick() {
   // calls renderGamesList with the array of TEST_GAMES
   // and puts the string that's returned in the innerHTML property of an element on the page
   let gamesList = document.getElementById('games-list');
   if (gamesList.innerHTML === '') {
      gamesList.innerHTML = renderGameList(TEST_GAMES);
   } else {
      gamesList.innerHTML = '';
   }
}

function renderCategoryList(categoryList) {
   // returns a string of the HTML for the whole category list
   // (uses the renderCategory function to get the HTML string for each category)
   let rtnString = '<div class="row ms-1"><div class="col border rounded">';
   for (let i = 0; i < categoryList.length; i++) {
      rtnString += renderCategory(categoryList[i]);
   }
   rtnString += '</div></div>';
   return rtnString;
}

function renderCategory(category) {
   // returns a string of the HTML for one category list item
   return `<span class="row border-top ps-3 py-2">${category.name}</span>`;
}

function renderGameList(gameList) {
   // returns a string of the HTML for the whole game list
   // (uses the renderGame function to get the HTML string for each game)
   let rtnString = '<div class="d-flex row w-100">';
   for (let i = 0; i < gameList.length; i++) {
      rtnString += renderGame(gameList[i]);
   }
   rtnString += '</div>';
   return rtnString;
}

function renderGame(game) {
   // returns a string of the HTML for one game card
   return `
   <div class='col'>
      <div class='border rounded pt-3 pb-4 p-2 h-100'>
         <h3 class="text-nowrap">${game.name} <span class="text-bg-secondary rounded px-3 py-1 fs-5">${game.rating}</span></h3>
         <p> ${game.numPlayers} players</p>
      </div>
   </div>`;
}
