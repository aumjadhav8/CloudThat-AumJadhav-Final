const quotes = [
    "India is a land of diversity, and this diversity is its strength. - Pranab Mukherjee",
     "Unity in diversity is India's strength. There is simplicity in every Indian. There is unity in every corner of India. - Narendra Modi",
    "India is a song to which every god has contributed a note. - Rabindranath Tagore",
    "We are Indians, firstly and lastly. - B.R. Ambedkar",
    "The essential thing in religion is making the heart pure. The kingdom of heaven is within us but only pure heart can see the 'king'! - - Bhagat Singh"
];

const quoteText = document.getElementById("quoteText");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
quoteText.textContent = getRandomQuote();
