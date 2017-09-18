$(document).ready(function() {

  $('form').submit(function(event) {

    var item1 = $('#order1').val();
    var item2 = $('#order2').val();
    var item3 = $('#order3').val();
    var items = [item1, item2, item3];
    var upperItems = [];
    //var sortItems = [];

// for (var index = 0; index < upperItems.length; index += 1) {
//
// }
    items.forEach(function(item) {
      upperItems.push(item.toUpperCase());
    });
    var sortItems = upperItems.sort();
    sortItems.forEach(function(item) {
      $("#list").append("<li>" + item + "</li>");
    });

    $('form').hide();

    // items.forEach(function(item) {
    // upperItems.push(item.toUpperCase());

//    upperItems.forEach(function(item) {
//      $("#list").append("<li>" + item + "</li>");

//     sortItems.push(upperItems.sort());
//     var upSort = function($('#list').append('<li>' + item + '</li>')) {
//     var upSort = function($('#list').append('<li>' + item + '</li>')) {

//     }

//     $('#list').append('<li>' + item + '</li>');

//   alert(upperItems.sort());

event.preventDefault();
  });
});
