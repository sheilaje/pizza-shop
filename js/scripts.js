function Pizza(toppings, size){
  this.toppings = [],
  this.size = size
}

Pizza.prototype.addToppings = function(topping){
  this.toppings.push(topping);
}

Pizza.prototype.toppingsBasedAmount = function(){
  if (noOfToppings === 4){
    return 7;
  } else if (noOfToppings === 3){
    return 6;
  } else if (noOfToppings === 2){
    return 5;
  } else if (noOfToppings === 1){
    return 4;
  }else {
    return 0;
    alert ("Please select the no. of toppings");
  }
}

Pizza.prototype.sizeBasedAmount = function(){
  if (size == "s"){
    return 4;
  } else if(size == "M"){
    return 5;
  } else if(size == "L"){
    return 6;
  }else if(size == "XL"){
    return 7;
  } else {
    return 0;
    alert ("Please select a size that you would prefer");
  }
}

Pizza.prototype.calculateCost = function(tBasedAmt, size){
  var totalCost = this.noOfToppings + size;
}

$(document).ready(function(){
  
});
