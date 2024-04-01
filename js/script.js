var quotes = [
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },

  {
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "― Mahatma Gandhi",
  },

  {
    quote:
      "“Accept yourself, love yourself, and keep moving forward. If you want to fly, you have to give up what weighs you down.”",
    author: "― Roy T. Bennett, The Light in the Heart",
  },

  {
    quote: "“Turn your wounds into wisdom.”",
    author: "― Oprah Winfrey",
  },
  {
    quote: "“The only true wisdom is in knowing you know nothing.”",
    author: "― Socrates",
  },
  {
    quote:
      "“Be brave to stand for what you believe in even if you stand alone.”",
    author: "― Roy T. Bennett, The Light in the Heart",
  },
  {
    quote:
      "“Dream your own dreams, achieve your own goals. Your journey is your own and unique.”",
    author: "― Roy T. Bennett, The Light in the Heart",
  },
];

function displayQuote() {
  var randomQuote = Number.parseInt(Math.random() * quotes.length + 1);
  document.getElementById(
    "quoteText"
  ).textContent = `${quotes[randomQuote].quote}`;
  document.getElementById(
    "author"
  ).textContent = `${quotes[randomQuote].author}`;
}
