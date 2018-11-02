function Pizza(toppings, size){
  this.toppings = toppings,
  this.size = size
}

// Pizza.prototype.addToppings = function(topping){
//   this.toppings.push(topping);
// }

Pizza.prototype.toppingsBasedAmount = function(toppings){
  for (var i = 1; i <= toppings.length; i++){
    if(toppings[i] != ""){
      var toppingPrice = 0;
      toppingPrice = i * 3;
    }
    return toppingPrice;
  }
  // if (noOfToppings === 4){
  //   return 7;
  // } else if (noOfToppings === 3){
  //   return 6;
  // } else if (noOfToppings === 2){
  //   return 5;
  // } else if (noOfToppings === 1){
  //   return 4;
  //   alert("4")
  // }else {
  //   return 0;
  //   alert ("Please select the no. of toppings");
  // }
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
  var totalCost = this.tBasedAmt + parseInt(this.sizeBasedAmt);
  $("#displayTotalCost").text(totalCost);
}


var pizza;
$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var inputtedNoToppings = parseInt($("#noToppings").val());
    var toppingArray = [];
    $("input:checkbox[name=toppingCheck]:checked").each(function(){
     var inputtedToppings = $(this).val();
     toppingArray.push(inputtedToppings);
     //alert(pizza.toppings);
     $("#displayToppings").append(inputtedToppings + ",");
   });

   var inputtedSize =$("input:radio[name=sizePizza]").val();
   $("#displayName").text(inputtedName);
   $("#displaySize").append(inputtedSize);

   pizza = new Pizza(toppingArray,inputtedSize);

   var toppingBasedAmt = pizza.toppingsBasedAmount(toppingArray);
   console.log(toppingBasedAmt);
   var sizeBasedAmt = pizza.sizeBasedAmount(inputtedSize);
   console.log(sizeBasedAmt);
   pizza.calculateCost(toppingBasedAmt, sizeBasedAmt);
  });

});
