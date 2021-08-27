const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(Response => Response.json())
        .then(data => displayQuote(data))
}

const displayQuote = data => {
    const blockQuote = document.getElementById('block-quote');
    blockQuote.innerText = data.quote;
}