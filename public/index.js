let enlightenButton = document.getElementById("enlighten");
enlightenButton.addEventListener("click", function(){
    fetch("/random-quote")
        .then(response => response.json())
        .then(data => {
            document.getElementById("quote").textContent = data.quote;
            document.getElementById("author").textContent = data.author;
        });
});