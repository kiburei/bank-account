// User Interface Logic

// Get from inputs
$(document).ready(function() {
  // User registration submit form
  $("#registration").submit(function(event){
    // debugger;
    event.preventDefault();
    var client = [];
    var name = $("#name").val();
    var initDepo = parseInt($("#initDepo").val());

    var client = client.push(new Account(name, initDepo));


  });

  // Deposit form
  $("#deposit").submit(function(event){
    debugger;
    event.preventDefault();
    var deposit = parseInt($("#cashin").val());

    var balance = transactions(deposit);
    alert("New balance is Kes" + balance);
  });

  // Withdraw form
  $("#withdraw").submit(function(event){
    debugger;
    event.preventDefault();
    var withdraw = parseInt($("#cashout").val());
  });

});


//Business Logic

// registration constractor
function Account(name, amount) {
  this.name = name;
  this.initDepo = amount;

};

//handle transactions

Account.prototype.transactions = function(amount) {
  var bal = this.initDepo + deposit;

  return bal;


}
