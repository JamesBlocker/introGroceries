$(document).ready(function() {

  $('form').submit(function(event) {
    var item1 = $('#order1').val();
    var item2 = $('#order2').val();
    var item3 = $('#order3').val();
    var items = [item1, item2, item3];
    // myArrays.push("someThing");

    // for (var i = 0; i < myArrays.length; i++) {
    //   $('#list').append('<li>' + myArrays[i] + '</li>');
    //   alert(myArrays[i]);
    //   alert(myArray)
    // }

    var upperItems = items.map(function(item) {
      return item.toUpperCase();
      alert(upperItems);
    });

    event.preventDefault();
  });
});
