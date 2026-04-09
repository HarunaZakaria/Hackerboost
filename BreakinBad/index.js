const displayQuoteEle = document.querySelector(".display-quote");
const quoteCounterEle = document.querySelector(".quote-counter");
const quoteBtnEle = document.querySelector(".quote-btn");
const authorEle = document.querySelector(".author");

async function getQuoteFromAPI() {
  const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
  const data = await res.json();
  const quote = data[0].quote;
  const author = data[0].author;
  displayQuoteEle.textContent = quote;
  authorEle.textContent = author;
}
quoteBtnEle.addEventListener("click", () => {
  getQuoteFromAPI();
});

getQuoteFromAPI();
