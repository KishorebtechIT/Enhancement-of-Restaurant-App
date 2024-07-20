The goal of this enhancement project is to understand the existing Restaurant code, and add the given functionalities within the existing Restaurant code.

Your existing Restaurant app, which you have developed, allows users to view a list of dish items in different tabs of menu items. Users can also increase or decrease the quantity of a particular dish item.

#### Mobile Interface

<a href="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464567/Restaurant_page_movie-view_dqv1fl.png" target=_blank_>
    <div style="text-align: center;">
        <img src="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688465518/Restaurant_page_movie-view_2_p6r4up.png" alt="restaurant-app" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
    </div>
</a>

<br/>
#### Web Interface
<a href="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464566/Restaurant_page_web-view_l7snar.png" target=_blank_ >
    <div style="text-align: center;">
        <img src="https://res.cloudinary.com/dupvp9gj9/image/upload/v1688464566/Restaurant_page_web-view_l7snar.png" alt="restaurant-app" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
    </div>
</a>

<h2>Enhancement Functionality</h2>
Functionality to be added
Keep the existing code in Home Route and add a Login Route and a Cart Route to the application.
Login Route Functionality
When a valid username and password are provided and the Login button is clicked, navigate the user to the Home route. Else, display the error message. Use js-cookie to maintain Cookies for authentication.
If an authenticated user attempts to access either the Home Route or Cart Route, they should be redirected to the corresponding route. Else, should be redirected to the Login Route.

<h2>Home Route </h2>

When the Cart icon button in the header is clicked, then the page should be navigated to the Cart route.
When the restaurant name in the header is clicked, then the page should be navigated to the Home route.
Add a Logout button in the header of the Home Route and add corresponding functionality.
Add a feature to add items to the cart with a click of a button. The ADD TO CART button should be displayed only if the dish items are available and the dish quantity is greater than 0.
When the ADD TO CART button of a particular dish item is clicked, that dish item should be added to the Cart Route and the count should be increased by one at the cart icon.
When the user clicks the ADD TO CART button multiple times, the count should not increase at the cart icon as it is the same item and count in the Cart Route should be increased for that particular dish.

<h2>Cart Route Functionality</h2>

The Cart Route should have a header similar to the Home Route.
Add a Remove All button in the Cart Route. Implement this by adding a button.
When a user clicks on the Remove All button, all the cart items should be removed from the cart and an Empty Cart Image should be displayed.
Each cart item on the cart page should include the dish name, dish image, dish price, plus (+) button, minus (-) button, quantity of the dish item, and a remove button.
In each cart item in the cart
When the plus button is clicked, then the quantity of the dish should be increased and when minus button is clicked, then the quantity of the dish should be decreased.
When the quantity of a dish reaches zero, the dish item should be removed from the cart.
Based on the quantity of the dish, the dish price should be updated accordingly.
When a user clicks on the remove button, the cart item should be removed from the cart list.
You need to use React Context to maintain that sync between the Home Route and Cart Route. Use the context as given below for the test cases to pass.

The CartContext has an object with the following properties
cartList- this key stores the cart items
removeAllCartItems- this method is used to remove all the cart items in the cartList
addCartItem- this method adds the cart item to the cartList
removeCartItem- this method removes the cart item from the cartList
incrementCartItemQuantity- this method increases the quantity of a dish in the cartList
decrementCartItemQuantity- this method decreases the quantity of a dish in the cartList
Make sure your application maintains a good CSS styling.

#### API:

<a href="https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details" target=_blank_ >https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details</a>

#### Instructions:


<p>Download dependencies by running npm install</p> <br/>
<p></p>Start up the app using npm start </p>
