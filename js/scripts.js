function Pizza(toppings, size){
  this.toppings = toppings,
  this.size = size
}

Pizza.prototype.toppingsBasedAmount = function(toppings){
    if(toppings.length != 0){
      var toppingPrice = toppings.length *3;
      return toppingPrice;
    }else {
      alert("please choose your Toppings !!")
    }
  }

Pizza.prototype.sizeBasedAmount = function(size){
  if (size === "Small"){
    return 4;
  } else if(size === "Medium"){
    return 5;
  } else if(size === "Large"){
    return 6;
  } else {
    alert ("Please select a size that you would prefer");
  }
}

Pizza.prototype.calculateCost = function(tBasedAmt, sizeBasedAmt){
  var totalCost =tBasedAmt +sizeBasedAmt;
  $("#displayTotalCost").text(totalCost);
}

var pizza;
$(document).ready(function(){
  $("#formid").submit(function(event){
    event.preventDefault();
    $("#show-Bill").show();
    var inputtedName = $("#name").val();
    var inputtedNoToppings = parseInt($("#noToppings").val());
    var toppingArray = [];
    $("input:checkbox[name=toppingCheck]:checked").each(function(){
     var inputtedToppings = $(this).val();
     toppingArray.push(inputtedToppings);
     $("#displayToppings").append(inputtedToppings + ",");
   });

   var inputtedSize =$("input:radio[name=sizePizza]:checked").val();
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
