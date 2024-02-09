// Function to fetch a random quote from the Quotable API
async function getRandomQuote() {
  const apiUrl = 'https://api.quotable.io/random';

  try {
      // Fetch data from the API
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Display the quote and author on the webpage
      const quoteText = document.getElementById('quote-text');
      const quoteAuthor = document.getElementById('quote-author');

      quoteText.textContent = `"${data.content}"`;
      quoteAuthor.textContent = `- ${data.author}`;
  } catch (error) {
      console.error('Error fetching the quote:', error);
  }
}
  