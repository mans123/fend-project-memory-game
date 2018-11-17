 // Create a list that holds all of your cards
let cards = ["fa-diamond", "fa-diamond",
    "fa-paper-plane-o", "fa-paper-plane-o",
    "fa-anchor", "fa-anchor",
    "fa-cube", "fa-cube",
    "fa-bolt", "fa-bolt",
    "fa-leaf", "fa-leaf",
    "fa-bicycle", "fa-bicycle",
    "fa-bomb", "fa-bomb"
];

// Generating HTML template literal for Card 
function generateCard(card) {
    return `<li class="card"><i class="fa ${card}"></i></li>`
};


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


//Global Varibles
const deck = document.querySelector('.deck');


// Display the shuffled cards on the page
function shuffleDeck() {
    const cardHTML = shuffle(cards.map(function (card) {
        return generateCard(card);
    }));

    deck.innerHTML = cardHTML.join(' ');
};

shuffleDeck();
// 2nd Commit : Display shuffled cards on the Page

// Add Event Listener to card
deck.addEventListener('click', event => {
    const clickTarget = event.target;
    if(clickTarget.classList.contains('card')) {
        clickTarget.classList.toggle('open');
        clickTarget.classList.toggle('show');
    }
});
