function generateQuote(){
    fetch('https://api.quotable.io/random').then(response => response.json()).then(data =>{
        const quote = data.content;
        const character = data.author;

        document.getElementById("quote").innerHTML= `"${quote}"-${character}`;
    });
};