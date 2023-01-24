(function() {
    $('.secondQuestion').hide();
    const peopleInput = $('#peopleInput');
    peopleInput.focus(); //$('#peopleInput').focus();
    const pizzaInput = $('#pizzaInput');
  
    //Three functions for outputting the result
    const firstOutput = function(a, b) {
      if (b > 1) {
        $('#firstStr').text(a + " people with " + b + " pizzas")
      } else {
        $('#firstStr').text(a + " people with " + b + " pizza")
      }
    }
    const getNumberOfPiecesPerPerson = (a, b) => Math.floor((b * 8) / a);
    const secondOutput = function(a) {
      if (a > 1) {
        $('#secondStr').text("Each person gets " + a + " pieces of pizza")
      } else {
        $('#secondStr').text("Each person gets " + a + " piece of pizza")
      }
    }
    const getNumberOfLeftoverPieces = (a, b) => (b * 8) % a;
    const thirdOutput = function(a) {
      if (a > 1) {
        $('#thirdStr').text("There are " + a + " leftover pieces")
      } else {
        $('#thirdStr').text("There is " + a + " leftover pieces")
      }
    }
  
    //Action after pressing the enter key on the first line
    peopleInput.bind("enterKey", function(e) {
      $('.secondQuestion').show();
      pizzaInput.focus();
    });
    //combine $('#peopleInput') and $('#pizzaInput') - could also be $('#peopleInput, #pizzaInput')
    $('input').keyup(function(e) {
      if (e.keyCode == 13) {
        $(this).trigger("enterKey")
      }
    });
  
    //Action after pressing the enter key on the second line
    pizzaInput.bind("enterKey", function(e) {
      peopleInput.focus();
      const numPeople = peopleInput.val();
      const numPizzas = pizzaInput.val();
      firstOutput(numPeople, numPizzas);
      setTimeout(function() {
        secondOutput(getNumberOfPiecesPerPerson(numPeople, numPizzas));
      }, 300);
      setTimeout(function() {
        thirdOutput(getNumberOfLeftoverPieces(numPeople, numPizzas));
      }, 600);
    });
  });