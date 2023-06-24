document.addEventListener('DOMContentLoaded', function() {
    var chatDisplay = document.getElementById('chat-display');
    var userInput = document.getElementById('user-input');
    var submitBtn = document.getElementById('submit-btn');

    submitBtn.addEventListener('click', function() {
        var product = userInput.value.trim();
        if (product !== '') {
            displayMessage('User: ' + product);
            var price = getProductPrice(product);
            displayMessage('Bot: The price of ' + product + ' is: ' + price);
            userInput.value = '';
        }
    });

    function getProductPrice(productName) {
        // Replace this with your own logic to retrieve prices from a database or API
        var prices = {
            'blackforest','whiteforest': 350-halfkg,
            'redvelvet': 450-halfkg,
            'chocofudge': 550-halfkg,
            'fruitcream': 500-halfkg
        };
        return prices[productName.toLowerCase()] || 'Sorry, I don\'t have the price for that product.';
    }

    function displayMessage(message) {
        var newMessage = document.createElement('div');
        newMessage.textContent = message;
        chatDisplay.appendChild(newMessage);
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }
});
