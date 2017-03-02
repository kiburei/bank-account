// User Interface Logic

// Get from inputs
$(document).ready(function() {
  // User registration submit form
  $("#registration").submit(function(event){
    debugger;
    event.preventDefault();
    var name = $("#name").val();
    var initDepo = parseInt($("#initDepo").val());

  });

  // Deposit form
  $("#deposit").submit(function(event){
    debugger;
    event.preventDefault();
    var deposit = parseInt($("#cashin").val());
  });

  // Withdraw form
  $("#withdraw").submit(function(event){
    debugger;
    event.preventDefault();
    var withdraw = parseInt($("#cashout").val());
  });

});


//Business Logic
