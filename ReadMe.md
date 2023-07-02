## Price Enquiry Chatbot Documentation

The Price Enquiry Chatbot is a simple chat interface that allows users to inquire about the prices of various products. It provides a user-friendly interface where users can enter a product name, and the chatbot will display the corresponding price.

### Files

The chatbot example consists of the following files:

- `index.html`: The HTML file that defines the structure of the chatbot interface.
- `style.css`: The CSS file that contains the styling rules for the chatbot interface.
- `chatbot.js`: The JavaScript file that handles the logic for capturing user input, retrieving the price, and displaying messages.

### Usage

To use the Price Enquiry Chatbot, follow these steps:

1. Download or create the `index.html`, `style.css`, and `chatbot.js` files in the same directory.
2. Open the `index.html` file in a web browser.
3. You will see the chatbot interface displayed in the browser.
4. Enter a product name in the input field and click the "Send" button.You can select product name from the list displayed above
5. The chatbot will display a message with the price of the product, if available.
6. Repeat steps 4-5 to inquire about prices for different products.
7. To exit the chatbot, close the web browser or navigate away from the page.

### Customization

You can customize the chatbot example according to your specific requirements. Here are a few areas you can modify:

- **Product Prices**: In the `getProductPrice()` function in the `script.js` file, you can replace the placeholder product prices with your own logic to retrieve prices from a database or API. Update the `prices` object with the appropriate product names and their corresponding prices.

- **Styling**: The appearance of the chatbot interface can be customized by modifying the CSS rules in the `style.css` file. Feel free to adjust the colors, fonts, sizes, or layout to match your desired design.

- **Behavior**: The chatbot's behavior can be modified by editing the JavaScript code in the `script.js` file. You can extend the functionality to handle additional user inputs, add error handling, integrate with external APIs, or introduce more complex conversational logic.

### Dependencies

The chatbot example does not have any external dependencies. It runs directly in a web browser with HTML, CSS, and JavaScript.

### Compatibility

The Price Enquiry Responsive Chatbot is designed to work in modern web browsers that support HTML5, CSS3, and JavaScript. It has been tested and verified to work on popular browsers such as Google Chrome, Mozilla Firefox, and Microsoft Edge.

Please note that the chatbot example is intended as a basic demonstration and may require additional enhancements, security measures, or optimizations for production-level use.

It is a simple Chatbot Skeleton project, Created basecode Logic from ChatGPT AI and enhanced it myself
---

That concludes the documentation for the Price Enquiry Chatbot example. Remember to customize and expand upon the code as needed to fit your specific requirements and use cases.

## Documentation for Price Enquiry Chatbot App

# Price Enquiry Chatbot

## Overview
The Price Enquiry Chatbot is a web-based chatbot developed by Jumana Haseen. The chatbot is designed to assist users in obtaining price information for various products or services. This documentation provides an overview of the project structure, dependencies, customization, and usage instructions.

## Project Structure
The project structure for the Price Enquiry Chatbot is as follows:

```
PriceEnquiry-Chatbot/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── chatbot.js
└── images/
    ├── chatbot-icon.png
    ├── product1.jpg
    └── ...
```

- `index.html`: The main HTML file that serves as the entry point to the chatbot application.
- `css/style.css`: The CSS file containing custom styles for the chatbot interface.
- `js/main.js`: The main JavaScript file responsible for handling user interactions and chatbot functionality.
- `js/chatbot.js`: The JavaScript file containing the chatbot logic and response generation.
- `images/`: A directory containing images used in the chatbot interface.

## Getting Started
To use the Price Enquiry Chatbot locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/jumana07/PriceEnquiry-Chatbot.git
   ```

2. Open the `index.html` file in a web browser.

## Dependencies
The Price Enquiry Chatbot utilizes the following dependencies:

- None.

## Customization
Jumana Haseen has developed the Price Enquiry Chatbot with a basic interface and functionality. The project's customization options include:

- Customization of the CSS (style.css) file to modify the appearance, colors, and layout of the chatbot interface.
- Utilization of the JavaScript files (`main.js` and `chatbot.js`) to add additional functionality or customize the chatbot behavior and responses.

## Usage
To interact with the Price Enquiry Chatbot, follow these instructions:

1. Open the `index.html` file in a web browser.
2. The chatbot interface will be displayed, allowing you to enter queries or questions.
3. Type your price enquiry or product-related question in the chatbot input field.
4. The chatbot will generate a response with relevant price information or provide appropriate instructions.
5. Continue the conversation by entering further queries or questions.

## Examples
Here is a screenshot showcasing the Price Enquiry Chatbot:

![Chatbot Interface](/path/to/chatbot-interface.png)
*Description: This screenshot showcases the chatbot interface. Users can interact with the chatbot by entering queries or questions.*

## Contributing
Contributions to the Price Enquiry Chatbot project are not currently open. However, feel free to contact Jumana Haseen for any feedback or suggestions.

## License
The Price Enquiry Chatbot is not currently licensed.

## Resources
Here are some resources that were helpful during the development of the Price Enquiry Chatbot:

- Chatbot Development Guide: [link](https://www.sitepoint.com/how-to-build-your-own-ai-chatbot-from-scratch/)

## Author
The Price Enquiry Chatbot was developed by Jumana Haseen.

## Conclusion
The Price Enquiry Chatbot provides a simple and interactive way for users to obtain price information and product-related queries.
