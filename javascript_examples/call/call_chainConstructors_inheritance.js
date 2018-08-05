/*
You can use call to chain constructors for an object, similar to Java. In the following example, 
the constructor for the Product object is defined with two parameters, name and price. 
Two other functions Food and Toy invoke Product passing this and name and price. 
Product initializes the properties name and price, both specialized functions define the category.
*/

// used similar to a a base class in Java
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  // Food extends Product
  function Food(name, price) {
    // "borrow" properties of Product for use on the Food  
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  // Toy extends product
  function Toy(name, price) {
    // "borrow" properties of Product for use on the Toy  
    Product.call(this, name, price);
    this.category = 'toy';
  }
  
  var cheese = new Food('feta', 5);
  console.log("cheese: ", cheese.name, cheese.price, cheese.category); // --output: feta 5 food
  var fun = new Toy('robot', 40);
  console.log("toy: ", fun.name, fun.price, fun.category); // -- output: robot 40 toy