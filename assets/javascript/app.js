
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAKvSy0vMzl8iT6BYPP33usCO_QwI6qrqc",
    authDomain: "train-times-59930.firebaseapp.com",
    databaseURL: "https://train-times-59930.firebaseio.com",
    projectId: "train-times-59930",
    storageBucket: "",
    messagingSenderId: "450480529914"
  };
  firebase.initializeApp(config);



$('#submit').on('click', function() {

    var train = $('#trainName').val();

    var desti = $('#destination').val();

    var time = $('#trainTime').val();

    var freq = $('#frequency').val();

    firebase.database().ref().push({
        name: train,
        destination: desti,
        time: time,
        frequency: freq,
    })

    $('#formId')[0].reset();

});

firebase.database().ref().on("value", function(snapshot){
    $('.foo').empty();
    snapshot.forEach (function(child) {
        
        var tableRow = $("<tr>");
        tableRow.addClass("foo");
        tableRow.append($("<td>").text(child.val().name));
        tableRow.append($("<td>").text(child.val().destination));
        tableRow.append($("<td>").text(child.val().time));
        tableRow.append($("<td>").text(child.val().frequency));
        $('#mytable').append(tableRow);

})

});

