// Startsida

const playButton = document.getElementById('play-button');
const goatImg = document.getElementById('goat-img');
const gamesButtons = document.getElementById('gamesButtons');

playButton.addEventListener('click', function() {
    goatImg.style.width = '30%';
    goatImg.style.top = '5%';
    goatImg.style.alignSelf = 'flex-start'

    playButton.style.display = "none";

    gamesButtons.style.opacity = '1';
});

function getRandomQuote(quotes) {
return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateQuote() {
  var quotes = [
      '"Världens roligaste spel i världen"',
      '"Det här spelet botade min cancer"',
      '"Jag har DAMP!!"',
      '"Ringmuren är ett svartbygge och därför ska den rives!"',
  ];

  var quote = getRandomQuote(quotes);
  document.getElementById("quote").innerHTML = quote;
  
  // Set timeout to update the quote again after 5 seconds (5000 milliseconds)
  setTimeout(updateQuote, 5000);
}

// Call updateQuote initially to start the process
updateQuote();

