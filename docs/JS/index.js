

var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken”",
    author: "-Oscar Wilde-",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "-Marcus Tullius Cicero-",
  },
  {
    quote: "“The truth is rarely pure and never simple.”",
    author: "-Oscar Wilde-",
  },
  {
    quote:
      "“Perhaps one did not want to be loved so much as to be understood.”",
    author: "-George Orwell-",
  },
  {
    quote: "“Facts do not cease to exist because they are ignored.” ",
    author: "-Aldous Huxley-",
  },
  {
    quote: "“I am not pretty. I am not beautiful. I am as radiant as the sun.”",
    author: "-Suzanne Collins-",
  },
  {
    quote: "“So many books, so little time.”",
    author: "-Frank Zappa-",
  },
];

var quoteText = document.getElementById("quote");
var authorText = document.getElementById("author");

function randomqoute() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var currentQuote = quotes[randomIndex];
  document.getElementById("quote").innerHTML=currentQuote.quote;
  document.getElementById("author").innerHTML=currentQuote.author;
}
