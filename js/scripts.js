function Pizza(toppings, size){
  this.toppings = [],
  this.size = size
}

Pizza.prototype.addToppings = function(topping){
  this.toppings.push(topping);
}

Pizza.prototype.toppingsBasedAmount = function(noOfToppings){
  if (noOfToppings === 4){
    return 7;
  } else if (noOfToppings === 3){
    return 6;
  } else if (noOfToppings === 2){
    return 5;
  } else if (noOfToppings === 1){
    return 4;
    alert("4")
  }else {
    return 0;
    alert ("Please select the no. of toppings");
  }
}

Pizza.prototype.sizeBasedAmount = function(size){
  if (size == "Small"){
    return 4;
  } else if(size == "Medium"){
    return 5;
  } else if(size == "Large"){
    return 6;
  } else {
    return 0;
    alert ("Please select a size that you would prefer");
  }
}

Pizza.prototype.calculateCost = function(tBasedAmt, sizeBasedAmt){
  var totalCost = this.noOfToppings + this.size;
  $("#displayTotalCost").text(totalCost);
}

$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedNoToppings = parseInt($("#noToppings").val());
    $("input:checkbox[name=toppingCheck]:checked").each(function(){
     var inputtedToppings = $(this).val();
     $("#displayToppings").append(inputtedToppings + ",");
   });
   var inputtedSize = $("input:radio[name=sizePizza]").val();
   $("#displayName").text(inputtedName);
   $("#displaySize").append(inputtedSize);

   var pizza = new Pizza();
   var toppingBasedAmt = pizza.toppingsBasedAmount(inputtedNoToppings);
   var sizeBasedAmt = pizza.sizeBasedAmount(inputtedSize);
   pizza.calculateCost(toppingBasedAmt, sizeBasedAmt);
  });

});
