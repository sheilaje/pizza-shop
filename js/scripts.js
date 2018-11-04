function Pizza(toppings, size){
  this.toppings = toppings,
  this.size = size
}

Pizza.prototype.toppingsBasedAmount = function(){
    if(this.toppings.length != 0){
      var toppingPrice = this.toppings.length *3;
      return toppingPrice;
    }else {
      alert("please choose your Toppings !!")
    }
  }

Pizza.prototype.sizeBasedAmount = function(){
  if (this.size === "Small"){
    return 4;
  } else if(this.size === "Medium"){
    return 5;
  } else if(this.size === "Large"){
    return 6;
  } else {
    alert ("Please select a size that you would prefer");
  }
}

Pizza.prototype.calculateCost = function(tBasedAmt, sizeBasedAmt){
  var totalCost =tBasedAmt +sizeBasedAmt;
  $("#displayTotalCost").html(totalCost);
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
     $("#displayToppings").text(inputtedToppings + ",");
   });

   var inputtedSize =$("input:radio[name=sizePizza]:checked").val();
   $("#displayName").text(inputtedName);
   $("#displaySize").text(inputtedSize);

   pizza = new Pizza(toppingArray,inputtedSize);

   var toppingBasedAmt = pizza.toppingsBasedAmount();
   var sizeBasedAmt = pizza.sizeBasedAmount();
   pizza.calculateCost(toppingBasedAmt, sizeBasedAmt);
  });
});
