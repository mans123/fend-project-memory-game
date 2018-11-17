 //1st Commit : Initial Commit
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
let toggledCards = [];
let moves = 0;
let time = 0;
let clockOff = true;
let clockId;




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
    
    if(isClickValid(clickTarget)) {
        if(clockOff) {
            startClock();
            clockOff = false;
        }

        toggleCard(clickTarget);
        addToggleCard(clickTarget);
        
        if(toggledCards.length === 2) {
            checkForMatch(clickTarget);
            addMove();
            checkScore();
        }
    }
});
//3rd Commit : Add Event Listener to a card

// Add open and show class names to cards function
function toggleCard(clickTarget) {
    clickTarget.classList.toggle('open');
    clickTarget.classList.toggle('show');
}

// Storing toggle cards in an Array
function addToggleCard(clickTarget) {
    toggledCards.push(clickTarget);
}

// Checking Two cards are Matching
function checkForMatch() {
    if (toggledCards[0].firstElementChild.className === toggledCards[1].firstElementChild.className) {
        toggledCards[0].classList.toggle('match');
        toggledCards[1].classList.toggle('match');
        toggledCards = [];
        // matched++;
    } else {
        setTimeout(() => {
            toggleCard(toggledCards[0]);
            toggleCard(toggledCards[1]);
            toggledCards = [];
        }, 1000);
    }
}

// Checkin click is valid
function isClickValid(clickTarget) {
    return (
        clickTarget.classList.contains('card') && !clickTarget.classList.contains('match') && toggledCards.length < 2 && !toggledCards.includes(clickTarget)
    );
}
//4th Commit : Add Match class name and checking two cards are matching

// Add Moves to the Page
function addMove() {
    moves++;
    const movesText = document.querySelector('.moves');
    movesText.innerHTML = moves;
}

// Check Score for hiding a Star
function checkScore() {
    if(moves === 16 || moves === 24) {
        hideStar();
    }
}

// Hiding a star from page
function hideStar() {
    const starList = document.querySelectorAll('.stars li');
    for (star of starList) {
        if(star.style.display = 'none'){
            star.style.display = 'none';
            break;
        }
    }
}
//5th Commit: Add Moves and Score to the page


// Start timer
function startClock() {
    clockId = setInterval(() => {
        time++;
        displayTime();
    }, 1000);
}

//Add Clock to the page
function displayTime() {
    const clock = document.querySelector('.clock');
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    clock.innerHTML = time;
    if (seconds < 10) {
        clock.innerHTML = `${minutes}:0${seconds}`;
    }else {
        clock.innerHTML = `${minutes}:${seconds}`;
    }
}

//Stop timer
function stopClock() {
    clearInterval(clockId);
}
// 6th Commit : Add timer to page