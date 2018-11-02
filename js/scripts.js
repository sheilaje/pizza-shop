function Pizza(toppings, size){
  this.toppings = [],
  this.size = size
}

Pizza.prototype.addToppings = function(topping){
  this.toppings.push(topping);
}
